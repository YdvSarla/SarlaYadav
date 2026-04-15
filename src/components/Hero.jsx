import { useTyped } from '../hooks/useEffects'

export default function Hero() {
  const typedRef = useTyped(['Software Developer', 'Full-Stack Engineer'])

  return (
    <section id="hero">
      <div className="blob" style={{width:'350px',height:'350px',background:'rgba(124,58,237,.07)',top:'10%',left:'55%',transform:'translate(-50%,-50%)'}}/>
      <div className="blob" style={{width:'250px',height:'250px',background:'rgba(52,211,153,.05)',top:'70%',left:'20%',transform:'translate(-50%,-50%)'}}/>
      <div className="hero-content">
        <div className="hero-avail">
          <span className="pulse-dot"/>
          Open to opportunities
        </div>
        <h1 className="hero-h1">
          <span className="line1">Hello, I'm</span>
          <span className="line2 glitch" data-text="Sarla Yadav.">Sarla Yadav.</span>
        </h1>
        <p className="hero-role">
          // <span className="typed-txt" ref={typedRef}></span>
          <span className="typed-cursor">|</span>
        </p>
        <p className="hero-desc">
          I craft digital experiences at the intersection of design and engineering — clean code, beautiful interfaces, real impact.
        </p>
        <div className="hero-btns">
          <a href="#projects"><button className="btn-primary">View My Work →</button></a>
          <a href="#contact"><button className="btn-outline">Let's Talk</button></a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-bar"/>
        <span className="scroll-lbl">SCROLL</span>
      </div>
    </section>
  )
}
