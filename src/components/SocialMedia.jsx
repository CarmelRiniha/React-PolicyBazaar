import React from "react";

function SocialMedia() {
  return (
    <div className=" lg:bg-footer-white lg:bg-opacity-10 md:bg-footer-bg flex justify-between px-6 pt-2 pb-4 mt-8 rounded-lg">
      <div className="text-footer-white ">
        <p className="font-bold pb-2">Payment Methods</p>
        <div className="flex flex-cols flex-wrap z-8 gap-2">
          <img src="src\assets\amex-icon.avif" />
          <img src="src\assets\visa-icon.avif" />
          <img src="src\assets\paytm-icon.avif" />
          <img src="src\assets\rupay-icon.avif" />
          <img src="src\assets\netbanking-icon.avif" />
          <img src="src\assets\master-card-icon.avif" />
        </div>
      </div>
      <div className="w-px lg:bg-footer-white lg:bg-opacity-30"></div>
      <div className="text-footer-white text-center">
        <p className="font-bold pb-2">Secured With</p>
        <img src="src\assets\pci-icon.avif" className="pl-2" />
      </div>
      <div className="w-px lg:bg-footer-white bg-opacity-30"></div>
      <div className="text-footer-white ">
        <p className="font-bold pb-2">Follow us on</p>
        <div className="flex flex-cols flex-wrap z-8 gap-2">
          <div className="h-8 w-8 bg-footer-white bg-opacity-20 rounded-sm">
            <img src="src\assets\facebook-icon.png" />
          </div>
          <div className="h-8 w-8 bg-footer-white bg-opacity-20 rounded-sm">
            <img src="src\assets\twitter-icon.png" />
          </div>
          <div className="h-8 w-8 bg-footer-white bg-opacity-20 rounded-sm">
            <img src="src\assets\linkedin-icon.png" />
          </div>
          <div className="h-8 w-8 bg-footer-white bg-opacity-20 rounded-sm">
            <img src="src\assets\youtube-icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
