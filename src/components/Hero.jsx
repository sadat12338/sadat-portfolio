import { profile, social } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="shape s1" /><span className="shape s2" /><span className="shape s3" />
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hello">Hi, I'm {profile.name}</p>
          <h1>{profile.title}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="btns">
            <a className="btn white" href="#contact">Let's Work Together</a>
            <a className="btn outline" href={profile.cv} download>Download CV</a>
          </div>
          <div className="socials">
            {social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
        <img className="photo" src={profile.photo} alt={profile.name} />
      </div>
    </section>
  )
}
