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
    <nav className='navbar  fixed-bottom navbar-dark bg-dark navbar-light bg-light'>
      <form className='container-fluid justify-content-end'>
        <button
          onClick={handleClickShoppingCart}
          className='btn btn-outline-warning me-2'
          type='button'
        >
          Корзина
        </button>
        <button
          onClick={handleClickFavorites}
          className='btn btn-outline-danger me-2'
          type='button'
        >
          Избранное
        </button>
      </form>
    </nav>
  );
};

export default Footer;
