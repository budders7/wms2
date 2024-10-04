import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "./FormGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import formFields from "./formfields";
import axios from "axios";
import Products from "./Products";

function AddProducts() {
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({});

  const newFormFields = formFields.filter((field) => {
    return field.name !== "id";
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newProduct.name || !newProduct.description || !newProduct.sku) {
      alert("Name, description, and SKU fields must not be empty.");
      return;
    }
    const name = e.target.name;
    if (name === "create") {
      //add post request
      try {
        const response = await axios.post(
          "http://localhost:5000/api/add-product",
          newProduct
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error posting products:", error);
      }
      navigate("/products");
    } else navigate("/products");
  }

  function onEditChange(e) {
    const { name, value } = e.target;
    setNewProduct((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  }

  return (
    <div>
      {" "}
      <Form>
        {newFormFields.map((field, index) => (
          <FormGroup
            key={index} // Provide a unique key
            label={field.label}
            placeholder={field.placeHolder}
            name={field.name}
            plainText={field.plainText}
            readOnly={field.readOnly}
            textarea={field.textArea}
            rows={field.rows}
            onChange={onEditChange}
            number={field.number}
            required={field.required}
          />
        ))}
        <Button
          onClick={handleSubmit}
          name="create"
          type="submit"
          variant="primary"
        >
          Create
        </Button>{" "}
        <Button onClick={handleSubmit} name="cancel" variant="danger">
          Cancel
        </Button>{" "}
      </Form>
    </div>
  );
}

export default AddProducts;
