import { memo } from "react";
import CardContainer from "./CardContainer";
const Home = () => {
  return (
    <section id="Home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunintes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            officiis a expedita omnis pariatur doloremque?
          </p>
          <div className="btns">
            <a href="#" className="btn btn-red">
              Get Quote Now
            </a>
            <a href="#" className="btn btn-transparent">
              Get Quote Now
            </a>
          </div>
        </div>
        <CardContainer />
      </div>
    </section>
  );
};

export default memo(Home);
