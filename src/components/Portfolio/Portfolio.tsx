import "./portfolio.css";
import PORTFOLIO1 from "../../assets/portfolio/portfolio1.png";
import PORTFOLIO2 from "../../assets/portfolio/portfolio2.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
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
            <a target="_blank" href="live" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO2} alt="PORTFOLIO2" />
          </div>
          <h3>Premier League App</h3>
          <div className="portfolio__item-cta">
            <a target="_blank" href="github project" className="btn">
              Github
            </a>
            <a target="_blank" href="live" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
