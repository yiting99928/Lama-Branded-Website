import styles from "./singlePost.module.css";
import Image from "next/image";

export default function SinglePost() {
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
				<h1 className={styles.title}>Title</h1>
				<div className={styles.detail}>
					<Image
						src="https://images.pexels.com/photos/25381433/pexels-photo-25381433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="post.png"
						width={50}
						height={50}
						className={styles.avatar}
					/>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Author</span>
						<span className={styles.detailValue}>Terry Jefferson</span>
					</div>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Publish</span>
						<span className={styles.detailValue}>01.01.2024</span>
					</div>
					<div className={styles.content}>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</div>
				</div>
			</div>
		</div>
	);
}
