import React from "react";
import PropTypes from "prop-types";

const Basket = ({ status, ...rest }) => {
  const classNameStatus = status
    ? "text-warning bi bi-cart-check-fill"
    : "text-warning bi bi-cart";
  return (
    <button {...rest} className='btn btn-outline-secondary me-2' type='button'>
      <i className={classNameStatus}></i>
    </button>
  );
};
Basket.propTypes = {
  status: PropTypes.bool,
};

export default Basket;
