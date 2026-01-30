import { Link, NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed start-0 end-0">
        <div className="container-fluid container-lg ">
          <Link
            className="navbar-brand d-flex flex-row gap-2 align-items-center"
            to={"/"}
          >
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              width="48"
              height="48"
              className="d-inline-block align-text-top"
            />
            <div className="d-flex flex-column">
              <span className="fw-bold text-neutral-300 fs-20px">عدسة</span>
              <span className="fw-normal d-none d-md-flex fs-12px text-orange-400-opacity-80">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>
          <button
            className="navbar-toggler me-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={"/"}>
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/blog"}>
                  المدونة
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  من نحن
                </NavLink>
              </li>
              <li>
                <Link to={"/blog"} className="text-decoration-none d-lg-none ">
                  <button className=" btn-custome fs-12px w-100 ">
                    ابدأ القراءة
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row gap-3 align-items-center">
            <button className="searchBtn d-none d-lg-flex ">
              <i className="fa-solid fa-search text-neutral-500"></i>
            </button>
            <Link
              to={"/blog"}
              className="text-decoration-none d-none d-lg-flex  "
            >
              <button className=" btn-custome  fs-12px ">ابدأ القراءة</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
