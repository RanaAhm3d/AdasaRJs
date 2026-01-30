import { Link } from "react-router";
import styles from "./BlogMayLikeCard.module.css";

export default function BlogMayLikeCard({
  image,
  title,
  category,
  readTime,
  avatar,
  authorName,
  slug,
}) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <Link className="text-decoration-none text-white" to={`/blog/${slug}`}>
          <article className={`${styles.blogCard} d-flex flex-column`}>
            <div className={`${styles.blogCardImage} position-relative`}>
              <div className={`${styles.blogCardBadge} position-absolute`}>
                <span className="fs-12px fw-bold ">{category}</span>
              </div>
              <div
                className={`${styles.shadowOverlay} position-absolute `}
              ></div>
              <img src={image} alt={title} />
            </div>
            <div className={`${styles.blogCardContent}`}>
              <h3 className="fs-16px fw-bold">{title}</h3>
              <div
                className={` d-flex flex-row justify-content-between align-items-center`}
              >
                <div className={`d-flex flex-row gap-2`}>
                  <div className={`${styles.blogCardAvatar}`}>
                    <img
                      src={avatar}
                      alt={authorName}
                      className="rounded-circle"
                    />
                  </div>
                  <p className="fs-14px text-neutral-500 mb-0">{authorName}</p>
                </div>
                <span className="fs-14px text-neutral-500">{readTime}</span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
}
