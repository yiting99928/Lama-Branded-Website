"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
}
