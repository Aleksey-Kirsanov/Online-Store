import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const handleClickShoppingCart = () => {
    history.push("/shoppingCart");
  };
  const handleClickFavorites = () => {
    history.push("/favorites");
  };

  return (
    <nav className='navbar fixed-bottom navbar-dark bg-dark navbar-light bg-light'>
      <form className='container-fluid justify-content-end'>
        <button
          onClick={handleClickShoppingCart}
          className='btn me-1'
          type='button'
        >
          <i className={"fs-4 text-warning bi bi-cart4"}></i>
        </button>
        <button
          onClick={handleClickFavorites}
          className='btn me-1'
          type='button'
        >
          <i className={"fs-4 text-danger bi bi-bag-heart-fill"}></i>
        </button>
      </form>
    </nav>
  );
};

export default Footer;
