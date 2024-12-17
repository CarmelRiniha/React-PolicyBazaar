import React from "react";

function BestPlace() {
  return (
    <div className="flex bg-getpb-bg  py-10 lg:px-40 px-10 text-help-head  overflow-hidden  md:px-20 px-5 py-8">
      <div className="container mx-auto m-width-6xl flex justify-between">
        <div className="leftdiv text-3xl ">
          <p className="pb-2">What makes</p>
          <p className="pb-2">
            <span className="font-semibold">Policybazaar</span> one of
          </p>
          <p className="pb-2">India's favourite places</p>
          <p className="pb-2">
            to<span className="font-semibold">buy insurance</span>?
          </p>
        </div>
        <div className="rightdiv grid grid-cols-2 gap-8">
          <div className="border-l-2 rounded-md p-4 border-dark-blue flex flex-col">
            <img src="src\assets\joy.jpg" className="w-5"></img>
            <p className="py-3 text-lg font-semibold text-dark-blue">
              Over 9 million
            </p>
            <p>
              customers trust us & have bought their insurance on Policybazaar
            </p>
          </div>
          <div className="border p-4">Item 2</div>
          <div className="border p-4">Item 3</div>
          <div className="border p-4">Item 4</div>
        </div>
      </div>{" "}
    </div>
  );
}

export default BestPlace;
