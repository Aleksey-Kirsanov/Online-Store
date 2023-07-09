import React from "react";

import Bookmark from "./bookmark";
import Basket from "./basket";
import Stiker from "./stiker";

const ProductCard = ({
  products,
  setProducts,
  sortProducts,
  setSortProducts,
  searchProducts,
  setSearchProducts,
}) => {
  const handleToggleBookMark = (id) => {
    const newArray = products.map((product) => {
      if (product._id === id) {
        return { ...product, bookmark: !product.bookmark };
      }
      return product;
    });
    setProducts(newArray);
    setSearchProducts();
  };
  const handleToggleBasket = (id) => {
    const newArray = products.map((product) => {
      if (product._id === id) {
        return { ...product, shoppingСart: !product.shoppingСart };
      }
      return product;
    });
    setProducts(newArray);
    setSearchProducts();
  };

  if (sortProducts) {
    if (searchProducts) {
      return (
        <div className='container-fluid w-75 mb-5' id='productCardContainer'>
          <h1 className='text-center'>
            {searchProducts.length
              ? "Искали что то из этого ?"
              : "К сожалению, ничего не нашлось..."}
          </h1>
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            {searchProducts.map((product) => (
              <div key={product._id} className='col '>
                <div className='card h-100 '>
                  <div className='position-relative'>
                    <img
                      src={product.photo}
                      className='card-img-top'
                      alt='...'
                    />

                    {product.subcategory === "sales" ? (
                      <div className=' sale position-absolute bottom-0 start-0'>
                        -15%
                      </div>
                    ) : (
                      ""
                    )}
                    {product.subcategory === "news" ? (
                      <div className=' new position-absolute top-0 end-0'>
                        new
                      </div>
                    ) : (
                      ""
                    )}
                    {product.subcategory === "hits" ? (
                      <div className=' hits position-absolute top-0 end-0'>
                        ХИТ НЕДЕЛИ
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className='card-body'>
                    {product.subcategory === "sales" ? (
                      <span className='d-flex align-items-star'>
                        <h4 className='price new-price card-title'>
                          {product.price * (85 / 100)}
                        </h4>
                        <h5 className='price old-price card-title mx-2'>
                          {product.price}
                        </h5>
                      </span>
                    ) : (
                      <h5 className='price card-title'>{product.price}</h5>
                    )}
                    <h5 className='card-title'>{product.name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {product.category}
                    </h6>
                    <i
                    role='button'
                    className='bi bi-question-circle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  ></i>
                  <div
                    className='dropdown-menu p-4 text-muted'
                  >
                    <p>{product.description}</p>
                  </div>
                  </div>
                  <div className='card-footer text-end '>
                    <Basket
                      status={product.shoppingСart}
                      onClick={() => handleToggleBasket(product._id)}
                    />
                    <Bookmark
                      status={product.bookmark}
                      onClick={() => handleToggleBookMark(product._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className='container-fluid w-75 mb-5' id='productCardContainer'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {sortProducts.map((product) => (
            <div key={product._id} className='col '>
              <div className='card h-100 '>
                <div className='position-relative '>
                  <img src={product.photo} className='card-img-top' alt='...' />

                  {product.subcategory === "sales" ? (
                    <div className=' sale position-absolute bottom-0 start-0'>
                      -15%
                    </div>
                  ) : (
                    ""
                  )}
                  {product.subcategory === "news" ? (
                    <div className=' new position-absolute top-0 end-0'>
                      new
                    </div>
                  ) : (
                    ""
                  )}
                  {product.subcategory === "hits" ? (
                    <div className=' hits position-absolute top-0 end-0'>
                      ХИТ НЕДЕЛИ
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className='card-body'>
                  {product.subcategory === "sales" ? (
                    <span className='d-flex align-items-star'>
                      <h4 className='price new-price card-title'>
                        {product.price * (85 / 100)}
                      </h4>
                      <h5 className='price old-price card-title mx-2'>
                        {product.price}
                      </h5>
                    </span>
                  ) : (
                    <h5 className='price card-title'>{product.price}</h5>
                  )}

                  <h5 className='card-title'>{product.name}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {product.category}
                  </h6>
                  <i
                    role='button'
                    className='bi bi-question-circle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  ></i>
                  <div
                    className='dropdown-menu p-4 text-muted'
                  >
                    <p>{product.description}</p>
                  </div>

                </div>
                <div className='card-footer text-end '>
                  <Basket
                    status={product.shoppingСart}
                    onClick={() => handleToggleBasket(product._id)}
                  />
                  <Bookmark
                    status={product.bookmark}
                    onClick={() => handleToggleBookMark(product._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductCard;
