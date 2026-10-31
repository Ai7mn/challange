import React from "react";

import features from "./FeaturesList";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="Awesome_apps_features">
        <h5>Awesome app features</h5>
        <p>
          Increase productivity with a simple experience designed around the
          tasks that matter most.
        </p>
      </div>

      <div className="features-list">
        {features.map((item) => (
          <div key={item.id} className={item.cName}>
            <div className="ellipse">
              <img src={item.icon} alt="" aria-hidden="true" />
            </div>
            <div>
              <h5 className="title">{item.title}</h5>
              <p className="describtion">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
