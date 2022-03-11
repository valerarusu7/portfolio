import "./header.css";
import HeaderButtons from "./HeaderButtons";
import ME from "../../assets/my-photo.png";
import HeaderSocials from "./HeaderSocials";
import { setActive } from "../../store/reducers/navigationSlice";
import { useAppDispatch } from "../../store/hooks";

function Header() {
  const dispatch = useAppDispatch();

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Valeriu Rusu</h1>
        <h5 className="text-light">Software Developer</h5>
        <HeaderButtons />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" onClick={() => dispatch(setActive("#contact"))} className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
