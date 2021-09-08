import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import LogoutBtn from "./LogoutBtn";

export default function MainHeader(props) {
  const homeLink = (<Link to="/">Interview Reports</Link>)
  const candidatesLink = (<Link to="/">Candidates</Link>)
  return (
    <Header
      title={homeLink}
      menuItems={[candidatesLink, < LogoutBtn onLogout={props.onLogout}/>]}
    />
  )
}

// function LogoutBtn(props) {
//   return (
//     <BoxArrowRight size="1rem" className={ LogoutBtn }onClick={ props.onLogout}/>
//   )
// }