import "./testimonials.css";
import AVATAR1 from "../../assets/skills/html.png";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews from people</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="AVATAR1" />
          </div>
          <h5 className="client__name">Valeriu Rusu</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis architecto enim atque voluptatum voluptatibus iste
            necessitatibus accusantium consectetur eligendi voluptates doloremque rem ab eaque, inventore sapiente sunt sed earum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="AVATAR1" />
          </div>
          <h5 className="client__name">Valeriu Rusu</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis architecto enim atque voluptatum voluptatibus iste
            necessitatibus accusantium consectetur eligendi voluptates doloremque rem ab eaque, inventore sapiente sunt sed earum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="AVATAR1" />
          </div>
          <h5 className="client__name">Valeriu Rusu</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis architecto enim atque voluptatum voluptatibus iste
            necessitatibus accusantium consectetur eligendi voluptates doloremque rem ab eaque, inventore sapiente sunt sed earum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="AVATAR1" />
          </div>
          <h5 className="client__name">Valeriu Rusu</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis architecto enim atque voluptatum voluptatibus iste
            necessitatibus accusantium consectetur eligendi voluptates doloremque rem ab eaque, inventore sapiente sunt sed earum.
          </small>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
