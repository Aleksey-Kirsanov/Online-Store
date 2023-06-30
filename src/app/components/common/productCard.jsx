import React from "react";

import Bookmark from "./bookmark";
import Basket from "./basket";

const ProductCard = ({ selectedItem, setSubcategorySelect }) => {
  const handleToggleBookMark = (id) => {
    const newArray = selectedItem.map((product) => {
      if (product._id === id) {
        return { ...product, bookmark: !product.bookmark };
      }
      return product;
    });
    setSubcategorySelect(newArray);
  };
  const handleToggleBasket = (id) => {
    const newArray = selectedItem.map((product) => {
      if (product._id === id) {
        return { ...product, shoppingСart: !product.shoppingСart };
      }
      return product;
    });
    setSubcategorySelect(newArray);
  };

  if (selectedItem) {
    return (
      <div className='container-fluid w-75 mb-5' id='productCardContainer'>
        <div className='row row-cols-1 row-cols-md-3 g-3'>
          {selectedItem.map((product) => (
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
