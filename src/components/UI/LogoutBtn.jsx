import React, { Fragment } from "react";
import { DoorOpenFill } from "react-bootstrap-icons";
import styles from "./LogoutBtn.module.css";
import { Button } from "react-bootstrap";

export default function LogoutBtn(props) {
  return (
    <Fragment className={styles.LogoutBtn}>
      <span onClick={props.onLogout} ><DoorOpenFill/> Log out</span>
    </Fragment>
  );
}
