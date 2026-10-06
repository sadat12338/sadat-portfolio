import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section tint">
      <div className="container narrow">
        <h2>Skills & Expertise</h2>
        {skills.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-top"><span>{s.name}</span><span>{s.level}%</span></div>
            <div className="bar"><div className="fill" style={{ width: `${s.level}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}
