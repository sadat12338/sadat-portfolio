import { profile, social } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <h3>{profile.name}</h3>
      <p>{profile.tagline}</p>
      <div className="socials">
        {social.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
      </div>
      <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
    </footer>
  )
}
