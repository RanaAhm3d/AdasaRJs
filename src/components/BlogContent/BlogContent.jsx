import ArticleContent from "../ArticleContent/ArticleContent";
import BlogContentLinks from "../BlogcontentLinks/BlogContentLinks";
import TagBadge from "../TagBadge/TagBadge";
import styles from "./BlogContent.module.css";
import { formatDayMonth } from "../../utils/date";
import { Link, useParams } from "react-router";
import data from "../../data/data.json";
import BlogMayLikeCard from "../BlogMayLikeCard/BlogMayLikeCard";
import { useEffect, useMemo } from "react";

export default function BlogContent({
  title,
  content,
  sections,
  tags,
  avatar,
  authorName,
  role,
  readTime,
  date,
  category,
}) {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  const sameCategoryPosts = useMemo(() => {
    return data.posts.filter((post) => post.category === category);
  }, [category]);

  const relatedPosts = useMemo(() => {
    return sameCategoryPosts.filter((post) => post.slug !== slug);
  }, [sameCategoryPosts, slug]);

  const displayedPosts = relatedPosts.slice(0, 3);

  return (
    <>
      <div className="col-12 col-lg-8 col-xl-9  ">
        <div className={`${styles.rightBlogSection}`}>
          <div className={`${styles.BlogTitleContainer}`}>
            <q className="text-neutral-200 fs-18px fst-italic">{title}</q>
          </div>
          <p className="fs-18px text-neutral-300 mb-4">{content}</p>
          {sections.map((section, index) => (
            <ArticleContent
              key={index}
              title={section.title}
              paragraph={section.paragraph}
              index={index}
            />
          ))}
          <div className={`${styles.Container}`}>
            <div className="d-flex flex-row align-items-center gap-2 mb-3">
              <div
                className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
              >
                <i className="fa-solid fa-tags text-orange-500"></i>
              </div>
              <h3 className="fw-bold text-white fs-16px mb-0">الوسوم</h3>
            </div>
            <div className="d-flex flex-row flex-wrap gap-2">
              {tags.map((tag, index) => (
                <TagBadge key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div
            className={`${styles.Container} d-flex flex-row flex-wrap gap-2 align-items-center justify-content-between`}
          >
            <div className="d-flex flex-row align-items-center gap-2 ">
              <div
                className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
              >
                <i className="fa-solid fa-share-nodes text-orange-500"></i>
              </div>
              <h3 className="fw-bold text-white fs-16px mb-0">شارك المقال</h3>
            </div>
            <div className="d-flex flex-row gap-2">
              <button
                className={`${styles.LinkWrapper} d-flex align-items-center justify-content-center `}
              >
                <i className="fa-brands fa-x-twitter text-neutral-400"></i>
              </button>
              <button
                className={`${styles.LinkWrapper} d-flex align-items-center justify-content-center `}
              >
                <i className="fa-brands fa-linkedin-in text-neutral-400"></i>
              </button>
              <button
                className={`${styles.LinkWrapper} d-flex align-items-center justify-content-center `}
              >
                <i className="fa-brands fa-whatsapp text-neutral-400"></i>
              </button>
              <button
                className={`${styles.LinkWrapper} d-flex align-items-center justify-content-center `}
              >
                <i className="fa-solid fa-link text-neutral-400"></i>
              </button>
            </div>
          </div>
          <div
            className={` ${styles.AuthorContainer} d-flex flex-column align-items-center align-items-md-start text-center text-md-end flex-md-row gap-3`}
          >
            <div className={`${styles.ImageWrapper}`}>
              <img src={avatar} alt={authorName} />
            </div>
            <div className={`d-flex flex-column`}>
              <span className="fs-12px text-orange-500 fw-semibold mb-0">
                كاتب المقال
              </span>
              <h3 className="fs-20px fw-bold text-white mt-1">{authorName}</h3>
              <p className="fs-14px text-neutral-500 mb-3">{role}</p>
              <p className="fs-16px text-neutral-400">
                مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                الفوتوغرافي.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-xl-3 order-first">
        <aside className={`${styles.leftBlogSection}`}>
          <div className={`${styles.BlogContentContainer}`}>
            <div className={`d-flex flex-row align-items-center gap-2 mb-4`}>
              <div
                className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
              >
                <i className="fa-solid fa-bars text-orange-500"></i>
              </div>
              <h3 className="fs-16px text-white fw-bold">محتويات المقال</h3>
            </div>
            {sections.map((section, index) => (
              <BlogContentLinks
                key={index}
                title={section.title}
                index={index}
              />
            ))}
          </div>
          <div
            className={`${styles.BlogContentContainer} d-flex flex-row align-items-center gap-2 text-center`}
          >
            <div
              className={`${styles.Wrapper} d-flex flex-column align-items-center w-100 `}
            >
              <i className="fa-regular fa-clock text-orange-500 mb-1 fs-4"></i>
              <p className="fs-16px text-white fw-bold mb-0">{readTime}</p>
              <span className="fs-12px text-neutral-500 ">وقت القراءة</span>
            </div>
            <div
              className={`${styles.Wrapper} d-flex flex-column align-items-center w-100 `}
            >
              <i className="fa-regular fa-calendar text-orange-500 mb-1 fs-4"></i>
              <p className="fs-16px text-white fw-bold mb-0">
                {formatDayMonth(date)}
              </p>
              <span className="fs-12px text-neutral-500 ">تاريخ النشر</span>
            </div>
          </div>
          <div
            className={`${styles.newContainer} d-flex flex-column align-items-center justify-content-center text-center p-4`}
          >
            <div
              className={`${styles.newIconWrapper} d-flex align-items-center justify-content-center mb-3`}
            >
              <i className="fa-solid fa-envelope text-orange-500 fs-4"></i>
            </div>
            <h3 className="fs-16px fw-bold text-white mb-2">لا تفوّت جديدنا</h3>
            <p className="fs-14px text-neutral-400 mb-3">
              اشترك للحصول علي أحدث المقالات
            </p>
            <Link
              className="text-decoration-none fs-16px text-white fw-semibold bg-orange-500 w-100 rounded-3"
              to={"/blog"}
            >
              تصفح المزيد
            </Link>
          </div>
        </aside>
      </div>
      <div className="col-12 ">
        <div className={`${styles.BlogsMayLikeContainer}`}>
          <div className="d-flex flex-row align-items-center justify-content-between mb-40px">
            <div className="d-flex flex-row gap-3">
              <div
                className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
              >
                <i className="fa-solid fa-images text-orange-500"></i>
              </div>
              <div className="d-flex flex-column">
                <h2 className="fs-24px fw-bold text-white mb-0">
                  مقالات قد تعجبك
                </h2>
                <p className="fs-14px text-neutral-500">
                  استكشف المزيد من المحتوي المميز
                </p>
              </div>
            </div>
            <Link
              className="text-decoration-none d-none d-md-flex flex-row align-items-center gap-2 fs-16px text-orange-500"
              to="/blog"
            >
              <span>عرض الكل</span>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="row gy-4">
            {displayedPosts.slice(0, 3).map((post) => (
              <BlogMayLikeCard
                key={post.id}
                image={post.image}
                category={post.category}
                title={post.title}
                readTime={post.readTime}
                avatar={post.author.avatar}
                authorName={post.author.name}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
