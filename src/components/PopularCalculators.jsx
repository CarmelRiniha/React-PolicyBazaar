import React from "react";

function PopularCalculators() {
  return (
    <div className="flex py-10 lg:px-40 text-help-head   md:px-20 px-5 py-8">
      <div className="rightdiv">
        <div className="font-semibold text-3xl">Popular Calculator</div>

        <p className="py-4">
          Discover our user-friendly calculators tailored to help you make
          informed financial decisions. Our diverse range of insurance
          calculators ensures you find the perfect fit for your needs. Explore
          the options below to get started.
        </p>
        <div className="flex  my-4 gap-7 text-help-head flex-wrap">
          <div className="border flex-1 border-opacity-30 rounded-lg p-3  border-help-box  ">
            <div className="w-full h-24 bg-pc-pink flex flex-cols rounded-lg justify-between ">
              <div className="pt-4 ml-4 text-lg font-semibold">
                <p>Investment</p>
                <p>calculators</p>
              </div>
              <div className="w-30 h-10 pt-4 bg-pc-pink rounded-lg"></div>
            </div>
            <div>
              <ul>
                <li className="py-5 border-b ">SIP Calculator</li>
                <li className="py-5 border-b ">Income Tax Calculator</li>
                <li className="py-5 border-b ">ULIP Calculator</li>
                <li className="py-5  ">NPS Calculator</li>
              </ul>
            </div>
          </div>


          <div className="border flex-1 border-opacity-30 rounded-lg p-3  border-help-box  ">
            <div className="w-full h-24 bg-pc-blue flex flex-cols rounded-lg justify-between ">
              <div className="pt-4 ml-4 text-lg font-semibold">
                <p>Team Insurance</p>
                <p>calculators</p>
              </div>
              <div className="w-30 h-10 pt-4 bg-pc-blue rounded-lg"></div>
            </div>
            <div>
              <ul>
                <li className="py-5 border-b ">Life Insurance Calculator</li>
                <li className="py-5 border-b ">Team Insurance Calculator</li>
                <li className="py-5 border-b ">Human Life Value Calculator</li>
                <li className="py-5  ">NRI Team Insurance Calculator</li>
              </ul>
            </div>
          </div>

          <div className="border flex-1 border-opacity-30 rounded-lg p-3  border-help-box  ">
            <div className="w-full h-24 bg-pc-violet flex flex-cols rounded-lg justify-between ">
              <div className="pt-4 ml-4 text-lg font-semibold">
                <p>Policy Premium</p>
                <p>calculators</p>
              </div>
              <div className="w-30 h-10 pt-4 bg-pc-violet rounded-lg"></div>
            </div>
            <div>
              <ul>
                <li className="py-5 border-b ">Health Insurance Premium Calculator</li>
                <li className="py-5 border-b ">Car Insurance Calculator</li>
                <li className="py-5 border-b ">Bike Calculator</li>
                <li className="py-5  ">Travel Insurance Calculator</li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-8 "> <p className="border rounded-3xl px-3 py-1 text-help-line font-semibold">View All Calculators</p></div>
      </div>
    </div>
  );
}

export default PopularCalculators;
