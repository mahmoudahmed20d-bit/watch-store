"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes, FaShippingFast, FaShieldAlt, FaHeadset, FaStar, FaClock } from "react-icons/fa";

// قائمة الساعات الأساسية مع إضافة خيارات الألوان المتعددة (Variants) لكل ساعة
const watches = [
  {
    id: 1,
    name: "Rolex Classic Edition",
    basePrice: 450,
    image: "/Rolex.jpg",
    category: "classic",
    colors: [
      { name: "فضي ملكي", hex: "#cccccc", priceModifier: 0, img: "/Rolex.jpg" },
      { name: "أسود فحم", hex: "#111111", priceModifier: 50, img: "/Rolex.jpg" }
    ],
    straps: [
      { name: "ستيل مقاوم للصدأ", type: "metal", priceModifier: 0 },
      { name: "جلد طبيعي فاخر", type: "leather", priceModifier: 30 }
    ]
  },
  {
    id: 2,
    name: "Rolex Gold Prestige",
    basePrice: 550,
    image: "/Rolex.jpg",
    category: "gold",
    colors: [
      { name: "ذهب عيار 24", hex: "#d4af37", priceModifier: 0, img: "/Rolex.jpg" },
      { name: "روز جولد", hex: "#b76e79", priceModifier: 40, img: "/Rolex.jpg" }
    ],
    straps: [
      { name: "ستيل ذهبي محفور", type: "metal", priceModifier: 0 },
      { name: "جلد تمساح أسود", type: "leather", priceModifier: 50 }
    ]
  },
  {
    id: 3,
    name: "Rolex Silver GMT",
    basePrice: 500,
    image: "/Rolex.jpg",
    category: "silver",
    colors: [
      { name: "بلاتينيوم مشع", hex: "#e5e4e2", priceModifier: 0, img: "/Rolex.jpg" }
    ],
    straps: [
      { name: "ستيل فضي هيدروليك", type: "metal", priceModifier: 0 }
    ]
  },
];

