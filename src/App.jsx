import React from "react";
import Footer from "./components/Footer";
import Help from "./components/Help";
import GroupBrands from "./components/GroupBrands";
import GetPBApp from "./components/GetPBApp";
import PBAdvantage from "./components/PBAdvantage";
import CustomerReviews from "./components/CustomerReviews";
import PopularCalculators from "./components/PopularCalculators";
function App() {
  return (
    <div>
      {/* <CustomerReviews/> */}
      <PopularCalculators/>
      <PBAdvantage/>
      <GetPBApp />
      <Help />
      {/* <GroupBrands/> */}
      <Footer />
    </div>
  );
}

export default App;
