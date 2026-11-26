import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Download, LogOut, Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'

const links = [
  {number:'01',label:'HOME',path:'/'},
  {number:'02',label:'CS ENGINEERING',path:'/#disciplines'},
  {number:'03',label:'AI ENGINEERING ROADMAP',path:'/ai-roadmap'},
  {number:'04',label:'DATA ENGINEERING ROADMAP',path:'/data-engineering-roadmap'},
  {number:'05',label:'PROJECT UNIVERSE',path:'/projects'},
  {number:'06',label:'ABOUT CS LAB',path:'/about'}
]

export default function Header({onHome,activeTitle,onNavigate}) {
  const [open,setOpen] = useState(false)
  const [closing,setClosing] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const {user,logout,firebaseConfigured} = useAuth()
  const {exportProgress,syncState} = useProgress()
  const closeMenu = () => {
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) setOpen(false)
    else setClosing(true)
  }
  const download = () => {
    const blob = new Blob([exportProgress()],{type:'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cs-lab-progress.json'
    a.click()
    URL.revokeObjectURL(url)
  }
  const go = path => {
    closeMenu()
    if(path.includes('#')) {
      const [route,section] = path.split('#')
      onNavigate?.(route || '/')
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})
      }))
    } else onNavigate?.(path)
  }

  useEffect(() => {
    if(!open) return
    const previousBodyOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = event => {
      if(event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }
      if(event.key !== 'Tab') return
      const dialog = dialogRef.current
      if(!dialog) return
      const items = [...dialog.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')].filter(item => item.getClientRects().length)
      if(!items.length) {
        event.preventDefault()
        dialog.focus()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      const activeIndex = items.indexOf(document.activeElement)
      if(event.shiftKey && activeIndex <= 0) {
        event.preventDefault()
        last.focus()
      } else if(!event.shiftKey && (activeIndex === -1 || activeIndex === items.length - 1)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown',onKeyDown)
    return () => {
      document.removeEventListener('keydown',onKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousRootOverflow
      triggerRef.current?.focus()
    }
  },[open])

  return <>
    <header className="site-header">
      <button className="wordmark" onClick={onHome}>CS<span>✳</span>LAB<span className="wordmark-dot">.</span></button>
      <div className="header-center">{activeTitle || 'YOUR ENGINEERING JOURNEY'}</div>
      <div className="header-actions">
        <span className="sync-label"><i className={`sync-dot ${syncState==='offline'?'sync-offline':''}`}/>{firebaseConfigured?(user?(syncState==='saving'?'SAVING…':syncState==='offline'?'OFFLINE':'CLOUD SYNC'):'NOT SIGNED IN'):'LOCAL PREVIEW'}</span>
        <button className="icon-button" title="Export progress" onClick={download}><Download size={17}/></button>
        {firebaseConfigured&&user&&<button className="icon-button desktop-logout" title="Sign out" onClick={logout}><LogOut size={17}/></button>}
        <button ref={triggerRef} className="icon-button menu-trigger" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="site-navigation-overlay" onClick={()=>open?closeMenu():(setClosing(false),setOpen(true))}>{open?<X size={25}/>:<Menu size={25}/>}</button>
      </div>
    </header>
    {open&&<div ref={dialogRef} id="site-navigation-overlay" className={`editorial-menu ${closing?'is-closing':''}`} role="dialog" aria-modal="true" aria-label="Site navigation" tabIndex={-1} onClick={event=>{if(event.target===event.currentTarget)closeMenu()}} onAnimationEnd={event=>{if(closing&&event.target===event.currentTarget)setOpen(false)}}>
        <div className="editorial-menu-top"><span>✳ &nbsp; OPEN YOUR NEXT CHAPTER</span><span>CS✳LAB.</span><button ref={closeRef} className="menu-close" onClick={closeMenu} aria-label="Close menu"><X size={27}/></button></div>
        <nav className="editorial-menu-links" aria-label="Main navigation">{links.map(link=><button key={link.path} onClick={()=>go(link.path)} className="editorial-menu-link"><span>{link.number}</span><strong>{link.label}</strong><ArrowUpRight size={25}/></button>)}</nav>
        <div className="editorial-menu-bottom">
          <div className="menu-footer-brand"><strong>CS✳LAB.</strong><span>YOUR ENGINEERING JOURNEY</span></div>
          <div><span>ABOUT THIS PROJECT</span><strong>A personal space to learn by making.</strong></div>
          <div><span>MENU CREDITS</span><strong>Navigation for curious builders.</strong></div>
          <div><span>COPYRIGHT</span><strong>© 2026 CS Engineering Lab</strong></div>
          <div><span>POLICIES</span><strong><a href="/privacy">PRIVACY</a> · <a href="/terms">TERMS</a></strong></div>
          <div><span>CONTACT</span><strong><a href="mailto:anindita.sanjagiri@gmail.com">ANINDITA.SANJAGIRI@GMAIL.COM</a></strong></div>
          {firebaseConfigured&&user&&<button onClick={logout}>SIGN OUT ↗</button>}
        </div>
    </div>}
  </>
}
