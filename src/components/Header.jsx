import { memo } from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header id="myHeader">
      <nav id="navbar">
        <a href="#" id="logo">
          EduBridge
        </a>
        <ul id="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div id="account">
          <a href="#">Login</a>
          <a href="#" id="join">
            Join Us <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
