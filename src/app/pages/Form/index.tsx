"use client";

import Image from "next/image";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section
        id="registration-form"
        className="w-screen relative overflow-hidden bg-white py-8 flex flex-col"
      >
        <div className="container mx-auto max-w-[1324px]">
          <div className="bg-[#152F68] rounded-lg py-8 px-12 shadow-lg flex flex-col items-center">
            <h2 className="text-3xl font-bold text-golden-gradient text-center mb-2">
              ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN
            </h2>
            <p className="text-white text-center text-base mb-8 uppercase">
              * Quý anh chị đăng ký nhận bảng giá 16 căn đẹp nhất, giá tốt nhất
              trong đợt đầu mở bán tại đây
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ tên (*)"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-golden-gradient bg-white"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại (*)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-golden-gradient bg-white"
                  required
                />
                <input
                  type="text"
                  name="product"
                  placeholder="Sản phẩm đang quan tâm nếu có"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-golden-gradient bg-white"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-golden-gradient text-blue-900 font-bold rounded hover:opacity-90 transition-all"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </div>
            </form>

            <div className="text-center mt-6">
              <p className="text-white font-bold text-xl p-2">
                HOTLINE: 090.XXX.XXXX
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 max-w-[1324px]">
          <div className="bg-white">
            <div className="relative w-full h-full rounded-t-lg overflow-hidden">
              <Image
                src="/map.png"
                alt="The Opus One Map Location"
                fill
                className="object-contain relative-image"
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1324px]">
          <div className="bg-white">
            <div className="relative w-full h-full  overflow-hidden">
              <Image
                src="/map2.png"
                alt="The Opus One Map Location"
                fill
                className="object-contain relative-image"
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1324px]">
          <div className="bg-white">
            <div className="relative w-full h-full  overflow-hidden">
              <Image
                src="/map3.png"
                alt="The Opus One Map Location"
                fill
                className="object-contain relative-image"
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1324px]">
          <div className="bg-white">
            <div className="relative w-full h-full  overflow-hidden">
              <Image
                src="/map4.png"
                alt="The Opus One Map Location"
                fill
                className="object-contain relative-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="registration-form"
        className="w-screen relative overflow-hidden bg-white py-8 flex flex-col"
      >
        <div className="bg-white">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/map5.png"
              alt="The Opus One Map Location"
              fill
              className="object-contain relative-image"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
