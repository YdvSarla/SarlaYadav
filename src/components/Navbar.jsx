export default function Navbar() {
  return (
    <nav>
      <div className="logo">YN.dev</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="Resume.pdf" className="nav-resume">Resume ↓</a>
    </nav>
  )
}
