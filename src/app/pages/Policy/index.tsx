"use client";

import Image from "next/image";

const policyData = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

export default function Policy() {
  return (
    <section className="w-screen h-[750px] relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image22.png"
          alt="Background"
          fill
          className="object-cover custom-image-3"
          priority
        />
      </div>
      <div className="container mx-auto max-w-[1440px] relative z-10 h-full p-16 ">
        <div className="flex items-center justify-between gap-6">
          {/* Left Column - Images */}
          <div className="flex flex-col gap-4 items-center justify-center ">
            <div className="flex">
              <div className="">
                <Image
                  src="/VF3.png"
                  alt="VF3 Car"
                  width={253}
                  height={256}
                  className="object-contain mx-auto"
                />
              </div>

              <div className="mt-[200px]">
                <Image
                  src="/image30.png"
                  alt="Vinschool Scholarship"
                  width={253}
                  height={256}
                  className="object-contain mx-auto"
                />
              </div>
            </div>

            <div className="space-y-3 mt-4 w-[335px]">
              <button className=" cursor-pointer w-full bg-golden-gradient text-blue-gradient font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                ĐĂNG KÝ NHẬN CHÍNH SÁCH BÁN HÀNG
              </button>
              <button className="w-full border-2 bg-transparent border-blue-gradient text-blue-gradient font-bold py-3 px-8 rounded-lg hover:bg-blue-gradient hover:text-white transition-all">
                & BẢNG GIÁ CHI TIẾT
              </button>
            </div>
          </div>

          {/* Right Column - Policy Grid */}
          <div>
            <h2 className="text-[45px] font-bold text-blue-gradient text-center mb-8 font-noto">
              CHÍNH SÁCH BÁN HÀNG
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {policyData.map((policy, index) => (
                <div
                  key={index}
                  className="rounded-2xl text-white flex flex-col justify-between"
                >
                  <Image src={policy} alt="Policy" width={370} height={160} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
