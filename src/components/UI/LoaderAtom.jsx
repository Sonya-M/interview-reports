import React, {useState, useEffect} from "react";
import style from "./LoaderAtom.module.css";
import ThreeAnimation from "./ThreeAnimation";

const LoaderAtom = () => {
    const [phase, setPhase] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setPhase(1)
        },3000);
        return (()=>clearTimeout(timer))
    },[])
  return (
     
    <div className={phase === 0 ? style.main : style.mainDisappear}>
      <ThreeAnimation/>
    </div>
   
  );
};
export default LoaderAtom;