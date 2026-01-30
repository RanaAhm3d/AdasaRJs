import styles from "./ArticleContent.module.css";

export default function ArticleContent({ index, title, paragraph }) {
  return (
    <>
      <div className={`${styles.ArticleContent}`}>
        <div className={` d-flex flex-row gap-2`}>
          <div
            className={`${styles.ArticleContentWrapper} d-flex align-items-center justify-content-between`}
          >
            <i className="fa-solid fa-camera text-orange-500"></i>
          </div>
          <h2
            className="fs-24px fs-md-30px mb-4 fw-bold text-white"
            id={`section-${index}`}
          >
            {title}
          </h2>
        </div>
        <p className="fs-18px text-neutral-300 mb-4">{paragraph}</p>
      </div>
    </>
  );
}
