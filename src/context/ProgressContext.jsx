import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db, firebaseConfigured } from '../lib/firebase'
import { useAuth } from './AuthContext'
import { domains } from '../data/curriculum'
import { roadmaps } from '../data/roadmaps'

const ProgressContext = createContext(null)
const LOCAL_KEY = 'cs-lab-progress-v2'
const progressIds = [...domains, ...roadmaps].map(item => item.id).concat('project-universe')
const blank = () => Object.fromEntries(progressIds.map(id => [id,{concepts:{},projects:{}}]))
function loadLocal() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LOCAL_KEY) || localStorage.getItem('cs-lab-progress-v1') || '{}')
    return {...blank(), ...parsed}
  } catch { return blank() }
}
export function ProgressProvider({children}) {
  const {user} = useAuth()
  const [progress,setProgress] = useState(loadLocal)
  const [syncState,setSyncState] = useState(firebaseConfigured && user ? 'syncing' : 'local')

  useEffect(() => {
    if (!firebaseConfigured || !user) { setProgress(loadLocal()); setSyncState('local'); return }
    setSyncState('syncing')
    const ref = collection(db,'users',user.uid,'domains')
    const unsub = onSnapshot(ref, snapshot => {
      const next = {...blank(), ...loadLocal()}
      snapshot.forEach(item => { next[item.id] = {...next[item.id], ...item.data()} })
      setProgress(next)
      localStorage.setItem(LOCAL_KEY, JSON.stringify(next))
      setSyncState('saved')
    }, () => setSyncState('offline'))
    return unsub
  },[user])

  useEffect(() => { localStorage.setItem(LOCAL_KEY,JSON.stringify(progress)) },[progress])

  const persistDomain = async (domainId, nextDomain) => {
    if (firebaseConfigured && user) {
      setSyncState('saving')
      try { await setDoc(doc(db,'users',user.uid,'domains',domainId),nextDomain,{merge:true}); setSyncState('saved') }
      catch (error) { setSyncState('offline'); throw error }
    } else setSyncState('local')
  }
  const setConceptStatus = async (domainId, conceptId, status) => {
    const next = {...(progress[domainId]||{concepts:{},projects:{}}), concepts:{...(progress[domainId]?.concepts||{})}}
    if (status === 'not-started') delete next.concepts[conceptId]
    else next.concepts[conceptId] = status
    setProgress(p => ({...p,[domainId]:next}))
    await persistDomain(domainId,next)
  }
  const setProjectUrl = async (domainId, projectId, url) => {
    const next = {...(progress[domainId]||{concepts:{},projects:{}}), projects:{...(progress[domainId]?.projects||{}),[projectId]:url}}
    setProgress(p => ({...p,[domainId]:next}))
    await persistDomain(domainId,next)
  }
  const importProgress = data => setProgress({...blank(),...data})
  const exportProgress = () => JSON.stringify({exportedAt:new Date().toISOString(),progress},null,2)
  const value = useMemo(() => ({progress,setConceptStatus,setProjectUrl,exportProgress,importProgress,syncState}),[progress,syncState])
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}
export const useProgress = () => useContext(ProgressContext)
