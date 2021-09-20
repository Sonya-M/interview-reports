import React from "react";
import styles from "./FallbackUI.module.css";

export default function FallbackUI(props) {
  return (
    <div className={`text-center ${styles.fallback}`}>
      <h2 className="display-4">Something went wrong...</h2>
      <div className="m-5">
        <p>An unexpected error has occurred.</p>
        <p>Sorry for the inconvenience.</p>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}
