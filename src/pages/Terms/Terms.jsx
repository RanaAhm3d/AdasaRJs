import Hero2 from "../../components/Hero2/Hero2";
import styles from "./Terms.module.css";
import data from "../../data/data.json";
import PrivacyTermsContent from "../../components/PrivacyTermsContent/PrivacyTermsContent";
import { Link } from "react-router";

export default function Terms() {
  const terms = data.termsData;
  const email = data.siteInfo.email;
  return (
    <>
      <Hero2
        title={`شروط الخدمة`}
        icon={
          <svg
            class=" text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        }
      />
      <div className={`${styles.terms} d-flex flex-column`}>
        <div className={`${styles.termsContent} d-flex flex-column `}>
          <div
            className={`${styles.containerWrapper} d-flex flex-row w-100 gap-3`}
          >
            <svg
              className="text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <div className="d-flex flex-column">
              <h3 className="fs-16px fw-semibold mb-1 text-yellow-500">
                إشعار مهم
              </h3>
              <p className="fs-14px mb-0">
                يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو
                استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>
          </div>
          {terms.map((item) => (
            <PrivacyTermsContent
              key={item.id}
              title={item.title}
              content={item.content}
              index={item.id}
              subTitle={item.subTitle}
              subContent={item.subContent}
            />
          ))}
          <Link
            className="text-decoration-none d-flex align-items-center gap-2 text-orange-500 mt-3"
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
