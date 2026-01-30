import styles from "./BlogContentLinks.module.css";

export default function BlogContentLinks({ index, title }) {
  const handleScroll = () => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      const yOffset = -100; 
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <>
      <a
        className={`${styles.BlogContentLinks} text-decoration-none d-flex flex-row gap-2`}
        onClick={handleScroll}
      >
        <div
          className={`${styles.numberWrapper} d-flex align-items-center justify-content-center`}
        >
          {index + 1}
        </div>
        <span className="fs-14px">{title}</span>
      </a>
    </>
  );
}
