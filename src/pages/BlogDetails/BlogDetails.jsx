import { useParams } from "react-router";
import styles from "./BlogDetails.module.css";
import data from "../../data/data.json";
import BlogHero from "../../components/BlogHero/BlogHero";
import BlogContent from "../../components/BlogContent/BlogContent";

export default function BlogDetails() {
  const { slug } = useParams();
  const posts = data.posts;
  const post = posts.find((post) => post.slug === slug);
  const content = post.content.split("#")[0].trim();
  const sections = post.content
    .split("\n## ")
    .slice(1)
    .map((section) => {
      const [title, ...body] = section.split("\n\n");
      return {
        title: title.trim(),
        paragraph: body.join(" ").trim(),
      };
    });
  console.log(post);
  return (
    <article className={`${styles.BlogDetails}`}>
      <BlogHero
        image={post.image}
        title={post.title}
        category={post.category}
        date={post.date}
        readTime={post.readTime}
        avatar={post.author.avatar}
        authorName={post.author.name}
        role={post.author.role}
      />
      <section className={`${styles.BlogDetailsContent}`}>
        <div className="container">
          <div className="row gy-4 d-flex flex-column flex-lg-row-reverse gx-xl-5">
            <BlogContent
              title={post.title}
              content={content}
              sections={sections}
              tags={post.tags}
              avatar={post.author.avatar}
              authorName={post.author.name}
              role={post.author.role}
              readTime={post.readTime}
              date={post.date}
              category={post.category}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
