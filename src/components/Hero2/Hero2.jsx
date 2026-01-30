import { Link } from "react-router";
import styles from "./Hero2.module.css";
export default function Hero2({ title, icon }) {
  return (
    <section
      className={`${styles.hero} position-relative d-flex position-relative justify-content-center `}
    >
      <div className={`${styles.custome1} position-absolute top-0 `}></div>
      <div className={`${styles.custome2} position-absolute bottom-0 `}></div>
      <div className={`${styles.heroGrid} position-absolute z-1`}></div>
      <div
        className={`${styles.heroContent} z-2 d-flex flex-column align-items-center text-center`}
      >
        <nav className={`d-flex flex-row gap-2 align-items-center mb-32px`}>
          <Link
            className="text-decoration-none text-neutral-400 fs-14px"
            to={"/"}
          >
            الرئيسية
          </Link>
          <i className="fa-solid fa-chevron-left text-neutral-600 fs-12px"></i>
          <span className="fs-14px fw-medium text-orange-500">{title}</span>
        </nav>
        <div
          className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
        >
          {icon}
        </div>
        <h1 className="mb-3 text-white fw-bold">{title}</h1>
        <p className="text-neutral-400 fs-18px">آخر تحديث: 15 يناير 2026</p>
      </div>
    </section>
  );
}
