import React, { Fragment, useState, useEffect } from "react";


import CandidateCard from "./CandidateCard.jsx"
import SearchBar from "./SearchBar.jsx";
import { includesIgnoreCase } from "../utilities/helpers.js"

import { Row } from "react-bootstrap";



const CandidateList = ({candidates}) => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult(candidates);
  },[])

  
  const filterCandidates = (event) => {
    let filtered = [];
    if(event.target.value) {
      filtered = candidates.filter(candidate => includesIgnoreCase(candidate.name, event.target.value));
      setSearchResult(filtered);
    } else {
      setSearchResult(candidates);
    }
  }

  return(
    <Fragment>
      <SearchBar filterCandidates={filterCandidates}/>
      <Row  className="g-4 m-5">
        {searchResult.map( item => (
          <CandidateCard 
            key={item.id}
            candidate={item}
            /> 
        ))}
      </Row>
    </Fragment>
  )
} 

export default CandidateList;
