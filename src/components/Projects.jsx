import './Projects.css'

const PROJECTS = [
  {
    title: 'App Redesign',
    tag: 'UI/UX Design · End-to-end',
    description:
      'Redesigned a company application end-to-end in Figma — user interviews, competitor analysis, and low-to-high-fidelity wireframes.',
    points: [
      'Ran usability testing with 10+ participants',
      'Iterated the interface based on direct feedback',
      'Improved task completion rate by 30%',
    ],
    frame: 'browser',
  },
  {
    title: 'College Campus Navigation App',
    tag: 'UI/UX Design · Mobile',
    description:
      'A mobile app that helps students navigate campus buildings, locate classrooms, and discover facilities with ease.',
    points: [
      'Built user personas and journey maps',
      'Designed interactive, testable prototypes',
      'Refined the interface for accessibility and clarity',
    ],
    frame: 'phone',
    image: '/projecthero/campus_explorer.png',
    imageAlt: 'Campus Explorer app screens — sign-in, home, and turn-by-turn campus navigation',
  },
]

function ProjectMock({ frame }) {
  if (frame === 'phone') {
    return (
      <svg viewBox="0 0 240 300" className="project__mock" aria-hidden="true">
        <rect x="52" y="10" width="136" height="280" rx="22" fill="var(--glass-lift)" stroke="var(--hairline)" />
        <rect x="66" y="34" width="108" height="18" rx="4" fill="var(--blush-soft)" />
        <rect x="66" y="60" width="70" height="10" rx="3" fill="var(--hairline)" />
        <rect x="66" y="86" width="108" height="70" rx="10" fill="var(--blush-soft)" />
        <circle cx="120" cy="121" r="16" fill="none" stroke="var(--blush)" strokeWidth="2" />
        <path d="M112 121l6 6 10-12" stroke="var(--blush)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="66" y="168" width="108" height="34" rx="8" fill="var(--ground)" stroke="var(--hairline)" />
        <rect x="66" y="210" width="108" height="34" rx="8" fill="var(--ground)" stroke="var(--hairline)" />
        <rect x="66" y="256" width="52" height="12" rx="6" fill="var(--blush)" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 320 220" className="project__mock" aria-hidden="true">
      <rect x="6" y="6" width="308" height="208" rx="12" fill="var(--glass-lift)" stroke="var(--hairline)" />
      <rect x="6" y="6" width="308" height="30" rx="12" fill="rgba(255,255,255,0.06)" />
      <circle cx="22" cy="21" r="4" fill="var(--hairline)" />
      <circle cx="35" cy="21" r="4" fill="var(--hairline)" />
      <circle cx="48" cy="21" r="4" fill="var(--hairline)" />
      <rect x="24" y="52" width="90" height="150" rx="8" fill="var(--ground)" stroke="var(--hairline)" />
      <rect x="36" y="66" width="66" height="8" rx="3" fill="var(--blush-soft)" />
      <rect x="36" y="82" width="50" height="8" rx="3" fill="var(--hairline)" />
      <rect x="36" y="104" width="66" height="30" rx="6" fill="var(--blush-soft)" />
      <rect x="36" y="146" width="66" height="8" rx="3" fill="var(--hairline)" />
      <rect x="36" y="162" width="40" height="8" rx="3" fill="var(--hairline)" />
      <rect x="128" y="52" width="168" height="70" rx="8" fill="var(--blush-soft)" />
      <path d="M150 96l16-18 16 12 22-26 40 32" stroke="var(--blush)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="128" y="132" width="80" height="70" rx="8" fill="var(--ground)" stroke="var(--hairline)" />
      <rect x="216" y="132" width="80" height="70" rx="8" fill="var(--ground)" stroke="var(--hairline)" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <div className="section__head">
          <span className="eyebrow">Projects</span>
          <h2>Selected case studies.</h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="project">
              <div className={`project__visual project__visual--${p.frame} ${p.image ? 'project__visual--image' : ''}`}>
                {p.image ? <img src={p.image} alt={p.imageAlt} /> : <ProjectMock frame={p.frame} />}
              </div>
              <div className="project__body">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
