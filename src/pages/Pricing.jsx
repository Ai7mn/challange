import React from "react";

import "./ContentPage.css";

const plans = [
  {
    name: "Starter",
    summary: "A simple option for evaluating the core experience.",
    items: ["Core features", "Single-user workflow", "Standard support"],
  },
  {
    name: "Pro",
    summary: "For users who want the complete product experience.",
    items: ["All Starter features", "Advanced workflows", "Priority support"],
  },
  {
    name: "Team",
    summary: "A collaboration-ready option for growing teams.",
    items: ["All Pro features", "Shared workflows", "Team administration"],
  },
];

function Pricing() {
  return (
    <main className="content-page">
      <header className="content-page__header">
        <p className="content-page__eyebrow">Plans</p>
        <h1>Simple pricing</h1>
        <p className="content-page__lead">
          Example plan structure for the AppLab landing-page concept.
        </p>
      </header>

      <section className="content-grid" aria-label="Pricing plans">
        {plans.map((plan) => (
          <article key={plan.name} className="content-card">
            <h2>{plan.name}</h2>
            <p>{plan.summary}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Pricing;
