import styles from "./PhotoStack.module.css";

interface PhotoStackProps {
  mainImageSrc: string;
  mainImageAlt: string;
  smallImageSrc: string;
  smallImageAlt: string;
}

export default function PhotoStack({
  mainImageSrc,
  mainImageAlt,
  smallImageSrc,
  smallImageAlt,
}: PhotoStackProps) {
  return (
    <div className={styles.photoStack}>
      <img src={mainImageSrc} alt={mainImageAlt} className={styles.photoMain} />
      <img
        src={smallImageSrc}
        alt={smallImageAlt}
        className={styles.photoSmall}
      />
    </div>
  );
}