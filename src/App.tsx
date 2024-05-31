import React from "react";
import logo from "./logo.svg";
import uqlogo from "./assets/UQ_logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <header>
        <div className="row centered">
          <img src={uqlogo} alt="logo" className="App-logo" />
          <div>
            <div className="row spaced">
              <SocialIcon url="https://t.me/+MXOdJ9ytlMoxNmFk" />
              {/* <SocialIcon url="https://t.me/queerdom_bot" /> */}
              {/* <SocialIcon url="https://instagram.com/unitedqueerdom" /> */}
              {/* <SocialIcon url="https://www.linkedin.com/company/queerdom_uk" /> */}
            </div>
            <h4>Central Asia & Eastern Europe LGBTQ+ Community</h4>
          </div>
        </div>
      </header>
      <body>
        <h1 className="center">We're growing here 🪴</h1>
      </body>
    </div>
  );
}

export default App;
