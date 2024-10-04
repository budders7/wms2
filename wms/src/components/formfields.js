const formFields = [
  {
    label: "Product ID",
    placeHolder: "",
    name: "id",
    plainText: true,
    readOnly: true,
  },
  { label: "Product SKU", placeHolder: "", name: "sku", required: true },
  { label: "Product Name", placeHolder: "", name: "name", required: true },
  {
    label: "Product UPC",
    placeHolder: "",
    name: "upc",
    number: true,
  },
  {
    label: "Product Description",
    required: true,
    placeHolder: "",
    name: "description",
    textArea: true,
    rows: "3",
  },
  {
    label: "Product Alternative Description",
    placeHolder: "",
    name: "description_alt",
    textArea: true,
    rows: "3",
  },
  {
    label: "Product Color",
    placeHolder: "",
    name: "color",
  },
  { label: "Product Size", placeHolder: "", name: "size" },
];

export default formFields;
