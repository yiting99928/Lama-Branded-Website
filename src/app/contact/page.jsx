import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"></input>
          <input type="text" placeholder="Email Address"></input>
          <input type="text" placeholder="Phone Number (Optional) "></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
