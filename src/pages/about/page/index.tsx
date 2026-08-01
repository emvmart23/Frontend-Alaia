import { aboutContent, instagramPosts } from "../../../mockData";
import { CommunitySection, PhotoStack } from "../components";
import InstagramGrid from "../components/InstagramGrid";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.pageTitle}>
        <p className={styles.eyebrow}>{aboutContent.eyebrow}</p>
        <h1 className={styles.serif}>{aboutContent.title}</h1>
      </div>

      <section className={styles.aboutSection} aria-labelledby="our-story">
        <PhotoStack
          mainImageSrc="https://res.cloudinary.com/dkfoa4nu2/image/upload/v1784754868/hero-about-1_dmnzqa.png"
          mainImageAlt="Modelo luciendo joyería Alaia"
          smallImageSrc="https://res.cloudinary.com/dkfoa4nu2/image/upload/v1784754937/hero-about-2_lwepkm.png"
          smallImageAlt="Detalle de anillos y pulseras Alaia"
        />

        <div className={styles.story}>
          <h2 className={styles.serif}>{aboutContent.storyTitle}</h2>

          {aboutContent.storyParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className={styles.signature}>
            <p className={styles.signatureName}>
              {aboutContent.signature.name}
            </p>
            <p className={styles.signatureRole}>
              {aboutContent.signature.role}
            </p>
          </div>
        </div>
      </section>

      <CommunitySection
        title={aboutContent.community.title}
        paragraphs={aboutContent.community.paragraphs}
        imageSrc={aboutContent.community.imageSrc}
        imageAlt={aboutContent.community.imageAlt}
      />

      <InstagramGrid title={aboutContent.instagramTitle} posts={instagramPosts} />
 
      <section className={styles.quoteSection}>
        {/* <blockquote> es el elemento semántico correcto para una cita,
            no un <p> genérico. */}
        <blockquote className={`${styles.bigQuote} ${styles.serif}`}>
          “{aboutContent.quote}”
        </blockquote>
      </section>
    </>
  );
}
