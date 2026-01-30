import { Link } from "react-router";
import "./Footer.css";
import data from "../../data/data.json";
export default function Footer() {
  const siteInfo = data.siteInfo;
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <footer className="footer position-relative">
        <div className="custome1 position-absolute z-0 top-0 "></div>
        <div className="custome2 position-absolute bottom-0 z-0 "></div>
        <div className="first-section position-relative z-2  row gy-4 gy-md-0 gx-4 ">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column ">
            <div className="d-flex flex-row align-items-center gap-3 mb-24px">
              <div className="icon-44px d-flex justify-content-center align-items-center fs-20px">
                ع
              </div>
              <div className="fw-bold fs-20px text-white">عدسة</div>
            </div>
            <p className="text-neutral-500 mb-24px fs-14px">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="social-links d-flex flex-row gap-2">
              <Link
                className=" d-flex justify-content-center align-items-center text-decoration-none"
                target="_blank"
                to={siteInfo.social.twitter}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link
                className=" d-flex justify-content-center align-items-center  text-decoration-none"
                target="_blank"
                to={siteInfo.social.github}
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                className=" d-flex justify-content-center align-items-center  text-decoration-none"
                target="_blank"
                to={siteInfo.social.linkedin}
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link
                className=" d-flex justify-content-center align-items-center  text-decoration-none"
                target="_blank"
                to={siteInfo.social.youtube}
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <h3 className="footer-title mb-24px text-white fw-semibold fs-16px d-flex flex-row gap-2 align-items-center">
              <span className="footer-title-line"></span>
              استكشف
            </h3>
            <ul className="list-unstyled d-flex flex-column m-0 p-0 fs-14px">
              <li className="mb-3 ">
                <Link
                  to={"/"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  الرئيسية
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={"/blog"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  المدونة
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={"/about"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <h3 className="footer-title mb-24px text-white fw-semibold fs-16px d-flex flex-row gap-2 align-items-center">
              <span className="footer-title-line"></span>
              التصنيفات
            </h3>
            <ul className="list-unstyled d-flex flex-column m-0 p-0 fs-14px">
              <li className="mb-3 ">
                <Link
                  to={"/blog?category=إضاءة"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  إضاءة
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={"/blog?category=بورتريه"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  بورتريه
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={"/blog?category=مناظر طبيعية"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  مناظر طبيعية
                </Link>
              </li>{" "}
              <li className="mb-3">
                <Link
                  to={"/blog?category=تقنيات"}
                  className="text-decoration-none  text-neutral-500"
                  onClick={scrollToTop}
                >
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
            <h3 className="footer-title mb-24px text-white fw-semibold fs-16px d-flex flex-row gap-2 align-items-center">
              <span className="footer-title-line"></span>
              ابقي علي اطلاع
            </h3>
            <p className="text-neutral-500 fs-14px">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form action="">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button className="btn-custome w-100">اشترك</button>
            </form>
          </div>
        </div>
        <div className="second-section d-flex flex-column flex-md-row align-items-center justify-content-between z-2">
          <p className=" text-neutral-600 fs-14px">
            © 2026 عدسة. صنع بكل
            <i className="fa-solid fa-heart text-orange-500"></i> جميع الحقوق
            محفوظة.
          </p>
          <div className="d-flex flex-row gap-3">
            <Link
              className="text-decoration-none text-neutral-600 fs-14px"
              to={"/privacy"}
              onClick={scrollToTop}
            >
              سياسة الخصوصية
            </Link>
            <Link
              className="text-decoration-none text-neutral-600 fs-14px"
              to={"/terms"}
              onClick={scrollToTop}
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
