import { useEffect, useState } from "react";
import styles from "./Carrousel.module.css";

interface Props {
  id: number;
  url: string;
}

interface CarrouselProps {
  images: Props[];
}

export default function Carrousel({ images }: CarrouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className={styles.imageContainer}>
      {images.map((image) => {
        console.log('index', image.id);
        return (
          <img
            alt={image.url}
            src={image.url}
            className={`${styles.image} ${currentImageIndex === image.id ? styles.block : styles.hidden}`}
            key={image.id}
          />
        );
      })}
    </div>
  );
}
