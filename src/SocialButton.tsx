import { SocialIcon } from "react-social-icons";

export type SocialButtonProps = {
  url: string;
  text?: string;
  logo?: string;
};

export default function SocialButton({ url, text, logo }: SocialButtonProps) {
  return (
    // rounded button with black border 2px
    <a className="row social-button" href={url}>
      {!logo && <SocialIcon url={url} />}
      <div
        className="row"
        style={{
          alignItems: "center",
        }}
      >
        {logo && <img src={logo} style={{ paddingRight: 5 }} />}
        <div style={{ maxWidth: 185, textAlign: "left" }}>{text}</div>
      </div>
    </a>
  );
}

{
  /* {isTesting && (
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
              )} */
}

{
  /* <SocialIcon url="https://t.me/queerdom_bot" /> */
}
