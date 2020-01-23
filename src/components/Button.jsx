import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const PrimaryButton = ({ children, className, type, ...props }) => (
  <button
    className={`
      btn
      ${className}
      btn--${type}
    `}
    {...props}
  >
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'warning', 'error', 'success']),
};

PrimaryButton.defaultProps = {
  children: "",
  onClick: null,
  className: null,
  type: 'primary',
};

export default PrimaryButton;
