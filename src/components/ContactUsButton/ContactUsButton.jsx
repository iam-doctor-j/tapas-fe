import React from "react";

const ContactUsButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 rounded-md hover:scale-105 px-3 py-2 text-xs sm:text-sm self-end mb-0 sm:mb-3"
    >
      Contact Us
    </button>
  );
};

export default ContactUsButton;
