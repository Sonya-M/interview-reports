import React, { Fragment } from "react";

export default function WizSelectedInfo(props) {
  return (
    <section className="text-muted">
      {props.candidateName ? (
        <Fragment>
          <h6>Candidate:</h6>
          <p>{props.candidateName}</p>
        </Fragment>
      ) : (
        <Fragment />
      )}
      {props.companyName ? (
        <Fragment>
          <h6>Company:</h6>
          <p>{props.companyName}</p>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </section>
  );
}
