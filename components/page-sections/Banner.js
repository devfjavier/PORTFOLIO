export default function Banner() {
  const basePath = process.env.projPath && "/PORTFOLIO"
  const bgImg = { backgroundImage: `url(${basePath}/IMG/banner-bg.jpg), linear-gradient(27deg, hsla(190, 90%, 19%, 0.27), hsla(120, 100%, 19%, 0.27), hsla(190, 90%, 19%, 0.27), hsla(120, 100%, 19%, 0.27))`}

  return (
    <section id="index" style={bgImg}>
      <div className="container">
        <div>
          <img src={process.env.projPath + "/IMG/photo.webp"} alt="devfjavier" />
        </div>
        <div>
          <h1 className="title">I am Javier</h1>
          <p className="subtitle">Frontend developer</p>
        </div>
      </div>
    </section>
  )
}