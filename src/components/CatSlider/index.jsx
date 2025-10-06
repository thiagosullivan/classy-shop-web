import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCategoriesSlider = () => {
  return (
    <div className="homeCatSlider  py-7">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/cat-1.jpg"
                  alt="Category Item"
                  className="w-[60px]"
                />
                <h3 className="text-sm font-medium mt-3">Smart Table</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCategoriesSlider;
