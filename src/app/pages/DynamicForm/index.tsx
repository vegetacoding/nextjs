"use client";

import { submitGoogleSheet } from "@/app/server/google-sheets.action";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DynamicForm({
  title = "NHẬN BÁO GIÁ",
  subtitle = "TRỰC TIẾP TỪ CĐT",
  buttonText = "ĐĂNG KÝ NHẬN BÁO GIÁ",
  typeForm = "thamquan",
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  typeForm: string;
}) {
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
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { name, phone, email, content, type } = formData;

      let product = "";
      if (type.studio) product += "Căn Studio, ";
      if (type["1pn"]) product += "Căn 1PN+, ";
      if (type["2pn"]) product += "Căn 2PN, ";
      if (type["3pn"]) product += "Căn 3PN, ";
      product = product.slice(0, -2);

      submitGoogleSheet(typeForm, name, email, phone, product, content);
      setFormData({
        name: "",
        phone: "",
        email: "",
        content: "",
        type: { studio: false, "1pn": false, "2pn": false, "3pn": false },
      });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error(error);
    }
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
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-1/4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
            style={{
              background: "linear-gradient(to right, #0F3581, #1E4B9B)",
            }}
          >
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <p className="font-medium">Đã ghi nhận thông tin của bạn!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="bg-[#FFE9B7] rounded-lg shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="p-8"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              className="text-[#0F3581] text-2xl font-bold mb-2 text-center"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              className="text-[#0F3581] text-sm mb-1 text-center"
            >
              {subtitle}
            </motion.p>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              onSubmit={async (e) => {
                await handleSubmit(e);
              }}
              className="space-y-4 mt-6"
            >
              <motion.input
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Họ và tên (*)"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] bg-white"
                required
              />
              <motion.input
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileFocus={{ scale: 1.02 }}
                type="tel"
                name="phone"
                placeholder="Số điện thoại (*)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] bg-white"
                required
              />
              <motion.input
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] bg-white"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <p className="text-[#0F3581] text-sm mb-2">CĂN HỘ MONG MUỐN</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: "studio", label: "Căn Studio" },
                    { name: "1pn", label: "Căn 1PN+" },
                    { name: "2pn", label: "Căn 2PN" },
                    { name: "3pn", label: "Căn 3PN" },
                  ].map((item) => (
                    <motion.label
                      key={item.name}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: 0.1,
                      }}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={
                          formData.type[item.name as keyof typeof formData.type]
                        }
                        onChange={handleChange}
                        className="form-checkbox text-[#0F3581]"
                      />
                      <span className="text-sm text-black">{item.label}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              <motion.textarea
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileFocus={{ scale: 1.02 }}
                name="content"
                placeholder="Nội dung"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#0F3581] resize-none bg-white"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="text-xs text-gray-600"
              >
                Bằng việc tiếp tục, bạn đã đồng ý với{" "}
                <a href="#" className="text-[#0F3581] underline">
                  Chính sách bảo mật
                </a>{" "}
                của VinHomes.
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="cursor-pointer w-full py-3 bg-blue-gradient text-white font-bold rounded hover:bg-blue-gradient/90 transition-colors"
              >
                {buttonText}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
