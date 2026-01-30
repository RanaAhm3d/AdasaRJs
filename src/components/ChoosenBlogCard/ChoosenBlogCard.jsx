import { Link } from "react-router";
import styles from "./ChoosenBlogCard.module.css";

export default function ChoosenBlogCard({
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
        <article className={`${styles.specialBlogCard} row`}>
          <div className="col-12 col-md-6 p-0">
            <div
              className={`${styles.specialBlogImg} overflow-hidden position-relative`}
            >
              <div
                className={`${styles.speacialBadge} position-absolute fs-12px text-white fw-semibold`}
              >
                <i className="fa-solid fa-star ms-2"></i>
                مميز
              </div>
              <div
                className={`${styles.shadowOverlay} position-absolute`}
              ></div>
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <div className={`${styles.specialBlogContent} d-flex flex-column`}>
              <div className={`d-flex flex-row align-items-center gap-2 mb-3`}>
                <div className={`${styles.specialBlogBadge}`}>
                  <span className="text-orange-500 fs-12px fw-semibold">
                    {category}
                  </span>
                </div>
                <div className="fs-14px text-neutral-500">
                  <i className="fa-regular fa-clock ms-1 align-middle"></i>
                  {readTime}
                </div>
              </div>
              <h2 className="fs-30px fw-bold mb-3">{title}</h2>
              <p className="text-neutral-400 fs-16px mb-4">{excerpt}</p>
              <div className="d-flex flex-row align-items-center justify-content-between mt-24px mt-xl-100px">
                <div className="d-flex flex-row align-items-center gap-2">
                  <div
                    className={`${styles.specialBlogAvatar} position-relative`}
                  >
                    <div className={`${styles.dotWrapper} position-absolute `}>
                      <div className={`${styles.dot}`}></div>
                    </div>
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
