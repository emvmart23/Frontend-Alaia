import { useRef } from "react";
import { BrandSection, CardProduct, CategoryCard } from "../components";
import styles from "../page/Home.module.css";
import { Button, Carrousel } from "../../../components/ui";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const imgs = [
  {
    id: 0,
    url: "https://res.cloudinary.com/dkfoa4nu2/image/upload/v1780639911/hero-jewelry-03_gj7u44.jpg",
  },
  {
    id: 1,
    url: "https://res.cloudinary.com/dkfoa4nu2/image/upload/v1780456034/hero-jewelry-01_vgrl3n.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dkfoa4nu2/image/upload/v1780586286/hero-jewelry-02_qn09wn.jpg",
  },
];

export default function Home() {
  // const [products, setProducts] = useState(homeProducts);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlerscrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 500;
  };

  const handlerscrollRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 500;
  };

  return (
    <>
      <Carrousel images={imgs}>
        <h2 className={styles.title}>Intenta algo nuevo</h2>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonFilled}>Explorar colección</Button>
        </div>
      </Carrousel>
      <section className={styles.featuredProducts}>
        <h2>Esenciales de verano</h2>
        <div className={styles.productSlider} ref={containerRef}>
          <div className={styles.sliderIcons}>
            <ChevronLeftIcon size={25} onClick={handlerscrollLeft} />
            <ChevronRightIcon size={25} onClick={handlerscrollRight} />
          </div>
          <CardProduct />
        </div>
      </section>
      <section className={styles.category}>
        <CategoryCard />
      </section>
      <section className={styles.brand}>
        <BrandSection />
      </section>
    </>
  );
}
