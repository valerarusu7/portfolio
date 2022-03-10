import ME from "../../assets/about-photo.jpg";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Bachelor</h5>
              <small>Software Engineering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>11+ Completed</small>
            </article>
          </div>

          <p>
            Graduate software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of
            organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
            Confident communicator and innovative thinker to develop software that is customized to meet a company’s organizational needs,
            highlight their core competencies, and further their success.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
