import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
