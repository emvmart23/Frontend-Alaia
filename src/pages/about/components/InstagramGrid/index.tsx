
import type { InstagramPosts } from "../../../../mockData/about";
import styles from "./InstagramGrid.module.css";

interface InstagramGridProps {
  title: string;
  posts: InstagramPosts[];
}

export default function InstagramGrid({ title, posts }: InstagramGridProps) {
  return (
    <section className={styles.instagramSection} aria-labelledby="instagram-feed">
      <p id="instagram-feed" className={styles.eyebrow}>
        {title}
      </p>
      <ul className={styles.instagramGrid}>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.imageSrc} alt={post.imageAlt} />
          </li>
        ))}
      </ul>
    </section>
  );
}