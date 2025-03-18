"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  HomeIcon,
  ScaleIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  DocumentIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

export default function Overview() {
  return (
    <div className="bg-blue-gradient">
      <section
        id="overview"
        className="h-screen w-screen bg-transparent relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 max-w-[1440px] h-screen flex items-center sticky top-0"
        >
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="relative h-[700px]">
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
                <h2 className="text-4xl font-light text-white">
                  <span className="font-handwriting text-5xl block mb-2">
                    Tổng quan
                  </span>
                  <span className="text-golden-gradient">DỰ ÁN</span>
                </h2>
                <p className="text-white text-lg leading-relaxed">
                  <span className="text-golden-gradient font-medium">
                    The Opus One
                  </span>{" "}
                  là cái bắt tay chiến lược giữa Vinhomes & CĐT đến từ Nhật Bản:
                  Samty Group, đánh dấu mốc kết thúc chói lọi cho hành trình hơn
                  5 năm kiến tạo siêu đô thị Vinhomes Grand Park.
                </p>
                <p className="text-white text-lg leading-relaxed">
                  Với vị thế là phân khu cao cấp nhất dự án,{" "}
                  <span className="text-golden-gradient font-medium">
                    The Opus One
                  </span>{" "}
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
                <h3 className="text-golden-gradient text-xl font-medium">
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
                <p className="text-white text-lg leading-relaxed">
                  Toàn bộ những tiện ích phục vụ cuộc sống đã đi vào hoạt động
                  và có thể phục vụ ngay khi cư dân về ở: Vinschool, Vincom,
                  Vinwonder...
                </p>
                <p className="text-white text-lg leading-relaxed">
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
        className="h-screen w-screen bg-transparent relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 max-w-[1440px] h-screen flex items-start top-0 relative z-10"
        >
          <div className="grid grid-cols-3 gap-8 w-full mt-32 text-white">
            {[
              {
                icon: BuildingOffice2Icon,
                title: "TÊN PHÂN KHU",
                content: "THE OPUS ONE",
              },
              {
                icon: HomeIcon,
                title: "SỐ LƯỢNG",
                content: "1.952 CĂN HỘ",
              },
              {
                icon: ScaleIcon,
                title: "PHÁP LÝ",
                content: "SỔ HỒNG SỞ HỮU LÂU DÀI",
              },
              {
                icon: MapPinIcon,
                title: "VỊ TRÍ",
                content:
                  "Trung tâm Vinhomes Grand Park, P. Long Bình và Long Thành Mỹ, TP. Thủ Đức",
              },
              {
                icon: BuildingOfficeIcon,
                title: "ĐƠN VỊ XÂY DỰNG",
                content: "Cotecons",
              },
              {
                icon: DocumentIcon,
                title: "LOẠI HÌNH CĂN HỘ",
                content: "Studio, 1PN+, 2PN, 3PN",
              },
              {
                icon: BuildingOffice2Icon,
                title: "QUY MÔ",
                content: "4 TÒA CĂN HỘ (Cao từ 20 - 35 tầng)",
              },
              {
                icon: CurrencyDollarIcon,
                title: "GIÁ BÁN",
                content: "Từ 4,4 tỷ/căn (chưa ưu đãi)",
              },
              {
                icon: CalendarIcon,
                title: "THỜI GIAN BÀN GIAO",
                content: "Dự kiến Tháng 3 - 2026",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="flex items-center space-x-4"
              >
                <div className="text-4xl text-white">
                  <item.icon className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-golden-gradient font-medium text-xl">
                    {item.title}
                  </h3>
                  <p className="text-lg">{item.content}</p>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="col-span-3 mt-6 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button className="bg-golden-gradient w-[430px] text-blue-900 font-bold py-3 px-6 rounded hover:opacity-90 transition-all">
                NHẬN BROCHURE DỰ ÁN QUA ZALO/VIBER
              </button>
            </motion.div>
          </div>
        </motion.div>
        <div>
          <Image
            src="/decor.png"
            alt="Decor Background"
            fill
            className="custom-image"
          />
        </div>
      </section>
    </div>
  );
}
