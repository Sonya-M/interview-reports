import React, {Fragment, useState} from "react";
import { Button } from "react-bootstrap";
import styles from "./Header.module.css";
import LogoutBtn from "./LogoutBtn"

export default function Header(props) {
  let menuItems = props.menu;
  menuItems = menuItems.concat(<LogoutBtn onLogout={props.onLogout}/>)
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
      <h2 className={styles.title}>{props.title}</h2>
      {props.loggedIn ? <Fragment> <Button
        className={styles.Menu}
        onClick={handleMenuBtn}
        onBlur={hideMenu}
        
      >
        &#9660;
      </Button>
      <div className={showMenu ? styles.MenuShow : styles.MenuHide}>
        {menuItems.map((item, index) => {
          if (!item) return null;
          return (
            <span key={index} className={styles.menuItem}>
              {item}
            </span>
          );
        })}
      </div> </Fragment> : <Fragment/>}
    </nav>
  </header>
  );
}
