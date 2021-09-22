import React from "react";
import styles from "./BgContainer.module.css";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const BgContainer = (props) => {
    let location = useLocation();
    const classes = " m-0 p-0 mb-5 ";
    return (location.pathname == "/admin" || location.pathname === "/wizard" ? 
    ( <Container fluid className={`${classes} ${styles.adminBg}`} >{props.children}</Container>) :

    ( <Container fluid className={`${classes}`} >{props.children}</Container>) )
};

