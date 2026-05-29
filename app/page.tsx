"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes, FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

// قائمة المنتجات مع دمج الفئات (Category) لتفعيل الفلترة الذكية الاحترافية
const watches = [
  {
    id: 1,
    name: "Rolex Classic",
    price: "450 EGP",
    image: "/Rolex.jpg",
    category: "classic"
  },
  {
    id: 2,
    name: "Rolex Gold",
    price: "550 EGP",
    image: "/Rolex.jpg",
    category: "gold"
  },
  {
    id: 3,
    name: "Rolex Silver",
    price: "500 EGP",
    image: "/Rolex.jpg",
    category: "silver"
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/Rolex.jpg");
  const [activeCategory, setActiveCategory] = useState("all");

  // تصفية المنتجات ديناميكياً بحسب الفئة النشطة
  const filteredWatches = activeCategory === "all" 
    ? watches 
    : watches.filter(watch => watch.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden antialiased">
      
      {/* شريط العروض العلوي الفاخر */}
      <div className="bg-[#d4af37] text-black text-center py-2.5 text-xs md:text-sm font-semibold tracking-wider uppercase">
        🚚 شحن سريع لجميع المحافظات | خصم 20% لفترة محدودة
      </div>

      {/* الهيدر وقائمة التنقل الثابتة والذكية مع تأثير زجاجي شفاف */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030303]/80 border-b border-zinc-900/60 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="cursor-pointer group">
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-[#d4af37] group-hover:opacity-90 transition">
              TIME STORE
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-zinc-500 font-mono">
              LUXURY WATCHES
            </p>
          </div>

          <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase font-medium text-zinc-400">
            <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">
              الرئيسية
            </a>
            <a href="#products" className="hover:text-[#d4af37] transition-colors duration-300">
              المنتجات
            </a>
            <a 
              href="https://wa.me/201203226232" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#d4af37] transition-colors duration-300"
            >
              تواصل معنا
            </a>
          </div>

          <button
            className="md:hidden text-xl text-zinc-400 hover:text-white transition p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* قائمة الموبايل المتجاوبة والانسيابية */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-5 mt-4 text-center md:hidden pb-4 text-zinc-400 border-t border-zinc-900 pt-4 font-medium"
            >
              <a href="#" className="hover:text-[#d4af37] py-2 text-sm" onClick={() => setMenuOpen(false)}>الرئيسية</a>
              <a href="#products" className="hover:text-[#d4af37] py-2 text-sm" onClick={() => setMenuOpen(false)}>المنتجات</a>
              <a href="https://wa.me/201203226232" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] py-2 text-sm" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* الـ Hero Section الفاخر المقتبس هندسياً وبصرياً من الصورة */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-zinc-900/40">
        
        {/* العناصر الخلفية العميقة والضبابية التي تصنع الـ Shadowy Tones */}
        <div className="absolute left-[5%] top-[35%] w-56 h-56 opacity-10 hidden xl:block pointer-events-none filter grayscale contrast-125">
          <img src="/Rolex.jpg" alt="Decorative Track Background" className="w-full h-full object-cover rounded-md rotate-12" />
        </div>
        <div className="absolute right-[5%] top-[20%] w-56 h-56 opacity-10 hidden xl:block pointer-events-none filter grayscale contrast-125">
          <img src="/Rolex.jpg" alt="Decorative Track Background" className="w-full h-full object-cover rounded-md -rotate-12" />
        </div>

        <div className="max-w-4xl mx-auto z-10 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.3em] mb-2"
          >
            Time Store Premium Collection
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-medium tracking-tight text-zinc-100 leading-none"
          >
            LUXURY WATCH <br />
            <span className="font-serif italic font-light text-[#d4af37] tracking-normal lowercase block mt-2">theme</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            أفخم الساعات الفاخرة بأفضل الأسعار. <br />
            <span className="text-zinc-500 font-serif italic text-sm md:text-base block mt-2">A bold design with shadowy tones and cutting-edge features.</span>
          </motion.p>

          {/* البؤرة البصرية الوسطى - الساعة المستقرة فوق التكوين الصخري المظلم كالصورة المرجعية */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-60 h-60 md:w-80 md:h-80 mx-auto my-10 relative group cursor-zoom-in"
            onClick={() => {
              setSelectedImage("/Rolex.jpg");
              setShowImage(true);
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="/Rolex.jpg"
              alt="Featured Center Rolex"
              className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-zinc-900 group-hover:scale-102 transition-transform duration-700"
            />
          </motion.div>

          {/* أزرار اتخاذ الإجراءات بتوزيع هندسي حاد ومستقيم وراقٍ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 max-w-sm mx-auto sm:max-w-none"
          >
            <a
              href="https://wa.me/201203226232"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#d4af37] text-black px-12 py-4 text-xs tracking-widest uppercase font-bold hover:bg-[#b5922a] transition-all duration-300 rounded-none shadow-lg"
            >
              اطلب الآن
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto border border-zinc-800 text-zinc-300 px-12 py-4 text-xs tracking-widest uppercase font-medium hover:bg-zinc-100 hover:text-black hover:border-white transition-all duration-300 rounded-none"
            >
              المنتجات
            </a>
          </motion.div>
        </div>

        {/* النصوص والنوافذ التعريفية الهامشية على الأركان كما بالصورة */}
        <div className="absolute bottom-6 left-8 text-left hidden md:block text-[10px] tracking-[0.2em] text-zinc-600 font-mono">
          EXPERIENCE <br />
          <span className="text-zinc-400 font-serif italic tracking-normal capitalize text-xs">from an Envato Elite Author</span>
        </div>
        <div className="absolute bottom-6 right-8 text-right hidden md:block text-[10px] tracking-[0.2em] text-zinc-600 font-mono">
          IDEAL FOR <br />
          <span className="text-zinc-400 font-sans tracking-tight text-xs capitalize">watch stores, luxury retailers, and timepiece brands</span>
        </div>
      </section>

      {/* قسم أرقام وإحصائيات المتجر بهيكل شبكي رفيع ومكتوم */}
      <section className="border-b border-zinc-900/60 bg-[#050505]/40 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-2 text-center">
          <div>
            <h3 className="text-3xl md:text-5xl font-serif font-light text-[#d4af37]">+100</h3>
            <p className="text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase mt-2 font-mono">عميل سعيد</p>
          </div>
          <div className="border-x border-zinc-900/80">
            <h3 className="text-3xl md:text-5xl font-serif font-light text-[#d4af37]">24h</h3>
            <p className="text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase mt-2 font-mono">شحن سريع</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-serif font-light text-[#d4af37]">100%</h3>
            <p className="text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase mt-2 font-mono">جودة مضمونة</p>
          </div>
        </div>
      </section>

      {/* مقدمة عرض شبكة المنتجات الحصرية */}
      <section id="products" className="text-center pt-28 pb-10">
        <span className="text-[10px] font-mono text-[#d4af37] tracking-[0.4em] uppercase block mb-3">// التشكيلة الفاخرة</span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-zinc-100">
          التشكيلة الفنية المتاحة
        </h2>
      </section>

      {/* أزرار التصفية التفاعلية (Filter Tabs) المتاحة في المواقع الاحترافية الكبرى */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-xl mx-auto px-6">
        {[
          { id: "all", label: "جميع القطع" },
          { id: "classic", label: "كلاسيك" },
          { id: "gold", label: "إصدارات ذهبية" },
          { id: "silver", label: "إصدارات فضية" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-6 py-2.5 text-xs font-medium tracking-wide border transition-all duration-300 rounded-none ${
              activeCategory === tab.id
                ? "bg-[#d4af37] text-black border-[#d4af37]"
                : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* كروت المنتجات - أسلوب إطارات حاد، داكن وعميق مع تأثيرات الطفو (Floating/Hover) */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredWatches.map((watch) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={watch.id}
                className="group border border-zinc-900 bg-[#060606] hover:border-zinc-700/80 shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="overflow-hidden relative aspect-[3/4] bg-zinc-950">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    onClick={() => {
                      setSelectedImage(watch.image);
                      setShowImage(true);
                    }}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                <div className="p-8 text-center space-y-3">
                  <h3 className="text-xl font-serif tracking-wide text-zinc-200 group-hover:text-[#d4af37] transition-colors">
                    {watch.name}
                  </h3>
                  <p className="text-[#d4af37] font-mono text-base font-light tracking-wider">
                    {watch.price}
                  </p>
                  <a
                    href={`https://wa.me/201203226232?text=أريد طلب ${encodeURIComponent(watch.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full mt-4 bg-transparent text-zinc-400 border border-zinc-800 py-3 text-[11px] tracking-widest uppercase font-mono font-semibold hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300"
                  >
                    اطلب الآن
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* قسم ركائز الهوية والثقة للمتجر مع دمج الأيقونات الاحترافية اللطيفة */}
      <section className="bg-[#050505] border-t border-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-light text-zinc-200">لماذا Time Store؟</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-[#d4af37] text-lg bg-zinc-950 shadow-inner">
              <FaShieldAlt />
            </div>
            <h3 className="text-[#d4af37] text-lg font-serif font-normal tracking-wide">منتجات أصلية</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
              أفضل الخامات وأعلى جودة مصنعية نضمنها لك في كل قطعة نختارها بعناية.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:border-x md:border-zinc-900 md:px-6">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-[#d4af37] text-lg bg-zinc-950 shadow-inner">
              <FaShippingFast />
            </div>
            <h3 className="text-[#d4af37] text-lg font-serif font-normal tracking-wide">شحن سريع</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
              توصيل لكافة المحافظات بأمان وعناية لضمان وصول الساعة بأبهى صورة.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-[#d4af37] text-lg bg-zinc-950 shadow-inner">
              <FaHeadset />
            </div>
            <h3 className="text-[#d4af37] text-lg font-serif font-normal tracking-wide">دعم مستمر</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
              دعم فني جاهز على مدار الساعة للرد على كافة الاستفسارات وضمان رضاكم التام.
            </p>
          </div>

        </div>
      </section>

      {/* قسم الـ CTA النهائي والمحفز على الشراء الفوري */}
      <section className="text-center py-36 px-6 bg-gradient-to-b from-[#030303] to-[#000000]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100 leading-snug">
            جاهز لطلب ساعتك؟
          </h2>
          <p className="text-zinc-500 font-light text-sm md:text-base max-w-lg mx-auto">
            تواصل معنا الآن واحصل على أفضل العروض. استمتع بتجربة اقتناء ساعة فريدة تبرز معالم شخصيتك.
          </p>
          <div className="pt-6">
            <a
              href="https://wa.me/201203226232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 px-12 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white hover:bg-green-700 transition-colors duration-300"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* فوتر النهاية المنظم بدقة متناهية */}
      <footer className="border-t border-zinc-900 bg-[#010101] py-12 text-center text-[11px] tracking-widest text-zinc-600 font-mono space-y-2">
        <p>© 2026 Time Store. All rights reserved.</p>
        <p className="text-zinc-700 text-xs">WhatsApp: 01203226232</p>
      </footer>

      {/* زر الواتساب العائم بالتأثير الانسيابي الهادئ */}
      <motion.a
        href="https://wa.me/201203226232"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        className="fixed bottom-6 right-6 bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-50 hover:bg-green-700 transition-colors duration-300"
      >
        <FaWhatsapp size={26} className="text-white" />
      </motion.a>

      {/* الـ Overlay الفاخر الخاص بالتكبير الفوري المريح للعين */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 backdrop-blur-md transition-all duration-300"
          onClick={() => setShowImage(false)}
        >
          <button
            className="absolute top-6 right-6 text-zinc-500 hover:text-white text-4xl font-light z-50 transition-colors"
            onClick={() => setShowImage(false)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Expanded Watch Premium View"
            className="max-w-full max-h-[85vh] object-contain border border-zinc-900 shadow-2xl"
          />
        </div>
      )}

    </main>
  );
}