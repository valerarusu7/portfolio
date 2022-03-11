import "./portfolio.css";
import PORTFOLIO1 from "../../assets/portfolio/portfolio1.png";
import PORTFOLIO2 from "../../assets/portfolio/portfolio2.png";
import PORTFOLIO3 from "../../assets/portfolio/portfolio3.png";
import PORTFOLIO4 from "../../assets/portfolio/portfolio4.png";
import PORTFOLIO5 from "../../assets/portfolio/portfolio5.png";
import PORTFOLIO6 from "../../assets/portfolio/portfolio6.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work - Some projects can not be displayed because the project or the codebase is confidential</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO1} alt="PORTFOLIO2" />
          </div>
          <h3>Star Wars Game</h3>
          <div className="portfolio__item-cta">
            <a target="_blank" href="github project" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO2} alt="PORTFOLIO2" />
          </div>
          <h3>Premier League App</h3>
          <div className="portfolio__item-cta">
            <a target="_blank" href="https://github.com/valerarusu7/PremierLeagueApp" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO3} alt="PORTFOLIO3" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a target="_blank" href="https://github.com/valerarusu7/portfolio" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO6} alt="PORTFOLIO6" />
          </div>
          <h3>Museum Monitoring System</h3>
          <div className="portfolio__item-cta">
            <a target="_blank" href="https://github.com/valerarusu7/Sep-4-Museum" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO4} alt="PORTFOLIO4" />
          </div>
          <h3>Drivepilot</h3>
          <div className="portfolio__item-cta">
            <div className="btn">Github - Confidential</div>
            <a target="_blank" href="https://apps.apple.com/dk/app/drivepilot/id1104125163?platform=iphone" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO5} alt="PORTFOLIO5" />
          </div>
          <h3>Stibo MeetUp</h3>
          <div className="portfolio__item-cta">
            <div className="btn">Github - Confidential</div>
            <a target="_blank" href="https://www.stibomeetup.com/" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
