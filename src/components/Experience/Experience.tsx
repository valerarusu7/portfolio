import "./experience.css";
import HTML from "../../assets/skills/html.png";
import CSS from "../../assets/skills/css.png";
import JS from "../../assets/skills/js.png";
import TS from "../../assets/skills/ts.png";
import NEXT from "../../assets/skills/next.png";
import REACT from "../../assets/skills/react.png";
import REDUX from "../../assets/skills/redux.png";
import ANDROID from "../../assets/skills/android.png";
import TAILWIND from "../../assets/skills/tailwind.png";
import NODEJS from "../../assets/skills/nodejs.png";
import MYSQL from "../../assets/skills/mysql.png";
import JAVA from "../../assets/skills/java.png";
import PYTHON from "../../assets/skills/python.png";
import DJANGO from "../../assets/skills/django.png";
import MONGODB from "../../assets/skills/mongodb.png";
import FIREBASE from "../../assets/skills/firebase.png";
import GOOGLE_CLOUD from "../../assets/skills/google-cloud.webp";
import AZURE from "../../assets/skills/azure.png";
import AWS from "../../assets/skills/aws.png";

function Experience() {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={HTML} alt="HTML" className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={CSS} alt="CSS" className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={JS} alt="JS" className="experience__icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={TS} alt="TS" className="experience__icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={NEXT} alt="NEXT" className="experience__icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={REACT} alt="REACT" className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={REACT} alt="REACT" className="experience__icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={REDUX} alt="REDUX" className="experience__icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img src={ANDROID} alt="ANDROID" className="experience__icon" />
              <div>
                <h4>Android Studio</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={TAILWIND} alt="TAILWIND" className="experience__icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={NODEJS} alt="NODEJS" className="experience__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={DJANGO} alt="DJANGO" className="experience__icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={MYSQL} alt="MYSQL" className="experience__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={PYTHON} alt="PYTHON" className="experience__icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Very Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={MONGODB} alt="MONGODB" className="experience__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={JAVA} alt="JAVA" className="experience__icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={FIREBASE} alt="FIREBASE" className="experience__icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={GOOGLE_CLOUD} alt="GOOGLE_CLOUD" className="experience__icon" />
              <div>
                <h4>Google Cloud</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={AZURE} alt="AZURE" className="experience__icon" />
              <div>
                <h4>Azure</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img src={AWS} alt="AWS" className="experience__icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
