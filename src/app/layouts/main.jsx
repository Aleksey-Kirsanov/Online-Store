import React, { useState, useEffect } from "react";
import ProductCard from "../components/common/productCard";
import { useProducts } from "../components/hooks/useProducts";

const Main = () => {
  const {
    products,
    setProducts,
    searchProducts,
    setSearchProducts,
    searchQuery,
    clearSearch,
  } = useProducts();
  const [sortProducts, setSortProducts] = useState(products);
  const [filter, setFilter] = useState("all");

  const onSort = (filter) => {
    setFilter(filter);
    clearSearch();
    setSearchProducts();
  };

  useEffect(() => {
    setSortProducts(
      filter !== "all"
        ? products.filter((product) => product.subcategory == filter)
        : products
    );
  }, [products, filter]);

  useEffect(() => {
    if (products) {
      const search = searchQuery
        ? products.filter(
            (product) =>
              product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
              -1
          )
        : "";
      setSearchProducts(search);
    }
  }, [searchQuery]);

  if (products) {
    return (
      <>
        <div
          className='btn-group d-flex p-2 bd-highlight'
          role='group'
          aria-label='Basic radio toggle button group'
        >
          <button
            type='radio'
            className={"btn btn-outline-primary"}
            onClick={() => {
              onSort("news");
            }}
          >
            Новинки
          </button>
          <button
            type='radio'
            className={"btn btn-outline-primary"}
            onClick={() => {
              onSort("sales");
            }}
          >
            Акции
          </button>
          <button
            type='radio'
            className={"btn btn-outline-primary"}
            onClick={() => {
              onSort("hits");
            }}
          >
            Хиты
          </button>
          <button
            type='radio'
            className={"btn btn-outline-success"}
            onClick={() => {
              onSort("all");
            }}
          >
            Все категории
          </button>
        </div>
        <ProductCard
          products={products}
          setProducts={setProducts}
          sortProducts={sortProducts}
          setSortProducts={setSortProducts}
          searchProducts={searchProducts}
          setSearchProducts={setSearchProducts}
        />
      </>
    );
  }
  return (
    <span className='d-flex position-absolute top-50 start-50 translate-middle'>
      <div className='spinner-border' role='status' />
      <p className="mx-2">Loading...</p>
    </span>
  );
};

export default Main;
