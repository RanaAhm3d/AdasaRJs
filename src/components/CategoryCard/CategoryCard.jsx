import { Link } from "react-router";
import styles from "./CategoryCard.module.css";
export default function CategoryCard({ icon, name, count }) {
  return (
    <>
      <div className="col-6 col-md-3">
        <Link
          to={`/blog?category=${name}`}
          className={`${styles.categoryCard} d-flex flex-column text-decoration-none `}
        >
          <div
            className={`${styles.categoryIcon} d-flex align-items-center justify-content-center`}
          >
            <i className={`fa-solid fa-${icon}`}></i>
          </div>
          <h3 className="fs-18px text-white fw-bold mb-1">{name}</h3>
          <p className="fs-14px mb-0">{count} مقالة</p>
        </Link>
      </div>
    </>
  );
}
