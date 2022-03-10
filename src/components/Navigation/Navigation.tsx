import "./navigation.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

function Navigation() {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a className={active === "#" ? "active" : ""} href="#" onClick={() => setActive("#")}>
        <AiOutlineHome />
      </a>
      <a className={active === "#about" ? "active" : ""} href="#about" onClick={() => setActive("#about")}>
        <AiOutlineUser />
      </a>
      <a className={active === "#experience" ? "active" : ""} href="#experience" onClick={() => setActive("#experience")}>
        <BiBook />
      </a>
      <a className={active === "#portfolio" ? "active" : ""} href="#portfolio" onClick={() => setActive("#portfolio")}>
        <RiServiceLine />
      </a>
      <a className={active === "#contact" ? "active" : ""} href="#contact" onClick={() => setActive("#contact")}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navigation;
