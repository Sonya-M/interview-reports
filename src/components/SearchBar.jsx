import React, { Fragment } from "react";

import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";


const SearchBar = ({filterCandidates}) => {

  return(
    <Fragment>
      <Form as={Row} className="m-5">
        <Col md={6} className="offset-md-3" >
         <InputGroup className="mb-2">
            <InputGroup.Text><Search size="1rem"/></InputGroup.Text>
            <FormControl  
              type="text" 
              onChange={filterCandidates}
            />
          </InputGroup>
        </Col>
      </Form>
    </Fragment> 
  )
} 

export default SearchBar;