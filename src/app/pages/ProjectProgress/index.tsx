"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const progressImages = ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"];

export default function ProjectProgress() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="w-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[#0F3581] text-3xl font-bold text-center mb-8"
        >
          HÌNH ẢNH TIẾN ĐỘ DỰ ÁN
        </motion.h2>

        {/* Main Swiper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            spaceBetween={0}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="mb-4"
          >
            {progressImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-[600px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Project Progress ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-16 z-10 w-8 h-14 flex items-center justify-center"
          >
            <svg
              width="24"
              height="44"
              viewBox="0 0 24 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L2 22L22 42"
                stroke="#0F3581"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="swiper-button-next absolute top-1/2 -translate-y-1/2 -right-16 z-10 w-8 h-14 flex items-center justify-center"
          >
            <svg
              width="24"
              height="44"
              viewBox="0 0 24 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L22 22L2 42"
                stroke="#0F3581"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Thumbnail Slider */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full pt-[75%] rounded-lg overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Progress ${index + 1}`}
                    fill
                    className="object-cover hover:opacity-80 transition-opacity"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .thumbnail-slider .swiper-slide {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .thumbnail-slider .swiper-slide-thumb-active {
          opacity: 1;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
        .swiper-button-prev,
        .swiper-button-next {
          transition: opacity 0.3s ease;
        }
        .swiper-button-disabled {
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
}
