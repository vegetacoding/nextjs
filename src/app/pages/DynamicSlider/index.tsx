"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

export default function DynamicSlider({
  id,
  images = [],
  title = "TIỆN ÍCH TRONG THE OPUS ONE",
}: {
  id: string;
  images: string[];
  title: string;
}) {
  return (
    <section id={id} className="w-screen bg-white py-8">
      <div className="container mx-auto px-4 max-w-[1324px]">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[15px] sm:text-[20px] md:text-[32px] font-bold text-blue-900 text-center mb-8 font-noto"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-golden-gradient",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-golden-gradient",
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            className="w-[70%] h-[300px] sm:h-[600px] relative pb-12"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={image}
                    alt={`Tiện ích ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
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
            className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-16 z-10 w-4 h-4 sm:w-14 sm:h-14 flex items-center justify-center"
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
            className="swiper-button-next absolute top-1/2 -translate-y-1/2 -right-16 z-10 w-4 h-4 sm:w-14 sm:h-14 flex items-center justify-center"
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
      </div>

      <style jsx global>{`
        .swiper {
          padding-bottom: 3rem !important;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d9d9d9;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #0f3581;
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
