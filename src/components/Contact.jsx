import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend: opens the visitor's email app with the message filled in
  const submit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=Portfolio message&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section tint">
      <div className="container two-col">
        <div>
          <h2>Let's Work Together</h2>
          <p className="big">Have a brand or page that needs to grow? Send me a message.</p>
          <p>📧 {profile.email}</p>
          <p>📞 {profile.phone}</p>
          <p>📍 {profile.location}</p>
        </div>
        <form onSubmit={submit} className="form">
          <input name="name" placeholder="Your name" required value={form.name} onChange={change} />
          <input name="email" type="email" placeholder="Your email" required value={form.email} onChange={change} />
          <textarea name="message" rows="5" placeholder="Your message" required value={form.message} onChange={change} />
          <button className="btn primary" type="submit">Send message</button>
          {sent && <p className="ok">Your email app should open now. Send the email to finish.</p>}
        </form>
      </div>
    </section>
  )
}
