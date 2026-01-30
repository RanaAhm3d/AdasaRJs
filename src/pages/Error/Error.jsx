import { Link } from "react-router";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <>
      <div className={`${styles.error} position-relative vh-100`}>
        <div className={`${styles.glowOrangeEffect} position-absolute `}></div>
        <div className={`${styles.glowYellowEffect} position-absolute `}></div>
        <div className={`${styles.errorGrid} position-absolute `}></div>
        <div
          className={`${styles.errorContent} position-absolute d-flex flex-column align-items-center justify-content-center`}
        >
          <h1 className="mb-0 fw-bold">404</h1>
          <div
            className={`${styles.errorEmoji} position-relative mb-5 d-flex align-items-center justify-content-center`}
          >
            <div
              className={`${styles.square} animate__animated animate__bounce animate__infinite position-absolute`}
            ></div>
            <div className={`${styles.dot} position-absolute`}></div>
            <i className="fa-solid fa-user text-orange-500 fs-1"></i>
          </div>
          <h2 className="text-white mb- fw-semibold">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 fw-medium text-center">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
          <div
            className={`${styles.buttons} d-flex flex-column flex-md-row align-items-md-center justify-content-md-center gap-3 w-100`}
          >
            <Link className="text-decoration-none" to={"/"}>
              <button className=" btn-custome text-white fw-bold w-100">
                <i className="fa-regular fa-home ms-2"></i>
                الذهاب للرئيسية
              </button>
            </Link>
            <Link className="text-decoration-none" to={"/bolg"}>
              <button className=" btn-outline-custome fw-bold w-100">
                <i className="fa-solid fa-newspaper ms-2"></i>
                تصفح المقالات
              </button>
            </Link>
          </div>
          <p className="fs-14px text-neutral-500 mb-3">قد تجد هذه مفيدة:</p>
          <div className={` d-flex flex-row gap-3 mb-2`}>
            <Link
              className={`${styles.Link} text-orange-500 fw-medium fs-14px`}
              to={"/blog"}
            >
              المدونة
            </Link>
            <span className="d-none d-md-block text-neutral-500">•</span>
            <Link
              className={`${styles.Link}  text-orange-500 fw-medium fs-14px`}
              to={"/about"}
            >
              من نحن
            </Link>
            <span className="d-none d-md-block text-neutral-500">•</span>
            <Link
              className={`${styles.Link}  text-orange-500 fw-medium fs-14px`}
              to={"/privacy"}
            >
              الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
