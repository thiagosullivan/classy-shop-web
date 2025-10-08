import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox";

const AdsBannerSlider = props => {
  return (
    <div className="py-10 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerBox img={"/banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/banner-2.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/banner-3.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/banner-4.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/banner-5.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/banner-6.jpg"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
