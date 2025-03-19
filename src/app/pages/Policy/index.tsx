"use client";

import Image from "next/image";

const policyData = [
  {
    title: "CHIẾT KHẤU THANH TOÁN",
    value: "10",
    subValue: "2",
    description: "cho 2 tháng",
    bgColor: "bg-blue-gradient",
  },
  {
    title: "QUÀ TẶNG TÂN GIA",
    value: "280",
    unit: "TRIỆU",
    bgColor: "bg-blue-gradient",
  },
  {
    title: "ƯU ĐÃI THANH TOÁN",
    value: "10",
    description: "Cho khoản vay 1-400 triệu",
    bgColor: "bg-blue-gradient",
  },
  {
    title: "GIÃN CÁCH TRẢ CHÍNH THỨC",
    value: "15",
    description: "Cho khoản vay 1-400 triệu",
    bgColor: "bg-blue-gradient",
  },
  {
    title: "ƯU ĐÃI VAY PTLS",
    value: "30",
    description: "Ngân hàng chiến lược cho vay & hỗ trợ lãi suất",
    bgColor: "bg-blue-gradient",
  },
  {
    title: "TẶNG GÓI BẢO HIỂM VỮNG",
    value: "30-50",
    description: "Đã bao gồm VAT",
    bgColor: "bg-blue-gradient",
  },
];

export default function Policy() {
  return (
    <section className="w-screen h-[766px] relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image22.png"
          alt="Background"
          fill
          className="object-cover custom-image-3"
          priority
        />
      </div>
      <div className="container mx-auto px-4 max-w-[1440px] relative z-10 h-full py-8">
        <h2 className="text-[32px] font-bold text-blue-gradient text-center mb-8">
          CHÍNH SÁCH BÁN HÀNG
        </h2>

        <div className="grid grid-cols-2 gap-6 h-[calc(100%-80px)]">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-4 shadow-lg h-[220px]">
              <Image
                src="/VF3.png"
                alt="VF3 Car"
                width={280}
                height={160}
                className="object-contain mx-auto"
              />
              <div className="absolute top-3 left-3">
                <span className="text-sm font-medium text-blue-gradient">
                  TẶNG XE VF3
                </span>
                <span className="absolute top-0 right-0 text-2xl text-blue-gradient">
                  +
                </span>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-4 shadow-lg h-[220px]">
              <Image
                src="/image30.png"
                alt="Vinschool Scholarship"
                width={280}
                height={160}
                className="object-contain mx-auto"
              />
              <div className="absolute top-3 left-3">
                <span className="text-sm font-medium text-blue-gradient">
                  HỌC BỔNG VINSCHOOL
                </span>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <button className="w-full bg-yellow-400 text-blue-gradient font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                ĐĂNG KÝ NHẬN CHÍNH SÁCH BÁN HÀNG
              </button>
              <button className="w-full border-2 border-blue-gradient text-blue-gradient font-bold py-3 px-8 rounded-lg hover:bg-blue-gradient hover:text-white transition-all">
                & BẢNG GIÁ CHI TIẾT
              </button>
            </div>
          </div>

          {/* Right Column - Policy Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {policyData.map((policy, index) => (
              <div
                key={index}
                className={`${policy.bgColor} rounded-2xl p-4 text-white flex flex-col justify-between`}
              >
                <h3 className="text-sm font-medium mb-2">{policy.title}</h3>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{policy.value}</span>
                    {policy.subValue && (
                      <>
                        <span className="text-lg">+</span>
                        <span className="text-3xl font-bold">
                          {policy.subValue}
                        </span>
                      </>
                    )}
                    <span className="text-lg">%</span>
                    {policy.unit && (
                      <span className="text-lg ml-1">{policy.unit}</span>
                    )}
                  </div>
                  {policy.description && (
                    <p className="text-xs mt-1">{policy.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
