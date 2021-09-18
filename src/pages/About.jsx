import React, { Fragment, useState, useEffect } from "react";
import AboutContent from "../components/UI/AboutContent";
import LoaderAtom from "../components/UI/LoaderAtom";

const About = () => {
    const [phase, setPhase] = useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setPhase(1)
        },4000);
        return (()=>clearTimeout(timer))
    },[])
    // useEffect(()=>{
    //     const timer2 = setTimeout(()=>{
    //         setPhase(2)
    //     },5000);
    //     return (()=>clearTimeout(timer2))
    // },[])
    if (phase === 0){
        return <LoaderAtom/>
    }
    return <AboutContent />
    // else if (phase === 1) {
    //    return <Fragment><LoaderAtom/> <AboutContent/></Fragment>
    // }
    // return <AboutContent/>

    // return (<Fragment>
    //     {phase === 0 ?<LoaderAtom/> : <Fragment/>}
    //     {phase === 1 ? (<Fragment><LoaderAtom/> <AboutContent/></Fragment>) : <Fragment/>}
    //     {phase === 2 ? <AboutContent/> : <Fragment/>}
    //     </Fragment>)
}
export default About