import React, { useState } from "react";

import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

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
      <Col md={6} className="offset-md-3">
        <InputGroup className="mb-2">
          <InputGroup.Text>
            <Search size="1rem" />
          </InputGroup.Text>
          <FormControl
            type="text"
            name="searchForm"
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button className="bg-danger text-light" onClick={handleClear} style={{['z-index']: '0'}}>
            x
          </Button>
        </InputGroup>
      </Col>
    </Form>
  );
};

export default SearchBar;
