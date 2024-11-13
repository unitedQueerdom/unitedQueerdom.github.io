import { SocialIcon } from "react-social-icons";

export type SocialButtonProps = {
  url: string;
  text?: string;
  logo?: string;
};

export default function SocialButton({ url, text, logo }: SocialButtonProps) {
  return (
    // rounded button with black border 2px
    <div
      className="row"
      style={{
        gap: 5,
        alignItems: "center",
        margin: 5,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "dotted",
        borderRadius: 50,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        maxHeight: 55,
        minWidth: 200,
        width: 250,
        maxWidth: 500,
      }}
    >
      {!logo && <SocialIcon url={url} />}
      <a
        className="row"
        style={{
          textDecoration: "none",
          color: "inherit",
          alignItems: "center",
        }}
        href={url}
      >
        {logo && <img src={logo} style={{ paddingRight: 5 }} />}
        <div>{text}</div>
      </a>
    </div>
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
