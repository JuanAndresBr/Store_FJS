import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  console.log("---", pathname);
  return (
    <div className={styles.box}>
      <Link href="/" className={pathname === "/" ? styles.active : styles.link}>
        <h1>Inicio</h1>
      </Link>
      <Link href="/products" className={pathname === "/products" ? styles.active : styles.link}>
        <h1>Productos</h1>
      </Link>
      <Link href="/" className={pathname === "/Carro" ? styles.active : styles.link}>
        <h1>Carro</h1>
      </Link>
      <Link href="/" className={pathname === "/Perfil" ? styles.active : styles.link}>
        <h1>Perfil</h1>
      </Link>
    </div>
  );
}
