import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
            <p className="text-xl mb-8 max-w-2xl">
              The best solution for your business needs. We provide innovative
              solutions that help your business grow and succeed in the digital
              age.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🚀",
    title: "Fast & Reliable",
    description:
      "Lightning-fast performance and reliable service for your business needs.",
  },
  {
    icon: "🛡️",
    title: "Secure",
    description: "Enterprise-grade security to protect your data and business.",
  },
  {
    icon: "💡",
    title: "Innovative",
    description:
      "Cutting-edge solutions that keep you ahead of the competition.",
  },
];
