import React from "react";

import "./ContentPage.css";

const testimonials = [
  {
    quote:
      "The interface keeps the important actions clear without making the experience feel busy.",
    author: "Product user",
  },
  {
    quote:
      "A clean hierarchy and predictable navigation make the concept easy to understand from the first screen.",
    author: "Design reviewer",
  },
  {
    quote:
      "Reusable sections keep the implementation consistent while leaving room for the product to grow.",
    author: "Frontend reviewer",
  },
];

function Testimonials() {
  return (
    <main className="content-page">
      <header className="content-page__header">
        <p className="content-page__eyebrow">Feedback</p>
        <h1>Testimonials</h1>
        <p className="content-page__lead">
          Representative testimonial content used to complete the product
          landing-page concept.
        </p>
      </header>

      <section className="content-grid" aria-label="Testimonials">
        {testimonials.map((testimonial) => (
          <article key={testimonial.author} className="content-card">
            <blockquote>“{testimonial.quote}”</blockquote>
            <cite>{testimonial.author}</cite>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Testimonials;
