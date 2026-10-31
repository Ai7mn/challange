import React from "react";

import trustedCompanies from "./TrustedList";
import "./trust.css";

function TrustedBy() {
  return (
    <div className="companies">
      {trustedCompanies.map((company) => (
        <div key={company.id} className="trust-images">
          <img src={company.url} alt={company.alt} />
        </div>
      ))}
    </div>
  );
}

export default TrustedBy;
