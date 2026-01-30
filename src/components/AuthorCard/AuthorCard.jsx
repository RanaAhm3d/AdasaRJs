import { Link } from "react-router";
import styles from "./AuthorCard.module.css";
export default function AuthorCard({ avatar, name, role }) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className={`${styles.authorCard} d-flex flex-column align-items-center w-100`}
        >
          <div className={`${styles.authorAvatar} position-relative`}>
            <img src={avatar} alt={name} />
            <div
              className={`${styles.badgeCheck} position-absolute d-flex align-items-center justify-content-center bg-orange-500 rounded-circle bottom-0`}
            >
              <i className="fa-solid fa-check text-white "></i>
            </div>
          </div>
          <h3 className="mb-0 fs-18px fw-bold text-white">{name}</h3>
          <p className="text-orange-500 fs-14px">{role}</p>
          <div className={`${styles.authorLinks} d-flex flex-row gap-3`}>
            <Link
              className={`${styles.authorLinkIcon} ${styles.twitter} d-flex align-items-center justify-content-center text-decoration-none`}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link
              className={`${styles.authorLinkIcon} ${styles.github} d-flex align-items-center justify-content-center text-decoration-none`}
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              className={`${styles.authorLinkIcon} ${styles.linkedIn} d-flex align-items-center justify-content-center text-decoration-none`}
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
