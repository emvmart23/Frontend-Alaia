import styles from "./ProductCard.module.css";
import { Heart, ShoppingBag } from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui";
import homeProducts from "../../../../mockData/homeProducts.json";

// interface Props {
//   product: {
//     name: string;
//   };
// }

export default function CardProduct() {
  return (
    <>
      {homeProducts.saleProducts?.map((product) => (
        <Card className={styles.cards} key={product.name}>
          <CardHeader className={styles.header}>
            <Badge className={styles.badge}>compralo</Badge>
            <Heart className={styles.heart} />
            <ShoppingBag className={styles.bag} />
            <img
              className={styles.image}
              src="https://cdn.shopify.com/s/files/1/0277/6262/2567/files/lucy-williams-t-bar-hex-pendant-necklace-18ct-gold-plated-necklaces-missoma-857527.webp?v=1756463810&width=820"
              alt=""
            />
            <img
              className={styles.imageHover}
              src="https://cdn.shopify.com/s/files/1/0277/6262/2567/files/lucy-williams-engravable-arco-cord-necklace-18ct-gold-plated-necklaces-missoma-655696.jpg?v=1760544838&width=820"
              alt=""
            />
          </CardHeader>
          <CardContent className={styles.content}>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>18ct Gold Plated</CardDescription>
            <div className={styles.priceSection}>
              <s>£175.00</s>
              <strong>£140.00</strong>
              <span>(-20%)</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
