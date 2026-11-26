import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, firebaseConfigured, googleProvider } from '../lib/firebase'

const AuthContext = createContext(null)
export function AuthProvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(firebaseConfigured)
  useEffect(() => {
    if (!firebaseConfigured) { setLoading(false); return }
    return onAuthStateChanged(auth, value => { setUser(value); setLoading(false) })
  }, [])
  const value = {
    user, loading, firebaseConfigured,
    signInGoogle: () => signInWithPopup(auth, googleProvider),
    signInEmail: (email,password) => signInWithEmailAndPassword(auth,email,password),
    signUpEmail: (email,password) => createUserWithEmailAndPassword(auth,email,password),
    logout: () => firebaseConfigured ? signOut(auth) : Promise.resolve(),
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)
