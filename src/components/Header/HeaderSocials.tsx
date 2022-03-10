import "./header.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="linkdin" target="_blank">
        <BsLinkedin />
      </a>
      <a href="github" target="_blank">
        <FaGithub />
      </a>
      <a href="facebook" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials;
