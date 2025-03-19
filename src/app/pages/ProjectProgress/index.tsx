"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const progressImages = ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"];

export default function ProjectProgress() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="w-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <h2 className="text-[#0F3581] text-3xl font-bold text-center mb-8">
          HÌNH ẢNH TIẾN ĐỘ DỰ ÁN
        </h2>

        {/* Main Swiper */}
        <Swiper
          spaceBetween={0}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="mb-4"
        >
          {progressImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Project Progress ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className="thumbnail-slider"
          watchSlidesProgress
        >
          {progressImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full pt-[75%] rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={image}
                  alt={`Progress ${index + 1}`}
                  fill
                  className="object-cover hover:opacity-80 transition-opacity"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .thumbnail-slider .swiper-slide {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .thumbnail-slider .swiper-slide-thumb-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
