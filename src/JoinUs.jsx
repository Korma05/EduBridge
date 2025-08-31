import { memo } from "react";

const JoinUs = () => {
  return (
    <div className="JoinUs">
      <span className="title">Practice Advice</span>
      <h2>JOIN US</h2>
      <p>
        Have questions or need assistance? Reach out to us through our our team
        <br />
        we are here to help and ensure you have the best experience passible!
      </p>
      <div className="log">
        <input type="email" placeholder="Your Email" />
        <button type="submet">Submet</button>
      </div>
    </div>
  );
};

export default memo(JoinUs);
