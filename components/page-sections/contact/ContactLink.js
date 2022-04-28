import ExternalLink from "../../elements/ExternalLink";
import Icon from "../../elements/Icon";

export default function ContactLink({ contactName, ...params}) {
  return (
    <ExternalLink className="link-icon" title={contactName} {...params}>
      <Icon name={contactName.toLowerCase()}/>
    </ExternalLink>
  )
}