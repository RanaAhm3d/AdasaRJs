import { Link } from "react-router";
import styles from "./BlogHero.module.css";
import { formatFullDate } from "../../utils/date";

export default function BlogHero({
  image,
  title,
  category,
  date,
  readTime,
  avatar,
  authorName,
  role,
}) {
  return (
    <>
      <div className={`${styles.BlogImageWrapper} position-relative`}>
        <div className={`${styles.BlogBadge} position-absolute`}>
          <nav
            className={`${styles.BlogBadgeNav} d-flex flex-row align-items-center gap-2`}
          >
            <Link className="text-decoration-none " to={"/"}>
              <i className="fa-solid fa-home"></i>
            </Link>
            <i className="fa-solid fa-chevron-left"></i>
            <Link
              className="text-decoration-none fs-14px fw-semibold "
              to={"/blog"}
            >
              المدونة
            </Link>
            <i className="fa-solid fa-chevron-left "></i>
            <span className="fs-14px text-orange-500 fw-semibold">
              {category}
            </span>
          </nav>
        </div>
        <div
          className={`${styles.BlogContentWrapper} position-absolute bottom-0 end-0 start-0`}
        >
          <div className={`${styles.BlogContent} d-flex flex-column`}>
            <div className={`d-flex flex-column flex-sm-row gap-3  mb-4`}>
              <div
                className={`${styles.BlogCategoryBadge}  fw-bold text-white fs-14px`}
              >
                {category}
              </div>
              <div className="d-flex flex-row gap-2">
                <div
                  className={`d-flex flex-row gap-2 align-items-center fs-14px`}
                >
                  <i className="fa-regular fa-calendar text-white-70"></i>
                  <span className="text-white-70">{formatFullDate(date)}</span>
                </div>
                <div
                  className={`d-flex flex-row gap-2 align-items-center fs-14`}
                >
                  <i className="fa-regular fa-clock text-white-70"></i>
                  <span className="text-white-70">{readTime}</span>
                </div>
              </div>
            </div>
            <h1 className="fs-30px text-white fw-bold mb-4">{title}</h1>
            <div
              className={`${styles.BlogAuthorCard} d-flex flex-row align-items-center gap-3`}
            >
              <div className={`${styles.BlogAuthorAvatarImage}`}>
                <img src={avatar} alt={authorName} className="rounded-circle" />
              </div>
              <div className={`d-flex flex-column`}>
                <p className="fs-16px text-white mb-0">{authorName}</p>
                <span className="fs-14px text-white-60">{role}</span>
              </div>
            </div>
          </div>
        </div>
        <img src={image} alt={title} />
      </div>
    </>
  );
}
