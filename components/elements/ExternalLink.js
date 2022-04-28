export default function ExternalLink({ children, ...params }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...params}>
      {children}
    </a>
  )
}