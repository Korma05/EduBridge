import { memo } from "react";
import Home from "./Home";
import Courses from "./Courses";
import Reviose from "./Reviose";
import JoinUs from "../JoinUs";

const Main = () => {
  return (
    <div className="Main">
      <Home />
      <Courses />
      <Reviose />
      <JoinUs />
    </div>
  );
};

export default memo(Main);
