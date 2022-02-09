import React, { Component } from "react";

import "./home.css";
import tickIcon from "./tick.png";
import googlePlay from "./google_play.png";
import appStore from "./app_store.png";
import TrustedBy from "../components/TrustedBy";
import Features from "../components/Features";
import Jackpots from "../components/Jackpots";
import Footer from "../components/Footer";
class Home extends Component {
  render() {
    return (
      <>
        <div className="effects"></div>

        <div className="phone phone-1"></div>
        <div className="collection-1">
          <div className="tick-icon">
            <img src={tickIcon} alt="tick" />
          </div>
          <div className="rectangle">
            <p> #1 Editiors Choice App of 2020</p>
          </div>
          <p className="best-app">Best app for your modern lifestyle</p>

          <p className="productivity">
            Increase productivity with a simple to-do app. app for managing your
            personal budget.
          </p>
          <div className="links">
            <a href="/#" className="try-btn">
              Try for Free
            </a>
            <a href="/#" className="demo-link">
              Watch demo video
            </a>
          </div>
        </div>

        <div className="trusted-by">
          <p>Trusted by companies like</p>
          <TrustedBy />
        </div>
        <div className="features-section">
          <div className="phone-2"></div>
          <Features />
          <div className="jackpots">
          <h5>Smart jackpots that you may love this anytime {'&'} anywhere</h5>
                       
              <hr className="Shape_2" />
              <p> The rise of mobile devices transforms the way we consume information enirely and world's most elevent channels such as Facebook.</p>
          </div>

          <Jackpots/>
        </div>
       <div className="download-section">
       <div className="smart-object"></div>
       <h5>Download our App now !</h5>
       <p> The rise of mobile devices transforms the way we consume information enirely and world's most elevent channels such as Facebook.</p>
       <div className="btns-group">
            <a href="/#" target="_blank" >
                <img src={googlePlay} alt="" />
            </a>
            <a href="/#" target="_blank" >
            <img src={appStore} alt="" />
            </a>
       </div>

       
       </div>

        <div className="footer-section">

                <Footer/>

                <div className="Accounts-list">
                    
                        <ul>
                            <li className="icon"></li>
                            <li className="icon"></li>
                            <li className="icon"></li>
                            <li className="icon"></li>
                        </ul>

                        
                    </div>
            <p className="copyright">Copyright © Arifur Rahman Tusha 2019. All right reserved</p>
        </div>
      
      </>
    );
  }
}

export default Home;
