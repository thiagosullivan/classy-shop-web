import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { BlogItem } from "../BlogItem";

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
      </Swiper>
    </div>
  );
};
