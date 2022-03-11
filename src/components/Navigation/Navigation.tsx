import "./navigation.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectNav, setActive } from "../../store/reducers/navigationSlice";

function Navigation() {
  const { active } = useAppSelector(selectNav);
  const dispatch = useAppDispatch();

  return (
    <nav>
      <a className={active === "#" ? "active" : ""} href="#" onClick={() => dispatch(setActive("#"))}>
        <AiOutlineHome />
      </a>
      <a className={active === "#about" ? "active" : ""} href="#about" onClick={() => dispatch(setActive("#about"))}>
        <AiOutlineUser />
      </a>
      <a className={active === "#experience" ? "active" : ""} href="#experience" onClick={() => dispatch(setActive("#experience"))}>
        <BiBook />
      </a>
      <a className={active === "#portfolio" ? "active" : ""} href="#portfolio" onClick={() => dispatch(setActive("#portfolio"))}>
        <RiServiceLine />
      </a>
      <a className={active === "#contact" ? "active" : ""} href="#contact" onClick={() => dispatch(setActive("#contact"))}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navigation;
