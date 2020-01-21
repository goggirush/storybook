import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = ({ children, state, size }) => (
  <div
    className={`
      card
      card--${state}
      card--${size}
    `}
  >
    <div className="c-card__content">{children}</div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.oneOf(["success", "warning", "error", "grey", "white"]),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Card.defaultProps = {
  state: "white",
  size: "medium"
};

export default Card;
