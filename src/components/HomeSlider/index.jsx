import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
            alt="Banner Slide"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/flat-shopping-center-social-media-cover-template_23-2149330485.jpg?t=st=1759781923~exp=1759785523~hmac=f7c95c287c0f8a543fdd6412c85c09f12755e70a7180ac729af27644deb15d22&w=1480"
            alt="Banner Slide"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitch-banner_23-2149985384.jpg?t=st=1759783144~exp=1759786744~hmac=5df87581985b9eb1d47aa7f9babe5c74761187a664125af7894ff2b5b7bbc039&w=1480"
            alt="Banner Slide"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://t4.ftcdn.net/jpg/03/13/65/17/360_F_313651795_OUrd7HrFYuxo9LXuuREFvRyIPeEfVSLj.jpg"
            alt="Banner Slide"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
