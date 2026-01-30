import styles from "./CardAbout.module.css";

export default function CardAbout({ icon, header, paragraph }) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className={`${styles.cardAbout} d-flex flex-column align-items-center justify-content-center w-100 h-100`}
        >
          <div className="text-orange-500">{icon}</div>
          <h3 className="fs-18px fw-bold">{header}</h3>
          <p className="fs-14px text-neutral-400 mb-0 fs-14px">{paragraph}</p>
        </div>
      </div>
    </>
  );
}
