import React, { useState, useEffect } from "react";
import AboutContent from "../components/UI/AboutContent";
import LoaderAtom from "../components/UI/LoaderAtom";

const About = () => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(1);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (phase === 0) {
    return <LoaderAtom />;
  }
  return <AboutContent />;
};
export default About;
