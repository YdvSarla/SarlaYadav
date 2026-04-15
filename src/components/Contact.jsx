import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact">
      <p className="sec-eyebrow">Say Hello</p>
      <div className="con-wrap">
        <div>
          <h2 className="con-big reveal">Let's build something <span>amazing together.</span></h2>
          <p className="con-p reveal" style={{transitionDelay:'.1s'}}>
            I'm open to freelance projects and full-time roles. Whether you have a project in mind or just want to connect — reach out anytime!
          </p>
          <div className="con-links reveal" style={{transitionDelay:'.2s'}}>
            <a href="mailto:ysarla28@gmail.com" className="cl">
              <div className="cl-icon">✉</div>
              <div><div className="cl-lbl">Email</div><div className="cl-val">ysarla28@gmail.com</div></div>
              <span className="cl-arr">→</span>
            </a>
            <a href="https://github.com/YdvSarla" target="_blank" rel="noreferrer" className="cl">
              <div className="cl-icon">GH</div>
              <div><div className="cl-lbl">GitHub</div><div className="cl-val">github.com/YdvSarla</div></div>
              <span className="cl-arr">→</span>
            </a>
            <a href="https://linkedin.com/in/sarla-yadav-389074252" target="_blank" rel="noreferrer" className="cl">
              <div className="cl-icon">in</div>
              <div><div className="cl-lbl">LinkedIn</div><div className="cl-val">linkedin.com/in/sarla-yadav</div></div>
              <span className="cl-arr">→</span>
            </a>
          </div>
        </div>

        <div className="reveal" style={{transitionDelay:'.15s'}}>
          {sent ? (
            <div className="send-success">✓ Message received! I'll get back to you soon.</div>
          ) : (
            <div className="form">
              <div className="fr">
                <div className="fg">
                  <label>Name</label>
                  <input name="name" type="text" placeholder="Sarla Yadav" value={form.name} onChange={handleChange}/>
                </div>
                <div className="fg">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="ysarla28@gmail.com" value={form.email} onChange={handleChange}/>
                </div>
              </div>
              <div className="fg">
                <label>Subject</label>
                <input name="subject" type="text" placeholder="Project / Opportunity / Just saying hi" value={form.subject} onChange={handleChange}/>
              </div>
              <div className="fg">
                <label>Message</label>
                <textarea name="message" placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange}/>
              </div>
              <button className="send-btn" onClick={handleSend}>Send Message →</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
