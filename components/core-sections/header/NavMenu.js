import Icon from "../../elements/Icon";

export default function NavMenu() {
  return (
    <nav className="panel">
      <ul className="menu">
        <Link href="index">Home</Link>
        <Link href="about">About me</Link>
        <Link href="projects">Projects</Link>
        <Link href="contact">Contact</Link>
      </ul>
    </nav>
  )
}

function Link({ href, children }) {
  return (
    <li className="item">
      <a href={"#" + href} className="link">
        <Icon name={href} />
        {children}
      </a>
    </li>
  )
}