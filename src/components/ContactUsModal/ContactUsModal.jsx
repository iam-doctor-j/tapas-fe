import React from "react";
import Modal from "../Modal/Modal";
import {
  PhoneIcon,
  AtSymbolIcon,
  ClipboardCopyIcon,
} from "@heroicons/react/solid";
import toast, { Toaster } from "react-hot-toast";

const ContactUsModal = ({ setModalVisible }) => {
  const notify = () => toast("Copied to Clipboard.");

  const phoneNumber = "+91 9999 999 999";
  const email = "contact-us@tapasmedia.in";

  const copyToClipboard = (val) => {
    navigator.clipboard
      .writeText(val)
      .then(() => console.log("copied ==> " + val));
    notify();
  };

  return (
    <Modal
      onBackdropClicked={() => {
        setModalVisible(false);
      }}
    >
      <Toaster />
      <h1 className="font-bold border-b border-gray-300">Contact us</h1>
      <div>
        <div className="mt-4 flex justify-between">
          <div>
            <PhoneIcon className="h-4 mr-2 inline-block" />
            <span>{phoneNumber}</span>
          </div>
          <ClipboardCopyIcon
            onClick={() => copyToClipboard(phoneNumber)}
            className="h-5 cursor-pointer hover:text-gray-500"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <AtSymbolIcon className="h-4 inline-block mr-2" />
            <span>{email}</span>
          </div>
          <ClipboardCopyIcon
            onClick={() => copyToClipboard(email)}
            className="h-5 cursor-pointer hover:text-gray-500"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
