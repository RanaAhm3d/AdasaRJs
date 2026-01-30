import styles from "./Blog.module.css";
import Hero from "../../components/Hero/Hero";
import data from "../../data/data.json";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge";
import { useEffect, useMemo, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogListCard from "../../components/BlogListCard/BlogListCard";
import { useSearchParams } from "react-router-dom";

export default function Blog() {
  const POSTS_PER_PAGE = 6;
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");
  const { posts, categories } = data;
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "جميع المقالات" || post.category === activeCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return filteredPosts.slice(start, end);
  }, [filteredPosts, currentPage]);

  const countText = useMemo(() => {
    if (activeCategory === "جميع المقالات") {
      return (
        <>
          عرض <span className="fw-bold ">{filteredPosts.length}</span> مقالات
        </>
      );
    }

    return (
      <>
        عرض <span className="fw-bold text-white">{filteredPosts.length}</span>{" "}
        مقالات في{" "}
        <span className="fw-bold text-orange-500">{activeCategory}</span>
      </>
    );
  }, [filteredPosts.length, activeCategory]);

  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
      setCurrentPage(1);
    }
  }, [categoryFromUrl]);

  return (
    <>
      <Hero
        badgeText={`مدونتنا`}
        badgeIcon={<i className="fa-solid fa-newspaper"></i>}
        title={`استكشف <span>مقالاتنا</span>`}
        subTitle={`اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث`}
      />
      <section className={`${styles.Blogs}`}>
        <div className={`${styles.blogSearchCategoriesWrapper}`}>
          <div
            className={`${styles.blogSearchCategories} d-flex flex-column gap-3  flex-md-row align-items-center justify-content-md-between mx-xl-80px`}
          >
            <div className={`${styles.searchInputWrapper} position-relative`}>
              <input
                type="search"
                name="search"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث في المقالات..."
                className={`${styles.searchInput} `}
              />
              <i className="fa-solid fa-search text-neutral-500 position-absolute"></i>
            </div>
            <div className="d-flex flex-row gap-2 justify-content-center flex-wrap">
              <CategoryBadge
                category="جميع المقالات"
                isActive={activeCategory === "جميع المقالات"}
                onClick={() => setActiveCategory("جميع المقالات")}
              />

              {categories.map((category, index) => (
                <CategoryBadge
                  key={index}
                  category={category.name}
                  isActive={activeCategory === category.name}
                  onClick={() => setActiveCategory(category.name)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.blogsView} mx-xl-80px`}>
          <div
            className={`${styles.blogCounterDisplay} d-flex flex-row align-items-center justify-content-between`}
          >
            <p className="fs-16px mb-0 text-neutral-400">{countText}</p>
            <div className="d-flex flex-row align-items-center gap-2">
              <div className={`${styles.blogViewStyle} d-flex flex-row`}>
                <button
                  onClick={() => setView("grid")}
                  className={`${styles.blogGridViewBtn} d-flex align-items-center justify-content-center ${view === "grid" && styles.active}`}
                >
                  <svg
                    className="w-5 h-5 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`${styles.blogListViewBtn} d-flex align-items-center justify-content-center ${view === "list" && styles.active}`}
                >
                  <i className="fa-solid fa-bars "></i>
                </button>
              </div>
              {activeCategory !== "جميع المقالات" && (
                <div
                  onClick={() => setActiveCategory("جميع المقالات")}
                  className={`${styles.BlogClearFilter} d-flex flex-row align-items-center justify-content-center gap-1 text-neutral-500 fs-14px`}
                >
                  <i className="fa-solid fa-close "></i>
                  <span>مسح الفلاتر</span>
                </div>
              )}
            </div>
          </div>
          <div className="row gy-4">
            {paginatedPosts.map((post) =>
              view === "grid" ? (
                <BlogCard
                  key={post.id}
                  image={post.image}
                  title={post.title}
                  category={post.category}
                  readTime={post.readTime}
                  avatar={post.author.avatar}
                  authorName={post.author.name}
                  slug={post.slug}
                  date={post.date}
                  role={post.author.role}
                  excerpt={post.excerpt}
                />
              ) : (
                <BlogListCard
                  key={post.id}
                  image={post.image}
                  title={post.title}
                  category={post.category}
                  readTime={post.readTime}
                  avatar={post.author.avatar}
                  authorName={post.author.name}
                  slug={post.slug}
                  date={post.date}
                  role={post.author.role}
                  excerpt={post.excerpt}
                />
              ),
            )}
          </div>
          {filteredPosts.length > 6 && (
            <div
              className={`${styles.pagination} d-flex flex-column align-items-center justify-content-center mt-48px`}
            >
              <div className="d-flex flex-row align-items-center justify-content-center gap-2 ">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    scrollToTop();
                  }}
                  className={`${styles.paginationBtn}   ${currentPage === 1 ? styles.disabled : ""}`}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
                <div className="d-flex align-items-center gap-1">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentPage(index + 1);
                        scrollToTop();
                      }}
                      className={`${styles.paginationBtn} ${
                        currentPage === index + 1 ? styles.active : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    scrollToTop();
                  }}
                  className={`${styles.paginationBtn}  ${currentPage === totalPages ? styles.disabled : ""}`}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              <p className="text-neutral-500 mt-3 fs-14px mb-0">
                صفحة {currentPage} من {totalPages}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
