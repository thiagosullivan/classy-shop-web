import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogItem from "../BlogItem";

import "swiper/css";
import "swiper/css/pagination";

export const BlogSection = ({ items }) => {
  return (
    <div>
      <Swiper
        slidesPerView={items}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
