import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A modern landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Logo
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">{children}</div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  We are dedicated to providing the best solutions for your
                  business needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="text-gray-400 hover:text-white"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: info@example.com</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Address: 123 Business St</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
