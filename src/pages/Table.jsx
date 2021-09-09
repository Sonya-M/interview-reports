import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { reports } from "../data/reports";

export const Table = () => {
    let { id } = useParams()
    let [data, setData] = useState();
    let dataTest = []
    const prepData = () => {
       for (let i = 0; i<reports.length; i++){
           if (reports[i].candidateId == id){
       
        dataTest.push(reports[i]) 
        setData(dataTest)
        console.log(reports[i])
        console.log(dataTest)
    }
       } 
    }
    
    useEffect(() => {
        prepData();
      }, []);
    console.log(dataTest)
    
    return (
        <table className="container">
    <tr>
    <th>Company</th>
    <th>Interview Date</th>
    <th>Status</th>
  </tr>
  
 
  {console.log(data)}
    </table>
    )
}