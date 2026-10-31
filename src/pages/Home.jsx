import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Features from "../components/Features";
import Jackpots from "../components/Jackpots";
import TrustedBy from "../components/TrustedBy";
import appStore from "./app_store.png";
import googlePlay from "./google_play.png";
import tickIcon from "./tick.png";
import "./home.css";

function Home() {
  return (
    <>
      <div className="effects" aria-hidden="true" />
      <div className="phone phone-1" aria-hidden="true" />

      <main>
        <section className="collection-1" aria-labelledby="hero-title">
          <div className="tick-icon">
            <img src={tickIcon} alt="" aria-hidden="true" />
          </div>
          <div className="rectangle">
            <p>#1 Editor&apos;s Choice App of 2020</p>
          </div>

          <h1 id="hero-title" className="best-app">
            Best app for your modern lifestyle
          </h1>
          <p className="productivity">
            Increase productivity with a simple app for managing everyday
            priorities and your personal budget.
          </p>

          <div className="links">
            <Link to="/pricing" className="try-btn">
              Try for Free
            </Link>
            <a href="#features" className="demo-link">
              Explore features
            </a>
          </div>
        </section>

        <section className="trusted-by" aria-label="Trusted companies">
          <p>Trusted by companies like</p>
          <TrustedBy />
        </section>

        <section
          id="features"
          className="features-section"
          aria-label="Application features"
        >
          <div className="phone-2" aria-hidden="true" />
          <Features />

          <div className="jackpots">
            <h5>Smart features you can use anytime &amp; anywhere</h5>
            <hr className="Shape_2" />
            <p>
              Mobile experiences have changed how people consume information.
              AppLab keeps important actions focused and easy to discover.
            </p>
          </div>

          <Jackpots />
        </section>

        <section id="download" className="download-section">
          <div className="smart-object" aria-hidden="true" />
          <h5>Download our App now!</h5>
          <p>
            Take the same focused experience with you and keep your everyday
            workflow within reach.
          </p>

          <div className="btns-group">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Google Play"
            >
              <img src={googlePlay} alt="Get it on Google Play" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the App Store"
            >
              <img src={appStore} alt="Download on the App Store" />
            </a>
          </div>
        </section>
      </main>

      <div className="footer-section">
        <Footer />
        <div className="Accounts-list" aria-hidden="true">
          <ul>
            <li className="icon" />
            <li className="icon" />
            <li className="icon" />
            <li className="icon" />
          </ul>
        </div>
        <p className="copyright">
          Original landing-page design credit: Arifur Rahman Tusha, 2019.
        </p>
      </div>
    </>
  );
}

export default Home;
