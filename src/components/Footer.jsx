import React from "react";
import Calculators from "./Calculators";
import Company from "./Company";
import Insurance from "./Insurance";
import Resources from "./Resources";
import SocialMedia from "./SocialMedia";
import FContent from "./FContent";
function Footer() {
  return (
    <div className="w-full h-auto font-roboto text-sm bg-footer-bg sm:px-5 md:px-10 px-20 py-8 ">
        <div className="container  mx-auto overflow-hidden ">
      <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-3 max-w-full">
        <Insurance />
        <Calculators />
        <Resources />
        <Company />
      </div>
      <div>
        <SocialMedia />
      </div>
      <div>
        <FContent/>
      </div>
      <div className="h-px bg-footer-white mt-6 bg-opacity-20"></div>
      <div className="text-footer-white text-xs mb-30 font-bold mt-6 text-center">
      © Copyright 2008-2024 policybazaar.com. All Rights Reserved.
      </div>
      </div>
    </div>
  );
}

export default Footer;
