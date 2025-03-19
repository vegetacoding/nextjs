"use client";

import Image from "next/image";

export default function NiceView() {
  return (
    <section
      id="home-page"
      className="h-screen w-screen snap-start relative overflow-hidden flex flex-col"
    >
      <div className="bg-golden-gradient text-blue-gradient text-center py-3 text-3xl  h-[60px]">
        SỐNG SANG - VIEW ĐẸP
      </div>
      <div className="">
        <Image
          src="/view.png"
          alt="The Opus One Utilities"
          fill
          className="relative-image"
          priority
        />
      </div>
    </section>
  );
}
