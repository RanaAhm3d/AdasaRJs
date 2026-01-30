import styles from "./BadgeBtn.module.css";
export default function BadgeHomeBtn({ text, icon }) {
  return (
    <>
      <div
        className={`${styles.sectionLabel} d-flex flex-row gap-2 mb-32px align-items-center`}
      >
        <div className={styles.pingWrapper}>
          <div className={styles.circle}></div>
          <div className={styles.dot}></div>
        </div>
        {icon && <span>{icon}</span>}
        <span className="fs-14px font-medium text-orange-500">{text}</span>
      </div>
    </>
  );
}
