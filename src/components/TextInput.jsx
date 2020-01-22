import React from "react";
import PropTypes from "prop-types";
import "../styles/Field.css";

// import Shield from "../../../images/shield.svg";
// import tooltipSchema from "../../schemas/tooltip";
// import tooltipToObject from "../../helpers/tooltipToObject";

const TextInput = ({
  id,
  name,
  compact,
  large,
  labelOutside,
  label,
  suffix,
  validated,
  valid,
  className,
  tooltip,
  whitelist,
  ...rest
}) => {
  const inputId =
    id || `text-input--${name || ""}--${label.replace(/\s/, "-")}`;

  // const tooltipObject = tooltipToObject(tooltip);

  return (
    <div
      className={`
        field
				${compact ? "c-field--compact" : ""}
				${large ? "c-field--large" : ""}
        ${labelOutside ? "c-field--label-outside" : ""}
        ${validated ? "c-field--validated" : ""}
        ${validated && valid === true ? "c-field--valid" : ""}
        ${validated && valid === false ? "c-field--invalid" : ""}
        ${className}
      `}
      // data-tooltip={tooltipObject.text}
      // data-tooltip-width={tooltipObject.width}
      // data-tooltip-position={tooltipObject.position}
      // data-tooltip-position-desktop={tooltipObject.positionDesktop}
      // data-tooltip-trigger={tooltipObject.trigger}
    >
      <label htmlFor={inputId}>
        {label && <div className="c-field__label-text">{label}</div>}
        <div className="c-field__input-wrapper">
          <input
            id={inputId}
            name={name}
            className={
              (rest.override.input && rest.override.input.className) ||
              "c-field__input"
            }
            data-hj-whitelist={whitelist || null}
            {...rest}
          />
          {(validated || suffix) && (
            <div className="c-field__suffix">
              <span>{suffix}</span>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["text", "tel", "email", "password", "url", "search"]),
  size: PropTypes.oneOf(["compact", "default", "large"]),
  name: PropTypes.string,
  compact: PropTypes.bool,
  large: PropTypes.bool,
  labelOutside: PropTypes.bool,
  label: PropTypes.string,
  suffix: PropTypes.string,
  validated: PropTypes.bool,
  valid: PropTypes.bool,
  className: PropTypes.string,
  // tooltip: tooltipSchema,
  override: PropTypes.shape({
    input: PropTypes.shape({
      className: PropTypes.string
    })
  }),
  whitelist: PropTypes.bool
};

TextInput.defaultProps = {
  id: null,
  type: "text",
  name: null,
  size: "default",
  labelOutside: false,
  label: "",
  suffix: "",
  validated: false,
  valid: null,
  className: "",
  tooltip: "",
  override: {
    input: {}
  },
  whitelist: false
};

export default TextInput;
