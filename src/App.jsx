import React from "react";
import Footer from "./components/Footer";
import Help from "./components/Help";
import GroupBrands from "./components/GroupBrands";
import GetPBApp from "./components/GetPBApp";
import PBAdvantage from "./components/PBAdvantage";
import CustomerReviews from "./components/CustomerReviews";
import PopularCalculators from "./components/PopularCalculators";
import Partners from "./components/Partners";
import "@fontsource/roboto";
import FeatureBox from "./components/FeatureBox";
import HomeBanner from "./components/HomeBanner";

function App() {
  return (
    <div>
      {/* <CustomerReviews/> */}
      <FeatureBox />
      {/* <PopularCalculators/> */}

      <HomeBanner />
      <PBAdvantage />
      <GetPBApp />
      <Partners />
      <Help />
      <GroupBrands />

      <Footer />
    </div>
  );
}

export default App;
