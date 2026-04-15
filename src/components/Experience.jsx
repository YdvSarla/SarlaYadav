import { useState } from 'react'

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience">
      <p className="sec-eyebrow">My Journey</p>
      <h2 className="sec-title reveal">Where I've <span>Been</span></h2>
      <div className="exp-wrap">
        <div className="exp-tabs reveal-l">
          {['Busywizzy Tech', 'Education'].map((tab, i) => (
            <button
              key={i}
              className={`exp-tab${active === i ? ' on' : ''}`}
              onClick={() => setActive(i)}
            >{tab}</button>
          ))}
        </div>
        <div className="reveal">

          {/* Work Experience Panel */}
          <div className={`exp-panel${active === 0 ? ' on' : ''}`}>
            <p className="ep-period">Mar 2025 — Present</p>
            <h3 className="ep-role">Junior Software Developer</h3>
            <p className="ep-co">@ Busywizzy Technologies Pvt. Ltd.</p>
            <p className="ep-desc">Junior Software Developer contributing to the Randstad RiseSmart project, building and integrating Drupal APIs to power career transition and outplacement platform features.</p>
            <div className="ep-list">
              {[
                'Developed and consumed Drupal REST APIs to deliver dynamic content across the RiseSmart platform',
                'Collaborated with senior developers on feature development, bug fixes, and code reviews',
                'Integrated third-party APIs and backend services into frontend components',
                'Worked within agile sprints to deliver consistent, production-ready code on schedule',
              ].map((item, i) => <div key={i} className="ep-item">{item}</div>)}
            </div>
          </div>

          {/* Education Panel */}
          <div className={`exp-panel${active === 1 ? ' on' : ''}`}>
            <div className="edu-block">
              <p className="ep-period">2022 — 2024</p>
              <h3 className="ep-role">MCA — Master of Computer Applications</h3>
              <p className="ep-co">@ Gurugram University, Gurugram</p>
              <p className="ep-desc">Advanced study of software engineering, web technologies, database management, cloud computing, and system design. Focused on building real-world applications.</p>
              <div className="ep-list">
                {[
                  '70% — First class with distinction',
                  'Deepened expertise in backend development, APIs, and system architecture',
                  'Completed major project on web application development using PHP and MySQL',
                ].map((item, i) => <div key={i} className="ep-item">{item}</div>)}
              </div>
            </div>
            <div className="edu-block">
              <p className="ep-period">2018 — 2021</p>
              <h3 className="ep-role">BCA — Bachelor of Computer Applications</h3>
              <p className="ep-co">@ MDU University, Rohtak</p>
              <p className="ep-desc">Foundation in computer science — algorithms, data structures, operating systems, databases, networking, and software engineering fundamentals.</p>
              <div className="ep-list">
                {[
                  '69% — First class',
                  'Built a strong foundation in programming with C, Java, and web technologies',
                  'Actively participated in technical events and college activities',
                ].map((item, i) => <div key={i} className="ep-item">{item}</div>)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
