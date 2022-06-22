import Proj from "./Proj";
import portfolioData from "../../../public/portfolioData.json";
import { useRef, useState } from "react";

export default function Projects() {
  const [best, setBest] = useState(true)
  const refs = useRef([])

  const handleBest = () => {
    refs.current[1].classList.remove("active")
    refs.current[0].classList.add("active")
    setBest(true)
  }
  const handleAll = () => {
    refs.current[0].classList.remove("active")
    refs.current[1].classList.add("active")
    setBest(false)
  }

  return (
    <section className="section-container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="filters">
        Filter by:
        <button ref={ref => refs.current[0] = ref} onClick={handleBest} className="active">Best</button>
        <button ref={ref => refs.current[1] = ref} onClick={handleAll}>All</button>
      </div>
      <div className="container">
        {portfolioData.projects.map(proj => (
          !best || proj.best ? <Proj key={proj.title} {...proj} /> : null
        ))}
      </div>
    </section>
  )
}
