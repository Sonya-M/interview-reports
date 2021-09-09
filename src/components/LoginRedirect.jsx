import React from "react";
import { Link } from "react-router-dom";

export default function LoginRedirect(props) {
  return (
    <p
      className="text-center m-5"
      style={{ fontSize: "1.5rem", fontWeight: "lighter" }}
    >
      Please <Link to="/home">log in</Link> to view the content.
    </p>
  );
}
