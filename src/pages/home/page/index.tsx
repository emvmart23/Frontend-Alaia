import { useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Carrousel,
} from "../../../components/ui";
import { CardProduct, CategoryCard } from "../components";
import styles from "../page/Home.module.css";
import homeProducts from "../../../mockData/homeProducts.json";
import { GemIcon } from "lucide-react";

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
  const [products, setProducts] = useState(homeProducts);

  return (
    <>
      <Carrousel images={imgs}>
        <h2 className={styles.title}>Intenta algo nuevo</h2>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonFilled}>Ver categorias</Button>
          <Button className={styles.buttonFilled}>Ver categorias</Button>
        </div>
      </Carrousel>
      <section className={styles.featuredProducts}>
        <h2>Esenciales de verano</h2>
        <div className={styles.product}>
          {products.saleProducts?.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section className={styles.category}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </section>
      <section className={styles.brand}>
        <Card className={styles.cardBrand}>
          <CardHeader>
            <img src="https://res.cloudinary.com/dkfoa4nu2/image/upload/v1781591231/brand-1_asdlc5.jpg" alt="" className={styles.image}/>
          </CardHeader>
          <CardFooter>
            <div className={styles.container}>
              <span>50+</span>
              <span>más de 50 piezas de joyería únicas</span>
            </div>
            <GemIcon/>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
