import { memo } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer container">
      <ul>
        <li className="one">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor <br /> sit amet
          </p>
          <div className="ico">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </li>
        <li className="two">
          <h2>Company Info</h2>
          <p className="links">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </p>
        </li>
        <li className="three">
          <h2>Features</h2>
          <ul>
            <li>
              <a href="#">Business Marketing</a>
            </li>
            <li>
              <a href="#">User Analytic</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
          </ul>
        </li>
        <li className="four">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">IOS & Android</a>
            </li>
            <li>
              <a href="#">Watch a Demo</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              {" "}
              <a href="#">API</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="last">
        © 2025 | All rights reserved made by
        <span> Mohamed Elkashef</span>
      </div>
    </div>
  );
};

export default memo(Footer);
