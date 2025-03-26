import { NavLink } from 'react-router-dom';
import headshot from '../assets/Headshot.jpg';

const firstName = 'Rameesha Adnan'; 
const jobTitle = 'aspiring Full Stack Developer';  
const company = 'currently in a Tech Bootcamp';  
const mainDuty = ',learning full stack development and building projects.';  
const jobLocation = 'New York, USA.';  
const briefJobDescription = 'Transitioning from an interior design background to tech, combining design thinking with coding skills.';  
const careerObjective = 'To create user-friendly, well-designed digital experiences by merging my interior design expertise with web development skills.';  
const personalLife = 'A creative mind who loves organizing, enjoys getting dressed, adores sunflowers, and finds joy in family, cats, and babies.';  

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={headshot} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle}, {company} {mainDuty} Located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;