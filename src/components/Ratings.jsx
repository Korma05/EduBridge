import { memo } from "react";
import { RatingData } from "./Data";
const Ratings = () => {
  return (
    <div className="Ratings">
      {RatingData.map((someOne) => {
        return (
          <ul key={someOne.id}>
            <li>
              <span>{someOne.stars}</span>
              <p className="desc">{someOne.description}</p>
              <div className="info">
                <img src={someOne.img} alt="Student" />
                <div className="text">
                  <p>{someOne.name}</p>
                  <p>{someOne.job}</p>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default memo(Ratings);
