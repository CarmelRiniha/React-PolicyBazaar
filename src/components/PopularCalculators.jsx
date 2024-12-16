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
              <div className=" pt-4 bg-pc-pink rounded-lg">
                <img src="src\assets\investment-calc.svg" />
              </div>
            </div>
            <div>
              <ul>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p>SIP Calculator</p>
                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p> Income Tax Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p> ULIP Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 ">
                  <div className="flex justify-between">
                    <p> NPS Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border flex-1 border-opacity-30 rounded-lg p-3  border-help-box  ">
            <div className="w-full h-24 bg-pc-blue flex flex-cols rounded-lg justify-between ">
              <div className="pt-2 ml-4 text-lg font-semibold">
                <p>Team Insurance</p>
                <p>calculators</p>
              </div>
              <div className=" bg-pc-blue rounded-lg">
              <img src="src\assets\term-life-calc.svg" />
              </div>
            </div>
            <div>
              <ul>
                <li className="py-5 border-b border-opacity-30 ">
                  <div className="flex justify-between">
                    <p>Life Insurance Calculator</p>
                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p> Team Insurance Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p> Human Life Value Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 ">
                  <div className="flex justify-between">
                    <p> NRI Term Insurance Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border flex-1 border-opacity-30 rounded-lg p-3  border-help-box  ">
            <div className="w-full h-24 bg-pc-violet flex flex-cols rounded-lg justify-between ">
              <div className="pt-4 ml-4 text-lg font-semibold">
                <p>Policy Premium</p>
                <p>calculators</p>
              </div>
              <div className=" pt-3 pr-2 bg-pc-violet rounded-lg">
                <img src='src\assets\health-calc.svg'/>
              </div>
            </div>
            <div>
              <ul>
                <li className="py-5 border-b border-opacity-30 ">
                  <div className="flex justify-between">
                    <p>Health Insurance Premium Calculator</p>
                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p>Car Insurance Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 border-b border-opacity-30">
                  <div className="flex justify-between">
                    <p>Bike Insurance Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
                <li className="py-5 ">
                  <div className="flex justify-between">
                    <p> Travel Insurance Calculator</p>

                    <img
                      className="w-7 pr-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGi-fLDc5paTHzixjKz7Ee6VBU1rsPxodVQ&s"
                    ></img>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 ">
          {" "}
          <p className="border rounded-3xl px-3 py-1 text-help-line font-semibold hover:bg-help-line hover:text-footer-white">
            View All Calculators
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopularCalculators;
