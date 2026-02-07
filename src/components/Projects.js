import project1 from "../assets/project1.png";

export default function Projects() {
  return (
    <section className="featured-projects">
      <h2 className="featured-title">Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-box">
          <img src={project1} alt="Cover Letter AI" />

          <div className="project-info">
            <h3>TextCraft</h3>
            <a href="" target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project-box">
          <img src={project1} alt="Food Hub" />

          <div className="project-info">
            <h3>Food Hub</h3>
            <a href="#" target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project-box">
          <img src={project1} alt="Eventify" />

          <div className="project-info">
            <h3>Eventify</h3>
            <a href="#" target="_blank">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
}