const reviews = [
  { id: 1, name: "أحمد م.", review: "جودة الساعة ممتازة والتوصيل كان سريع جداً في أقل من ٢٤ ساعة.", stars: 5 },
  { id: 2, name: "سارة خ.", review: "شكلها شيك جداً في الحقيقة وتغليف المنتج فخم ومناسب للهدايا.", stars: 5 },
  { id: 3, name: "محمد ع.", review: "تعامل راقي وسرعة في الرد على الواتساب، تجربة شراء ممتازة.", stars: 5 }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/Rolex.jpg");
  const [activeCategory, setActiveCategory] = useState("all");

  // حالات مخصص الساعات (Configurator State)
  const [selectedWatch, setSelectedWatch] = useState(watches[0]);
  const [selectedColor, setSelectedColor] = useState(watches[0].colors[0]);
  const [selectedStrap, setSelectedStrap] = useState(watches[0].straps[0]);

  // حالات نموذج الطلب السريع
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  // العداد التنازلي التفاعلي للعروض (Countdown Timer)
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // حساب السعر النهائي ديناميكياً بناءً على اختيارات التخصيص
  const currentTotalPrice = selectedWatch.basePrice + selectedColor.priceModifier + (selectedStrap?.priceModifier || 0);

  // فلترة الساعات في المعرض السفلي
  const filteredWatches = activeCategory === "all" 
    ? watches 
    : watches.filter(watch => watch.category === activeCategory);

  // دالة إرسال الطلب المنسق بالكامل عبر الواتساب
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) {
      alert("الرجاء ملء كافة الحقول لإتمام طلبك الفاخر.");
      return;
    }

    const message = `*طلب جديد من المتجر الفاخر 🛒*\n\n` +
                    `*👤 بيانات العميل:*\n` +
                    `- الاسم: ${customerName}\n` +
                    `- الهاتف: ${customerPhone}\n` +
                    `- العنوان: ${customerAddress}\n\n` +
                    `*⌚ تفاصيل الساعة المخصصة:*\n` +
                    `- الموديل: ${selectedWatch.name}\n` +
                    `- اللون المختار: ${selectedColor.name}\n` +
                    `- نوع السير: ${selectedStrap?.name || "افتراضي"}\n\n` +
                    `*💰 إجمالي الحساب:* ${currentTotalPrice} EGP (شامل الخصم)`;

    const whatsappUrl = `https://wa.me/201203226232?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden antialiased">
      
      {/* العداد التنازلي الحقيقي الذكي في شريط العروض العالي لزيادة المبيعات */}
      <div className="bg-[#d4af37] text-black text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
        <FaClock className="animate-pulse" />
        <span>ينتهي خصم الـ 20% والشحن المجاني خلال:</span>
        <span className="font-mono bg-black text-[#d4af37] px-2 py-0.5 rounded ml-1">
          {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>

      {/* الهيدر وقائمة التنقل الزجاجية الثابتة */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030303]/80 border-b border-zinc-900/60 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="cursor-pointer">
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-[#d4af37]">TIME STORE</h1>
            <p className="text-[10px] tracking-[0.3em] text-zinc-500 font-mono">LUXURY WATCHES</p>
          </div>

          <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase font-medium text-zinc-400">
            <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">الرئيسية</a>
            <a href="#configurator" className="hover:text-[#d4af37] transition-colors duration-300">صمم ساعتك</a>
            <a href="#products" className="hover:text-[#d4af37] transition-colors duration-300">المعرض</a>
            <a href="#reviews" className="hover:text-[#d4af37] transition-colors duration-300">آراء العملاء</a>
          </div>

          <button className="md:hidden text-xl text-zinc-400 hover:text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ميزة رقم 1 و 2 المدمجة: الـ Configurator المتطور مع الـ Order Form الفاخر */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-zinc-900/60 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(212,175,55,0.02)_0%,transparent_50%)] pointer-events-none" />
        
        {/* النصف الأيسر: شاشة عرض الساعة وتحديثها المباشر والتفاعلي */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="text-[10px] font-mono text-[#d4af37] tracking-[0.4em] uppercase block">// لوحة التخصيص الحية</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100">صمم هويتك الفريدة</h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto lg:mx-0 font-light">اختر موديل الساعة، ولون الميناء، ونوع السير المفضل لتحديث المظهر والسعر فوراً.</p>
          
          <div className="w-72 h-72 md:w-96 md:h-96 mx-auto relative group my-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10" />
            <img
              src={selectedColor.img}
              alt={selectedWatch.name}
              className="w-full h-full object-cover rounded-full shadow-[0_0_60px_rgba(0,0,0,0.85)] border border-zinc-900/80"
            />
          </div>
          
          <div className="bg-zinc-950 border border-zinc-900 p-6 inline-block rounded-none text-center min-w-[200px]">
            <span className="text-xs text-zinc-500 uppercase block mb-1">السعر التقريبي للمواصفات</span>
            <span className="text-2xl font-mono text-[#d4af37] font-semibold">{currentTotalPrice} EGP</span>
          </div>
        </div>

        {/* النصف الأيمن: لوحة التحكم المليئة بـ الأزرار التفاعلية ونموذج حجز وشحن الطلب */}
        <div className="bg-[#060606] border border-zinc-900 p-8 md:p-10 space-y-8 shadow-2xl">
          
          {/* الخطوة 1: اختيار الموديل */}
          <div className="space-y-3">
            <label className="text-xs uppercase text-zinc-400 tracking-wider block">1. اختر موديل الساعة الأساسي:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {watches.map((w) => (
                <button
                  key={w.id}
                  onClick={() => {
                    setSelectedWatch(w);
                    setSelectedColor(w.colors[0]);
                    setSelectedStrap(w.straps[0]);
                  }}
                  className={`p-3 text-xs font-medium border text-center transition-all ${
                    selectedWatch.id === w.id ? "border-[#d4af37] text-[#d4af37] bg-zinc-900" : "border-zinc-900 text-zinc-400 hover:border-zinc-800"
                  }`}
                >
                  {w.name}
                </button>
              ))}
            </div>
          </div>

          {/* الخطوة 2: اختيار لون الميناء/الإطار عن طريق كرات الألوان التفاعلية */}
          <div className="space-y-3">
            <label className="text-xs uppercase text-zinc-400 tracking-wider block">2. لون الميناء والإصدار ({selectedColor.name}):</label>
            <div className="flex gap-4">
              {selectedWatch.colors.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(c)}
                  style={{ backgroundColor: c.hex }}
                  className={`w-8 h-8 rounded-full border-2 transition-transform ${
                    selectedColor.name === c.name ? "border-[#d4af37] scale-110 shadow-lg" : "border-transparent hover:scale-105"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* الخطوة 3: اختيار نوع السير الفخم */}
          {selectedWatch.straps && selectedWatch.straps.length > 0 && (
            <div className="space-y-3">
              <label className="text-xs uppercase text-zinc-400 tracking-wider block">3. نوع السير وخامة المعصم:</label>
              <div className="flex gap-3">
                {selectedWatch.straps.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedStrap(s)}
                    className={`px-4 py-2 text-xs border transition-all ${
                      selectedStrap?.name === s.name ? "border-[#d4af37] text-[#d4af37] bg-zinc-900" : "border-zinc-900 text-zinc-400 hover:border-zinc-800"
                    }`}
                  >
                    {s.name} {s.priceModifier > 0 && `(+${s.priceModifier} EGP)`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* الخطوة 4: ملء بيانات الشحن السريع الفوري */}
          <form onSubmit={handlePlaceOrder} className="border-t border-zinc-900 pt-6 space-y-4">
            <label className="text-xs uppercase text-[#d4af37] tracking-widest block font-semibold">// استمارة الشحن الفوري السريع</label>
            
            <input
              type="text"
              placeholder="الاسم بالكامل"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#d4af37] transition font-sans"
            />
            
            <input
              type="tel"
              placeholder="رقم الهاتف (الواتساب)"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#d4af37] transition font-sans"
            />
            
            <input
              type="text"
              placeholder="عنوان الشحن بالتفصيل (المحافظة / المدينة)"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#d4af37] transition font-sans"
            />

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black py-4 text-xs tracking-widest font-bold uppercase hover:bg-[#b5922a] transition duration-300 shadow-xl"
            >
              تأكيد حجز الساعة وشحنها الآن
            </button>
          </form>

        </div>
      </section>

      {/* معرض الساعات العام والتقليدي المدمج بالتبويبات الذكية لتصفية المعروض */}
      <section id="products" className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="text-[10px] font-mono text-[#d4af37] tracking-[0.4em] uppercase block mb-2">// المعرض الشامل</span>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100">تصفح كافة الموديلات المتاحة</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-16 max-w-xl mx-auto">
          {[{ id: "all", label: "جميع القطع" }, { id: "classic", label: "كلاسيك" }, { id: "gold", label: "ذهبية" }, { id: "silver", label: "فضية" }].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-6 py-2 text-xs font-medium tracking-wide border transition-all ${
                activeCategory === tab.id ? "bg-[#d4af37] text-black border-[#d4af37]" : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 text-right">
          <AnimatePresence mode="popLayout">
            {filteredWatches.map((watch) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={watch.id}
                className="group border border-zinc-900 bg-[#060606] hover:border-zinc-700/80 shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="overflow-hidden aspect-[3/4] bg-zinc-950 relative">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    onClick={() => { setSelectedImage(watch.image); setShowImage(true); }}
                    className="w-full h-full object-cover group-hover:scale-103 transition duration-700 cursor-zoom-in"
                  />
                </div>
                <div className="p-8 text-center space-y-2">
                  <h3 className="text-lg font-serif text-zinc-200">{watch.name}</h3>
                  <p className="text-[#d4af37] font-mono text-sm">{watch.basePrice} EGP</p>
              <button
  onClick={() => {
    setSelectedWatch(watch);
    setSelectedColor(watch.colors[0]);
    setSelectedStrap(watch.straps[0]);

    document.getElementById("configurator")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="inline-block w-full mt-4 bg-zinc-950 text-zinc-400 border border-zinc-900 py-2.5 text-[11px] tracking-widest uppercase font-mono font-semibold hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all"
>
  تعديل وتخصيص الساعة
</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ركائز الهوية والأيقونات */}
      <section className="bg-[#050505] border-t border-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-[#d4af37] text-lg bg-zinc-950"><FaShieldAlt /></div>
            <h3 className="text-[#d4af37] text-lg font-serif">منتجات أصلية</h3>
            <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">أفضل الخامات وأعلى جودة مصنعية نضمنها لك في كل قطعة نختارها بعناية.</p>
          </div>
          <div className="space-y-4 flex flex-col items-center md:border-x md:border-zinc-900 md:px-6">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-[#d4af37] text-lg bg-zinc-950"><FaShippingFast /></div>
            <h3 className="text-[#d4af37] text-lg font-serif">شحن سريع</h3>
            <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">توصيل لكافة المحافظات بأمان وعناية لضمان وصول الساعة بأبهى صورة.</p>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-[#d4af37] text-lg bg-zinc-950"><FaHeadset /></div>
            <h3 className="text-[#d4af37] text-lg font-serif">دعم مستمر</h3>
            <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">دعم فني جاهز على مدار الساعة للرد على كافة الاستفسارات وضمان رضاكم التام.</p>
          </div>
        </div>
      </section>

      {/* قسم آراء ومراجعات الزوار والعملاء الفعليين */}
      <section id="reviews" className="border-t border-zinc-900 bg-[#030303] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16 space-y-2">
          <span className="text-[10px] font-mono text-[#d4af37] tracking-[0.4em] uppercase block">// ثقة عملائنا</span>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-zinc-200">ماذا يقولون عنا؟</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-right">
          {reviews.map((rev) => (
            <div key={rev.id} className="border border-zinc-900 bg-[#060606] p-8 space-y-4 flex flex-col justify-between">
              <div className="flex gap-1 text-[#d4af37]">
                {[...Array(rev.stars)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>
              <p className="text-zinc-400 text-sm font-light leading-relaxed italic">"{rev.review}"</p>
              <h4 className="text-zinc-300 text-xs tracking-wide font-medium border-t border-zinc-900/60 pt-4 font-mono">{rev.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* فوتر ختام الصفحة الفخم والمحكم */}
      <footer className="border-t border-zinc-900 bg-[#010101] py-12 text-center text-[11px] tracking-widest text-zinc-600 font-mono space-y-2">
        <p>© 2026 Time Store. All rights reserved.</p>
        <p className="text-zinc-700 text-xs">WhatsApp support: 01203226232</p>
      </footer>

      {/* زر الواتساب العائم بالتأثير المتموج الدائم */}
      <motion.a
        href="https://wa.me/201203226232"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-green-700 transition-colors"
      >
        <FaWhatsapp size={26} className="text-white" />
      </motion.a>

      {/* شاشة الـ Overlay المضيئة لتكبير لقطات الساعات */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 backdrop-blur-md transition-all duration-300"
          onClick={() => setShowImage(false)}
        >
          <button className="absolute top-6 right-6 text-zinc-500 hover:text-white text-4xl font-light z-50 transition-colors" onClick={() => setShowImage(false)}>×</button>
          <img src={selectedImage} alt="Expanded watch view" className="max-w-full max-h-[85vh] object-contain border border-zinc-900 shadow-2xl" />
        </div>
      )}

    </main>
  );
}