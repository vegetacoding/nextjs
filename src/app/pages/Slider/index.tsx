"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DynamicSlider from "../DynamicSlider";
import { motion } from "framer-motion";

const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

// Dữ liệu cho các tòa nhà
const buildingData = {
  OS1: {
    images: [
      "/mat-bang-tang-du-an-the-opus-one (1).png",
      "/mat-bang-tang-du-an-the-opus-one (2).png",
      "/mat-bang-tang-du-an-the-opus-one (3).png",
      "/mat-bang-tang-du-an-the-opus-one (4).png",
      "/mat-bang-tang-du-an-the-opus-one.png",
    ],
    title: "Tòa OS1",
  },
  OS2: {
    images: [
      "/MATBANG DIENHINH OS2 280824_001.png",
      "/MATBANG DIENHINH OS2 280824_002.png",
      "/MATBANG DIENHINH OS2 280824_003.png",
      "/MATBANG DIENHINH OS2 280824_004.png",
      "/MATBANG DIENHINH OS2 280824_005.png",
    ],
    title: "Tòa OS2",
  },
  OS3: {
    images: [
      "/TMB DIENHINH OS3_001.png",
      "/TMB DIENHINH OS3_002.png",
      "/TMB DIENHINH OS3_003.png",
      "/TMB DIENHINH OS3_004.png",
      "/TMB DIENHINH OS3_005.png",
    ],
    title: "Tòa OS3",
  },
  OS5: {
    images: ["/os51.png", "/os52.png", "/os53.png", "/os54.png", "/os55.png"],
    title: "Tòa OS5",
  },
};

// Thêm dữ liệu cho căn hộ
const apartmentData = [
  {
    id: 1,
    title: "CĂN HỘ STUDIO",
    image: "/Stu.jpg",
    info: {
      "Số phòng ngủ": "01",
      "Diện tích thông thủy": "33,2 m2",
      "Diện tích tim tường": "29,2 m2",
    },
  },
  {
    id: 2,
    title: "CĂN HỘ 1 PHÒNG NGỦ",
    image: "/1PN.jpg",
    info: {
      "Số phòng ngủ": "01",
      "Diện tích thông thủy": "45,5 m2",
      "Diện tích tim tường": "42,8 m2",
    },
  },
  {
    id: 3,
    title: "CĂN HỘ 2 PHÒNG NGỦ",
    image: "/2PN.jpg",
    info: {
      "Số phòng ngủ": "02",
      "Diện tích thông thủy": "45,5 m2",
      "Diện tích tim tường": "42,8 m2",
    },
  },
  {
    id: 4,
    title: "CĂN HỘ 3 PHÒNG NGỦ",
    image: "/3PN.jpg",
    info: {
      "Số phòng ngủ": "03",
      "Diện tích thông thủy": "45,5 m2",
      "Diện tích tim tường": "42,8 m2",
    },
  },
  // Add more apartment types as needed
];

