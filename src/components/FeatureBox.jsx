import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function FeatureBox() {
  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="bg-getpb-bg gap-4 flex items-center">
      <div className="container mx-auto max-w-6xl mb-8 text-footer-white  ">
        <Slider {...settings} className="mx-4">
          <div className=" m-4 rounded-lg bg-fea-green bg-opacity-60 mx-1 p-5">
            <div className="flex justify-between">
              <p className="text-sm ">Investment Plans</p>
              <p className="text-xs ">Icon</p>
            </div>
            <p className="text-lg"> Invest 10K and Get</p>
            <p className="text-lg pb-4"> 1 Crore return*</p>
          </div>

          <div className=" m-4 rounded-lg  bg-fea-blue p-2 mx-1 ">
            <div className="flex justify-between">
              <p className="text-sm ">Health Insurance</p>
              <p className="text-xs ">Icon</p>
            </div>
            <p className="text-lg"> Book Free Health Insurance</p>
            <p className="text-lg pb-4"> Consultation at home</p>
            <button className="rounded-md px-2 bg-footer-white text-help-line">
              Book Home visit
            </button>
          </div>

          <div className=" m-4 rounded-lg p-2 bg-fea-pink mx-1">
            <div className="flex justify-between">
              <p className="text-sm ">Reach your financial goals</p>
              <p className="text-xs ">Icon</p>
            </div>
            <p className="text-lg">Make investment simplee</p>
            <p className="text-lg pb-4"> with our SIP calculatore</p>
            <button className="rounded-md bg-footer-white px-2 text-help-line">
              Calculate now
            </button>
          </div>
          <div className=" m-4 rounded-lg bg-fea-green bg-opacity-60 mx-1 p-5">
            <div className="flex justify-between">
              <p className="text-sm ">Investment Plans</p>
              <p className="text-xs ">Icon</p>
            </div>
            <p className="text-lg"> Invest 10K and Get</p>
            <p className="text-lg pb-4"> 1 Crore return*</p>
          </div>
          
          <div className=" m-4 rounded-lg  bg-fea-blue p-2 mx-1 ">
            <div className="flex justify-between">
              <p className="text-sm ">Health Insurance</p>
              <p className="text-xs ">Icon</p>
            </div>
            <p className="text-lg"> Book Free Health Insurance</p>
            <p className="text-lg pb-4"> Consultation at home</p>
            <button className="rounded-md px-2 bg-footer-white text-help-line">
              Book Home visit
            </button>
          </div>

          <div className=" m-4 rounded-lg p-2 bg-fea-pink mx-1">
            <div className="flex justify-between">
              <p className="text-sm ">Reach your financial goals</p>
              <p className="text-xs ">Icon</p>
            </div>
            <p className="text-lg">Make investment simplee</p>
            <p className="text-lg pb-4"> with our SIP calculatore</p>
            <button className="rounded-md bg-footer-white px-2 text-help-line">
              Calculate now
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default FeatureBox;
