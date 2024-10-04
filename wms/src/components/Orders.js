import React, { useState } from "react";
import productsData from "./productsData";
import Table_ from "./Table_";
import Search from "./Search";
import Container from "react-bootstrap/esm/Container";

function Orders() {
  const keys = Object.keys(productsData[0]);

  return (
    <div>
      <Container>
        <Search />
      </Container>
      <hr />
      <Container>
        <Table_ header={keys} values={productsData} />
      </Container>
    </div>
  );
}

export default Orders;
