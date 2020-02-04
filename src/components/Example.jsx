import React from "react";
import PropTypes from "prop-types";

const Example = ({ children }) => (
  <textarea>
    {children}
  </textarea>
);

Example.propTypes = {
  children: PropTypes.node,
};

Example.defaultProps = {
  children: "",
};

export default Example;
