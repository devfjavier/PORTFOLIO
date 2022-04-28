export default function About() {
  return (
    <section className="about-me section-container" id="about-me">
      <h2 className="title">About me</h2>
      <div className="container">
        <div>
          <p>Hello, I am a junior frontend developer and my experience come from having worked on my own practice projects, I can do the pages have a responsive design, I can interact with a REST API through JavaScript Fetch API to create, read, update and delete data.</p>
        </div>
        <div>
          <a className="resume" target="_blank" rel="noopener noreferrer" href={process.env.projPath + "/CV.pdf"}>View / Download CV</a>
        </div>
      </div>
    </section>
  )
}