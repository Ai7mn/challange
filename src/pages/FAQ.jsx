import React from "react";

import "./ContentPage.css";

const questions = [
  {
    question: "What is this project?",
    answer:
      "It is a React implementation of an AppLab product landing-page design created as a frontend coding challenge.",
  },
  {
    question: "Which technologies does it use?",
    answer:
      "The project uses React, React Router, Testing Library, CSS, and the Create React App toolchain.",
  },
  {
    question: "Is the project production-ready?",
    answer:
      "It is a portfolio and coding-challenge implementation. Production deployment would require product-specific content, links, analytics, and a dependency upgrade plan.",
  },
];

function FAQ() {
  return (
    <main className="content-page">
      <header className="content-page__header">
        <p className="content-page__eyebrow">Support</p>
        <h1>Frequently asked questions</h1>
        <p className="content-page__lead">
          Key implementation details and project expectations at a glance.
        </p>
      </header>

      <section className="faq-list" aria-label="Frequently asked questions">
        {questions.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}

export default FAQ;
