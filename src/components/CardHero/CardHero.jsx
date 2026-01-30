import styles from "./CardHero.module.css";
export default function CardHero({ icon, count, text }) {
  return (
    <>
      <div className="col-6 col-md-3">
        <div
          className={`${styles.cardHero} d-flex flex-column align-items-center justify-content-center w-100 h-100`}
        >
          <div className="text-orange-500">{icon}</div>
          <span className="fs-20px fw-bold fw-bold">{count}</span>
          <p className="fs-12px text-neutral-500 mb-0 fs-14px">{text}</p>
        </div>
      </div>
    </>
  );
}
