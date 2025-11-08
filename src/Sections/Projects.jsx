
const projects = [
  {
    title: "Ubot",
    description: "A Discord bot that automates user feedback collection, summarizes insights, and integrates responses into Google Sheets for streamlined product research.",
    link: "https://github.com/Kyrilous/Ubot-V2"
  },
  {
    title: "Gesture Commands",
    description: "A Python application using OpenCV and MediaPipe to recognize hand gestures and control system volume in real time.",
    link: "https://github.com/Kyrilous/GestureCommands"
    },
{
    title: "Weather Application",
    description: "A Python application that fetches real-time weather data from an API and displays it through a user-friendly graphical interface.",
    link: "#"
  },
{
    title: "AutoLog",
    description: "A web app that allows users to log and track vehicle maintenance records with a SQL database and Firebase authentication.",
    link: "https://auto-logg.vercel.app/"
  },
{
    title: "2D Game",
    description: "A Java project featuring an explorable map with player movement and interactive elements.",
    link: "https://github.com/Kyrilous/2D-Game"
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