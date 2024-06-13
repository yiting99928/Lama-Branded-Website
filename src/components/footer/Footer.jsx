import styles from "./footer.module.css";
export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>Lamadev</div>
			<div className={styles.text}>
				Luma creative thoughts agency © All rights reserved.
			</div>
		</div>
	);
}
