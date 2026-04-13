import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES FOR TYPESCRIPT SAFETY ---
type Language = 'vi' | 'en';
type TabId = 'about' | 'practice' | 'experience' | 'insights';

interface Case {
  title: string;
  result: string;
}

interface Translation {
  hero: { name: string; role1: string; role2: string };
  socials: Record<string, string>;
  tabs: Record<TabId, string>;
  summary: {
    hook: string;
    intro: string;
    ctaPrimary: string;
    quotePart1: string;
    quoteHighlight: string;
    quotePart2: string;
    quoteAuthor: string;
    bullet1Title: string;
    bullet1Desc: string;
    bullet2Title: string;
    bullet2Desc: string;
    bullet3Title: string;
    bullet3Desc: string;
  };
  stats: {
    expValue: string;
    expLabel: string;
    dealValue: string;
    dealLabel: string;
    fdiValue: string;
    fdiLabel: string;
  };
  profile: {
    eduTitle: string;
    eduItems: string[];
    assoTitle: string;
    assoItems: string[];
    trustTitle: string;
  };
  practice: {
    title: string;
    ma: { title: string; desc: string };
    finance: { title: string; desc: string };
    realEstate: { title: string; desc: string };
    dispute: { title: string; desc: string };
  };
  cases: { title: string; list: Case[] };
  speaker: {
    title: string;
    desc: string;
    teachingTitle: string;
    teachingItems: string[];
    eventTitle: string;
    eventItems: string[];
    contactText: string;
    contactBtn: string;
  };
}

