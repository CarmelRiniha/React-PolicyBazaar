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
import BestPlace from "./components/BestPlace";
import DiscountInsurance from "./components/DiscountInsurance";
import AlsoBuy from "./components/AlsoBuy";
import TopComponent from "./components/TopComponent";
function App() {
  return (
    <div>
      {/* <CustomerReviews/> */}
     
      <TopComponent/>
      {/* <DiscountInsurance/> */}
      <AlsoBuy/>
      <FeatureBox />
      <BestPlace />
      <HomeBanner />
      <PopularCalculators />

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
