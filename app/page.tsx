"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaClock,
} from "react-icons/fa";
const watches = [
  {
    id: 1,
    name: "Rolex Classic Edition",
    basePrice: 450,
    image: "/Rolex.jpg",
    category: "classic",
    colors: [
      {
        name: "فضي ملكي",
        hex: "#cccccc",
        priceModifier: 0,
        img: "/Rolex.jpg",
      },
      {
        name: "أسود فحم",
        hex: "#111111",
        priceModifier: 50,
        img: "/Rolex.jpg",
      },
    ],
    straps: [
      {
        name: "ستيل مقاوم للصدأ",
        type: "metal",
        priceModifier: 0,
      },
      {
        name: "جلد طبيعي فاخر",
        type: "leather",
        priceModifier: 30,
      },
    ],
  },

  {
    id: 2,
    name: "Rolex Gold Prestige",
    basePrice: 550,
    image: "/Rolex gold.jpg",
    category: "gold",
    colors: [
      {
        name: "ذهب عيار 24",
        hex: "#d4af37",
        priceModifier: 0,
        img: "/Rolex gold.jpg",
      },
      {
        name: "روز جولد",
        hex: "#b76e79",
        priceModifier: 40,
        img: "/Rolex gold.jpg",
      },
    ],
    straps: [
      {
        name: "ستيل ذهبي محفور",
        type: "metal",
        priceModifier: 0,
      },
      {
        name: "جلد تمساح أسود",
        type: "leather",
        priceModifier: 50,
      },
    ],
  },

  {
    id: 3,
    name: "Rolex Silver GMT",
    basePrice: 500,
    image: "/GMT.jpg",
    category: "silver",
    colors: [
      {
        name: "بلاتينيوم مشع",
        hex: "#e5e4e2",
        priceModifier: 0,
        img: "/GMT.jpg",
      },
    ],
    straps: [
      {
        name: "ستيل فضي هيدروليك",
        type: "metal",
        priceModifier: 0,
      },
    ],
  },
];
const reviews = [
  {
    id: 1,
    name: "أحمد م.",
    review:
      "جودة الساعة ممتازة والتوصيل كان سريع جداً في أقل من ٢٤ ساعة.",
    stars: 5,
  },

  {
    id: 2,
    name: "سارة خ.",
    review:
      "شكلها شيك جداً في الحقيقة وتغليف المنتج فخم ومناسب للهدايا.",
    stars: 5,
  },

  {
    id: 3,
    name: "محمد ع.",
    review:
      "تعامل راقي وسرعة في الرد على الواتساب، تجربة شراء ممتازة.",
    stars: 5,
  },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showImage, setShowImage] = useState(false);

  const [selectedImage, setSelectedImage] =
    useState("/Rolex.jpg");

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [selectedWatch, setSelectedWatch] =
    useState(watches[0]);

  const [selectedColor, setSelectedColor] =
    useState(watches[0].colors[0]);

  const [selectedStrap, setSelectedStrap] =
    useState(watches[0].straps[0]);

  const [customerName, setCustomerName] =
    useState("");

  const [customerPhone, setCustomerPhone] =
    useState("");

  const [customerAddress, setCustomerAddress] =
    useState("");

  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 45,
    seconds: 12,
  });
    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {

        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1,
          };
        }

        if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        }

        if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }

        clearInterval(timer);

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
    const currentTotalPrice =
    selectedWatch.basePrice +
    selectedColor.priceModifier +
    (selectedStrap?.priceModifier || 0);

  const filteredWatches =
    activeCategory === "all"
      ? watches
      : watches.filter(
          (watch) =>
            watch.category === activeCategory
        );
          const handlePlaceOrder = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !customerName ||
      !customerPhone ||
      !customerAddress
    ) {
      alert(
        "الرجاء ملء كافة الحقول لإتمام الطلب"
      );
      return;
    }

    const message =
      `طلب جديد 🛒\n\n` +
      `الاسم: ${customerName}\n` +
      `الهاتف: ${customerPhone}\n` +
      `العنوان: ${customerAddress}\n\n` +
      `الساعة: ${selectedWatch.name}\n` +
      `اللون: ${selectedColor.name}\n` +
      `السير: ${selectedStrap?.name}\n\n` +
      `السعر: ${currentTotalPrice} EGP`;

    const whatsappUrl =
      `https://wa.me/201203226232?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank"
    );
  };
    return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden">

      {/* شريط العروض */}

      <div className="bg-[#d4af37] text-black text-center py-2 px-4 text-xs md:text-sm font-semibold flex items-center justify-center gap-2">

        <FaClock />

        <span>
          ينتهي الخصم خلال:
        </span>

        <span className="bg-black text-[#d4af37] px-2 py-1 rounded">

          {String(timeLeft.hours).padStart(2, "0")}
          :

          {String(timeLeft.minutes).padStart(2, "0")}
          :

          {String(timeLeft.seconds).padStart(2, "0")}

        </span>

      </div>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030303]/80 border-b border-zinc-900 px-6 py-5">

  <div className="max-w-7xl mx-auto flex justify-between items-center">

    <div>
 <div className="flex items-center gap-4">

  <img
    src="/logo.png"
    alt="MD STORE"
    className="h-24 md:h-28 w-auto"
  />

  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37]">
      MD STORE
    </h1>

    <p className="text-xs tracking-[0.4em] text-zinc-500 mt-1">
      LUXURY WATCHES
    </p>
  </div>

</div>

      <p className="text-[10px] tracking-[0.3em] text-zinc-500">
        LUXURY WATCHES
      </p>
    </div>

    <div className="hidden md:flex gap-10 text-xs text-zinc-400">

      <a
        href="#"
        className="hover:text-[#d4af37]"
      >
        الرئيسية
      </a>

      <a
        href="#configurator"
        className="hover:text-[#d4af37]"
      >
        صمم ساعتك
      </a>

      <a
        href="#products"
        className="hover:text-[#d4af37]"
      >
        المنتجات
      </a>

      <a
        href="#reviews"
        className="hover:text-[#d4af37]"
      >
        آراء العملاء
      </a>

    </div>

    <button
      className="md:hidden text-xl"
      onClick={() =>
        setMenuOpen(!menuOpen)
      }
    >
      {menuOpen ? (
        <FaTimes />
      ) : (
        <FaBars />
      )}
    </button>

  </div>

</nav>
{menuOpen && (

  <div className="md:hidden bg-[#050505] border-b border-zinc-900">

    <div className="flex flex-col p-6 gap-4 text-center">

      <a
        href="#"
        onClick={() =>
          setMenuOpen(false)
        }
        className="text-zinc-300 hover:text-[#d4af37]"
      >
        الرئيسية
      </a>

      <a
        href="#configurator"
        onClick={() =>
          setMenuOpen(false)
        }
        className="text-zinc-300 hover:text-[#d4af37]"
      >
        صمم ساعتك
      </a>

      <a
        href="#products"
        onClick={() =>
          setMenuOpen(false)
        }
        className="text-zinc-300 hover:text-[#d4af37]"
      >
        المنتجات
      </a>

      <a
        href="#reviews"
        onClick={() =>
          setMenuOpen(false)
        }
        className="text-zinc-300 hover:text-[#d4af37]"
      >
        آراء العملاء
      </a>

    </div>

  </div>

)}
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030303] to-black" />

  <div className="relative z-10 max-w-6xl mx-auto text-center px-6">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-8xl font-serif"
    >
      أفخم
      <span className="text-[#d4af37]">
        {" "}
        الساعات
      </span>
    </motion.h2>

    <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
      تشكيلة مميزة من الساعات
      الرجالي والنسائي بأفضل
      الأسعار.
    </p>

    <a
      href="#products"
      className="inline-block mt-10 bg-[#d4af37] text-black px-10 py-4 font-bold"
    >
      تسوق الآن
    </a>

  </div>

</section>
<section
  id="configurator"
  className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center"
>

  <div className="text-center">

    <img
      src={selectedColor.img}
      alt={selectedWatch.name}
      className="w-80 h-80 md:w-96 md:h-96 mx-auto object-cover rounded-full border border-zinc-900"
    />

    <div className="mt-8 border border-zinc-900 p-6 inline-block">

      <p className="text-zinc-500 text-sm">
        السعر النهائي
      </p>

      <h3 className="text-3xl text-[#d4af37] font-bold">
        {currentTotalPrice} EGP
      </h3>

    </div>

  </div>

  <div className="space-y-8">

    <div>

      <label className="block mb-4 text-zinc-400">
        اختر الساعة
      </label>

      <div className="grid gap-3">

        {watches.map((w) => (

          <button
            key={w.id}
            onClick={() => {
              setSelectedWatch(w);
              setSelectedColor(w.colors[0]);
              setSelectedStrap(w.straps[0]);
            }}
            className={`p-4 border transition ${
              selectedWatch.id === w.id
                ? "border-[#d4af37] text-[#d4af37]"
                : "border-zinc-900 text-zinc-400"
            }`}
          >
            {w.name}
          </button>

        ))}

      </div>

    </div>

    <div>

      <label className="block mb-4 text-zinc-400">
        اللون
      </label>

      <div className="flex gap-4">

        {selectedWatch.colors.map((color, index) => (

          <button
            key={index}
            onClick={() => setSelectedColor(color)}
            style={{
              backgroundColor: color.hex,
            }}
            className="w-10 h-10 rounded-full border-2 border-white"
          />

        ))}

      </div>

    </div>

    <div>

      <label className="block mb-4 text-zinc-400">
        نوع السير
      </label>

      <div className="flex flex-wrap gap-3">

        {selectedWatch.straps.map((strap, index) => (

          <button
            key={index}
            onClick={() =>
              setSelectedStrap(strap)
            }
            className="border border-zinc-900 px-4 py-2"
          >
            {strap.name}
          </button>

        ))}

      </div>

    </div>

  </div>

</section>
<section className="max-w-4xl mx-auto px-6 pb-24">

  <form
    onSubmit={handlePlaceOrder}
    className="border border-zinc-900 p-8 space-y-4"
  >

    <h2 className="text-3xl text-center text-[#d4af37]">
      اطلب الآن
    </h2>

    <input
      type="text"
      placeholder="الاسم"
      value={customerName}
      onChange={(e) =>
        setCustomerName(e.target.value)
      }
      className="w-full bg-zinc-950 border border-zinc-900 p-4"
    />

    <input
      type="tel"
      placeholder="رقم الهاتف"
      value={customerPhone}
      onChange={(e) =>
        setCustomerPhone(e.target.value)
      }
      className="w-full bg-zinc-950 border border-zinc-900 p-4"
    />

    <input
      type="text"
      placeholder="العنوان"
      value={customerAddress}
      onChange={(e) =>
        setCustomerAddress(e.target.value)
      }
      className="w-full bg-zinc-950 border border-zinc-900 p-4"
    />

    <button
      type="submit"
      className="w-full bg-[#d4af37] text-black py-4 font-bold"
    >
      تأكيد الطلب
    </button>

  </form>

</section>
<section
  id="products"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <h2 className="text-center text-5xl font-serif mb-12">
    المنتجات
  </h2>

  <div className="flex flex-wrap justify-center gap-3 mb-12">

    {[
      {
        id: "all",
        label: "الكل",
      },
      {
        id: "classic",
        label: "كلاسيك",
      },
      {
        id: "gold",
        label: "ذهبي",
      },
      {
        id: "silver",
        label: "فضي",
      },
    ].map((tab) => (

      <button
        key={tab.id}
        onClick={() =>
          setActiveCategory(tab.id)
        }
        className="border border-zinc-900 px-6 py-2"
      >
        {tab.label}
      </button>

    ))}

  </div>

  <div className="grid md:grid-cols-3 gap-8">
        {filteredWatches.map((watch) => (

      <div
        key={watch.id}
        className="border border-zinc-900 bg-[#060606] overflow-hidden hover:border-[#d4af37] transition"
      >

        <div className="overflow-hidden">

          <img
            src={watch.image}
            alt={watch.name}
            onClick={() => {
              setSelectedImage(
                watch.image
              );
              setShowImage(true);
            }}
            className="w-full h-[420px] object-cover cursor-pointer hover:scale-105 transition duration-700"
          />

        </div>

        <div className="p-6 text-center">

          <h3 className="text-2xl font-serif">
            {watch.name}
          </h3>

          <p className="text-[#d4af37] mt-3">
            {watch.basePrice} EGP
          </p>

        <a
  href={`/product/${watch.id}`}
  className="w-full mt-5 bg-[#d4af37] text-black py-3 font-bold block text-center"
>
  عرض المنتج
</a>

        </div>

      </div>

    ))}

  </div>

</section>
  
<section
  id="reviews"
  className="py-24 px-6 border-t border-zinc-900"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-center text-5xl font-serif mb-16">
      آراء العملاء
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {reviews.map((review) => (

        <div
          key={review.id}
          className="border border-zinc-900 p-8"
        >

          <div className="flex gap-1 text-[#d4af37] mb-4">

            {[...Array(
              review.stars
            )].map((_, i) => (
              <FaStar
                key={i}
              />
            ))}

          </div>

          <p className="text-zinc-400 leading-8">

            {review.review}

          </p>

          <h4 className="mt-6 font-bold">

            {review.name}

          </h4>

        </div>

      ))}

    </div>

  </div>

</section>
<section className="py-24 border-t border-zinc-900">

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

    <div className="text-center">

      <FaShieldAlt
        className="mx-auto text-[#d4af37]"
        size={40}
      />

      <h3 className="mt-4 text-xl">
        منتجات أصلية
      </h3>

    </div>

    <div className="text-center">

      <FaShippingFast
        className="mx-auto text-[#d4af37]"
        size={40}
      />

      <h3 className="mt-4 text-xl">
        شحن سريع
      </h3>

    </div>

    <div className="text-center">

      <FaHeadset
        className="mx-auto text-[#d4af37]"
        size={40}
      />

      <h3 className="mt-4 text-xl">
        دعم مستمر
      </h3>

    </div>

  </div>

</section>
<footer className="border-t border-zinc-900 py-10 text-center text-zinc-500">

  <p>
    © 2026 MD STORE. جميع الحقوق محفوظة.
  </p>

  <p className="mt-2">
    WhatsApp:
    01203226232
  </p>

</footer>
<motion.a
  href="https://wa.me/201203226232"
  target="_blank"
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="fixed bottom-6 right-6 bg-green-600 w-16 h-16 rounded-full flex items-center justify-center z-50 shadow-2xl"
>

  <FaWhatsapp
    size={30}
    className="text-white"
  />

</motion.a>
{showImage && (

  <div
    className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]"
    onClick={() =>
      setShowImage(false)
    }
  >

    <img
      src={selectedImage}
      alt=""
      className="max-w-[90%] max-h-[90vh]"
    />

  </div>

)}
    </main>
  );
}