import styles from "./Privacy.module.css";
import Hero2 from "../../components/Hero2/Hero2";
import data from "../../data/data.json";
import PrivacyTermsContent from "../../components/PrivacyTermsContent/PrivacyTermsContent";
import { Link } from "react-router";

export default function Privacy() {
  const privacy = data.privacyData;
  const email = data.siteInfo.email;
  return (
    <>
      <Hero2
        title={`سياسة الخصوصية`}
        icon={
          <svg
            className=" text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
        }
      />
      <div className={`${styles.privacy}  `}>
        <div
          className={`${styles.privacyContent} d-flex flex-column align-items-start`}
        >
          <div
            className={`${styles.containerWrapper} d-flex flex-row w-100 gap-3`}
          >
            <svg
              className=" text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
            <div className="d-flex flex-column">
              <h3 className="fs-16px fw-semibold mb-1 text-orange-500">
                خصوصيتك تهمنا
              </h3>
              <p className="fs-14px mb-0">
                نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
              </p>
            </div>
          </div>
          {privacy.map((item) => (
            <PrivacyTermsContent
              key={item.id}
              title={item.title}
              content={item.content}
              index={item.id}
            />
          ))}
          <Link
            className="text-decoration-none d-flex align-items-center justify-content-center gap-2 text-orange-500 mt-3"
            to={`mailto:${email}`}
          >
            <i className="fa-regular fa-envelope fs-16px"></i>
            <span className="16px">{email}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
