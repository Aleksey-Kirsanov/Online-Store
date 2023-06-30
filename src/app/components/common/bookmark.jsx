import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
  const classNameStatus = status
    ? "text-danger bi bi-heart-fill"
    : "text-danger bi bi-heart";
  return <i className={"mx-2 " + classNameStatus} {...rest} role='button'></i>;
};
Bookmark.propTypes = {
  status: PropTypes.bool,
};

export default Bookmark;
