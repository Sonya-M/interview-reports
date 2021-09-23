import styles from "./LoaderRipple.module.css";

export default function LoaderRipple(props) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles["lds-ripple"]}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
