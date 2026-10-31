import React from "react";

import features from "../components/FeaturesList";
import "./ContentPage.css";

function FeaturesPage() {
  return (
    <main className="content-page">
      <header className="content-page__header">
        <p className="content-page__eyebrow">Capabilities</p>
        <h1>Product features</h1>
        <p className="content-page__lead">
          A focused set of capabilities designed to keep common tasks simple,
          discoverable, and fast.
        </p>
      </header>

      <section className="content-grid" aria-label="Product features">
        {features.map((feature) => (
          <article key={feature.id} className="content-card">
            <img src={feature.icon} alt="" aria-hidden="true" />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default FeaturesPage;
