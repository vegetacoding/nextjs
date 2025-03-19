"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GoldenPosition() {
  return (
    <div className="bg-[#0f3581]">
      <section
        id="golden-position"
        className="w-screen bg-transparent relative "
      >
        <div className="">
          <Image
            src="/image1.png"
            alt="The Opus One Utilities"
            fill
            className="relative-image"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-transparent"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 container mx-auto px-4 max-w-[1440px] h-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center pt-[50px] pb-16 justify-between h-full"
          >
            <div className="flex items-center space-x-4">
              <h2 className="text-[40px] text-golden-gradient font-semibold">
                ĐẲNG CẤP 5 SAO NGAY TRƯỚC THỀM NHÀ
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="mt-8 text-center flex flex-col items-center"
            >
              <h1 className="text-[40px] text-golden-gradient mb-6 font-semibold">
                THE OPUS ONE
              </h1>
              <div className="flex flex-col gap-1 text-golden-gradient text-center text-base">
                <p>HỒ BƠI VÔ CỰC, GYM, SÂN GOLF MINI,</p>
                <p>CÔNG VIÊN 36HA, VINCOM MEGA MALL</p>
                <p>
                  HỆ SINH THÁI VINGROUP: VINCOM - VINFAST - VINSCHOOL - VINMEC
                </p>
              </div>
              <h3 className="text-golden-gradient mt-4 text-[38px]">
                TẤT CẢ CHỈ TRONG MỘT BƯỚC CHÂN
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section
        id="golden-position-2"
        className="w-screen bg-transparent relative mt-20"
      >
        <div className="">
          <Image
            src="/image2.png"
            alt="The Opus One Utilities"
            fill
            className="relative-image"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-center flex flex-col items-center absolute top-[10%] left-[70%] -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="text-[60px] text-golden-gradient font-semibold">
            VỊ TRÍ VÀNG
          </h1>
          <div className="space-y-4 text-golden-gradient text-center text-[32px]">
            <p>GIỮA LÒNG ĐÔ THỊ</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
