import { FaWhatsapp } from "react-icons/fa";

const watches = [
  {
    id: 1,
    name: "Rolex Classic",
    price: "450 EGP",
    image: "/Rolex.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Top Bar */}
      <div className="bg-yellow-500 text-black text-center py-2 font-bold">
        🚚 شحن سريع لجميع المحافظات | خصومات لفترة محدودة
      </div>

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-5 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-yellow-500">
          Time Store
        </h1>

        <div className="flex gap-4 md:gap-6 mt-4 md:mt-0 text-sm md:text-lg">
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
      </nav>

      {/* Hero Banner */}
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

      {/* Stats */}
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

      {/* Products Title */}
      <section className="text-center pb-10">
        <h2 className="text-3xl font-bold text-yellow-500">
          أحدث المنتجات
        </h2>
      </section>

      {/* Products */}
      <section
        id="products"
        className="max-w-6xl mx-auto px-6 pb-20"
      >
        <div className="grid grid-cols-1 gap-8">

          {watches.map((watch) => (
            <div
              key={watch.id}
              className="max-w-md mx-auto border border-gray-800 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl hover:border-yellow-500 hover:-translate-y-2 transition duration-300"
            >
              <a href={`/product/${watch.id}`}>
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-96 object-cover hover:scale-105 transition duration-300"
                />
              </a>

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

      {/* Why Us */}
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

      {/* Brands */}
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

      {/* Reviews */}
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

      {/* Call */}
      <section className="text-center pb-20">
        <a
          href="tel:01203226232"
          className="bg-white text-black px-8 py-4 rounded-xl font-bold"
        >
          📞 اتصل الآن
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <p>© 2026 Time Store</p>

        <p className="mt-2">
          WhatsApp: 01203226232
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/201203226232"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={35} />
      </a>

    </main>
  );
}