import Proj from "./Proj";
import portfolioData from "../../../public/portfolioData.json";

export default function Projects() {
  return (
    <section className="projects section-container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="container">
        {portfolioData.projects.map(proj => <Proj key={proj.title} {...proj}/>)}
      </div>
    </section>
  )
}
