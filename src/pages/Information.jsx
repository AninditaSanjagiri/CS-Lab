import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { domains } from '../data/curriculum'

const email = 'anindita.sanjagiri@gmail.com'
const repo = 'https://github.com/AninditaSanjagiri/CS-Lab'

const pages = {
  about: {
    eyebrow: 'A NOTE FROM THE STUDIO',
    title: <>MORE THAN A<br/><em>CURRICULUM.</em><br/>A PLACE TO BUILD.</>,
    description: 'CS Lab is an independent engineering learning studio designed to make technical learning practical. It is a personal project shaped around a simple habit: take an idea apart, build a small version, and learn from what happens.',
    sections: [
      { title: 'Understand by making', text: 'Reading can introduce an idea; building reveals the decisions inside it. CS Lab pairs concept explanations, examples and learning references with small experiments and projects so the theory has somewhere to land.' },
      { title: 'A connected learning map', text: 'The CS Engineering curriculum spans nine disciplines, from programming and data structures to operating systems, networks, databases, security and system design. Separate AI Engineering and Data Engineering roadmaps extend those foundations into focused paths.' },
      { title: 'The project shelf', text: 'Project Universe collects builds that connect concepts across disciplines. Learners can track concept mastery and submitted repository links as a record of their own progress.' },
    ],
    detail: <div className="info-discipline-list">{domains.map(domain => <span key={domain.id}>{domain.number} <b>{domain.title}</b></span>)}</div>,
  },
  privacy: {
    eyebrow: 'INFORMATION · PRIVACY',
    title: <>PRIVACY,<br/><em>IN PLAIN WORDS.</em></>,
    description: 'This page describes the data flows visible in the current CS Lab application. Firebase settings and optional analytics can vary by deployment, so the notes below distinguish what the code does from what is controlled in the service configuration.',
    sections: [
      { title: 'Account and profile information', text: 'When Firebase is configured, CS Lab offers Google sign-in and email/password registration. Firebase Authentication processes the credentials and account identifier. The app may use the signed-in profile’s email address and, when provided by the sign-in provider, display name. Passwords are handled by Firebase Authentication and are not written to the app’s progress records.' },
      { title: 'Learning progress and submitted links', text: 'Concept mastery states and project repository URLs (including whether a valid URL has been submitted) are saved locally and, for an authenticated user when Firebase is configured, synchronized to Cloud Firestore under that user’s users/{uid}/domains records. The app also stores a local progress copy so it can operate in local preview and retain progress in the browser. A submitted GitHub URL is a link; CS Lab does not upload or copy the repository contents.' },
      { title: 'Browser storage and authentication', text: 'The app uses localStorage for learning progress (cs-lab-progress-v2, with a legacy v1 read fallback) and the analytics preference (cs-lab-analytics-consent). The Firebase Authentication SDK also maintains sign-in state using its browser persistence mechanism. The application code does not set its own cookies.' },
      { title: 'Optional analytics and third parties', text: 'If VITE_ENABLE_ANALYTICS is enabled for a deployment, an optional analytics choice is shown. The Vercel Insights script is loaded only after acceptance; rejecting leaves it unloaded. Firebase Authentication and Cloud Firestore process account and cloud progress data when configured. Google Fonts may receive a request from your browser to render the site typefaces. Each provider has its own technical processing and privacy terms.' },
      { title: 'Technical information, retention and security', text: 'Firebase, Google Fonts and, when enabled, Vercel may receive technical request information such as IP address, browser and request data as part of delivering their services. CS Lab does not have an in-app account deletion function today. Cloud records remain in the configured Firebase project until removed by its administrator; local progress remains until browser storage is cleared. Access to Firestore depends on Firebase security rules configured outside this frontend repository; those rules have not been verified as part of this page. Do not put passwords, API keys or other secrets in submitted repository links.' },
      { title: 'Privacy requests', text: 'To ask about your data or request account and progress deletion, email the site owner. Include the email associated with the account; never send a password. A deletion request needs a manual Firebase Authentication and Firestore action, plus clearing local browser storage on your own devices.' },
    ],
    note: <>Privacy contact: <a href={`mailto:${email}`}>{email}</a>. This information is not legal advice and should be reviewed for the deployment’s actual Firebase and analytics configuration.</>,
  },
  terms: {
    eyebrow: 'INFORMATION · TERMS',
    title: <>A FEW TERMS<br/><em>FOR THE LAB.</em></>,
    description: 'Using CS Lab means using an independent educational project and progress tracker. These terms explain its purpose and the responsibilities that come with using it.',
    sections: [
      { title: 'Purpose and acceptance', text: 'CS Lab provides educational explanations, learning paths, project prompts and progress tracking. By using the site, you agree to use it responsibly and follow these terms and applicable laws.' },
      { title: 'Accounts and acceptable use', text: 'Keep control of your account and do not share credentials. Do not use the platform to interfere with its operation, access another person’s data, distribute malicious code, violate privacy or test systems without authorization. Security learning must stay within systems and environments you are allowed to use.' },
      { title: 'Content and intellectual property', text: 'Original CS Lab writing, project organization and visual design belong to their respective creators. External resources, books, documentation, software, names and other third-party materials remain the property of their respective owners and are linked for learning. References do not imply endorsement or affiliation.' },
      { title: 'User-submitted links', text: 'You are responsible for repository URLs you submit and must have the right to share them. Do not include credentials, secrets, private personal information or material you are not authorized to publish. The app stores the URL as part of your progress; it does not host the linked repository.' },
      { title: 'External resources and educational disclaimer', text: 'External websites are provided for convenience and are governed by their own terms. Educational material is supplied for learning, without a promise that it is complete, current, or suitable for production decisions, certification or employment outcomes. Verify important technical decisions independently.' },
      { title: 'Availability and changes', text: 'Features, content and service providers may change or become unavailable. The site is provided as an independent educational project, without a guarantee of uninterrupted service. Access may be limited if use threatens the platform or other users.' },
      { title: 'Independence and contact', text: 'CS Lab is not affiliated with or endorsed by the universities, organizations, authors, software projects or learning platforms referenced in its curriculum. For questions about these terms, contact the site owner.' },
    ],
    note: <>Contact: <a href={`mailto:${email}`}>{email}</a>.</>,
  },
  cookies: {
    eyebrow: 'INFORMATION · BROWSER STORAGE',
    title: <>COOKIES &<br/><em>YOUR BROWSER.</em></>,
    description: 'The current app uses browser storage for progress and preferences. The code does not create its own cookies or include advertising trackers.',
    sections: [
      { title: 'Essential sign-in state', text: 'When Firebase Authentication is enabled, its web SDK keeps a signed-in session using its configured browser persistence. The application relies on that state to recognize the account. The app itself does not set an authentication cookie.' },
      { title: 'Functional local storage', text: 'CS Lab stores progress locally under cs-lab-progress-v2 (and can read the earlier cs-lab-progress-v1 key) and stores the optional analytics choice under cs-lab-analytics-consent. These are browser localStorage entries, not cookies. Clearing browser data can remove locally saved progress and preferences.' },
      { title: 'Optional analytics', text: 'The Vercel Insights script is conditionally available only when the deployment enables VITE_ENABLE_ANALYTICS and the visitor opts in through the analytics choice. A rejected choice prevents the script from loading. The application does not add advertising or cross-site tracking scripts.' },
      { title: 'Third-party requests', text: 'Firebase services handle authentication and cloud progress when configured. Google Fonts may receive requests to serve typefaces. Their own services may use technical storage or request information according to their configuration and policies; CS Lab does not control those providers.' },
    ],
    note: 'No additional cookie banner is shown for required app storage. The existing analytics preference offers a clear reject or accept choice when optional analytics are enabled.',
  },
  'data-deletion': {
    eyebrow: 'INFORMATION · YOUR DATA',
    title: <>LEAVE THE LAB.<br/><em>TAKE YOUR DATA.</em></>,
    description: 'Self-service account deletion is not implemented in this version of CS Lab. A deletion request is handled manually so the site owner can remove both the Firebase account and its associated progress records.',
    sections: [
      { title: 'Request account deletion', text: 'Email the site owner from the address associated with your account and use “CS Lab account deletion” as the subject. Ask to delete the account and its saved progress. Do not include your password or other credentials. You will receive a reply if more information is needed to identify the account.' },
      { title: 'What the request covers', text: 'The manual cleanup needs to remove the Firebase Authentication account and its users/{uid}/domains documents in Cloud Firestore. This includes saved concept states, project states and submitted repository URLs. The application currently has no self-service delete action or automated deletion endpoint, so the request is not complete until the site owner confirms it.' },
      { title: 'Local browser data', text: 'Cloud deletion cannot clear localStorage on your devices. To remove the local copy, clear site data for CS Lab in each browser you used. Export your progress first if you want to keep a personal copy. The progress export includes learning state and repository URLs.' },
      { title: 'Account verification and errors', text: 'The site owner may need to verify that a request came from the account holder before deleting data. Firebase may also require recent authentication for account deletion. If that occurs, the owner will explain the next step; do not email a password or verification code.' },
    ],
    note: <>Send requests to <a href={`mailto:${email}?subject=CS%20Lab%20account%20deletion`}>{email}</a>.</>,
  },
  credits: {
    eyebrow: 'INFORMATION · CREDITS',
    title: <>GOOD WORK<br/><em>BUILDS ON WORK.</em></>,
    description: 'CS Lab combines original explanations and project organization with external references and open-source software. Credit remains with the people and projects that created those resources.',
    sections: [
      { title: 'Learning references', text: 'The curriculum links to official documentation and educational references including Python documentation, MDN Web Docs, GeeksforGeeks, the Think Python project by Allen B. Downey, Computer Systems: A Programmer’s Perspective, Operating Systems: Three Easy Pieces, CLRS Introduction to Algorithms, Raft resources and other references listed alongside relevant concepts. These links are recommendations for further study, not CS Lab-authored material.' },
      { title: 'Type and visual assets', text: 'The site requests DM Sans, DM Mono and Cormorant Garamond from Google Fonts. Interface icons are from lucide-react. The CS✳LAB favicon is included in the project as an SVG. Third-party typefaces and icon designs retain their respective licenses and attribution terms.' },
      { title: 'Frameworks and dependencies', text: 'The application uses React and React DOM (MIT), React Router (MIT), Firebase JavaScript SDK (Apache-2.0), Framer Motion (MIT), lucide-react (ISC), Vite (MIT), Tailwind CSS (MIT), PostCSS (MIT) and Autoprefixer (MIT). Versions and license fields were read from the installed package metadata and lockfile. Their full license texts are distributed with the corresponding packages.' },
      { title: 'Services', text: 'Firebase Authentication and Cloud Firestore provide optional sign-in and cloud progress synchronization. Google Fonts serves the selected typefaces. Vercel Insights can be loaded only when enabled in deployment configuration and accepted by the visitor.' },
    ],
    note: <>For detailed learning links, see the <Link to="/">curriculum</Link>. For dependency versions, consult <a href={repo} target="_blank" rel="noopener noreferrer">the project repository</a>.</>,
  },
  contact: {
    eyebrow: 'INFORMATION · SAY HELLO',
    title: <>QUESTIONS,<br/><em>IDEAS, BUGS?</em></>,
    description: 'Found something unclear or broken? Have a question about the curriculum or want to share a build? Send a note or open an issue in the repository.',
    sections: [
      { title: 'Email', text: <>Write to <a href={`mailto:${email}`}>{email}</a>. For account or privacy requests, include the account email but never a password, verification code or secret key.</> },
      { title: 'Issues and source', text: <>Browse the <a href={repo} target="_blank" rel="noopener noreferrer">CS Lab GitHub repository <ArrowUpRight size={13}/></a> to inspect the project or report a reproducible issue.</> },
    ],
    note: 'CS Lab is an independent learning project. Messages are handled by the site owner; the site does not have a contact form or automated ticket system.',
  },
}

