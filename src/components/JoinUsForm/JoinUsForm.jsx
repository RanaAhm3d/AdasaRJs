import styles from "./JoinUsForm.module.css";
import data from "../../data/data.json";

export default function JoinUsForm() {
  const authors = data.posts.map((post) => post.author);
  return (
    <>
      <div
        className={`${styles.joinUsForm} d-flex flex-column align-items-center text-center w-100`}
      >
        <div
          className={`${styles.joinUsIcon} d-flex align-items-center justify-content-center`}
        >
          <i className="fa-regular fa-envelope"></i>
        </div>
        <h2 className="text-white fw-bold">
          اشترك في <span>نشرتنا الإخبارية</span>
        </h2>
        <p className="text-neutral-400 fs-18px">
          احصل علي نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
        </p>
        <form className="row gy-2 gy-md-0 gx-3">
          <div className="col-12 col-md-8">
            <input
              type="email"
              placeholder=" أدخل بريدك الإلكتروني"
              className={`form-control ${styles.formInput}`}
            />
          </div>
          <div className="col-12 col-md-4">
            <button
              className={`btn ${styles.joinUsBtn} text-white fw-bold d-block w-100`}
            >
              اشترك الآن
            </button>
          </div>
        </form>
        <div
          className={`d-flex flex-column flex-md-row gap-2 align-items-center`}
        >
          <div className="d-flex flex-row gap-3 gap-md-2 align-items-center">
            <div className={`d-flex flex-row`}>
              {authors.slice(0, 3).map((author, index) => (
                <div key={index} className={`${styles.authorImg}`}>
                  <img src={author.avatar} alt={author.name} />
                </div>
              ))}
            </div>
            <span className="text-neutral-500 fs-14px">
              انضم ل <span className="text-white">+10,000</span> مصور
            </span>
          </div>
          <span className="d-none d-md-block text-neutral-500">•</span>
          <span className="text-neutral-500 fs-14px">بدون إزعاج</span>
          <span className="d-none d-md-block text-neutral-500">•</span>
          <span className="text-neutral-500 fs-14px">
            إالغاء الاشتراك في أي وقت
          </span>
        </div>
      </div>
    </>
  );
}
