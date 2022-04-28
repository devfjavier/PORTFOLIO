import Link from "../../elements/ExternalLink";

export default function Proj({ title, description, techs }) {
  const pathTitle = title.split("").map(char => char !== " " ? char : "-").join("")

  return (
    <article className="proj">
      <div className="description">
        <h4 className="title">{title}</h4>
        <p className="text">{description}</p>
        <p className="text">{techs}</p>
        <div className="links">
          <Link className="proj-link" href={`https://devfjavier.github.io/${pathTitle}/`}>
            View website
          </Link>
          <Link className="repo-link" href={`https://github.com/devfjavier/${pathTitle}`}>
            Source code
          </Link>
        </div>
      </div>
      <div className="img-container">
        <img src={`/IMG/proj-${pathTitle.toLowerCase()}.webp`} alt={"devfjavier project " + title.toLowerCase()} />
      </div>
    </article>
  )
}