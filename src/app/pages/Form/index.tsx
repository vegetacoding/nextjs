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
        <div className="container mx-auto mt-8 max-w-[1324px] relative">
          <div className="bg-white">
            <div className="absolute top-[40px] left-[35px] right-0 bottom-0 z-10">
              <div className="flex items-center justify-center">
                <h2 className="text-[40px] text-golden-gradient font-semibold font-noto">
                  TIỀM NĂNG TĂNG GIÁ DỰA TRÊN CƠ SỞ HẠ TẦNG
                </h2>
              </div>
            </div>
            <div className="absolute top-1/2 translate-y-[-25%] left-[40px] right-0 bottom-0 z-10">
              <div className="flex items-center justify-start">
                <div className="flex flex-col  w-[400px]">
                  <div className="text-2xl p-4 bg-blue-gradient flex items-center justify-center">
                    <span className="text-golden-gradient uppercase">
                      VÀNH ĐAI 3 HOÀN THÀNH
                    </span>
                  </div>
                  <div className="bg-white py-2 border-b-1 border-gray-300 text-blue-gradient font-semibold flex items-center justify-center gap-4">
                    <div className="text-2xl ">31/12/2025</div>
                    <div className="text-[15px]">
                      Thông xe kỹ thuật toàn bộ 14,7km trên địa bàn TP.Thủ Đức
                    </div>
                  </div>
                  <div className="bg-white py-2 border-b-1 border-gray-300 text-blue-gradient font-semibold flex items-center justify-center gap-4">
                    <div className="text-2xl ">31/12/2025</div>
                    <div className="text-[15px]">
                      Thông xe kỹ thuật toàn bộ 14,7km trên địa bàn TP.Thủ Đức
                    </div>
                  </div>
                  <div className="bg-white py-2 border-b-1 border-gray-300 text-blue-gradient font-semibold flex items-center justify-center gap-4">
                    <div className="text-2xl ">31/12/2025</div>
                    <div className="text-[15px]">
                      Thông xe kỹ thuật toàn bộ 14,7km trên địa bàn TP.Thủ Đức
                    </div>
                  </div>
                  <div className="text-base font-semibold p-4 bg-blue-gradient flex items-center justify-center">
                    <span className="text-golden-gradient uppercase text-center">
                      CƠ HỘI SỞ HỮU KHI VÀNH ĐAI ĐI VÀO HOẠT ĐỘNG CÓ TIỀM NĂNG
                      GIA TĂNG
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-t-lg">
              <Image
                src="/map.png"
                alt="The Opus One Map Location"
                fill
                className="relative-image"
                priority
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1324px] relative">
          <div className="bg-white">
            <div className="absolute top-[40px] left-[35px] right-0 bottom-0 z-10">
              <div className="flex items-center justify-center">
                <h2 className="text-[35px] text-golden-gradient font-semibold font-noto">
                  KHOẢNG CÁCH ĐẾN TRUNG TÂM - KẾT NỐI HOÀN HẢO
                </h2>
              </div>
            </div>
            <div className="absolute top-[150px] left-[35px] right-0 bottom-0 z-10 w-full">
              <div className="flex items-center justify-start max-w-[1260px] mx-auto">
                <div className="flex flex-col items-start w-[50%]">
                  <div className="flex items-center gap-4 -mb-2.5">
                    <div className="text-[80px] font-bold text-golden-gradient">
                      01&apos;
                    </div>
                    <div className="text-center text-xl text-golden-gradient font-semibold uppercase -mb-5">
                      Đến Vành Đai 3
                    </div>
                  </div>
                  <div className="text-center text-[18px] text-golden-gradient border-t-1 border-[#FFE6A7] pt-2">
                    Liên kết nhanh toàn vùng kinh tế trọng điểm phía Nam
                  </div>
                </div>
                <div className="flex flex-col items-start w-[50%]">
                  <div className="flex items-center gap-4 -mb-2.5">
                    <div className="text-[80px] font-bold text-golden-gradient">
                      10&apos;
                    </div>
                    <div className="text-start text-xl text-golden-gradient font-semibold uppercase ">
                      Tiếp cận Metro
                      <br />
                      Bến Thành - Suối Tiên
                    </div>
                  </div>
                  <div className="text-center text-[18px] text-golden-gradient border-t-1 border-[#FFE6A7] pt-2">
                    Liên kết nhanh toàn vùng kinh tế trọng điểm phía Nam
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src="/map2.png"
                alt="The Opus One Map Location"
                fill
                className="relative-image"
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
        className="w-screen relative overflow-hidden bg-white pt-8 flex flex-col"
      >
        <div className="bg-white">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/map5.jpeg"
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
