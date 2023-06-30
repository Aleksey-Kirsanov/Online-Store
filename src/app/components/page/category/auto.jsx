import React, { useState, useEffect } from "react";
import api from "../../../api";
import ProductCard from "../../common/productCard";

const Auto = () => {
  const [products, setProducts] = useState();
  const candles =
    products &&
    products.filter((candle) => {
      return candle.cat === "auto";
    });

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  const handleToggleBookMark = (id) => {
    const newArray = products.map((product) => {
      if (product._id === id) {
        return { ...product, bookmark: !product.bookmark };
      }
      return product;
    });
    setProducts(newArray);
  };
  const handleToggleBasket = (id) => {
    const newArray = products.map((product) => {
      if (product._id === id) {
        return { ...product, shoppingСart: !product.shoppingСart };
      }
      return product;
    });
    setProducts(newArray);
  };

  if (candles) {
    return (
      <>
        <h1 className='text-center'>Автомобильные диффузоры</h1>
        <ProductCard
          onToggleBookMark={handleToggleBookMark}
          onToggleBasket={handleToggleBasket}
          selectedItem={candles}
        />
      </>
    );
  }
  return "Loading...";
};

export default Auto;
