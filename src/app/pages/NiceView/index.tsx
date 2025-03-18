"use client";

import Image from "next/image";

export default function NiceView() {
  return (
    <section
      id="home-page"
      className="h-screen w-screen snap-start relative overflow-hidden flex flex-col"
    >
      <div className="bg-golden-gradient text-blue-gradient text-center py-2 text-2xl font-bold">
        SỐNG SANG - VIEW ĐẸP
      </div>
      <div className="">
        <Image
          src="/view.png"
          alt="The Opus One Utilities"
          fill
          className="object-cover custom-image-3"
          priority
          quality={100}
        />
      </div>
    </section>
  );
}
