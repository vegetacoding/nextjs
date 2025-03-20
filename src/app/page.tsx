"use client";

import { motion } from "framer-motion";
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
export default function Home() {
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
          className="fixed bottom-8 right-8 w-[316px] h-[53px] z-50 text-base font-medium bg-blue-gradient rounded-[60px] border-golden-gradient cursor-pointer"
        >
          <a href="#quotation-form" className="text-golden-gradient">
            ĐĂNG KÝ THAM QUAN NHÀ MẪU
          </a>
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
      </main>
    </>
  );
}
