import React from "react";
import "./style.css";
function GetPBApp() {
  return (
    <div className="flex flex-col bg-getpb-bg  sm:px-5 md:px-10 px-10 py-8 lg:justify-around md:flex-row">
      <div className="rightdiv max-w-6xl">
        <div className="text-help-head font-semibold text-3xl">
          Get the Policybazaar app
        </div>

        <div className="h-1 w-16 mt-3 mb-5 bg-help-line"></div>
        <div>
          <p className="text-help-box ">
            Get control of all your insurance needs anywhere, anytime
          </p>
        </div>
        <div className="w-80 my-5">
          <ul className="custom-list text-help-head">
            <li>Compare different insurance policies</li>
            <li>Buy, store and share all your policies online</li>
            <li>Track your policy status on the go</li>
            <li>Download your policy with a single tap</li>
          </ul>
        </div>
        <div className="text-help-head hidden md:block lg:block ">
          <p>Download our app from</p>
        </div>
        <div className="w-40 mt-6 flex flex-cols gap-6  ">
          <img
            className="hidden lg:block md:block"
            src="src\assets\Google_Play_Store_badge_EN.svg.webp"
          />
          <img
            className="hidden lg:block md:block"
            src="src\assets\download.png"
          />
        </div>
      </div>
      <div className="leftdiv lg:w-2/5   md:w-3/5 flex  flex-col">
        <img className="" src="src\assets\get-app.avif"></img>
        <button className="bg-help-line text-footer-white py-2 rounded-lg md:visible  sm:visible md:hidden">
          GET THE APP NOW
        </button>
      </div>
    </div>
  );
}

export default GetPBApp;
