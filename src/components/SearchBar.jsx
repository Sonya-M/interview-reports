import React, { useState } from "react";

import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Search, X } from "react-bootstrap-icons";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (inputText) => {
    props.onSearch(inputText);
    setSearchText(inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setSearchText("");
    handleChange("");
  };

  return (
    <Form as={Row} className="m-5" onSubmit={handleSubmit}>
      <Col md={6} sm={10}  className="offset-md-3 offset-sm-1">
        <InputGroup className="mb-2">
          <InputGroup.Text>
            <Search size="1rem" />
          </InputGroup.Text>
          <FormControl
            type="text"
            name="searchForm"
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
            style={{borderRight: "none"}}
          />
          <InputGroup.Text onClick={handleClear} className="bg-white" style={{borderLeft: "none", cursor: "pointer"}}>
            <X size="1.5rem" style={{zIndex : "1"}} />
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Form>
  );
};

export default SearchBar;
