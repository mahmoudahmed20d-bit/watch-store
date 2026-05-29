export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/Rolex.jpg"
          alt="Rolex"
          className="w-full max-h-[400px] object-contain rounded-xl"
        />

        <div>
          <h1 className="text-5xl font-bold">
            Rolex Classic
          </h1>

          <p className="text-yellow-500 text-3xl mt-4">
            450 EGP
          </p>

          <p className="text-gray-400 mt-4">
            ساعة رولكس صب مارينر بيضاء.
          </p> 

          <a
            href="https://wa.me/201279425370"
            className="inline-block mt-6 bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold"
          >
            اطلب عبر واتساب
          </a>
        </div>
      </div>
    </main>
  );
}