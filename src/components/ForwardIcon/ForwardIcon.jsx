import React from "react";
import "./ForwardIcon.css";

const ForwardIcon = ({
  size,
  primaryColor = "white",
  secondaryColor = "gray",
  style,
  className,
}) => {
  return (
    <svg
      className={className}
      style={{
        ...style,
        height: size,
        width: size,
      }}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="readmore">
        <g id="lower">
          <path
            id="Polygon 2"
            d="M56.6325 46.8111C58.7126 48.4123 58.7126 51.5492 56.6325 53.1504L35.2464 69.6135C32.3432 71.8483 28.2127 69.3285 28.8716 65.7245L30.928 54.4769C31.4715 51.5041 31.4715 48.4574 30.928 45.4846L28.8716 34.2371C28.2127 30.633 32.3432 28.1132 35.2464 30.3481L56.6325 46.8111Z"
            fill={secondaryColor}
          />
        </g>
        <g id="upper">
          <path
            id="Polygon 1"
            d="M68.8825 46.8304C70.9626 48.4316 70.9626 51.5685 68.8825 53.1697L47.4964 69.6327C44.5932 71.8676 40.4627 69.3478 41.1216 65.7437L43.178 54.4962C43.7215 51.5234 43.7215 48.4767 43.178 45.5039L41.1216 34.2563C40.4627 30.6523 44.5932 28.1325 47.4964 30.3673L68.8825 46.8304Z"
            fill={primaryColor}
          />
        </g>
      </g>
    </svg>
  );
};

export default ForwardIcon;
