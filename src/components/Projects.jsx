export default function Projects() {
  return (
    <section id="projects">
      <p className="sec-eyebrow">Professional Work</p>
      <h2 className="sec-title reveal">Where I've <span>Contributed</span></h2>

      <div className="proj-grid" style={{gridTemplateColumns:'1fr'}}>
        <div className="pc reveal" style={{maxWidth:'780px',margin:'0 auto'}}>
          <div className="pc-thumb" style={{height:'160px'}}>
            <div className="pc-grid-bg"/>
            <div className="pc-icon-wrap">
              <div className="pc-icon">Drupal 11</div>
              <div className="pc-icon">PHP 8.3</div>
              <div className="pc-icon">REST API</div>
            </div>
            <div className="pc-overlay">
              <span className="pc-act" style={{opacity:.5,cursor:'not-allowed',pointerEvents:'none'}}>Private Codebase</span>
            </div>
          </div>
          <div className="pc-body">
            <p className="pc-type">Enterprise CMS · Randstad Company · 2024</p>
            <h3 className="pc-title">RiseSmart CMS — Enterprise Drupal 11</h3>
            <p className="pc-desc" style={{fontSize:'.92rem',lineHeight:'1.8'}}>
              Contributed as a Junior Developer to an enterprise-grade Content Management System built on Drupal 11 for RiseSmart — a global career coaching and outplacement platform under Randstad. Worked on custom Drupal module development, Drupal REST API integration, and platform feature delivery within an agile team environment.
            </p>

            <p className="key-contrib-title">Key Contributions</p>
            {[
              'Developed and consumed Drupal REST APIs to power dynamic content delivery across the platform',
              'Contributed to custom Drupal module development covering content workflows and role-based access control',
              'Worked with JWT-based authentication flows integrated into the platform\'s SSO system',
              'Supported multilingual content pipelines and third-party API integrations within the CMS',
              'Collaborated in agile sprints using Git, GitHub, Jenkins CI/CD, and Docker-based environments',
            ].map((item, i) => (
              <div key={i} className="contrib-item">
                <span className="contrib-arrow">▹</span>
                <span>{item}</span>
              </div>
            ))}

            <div className="tags" style={{marginBottom:'1rem'}}>
              {[
                {t:'PHP 8.3',c:'tg'},{t:'Drupal 11',c:'tg'},{t:'REST API',c:'tg'},
                {t:'MySQL',c:'tm'},{t:'Docker',c:'tm'},{t:'Docksal',c:'tm'},
                {t:'Git',c:'tp'},{t:'Jenkins CI/CD',c:'tp'},{t:'JWT',c:'tp'}
              ].map((tg,i) => <span key={i} className={`tag ${tg.c}`}>{tg.t}</span>)}
            </div>

            <div className="private-note">
              <span className="pulse-dot"/>
              Professional project — private codebase under Randstad RiseSmart
            </div>
          </div>
        </div>
      </div>

      <p className="coming-soon reveal" style={{marginTop:'3rem'}}>
        ▶ Personal projects coming soon — watch my{' '}
        <a href="https://github.com/YdvSarla" target="_blank" rel="noreferrer">GitHub</a>
        {' '}for updates
      </p>
    </section>
  )
}
