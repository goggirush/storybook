import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const PrimaryButton = ({ children, className, ...props }) => (
  <button
    className={`
      btn
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

PrimaryButton.defaultProps = {
  children: "",
  onClick: null,
  className: null
};

export default PrimaryButton;
