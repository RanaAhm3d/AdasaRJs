import styles from "./PrivacyTermsContent.module.css";

export default function PrivacyTermsContent({
  title,
  index,
  content,
  subContent,
  subTitle,
}) {
  return (
    <>
      <div className={`${styles.privacyTermsContent}`}>
        <div
          className={`${styles.container} d-flex flex-row align-items-center gap-3 mb-3`}
        >
          <div
            className={`${styles.icon} d-flex align-items-center justify-content-center text-white fw-bold`}
          >
            {index}
          </div>
          <h3 className="fs-24px text-white fw-bold mb-0">{title}</h3>
        </div>
        <p className="text-neutral-400 mb-3 fs-16px">{subContent}</p>
        <p className="text-neutral-300 fs-16px fw-medium">{subTitle}</p>
        {Array.isArray(content) ? (
          <ul className="list-unstyled ">
            {content.map((item, index) => (
              <li
                key={index}
                className="d-flex flex-row gap-2 text-neutral-400 align-items-center fs-16px "
              >
                {subTitle ? (
                  <i className="fa-solid fa-close text-red-400"></i>
                ) : (
                  <div
                    className={`${styles.circle} bg-orange-500 rounded-circle border-0 d-flex align-items-center justify-content-center ms-1`}
                  >
                    <i className="fa-solid fa-check text-black fs-12px"></i>
                  </div>
                )}
                <span>
                  <b className="text-white">{item.title}</b> {item.paragraph}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="fs-16px text-neutral-400 mb-0">{content}</p>
        )}
      </div>
    </>
  );
}
