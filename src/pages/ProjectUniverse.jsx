import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { universeProjects } from '../data/roadmaps'
import { useProgress } from '../context/ProgressContext'
import { isValidUrl } from './Home'
import Reveal from '../components/Reveal'

const filters=['ALL BUILDS','MINI BUILDS','ENGINEERING BUILDS','FLAGSHIP PROJECTS']
const typeFor = p => p.category.includes('MINI')?'MINI BUILDS':p.category.includes('FLAGSHIP')?'FLAGSHIP PROJECTS':'ENGINEERING BUILDS'
function Project({project,submission,onSave}){
  const [draft,setDraft]=useState(submission||'')
  const [expanded,setExpanded]=useState(false)
  const [message,setMessage]=useState('')
  const saved=isValidUrl(submission)
  const submit=async()=>{if(!draft.trim()||!isValidUrl(draft)){setMessage('Enter a valid GitHub or repository URL.');return} try{await onSave('project-universe',project.id,draft.trim());setMessage('Repository link saved.')}catch{setMessage('Could not sync right now. Your local progress is still available.')}}
  return <article className={`universe-card ${saved?'universe-card-saved':''}`}>
    <div className="universe-card-top"><span>{project.number} / 10</span><span className="universe-theme">{project.theme}</span><span className={`submission-state ${saved?'is-submitted':''}`}>{saved?'LINK SAVED':'NOT STARTED'}</span></div>
    <div className="universe-card-copy"><p className="universe-category">{project.category}</p><h3>{project.name}</h3><p className="universe-description">{project.description}</p></div>
    <div className="universe-meta"><span><small>DIFFICULTY</small><strong>{project.difficulty}</strong></span><span><small>ESTIMATED BUILD</small><strong>{project.duration}</strong></span></div>
    <div className="universe-stack"><small>TOOLS & TECHNOLOGIES</small><p>{project.stack}</p></div>
    <button className="universe-expand" onClick={()=>setExpanded(v=>!v)} aria-expanded={expanded}>{expanded?'HIDE PROJECT MAP':'EXPLORE PROJECT MAP'} <ArrowUpRight size={16}/></button>
    {expanded&&<div className="universe-details">
      <section><h4>DISCIPLINES INVOLVED</h4><div className="tag-cloud">{project.disciplines.map(x=><span key={x}>{x}</span>)}</div></section>
      <section><h4>CONCEPTS YOU WILL APPLY</h4><ul>{project.concepts.map(x=><li key={x}>{x}</li>)}</ul></section>
      <section><h4>BUILD MILESTONES</h4><ol>{project.milestones.map(x=><li key={x}>{x}</li>)}</ol></section>
    </div>}
    <div className="universe-submit"><label><Github size={15}/> GITHUB REPOSITORY LINK</label><div className="url-input-row"><input type="url" value={draft} onChange={e=>{setDraft(e.target.value);setMessage('')}} placeholder="https://github.com/you/project"/><button className="url-save" onClick={submit} disabled={!draft.trim()||!isValidUrl(draft)}>SAVE LINK</button></div>{message&&<small className={message.startsWith('Could')?'url-error':'url-success'}>{message}</small>}{saved&&<a className="repo-link" href={submission} target="_blank" rel="noreferrer">OPEN SUBMITTED REPOSITORY <ArrowUpRight size={13}/></a>}</div>
  </article>
}
export default function ProjectUniverse(){
  const [filter,setFilter]=useState('ALL BUILDS')
  const {progress,setProjectUrl}=useProgress()
  const saved=progress['project-universe']?.projects||{}
  const visible=useMemo(()=>filter==='ALL BUILDS'?universeProjects:universeProjects.filter(p=>typeFor(p)===filter),[filter])
  const submitted=universeProjects.filter(p=>isValidUrl(saved[p.id])).length
  return <div className="universe-page">
    <section className="universe-hero"><Link to="/" onClick={()=>window.scrollTo(0,0)} className="universe-back-link"><ArrowLeft size={17}/> BACK TO CS LAB</Link><div className="universe-hero-top"><span>03 — THE BUILD STUDIO</span><span>MAKE SOMETHING WORTH SHOWING ✳</span></div><p className="universe-script">your playground</p><h1>PROJECT<br/><em>UNIVERSE.</em></h1><div className="universe-hero-bottom"><p>Fantasy worlds. Fandom data. Tiny games. Serious engineering.<br/>Pick a universe and make something real.</p><div className="universe-total"><strong>{String(submitted).padStart(2,'0')}<small>/10</small></strong><span>BUILDS WITH REPOSITORIES</span></div></div></section>
    <div className="universe-marquee" aria-label="Project Universe topics"><div className="universe-marquee-track"><div className="universe-marquee-sequence">PROGRAMMING <span>✳</span> ALGORITHMS <span>✳</span> DATABASES <span>✳</span> ARTIFICIAL INTELLIGENCE <span>✳</span> MACHINE LEARNING <span>✳</span> DEEP LEARNING <span>✳</span> RAG <span>✳</span> AGENTS <span>✳</span> CYBERSECURITY <span>✳</span> CLOUD COMPUTING <span>✳</span> DEVOPS <span>✳</span> SYSTEM DESIGN <span>✳</span> DATA ENGINEERING <span>✳</span> DISTRIBUTED SYSTEMS <span>✳</span> NETWORKING <span>✳</span></div><div className="universe-marquee-sequence" aria-hidden="true">PROGRAMMING <span>✳</span> ALGORITHMS <span>✳</span> DATABASES <span>✳</span> ARTIFICIAL INTELLIGENCE <span>✳</span> MACHINE LEARNING <span>✳</span> DEEP LEARNING <span>✳</span> RAG <span>✳</span> AGENTS <span>✳</span> CYBERSECURITY <span>✳</span> CLOUD COMPUTING <span>✳</span> DEVOPS <span>✳</span> SYSTEM DESIGN <span>✳</span> DATA ENGINEERING <span>✳</span> DISTRIBUTED SYSTEMS <span>✳</span> NETWORKING <span>✳</span></div></div></div>
    <section className="universe-content"><div className="universe-section-head"><div><span className="section-label">THE PROJECT SHELF</span><h2>CHOOSE YOUR<br/><em>ADVENTURE.</em></h2></div><p>Each project maps back to the disciplines and concepts in your learning tracks. Build it, test it, document it and submit the repository.</p></div>
      <div className="universe-filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div>
      <div className="universe-grid">{visible.map((project,i)=><Reveal key={project.id}><Project project={project} submission={saved[project.id]} onSave={setProjectUrl}/></Reveal>)}</div>
    </section>
    <section className="universe-outro"><Sparkles size={25}/><h2>MAKE THE THING.<br/><em>THEN MAKE IT BETTER.</em></h2><p>Your GitHub is the lab notebook. Every repository is proof of what you can build.</p></section>
  </div>
}
