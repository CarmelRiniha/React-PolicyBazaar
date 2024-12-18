
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopComponent() {
  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="sm:px-4 md:px-10 px-10 py-8 overflow-hidden lg:ml-40">
      <div className="container mx-auto flex justify-center lg:justify-around ">
        <div className="leftdiv flex flex-col hidden md:block">
          <div className="leading-normal">
            <p className="text-help-head text-4xl font-light">Let's find you</p>
            <p className="text-help-head text-4xl font-light">
              the <span className="font-semibold">Best Insurance</span>
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex mt-8">
              <div className="pt-1 pr-1">
                <img
                  className="h-8 w-9"
                  src="src/assets/Screenshot_17-12-2024_153648_.jpeg"
                  alt="Insurer Icon"
                />
              </div>
              <div className="text-lilac leading-tight">
                <p>
                  50 insurers offering
                  <br />
                  competitive prices
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="pt-1 pr-1">
                <img
                  className="h-8 w-9"
                  src="src/assets/Screenshot_17-12-2024_15379_.jpeg"
                  alt="Quick & Easy Icon"
                />
              </div>
              <div className="text-lightorange leading-tight">
                <p>
                  Quick, easy &
                  <br />
                  hassle free
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightdiv w-full md:w-1/2 lg:w-1/3 mx-auto text-center">
          <Slider {...settings}>
            <div className="rounded-md">
              <img
                src="src/assets/health-web-desktop (1).avif"
                alt="Health Insurance"
              />
            </div>
            <div className="rounded-md">
              <img
                src="src/assets/investment_new_domestic.avif"
                alt="Investment Insurance"
              />
            </div>
            <div className="rounded-md">
              <img
                src="src/assets/term_crore_desktop.webp"
                alt="Term Insurance"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopComponent;
