import styles from "./inicio.module.css";
import NavBar from "@/Components/NavBar";

export default function Layout({ children }) {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}>STORE</h1>
      <NavBar />
      <div>{children}</div>
    </main>
  );
}
