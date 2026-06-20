import styles from "../BrandSection/BrandSection.module.css"
import { GemIcon } from "lucide-react";
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../../../components/ui";

export default function BrandSeciton () {
  return (
    <>
        <Card className={styles.cardBrand}>
          <CardHeader>
            <img
              src="https://res.cloudinary.com/dkfoa4nu2/image/upload/v1781591231/brand-1_asdlc5.jpg"
              alt=""
              className={styles.image}
            />
          </CardHeader>
          <CardFooter className={styles.footerBrand}>
            <div className={styles.container}>
              <span>50 +</span>
              <span>Más de 50 piezas de joyería únicas</span>
            </div>
            <GemIcon size={27} />
          </CardFooter>
        </Card>
        <Card className={styles.cardBrand}>
          <CardHeader>
            <CardTitle>Encuentra algo nuevo en cada colección Alaia</CardTitle>
            <CardDescription>
              Somos apasionados de la joyería moderna y elegante. Nos
              especializamos en ofrecer una selección curada de joyería moderna
              y elegante que refleja la elegancia.
            </CardDescription>
            <Button className={styles.button} variant="secondary">
              Sobre nosotros
            </Button>
          </CardHeader>
          <CardFooter className={styles.footerBrand}>
            <div className={styles.container}>
              <span>+</span>
              <span>Nuevos diseños cada temporada</span>
            </div>
            <GemIcon size={27} />
          </CardFooter>
        </Card>
        <Card className={styles.cardBrand}>
          <CardHeader>
            <img 
              src="https://res.cloudinary.com/dkfoa4nu2/image/upload/v1781732189/brand-2_h5fqo1.jpg" 
              alt=""
              className={styles.image}/>
          </CardHeader>
        </Card>
    </>
  )
}
