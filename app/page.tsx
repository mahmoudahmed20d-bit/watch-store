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

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-5 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-yellow-500">
          Time Store
        </h1>

        <div className="flex gap-6 mt-4 md:mt-0 text-lg">
          <a href="#">الرئيسية</a>
          <a href="#">المنتجات</a>
          <a href="#">تواصل معنا</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-5xl md:text-7xl font-bold text-yellow-500 leading-tight">
          أفخم الساعات الفاخرة
        </h2>

        <p className="mt-4 text-gray-400 text-lg">
          تشكيلة مميزة من الساعات الرجالي والنسائي
        </p>

        <a
          href="https://wa.me/201203226232"
          target="_blank"
          className="inline-block mt-6 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
        >
          اطلب عبر واتساب
        </a>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="max-w-md mx-auto border border-gray-800 rounded-3xl overflow-hidden bg-zinc-950 shadow-lg hover:border-yellow-500 transition"
            >
              <a href={`/product/${watch.id}`}>
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-300"
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
                  href={`https://wa.me/201203226232?text=أريد طلب ${watch.name} بسعر ${watch.price}`}
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

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">

        <div className="border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-yellow-500 text-2xl font-bold">
            منتجات أصلية
          </h3>

          <p className="text-gray-400 mt-3">
            جودة عالية وضمان على جميع المنتجات
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-yellow-500 text-2xl font-bold">
            شحن سريع
          </h3>

          <p className="text-gray-400 mt-3">
            توصيل لجميع المحافظات
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-yellow-500 text-2xl font-bold">
            دعم 24/7
          </h3>

          <p className="text-gray-400 mt-3">
            متاحين للرد على جميع الاستفسارات
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Time Store - جميع الحقوق محفوظة
      </footer>

    </main>
  );
}