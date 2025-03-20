"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NiceView() {
  return (
    <section
      id="location"
      className="w-screen snap-start relative overflow-hidden flex flex-col"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-golden-gradient text-blue-gradient text-center py-2 md:py-3 text-xl sm:text-3xl font-noto h-[50px] flex items-center justify-center"
      >
        SỐNG SANG - VIEW ĐẸP
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className=""
      >
        <Image
          src="/view.png"
          alt="The Opus One Utilities"
          fill
          className="relative-image"
          priority
        />
      </motion.div>
    </section>
  );
}
