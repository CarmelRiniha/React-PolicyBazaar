import React from "react";
import "./style.css";
function BestPlace() {
  return (
    <div className="flex   text-help-head  overflow-hidden  py-8">
      <div className="container mx-auto  flex flex-wrap lg:justify-around ">
        {/* <div className="img h-full">
          <img src="src\assets\left-bg.avif"></img>
        </div> */}
        <div className="leftdiv text-3xl bg-no-repeat lg:bg-[url('https://static.pbcdn.in/cdn/images/home-v1/left-bg.png')] bg-none">
          <div className="mt-20">
            <p className="pb-2 pl-10">What makes</p>
            <p className="pb-2 pl-10">Policybazaar one of</p>
            <p className="font-semibold pb-2 pl-10">India's favourite places</p>
            <p className="pb-2 pl-10">
              to <span className="font-semibold ">buy insurance</span>?
            </p>
          </div>
        </div>
        <div className="rightdiv mt-4 lg:w-1/3 lg:grid lg:grid-cols-2 gap-8 w-full sm:flex justify-center">
          <div className=" bpborder tracking-tighter	one shadow-lg  rounded-md px-4 pt-4 border-dark-blue flex flex-col ">
            <img src="src\assets\joy.jpg" className="w-5"></img>
            <p className="py-2 text-lg font-bold  text-dark-blue">
              Over 9 million
            </p>
            <p>
              customers trust us & have bought their insurance on Policybazaar
            </p>
          </div>
          <div className=" bpborder tracking-tighter	two shadow-lg rounded-md px-4 pt-4   border-light-blue flex flex-col">
            <img src="src\assets\joy.jpg" className="w-5"></img>
            <p className="py-2 text-lg font-bold text-light-blue">
              50 insurers
            </p>
            <p>
              partnered with us so that you can compare easily & transparently
            </p>
          </div>
          <div className=" bpborder tracking-tighter three	shadow-lg rounded-md px-4 pt-4  border-light-green flex flex-col">
            <img src="src\assets\joy.jpg" className="w-5"></img>
            <p className="py-2 text-lg font-bold text-light-green">
              Great Price
            </p>
            <p>for all kinds of insurance plans available online</p>
          </div>
          <div className=" bpborder tracking-tighter	four shadow-lg rounded-md p-4 border-yellow flex flex-col">
            <img src="src\assets\joy.jpg" className="w-5"></img>
            <p className="py-2 text-lg font-bold text-yellow">Claims</p>
            <p>
              support built in with every policy for help, when you need it the
              most
            </p>
          </div>
        </div>
        <div className="img h-full  lg:block hidden">
          <img src="src\assets\right-bg.avif"></img>
        </div>
      </div>
    </div>
  );
}

export default BestPlace;
