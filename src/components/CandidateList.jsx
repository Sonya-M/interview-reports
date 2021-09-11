import React from "react";
// import { candidates } from "../data/candidates";

export default function CandidateList(props) {
  return (
    <>
      <h1>Candidate list goes here</h1>
      <ul>
        {props.candidates.map((c) => {
          return <li key={c.id}>{c.name}</li>;
        })}
      </ul>
    </>
  );
}
