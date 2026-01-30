import styles from "./CategoryBadge.module.css";

export default function CategoryBadge({ category, isActive, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className={`${styles.categoryBadge} ${isActive ? styles.active : ""}`}
      >
        <span className="fs-14px fw-semibold">{category}</span>
      </div>
    </>
  );
}
