import { formatFullDate } from "../../utils/date";
import styles from "./BlogListCard.module.css";
import { Link } from "react-router";

export default function BlogListCard({
  image,
  title,
  category,
  readTime,
  excerpt,
  authorName,
  date,
  slug,
  avatar,
}) {
  return (
    <>
      <Link className="text-decoration-none text-white" to={`/blog/${slug}`}>
        <article className={`${styles.BlogListCard} row`}>
          <div className="col-12 col-md-4 p-0">
            <div
              className={`${styles.BlogListImage} overflow-hidden position-relative`}
            >
              <div
                className={`${styles.shadowOverlay} position-absolute`}
              ></div>
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="col-12 col-md-8 p-0">
            <div className={`${styles.BlogListContent} d-flex flex-column`}>
              <div className={`d-flex flex-row align-items-center gap-2 mb-3`}>
                <span
                  className={`${styles.BlogListBadge} text-orange-500 fs-12px fw-semibold`}
                >
                  {category}
                </span>
                <div className="fs-14px text-neutral-500">
                  <i className="fa-regular fa-clock ms-1 align-middle"></i>
                  {readTime}
                </div>
                <div className="fs-14px text-neutral-500">
                  <i className="fa-regular fa-calendar ms-1 align-middle"></i>
                  {formatFullDate(date)}
                </div>
              </div>
              <h2 className="fs-24px fw-bold ">{title}</h2>
              <p className="text-neutral-400 fs-16px mb-3 w-80">{excerpt}</p>
              <div className="d-flex flex-row align-items-center justify-content-between ">
                <div className="d-flex flex-row align-items-center gap-2">
                  <div className={`${styles.BlogListAvatar}`}>
                    <img
                      src={avatar}
                      alt={authorName}
                      className="rounded-circle"
                    />
                  </div>
                  <div className={`d-flex flex-column`}>
                    <p className="fs-14px fw-semibold text-white mb-0">
                      {authorName}
                    </p>
                    <span className="text-neutral-500 fs-12px">{date}</span>
                  </div>
                </div>

                <span className="text-orange-500 fw-semibold fs-14px ">
                  اقرأ المقال
                  <i
                    className={`${styles.arrow} fa-solid fa-arrow-left me-1 align-middle`}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
