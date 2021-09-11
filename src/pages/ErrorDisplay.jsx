import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { EmojiNeutralFill } from "react-bootstrap-icons";

export default function ErrorDisplay(props) {
  const msg = props.message ? props.message : "Error!";
  return (
    <div className="text-center m-5">
      <EmojiNeutralFill size="10rem" />
      <h2 className="display-5">{msg}</h2>
    </div>
  );
}
