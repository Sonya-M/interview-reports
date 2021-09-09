import React from "react";
import { BoxArrowRight } from "react-bootstrap-icons";
import styles from "./LogoutBtn.module.css";


export default function LogoutBtn(props) {
  return (

      <span className={styles.LogoutBtn}>
        <BoxArrowRight
          size="1rem"
          onClick={props.onLogout}
        />
      </span>)

}