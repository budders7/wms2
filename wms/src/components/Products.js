import React, { useEffect, useState } from "react";
import productsData from "./productsData";
import Table_ from "./Table_";
import Search from "./Search";
import Container from "react-bootstrap/esm/Container";
import { debounce } from "lodash";
import axios from "axios";

function Products() {
  const keys = Object.keys(productsData[0]);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchBy, setSearchBy] = useState({
    searchByType: "sku",
    searchValue: "",
  });

  function handleSearchByChange(name, value) {
    setSearchBy((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const debouncedFilter = debounce(() => {
      if (searchBy.searchValue === "") {
        setFilteredProducts(allProducts);
      } else {
        const filteredSearch = allProducts.filter((item) => {
          const type = searchBy.searchByType.toLowerCase();
          return item[type]
            .toString()
            .toLowerCase()
            .includes(searchBy.searchValue.toLowerCase());
        });
        setFilteredProducts(filteredSearch);
      }
    }, 300);

    debouncedFilter();
  }, [searchBy.searchByType, searchBy.searchValue, allProducts]);

  return (
    <div>
      <Container>
        <Search searchBy={searchBy} onSearchChange={handleSearchByChange} />
      </Container>
      <hr />
      <Container>
        <Table_ edit="product" header={keys} values={allProducts} />
      </Container>
    </div>
  );
}

export default Products;
