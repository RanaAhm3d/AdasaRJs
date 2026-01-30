import styles from "./TagBadge.module.css";

export default function TagBadge({ tag }) {
  return (
    <>
      <div
        className={`${styles.TagWrapper} fs-14px d-flex align-items-center justify-content-center`}
      >
        #{tag}
      </div>
    </>
  );
}
