import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export default async function SinglePost({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/25381433/pexels-photo-25381433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post.png"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/25381433/pexels-photo-25381433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post.png"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.id} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    </div>
  );
}
