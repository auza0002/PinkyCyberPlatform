/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const BUTTON_TYPE_CLASSES = {
  succes: "btn-success",
  sucessOutline: "btn-success-outline",
  danger: "btn-danger",
  dangerOutline: "btn-danger-outline",
  warning: "btn-warning",
  warningOutline: "btn-warning-outline",
};

const Button = ({ children, type, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[type]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
