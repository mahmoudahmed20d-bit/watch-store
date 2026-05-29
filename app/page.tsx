"use client";

import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const watches = [
  {
    id: 1,
    name: "Rolex Classic",
    price: "450 EGP",
    image: "/Rolex.jpg",
  },
  {
    id: 2,
    name: "Rolex Gold",
    price: "550 EGP",
    image: "/Rolex.jpg",
  },
  {
    id: 3,
    name: "Rolex Silver",
    price: "500 EGP",
    image: "/Rolex.jpg",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/Rolex.jpg");

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="bg-yellow-500 text-black text-center py-2 font-bold">
        🚚 شحن سريع لجميع المحافظات | خصم 20% لفترة محدودة
      </div>

      <nav className="border-b border-gray-800 px-6 py-5">

        <div className="flex justify-between items-center">

          <h1 className="text-4xl font-bold text-yellow-500">
            Time Store
          </h1>

          <div className="hidden md:flex gap-8 text-lg">
            <a href="#" className="hover:text-yellow-500">
              الرئيسية
            </a>

            <a href="#products" className="hover:text-yellow-500">
              المنتجات
            </a>

            <a
              href="https://wa.me/201203226232"
              className="hover:text-yellow-500"
            >
              تواصل معنا
            </a>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 mt-5 text-center md:hidden">
            <a href="#">الرئيسية</a>
            <a href="#products">المنتجات</a>
            <a href="https://wa.me/201203226232">
              تواصل معنا
            </a>
          </div>
        )}

      </nav>

      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">

        <img
          src="/Rolex.jpg"
          alt="Rolex"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 px-6">

          <h2 className="text-5xl md:text-7xl font-bold text-yellow-500">
            Time Store
          </h2>

          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            أفخم الساعات الفاخرة بأفضل الأسعار
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

            <a
              href="https://wa.me/201203226232"
              target="_blank"
              className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              اطلب الآن
            </a>

            <a
              href="#products"
              className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
            >
              مشاهدة المنتجات
            </a>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="grid grid-cols-3 text-center">

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">
              +100
            </h3>

            <p className="text-gray-400">
              عميل سعيد
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">
              24h
            </h3>

            <p className="text-gray-400">
              شحن سريع
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">
              100%
            </h3>

            <p className="text-gray-400">
              جودة مضمونة
            </p>
          </div>

        </div>

      </section>

      <section className="text-center pb-10">
        <h2 className="text-3xl font-bold text-yellow-500">
          أحدث المنتجات
        </h2>
      </section>

      <section
        id="products"
        className="max-w-6xl mx-auto px-6 pb-20"
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {watches.map((watch) => (
            <div
              key={watch.id}
              className="border border-gray-800 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl hover:border-yellow-500 hover:-translate-y-2 transition duration-300"
            >
              <img
                src={watch.image}
                alt={watch.name}
                onClick={() => {
                  setSelectedImage(watch.image);
                  setShowImage(true);
                }}
                className="w-full h-96 object-cover hover:scale-110 transition duration-500 cursor-zoom-in"
              />

              <div className="p-6 text-center">

                <h3 className="text-3xl font-bold">
                  {watch.name}
                </h3>

                <p className="text-yellow-500 mt-3 text-2xl font-bold">
                  {watch.price}
                </p>

                <a
                  href={`https://wa.me/201203226232?text=أريد طلب ${watch.name}`}
                  target="_blank"
                  className="inline-block mt-5 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
                >
                  اطلب الآن
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl text-center font-bold text-yellow-500 mb-10">
          لماذا Time Store؟
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-yellow-500 text-xl font-bold">
              منتجات أصلية
            </h3>

            <p className="text-gray-400 mt-2">
              أفضل الخامات وأعلى جودة
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-yellow-500 text-xl font-bold">
              شحن سريع
            </h3>

            <p className="text-gray-400 mt-2">
              توصيل لجميع المحافظات
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-yellow-500 text-xl font-bold">
              دعم مستمر
            </h3>

            <p className="text-gray-400 mt-2">
              الرد على جميع الاستفسارات
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl text-center font-bold text-yellow-500 mb-10">
          أشهر الماركات
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="border border-gray-800 rounded-xl p-6">
            Rolex
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            Cartier
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            Omega
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            Tissot
          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">

        <h2 className="text-4xl text-center font-bold text-yellow-500 mb-10">
          آراء العملاء
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-800 rounded-xl p-6">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              ساعة ممتازة والخامة رائعة جدًا.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              الشحن سريع والتغليف ممتاز.
            </p>
          </div>

        </div>

      </section>

      <section className="text-center pb-20">

        <a
          href="tel:01203226232"
          className="bg-white text-black px-8 py-4 rounded-xl font-bold"
        >
          📞 اتصل الآن
        </a>

      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">

        <p>© 2026 Time Store</p>

        <p className="mt-2">
          WhatsApp: 01203226232
        </p>

      </footer>

      <a
        href="https://wa.me/201203226232"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={35} />
      </a>

      {showImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
          onClick={() => setShowImage(false)}
        >
          <button
            className="absolute top-5 right-5 text-white text-5xl"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Watch"
            className="max-w-full max-h-[90vh] rounded-3xl"
          />
        </div>
      )}

    </main>
  );
}