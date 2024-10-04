import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormGroup from "./FormGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import formFields from "./formfields";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();
  console.log(id);
  const productId = parseInt(id);
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState();

  const [save, setSave] = useState(false);

  //fetch all data and find the product that matches current id
  useEffect(() => {
    console.log("test");
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const result = response.data;
        const product = result.filter((item) => item.id === productId);
        setCurrentProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();
  }, []);

  console.log(currentProduct);

  //change the form field to match this page
  // const newFormFields = formFields.map((field) => {
  //   return { ...field, placeHolder: currentProduct[field.name] };
  // });

  // const newFormFields = currentProduct
  //   ? formFields.map((field) => {
  //       return { ...field, placeHolder: currentProduct[field.name] };
  //     })
  //   : [];

  //handle submit based on which button is clicked
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name;

    if (
      !currentProduct.name ||
      !currentProduct.description ||
      !currentProduct.sku
    ) {
      alert("Name, description, and SKU fields must not be empty.");
      return;
    }

    if (name === "cancel") navigate("/products");

    try {
      const response = await axios.put(
        `/api/products/${currentProduct.id}`,
        currentProduct
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error posting products:", error);
    }
    if (name === "save") {
      setSave(true);
      setTimeout(() => {
        setSave(false);
      }, 300);
    } else {
      navigate("/products");
    }
  }

  function onEditChange(e) {
    const { name, value } = e.target;
    setCurrentProduct((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  }

  if (!currentProduct) {
    return <div>Loading...</div>; // Optional loading state
  }

  const newFormFields = currentProduct
    ? formFields.map((field) => {
        return { ...field, placeHolder: currentProduct[field.name] };
      })
    : [];

  // Rest of your component code continues here

  return (
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
        name="submit"
        type="submit"
        variant="primary"
      >
        {save ? <CheckIcon fontSize="small" /> : "Save"}
      </Button>{" "}
      <Button
        onClick={handleSubmit}
        name="submitClose"
        type="submit"
        variant="primary"
      >
        Save & Close
      </Button>{" "}
      <Button onClick={handleSubmit} name="cancel" variant="danger">
        Cancel
      </Button>{" "}
    </Form>
  );
}

export default EditProduct;

// const formFields = [
//   {
//     label: "Product ID",
//     placeHolder: currentProduct.id,
//     name: "id",
//     plainText: true,
//     readOnly: true,
//   },
//   { label: "Product SKU", placeHolder: currentProduct.sku, name: "sku" },
//   { label: "Product Name", placeHolder: currentProduct.name, name: "name" },
//   {
//     label: "Product Description",
//     placeHolder: currentProduct.description,
//     name: "description",
//     textArea: true,
//     rows: "3",
//   },
//   {
//     label: "Product Alternative Description",
//     placeHolder: currentProduct.description_alt,
//     name: "description_alt",
//     textArea: true,
//     rows: "3",
//   },
//   {
//     label: "Product Color",
//     placeHolder: currentProduct.color,
//     name: "color",
//   },
//   { label: "Product Size", placeHolder: currentProduct.size, name: "size" },
// ];
