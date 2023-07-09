import React, { useState } from "react";
import _ from "lodash";
import ProductsTableFavorite from "../components/ui/productsTableFavotite";
import { Link } from "react-router-dom";
import { useProducts } from "../components/hooks/useProducts";

const Favorites = () => {
  const { products, setProducts } = useProducts();
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

  const handleDelete = (id) => {
    const newArray = products.map((product) => {
      if (product._id === id) {
        return { ...product, bookmark: !product.bookmark };
      }
      return product;
    });
    setProducts(newArray);
  };

  const handleBasket = (productId) => {
    const newArray = products.map((product) => {
      if (product._id === productId) {
        return {
          ...product,
          bookmark: !product.bookmark,
          shoppingСart: !product.shoppingСart,
        };
      }
      return product;
    });
    setProducts(newArray);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (products) {
    const filteredProducts = products.filter(
      (product) => product.bookmark == true
    );

    // const count = filteredProducts.length;

    // const sortedProducts = _.orderBy(
    //   filteredProducts,
    //   [sortBy.path],
    //   [sortBy.order]
    // );
    if (!filteredProducts.length) {
      return (
        <div className='text-center'>
          <h1>Здесь пока ничего нет</h1>
          <Link className='navbar-brand me-auto p-2 bd-highlight' to='/'>
            К покупкам!
          </Link>
        </div>
      );
    }
    return (
      <>
        <h1 className='text-center'>Отложенные товары</h1>
        <div className='d-flex justify-content-center'>
          <div className='d-flex flex-column'>
            <ProductsTableFavorite
              products={filteredProducts}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onBasket={handleBasket}
            />
          </div>
        </div>
      </>
    );
  }
  return "loading...";
};

export default Favorites;
