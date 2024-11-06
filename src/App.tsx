import React, { CSSProperties, useEffect, useState } from "react";
import logo from "./logo.svg";
import uqlogo from "./assets/UQ_logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 540); // Adjust width as needed
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function App() {
  const [isTesting, setTesting] = useState(false);
  const [isRequestingUsername, setRequest] = useState(false);

  const isMobile = useIsMobile();

  const browserLanguage = navigator.language;
  const isEnglish = browserLanguage.startsWith("en");

  const handleImageClick = () => {
    console.log("Image clicked!");
    setTesting((prevState) => !prevState);
  };

  function socials() {
    const style: CSSProperties = {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      gap: `15px`,
    };

    return (
      <div style={style} className="centered">
        <SocialIcon url="https://t.me/unitedqueerdom" />
        {/* {isTesting && (
                <div>
                  <TelegramLoginButton
                    botName="UnitedQueerdom_bot"
                    dataOnauth={(user: TelegramUser) => {
                      if (user.username.length > 0) {
                        window.location.href = `https://airtable.com/appACty8e1HF61bIZ/paggfYqRFiuJRowWd/form?prefill_Telegram=${user.username}`;
                      } else {
                        setRequest(true);
                      }
                    }}
                  />
                  {isRequestingUsername && (
                    <div style={{ color: "red" }}>
                      <p>
                        Please{" "}
                        <a href="https://telegram.org/faq?setln=en#q-what-are-usernames-how-do-i-get-one">
                          set a Telegram username
                        </a>{" "}
                        to continue
                      </p>
                      <p>Пожалуста установите username в Telegram</p>
                    </div>
                  )}
                </div>
              )} */}

        {/* <SocialIcon url="https://t.me/queerdom_bot" /> */}
        <SocialIcon url="https://www.instagram.com/unitedqueerdom/" />
        <SocialIcon url="https://www.tiktok.com/@unitedqueerdom" />
        <SocialIcon url="https://www.linkedin.com/company/unitedqueerdom/" />
        <SocialIcon url="https://www.facebook.com/unitedqueerdom/" />
      </div>
    );
  }

  function header() {
    return (
      <header>
        <div className="row centered">
          {/* <button onClick={handleImageClick}> */}
          <img
            src={uqlogo}
            alt="logo"
            className="App-logo"
            onClick={handleImageClick}
            style={{ cursor: "pointer", pointerEvents: "all" }}
          />
          {/* </button> */}
          <div>
            {!isMobile && socials()}
            <h4>Central Asia & Eastern Europe LGBTQ+ Community</h4>
          </div>
        </div>
        {isMobile && socials()}
      </header>
    );
  }

  return (
    <div className="App">
      {header()}
      <div
        style={{
          position: "sticky",
          top: 0,
          paddingTop: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{}}>
          <h1
            style={{
              marginBottom: 50,
            }}
          >
            We're growing here 🪴
          </h1>
          <div
            className="row"
            style={{
              gap: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialIcon url="https://t.me/+MXOdJ9ytlMoxNmFk" />
            <a href="https://t.me/+MXOdJ9ytlMoxNmFk">
              {isEnglish && <h1>Join</h1>}
              {!isEnglish && <h1>Присоединиться</h1>}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
