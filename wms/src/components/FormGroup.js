import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormGroup({
  label,
  plainText,
  readOnly,
  placeholder,
  textarea,
  rows,
  name,
  onChange,
  number,
  required,
}) {
  return (
    <div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          {label}
        </Form.Label>
        <Col sm="5">
          <Form.Control
            name={name}
            type={number ? "number" : "text"}
            as={textarea && "textarea"}
            placeholder={placeholder}
            readOnly={readOnly}
            plaintext={plainText}
            rows={rows}
            onChange={onChange}
            onKeyDown={
              number
                ? (e) => {
                    if (
                      e.key === "e" ||
                      e.key === "E" ||
                      e.key === "+" ||
                      e.key === "-"
                    ) {
                      e.preventDefault();
                    }
                  }
                : null
            }
            style={{
              WebkitAppearance: "none", // For Chrome, Safari, Edge, Opera
              MozAppearance: "textfield", // For Firefox
              appearance: "textfield", // Fallback for all browsers
            }}
            required={required ? true : false}
          />
        </Col>
      </Form.Group>
    </div>
  );
}

export default FormGroup;
