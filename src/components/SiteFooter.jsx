import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const groups = [
  { title: 'EXPLORE', links: [
    ['CS Engineering', '/#disciplines'],
    ['AI Engineering Roadmap', '/ai-roadmap'],
    ['Data Engineering Roadmap', '/data-engineering-roadmap'],
    ['Project Universe', '/projects'],
  ] },
  { title: 'INFORMATION', links: [
    ['About CS Lab', '/about'],
    ['Credits & Acknowledgements', '/credits'],
    ['Contact', '/contact'],
  ] },
  { title: 'LEGAL', links: [
    ['Privacy Policy', '/privacy'],
    ['Terms of Use', '/terms'],
    ['Cookie Policy', '/cookies'],
    ['Data & Account Deletion', '/data-deletion'],
  ] },
]

export default function SiteFooter() {
  return <footer className="site-footer site-footer-full">
    <div className="footer-main">
      <div className="footer-brand-block">
        <Link className="footer-wordmark" to="/">CS<span>✳</span>LAB<span className="footer-dot">.</span></Link>
        <p className="footer-kicker">A PERSONAL SPACE TO LEARN BY MAKING.</p>
        <p className="footer-build">BUILD. <i>BREAK.</i> REPEAT.</p>
        <p className="footer-description">An independent engineering learning studio built around curiosity, experimentation and hands-on learning.</p>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        {groups.map(group => <section className="footer-link-group" key={group.title}>
          <h2>{group.title}</h2>
          {group.links.map(([label, to]) => <Link key={to} to={to}>{label}<ArrowUpRight size={13} aria-hidden="true"/></Link>)}
        </section>)}
      </nav>
    </div>
    <div className="footer-bottom">
      <span>DESIGNED AND DEVELOPED BY <strong>ANINDITA SANJAGIRI.</strong></span>
      <span>© 2026 CS LAB. ALL RIGHTS RESERVED.</span>
      {import.meta.env.VITE_ENABLE_ANALYTICS === 'true' && <button className="footer-preferences" onClick={() => window.dispatchEvent(new Event('cs-lab-open-analytics-preferences'))}>MANAGE ANALYTICS PREFERENCES</button>}
      <a className="footer-github" href="https://github.com/AninditaSanjagiri/CS-Lab" target="_blank" rel="noopener noreferrer" aria-label="CS Lab source code on GitHub"><Github size={17}/> VIEW THE SOURCE <ArrowUpRight size={13}/></a>
    </div>
  </footer>
}
