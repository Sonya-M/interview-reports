import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Header.module.css";
import { ChevronDoubleDown } from "react-bootstrap-icons";



export default function Header(props) {
  const menuItemClasses = `${props.className ? props.className : " "}`;
  const [showOptions, setShowOptions] = useState(false)
  const handleOptions = () => {
    setShowOptions(!showOptions)
  }
  const hideOptions = () => {
    setShowOptions(false)
  }
  return (
    <header className={styles.Header}>
      <nav className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.Menu}>
        <button className={styles.dropdownBtn} onClick={handleOptions} onBlur={hideOptions}>  &#9660; </button>
        <ul className={showOptions ? styles.dropdownContentShow : styles.dropdownContentHide}>
        {props.menuItems.map((item, index) => {
          if (!item) return null;
          return (
            <li key={index} className={menuItemClasses}>
              {item}
            </li>
          );
        })}
        </ul>
      </div>
      </nav>
    </header>
  );
}
