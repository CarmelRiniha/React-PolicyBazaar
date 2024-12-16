import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomeBanner() {
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
      <div className="container mx-auto max-w-6xl mb-8 ">
        <Slider {...settings} >
          <div className=" m-10  rounded-md h-16 w-32 object-contain">
            <img src="src\assets\beware-of-fraudsters.avif"></img>
          </div>

          <div className=" m-10 h-12  rounded-md w-40 object-contain">
            <img src="src\assets\pbaskci_banner_1.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-12 w-40 object-contain ">
            <img src="src\assets\fraud_detection_policy.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-16 w-32 object-contain">
            <img src="src\assets\beware-of-fraudsters.avif"></img>
          </div>

          <div className=" m-10 h-12  rounded-md w-40 object-contain">
            <img src="src\assets\pbaskci_banner_1.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-12 w-40 object-contain ">
            <img src="src\assets\fraud_detection_policy.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-16 w-32 object-contain">
            <img src="src\assets\beware-of-fraudsters.avif"></img>
          </div>

          <div className=" m-10 h-12  rounded-md w-40 object-contain">
            <img src="src\assets\pbaskci_banner_1.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-12 w-40 object-contain ">
            <img src="src\assets\fraud_detection_policy.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-16 w-32 object-contain">
            <img src="src\assets\beware-of-fraudsters.avif"></img>
          </div>

          <div className=" m-10 h-12  rounded-md w-40 object-contain">
            <img src="src\assets\pbaskci_banner_1.avif"></img>
          </div>
          <div className=" m-10  rounded-md h-12 w-40 object-contain ">
            <img src="src\assets\fraud_detection_policy.avif"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HomeBanner;
