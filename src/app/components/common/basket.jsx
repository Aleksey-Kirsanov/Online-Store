import React from "react";
import PropTypes from "prop-types";

const Basket = ({ status, ...rest }) => {
  const classNameStatus = status
    ? "text-warning bi bi-cart-check-fill"
    : "text-warning bi bi-cart";
  return (
      <i
        className={"mx-2 " + classNameStatus}
        {...rest}
        role='button'
      ></i>
  );
};
Basket.propTypes = {
  status: PropTypes.bool,
};

export default Basket;
