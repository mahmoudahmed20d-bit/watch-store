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
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 border-b border-gray-800 gap-4">
        <h1 className="text-3xl font-bold text-yellow-500">
          Time Store
        </h1>

        <div className="flex gap-4 md:gap-6 text-sm md:text-base">
          <a href="#">الرئيسية</a>
          <a href="#">المنتجات</a>
          <a href="#">تواصل معنا</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 leading-tight">
          أفخم الساعات الفاخرة
        </h2>

        <p className="mt-4 text-gray-400 text-lg">
          تشكيلة مميزة من الساعات الرجالي والنسائي
        </p>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="border border-gray-800 rounded-2xl overflow-hidden bg-zinc-950 hover:border-yellow-500 transition"
            >
              <a href={`/product/${watch.id}`}>
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </a>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {watch.name}
                </h3>

                <p className="text-yellow-500 mt-2 text-2xl">
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
    </main>
  );
}