import React from "react";
import Form from "./ContactForm";
import MessageIcon from "@mui/icons-material/Message";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

function Contact() {
  return (
    <div className="h-dvh">
      <div className="h-32 flex justify-center items-center font-black">
        <MessageIcon />
        <p className="px-2">Let's talk</p>{" "}
      </div>
      <div className="flex justify-center">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
