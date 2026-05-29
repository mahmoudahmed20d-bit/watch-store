export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-500">
        المنتج رقم {params.id}
      </h1>

      <img
        src="/Rolex.jpg"
        alt="Rolex"
        className="w-96 mt-10 rounded-xl"
      />

      <h2 className="text-3xl mt-6">
        Rolex Watch
      </h2>

      <p className="text-yellow-500 text-2xl mt-2">
        450 EGP
      </p>

      <p className="mt-6 text-gray-400">
        ساعة فاخرة بجودة عالية وخامات ممتازة.
      </p>

      <a
        href="https://wa.me/201203226232"
        className="inline-block mt-8 bg-green-600 px-8 py-4 rounded-lg"
      >
        اطلب الآن
      </a>
    </main>
  );
}