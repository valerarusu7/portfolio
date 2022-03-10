import CV from "../../assets/CV.pdf";

function HeaderButtons() {
  return (
    <div className="cta">
      <a className="btn" href={CV} download="CV - Valeriu Rusu">
        Download CV
      </a>
      <a className="btn btn-primary" href="">
        Let's Talk
      </a>
    </div>
  );
}

export default HeaderButtons;
