"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasonsData = [
  {
    id: "01",
    title: "TRUNG TÂM TOP 1",
    description: "Cửa ngõ phía đông khu vực\nSài Gòn - Vinhomes Grand Park",
  },
  {
    id: "02",
    title: "HỆ SINH THÁI ĐA HÌNH HỮU",
    description: "Trung tâm thương mại Vincom Mega Mall\n27ha đa tiện ích",
  },
  {
    id: "03",
    title: "ĐẠI CÔNG VIÊN NGAY TRƯỚC THỀM NHÀ",
    description:
      "Kết nối trực tiếp công viên 36ha\nMang đến cuộc sống xanh cho gia đình\ntrước thềm nhà",
  },
  {
    id: "04",
    title: 'HỒ BƠI "GIẾP ĐỈNH ĐỘC"',
    description:
      "Hệ thống hồ bơi 3 tầng với tầm view\npanorama, độc đáo đầu tiên tại khu vực\nphía Đông",
  },
  {
    id: "05",
    title: "DỊCH VỤ TIỆN ÍCH HẠNG SANG",
    description: "Chuỗi tiện ích đa dạng phong phú\nDành cho cư dân đẳng cấp",
  },
  {
    id: "06",
    title: "TIÊU CHUẨN BÀN GIAO CAO CẤP BẬC NHẤT",
    description:
      "Thiết bị cao cấp từ các thương hiệu\nThiết kế nội thất đẳng cấp từ các\nnhà thiết kế hàng đầu",
  },
  {
    id: "07",
    title: "99% CĂN HỘ SỞ HỮU TẦM VIEW ĐẸP",
    description:
      "Thu trọn tầm view sinh thái của đại\nthành phố Vinhomes Grand Park",
  },
  {
    id: "08",
    title: "CƠ HỘI ĐẦU TƯ DỄ DÀNG",
    description: "Với chính sách thanh toán linh hoạt\nchưa từng có",
  },
  {
    id: "09",
    title: "CÔNG TRÌNH SỐ 1",
    description:
      "Được phát triển bởi Tập đoàn số 1\nThương hiệu BĐS cao cấp bậc nhất\nđang làm nên thay đổi tại phía Đông",
  },
  {
    id: "10",
    title: "CĂN HỘ PHONG CÁCH RESORT GIỚI HẠN",
    description:
      "Chỉ dành cho tư dân đẳng cấp tại khu Park\nSài Gòn - Vinhomes Grand Park",
  },
];

export default function Top10() {
  return (
    <>
      <section className="w-screen  bg-[#0F3581] relative overflow-hidden">
        <div className="container mx-auto max-w-[1440px] h-full relative p-8 sm:p-16">
          <div className="block lg:hidden">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[35px] sm:text-[45px] mb-12 font-bold text-golden-gradient font-noto"
            >
              TOP 10 LÝ DO SỞ HỮU
            </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between relative gap-8 sm:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[33%] space-y-6"
            >
              {reasonsData.slice(0, 5).map((reason, index) => (
                <motion.div
                  key={reason.id}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-white"
                >
                  <div className="flex items-start gap-3">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-xl sm:text-[45px] lg:text-xl font-bold text-golden-gradient"
                    >
                      {reason.id}
                    </motion.span>
                    <div>
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="text-base sm:text-[25px] lg:text-base text-golden-gradient font-bold mb-1"
                      >
                        {reason.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="text-sm sm:text-[20px] lg:text-sm opacity-80 whitespace-pre-line leading-tight"
                      >
                        {reason.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[500px] hidden lg:flex flex-col items-center justify-center gap-4"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[35px] font-bold text-golden-gradient font-noto"
              >
                TOP 10 LÝ DO SỞ HỮU
              </motion.h2>
              {/* Center Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Image
                  src="/top10.png"
                  alt="The Opus One"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[33%] space-y-6"
            >
              {reasonsData.slice(5).map((reason, index) => (
                <motion.div
                  key={reason.id}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-white"
                >
                  <div className="flex items-start gap-3">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-xl sm:text-[50px] lg:text-xl font-bold text-golden-gradient"
                    >
                      {reason.id}
                    </motion.span>
                    <div>
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="text-base sm:text-[30px] lg:text-base text-golden-gradient font-bold mb-1"
                      >
                        {reason.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="text-sm sm:text-[15px] lg:text-sm opacity-80 whitespace-pre-line leading-tight"
                      >
                        {reason.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-screen min-h-[600px] bg-[#0F3581] relative overflow-hidden p-8 sm:p-16">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex justify-between items-center gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 text-white"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-script text-2xl mb-4 text-white font-handwriting text-[55px]"
              >
                Đại lý phân phối
              </motion.h3>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col"
              >
                <h2 className="text-xl font-bold text-golden-gradient">
                  ĐỘC QUYỀN CĂN HỘ
                </h2>
                <h1 className="text-[40px] font-bold text-golden-gradient mb-6">
                  THE OPUS ONE
                </h1>
              </motion.div>

              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-bold mb-8"
              >
                MINH TÂM LAND - ĐẠI LÝ F1 CHIẾN LƯỢC CỦA VINHOMES TẠI THE OPUS
                ONE
              </motion.h4>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm mb-6 opacity-80"
              >
                Minh Tâm Land tự hào là đơn vị F1 chiến lược trực tiếp phân phối
                The Opus One - phân khu đẳng cấp nhất tại đại đô thị Sài Gòn -
                Vinhomes Grand Park.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                {[
                  "Đại lý F1 Top đầu Vinhomes - dẫn đầu doanh số nhiều năm liền tiếp. Được ủy quyền giá tốt - đa dạng sản phẩm phù hợp nhu cầu & đầu tư.",
                  "Tư vấn tận tâm, thông tin chính xác & chuyên sâu tư vấn ngay am hiểu dự án.",
                  "Văn phòng đặt ngay trong khu đô thị, hỗ trợ khách hàng nhanh chóng 24/7.",
                  "Xe đưa đón tư/tới đưa đón miễn phí tham quan thực tế dự án.",
                  "Hơn 3 năm kinh nghiệm chuyên sâu tại thị trường Vinhomes Grand Park - hiểu rõ từng phân khu, từng dòng sản phẩm.",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-green-400 text-xl">✓</span>
                    <p className="text-sm opacity-80">{text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-sm mt-8 italic opacity-80"
              >
                Liên hệ Minh Tâm Land ngay hôm nay để nhận thông tin mới nhất,
                chính sách ưu đãi, và đặt lịch tham quan The Opus One trực tiếp
                tại dự án!
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="mt-8 space-y-4"
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-golden-gradient text-blue-gradient font-bold py-3 rounded hover:opacity-90 transition-opacity"
                >
                  ĐĂNG KÝ TƯ VẤN NGAY
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-1/2 justify-center items-center hidden lg:flex"
            >
              <Image
                src="/daily.png"
                alt="Đại lý phân phối The Opus One"
                width={600}
                height={800}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
