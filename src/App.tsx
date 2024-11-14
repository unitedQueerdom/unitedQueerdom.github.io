import React, { CSSProperties, useEffect, useState } from "react";
import uqlogo from "./assets/UQ_logo.svg";
import eventlogo from "./assets/event_logo.svg";
import "./App.css";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";
import SocialButton, { SocialButtonProps } from "./SocialButton";

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
  const isEnglish = false; // browserLanguage.startsWith("en");

  const handleImageClick = () => {
    console.log("Image clicked!");
    setTesting((prevState) => !prevState);
  };

  function socials() {
    const style: CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: `15px`,
    };

    const details: SocialButtonProps[] = [
      {
        url: "https://t.me/unitedqueerdom",
        text: isEnglish ? "Telegram channel" : "Телеграм канал",
      },
      {
        url: "https://www.instagram.com/unitedqueerdom/",
        text: isEnglish ? "Instagram" : "Инстаграм",
      },
      {
        url: "https://www.tiktok.com/@unitedqueerdom",
        text: isEnglish ? "TikTok" : "ТикТок",
      },
      {
        url: "https://www.linkedin.com/company/unitedqueerdom/",
        text: isEnglish ? "LinkedIn" : "Линкедин",
      },
      {
        url: "https://www.facebook.com/unitedqueerdom/",
        text: isEnglish ? "Facebook" : "Фейсбук",
      },
      {
        url: "https://www.eventbrite.co.uk/o/united-queerdom-67531342363",
        text: isEnglish ? "Eventbrite" : "Мероприятия",
        logo: eventlogo,
      },
    ];

    return (
      <div style={style} className="centered">
        {details.map((detail) => (
          <SocialButton
            url={detail.url}
            text={detail.text}
            logo={detail.logo}
          />
        ))}
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
            // onClick={handleImageClick}
            // style={{ cursor: "pointer", pointerEvents: "all" }}
          />
          {/* </button> */}
          <div>
            <h4>Central Asia & Eastern Europe LGBTQ+ Community</h4>
          </div>
        </div>
        {socials()}
      </header>
    );
  }

  function footer() {
    const email = "hello@unitedqueerdom.org";
    return (
      <footer>
        <div className="row centered">
          <SocialButton
            text={isEnglish ? "Contact us" : "Связаться с нами"}
            url={`mailto:${email}`}
          />
        </div>
      </footer>
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
          {/* <h1
            style={{
              marginBottom: 50,
            }}
          >
            We're growing here 🪴
          </h1> */}
          <div
            className="row"
            style={{
              gap: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialButton
              url="https://t.me/+MXOdJ9ytlMoxNmFk"
              text={
                isEnglish
                  ? "Join our Telegram group"
                  : "Присоединиться к Телеграм группе"
              }
            />
          </div>
        </div>
      </div>
      {footer()}
    </div>
  );
}

export default App;
