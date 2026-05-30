export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl text-yellow-500">
        المنتج رقم {id}
      </h1>

      <img
        src="/Rolex.jpg"
        alt="Rolex"
        className="w-96 mt-8 rounded-xl"
      />

      <h2 className="text-3xl mt-6">
        Rolex Watch
      </h2>

      <p className="text-yellow-500 text-2xl mt-2">
        450 EGP
      </p>

    </main>
  );
}