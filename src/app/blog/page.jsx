import PostCard from "@/components/postCard/PostCard";
import styles from "./Blog.module.css";
import { getPosts } from "@/lib/data";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
