import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}
