import React from "react";
import "./style.css";
function GetPBApp() {
  return (
    <div className="flex flex-col bg-getpb-bg py-10 sm:mx-18 justify-around md:flex-row">
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
        <div className="w-40 mt-6 flex flex-cols gap-6 hidden lg:block">
          <img src="src\assets\Google_Play_Store_badge_EN.svg.webp" />
          <img src="src\assets\download.png" />
        </div>
      </div>
      <div className="leftdiv w-2/5 ">
        <img src="src\assets\get-app.avif"></img>
        <button className="bg-help-line text-footer-white py-2 px-10 rounded-lg hidden  ">GET THE APP NOW</button>
      </div>
    </div>
  );
}

export default GetPBApp;
