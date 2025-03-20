"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  InformationCircleIcon,
  HomeIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export default function Overview() {
  return (
    <div className="bg-blue-gradient">
      <section id="overview" className="w-screen bg-transparent relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto p-8 max-w-[1440px] flex items-center sticky top-0 flex-col gap-12"
        >
          <h2 className="text-4xl font-light text-white">
            <span className="font-handwriting text-[50px] md:text-[70px] block mb-2">
              Tổng quan
            </span>
            <span className="ml-20 text-golden-gradient font-semibold text-[30px] md:text-[50px] font-noto">
              DỰ ÁN
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
            <div className="relative h-[300px] md:h-[400px] lg:h-[656px]">
              <Image
                src="/gioi-thieu.png"
                alt="Tổng quan dự án"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  <span className="text-golden-gradient ">The Opus One</span> là
                  cái bắt tay chiến lược giữa Vinhomes & CĐT đến từ Nhật Bản:
                  Samty Group, đánh dấu mốc kết thúc chói lọi cho hành trình hơn
                  5 năm kiến tạo siêu đô thị Vinhomes Grand Park.
                </p>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Với vị thế là phân khu cao cấp nhất dự án,{" "}
                  <span className="text-golden-gradient">The Opus One</span>{" "}
                  thừa hưởng mọi yếu tố &quot;NHẤT&quot; - vị trí, tầm view,
                  tiện ích, nội thất và sự đẳng cấp.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-golden-gradient text-lg md:text-xl font-medium">
                  Đặc biệt với chính sách cực kỳ hấp dẫn ngay trong tháng 3:
                </h3>
                <ul className="text-white space-y-2 list-disc list-inside">
                  <li>Mua nhà tặng ngay xe VF3 bản kèm Pin</li>
                  <li>Tặng 1-3 suất học bổng Vinschool</li>
                  <li>
                    Chính sách thanh toán cực giảm, 400 triệu nhận nhà ngay.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Toàn bộ những tiện ích phục vụ cuộc sống đã đi vào hoạt động
                  và có thể phục vụ ngay khi cư dân về ở: Vinschool, Vincom,
                  Vinwonder...
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Ngoài ra, hàng loạt hạ tầng khu Đông sắp về đích cũng giải
                  quyết vấn đề kết nối cho cư dân đô thị, nổi bật như{" "}
                  <span className="text-golden-gradient font-medium">
                    Vành đai 3 (chạy huyền tâm) hoạt động 2026
                  </span>
                  . Giúp cư dân nhanh chóng kết nối về trung tâm TP. HCM cũng
                  như các khu vực lân cận: Long Thành, Nhơn Trạch, Biên Hòa, Dĩ
                  An, Thuận An...
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        id="overview-2"
        className="w-screen bg-transparent relative overflow-hidden "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 max-w-[1440px] relative z-10 "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 gap-y-2 w-full text-white p-10">
            {[
              {
                icon: InformationCircleIcon,
                title: "TÊN PHÂN KHU",
                content: "THE OPUS ONE",
                highlight: true,
                showIcon: true,
              },
              {
                icon: HomeIcon,
                title: "SỐ LƯỢNG",
                content: "1.952 CĂN HỘ",
                highlight: true,
                showIcon: true,
              },
              {
                icon: ScaleIcon,
                title: "PHÁP LÝ",
                content: "Sổ hồng sở hữu lâu dài",
                highlight: true,
                showIcon: true,
              },
              {
                title: "VỊ TRÍ:",
                content:
                  "Trung tâm Vinhomes Grand Park, P. Long Bình và Long Thạnh Mỹ, TP. Thủ Đức",
                smallText: true,
              },
              {
                title: "ĐƠN VỊ XÂY DỰNG:",
                content: "Coteccons",
              },

              {
                title: "GIÁ BÁN:",
                content: "Từ 4,4 tỷ/căn",
                subContent: "(chưa trừ ưu đãi)",
                smallText: true,
              },
              {
                title: "QUY MÔ:",
                content: "4 TÒA CĂN HỘ",
                subContent: "(Cao từ 20 - 35 tầng)",
                smallText: true,
              },
              {
                title: "LOẠI HÌNH CĂN HỘ:",
                content: "Studio, 1PN+, 2PN, 3PN",
              },
              {
                title: "THỜI GIAN BÀN GIAO:",
                content: "Dự kiến Tháng 3 - 2026",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`flex items-start space-x-4 group pb-4 ${
                  index < 6 ? "border-b border-white/30" : ""
                }`}
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-start gap-4 flex-col justify-center">
                    {item.showIcon ? (
                      <div className=" text-white rounded-lg group-hover:scale-110 transition-all">
                        <item.icon className="h-[50px] md:h-[70px] w-[50px] md:w-[70px]" />
                      </div>
                    ) : (
                      <div />
                    )}
                    <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <p
                      className={`${
                        item.highlight
                          ? "text-golden-gradient font-semibold text-[25px] md:text-[28px]"
                          : "text-white"
                      } ${
                        item.smallText
                          ? "text-base md:text-xl leading-relaxed"
                          : "text-xl md:text-2xl leading-relaxed"
                      }`}
                    >
                      {item.content}
                    </p>
                    {item.subContent && (
                      <p className="text-base md:text-xl text-[#8A9CC9] mt-0.5">
                        {item.subContent}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex justify-center mt-4 md:mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button className="scale-90 md:scale-100 bg-golden-gradient text-blue-900 font-bold py-2 md:py-4 px-6 md:px-8 rounded-lg hover:opacity-90 transition-all text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              NHẬN BROCHURE DỰ ÁN QUA ZALO/VIBER
            </button>
          </motion.div>
        </motion.div>

        <div className="">
          <Image
            src="/decor.png"
            alt="Decor Background"
            fill
            className="custom-image relative-image"
          />
        </div>
        <div className="bg-white md:h-[50px] w-full"></div>
      </section>
    </div>
  );
}
