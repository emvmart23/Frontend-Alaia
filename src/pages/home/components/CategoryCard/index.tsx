import styles from "./Categoy.module.css"
import { BellRing } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../../components/ui";

export default function CategoryCard() {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContet}>
        <BellRing size={50}/>
        {/* <img src="" alt="" /> */}
        <CardTitle>Collares</CardTitle>
        <CardDescription>Diseños únicos para cada ocasión</CardDescription>
      </CardContent>
    </Card>
  );
}