export const informationRoutes = Object.keys(pages)

export const informationSeo = {
  about: ['About CS Lab — Learn by Building', 'Meet CS Lab, an independent engineering learning studio built around computer science, AI, data engineering and practical projects.'],
  privacy: ['Privacy Policy — CS Lab', 'How CS Lab handles account information, learning progress, repository links, browser storage and optional analytics.'],
  terms: ['Terms of Use — CS Lab', 'Terms for using the independent CS Lab educational project and progress tracker.'],
  cookies: ['Cookie Policy — CS Lab', 'Learn which browser storage and optional analytics are used by CS Lab.'],
  'data-deletion': ['Data & Account Deletion — CS Lab', 'How to request manual deletion of a CS Lab account and associated learning progress.'],
  credits: ['Credits & Acknowledgements — CS Lab', 'Learning references, typefaces, icons, open-source dependencies and services used by CS Lab.'],
  contact: ['Contact CS Lab', 'Contact the CS Lab project owner with a question, issue report, or privacy request.'],
}

export default function InformationPage({ page }) {
  const content = pages[page]
  if (!content) return null
  return <article className="information-page">
    <header className="information-hero">
      <div className="information-topline"><span>CS✳LAB · INDEPENDENT ENGINEERING STUDIO</span><Link to="/" aria-label="Back to CS Lab"><ArrowLeft size={15}/> BACK TO THE LAB</Link></div>
      <p className="information-eyebrow">{content.eyebrow}</p>
      <h1>{content.title}</h1>
      <p className="information-lede">{content.description}</p>
      <span className="information-hero-star" aria-hidden="true">✳</span>
    </header>
    <div className="information-body">
      {content.detail}
      {content.sections.map((section, index) => <section className="information-section" key={section.title}>
        <span className="information-index">{String(index + 1).padStart(2, '0')} / NOTE</span>
        <div><h2>{section.title}</h2><p>{section.text}</p></div>
      </section>)}
      {content.note && <aside className="information-note"><span>✳</span><p>{content.note}</p></aside>}
    </div>
    <div className="information-end"><Link to="/"><ArrowLeft size={16}/> BACK TO CS LAB</Link><a href={repo} target="_blank" rel="noopener noreferrer"><Github size={16}/> VIEW THE PROJECT <ArrowUpRight size={14}/></a></div>
  </article>
}
