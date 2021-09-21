import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import style from './SearchBar.module.css'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const [phase, setPhase] = useState (0)
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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset); 


  return (
    <Form as={Row} className={offset > 100 ? style.searchBarOnNav : style.searchBar} onSubmit={handleSubmit}>
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
          <Button className="bg-danger text-light" onClick={handleClear} style={{zIndex: '0'}}>
            x
          </Button>
        </InputGroup>
      </Col>
    </Form>
  );
};

export default SearchBar;