// --- DICTIONARY ---
const dict: Record<Language, Translation> = {
  vi: {
    hero: {
      name: "Nguyễn Thị Hoa",
      role1: "Chuyên gia Tư vấn Cấu trúc Đầu tư",
      role2: "Luật sư điều hành Paxlaw",
    },
    socials: { linkedin: "LinkedIn", facebook: "Facebook", email: "Email", phone: "Hotline" },
    tabs: { about: "Giới thiệu", practice: "Lĩnh vực", experience: "Thương vụ", insights: "Diễn giả" },
    summary: {
      hook: "Đã trực tiếp tư vấn cấu trúc hơn 50 thương vụ M&A với tổng giá trị trên 10.000 tỷ đồng.",
      intro: "Với hơn 15 năm kinh nghiệm thực chiến trong hệ thống Ngân hàng và các Hãng luật hàng đầu, Luật sư Nguyễn Thị Hoa chuyên sâu thiết lập khung pháp lý rủi ro và cấu trúc đầu tư xuyên biên giới cho các tập đoàn đa quốc gia.",
      ctaPrimary: "Đặt lịch tư vấn chuyên sâu",
      quotePart1: "“Triết lý làm nghề của tôi là đồng hành cùng khách hàng dệt nên ",
      quoteHighlight: "‘CHIẾC KHIÊN LỤA’",
      quotePart2: " – mềm mỏng trong đàm phán nhưng vững chãi tuyệt đối trước mọi rủi ro pháp lý.”",
      quoteAuthor: "Luật sư Hoa Nguyễn",
      bullet1Title: "Kinh nghiệm thực chiến",
      bullet1Desc: "Từng đảm nhiệm vị trí Giám đốc Pháp chế tại các định chế tài chính lớn, trực tiếp xử lý các gói trái phiếu và quản trị ngoại hối phức tạp.",
      bullet2Title: "Mạng lưới quốc tế",
      bullet2Desc: "Kết nối hơn 50 quốc gia qua hệ thống P.A.N, hỗ trợ tối ưu cho các nhà đầu tư FDI từ Mỹ, Nhật Bản, Hàn Quốc và Singapore.",
      bullet3Title: "Tư duy giải pháp",
      bullet3Desc: "Không chỉ nêu rủi ro, chúng tôi dệt nên giải pháp cá nhân hóa, giúp doanh nghiệp tập trung hoàn toàn vào mục tiêu tăng trưởng."
    },
    stats: { expValue: "15+", expLabel: "Năm kinh nghiệm", dealValue: "10.000+ Tỷ", dealLabel: "Tổng giao dịch", fdiValue: "50+", fdiLabel: "Quốc gia mạng lưới" },
    profile: {
      eduTitle: "Học vấn & Chứng chỉ",
      eduItems: ["Thạc sĩ Luật Thương mại Quốc tế - ĐH Ngoại Thương", "Chứng chỉ Hành nghề Luật sư | Quản tài viên", "Chứng chỉ Đại diện Sở hữu Công nghiệp"],
      assoTitle: "Vị trí & Hiệp hội",
      assoItems: ["Phó Chủ tịch Quốc gia JCI Việt Nam (2026)", "Thành viên Đoàn Luật sư TP. Hà Nội", "Ngôn ngữ: Tiếng Việt, Tiếng Anh, Tiếng Nhật"],
      trustTitle: "Đối tác & Chứng nhận uy tín"
    },
    practice: {
      title: "Lĩnh vực chuyên sâu",
      ma: { title: "M&A - Tái cấu trúc", desc: "Tư vấn cấu trúc giao dịch, thực hiện thẩm định pháp lý (DD) và đàm phán hợp đồng sáp nhập." },
      finance: { title: "Ngân hàng & Tài chính", desc: "Xử lý nợ quá hạn nước ngoài, thiết lập khung quản lý ngoại hối và thanh toán quốc tế." },
      realEstate: { title: "Bất động sản & Dự án", desc: "Pháp lý dự án nghỉ dưỡng, khu đô thị từ giai đoạn chuẩn bị đầu tư đến vận hành." },
      dispute: { title: "Giải quyết tranh chấp", desc: "Đại diện giải quyết các tranh chấp thương mại phức tạp và tranh chấp thầu xây dựng." },
    },
    cases: {
      title: "Thương vụ tiêu biểu",
      list: [
        { title: "M&A Dự án BĐS Thương mại (NĐT Hàn Quốc)", result: "1.500 Tỷ VNĐ" },
        { title: "Chuyển nhượng Resort Bãi Dài (NĐT Nga)", result: "1.600 Tỷ VNĐ" },
        { title: "Bán cổ phần Công ty Top EPC (NĐT Nhật Bản)", result: "20 Triệu USD" },
        { title: "Quản lý khủng hoảng 7 gói Trái phiếu doanh nghiệp", result: "750 Tỷ/Gói" }
      ]
    },
    speaker: {
      title: "Diễn giả & Đào tạo",
      desc: "Luật sư Hoa đóng góp tích cực cho cộng đồng doanh nhân trẻ qua các diễn đàn giáo dục và kinh tế quốc tế.",
      teachingTitle: "Công tác Giảng dạy",
      teachingItems: ["Giảng viên thỉnh giảng tại Đại học Thành Đông (2019 - Nay)", "Giảng viên nội bộ tại Techcombank (2013 - 2018)"],
      eventTitle: "Dấu ấn JCI & Sự kiện",
      eventItems: ["Đang cập nhật thông tin sự kiện..."],
      contactText: "Để mời Luật sư tham gia diễn thuyết:",
      contactBtn: "Gửi Yêu Cầu Diễn Giả"
    }
  },
  en: {
    hero: {
      name: "Hoa Nguyen",
      role1: "Investment Structure Specialist",
      role2: "Managing Attorney at Paxlaw",
    },
    socials: { linkedin: "LinkedIn", facebook: "Facebook", email: "Email", phone: "Hotline" },
    tabs: { about: "About", practice: "Practice", experience: "Deals", insights: "Insights" },
    summary: {
      hook: "Advised 50+ M&A deals with a total value exceeding $500 million.",
      intro: "With 15+ years of practice at major banks and law firms, Attorney Hoa Nguyen specializes in cross-border investment structuring and legal risk management.",
      ctaPrimary: "Book Consultation",
      quotePart1: "“My philosophy is to weave a ",
      quoteHighlight: "‘SILK SHIELD’",
      quotePart2: " for clients – flexible in negotiation but absolute in legal protection.”",
      quoteAuthor: "Attorney Hoa Nguyen",
      bullet1Title: "Practical Experience",
      bullet1Desc: "Former Legal Head at top financial institutions, directly handling bond packages and complex FX management.",
      bullet2Title: "Global Network",
      bullet2Desc: "Connected to 50+ countries via the P.A.N system, optimizing FDI entry from USA, Japan, Korea, and Singapore.",
      bullet3Title: "Solution-Driven",
      bullet3Desc: "We don't just state risks; we weave personalized solutions that empower sustainable business growth."
    },
    stats: { expValue: "15+", expLabel: "Years Exp", dealValue: "$500M+", dealLabel: "Total Deals", fdiValue: "50+", fdiLabel: "Global Network" },
    profile: {
      eduTitle: "Education & Certs",
      eduItems: ["Master of Int. Policy & Law - FTU", "Lawyer Practicing Certificate | Liquidator", "Industrial Property Representative"],
      assoTitle: "Roles & Associations",
      assoItems: ["National VP - JCI Vietnam (2026)", "Member of Hanoi Bar Association", "Vietnamese, English, Japanese"],
      trustTitle: "Trusted Partners & Accreditations"
    },
    practice: {
      title: "Practice Areas",
      ma: { title: "M&A & Restructuring", desc: "Transactional structuring, legal due diligence (LDD), and merger negotiations." },
      finance: { title: "Banking & Finance", desc: "Overseas overdue debt handling and international payment legal frameworks." },
      realEstate: { title: "Real Estate & Projects", desc: "Legal development of projects from pre-investment to operation." },
      dispute: { title: "Dispute Resolution", desc: "Representing clients in complex commercial and construction EPC disputes." },
    },
    cases: {
      title: "Key Transactions",
      list: [
        { title: "Commercial Real Estate M&A (Korean)", result: "$60M USD" },
        { title: "Resort Transfer Project (Russian Investor)", result: "$65M USD" },
        { title: "Top EPC Share Acquisition (Japanese Investor)", result: "$20M USD" },
        { title: "Bond Crisis Management (7 Packages)", result: "$30M/Pkg" }
      ]
    },
    speaker: {
      title: "Speaker & Community",
      desc: "Contributing to the global business community through academic lecturing and international forums.",
      teachingTitle: "Academic Lecturing",
      teachingItems: ["Visiting Lecturer at Thanh Dong University", "Internal FX Trainer at Techcombank"],
      eventTitle: "JCI Milestones & Events",
      eventItems: ["Updating JCI event data..."],
      contactText: "To invite for speaking engagements:",
      contactBtn: "Send Speaker Request"
    }
  }
};

