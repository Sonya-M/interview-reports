import React, {useState, useEffect} from 'react';
import style from "./RisingContainer.module.css"

const RisingContainer = (props) => {
    const [phase, setPhase] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setPhase(1)
        },300);
        return (()=>clearTimeout(timer))
    },[])
    return (<div className={phase === 0 ? style.animated : style.fixed}>
        {props.children}
    </div>)
}
export default RisingContainer