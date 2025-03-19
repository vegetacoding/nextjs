"use client";

import Image from "next/image";

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
      <section className="w-screen h-[766px] bg-[#0F3581] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1440px] h-full relative pt-8">
          <div className="flex justify-between relative">
            {/* Left Column */}
            <div className="w-[30%] space-y-6">
              {reasonsData.slice(0, 5).map((reason) => (
                <div key={reason.id} className="text-white">
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold text-golden-gradient">
                      {reason.id}
                    </span>
                    <div>
                      <h3 className="text-base font-bold mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm opacity-80 whitespace-pre-line leading-tight">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=" w-[500px]">
              <h2 className="text-[40px] font-bold text-golden-gradient pt-8 mb-12">
                TOP 10 LÝ DO SỞ HỮU
              </h2>
              {/* Center Image */}
              <div>
                <Image
                  src="/top10.png"
                  alt="The Opus One"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[30%] space-y-6">
              {reasonsData.slice(5).map((reason) => (
                <div key={reason.id} className="text-white">
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold text-golden-gradient">
                      {reason.id}
                    </span>
                    <div>
                      <h3 className="text-base font-bold mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm opacity-80 whitespace-pre-line leading-tight">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen min-h-[600px] bg-[#0F3581] relative overflow-hidden py-16">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="flex justify-between items-center gap-8">
            {/* Left Content */}
            <div className="w-1/2 text-white">
              <h3 className="font-script text-2xl mb-4 text-golden-gradient">
                Đại lý phân phối
              </h3>
              <h2 className="text-xl font-bold mb-2">ĐỘC QUYỀN CĂN HỘ</h2>
              <h1 className="text-4xl font-bold text-golden-gradient mb-6">
                THE OPUS ONE
              </h1>
              <h4 className="text-xl font-bold mb-8">
                MINH TÂM LAND - ĐẠI LÝ F1 CHIẾN LƯỢC CỦA VINHOMES TẠI THE OPUS
                ONE
              </h4>
              <p className="text-sm mb-6 opacity-80">
                Minh Tâm Land tự hào là đơn vị F1 chiến lược trực tiếp phân phối
                The Opus One - phân khu đẳng cấp nhất tại đại đô thị Sài Gòn -
                Vinhomes Grand Park.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-sm opacity-80">
                    Đại lý F1 Top đầu Vinhomes - dẫn đầu doanh số nhiều năm liền
                    tiếp. Được ủy quyền giá tốt - đa dạng sản phẩm phù hợp nhu
                    cầu & đầu tư.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-sm opacity-80">
                    Tư vấn tận tâm, thông tin chính xác & chuyên sâu tư vấn ngay
                    am hiểu dự án.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-sm opacity-80">
                    Văn phòng đặt ngay trong khu đô thị, hỗ trợ khách hàng nhanh
                    chóng 24/7.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-sm opacity-80">
                    Xe đưa đón tư/tới đưa đón miễn phí tham quan thực tế dự án.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-sm opacity-80">
                    Hơn 3 năm kinh nghiệm chuyên sâu tại thị trường Vinhomes
                    Grand Park - hiểu rõ từng phân khu, từng dòng sản phẩm.
                  </p>
                </div>
              </div>

              <p className="text-sm mt-8 italic opacity-80">
                Liên hệ Minh Tâm Land ngay hôm nay để nhận thông tin mới nhất,
                chính sách ưu đãi, và đặt lịch tham quan The Opus One trực tiếp
                tại dự án!
              </p>

              <div className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
                <button className="w-full bg-yellow-400 text-blue-gradient font-bold py-3 rounded hover:opacity-90 transition-opacity">
                  ĐĂNG KÝ TƯ VẤN NGAY
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src="/daily.png"
                alt="Đại lý phân phối The Opus One"
                width={600}
                height={800}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