// --- ICONS ---
const Icons = {
  LinkedIn: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  Facebook: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z"/></svg>,
  Globe: () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  GraduationCap: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Users: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
  ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  MessageCircle: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
};

const colors = {
  mint: "#2eb793",
  deepGreen: "#1d6266",
  white: "#FFFFFF",
  textDark: "#1E293B"
};

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const t = dict[lang];

  return (
    <div className="bg-[#F8F9FA] font-sans text-slate-800 selection:bg-[#2eb793] selection:text-white">
      
      {/* CSS: Paxlaw Aesthetic */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        .font-sans { font-family: "Inter", sans-serif !important; }
        .hide-scroll::-webkit-scrollbar { width: 0; height: 0; }
        .name-shadow { text-shadow: 0 4px 15px rgba(0,0,0,0.4); }
        .hero-gradient { background: linear-gradient(to top, rgba(29, 98, 102, 0.95), rgba(29, 98, 102, 0.2), transparent); }
        .cta-pulse { animation: pulse-shadow 3s infinite; }
        @keyframes pulse-shadow { 0% { box-shadow: 0 0 0 0 rgba(46, 183, 147, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(46, 183, 147, 0); } 100% { box-shadow: 0 0 0 0 rgba(46, 183, 147, 0); } }
      `}</style>

      <div className="flex flex-col md:flex-row w-full min-h-screen md:h-[100dvh] overflow-hidden">
        
        {/* === IDENTITY PANEL (Left) === */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-full md:w-[40%] lg:w-[45%] shrink-0 overflow-hidden bg-slate-200">
          <img 
            src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
            alt="Lawyer Portrait" 
            className="w-full h-full object-cover object-top md:object-center"
            loading="eager"
          />
          
          <div className="absolute inset-0 hero-gradient pointer-events-none"></div>

          {/* TOP ACTIONS */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-40">
            <div className="flex flex-col gap-2.5">
              <a href="https://www.linkedin.com/in/lawyerhoanguyen/" target="_blank" rel="noreferrer" className="flex items-center h-10 w-10 bg-black/40 border border-white/10 backdrop-blur-md text-white rounded-full justify-center hover:bg-[#2eb793] transition-colors shadow-lg">
                <Icons.LinkedIn />
              </a>
              <a href="https://www.facebook.com/Paxlaw.vn" target="_blank" rel="noreferrer" className="flex items-center h-10 w-10 bg-black/40 border border-white/10 backdrop-blur-md text-white rounded-full justify-center hover:bg-[#2eb793] transition-colors shadow-lg">
                <Icons.Facebook />
              </a>
            </div>

            <div className="flex items-center bg-black/40 border border-white/10 backdrop-blur-md p-1 rounded-full shadow-2xl">
              <div className="pl-2.5 pr-1.5 text-white/70"><Icons.Globe /></div>
              {(['vi', 'en'] as Language[]).map(l => (
                <button 
                  key={l}
                  onClick={() => setLang(l)} 
                  className={`w-7 h-7 rounded-full text-[9px] font-black uppercase transition-all ${lang === l ? 'bg-[#2eb793] text-white' : 'text-white/40'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          
          {/* BRAND TEXT */}
          <div className="absolute bottom-0 left-0 w-full p-8 pb-12 lg:p-14 text-white z-10">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter whitespace-nowrap name-shadow"
            >
              {t.hero.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em]">
              <span className="bg-[#2eb793] text-white px-4 py-2 rounded-sm shadow-xl">{t.hero.role1}</span>
              <span className="text-white/40 font-light">|</span>
              <span className="text-white/90 drop-shadow-md">{t.hero.role2}</span>
            </div>
          </div>
        </div>

        {/* === CONTENT PANEL (Right) === */}
        <div className="flex-1 flex flex-col bg-white md:overflow-hidden relative z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
          
          {/* NAVIGATION */}
          <nav className="shrink-0 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-8 lg:px-14 pt-8 md:pt-10 flex items-end">
            <div className="flex gap-8 lg:gap-12 overflow-x-auto hide-scroll flex-1">
              {(['about', 'practice', 'experience', 'insights'] as TabId[]).map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)} 
                  className={`pb-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] transition-all relative whitespace-nowrap shrink-0 ${activeTab === tab ? 'text-[#1d6266]' : 'text-slate-400'}`}
                >
                  {t.tabs[tab]}
                  {activeTab === tab && (
                    <motion.span layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2eb793]" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* SCROLL AREA */}
          <div className="flex-1 overflow-y-auto hide-scroll p-8 lg:p-14 pb-24">
            <AnimatePresence mode="wait">
              {activeTab === 'about' && (
                <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl space-y-16">
                  {/* Hook & Intro */}
                  <section>
                    <h2 className="text-2xl lg:text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
                      {t.summary.hook}
                    </h2>
                    <p className="text-base lg:text-lg text-slate-500 font-normal leading-relaxed mb-10 max-w-2xl">
                      {t.summary.intro}
                    </p>
                    <a href="https://zalo.me/0911553686" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1d6266] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:bg-[#2eb793] transition-all cta-pulse">
                      <Icons.MessageCircle /> {t.summary.ctaPrimary}
                    </a>
                  </section>

                  {/* Trust Stats */}
                  <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-slate-100">
                    {['exp', 'deal', 'fdi'].map((k) => (
                      <div key={k}>
                        <h3 className="text-3xl lg:text-5xl font-black text-[#2eb793] mb-2 tracking-tighter">{t.stats[`${k}Value` as keyof Translation['stats']]}</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-snug">{t.stats[`${k}Label` as keyof Translation['stats']]}</p>
                      </div>
                    ))}
                  </section>

                  {/* Competencies */}
                  <section className="grid gap-12">
                    {[1, 2, 3].map(num => (
                      <div key={num} className="flex gap-8 items-start">
                        <span className="text-2xl font-black text-slate-200">0{num}</span>
                        <div>
                          <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-widest mb-3">{t.summary[`bullet${num}Title` as keyof Translation['summary']]}</h4>
                          <p className="text-sm lg:text-base text-slate-500 leading-relaxed">{t.summary[`bullet${num}Desc` as keyof Translation['summary']]}</p>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Trust Badges */}
                  <section className="pt-8">
                    <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10 text-center">{t.profile.trustTitle}</h4>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIdCgyjPpeiTDv0BrLrz6rqtm-Db7Cq3gTQ&s" className="h-8 w-auto" alt="Paxlaw" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExxae_4L6FCMvq6EsOVn9VHzX9RDYrXMRrA&s" className="h-6 w-auto" alt="Techcombank" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgZN0vRbNUkX6vz-bfm8JcH7Wrhxscgkc7w&s" className="h-8 w-auto" alt="Penfield" />
                    </div>
                  </section>

                  {/* Brand Quote */}
                  <section className="bg-[#1d6266] p-10 lg:p-14 rounded-3xl border-l-8 border-[#2eb793] text-white shadow-2xl">
                    <p className="text-xl lg:text-2xl font-light italic leading-relaxed mb-8 opacity-90">
                      {t.summary.quotePart1}
                      <span className="font-black text-[#2eb793] not-italic">{t.summary.quoteHighlight}</span>
                      {t.summary.quotePart2}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#2eb793]">{t.summary.quoteAuthor}</p>
                  </section>
                </motion.div>
              )}

              {activeTab === 'practice' && (
                <motion.div key="practice" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl space-y-12">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter mb-12">{t.practice.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {(['ma', 'finance', 'realEstate', 'dispute'] as const).map((id) => (
                      <div key={id} className="p-10 border border-slate-100 rounded-3xl hover:border-[#2eb793] transition-all bg-white shadow-sm hover:shadow-xl group">
                        <h4 className="text-lg font-black text-slate-900 mb-4 group-hover:text-[#2eb793] transition-colors">{t.practice[id].title}</h4>
                        <p className="text-sm text-slate-500 leading-loose">{t.practice[id].desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div key="experience" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-12">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter mb-12">{t.cases.title}</h3>
                  <div className="grid gap-6">
                    {t.cases.list.map((c, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white transition-all hover:shadow-lg">
                        <div className="flex gap-4 items-center mb-4 sm:mb-0">
                          <Icons.ArrowRight />
                          <span className="font-bold text-slate-900">{c.title}</span>
                        </div>
                        <span className="px-5 py-2 bg-[#1d6266] text-[#2eb793] text-[10px] font-black rounded-full shadow-md uppercase tracking-widest">{c.result}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'insights' && (
                <motion.div key="insights" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-16">
                  <section>
                    <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">{t.speaker.title}</h3>
                    <p className="text-slate-500 leading-loose max-w-2xl mb-12">{t.speaker.desc}</p>
                    
                    <div className="space-y-6">
                      <h4 className="text-[12px] font-black text-[#1d6266] uppercase tracking-widest border-b border-slate-100 pb-4">{t.speaker.teachingTitle}</h4>
                      {t.speaker.teachingItems.map((item, i) => (
                        <div key={i} className="flex gap-6 p-6 rounded-xl border border-slate-100 items-start">
                          <Icons.GraduationCap />
                          <p className="text-sm font-semibold text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  <button className="w-full sm:w-auto px-10 py-5 bg-[#1d6266] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-[#2eb793] transition-colors">
                    {t.speaker.contactBtn}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MOBILE STICKY CTA */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-[60]">
             <a href="tel:+84911553686" className="w-full flex items-center justify-center gap-3 bg-[#1d6266] text-white py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl">
               <Icons.Phone /> {t.socials.phone}: 0911 553 686
             </a>
          </div>
        </div>

      </div>
    </div>
  );
}
