import React from "react";
import load from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={load.loaderContainer}>
      <div className={load.yellow}>B</div>
      <div className={load.red}>I</div>
      <div className={load.blue}>T</div>
      {/* <div className={load.violet}></div> */}
    </div>
  );
};
export default Loader;
