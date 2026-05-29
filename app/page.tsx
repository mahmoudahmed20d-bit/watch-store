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
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-yellow-500">
          Time Store
        </h1>

        <div className="flex gap-6">
          <a href="#">الرئيسية</a>
          <a href="#">المنتجات</a>
          <a href="#">تواصل معنا</a>
        </div>
      </nav>

      <section className="max-w-md mx-auto px-10 pb-20">
        <h2 className="text-6xl font-bold text-yellow-500">
          أفخم الساعات الفاخرة
        </h2>

        <p className="mt-4 text-gray-400">
          تشكيلة مميزة من الساعات الرجالي والنسائي
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="border border-gray-800 rounded-xl p-6 text-center"
          >
          <a href={`/product/${watch.id}`}>
  <img
    src={watch.image}
    alt={watch.name}
    className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-80 cursor-pointer"
  />
</a>

            <h3 className="text-2xl font-bold">
              {watch.name}
            </h3>

            <p className="text-yellow-500 mt-2 text-xl">
              {watch.price}
            </p>

           <a
  href={`https://wa.me/201203226232?text=أريد طلب ${watch.name} بسعر ${watch.price}`}
  target="_blank"
  className="inline-block mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold"
>
  اطلب الآن
</a>
          </div>
        ))}
      </section>
    </main>
  );
}