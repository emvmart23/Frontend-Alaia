import { Carrousel } from "../../../components/ui/index";

const imgs = [
  {
    id: 0,
    url: "https://res.cloudinary.com/dkfoa4nu2/image/upload/v1780639911/hero-jewelry-03_gj7u44.jpg"
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

  return (
    <section>
      <Carrousel images={imgs}/>
    </section>
  );
}
