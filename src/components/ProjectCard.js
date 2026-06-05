function ProjectCard({ project }) {
  return (
    <article className="card">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        className="image"
      />

      <div className="content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="links">
          <a href={project.github} className="button button-primary">
            GitHub
          </a>

          <a href={project.live} className="button button-secondary">
            Live Site
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
