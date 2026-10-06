import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section tint">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <span className={`badge ${p.platform.toLowerCase()}`}>{p.platform}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <a href={p.url} target="_blank" rel="noreferrer" className="link">View work</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
