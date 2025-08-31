import { memo } from "react";

const SectionHeader = ({ title, descreption }) => {
  return (
    <div className="SectionHeader container">
      <span>Practice Advice</span>
      <h2>{title}</h2>
      <p>{descreption}</p>
    </div>
  );
};

export default memo(SectionHeader);
