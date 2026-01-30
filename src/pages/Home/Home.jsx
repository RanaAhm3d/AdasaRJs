import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import BadgeBtn from "../../components/BadgeBtn/BadgeBtn";
import data from "../../data/data.json";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import JoinUsForm from "../../components/JoinUsForm/JoinUsForm";
import { Link } from "react-router";
import ChoosenBlogCard from "../../components/ChoosenBlogCard/ChoosenBlogCard";
import BlogCard from "../../components/BlogCard/BlogCard";

export default function Home() {
  const categories = data.categories;
  const posts = data.posts;
  const homeCards = [
    {
      icon: <i className="fa-solid fa-newspaper"></i>,
      count: "+50",
      text: "مقالة",
    },
    {
      icon: <i className="fa-solid fa-users"></i>,
      count: "+10ألف",
      text: "قارئ",
    },
    {
      icon: <i className="fa-solid fa-folder-open"></i>,
      count: 4,
      text: "تصنيفات",
    },
    {
      icon: <i className="fa-solid fa-pen-nib"></i>,
      count: 6,
      text: "كاتب",
    },
  ];
  return (
    <>
      <Hero
        badgeText="مرحباً بك في عدسة"
        title={`اكتشف <span>فن</span><br/> التصوير الفوتوغرافي`}
        subTitle={
          "انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br /> التصوير."
        }
        buttons={[
          {
            to: "/blog",
            text: "استكشف المقالات",
            buttonClass: "btn-custome w-100",
            icon: <i className="fa-solid fa-arrow-left me-2"></i>,
            iconPosition: "after",
          },
          {
            to: "/about",
            text: "اعرف المزيد",
            buttonClass:
              "btn-outline-custome d-flex align-items-center gap-2 w-100 justify-content-center",
            icon: (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            ),
            iconPosition: "before",
          },
        ]}
        cardData={homeCards}
      />
      <section className={`${styles.choosenBlogs} position-relative`}>
        <div
          className={`${styles.glowEffect} position-absolute z-0 top-0 end-0`}
        ></div>
        <div className="container position-relative z-1">
          <div
            className={`${styles.choosenBlogsTitle} d-flex flex-column align-items-start`}
          >
            <BadgeBtn text={"مميز"} />
            <h2 className="text-white fs-36px fs-lg-60px fw-bold mb-0">
              مقالات مختارة
            </h2>
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between w-100">
              <p className="fs-18px text-neutral-500">
                محتوي منتقي لبدء رحلة تعلمك
              </p>
              <Link className="text-decoration-none" to={"/blog"}>
                <button
                  className={`btn ${styles.showAllBtn} d-flex align-items-center text-white fw-medium`}
                >
                  عرض الكل
                  <i className="fa-solid fa-chevron-left me-2"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className=" gy-4 mx-2 mx-md-0">
            {posts.slice(0, 3).map((post) => (
              <ChoosenBlogCard
                key={post.id}
                category={post.category}
                authorName={post.author.name}
                date={post.date}
                readTime={post.readTime}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                image={post.image}
                avatar={post.author.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.categories}`}>
        <div className="container">
          <div
            className={`${styles.categoriesTitle}  d-flex flex-column align-items-center justify-content-center text-center`}
          >
            <BadgeBtn text="التصنيفات" />
            <h2 className="fw-bold text-white mb-0">استكشف حسب الموضوع</h2>
            <p className="text-neutral-500 fs-18px">
              اعثر علي محتوي مصمم حسب اهتمامك
            </p>
          </div>
          <div className="row gy-4 g-md-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                count={category.count}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.newestBlogs} position-relative`}>
        <div
          className={`${styles.glowEffect} position-absolute z-0 top-0 start-0`}
        ></div>
        <div className="container position-relative z-1">
          <div
            className={`${styles.newestBlogsTitle} d-flex flex-column align-items-start`}
          >
            <BadgeBtn text={"الأحدث"} />
            <h2 className="text-white fs-36px fs-lg-60px fw-bold mb-0">
              أحدث المقالات
            </h2>
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between w-100">
              <p className="fs-18px text-neutral-500">
                محتوي جديد طازج من المطبعة
              </p>
              <Link className="text-decoration-none" to={"/blog"}>
                <span
                  className={`${styles.showBlogs} text-orange-500 fw-semibold`}
                >
                  عرض جميع المقالات
                  <i className="fa-solid fa-arrow-left me-2 align-middle"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row gy-4">
            {posts.slice(3, 6).map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                authorName={post.author.name}
                date={post.date}
                readTime={post.readTime}
                role={post.author.role}
                avatar={post.author.avatar}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className={`${styles.subscribe} position-relative  d-flex flex-column align-items-center `}
      >
        <div className={`${styles.colorBackground} position-absolute`}></div>
        <div
          className={`${styles.subscribeContent} position-relative z-1 w-100`}
        >
          <JoinUsForm />
        </div>
      </section>
    </>
  );
}
