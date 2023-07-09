import React, { useState, useEffect, useContext } from "react";
import api from "../../api";

const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchProducts, setSearchProducts] = useState("");
  const clearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    api.products.fetchAll().then((data) => {
      setProducts(data);
    });
  }, []);

  const basketProducts = (id) => {
    const productIndex = products.findIndex((product) => product._id === id);
    const newProducts = [...products];
    const newPr = newProducts[productIndex];
    newProducts[productIndex] = { ...newPr, shopingCart: !newPr.shopingCart };
    const shopingProduct = newProducts.filter(
      (product) => product.shoppingСart == true
    );
    setProducts(newProducts);
    return shopingProduct;
  };

  // console.log(sortProducts);

  return (
    <ProductsContext.Provider
      value={{
        clearSearch,
        searchQuery,
        setSearchQuery,
        setSearchProducts,
        searchProducts,
        products,
        setProducts,
        basketProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
