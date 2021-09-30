import React from "react";
import styles from "./BgContainer.module.css";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const BgContainer = (props) => {
  let location = useLocation();
  const classes = " m-0 p-0 mb-5 ";
  return (
    <Container
      fluid
      className={
        location.pathname === "/admin" || location.pathname === "/wizard" || location.pathname === "/company" || location.pathname === "/new_candidate" 
          ? `${classes} ${styles.adminBg}`
          : classes
      }
    >
      {props.children}
    </Container>
  );
};
