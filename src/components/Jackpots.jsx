import React from "react";

import jackpots from "./JackpotsList";
import "./Jackpots.css";

function Jackpots() {
  return (
    <div className="jackpots">
      <div className="jackpots-list">
        {jackpots.map((item) => (
          <div key={item.id} className={item.cName}>
            <div className="ellipse">
              <img src={item.icon} alt="" aria-hidden="true" />
            </div>
            <div className="texts-section">
              <h5 className="title">{item.title}</h5>
              <p className="describtion">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jackpots;
