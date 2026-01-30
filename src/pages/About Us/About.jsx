import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero";
import CardAbout from "../../components/CardAbout/CardAbout";
import data from "../../data/data.json";
import AuthorCard from "../../components/AuthorCard/AuthorCard";
import BadgeBtn from "../../components/BadgeBtn/BadgeBtn";
import { Link } from "react-router";

export default function About() {
  const authors = data.posts.map((post) => post.author);
  const aboutCards = [
    {
      icon: <i className="fa-solid fa-users"></i>,
      count: "+2مليون",
      text: "قارئ شهرياً",
    },
    {
      icon: <i className="fa-solid fa-newspaper"></i>,
      count: "+500",
      text: "مقالة منشورة",
    },
    {
      icon: <i className="fa-solid fa-pen-nib"></i>,
      count: "+50",
      text: "كاتب خبير",
    },
    {
      icon: <i className="fa-solid fa-book-open"></i>,
      count: "+15",
      text: "تصنيف",
    },
  ];

  const aboutCards2 = [
    {
      icon: <i className="fa-solid fa-bullseye"></i>,
      header: "الجودة أولاً",
      paragraph: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: <i className="fa-solid fa-bolt"></i>,
      header: " تركيز عملي",
      paragraph: "أمثلة واقعية يمكنك تطبيقها اليوم   ",
    },
    {
      icon: <i className="fa-solid fa-handshake"></i>,
      header: "المجتمع ",
      paragraph: "تعلم مع آلاف المصورين",
    },
    {
      icon: <i className="fa-solid fa-arrows-rotate"></i>,
      header: " دائماً محدث",
      paragraph: " أحدث الاتجاهات وأفضل الممارسات",
    },
  ];
  return (
    <>
      <Hero
        badgeText={"من نحن"}
        title={`مهمتنا هي <span>الإعلام والإلهام</span>`}
        subTitle={`مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم اسرار المحترفين ونصائح عملية </br> لتطوير مهاراتهم من. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين علي تنمية مهاراتكم من </br> خلال محتوي عالي الجودة`}
        cardData={aboutCards}
      />
      <section
        className={`${styles.rateUs} d-flex flex-column align-items-center`}
      >
        <div className="container">
          <div
            className={`${styles.rateUsTitle} d-flex flex-column align-items-center`}
          >
            <h2 className="font-bold text-white fs-30px fs-md-36px">قيمنا</h2>
            <p className="fs-18px text-neutral-400 mb-0">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="row d-flex justify-content-center gy-4 text-center">
            {aboutCards2.map((card, index) => (
              <CardAbout
                key={index}
                icon={card.icon}
                header={card.header}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className={`${styles.ourTeam} d-flex flex-column align-items-center`}
      >
        <div className="container">
          <div
            className={`${styles.ourTeamTitle} d-flex flex-column align-items-center`}
          >
            <BadgeBtn text={"فريقنا"} />
            <h2 className="text-white fw-bold fs-36px">تعرف علي كتابنا</h2>
            <p className="fs-18px text-neutral-400 text-center">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع
            </p>
          </div>
          <div
            className={`${styles.ourTeamAuthors} row gy-4 d-flex align-items-center`}
          >
            {authors.map((author, index) => (
              <AuthorCard
                key={index}
                avatar={author.avatar}
                name={author.name}
                role={author.role}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className={`${styles.contactUs} d-flex flex-column align-items-center text-center`}
      >
        <h2 className="text-white fw-bold fs-30px fs-md-36px">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className=" fs-18px">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
          تريد فقط إلقاء <br /> التحية، لا تتردد في التواصل.
        </p>
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-center gap-3 w-100">
          <Link to="mailto:hello@adasah.com" className="text-decoration-none">
            <button className={`${styles.contactBtn} w-100`}>
              <i className="fa-regular fa-envelope ms-2"></i>
              تواصل معنا
            </button>
          </Link>
          <Link to="/blog" className="text-decoration-none">
            <button className={`${styles.browseOutlinBtn} w-100`}>
              تصفح المقالات
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
