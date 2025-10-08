import React from "react";

import { LiaShippingFastSolid } from "react-icons/lia";

import HomeSlider from "../../components/HomeSlider";
import HomeCategoriesSlider from "../../components/CatSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCategoriesSlider />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="freeShipping w-full p-4 border-1 border-primary rounded-md flex items-center justify-evenly">
            <div className="col-1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-5xl" />
              <span className="text-2xl font-bold">Free Shipping</span>
            </div>
            <div className="h-[40px] border-r border-gray-300 w-[1px]" />
            <div className="col-2">
              <p className="mb-0 font-medium">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <div className="h-[40px] border-r border-gray-300 w-[1px]" />
            <p className="font-bold text-4xl"> - Only $200</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
    </>
  );
};

export default Home;
