import React from "react";
import { BoxArrowRight } from "react-bootstrap-icons";
import styles from "./LogoutBtn.module.css";
import { Button } from "react-bootstrap";

export default function LogoutBtn(props) {
  return (
    <Button className={styles.LogoutBtn}>
      <BoxArrowRight size="1.5rem" onClick={props.onLogout} />
    </Button>
  );
}
