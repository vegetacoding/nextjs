"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Overview from "./pages/Overview";
import GoldenPosition from "./pages/GoldenPosition";
import NiceView from "./pages/NiceView";
import Form from "./pages/Form";
import Slider from "./pages/Slider";
import Policy from "./pages/Policy";
import Top10 from "./pages/Top10";
import QuotationForm from "./pages/QuotationForm";
import ProjectProgress from "./pages/ProjectProgress";
import Footer from "./pages/Footer";
import DynamicForm from "./pages/DynamicForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="h-screen overflow-y-scroll overflow-x-hidden relative">
        <HomePage />
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: [0, -5, 5, -5, 5, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            rotate: {
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 w-[316px] h-[53px] z-50 text-base font-medium bg-blue-gradient rounded-[60px] border-golden-gradient cursor-pointer"
        >
          <span className="text-golden-gradient">
            ĐĂNG KÝ THAM QUAN NHÀ MẪU
          </span>
        </motion.button>

        <Overview />
        <GoldenPosition />
        <NiceView />
        <Form />
        <Slider />
        <Policy />
        <Top10 />
        <QuotationForm />
        <ProjectProgress />
        <Footer />

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
                  title="ĐĂNG KÝ THAM QUAN NHÀ MẪU"
                  subtitle="TRỰC TIẾP TỪ CĐT"
                  buttonText="ĐĂNG KÝ THAM QUAN"
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
      </main>
    </>
  );
}
