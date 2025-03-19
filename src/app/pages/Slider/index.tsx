"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DynamicSlider from "../DynamicSlider";

const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

// Dữ liệu cho các tòa nhà
const buildingData = {
  OS1: {
    images: ["/slider1.png", "/slider2.png"],
    title: "Tòa OS1",
  },
  OS2: {
    images: ["/slider1.png", "/slider2.png"],
    title: "Tòa OS2",
  },
  OS3: {
    images: ["/slider1.png", "/slider2.png"],
    title: "Tòa OS3",
  },
  OS4: {
    images: ["/slider1.png", "/slider2.png"],
    title: "Tòa OS4",
  },
};

// Thêm dữ liệu cho căn hộ
const apartmentData = [
  {
    id: 1,
    title: "CĂN HỘ STUDIO",
    image: "/studio.png",
    info: {
      "Số phòng ngủ": "01",
      "Diện tích thông thủy": "33,2 m2",
      "Diện tích tim tường": "29,2 m2",
    },
  },
  {
    id: 2,
    title: "CĂN HỘ 1 PHÒNG NGỦ",
    image: "/studio.png",
    info: {
      "Số phòng ngủ": "01",
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
      <section id="slider-2" className="w-screen bg-blue-gradient py-16">
        <h2 className="text-[32px] font-bold text-center mb-8  text-white max-w-[1324px] mx-auto">
          MẶT BẰNG ĐIỂN HÌNH
        </h2>
        <div className="px-4 mx-auto max-w-[1324px]">
          <div className="flex justify-center gap-1">
            {Object.keys(buildingData).map((building) => (
              <button
                key={building}
                onClick={() => setActiveBuilding(building)}
                className={`px-8 py-2 rounded-t-lg text-lg font-medium transition-all
                  ${
                    activeBuilding === building
                      ? "bg-white text-[#0F3581]"
                      : "bg-[#0F3581]/20 text-white hover:bg-[#0F3581]/40"
                  }
                `}
              >
                Tòa {building}
              </button>
            ))}
          </div>
          <div className="group bg-white rounded-lg p-8 shadow-lg">
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
            <button className="swiper-button-prev-2 absolute top-1/2 -translate-y-1/2 -left-16 z-10 w-8 h-14 flex items-center justify-center">
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
            </button>
            <button className="swiper-button-next-2 absolute top-1/2 -translate-y-1/2 -right-16 z-10 w-8 h-14 flex items-center justify-center">
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
            </button>
          </div>
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
      <section id="slider-3" className="w-screen bg-golden-gradient py-16">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <h2 className="text-[32px] font-bold text-center mb-8 text-[#0F3581]">
            MẶT BẰNG CĂN HỘ THE OPUS ONE
          </h2>

          <div className="bg-golden-gradient rounded-lg p-12">
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
                  <div className="grid grid-cols-2 gap-16 text-blue-gradient">
                    <div className="">
                      <div className="relative w-full h-[400px]">
                        <Image
                          src={apartment.image}
                          alt={apartment.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-3xl font-bold text-blue-gradient mb-8">
                        THÔNG TIN CĂN HỘ
                      </h4>
                      <div className="space-y-6">
                        {Object.entries(apartment.info).map(
                          ([key, value], idx) => (
                            <div key={idx} className="flex items-center gap-4">
                              <div className="w-2 h-2 rounded-full bg-golden-gradient" />
                              <div className="flex justify-between w-full border-b border-white/20 pb-2">
                                <span className="text-black text-lg">
                                  {key}
                                </span>
                                <span className="text-blue-gradient font-bold text-lg">
                                  {value}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation button */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button className="swiper-button-prev-3 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="#173370"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="text-blue-gradient text-xl font-medium tracking-wider">
                {String(currentSlide + 1).padStart(2, "0")}/
                {String(apartmentData.length).padStart(2, "0")}
              </div>
              <button className="swiper-button-next-3 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#173370"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
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
        className="w-screen h-screen bg-blue-gradient py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-[1440px] relative h-full">
          <div className="flex flex-col items-end text-right text-white mt-16 pr-32">
            <h2 className="text-[32px] font-bold mb-4">TIÊU CHUẨN BÀN GIAO</h2>
            <h1 className="text-[48px] font-bold text-golden-gradient mb-8">
              CAO CẤP BẬC NHẤT
            </h1>
            <h3 className="text-[24px] font-bold mb-12">VINHOMES GRAND PARK</h3>
            <button className="bg-golden-gradient text-blue-gradient font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity mt-20">
              ĐĂNG KÝ NHẬN THÔNG TIN
            </button>
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/image21.png"
              alt="Premium Sofa"
              width={920}
              height={453}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
