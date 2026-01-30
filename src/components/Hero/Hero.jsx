import { Link } from "react-router";
import BadgeBtn from "../BadgeBtn/BadgeBtn";
import styles from "./Hero.module.css";
import CardHero from "../CardHero/CardHero";
export default function Hero({
  badgeText,
  badgeIcon,
  title,
  subTitle,
  buttons = [],
  cardData = [],
}) {
  return (
    <section
      className={`${styles.hero} position-relative d-flex position-relative justify-content-center `}
    >
      <div className={`${styles.custome1} position-absolute  `}></div>
      <div className={`${styles.custome2} position-absolute  `}></div>
      <div className={`${styles.heroGrid} position-absolute z-1`}></div>
      <div
        className={`${styles.heroContent} z-2 d-flex flex-column align-items-center text-center`}
      >
        <BadgeBtn text={badgeText} icon={badgeIcon} />
        <h1
          className="mb-24px fs-48px fs-md-60px fs-lg-72px text-white fw-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p
          className="text-neutral-400 mb-40px fs-20px fs-md-24px"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        ></p>
        {buttons.length > 0 && (
          <div className="d-flex flex-column w-100 flex-md-row justify-content-md-center gap-3 mb-64px ">
            {buttons.map((btn, idx) => (
              <Link key={idx} to={btn.to} className={`text-decoration-none`}>
                <button className={btn.buttonClass}>
                  {btn.icon && btn.iconPosition === "before" && btn.icon}
                  {btn.text}
                  {btn.icon && btn.iconPosition === "after" && btn.icon}
                </button>
              </Link>
            ))}
          </div>
        )}
        {cardData.length > 0 && (
          <div className="row g-3 w-100">
            {cardData.map((card, index) => (
              <CardHero
                key={index}
                icon={card.icon}
                count={card.count}
                text={card.text}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
