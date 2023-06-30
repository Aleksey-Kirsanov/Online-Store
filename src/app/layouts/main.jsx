import React, { useState, useEffect } from "react";
import ProductCard from "../components/common/productCard";
import Subcategories from "../components/ui/subcategories";
import api from "../api";

const Main = () => {
  const [products, setProducts] = useState();
  const [subcategorySelect, setSubcategorySelect] = useState();
  const [actiseClass, setActiveClass] = useState("все");

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  const handleSubcategorySelect = (item) => {
    setSubcategorySelect(item);
    setActiveClass(item[0].subcategory);
  };
  const handleClassAllActive = (item) => {
    setSubcategorySelect(item);
    setActiveClass("все");
  };

  // console.log(actiseClass);

  if (products) {
    return (
      <>
        <Subcategories
          items={products}
          onSort={handleSubcategorySelect}
          selectedItem={subcategorySelect}
          setSubcategorySelect={setSubcategorySelect}
          actiseClass={actiseClass}
          handleClassAllActive={handleClassAllActive}
        />
        <ProductCard
        setSubcategorySelect={setSubcategorySelect}
          selectedItem={subcategorySelect ? subcategorySelect : products}
        />
      </>
    );
  }
  return "Loading...";
};

export default Main;
