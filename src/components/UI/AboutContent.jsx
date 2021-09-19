import React, { useState, useEffect } from "react";
import style from "./AboutContent.module.css";
import Developers from "./Developers";
import RisingContainer from "./RisingContainer";

const AboutContent = () => {
  return (
    <RisingContainer>
      <div className={style.brandBackground}>
        <div className={style.brandName}>BigBangTeam</div>
      </div>
      <div className={style.textContent}> Mladi tim strebera koji se okupio da uradi finalni projekat na BiT bootcamp-u. Projekat Job Book daje izvestaj o statusima ljudi koji su aplicirali u odredjenim firmama. Tehnologije koje smo koristili na projektu: 
      <ul className={style.tehnology}>
          <li className={style.html5}>HTML5</li>
          <li className={style.css3}>CSS3</li>
          <li className={style.boots}>BootStrap</li>
          <li className={style.react}>React (JavaScript)</li>
      </ul>
      Veliku zahvalnost zelimo da iskazemo profesorima:
      <ul className={style.professors}>
          <li><a href="https://www.linkedin.com/in/ivanbalic2/" target="_blank" >Ivan Balic</a></li>
          <li><a href="https://www.linkedin.com/in/nikola-ali%C4%87-0310b0138/" target="_blank" >Nikola Alic</a></li>
          <li><a href="https://www.linkedin.com/in/tijana-pavlovic-304a27bb/" target="_blank" >Tijana Pavlovic</a></li>
      </ul>
       Za vise informacija budite slobodni da nas kontaktirate.</div>
      <Developers/>
    </RisingContainer>
  );
};
export default AboutContent;
