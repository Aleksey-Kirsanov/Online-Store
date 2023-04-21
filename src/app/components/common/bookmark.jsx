import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
  const classNameStatus = status
    ? "text-danger bi bi-heart-fill"
    : "text-danger bi bi-heart";
  return (
    <button {...rest} className='btn btn-outline-secondary me-2' type='button'>
      <i className={classNameStatus}></i>
    </button>
  );
};
Bookmark.propTypes = {
  status: PropTypes.bool,
};

export default Bookmark;
