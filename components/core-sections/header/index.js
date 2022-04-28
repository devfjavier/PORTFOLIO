import Link from "./MenuLink"; 

export default function Header() {
  return (
    <header className="HEADER" id="HEADER">
      <nav className="panel">
        <ul className="menu">
          <Link href="#index" iconName="index">Home</Link>
          <Link href="#about-me" iconName="about">About me</Link>
          <Link href="#projects" iconName="projects">Projects</Link>
          <Link href="#contact" iconName="contact">Contact</Link>
        </ul>
      </nav>
    </header>
  )
}