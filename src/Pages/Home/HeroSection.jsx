export default function HeroSection() {
  const navigateToLinkedIn = () => {
    const linkedinUrl =
      "https://www.linkedin.com/in/janindu-munasinghe-a86b64215/";
    window.location.href = linkedinUrl;
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Janindu Munasinghe</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--developer">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn-primary" onClick={navigateToLinkedIn}>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Janindu.png" alt="Hero Section" />
      </div>
    </section>
  );
}
