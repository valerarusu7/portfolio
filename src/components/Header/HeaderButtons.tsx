import CV from "../../assets/CV.pdf";
import { useAppDispatch } from "../../store/hooks";
import { setActive } from "../../store/reducers/navigationSlice";

function HeaderButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className="cta">
      <a className="btn" href={CV} download="CV - Valeriu Rusu">
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact" onClick={() => dispatch(setActive("#contact"))}>
        Let's Talk
      </a>
    </div>
  );
}

export default HeaderButtons;
