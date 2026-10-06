import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <h2>About Me</h2>
        <p className="big">{profile.about}</p>
      </div>
    </section>
  )
}
