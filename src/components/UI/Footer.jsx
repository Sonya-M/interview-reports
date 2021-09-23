import React from "react";
import { Link } from "react-router-dom";
import BBTLogo from "./BBTLogo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.content}>
        <p className={styles.year}>Ⓒ 2021</p>
        <div className={styles.logo}>
          <Link to="/about">
            <BBTLogo />
          </Link>
        </div>
      </div>
    </footer>
  );
}
