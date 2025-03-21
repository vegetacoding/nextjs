"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="home-page"
      className="h-[300px] sm:h-[500px] lg:h-screen w-screen snap-start relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <Image
          src="/banner.jpg"
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
        transition={{ duration: 0.1 }}
        className="relative z-50 pt-10 px-8"
      >
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex justify-between items-center h-20 xl:bg-black/10 xl:backdrop-blur-sm xl:px-8 xl:rounded-full xl:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Vinhomes Logo"
                width={200}
                height={77}
                className="w-[60px]"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex space-x-8">
              <a
                href="#home-page"
                className="text-white hover:text-white relative group font-medium"
              >
                <span className="relative z-10">TRANG CHỦ</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-golden-gradient origin-center transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#overview"
                className="text-white hover:text-white relative group font-medium"
              >
                <span className="relative z-10">TỔNG QUAN</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-golden-gradient origin-center transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#handover"
                className="text-white hover:text-white relative group font-medium"
              >
                <span className="relative z-10">BÀN GIAO</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-golden-gradient origin-center transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#utilities"
                className="text-white hover:text-white relative group font-medium"
              >
                <span className="relative z-10">TIỆN ÍCH</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-golden-gradient origin-center transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#progress"
                className="text-white hover:text-white relative group font-medium"
              >
                <span className="relative z-10">TIẾN ĐỘ</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-golden-gradient origin-center transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#policy"
                className="text-white hover:text-white relative group font-medium"
              >
                <span className="relative z-10">CHÍCH SÁCH BÁN HÀNG</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-golden-gradient origin-center transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="hidden xl:block">
              <a href="#quotation-form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[240px] button-padding rounded-full font-semibold text-base bg-golden-gradient cursor-pointer hidden xl:block"
                >
                  <span className="text-blue-gradient">
                    ĐĂNG KÝ NHẬN BÁO GIÁ
                  </span>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[100] lg:hidden"
            onClick={toggleMobileMenu}
          >
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-[80%] h-full bg-blue-900 p-8 z-[110]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Vinhomes Logo"
                    width={150}
                    height={58}
                    className="w-[60px]"
                  />
                </Link>
                <motion.button
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="flex flex-col space-y-6">
                <a
                  href="#home-page"
                  onClick={toggleMobileMenu}
                  className="text-white text-xl hover:text-white"
                >
                  TRANG CHỦ
                </a>
                <a
                  href="#overview"
                  onClick={toggleMobileMenu}
                  className="text-white text-xl hover:text-white"
                >
                  TỔNG QUAN
                </a>
                <a
                  href="#handover"
                  onClick={toggleMobileMenu}
                  className="text-white text-xl hover:text-white"
                >
                  BÀN GIAO
                </a>
                <a
                  href="#utilities"
                  onClick={toggleMobileMenu}
                  className="text-white text-xl hover:text-white"
                >
                  TIỆN ÍCH
                </a>
                <a
                  href="#progress"
                  onClick={toggleMobileMenu}
                  className="text-white text-xl hover:text-white"
                >
                  TIẾN ĐỘ
                </a>
                <a
                  href="#policy"
                  onClick={toggleMobileMenu}
                  className="text-white text-xl hover:text-white"
                >
                  CHÍCH SÁCH BÁN HÀNG
                </a>

                <a href="#quotation-form">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full button-padding rounded font-semibold text-base bg-golden-gradient cursor-pointer mt-4"
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-blue-gradient">
                      ĐĂNG KÝ NHẬN BÁO GIÁ
                    </span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
