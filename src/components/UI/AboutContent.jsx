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
      <div className={style.textContent}><p>We are a motley crew of geeks who joined forces on their final project at BiT Bootcamp. JobBook is a React app for viewing and creating reports about candidates and their job applications in various companies. The technologies used for the project include:</p>
      <ul className={style.tehnology}>
          <li className={style.html5}>HTML5</li>
          <li className={style.css3}>CSS3</li>
          <li className={style.boots}>BootStrap</li>
          <li className={style.react}>React (JavaScript)</li>
      </ul>
      <p>A huge thank you to our instructors:</p>
      <ul className={style.professors}>
          <li><a href="https://www.linkedin.com/in/ivanbalic2/" target="_blank" >Ivan Balic</a></li>
          <li><a href="https://www.linkedin.com/in/nikola-ali%C4%87-0310b0138/" target="_blank" >Nikola Alic</a></li>
          <li><a href="https://www.linkedin.com/in/tijana-pavlovic-304a27bb/" target="_blank" >Tijana Pavlovic</a></li>
      </ul>
       For anything else you are curious about, feel free to contact us.</div>
      <Developers/>
    </RisingContainer>
  );
};
export default AboutContent;
