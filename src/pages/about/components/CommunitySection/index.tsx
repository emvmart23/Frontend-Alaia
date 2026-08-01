import styles from "./ComunitySection.module.css";

interface CommunitySectionProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function CommunitySection({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: CommunitySectionProps) {
  return (
    <section className={styles.communitySection} aria-labelledby="join-community">
      <div className={styles.communityText}>
        <h2 id="join-community" className={styles.serif}>
          {title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.communityImage}
      />
    </section>
  );
}