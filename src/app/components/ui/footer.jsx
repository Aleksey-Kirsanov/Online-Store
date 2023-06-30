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
    <nav className='navbar fixed-bottom navbar-dark bg-dark d-flex'>
      <form className='container-fluid justify-content-end'>
        <i
          className={"fs-4 text-warning bi bi-cart4 mx-3"}
          role='button'
          onClick={handleClickShoppingCart}
        ></i>

        <i
          className={"fs-4 text-danger bi bi-bag-heart-fill mx-3"}
          role='button'
          onClick={handleClickFavorites}
        ></i>
      </form>
    </nav>
  );
};

export default Footer;
