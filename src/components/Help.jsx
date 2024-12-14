import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faHeadset } from "@fortawesome/free-solid-svg-icons";

function Help() {
  return (
    <div className="flex flex-cols justify-center">
      <div className="rightdiv">
        <div className="text-help-head font-semibold text-3xl">
          Have a question?
        </div>
        <div className="text-help-head font-semibold text-3xl">
          Here to help.
        </div>
        <div className="h-1 w-20 my-4 bg-help-line"></div>
        <div className="w-80">
          <p className="text-help-head">
            Our friendly customer support team is your extended family. Speak
            your heart out. They listen with undivided attention to resolve your
            concerns. Give us a call, request a callback or drop us an email,
            we’re here to help.
          </p>
        </div>

        <div className="border-2 flex flex-cols my-3 rounded-lg">
          <div className="flex">
            <FontAwesomeIcon icon={faPaperPlane} className=" text-xl m-6" />
          </div>
          <div className="flex flex-row">
            <span> General Enquiries</span>
            <span>care@policybazaar.com</span>
          </div>
        </div>

        <div className="border-2 my-4 rounded-lg">
          <FontAwesomeIcon icon={faHeadset} className=" text-xl m-6" />
        </div>
      </div>
      <div className="leftdiv">
        <img src="src\assets\help.png"></img>
      </div>
    </div>
  );
}

export default Help;
