import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function Table_({ header, values, edit }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {header.map((name, index) => {
            return <th key={index}>{name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {values.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.sku}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.description_alt}</td>
              <td>{value.upc}</td>
              <td>{value.color}</td>
              <td>{value.size}</td>
              <td>{value.quantity}</td>
              <td>
                <Link to={`/edit-product/${value.id}`}>
                  <EditIcon fontSize="medium" />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Table_;
