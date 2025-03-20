"use client";

import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeIcon,
  UserGroupIcon,
  PlayCircleIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const socialLinks = [
  {
    icon: EnvelopeIcon,
    label: "minhtam.minhtamland@gmail.com",
    href: "mailto:minhtam.minhtamland@gmail.com",
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    label: "Zalo",
    href: "https://zalo.me/0353912856",
  },
  {
    icon: UserGroupIcon,
    label: "Fanpage",
    href: "https://facebook.com",
  },
  {
    icon: PlayCircleIcon,
    label: "Youtube",
    href: "https://youtube.com",
  },
];

const addresses = [
  {
    title: "CÔNG TY TNHH ĐẦU TƯ VÀ PHÁT TRIỂN ĐỊA ỐC MINH TÂM",
    content:
      "Số D9-32, đường D9, khu The Manhattan, Phường Long Bình, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh",
  },
  {
    title: "ĐỊA CHỈ DỰ ÁN",
    content:
      "The Opus One, Vinhomes Grand Park, Phường Long Bình và Long Thạnh Mỹ, TP Thủ Đức, TP.HCM",
  },
  {
    title: "ĐỊA CHỈ NHÀ MẪU",
    content:
      "Vinhomes Grand Park, Phường Long Bình và Long Thạnh Mỹ, TP Thủ Đức, TP.HCM",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-blue-gradient-reverse text-white py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Logo Section */}
          <div className="col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/logo.png"
                alt="Vinhomes Grand Park"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <Link
              href="tel:0353912856"
              className="inline-flex items-center gap-2 bg-white/10 rounded px-4 py-2 hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" /> HOTLINE: +84 3539 12856
            </Link>
            <div className="mt-6 space-y-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="col-span-8">
            {addresses.map((address, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold mb-2">{address.title}</h3>
                <p className="text-sm leading-relaxed">{address.content}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer Section */}
        </div>
      </div>
    </footer>
  );
}
