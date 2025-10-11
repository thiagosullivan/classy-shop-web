/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

export const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goTo = index => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <div className="flex gap-4">
      <div className="swipper w-[20%]">
        <Swiper
          ref={zoomSliderSml}
          slidesPerView={4}
          spaceBetween={10}
          direction={"vertical"}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductsSlider h-[60vh] overflow-hidden"
        >
          <SwiperSlide>
            <div className="item" onClick={() => goTo(0)}>
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969825-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goTo(1)}>
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969861-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goTo(2)}>
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969898-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goTo(3)}>
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969934-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goTo(4)}>
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969968-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" onClick={() => goTo(5)}>
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/970000-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="zoomContainer w-[80%]">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969825-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969861-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969898-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969934-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/969968-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://dresstoshop.vtexassets.com/arquivos/ids/970000-708-1062/produto.webp"
                alt="Banner Slide"
                className=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
