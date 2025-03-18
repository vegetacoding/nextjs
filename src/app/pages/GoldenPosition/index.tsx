"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GoldenPosition() {
  return (
    <div className="bg-[#0f3581]">
      <section
        id="golden-position"
        className="h-screen w-screen bg-transparent relative"
      >
        <div className="">
          <Image
            src="/image1.png"
            alt="The Opus One Utilities"
            fill
            className=""
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-[1440px] h-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center pt-[100px] pb-16 justify-between h-full"
          >
            <div className="flex items-center space-x-4">
              <h2 className="text-[40px] text-golden-gradient">
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
              <div className="space-y-4 text-golden-gradient text-center text-base">
                <p>HỒ BƠI VÔ CỰC, GYM, SÂN GOLF MINI,</p>
                <p>CÔNG VIÊN 36HA, VINCOM MEGA MALL</p>
                <p>
                  HỆ SINH THÁI VINGROUP: VINCOM - VINFAST - VINSCHOOL - VINMEC
                </p>
              </div>
              <h3 className="text-[40px] text-golden-gradient mt-8 text-[38px]">
                TẤT CẢ CHỈ TRONG MỘT BƯỚC CHÂN
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section
        id="golden-position"
        className="h-screen w-screen bg-[#0f3581] relative"
      >
        <div className="">
          <Image
            src="/image2.png"
            alt="The Opus One Utilities"
            fill
            className="object-cover custom-image-1"
            priority
            quality={100}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mt-8 text-center flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="text-[40px] text-golden-gradient font-semibold">
            VỊ TRÍ VÀNG
          </h1>
          <div className="space-y-4 text-golden-gradient text-center text-[27px]">
            <p>GIỮA LÒNG ĐÔ THỊ</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
