import PostCard from "@/components/postCard/PostCard";
import styles from "./Blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  // console.log(data);
  return data;
};

export default async function Blog() {
  // const posts = await getPosts();

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
