"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section
      id="home-page"
      className="h-screen w-screen snap-start relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image
          src="/banner.png"
          alt="The Opus One Banner"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>
      </motion.div>

      {/* Header - Now inside banner section */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-50 pt-10 px-8"
      >
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Vinhomes Logo"
                width={200}
                height={77}
                className="w-[60px]"
              />
            </Link>
            <div className="hidden lg:flex space-x-8">
              <a
                href="#home-page"
                className="text-white hover:text-primary-400 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Trang chủ
              </a>
              <a
                href="#overview"
                className="text-white hover:text-primary-400  relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Tổng quan
              </a>
              <a
                href="#location"
                className="text-white hover:text-primary-400  relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Vị trí
              </a>
              <a
                href="#utilities"
                className="text-white hover:text-primary-400  relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Tiện ích
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-primary-400  relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Thư viện ảnh
              </a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[240px] button-padding rounded font-semibold text-base bg-golden-gradient cursor-pointer"
            >
              <span className="text-blue-gradient">ĐĂNG KÝ NHẬN BÁO GIÁ</span>
            </motion.button>
          </div>
        </div>
      </motion.header>
    </section>
  );
}
