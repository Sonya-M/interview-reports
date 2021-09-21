import React, { Fragment, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import styles from "./Header.module.css";
import LogoutBtn from "./LogoutBtn";
import { UserContext } from "../../App"

export default function Header(props) {
  const menuItemClasses = props.className;
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuBtn = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
 
  return (
    <header className={styles.Header}>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>{props.title}</h1>
        {props.loggedIn ? <Fragment> <Button
          className={styles.Menu}
          onClick={handleMenuBtn}
          onBlur={hideMenu}
          
        >
          &#9660;
        </Button>
        <div className={showMenu ? styles.MenuShow : styles.MenuHide}>
          {props.menuItems.map((item, index) => {
            if (!item) return null;
            return (
              <span key={index} className={styles.menuItem} size="sm">
                {item}
              </span>
            );
          })}
        </div> </Fragment> : <Fragment/>}
      </nav>
    </header>
  );
}
