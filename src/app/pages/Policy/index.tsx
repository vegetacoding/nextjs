"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DynamicForm from "../DynamicForm";

const policyData = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

export default function Policy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  return (
    <section id="policy" className="w-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/image22.png"
          alt="Background"
          fill
          className="object-cover h-full xl:custom-image-3"
          priority
        />
      </motion.div>
      <div className="container mx-auto max-w-[1440px] relative z-10 h-full p-8 md:p-8 lg:p-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
          {/* Left Column - Images */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=""
              >
                <Image
                  src="/VF3.png"
                  alt="VF3 Car"
                  width={253}
                  height={256}
                  className="object-contain mx-auto"
                />
              </motion.div>

              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-[200px]"
              >
                <Image
                  src="/image30.png"
                  alt="Vinschool Scholarship"
                  width={253}
                  height={256}
                  className="object-contain mx-auto"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 mt-4 w-[335px]"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer w-full bg-golden-gradient text-blue-gradient font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
              >
                ĐĂNG KÝ NHẬN CHÍNH SÁCH BÁN HÀNG
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPriceModalOpen(true)}
                className="w-full bg-blue-gradient text-white font-bold py-3 px-8 rounded-lg transition-all cursor-pointer"
              >
                & BẢNG GIÁ CHI TIẾT
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Policy Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[45px] font-bold text-blue-gradient text-center mb-8 font-noto"
            >
              CHÍNH SÁCH BÁN HÀNG
            </motion.h2>
            <div className="grid grid-cols-2 gap-2">
              {policyData.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl text-white flex flex-col justify-between md:scale-100"
                >
                  <Image src={policy} alt="Policy" width={370} height={160} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-[650px] p-4"
            >
              <DynamicForm
                title="ĐĂNG KÝ NHẬN CHÍNH SÁCH BÁN HÀNG"
                subtitle="TRỰC TIẾP TỪ CĐT"
                buttonText="ĐĂNG KÝ NHẬN CHÍNH SÁCH"
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="#0F3581"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPriceModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsPriceModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-[650px] p-4"
            >
              <DynamicForm
                title="ĐĂNG KÝ NHẬN BẢNG GIÁ"
                subtitle="TRỰC TIẾP TỪ CĐT"
                buttonText="ĐĂNG KÝ NHẬN BẢNG GIÁ"
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPriceModalOpen(false)}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="#0F3581"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
