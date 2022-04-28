import Icon from "../../elements/Icon";

export default function MenuLink({ href, iconName, children }) {
  return (
    <li className="item">
      <a href={href} className="link">
        <Icon name={iconName} />
        {children}
      </a>
    </li>
  )
}