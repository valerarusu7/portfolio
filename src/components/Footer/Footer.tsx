import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Valeriu Rusu
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
