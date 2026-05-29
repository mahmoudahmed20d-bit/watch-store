export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <div>
          <a href="/Rolex.jpg" target="_blank">
            <img
              src="/Rolex.jpg"
              alt="Rolex"
              className="w-full rounded-3xl border border-gray-800 hover:scale-105 transition duration-300"
            />
          </a>
        </div>

        {/* Product Details */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            Rolex Classic
          </h1>

          <p className="text-3xl mt-6 font-bold">
            450 EGP
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            ساعة فاخرة بتصميم أنيق ومميز.
            خامات عالية الجودة ومناسبة للاستخدام اليومي
            والمناسبات الخاصة.
          </p>

          <div className="mt-8 space-y-3">

            <div>
              ✅ خامات ممتازة
            </div>

            <div>
              ✅ تصميم فاخر
            </div>

            <div>
              ✅ شحن لجميع المحافظات
            </div>

          </div>

          <a
            href="https://wa.me/201203226232"
            target="_blank"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
          >
            اطلب الآن عبر واتساب
          </a>

        </div>

      </div>

    </main>
  );
}