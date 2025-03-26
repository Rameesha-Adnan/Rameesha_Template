import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'IT Team Members Webpage',
    description: 'This project is a straightforward HTML webpage aimed at managing IT team members. It facilitates the addition of new members and showcases a list of existing team members.',
    repositoryLink: 'https://github.com/Rameesha-Adnan/Path2Tech_HTML_Project.git',
  },
  {
    title: 'Email Template Webpage',
    description: 'The Email Template Webpage is a user-friendly interface that enhances the email viewing experience. It features a dynamic design for structured and visually appealing email displays.',
    repositoryLink: 'https://github.com/Rameesha-Adnan/Path2Tech_CSS_Project.git',
  },
  {
    title: 'TODO List Project',
    description: 'The TODO List is a JavaScript Project that lets users manage tasks and track progress, showcasing JavaScript skills in dynamic content handling.',
    repositoryLink: 'https://github.com/Rameesha-Adnan/JS.Project.git',
  },
  {
    title: 'Book Store Project',
    description: 'The Book Store Website is an interactive application built with HTML, CSS, and JavaScript. It enhances client-side development skills by allowing users to explore and manage books dynamically through the DOM.',
    repositoryLink: 'https://github.com/kiaraaa123/group5-dom-project.git',
  },
  {
    title: 'The Weather App',
    description: 'The Weather Application is a React-based project that fetches data from the OpenWeatherAPI to display real-time weather for a selected location. It reinforces React fundamentals, including components, props, event handling, forms, API calls, and basic hooks.',
    repositoryLink: 'https://github.com/Rameesha-Adnan/Weather-app-project.git',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects