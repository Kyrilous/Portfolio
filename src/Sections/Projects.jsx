
const projects = [
  {
    title: "Project One",
    description: "A web application that does something interesting.",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Another cool project that showcases my skills.",
    link: "#"
    },
{
    title: "Project Three",
    description: "A web application that does something interesting.",
    link: "#"
  },
{
    title: "Project Four",
    description: "A web application that does something interesting.",
    link: "#"
  },
{
    title: "Project Five",
    description: "A web application that does something interesting.",
    link: "#"
  },
{
    title: "Project Six",
    description: "A web application that does something interesting.",
    link: "#"
  }
];




function Projects() {
  return (
    <section className="projects" id="projects">
        <h2 className="title">Projects</h2>
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a className="view-project-button" href={project.link} target="_blank" >View Project</a>
        </div>
            ))}
        </div>
    </section>
  )

}
  export default Projects