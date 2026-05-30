const products = [
  {
    id: "1",
    name: "Rolex Classic Edition",
    price: 450,
    image: "/Rolex.jpg",
    description:
      "ساعة رولكس كلاسيك فاخرة بتصميم أنيق وخامات عالية الجودة.",
  },
  {
    id: "2",
    name: "Rolex Gold Prestige",
    price: 550,
    image: "/Rolex gold.jpg",
    description:
      "إصدار ذهبي فاخر لمحبي الأناقة والفخامة.",
  },
  {
    id: "3",
    name: "Rolex Silver GMT",
    price: 500,
    image: "/GMT.jpg",
    description:
      "ساعة فضية عصرية مناسبة للاستخدام اليومي.",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">
          المنتج غير موجود
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <a
          href="/"
          className="text-[#d4af37]"
        >
          ← العودة للمتجر
        </a>

        <div className="grid lg:grid-cols-2 gap-16 mt-10">

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl border border-zinc-800"
            />
          </div>

          <div>

            <h1 className="text-5xl font-serif">
              {product.name}
            </h1>

            <p className="text-[#d4af37] text-4xl mt-6 font-bold">
              {product.price} EGP
            </p>

            <p className="text-zinc-400 mt-8 leading-8">
              {product.description}
            </p>

            <div className="mt-10 flex gap-4">

              <button className="bg-[#d4af37] text-black px-8 py-4 font-bold rounded-lg">
                أضف للسلة
              </button>

              <a
                href={`https://wa.me/201203226232?text=أريد شراء ${product.name}`}
                target="_blank"
                className="border border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-lg"
              >
                شراء الآن
              </a>

            </div>

            <div className="mt-12 border-t border-zinc-800 pt-8">

              <h3 className="text-2xl mb-4">
                المواصفات
              </h3>

              <ul className="space-y-3 text-zinc-400">

                <li>✔ خامات عالية الجودة</li>
                <li>✔ مقاومة للماء</li>
                <li>✔ ضمان على المنتج</li>
                <li>✔ شحن سريع لجميع المحافظات</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}