export default function Slider() {
  const [activeBuilding, setActiveBuilding] = useState("OS2");
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <DynamicSlider images={images} title="TIỆN ÍCH TRONG THE OPUS ONE" />
      <section id="utilities" className="w-screen bg-blue-gradient">
        <div className="bg-golden-gradient pt-10 sm:pt-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[15px] sm:text-[20px] md:text-[32px] font-bold text-center mb-8 text-blue-gradient max-w-[1324px] mx-auto font-noto"
          >
            MẶT BẰNG ĐIỂN HÌNH
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-1"
          >
            {Object.keys(buildingData).map((building, index) => (
              <motion.button
                key={building}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveBuilding(building)}
                className={`px-8 py-2 rounded-t-lg text-[13px] sm:text-[20px] md:text-lg font-medium transition-all
                  ${
                    activeBuilding === building
                      ? "bg-white text-[#0F3581]"
                      : "bg-[#0F3581]/20 text-white hover:bg-[#0F3581]/40"
                  }
                `}
              >
                Tòa {building}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="px-4 mx-auto max-w-[1324px] bg-transparent">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="group bg-transparent rounded-lg p-8"
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
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              navigation={{
                prevEl: ".swiper-button-prev-2",
                nextEl: ".swiper-button-next-2",
              }}
              className="w-full h-[600px] relative pb-12"
            >
              {buildingData[
                activeBuilding as keyof typeof buildingData
              ].images.map((image: string, index: number) => (
                <SwiperSlide key={index} className="relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`${
                        buildingData[
                          activeBuilding as keyof typeof buildingData
                        ].title
                      } - Mặt bằng ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="swiper-button-prev-2 absolute top-1/2 -translate-y-1/2 -left-16 z-10 w-8 h-14 flex items-center justify-center"
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
                  stroke="#FFFFFF"
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
              className="swiper-button-next-2 absolute top-1/2 -translate-y-1/2 -right-16 z-10 w-8 h-14 flex items-center justify-center"
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
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <style jsx global>{`
          #slider-2 .swiper {
            padding-bottom: 3rem !important;
          }
          #slider-2 .swiper-pagination {
            bottom: 0 !important;
          }
          #slider-2 .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #d9d9d9;
            opacity: 1;
            margin: 0 6px !important;
          }
          #slider-2 .swiper-pagination-bullet-active {
            background: #0f3581;
          }
          #slider-2 .swiper-button-prev-2::after,
          #slider-2 .swiper-button-next-2::after {
            display: none;
          }
          #slider-2 .swiper-button-prev-2,
          #slider-2 .swiper-button-next-2 {
            transition: opacity 0.3s ease;
          }
          #slider-2 .swiper-button-disabled {
            opacity: 0.5;
          }
        `}</style>
      </section>
      <section id="slider-3" className="w-screen bg-golden-gradient py-12">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[15px] sm:text-[20px] md:text-[32px] font-bold text-center mb-8 text-[#0F3581] font-noto"
          >
            MẶT BẰNG CĂN HỘ THE OPUS ONE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-golden-gradient rounded-lg px-4 sm:px-16"
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              navigation={{
                prevEl: ".swiper-button-prev-3",
                nextEl: ".swiper-button-next-3",
              }}
              className="relative"
            >
              {apartmentData.map((apartment, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-blue-gradient">
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-1"
                    >
                      <div className="relative w-full h-[200px] sm:h-[400px]">
                        <Image
                          src={apartment.image}
                          alt={apartment.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full lg:w-[425px]"
                    >
                      <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl text-blue-gradient mb-4 font-noto"
                      >
                        {apartment.title}
                      </motion.h4>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-black text-lg font-medium tracking-wider mb-4"
                      >
                        THÔNG TIN CĂN HỘ
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col gap-4 py-5 border-t border-b border-[#152F68]"
                      >
                        {Object.entries(apartment.info).map(
                          ([key, value], idx) => (
                            <motion.div
                              key={idx}
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.5 + idx * 0.1,
                              }}
                              className="flex items-center gap-2"
                            >
                              <div className="flex justify-between w-full border-b border-white/20 pb-2">
                                <span className="text-black text-xl flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-[#0F3581]" />
                                  {key}
                                </span>
                                <span className="text-blue-gradient font-bold text-3xl">
                                  {value}
                                </span>
                              </div>
                            </motion.div>
                          )
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center items-center gap-6 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="swiper-button-prev-3 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
              <div className="text-blue-gradient text-xl font-medium tracking-wider">
                {String(currentSlide + 1).padStart(2, "0")}/
                {String(apartmentData.length).padStart(2, "0")}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="swiper-button-next-3 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <style jsx global>{`
          #slider-3 .swiper-button-prev-3::after,
          #slider-3 .swiper-button-next-3::after {
            display: none;
          }
          #slider-3 .swiper-button-prev-3,
          #slider-3 .swiper-button-next-3 {
            transition: all 0.3s ease;
          }
          #slider-3 .swiper-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </section>
      <section
        id="premium"
        className="w-screen h-[712px] md-[900px] xl:h-[712px] bg-blue-gradient py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-[1440px] relative h-full">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-end text-right text-white mt-16 pr-16 md:pr-32"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[20px] sm:text-[24px] font-bold mb-2 text-golden-gradient font-noto"
            >
              TIÊU CHUẨN BÀN GIAO
            </motion.h2>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[30px] sm:text-[48px] font-bold text-golden-gradient mb-2 font-noto"
            >
              CAO CẤP BẬC NHẤT
            </motion.h1>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[20px] sm:text-[28px] font-bold mb-8 text-golden-gradient font-noto"
            >
              VINHOMES GRAND PARK
            </motion.h3>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="z-[9999] bg-golden-gradient text-blue-gradient font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity mt-20"
            >
              ĐĂNG KÝ NHẬN THÔNG TIN
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0"
          >
            <Image
              src="/image21.png"
              alt="Premium Sofa"
              width={920}
              height={453}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
