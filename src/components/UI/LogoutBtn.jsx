import React from "react";
import { DoorOpenFill } from "react-bootstrap-icons";
import styles from "./LogoutBtn.module.css";
import { Button } from "react-bootstrap";

export default function LogoutBtn(props) {
  return (
    <Button className={styles.LogoutBtn}  onClick={props.onLogout}>
     <DoorOpenFill/> Log Out
    </Button>
  );
}
