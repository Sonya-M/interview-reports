import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Header.module.css";

export default function Header(props) {
  const menuItemClasses = `m-1 ${props.className}`;
  console.log(menuItemClasses);
  return (
    <header className={styles.Header}>
      <h1 className="display-5">{props.title}</h1>
      <div className={styles.Menu}>
        {props.menuItems.map((item, index) => {
          return (
            <Button key={index} className={menuItemClasses} size="sm">
              {item}
            </Button>
          );
        })}
      </div>
    </header>
  );
}
