"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    icon: "📧",
    label: "vsales.grandpark@vinhomes.vn",
    href: "mailto:vsales.grandpark@vinhomes.vn",
  },
  {
    icon: "👥",
    label: "Fanpage",
    href: "https://facebook.com",
  },
  {
    icon: "▶️",
    label: "Youtube",
    href: "https://youtube.com",
  },
];

const addresses = [
  {
    title: "ĐỊA CHỈ DỰ ÁN",
    content:
      "Khu dân cư và công viên Phước Thiện, Phường Long Bình và Long Thạnh Mỹ, TP. Thủ Đức, TP.HCM",
  },
  {
    title: "ĐỊA CHỈ NHÀ MẪU",
    content:
      "L3-01 (N301) và L4-01 (N401) Tầng 3, Trung tâm thương mại Vincom Mega Mall Thảo Điền, 161 Đường Võ Nguyên Giáp, P.Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh",
  },
];

const disclaimers = [
  "Thông tin, các tiện ích trong tài liệu bán hàng chỉ mang tính chất tương đối và có thể được điều chỉnh theo quyết định của chủ đầu tư tại từng thời điểm quy hoạch và thực tế thi công dự án.",
  "Hình ảnh mang tính minh họa đính hướng. Các hình ảnh chi tiết sẽ được Chủ đầu tư cập nhật công khai trong quá trình triển khai.",
  "Các thông tin cam kết chính thức sẽ được quy định cụ thể tại Hợp đồng mua bán. Việc quản lý, vận hành và kinh doanh của khu đô thị sẽ theo quy định của Ban quản lý.",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F3581] text-white py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/logo.png"
                alt="Vinhomes Grand Park"
                width={80}
                height={80}
                className="object-contain"
              />
              <Image
                src="/logo.png"
                alt="The Opus One"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <Link
              href="tel:1800xxxx"
              className="inline-flex items-center gap-2 bg-white/10 rounded px-4 py-2 hover:bg-white/20 transition-colors"
            >
              📞 HOTLINE
            </Link>
            <div className="mt-6 space-y-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="col-span-6">
            {addresses.map((address, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold mb-2">{address.title}</h3>
                <p className="text-sm leading-relaxed">{address.content}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer Section */}
          <div className="col-span-3">
            <div className="text-xs space-y-4">
              {disclaimers.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
