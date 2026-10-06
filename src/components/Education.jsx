import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container narrow">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((e) => (
            <div className="t-item" key={e.level}>
              <h3>{e.level}</h3>
              <p>{e.place}</p>
              {e.detail && <p>{e.detail}</p>}
              <small>{e.year}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
