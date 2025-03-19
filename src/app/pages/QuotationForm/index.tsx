"use client";

import Image from "next/image";
import { useState } from "react";
import DynamicSlider from "../DynamicSlider";
const images = ["/slider1.png", "/slider2.png", "/slider3.png"];
export default function QuotationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
    type: {
      studio: false,
      "1pn": false,
      "2pn": false,
      "3pn": false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        type: {
          ...prev.type,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <section className="w-screen bg-white py-16">
        <div className="container mx-auto px-4 max-w-[1320px] bg-white">
          <div className="bg-[#FFE9B7] rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="relative h-[500px]">
                <Image
                  src="/image31.png"
                  alt="The Opus One"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8">
                <h2 className="text-[#0F3581] text-2xl font-bold mb-2">
                  NHẬN BÁO GIÁ
                </h2>
                <p className="text-[#0F3581] text-sm mb-1">TRỰC TIẾP TỪ CĐT</p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên (*)"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] bg-white"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại (*)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] bg-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] bg-white"
                  />

                  <div>
                    <p className="text-[#0F3581] text-sm mb-2">
                      CĂN HỘ MONG MUỐN
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="studio"
                          checked={formData.type.studio}
                          onChange={handleChange}
                          className="form-checkbox text-[#0F3581]"
                        />
                        <span className="text-sm">Căn Studio</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="1pn"
                          checked={formData.type["1pn"]}
                          onChange={handleChange}
                          className="form-checkbox text-[#0F3581]"
                        />
                        <span className="text-sm">Căn 1PN+</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="2pn"
                          checked={formData.type["2pn"]}
                          onChange={handleChange}
                          className="form-checkbox text-[#0F3581]"
                        />
                        <span className="text-sm">Căn 2PN</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="3pn"
                          checked={formData.type["3pn"]}
                          onChange={handleChange}
                          className="form-checkbox text-[#0F3581]"
                        />
                        <span className="text-sm">Căn 3PN</span>
                      </label>
                    </div>
                  </div>

                  <textarea
                    name="content"
                    placeholder="Nội dung"
                    value={formData.content}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] resize-none bg-white"
                  />

                  <div className="text-xs text-gray-600">
                    Bằng việc tiếp tục, bạn đã đồng ý với{" "}
                    <a href="#" className="text-[#0F3581] underline">
                      Chính sách bảo mật
                    </a>{" "}
                    của VinHomes.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-gradient text-white font-bold rounded hover:bg-blue-gradient/90 transition-colors"
                  >
                    ĐĂNG KÝ NHẬN BÁO GIÁ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DynamicSlider images={images} title="HÌNH ẢNH CĂN HỘ MẪU" />
    </>
  );
}
