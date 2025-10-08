import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import HomeSlider from "../../components/HomeSlider";
import HomeCategoriesSlider from "../../components/CatSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import { LiaShippingFastSolid } from "react-icons/lia";
import ProductsSlider from "../../components/ProductsSlider";
import { BlogSection } from "../../components/BlogSection";
import Footer from "../../components/Footer";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCategoriesSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-xl font-bold">Popular Products</h2>
              <p className="text-sm font-medium">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[50%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Eletronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={5} />
        </div>
      </section>

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

          <img
            src="/banner-small.jpg"
            alt="Banner"
            className="w-full rounded-md"
          />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-xl font-bold !mb-4">Latest Products</h2>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="blogSection py-5 pt-0 bg-white">
        <div className="py-5 container">
          <h2 className="text-xl font-bold !mb-4">Our Blog</h2>
          <BlogSection items={3} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
