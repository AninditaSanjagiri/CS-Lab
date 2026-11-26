import { useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import Header from './components/Header'
import AuthScreen from './components/AuthScreen'
import Home from './pages/Home'
import DomainPage from './pages/Domain'
import ProjectUniverse from './pages/ProjectUniverse'
import NotFound from './pages/NotFound'
import InformationPage, { informationRoutes, informationSeo } from './pages/Information'
import SiteFooter from './components/SiteFooter'
import { domains } from './data/curriculum'
import { roadmaps } from './data/roadmaps'

function Analytics(){
  const enabled=import.meta.env.VITE_ENABLE_ANALYTICS==='true'
  const [consent,setConsent]=useState(()=>{try{return localStorage.getItem('cs-lab-analytics-consent')||'unset'}catch{return 'unset'}})
  const [manage,setManage]=useState(false)
  useEffect(()=>{const open=()=>setManage(true);window.addEventListener('cs-lab-open-analytics-preferences',open);return()=>window.removeEventListener('cs-lab-open-analytics-preferences',open)},[])
  useEffect(()=>{
    if(!enabled||consent!=='accepted') return
    window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)}
    const script=document.createElement('script'); script.defer=true; script.src='/_vercel/insights/script.js'; script.dataset.csLabAnalytics='true'; document.head.appendChild(script)
    return ()=>{script.remove()}
  },[enabled,consent])
  if(!enabled||(consent!=='unset'&&!manage)) return null
  const choose=value=>{try{localStorage.setItem('cs-lab-analytics-consent',value)}catch{};setConsent(value);setManage(false)}
  return <aside className="analytics-consent" role="dialog" aria-label="Analytics preferences"><div><strong>YOUR CHOICE, YOUR DATA.</strong><p>Optional site analytics can help the site owner understand site use. They stay off unless you opt in.</p></div><button onClick={()=>choose('rejected')}>REJECT NON-ESSENTIAL</button><button onClick={()=>choose('accepted')}>ACCEPT ANALYTICS</button></aside>
}
function Seo({title,description}) {
  useEffect(()=>{
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta=document.createElement('meta'); meta.name='description'; document.head.appendChild(meta) }
    meta.content=description
    const configuredSite=import.meta.env.VITE_SITE_URL?.replace(/\/$/,'')
    let canonical=document.querySelector('link[rel="canonical"]')
    if(configuredSite){if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=configuredSite+window.location.pathname}
    else canonical?.remove()
    let og=document.querySelector('meta[property="og:title"]')
    if (!og) { og=document.createElement('meta'); og.setAttribute('property','og:title'); document.head.appendChild(og) }
    og.content=title
    let ogd=document.querySelector('meta[property="og:description"]')
    if (!ogd) { ogd=document.createElement('meta'); ogd.setAttribute('property','og:description'); document.head.appendChild(ogd) }
    ogd.content=description
  },[title,description])
  return null
}
function ScrollManager(){
  const location=useLocation()
  useEffect(()=>{
    const previous=window.history.scrollRestoration
    window.history.scrollRestoration='manual'
    return ()=>{window.history.scrollRestoration=previous}
  },[])
  useLayoutEffect(()=>{
    if(location.pathname==='/'&&Number.isFinite(location.state?.restoreHomeScrollY)){
      window.scrollTo({left:0,top:location.state.restoreHomeScrollY,behavior:'instant'})
      return
    }
    if(location.hash){
      document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant'})
      return
    }
    window.scrollTo({left:0,top:0,behavior:'instant'})
  },[location.key,location.pathname,location.hash,location.state])
  return null
}
function DisciplineRoute(){
  const {domainId}=useParams(), navigate=useNavigate(), location=useLocation(), domain=domains.find(d=>d.id===domainId)
  if(!domain) return <NotFound/>
  return <><Seo title={`${domain.title} | CS Lab`} description={domain.description}/><DomainPage key={domain.id} domainId={domain.id} onBack={()=>navigate('/',{state:{restoreHomeScrollY:location.state?.fromHomeScrollY}})}/></>
}
function RoadmapRoute({track}){const navigate=useNavigate();return <><Seo title={`${track.title} | CS Lab`} description={track.description}/><DomainPage key={track.id} domainId={track.id} domain={track} onBack={()=>navigate('/')}/></>}
function Shell(){
  const {user,loading,firebaseConfigured}=useAuth(), navigate=useNavigate(), location=useLocation()
  const titles={'/':'YOUR ENGINEERING JOURNEY','/ai-roadmap':'AI ENGINEERING ROADMAP','/data-engineering-roadmap':'DATA ENGINEERING ROADMAP','/projects':'THE PROJECT UNIVERSE'}
  if(loading) return <div className="loading-screen"><span className="loading-mark">CS✳LAB</span><div className="loading-bar"/><p>GETTING YOUR LAB READY…</p></div>
  const publicPaths=[...informationRoutes.map(path=>`/${path}`)]
  const appPaths=location.pathname==='/'||location.pathname.startsWith('/discipline/')||['/ai-roadmap','/data-engineering-roadmap','/projects'].includes(location.pathname)
  if(firebaseConfigured&&!user&&appPaths) return <AuthScreen/>
  return <div className="app-shell"><Analytics/><Header onHome={()=>{navigate('/');window.scrollTo({top:0,behavior:'smooth'})}} onNavigate={path=>{navigate(path);window.scrollTo({top:0,behavior:'instant'})}} activeTitle={titles[location.pathname]|| (publicPaths.includes(location.pathname)?'CS LAB · INFORMATION':'YOUR ENGINEERING JOURNEY')}/><main><Routes>
    <Route path="/" element={<><Seo title="CS✳LAB | Your Personal Engineering Lab" description="Learn computer science, AI and data engineering by building practical projects. Track concepts, master disciplines and publish your work."/><Home onOpenDomain={id=>navigate(`/discipline/${id}`,{state:{fromHomeScrollY:window.scrollY}})} onNavigate={path=>navigate(path)}/></>}/>
    <Route path="/discipline/:domainId" element={<DisciplineRoute/>}/>
    <Route path="/ai-roadmap" element={<RoadmapRoute track={roadmaps[0]}/>}/>
    <Route path="/data-engineering-roadmap" element={<RoadmapRoute track={roadmaps[1]}/>}/>
    <Route path="/projects" element={<><Seo title="Project Universe | CS Lab" description="Build playful and ambitious projects inspired by games, fantasy worlds, music, film and cricket. Map every build to real engineering concepts."/><ProjectUniverse/></>}/>
    {informationRoutes.map(page=>{const [title,description]=informationSeo[page];return <Route key={page} path={`/${page}`} element={<><Seo title={title} description={description}/><InformationPage page={page}/></>}/>})}
    <Route path="*" element={<NotFound/>}/>
  </Routes></main><SiteFooter/></div>
}
export default function App(){return <BrowserRouter><ScrollManager/><AuthProvider><ProgressProvider><Shell/></ProgressProvider></AuthProvider></BrowserRouter>}
