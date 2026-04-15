const skills = [
  {
    num: '01 /', name: 'Frontend',
    bars: [{ label: 'HTML / CSS', pct: 80 }, { label: 'JavaScript', pct: 70 }],
    tags: [{ t: 'HTML5', c: 'tp' }, { t: 'CSS3', c: 'tp' }, { t: 'JavaScript', c: 'tp' }]
  },
  {
    num: '02 /', name: 'Backend & CMS',
    bars: [{ label: 'PHP / Drupal', pct: 75 }, { label: 'Python', pct: 60 }],
    tags: [{ t: 'PHP', c: 'tg' }, { t: 'Drupal', c: 'tg' }, { t: 'REST API', c: 'tg' }, { t: 'Python', c: 'tg' }]
  },
  {
    num: '03 /', name: 'Database',
    bars: [{ label: 'SQL / MySQL', pct: 70 }, { label: 'Drupal DB Layer', pct: 65 }],
    tags: [{ t: 'SQL', c: 'tm' }, { t: 'MySQL', c: 'tm' }, { t: 'Drupal DB', c: 'tm' }]
  },
  {
    num: '04 /', name: 'DevOps & Tools',
    bars: [{ label: 'Git / GitHub', pct: 75 }, { label: 'Docker / Docksal', pct: 65 }],
    tags: [{ t: 'Git', c: 'tp' }, { t: 'GitHub', c: 'tp' }, { t: 'Docker', c: 'tg' }, { t: 'Docksal', c: 'tg' }, { t: 'CI/CD', c: 'tm' }]
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="sec-eyebrow">My Arsenal</p>
      <h2 className="sec-title reveal">What I <span>Know</span></h2>
      <div className="skills-grid">
        {skills.map((sk, i) => (
          <div key={i} className="sk-card reveal" data-delay={i * 100}>
            <div className="sk-glow"/>
            <div className="sk-num">{sk.num}</div>
            <div className="sk-name">{sk.name}</div>
            {sk.bars.map((b, j) => (
              <div key={j} className="bar-wrap">
                <div className="bar-info"><span>{b.label}</span><span>{b.pct}%</span></div>
                <div className="bar-bg"><div className="bar-fill" data-w={b.pct} style={{width:0}}/></div>
              </div>
            ))}
            <div className="tags">
              {sk.tags.map((tg, k) => (
                <span key={k} className={`tag ${tg.c}`}>{tg.t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
