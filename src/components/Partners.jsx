import React from "react";

function Partners() {
  const img = "https://gallerypng.com/wp-content/uploads/2024/07/kannada-lic-logo-png-image-750x508.png";
  const imgArray = new Array(49).fill(img);

  return (
    <div className=" bg-getpb-bg ">
         <div className="text-help-head pt-8  text-center font-semibold text-3xl">
          Our Partners
        </div>
        <div className="text-partner font-semibold pt-2 pb-8 text-center font-xl">
            Leading insurers for your financial freedom
        </div>
      <div className="grid container  mx-auto max-w-6xl grid-cols-3 my-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {imgArray.map((array, index) => (
          <div
            key={index}
            className="w-32 h-16 pb-8 border grayscale hover:grayscale-0 bg-footer-white border-help-box border-opacity-20 rounded-sm bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${array})`,
            }}
          ></div>
        ))}
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default Partners;

