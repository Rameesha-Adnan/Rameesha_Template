import { NavLink } from "react-router-dom";
import MyHeroImage from "../assets/background.jpg";

const fullName = 'Rameesha Adnan.';
const personalQuote = 'Do what makes you happy!';
const professionalSummary = 'Combining a creative background in Interior Design 🎨 with a passion for technology 💻 , I am transitioning into Full Stack Development to create practical, user-focused solutions. My experience in design, paired with project management, allows me to approach technical development from a unique perspective, one that prioritizes user experience, visual appeal, and functionality.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={MyHeroImage} alt="hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home