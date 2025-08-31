import { memo } from "react";
import SectionHeader from "./SectionHeader";
import Ratings from "./Ratings";

const Reviose = () => {
  return (
    <div className="reviose container">
      <SectionHeader
        title={"Each and every client is important"}
        descreption={
          "The Gradual accumulation of information about atomic and small-scale behaviour , The Gradual accumulation of information about atomic and small-scale behaviour, The Gradual accumulation of information about atomic and small-scale behaviour, The Gradual accumulation of information about atomic and small-scale behaviour..."
        }
      />
      <Ratings />
    </div>
  );
};

export default memo(Reviose);
