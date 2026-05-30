export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-500">
        المنتج رقم {id}
      </h1>

      <img
        src="/Rolex.jpg"
        alt="watch"
        className="w-96 mt-8 rounded-xl"
      />

      <p className="mt-6 text-2xl">
        Rolex Watch
      </p>

      <p className="text-yellow-500 text-xl mt-2">
        450 EGP
      </p>
    </main>
  );
}