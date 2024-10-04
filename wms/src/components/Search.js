import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import DropdownItem from "./DropdownItem";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Search({ searchBy, onSearchChange }) {
  const [searchType, setSearchType] = useState("SKU");

  function handleSearchChange(e) {
    const { name, value } = e.target;
    onSearchChange(name, value);
  }

  function handleDropdownClick(e) {
    const value = e.target.getAttribute("data-value");
    setSearchType(e.target.innerText); // update dropdown text
    onSearchChange("searchByType", value); // update the search type in Orders
  }

  const dropdownValues = [
    { label: "ID", value: "id" },
    { label: "SKU", value: "sku" },
    { label: "Name", value: "name" },
    { label: "UPC", value: "upc" },
  ];

  //   const dropdownValues = ["ID", "SKU", "Name", "UPC"];

  return (
    <Container>
      <Row className="align-items-center">
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {searchType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropdownValues.map((item, index) => {
                return (
                  <DropdownItem
                    key={index}
                    value={item.value}
                    label={item.label}
                    click={handleDropdownClick}
                  />
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs="auto">
          <Container>
            <input
              type="text"
              name="searchValue"
              className="form-control"
              placeholder={`Search by ${searchType}`}
              value={searchBy.searchValue}
              onChange={handleSearchChange}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
