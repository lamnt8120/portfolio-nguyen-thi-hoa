import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS (SVG) ---
const Icons = {
  LinkedIn: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  Facebook: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z"/></svg>,
  ArrowUpRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>,
  Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
  Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
};

// --- DATA ---
const dict = {
  vi: {
    nav: { about: "Giới thiệu", services: "Lĩnh vực", work: "Thương vụ", speaker: "Diễn giả" },
    hero: {
      tag: "Luật sư & Chuyên gia Tư vấn",
      name: "Nguyễn Thị Hoa",
      bio: "15 năm kinh nghiệm thiết lập khung pháp lý rủi ro và cấu trúc đầu tư cho các tập đoàn đa quốc gia. Người đồng hành dệt nên 'Chiếc khiên lụa' cho doanh nghiệp.",
      cta: "Kết nối Zalo",
      resume: "Tải Portfolio PDF"
    },
    stats: [
      { label: "Năm kinh nghiệm", value: "15+" },
      { label: "Tổng giá trị M&A", value: "10T+" },
      { label: "Quốc gia mạng lưới", value: "50+" }
    ],
    experience: {
      title: "Thương vụ tiêu biểu",
      items: [
        { year: "2024", title: "M&A Dự án BĐS (NĐT Hàn Quốc)", tags: ["Real Estate", "FDI"], value: "1.500 Tỷ" },
        { year: "2023", title: "Chuyển nhượng Resort (NĐT Nga)", tags: ["Hospitality", "M&A"], value: "1.600 Tỷ" },
        { year: "2023", title: "Bán cổ phần Công ty EPC (NĐT Nhật)", tags: ["Industry", "Finance"], value: "20 Triệu USD" },
      ]
    },
    services: {
      title: "Lĩnh vực chuyên sâu",
      items: [
        { id: 1, title: "M&A & Tái cấu trúc", desc: "Tư vấn cấu trúc giao dịch, thực hiện DD và đàm phán hợp đồng sáp nhập." },
        { id: 2, title: "Tài chính Ngân hàng", desc: "Xử lý nợ quốc tế, thiết lập khung quản lý ngoại hối và thanh toán." },
        { id: 3, title: "Bất động sản & Dự án", desc: "Pháp lý dự án nghỉ dưỡng, khu đô thị từ chuẩn bị đến vận hành." }
      ]
    }
  },
  en: {
    nav: { about: "About", services: "Practice", work: "Experience", speaker: "Insights" },
    hero: {
      tag: "Attorney & Investment Specialist",
      name: "Hoa Nguyen",
      bio: "15 years of experience in cross-border investment structuring. Weaving the 'Silk Shield' to protect and empower global businesses.",
      cta: "Contact Me",
      resume: "Download Resume"
    },
    stats: [
      { label: "Years Exp", value: "15+" },
      { label: "Total M&A Value", value: "$500M+" },
      { label: "Global Network", value: "50+" }
    ],
    experience: {
      title: "Featured Transactions",
      items: [
        { year: "2024", title: "Real Estate M&A (Korean)", tags: ["Real Estate", "FDI"], value: "$60M" },
        { year: "2023", title: "Resort Transfer (Russian)", tags: ["Hospitality", "M&A"], value: "$65M" },
        { year: "2023", title: "EPC Share Acquisition (Japanese)", tags: ["Industry", "Finance"], value: "$20M" },
      ]
    },
    services: {
      title: "Practice Areas",
      items: [
        { id: 1, title: "M&A & Restructuring", desc: "Transaction structuring, legal due diligence, and deal negotiation." },
        { id: 2, title: "Banking & Finance", desc: "International debt handling and foreign exchange management." },
        { id: 3, title: "Real Estate Projects", desc: "Legal development of hospitality and urban projects." }
      ]
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('vi');
  const [activeTab, setActiveTab] = useState('about');
  const t = dict[lang];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#1A1A1A] font-['Inter',sans-serif] selection:bg-[#2eb793]/30 selection:text-[#1A1A1A]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body { background-color: #F2F2F2; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* --- FLOATING NAV --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 rounded-full px-2 py-2 flex items-center gap-1">
        {Object.entries(t.nav).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === key ? 'bg-white text-[#2eb793] shadow-md' : 'text-gray-500 hover:text-black'
            }`}
          >
            {label}
          </button>
        ))}
        <div className="w-[1px] h-4 bg-gray-200 mx-2" />
        <button 
          onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
          className="w-9 h-9 flex items-center justify-center rounded-full text-[10px] font-bold bg-black text-white hover:bg-[#2eb793] transition-colors uppercase"
        >
          {lang}
        </button>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* === LEFT: IDENTITY CARD (Sticky) === */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 group">
              <img 
                src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                alt={t.hero.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 flex gap-2">
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#2eb793] transition-all">
                  <Icons.LinkedIn />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#2eb793] transition-all">
                  <Icons.Facebook />
                </a>
              </div>
            </div>
            
            <div className="p-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4 border border-gray-50">
                {t.hero.tag}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight mb-3">{t.hero.name}</h1>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium opacity-80 italic">
                “Triết lý CHIẾC KHIÊN LỤA – bảo vệ mềm dẻo nhưng vững chắc tuyệt đối.”
              </p>
              
              <div className="flex flex-col gap-3">
                <a href="https://zalo.me/0911553686" target="_blank" className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-4 rounded-2xl text-sm font-semibold hover:bg-[#2eb793] transition-all shadow-lg shadow-black/10 active:scale-[0.98]">
                  <Icons.Phone /> {t.hero.cta}
                </a>
                <button className="flex items-center justify-center gap-2 bg-white text-[#1A1A1A] py-4 rounded-2xl text-sm font-semibold border border-gray-200 hover:border-[#2eb793] transition-all group">
                  <Icons.Download /> 
                  <span className="group-hover:text-[#2eb793] transition-colors">{t.hero.resume}</span>
                </button>
              </div>
            </div>
          </motion.div>

          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex justify-between items-center overflow-hidden">
             <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                   <Icons.Mail />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-bold text-gray-400">Email Me</p>
                   <p className="text-sm font-semibold">hoant@paxlaw.vn</p>
                </div>
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300">
                <Icons.ArrowUpRight />
             </div>
          </div>
        </aside>

        {/* === RIGHT: DYNAMIC CONTENT AREA === */}
        <section className="lg:col-span-8 space-y-6">
          <AnimatePresence mode="wait">
            
            {/* ABOUT / INTRO */}
            {activeTab === 'about' && (
              <motion.div
                key="about"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-gray-100 shadow-sm">
                  <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[1.1] mb-8">
                    Chuyên gia kiến tạo <br/> 
                    <span className="text-[#2eb793]">Cấu trúc đầu tư</span> và <br/>
                    Giải pháp Pháp lý.
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed mb-10 font-normal">
                    {t.hero.bio}
                  </motion.p>
                  
                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                    {t.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-3xl font-bold tracking-tighter mb-1">{stat.value}</p>
                        <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                       Expertise
                    </h3>
                    <ul className="space-y-4">
                      {['M&A Structure', 'International Finance', 'Real Estate Legal', 'Crisis Management'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#2eb793]"></div>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 border border-black shadow-lg text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rounded-full -mr-16 -mt-16"></div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Network</h3>
                    <p className="text-3xl font-bold tracking-tighter mb-4">50+ Nations</p>
                    <p className="text-gray-400 text-sm leading-relaxed">Kết nối toàn cầu thông qua hệ thống P.A.N giúp tối ưu hóa dòng tiền và pháp lý cho nhà đầu tư FDI.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SERVICES */}
            {activeTab === 'services' && (
              <motion.div
                key="services"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {t.services.items.map((item) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants}
                    className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:border-[#2eb793]/40 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-50 group-hover:bg-[#2eb793] group-hover:text-white transition-all duration-500">
                       <span className="font-bold">0{item.id}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2eb793] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                       Consult Now <Icons.ArrowUpRight />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* WORK / TRANSACTIONS */}
            {activeTab === 'work' && (
              <motion.div
                key="work"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >
                {t.experience.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-all group"
                  >
                    <div className="space-y-3">
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 uppercase">{item.year}</span>
                          <div className="flex gap-2">
                            {item.tags.map(tag => <span key={tag} className="text-[9px] font-bold text-[#2eb793]/70">#{tag}</span>)}
                          </div>
                       </div>
                       <h3 className="text-lg font-bold group-hover:text-[#2eb793] transition-colors">{item.title}</h3>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-6">
                       <div className="text-right">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transaction Value</p>
                          <p className="text-xl font-black text-[#1A1A1A]">{item.result || item.value}</p>
                       </div>
                       <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-[#2eb793] group-hover:text-white transition-all">
                          <Icons.ArrowUpRight />
                       </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SPEAKER / INSIGHTS */}
            {activeTab === 'speaker' && (
              <motion.div
                key="speaker"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-gray-100 shadow-sm overflow-hidden relative"
              >
                 <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-8">Diễn giả & Hoạt động cộng đồng</h2>
                    <p className="text-gray-500 leading-relaxed mb-10">Luật sư Hoa là gương mặt quen thuộc tại các diễn đàn kinh tế quốc tế và các hiệp hội doanh nhân trẻ như JCI Việt Nam.</p>
                    
                    <div className="space-y-8">
                       <div className="flex gap-6">
                          <div className="w-1.5 bg-[#2eb793] rounded-full"></div>
                          <div>
                             <h4 className="font-bold text-lg mb-2">Đào tạo & Học thuật</h4>
                             <p className="text-sm text-gray-500">Giảng viên thỉnh giảng Luật Ngân hàng tại ĐH Thành Đông, chuyên gia đào tạo nội bộ Techcombank.</p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-1.5 bg-[#2eb793] rounded-full opacity-30"></div>
                          <div>
                             <h4 className="font-bold text-lg mb-2">JCI Vietnam (2026)</h4>
                             <p className="text-sm text-gray-500">Phó chủ tịch quốc gia, đóng góp tích cực cho sự phát triển của lãnh đạo trẻ toàn cầu.</p>
                          </div>
                       </div>
                    </div>

                    <button className="mt-12 bg-[#2eb793] text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl shadow-[#2eb793]/20 hover:scale-[1.02] transition-all">
                       Mời diễn thuyết
                    </button>
                 </div>

                 {/* Decorative element */}
                 <div className="absolute bottom-0 right-0 p-10 opacity-[0.05] pointer-events-none">
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                       <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
                    </svg>
                 </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* --- FOOTER CARD --- */}
          <footer className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm text-center">
             <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Icons.Star key={i} />)}
             </div>
             <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Paxlaw Vietnam • Professional Services</p>
             <p className="text-gray-400 text-[10px] font-medium">© 2025 Lawyer Hoa Nguyen. All rights reserved.</p>
          </footer>
        </section>

      </main>

      {/* --- MOBILE NAV BOTTOM SPACING --- */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
};

export default App;
