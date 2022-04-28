import Link from "./ContactLink";

export default function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <h2 className="title">Contact</h2>
      <div className="container">
        <Link contactName="LinkedIn" href="https://www.linkedin.com/in/devfjavier" />
        <Link contactName="GitHub" href="https://github.com/devfjavier" />
        <Link contactName="Email" href="mailto:devjavicont@gmail.com" />
        <Link contactName="Twitter" href="https://twitter.com/devfjavier" />
      </div>
    </section>
  )
}