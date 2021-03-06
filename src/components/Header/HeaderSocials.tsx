import "./header.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/valeriu-rusu-878043180" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/valerarusu7" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/valera.rusu111" rel="noreferrer" target="_blank">
        <BsFacebook />
      </a>
      <a target="_blank" rel="noreferrer" href="https://instagram.com/valerarusu7">
        <FiInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
