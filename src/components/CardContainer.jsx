import { memo } from "react";
import { CardData } from "./DataCard";

const CardContainer = () => {
  return (
    <div className="CardContainer">
      {CardData.map((card) => (
        <ul key={card.id}>
          <li>
            <span
              className="icon"
              style={{ color: card.color, backgroundColor: card.bgColor }}
            >
              {card.img}
            </span>
            <h1 className="hhh">{card.title}</h1>
            <span className="line"></span>
            <p>{card.description}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default memo(CardContainer);
