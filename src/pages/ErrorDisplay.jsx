import React from "react";
import { Link } from "react-router-dom";
import { EmojiFrownFill } from "react-bootstrap-icons";

export default function ErrorDisplay(props) {
  const msg = props.message ? props.message : "Error!";
  return (
    <div className="text-center m-5">
      <EmojiFrownFill size="10rem" />
      <h2 className="display-2">{msg}</h2>
      <Link to="/">Home page</Link>
    </div>
  );
}
