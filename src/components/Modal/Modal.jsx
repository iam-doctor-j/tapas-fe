import React from "react";

const Modal = ({ children, onBackdropClicked }) => {
  return (
    <>
      <div
        style={{
          zIndex: 99999,
        }}
        className="fixed grid place-content-center bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0"
        onClick={onBackdropClicked}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-gray-200 p-4 rounded-md w-96 shadow-md z-10"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
