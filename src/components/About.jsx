export default function About() {
  return (
    <section id="about">
      <p className="sec-eyebrow">About Me</p>
      <div className="about-wrap">
        <div className="about-left reveal-l">
          <div className="about-frame">
            <div className="frame-corner fc-tl"/>
            <div className="frame-corner fc-br"/>
            <span style={{color:'#34d399'}}>$ whoami</span>
            <span style={{color:'#f1f0ff'}}>Sarla Yadav</span>
            <span style={{color:'#34d399'}}>$ role</span>
            <span style={{color:'#f1f0ff'}}>Junior Software Developer</span>
            <span style={{color:'#34d399'}}>$ skills</span>
            <span style={{color:'#f1f0ff'}}>Drupal · REST APIs · PHP</span>
            <span style={{color:'#34d399'}}>$ location</span>
            <span style={{color:'#f1f0ff'}}>Gurugram, India</span>
            <span style={{color:'#34d399'}}>$ status</span>
            <span style={{color:'#34d399',animation:'blink 1s infinite'}}>▋ Open to work</span>
          </div>
          <div className="about-badge"><strong>1+</strong> Years Experience</div>
        </div>
        <div className="about-text">
          <h2 className="sec-title reveal">Who I <span>Am</span></h2>
          <p className="reveal">Hi! I'm <strong>Sarla Yadav</strong>, a Junior Software Developer based in <strong>Gurugram, India</strong>. I love building clean, functional web solutions and learning something new with every project I take on.</p>
          <p className="reveal" style={{transitionDelay:'.1s'}}>I have hands-on experience working with <strong>Drupal APIs</strong> on the Randstad RiseSmart project — integrating REST APIs, building platform features, and collaborating with cross-functional teams in a professional environment.</p>
          <p className="reveal" style={{transitionDelay:'.2s'}}>I'm early in my career but hungry to grow. When I'm not coding, I'm exploring new technologies, reading dev blogs, or sharpening my problem-solving skills.</p>
          <div className="stats-row reveal" style={{transitionDelay:'.3s'}}>
            <div><div className="stat-num">1+</div><div className="stat-lbl">Years Experience</div></div>
            <div><div className="stat-num">3+</div><div className="stat-lbl">Projects Built</div></div>
            <div><div className="stat-num">∞</div><div className="stat-lbl">Eagerness to Learn</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
