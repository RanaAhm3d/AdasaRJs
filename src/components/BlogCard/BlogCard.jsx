import { Link } from "react-router";
import styles from "./BlogCard.module.css";
import { formatFullDate } from "../../utils/date";

export default function BlogCard({
  image,
  title,
  category,
  readTime,
  date,
  excerpt,
  avatar,
  authorName,
  role,
  slug,
}) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <Link className="text-decoration-none text-white" to={`/blog/${slug}`}>
          <article className={`${styles.blogCard} d-flex flex-column`}>
            <div className={`${styles.blogCardImage} position-relative`}>
              <div className={`${styles.blogCardBadge} position-absolute`}>
                <span className="fs-12px fw-bold">{category}</span>
              </div>
              <div
                className={`${styles.shadowOverlay} position-absolute `}
              ></div>
              <img src={image} alt={title} />
            </div>
            <div className={`${styles.blogCardContent}`}>
              <div className={`d-flex flex-row gap-2 align-items-center mb-2`}>
                <span className="fs-14px text-neutral-600 fw-medium">
                  <i className="fa-regular fa-clock ms-2"></i>
                  {readTime}
                </span>
                <span className="d-none d-md-block text-neutral-500">•</span>
                <span className="fs-14px text-neutral-600 fw-medium">
                  {formatFullDate(date)}
                </span>
              </div>
              <h3 className={` w-80 fs-20px mb-2 fw-bold`}>{title}</h3>
              <p className="fs-14px text-neutral-400 mb-4">{excerpt}</p>
              <div
                className={`${styles.blogCardFooter}  pt-4 d-flex flex-row justify-content-between align-items-center`}
              >
                <div className={`d-flex flex-row gap-2`}>
                  <div className={`${styles.blogCardAvatar}`}>
                    <img
                      src={avatar}
                      alt={authorName}
                      className="rounded-circle"
                    />
                  </div>
                  <div className={`d-flex flex-column`}>
                    <p className="fs-14px text-white mb-0">{authorName}</p>
                    <span className="fs-12px text-neutral-500 mb-0">
                      {role}
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.blogCardIcon} d-flex align-items-center justify-content-center`}
                >
                  <i className="fa-solid fa-chevron-left text-orange-500"></i>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
}
