/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./custom-arrow.styles.scss";

const CustomArrow = ({ children, ...otherProps }) => (
  <div className="arrow" {...otherProps}>
    {children}
  </div>
);

export default CustomArrow;
