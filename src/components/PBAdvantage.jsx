import React from "react";

function PBAdvantage() {
  return (
    <div className="flex py-10 lg:px-40  md:px-20 px-5 py-8">
      <div className="rightdiv">
        <div className="text-help-head font-semibold text-3xl">
          PB Advantage
        </div>

        <div className="h-1 w-16 mt-3 mb-5 bg-help-line"></div>
        <div>
          <p className="text-help-head pb-2 md:w-1/2 ">
            When you buy insurance from us, you get more than just financial
            safety. You also get: our promise of simplifying complex insurance
            terms and conditions, quick stress-free claims, instant quotes from
            top insurers and being present for you in the toughest of times.
          </p>
          <a className="text-help-line"> Know more</a>
        </div>

        <div className="flex md:flex-cols  my-4 gap-7 text-help-head flex-wrap">
          <div className="border border-opacity-30 border-help-box p-3 hover:font-semibold transition-all duration-100 ease-in-out hover:border-footer-white hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:scale-110 ">
            <div className="w-24 h-24 justify-start">
              <img src="src\assets\laptop.jpg " />
              {/* <img src="src\assets\advantages-sprite.jpg " /> */}
            </div>
            <div className="text-center">
              <p className="text-xl "> One of best Prices</p>
              <p className="pb-8 text-sm">Guaranteed</p>
            </div>
          </div>
          <div className="border  border-opacity-30 border-help-box px-5 py-4 hover:font-semibold transition-all duration-100 ease-in-out hover:border-footer-white hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:scale-110 ">
            <div className="w-24 h-24 justify-start">
              <img src="src\assets\laptop.jpg " />
            </div>
            <div className="text-center">
              <p className="text-xl  ">Unbiased Advice</p>
              <p className="pb-8 text-sm">Keeping customers first</p>
            </div>
          </div>

          <div className="border  border-opacity-30 border-help-box px-8 py-4 hover:font-semibold transition-all duration-100 ease-in-out hover:border-footer-white hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:scale-110 ">
            <div className="w-24 h-24 justify-start">
              <img src="src\assets\laptop.jpg " />
            </div>
            <div className="text-center">
              <p className="text-xl">100% Reliable</p>
              <p className="pb-8 text-sm">Regulated by IRDAI</p>
            </div>
          </div>

          <div className="border  border-opacity-30 border-help-box py-4 px-6 hover:font-semibold transition-all duration-100 ease-in-out hover:border-footer-white hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:scale-110 ">
            <div className="w-24 h-24 justify-start">
              <img src="src\assets\laptop.jpg " />
            </div>
            <div className="text-center">
              <p className="text-xl">Claims Support</p>
              <p className="pb-8 text-sm">Made stress-free</p>
            </div>
          </div>
          <div className="border  border-opacity-30 border-help-box py-4 px-6 hover:font-semibold transition-all duration-100 ease-in-out hover:border-footer-white hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] hover:scale-110 ">
            <div className="w-24 h-24 justify-start">
              <img src="src\assets\laptop.jpg " />
            </div>
            <div className="text-center">
              <p className="text-xl">
              Happy to Help</p>
              <p className="pb-8 text-sm">Every day of the week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBAdvantage;
