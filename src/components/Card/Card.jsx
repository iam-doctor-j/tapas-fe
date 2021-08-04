import React from "react";

const Card = ({ children, title }) => (
  <div className="w-full sm:w-80 rounded-md bg-gray-100">
    {title && (
      <div className="p-4 border-b-2 border-gray-200 font-bold">{title}</div>
    )}

    {children && <div className="p-4">{children}</div>}
  </div>
);

export default Card;
