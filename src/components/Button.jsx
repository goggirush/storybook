import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = ({ children, className, type, ...props }) => (
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

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'warning', 'error', 'success']),
};

Button.defaultProps = {
  children: "",
  onClick: null,
  className: null,
  type: 'primary',
};

export default Button;
