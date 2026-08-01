export interface InstagramPosts {
 id: string;
 imageSrc: string;
 imageAlt: string;
}

export const aboutContent = {
  eyebrow: "Nuestra historia",
  title: "Sobre Alaia",
  storyTitle: "Joyería con alma, hecha para el día a día",
  storyParagraphs: [
    "Alaia nació de la idea de que la joyería fina no debería reservarse para ocasiones especiales. Creemos en piezas que acompañen tu vida diaria — que se sientan tan bien puestas un martes cualquiera como en una celebración.",
    "Cada diseño pasa por manos que cuidan el detalle: materiales duraderos, acabados que resisten el uso diario, y un estilo que no pasa de moda. No perseguimos tendencias pasajeras, buscamos piezas que quieras usar por años.",
    "Hoy seguimos creciendo con la misma idea con la que empezamos: hacer joyería elegante, honesta y accesible para quien la use.",
  ],
  signature: {
    name: "El equipo Alaia",
    role: "Fundadoras de Alaia",
  },
  community: {
    title: "Únete a nuestra comunidad",
    paragraphs: [
      "Sé parte de la comunidad Alaia siguiéndonos en Instagram y compartiendo tus fotos con #usoalaia.",
      "¿Nos sigues en Pinterest? Guarda tus piezas favoritas en nuestro tablero y cuéntanos cómo las combinas.",
    ],
    imageSrc: "https://res.cloudinary.com/dkfoa4nu2/image/upload/v1784757395/community_zbf5vh.png",
    imageAlt: "Piezas de joyería Alaia sobre una superficie de lino",
  },
  instagramTitle: "Síguenos en Instagram",
  quote:
    "Queremos que cada pieza Alaia se sienta como una extensión de ti, no como un accesorio más.",
};

export const instagramPosts : InstagramPosts[] = [
  { id: "1", imageSrc: "/images/about/ig-1.jpg", imageAlt: "Anillo Alaia sobre mármol" },
  { id: "2", imageSrc: "/images/about/ig-2.jpg", imageAlt: "Clienta luciendo collar Alaia" },
  { id: "3", imageSrc: "/images/about/ig-3.jpg", imageAlt: "Detalle de pulsera Alaia" },
  { id: "4", imageSrc: "/images/about/ig-4.jpg", imageAlt: "Aretes Alaia en caja de regalo" },
  { id: "5", imageSrc: "/images/about/ig-5.jpg", imageAlt: "Mesa con piezas Alaia" },
  { id: "6", imageSrc: "/images/about/ig-6.jpg", imageAlt: "Clienta probándose anillos Alaia" },
];