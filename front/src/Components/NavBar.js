import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.box}>
      <h1>Inicio</h1>
      <h1>Productos</h1>
      <h1>Carro</h1>
      <h1>Perfil</h1>
    </div>
  );
}
