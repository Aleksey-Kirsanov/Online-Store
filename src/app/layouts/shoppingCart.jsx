import React, { useState, useEffect } from "react";
import api from "../api";
import _ from "lodash";
import ProductsTable from "../components/ui/productsTable";
import PaymentPage from "../components/common/paymentPage";

const ShoppingCart = () => {
  const [products, setProducts] = useState();
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [total, setTotal] = useState({
    price: 20,
    quantity: 30,
  });

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  const handleBookMark = (productId) => {
    const newArray = products.map((product) => {
      if (product._id === productId) {
        return { ...product, bookmark: !product.bookmark };
      }
      return product;
    });
    setProducts(newArray);
    setProducts(products.filter((product) => product._id !== productId));
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const increase = (id) => {
    setProducts((products) => {
      return products.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
            totalPrice: (product.quantity + 1) * product.price,
          };
        }
        return product;
      });
    });
  };
  const decrease = (id) => {
    setProducts((products) => {
      return products.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
            totalPrice: (product.quantity - 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  if (products) {
    const filteredProducts = products.filter(
      (product) => product.shoppingСart == true
    );

    const count = filteredProducts.length;

    // const sortedProducts = _.orderBy(
    //   filteredProducts,
    //   [sortBy.path],
    //   [sortBy.order]
    // );

    return (
      <>
        <h1 className='text-center'>Корзина</h1>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <ProductsTable
              products={filteredProducts}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onBookMark={handleBookMark}
              increase={increase}
              decrease={decrease}
            />
          </div>
          <div className='d-flex flex-column flex-shrink-0 p-3'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title text-center'>Информация о заказе</h3>
                <p className='card-text'>
                  Товаров в карзине :{" "}
                  {`Стоимость ${filteredProducts.reduce((acc, el) => {
                    return acc + el.quantity;
                  }, 0)} руб.`}{" "}
                  <br />
                  {`Стоимость ${filteredProducts.reduce((acc, el) => {
                    return acc + el.totalPrice;
                  }, 0)} руб.`}
                </p>
              </div>
              <div className='card-footer text-center '>
                <button
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
        <PaymentPage />
      </>
    );
  }
  return "loading...";
};

export default ShoppingCart;
