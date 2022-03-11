import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";
import { useAppDispatch } from "../../store/hooks";
import { setActive } from "../../store/reducers/navigationSlice";

function Footer() {
  const dispatch = useAppDispatch();

  return (
    <footer>
      <a href="#" className="footer__logo">
        Valeriu Rusu
      </a>
      <ul className="permalinks">
        <li>
          <a href="#" onClick={() => dispatch(setActive("#"))}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => dispatch(setActive("#about"))}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => dispatch(setActive("#experience"))}>
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => dispatch(setActive("#portfolio"))}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => dispatch(setActive("#contact"))}>
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://www.linkedin.com/in/valeriu-rusu-878043180">
          <BsLinkedin />
        </a>
        <a target="_blank" href="https://github.com/valerarusu7">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.facebook.com/valera.rusu111">
          <FaFacebookF />
        </a>
        <a target="_blank" href="https://instagram.com/valerarusu7">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Valeriu Rusu. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
