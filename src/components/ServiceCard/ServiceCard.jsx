import React from "react";

const ServiceCard = ({ title, details, listItems, className }) => {
  return (
    <div
      className={`bg-monogray p-4 w-full shadow-xlc rounded-md text-gray-100 text-xl ${className}`}
    >
      <h2 className="font-bold text-2xl underline">{title}</h2>
      <article className=" mt-2">{details}</article>
      <ul className="list-arrow pl-4 mt-2 custom">
        {listItems && listItems.length && listItems.map((e) => <li>{e}</li>)}
      </ul>
    </div>
  );
};

export default ServiceCard;
