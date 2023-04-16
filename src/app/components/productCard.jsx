import React, { useState, useEffect } from "react";

import api from "../api/index";

const ProductCard = () => {
  let [products, setProducts] = useState();
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  const toggleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };
  const toggleShowFavorites = () => {
    setShowFavorites((prevState) => !prevState);
  };
  console.log(products ? products : "loading...");

  return (
    <div className='container-fluid w-75'>
      {products && (
        <div className='row row-cols-1 row-cols-md-4 g-2'>
          {products.map((product) => (
            <div key={product._id} className='col '>
              <div className='card h-100 '>
                <img src={product.photo} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{product.name}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {product.category}
                  </h6>
                  <p className='card-text'>{product.description}</p>
                </div>
                <div className='card-footer text-end '>
                  <button
                    className='btn btn-outline-secondary me-2 '
                    type='button'
                    onClick={toggleShowCart}
                  >
                    <i
                      className={
                        "text-warning bi bi-cart" +
                        (showCart ? "-check-fill" : "2")
                      }
                    ></i>
                  </button>
                  <button
                    className='btn btn-outline-secondary me-2'
                    type='button'
                    onClick={toggleShowFavorites}
                  >
                    <i
                      className={
                        "text-danger bi bi-heart" +
                        (showFavorites ? "-fill" : "")
                      }
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
