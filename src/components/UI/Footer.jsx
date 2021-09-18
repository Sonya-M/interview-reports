import { style } from "dom-helpers";
import React from "react";
import BBTLogo from "./BBTLogo";
import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.Footer}>
      <div className={styles.content}>
      <p className={styles.year}>Ⓒ 2021</p>
      <div className={styles.logo}>
      <BBTLogo/>
      </div>
      </div>
    </footer>
  )
}