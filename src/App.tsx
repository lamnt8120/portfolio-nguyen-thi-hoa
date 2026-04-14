import React, { useState } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';

// --- TYPES FOR TYPESCRIPT SAFETY ---
type Language = 'vi' | 'en';
type TabId = 'tab1' | 'tab2' | 'tab3';

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
  stats: Record<string, string>;
  profile: {
    eduTitle: string;
    eduItems: string[];
    assoTitle: string;
    assoItems: string[];
  };
  practice: {
    title: string;
    ma: { title: string; desc: string };
    finance: { title: string; desc: string };
    realEstate: { title: string; desc: string };
    dispute: { title: string; desc: string };
    ctaSubTitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaBtn: string;
    ctaNote: string;
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
      role1: "Giám Đốc",
      role2: "Luật sư điều hành tại Paxlaw",
    },
    socials: { linkedin: "LinkedIn", facebook: "Facebook", email: "Email", phone: "Gọi" },
    tabs: { tab1: "Giới thiệu", tab2: "Luật sư tư vấn", tab3: "Diễn giả sự kiện" },
    summary: {
      hook: "Chuyên gia Cấu trúc Đầu tư & Quản trị Rủi ro pháp lý.",
      intro: "Với hơn 15 năm kinh nghiệm, Luật sư Nguyễn Thị Hoa cung cấp định hướng pháp lý chiến lược cho các dự án đầu tư quy mô lớn, giải quyết tranh chấp phức tạp và thiết lập khung tuân thủ toàn diện cho hệ thống Ngân hàng, Tài chính và Bất động sản.",
      quotePart1: "“Nếu ví pháp luật như những tấm lụa đa sắc, với vai trò của một luật sư, tôi sẽ đồng hành cùng khách hàng dệt ",
      quoteHighlight: "‘CHIẾC KHIÊN LỤA’",
      quotePart2: " của riêng họ trên thương trường.”",
      quoteAuthor: "Luật sư Hoa Nguyễn",
      bullet1Title: "Năng lực Cốt lõi",
      bullet1Desc: "Chuyên sâu tư vấn Doanh nghiệp, M&A và Tái cấu trúc tài chính. Sở hữu thế mạnh đặc biệt trong việc thiết kế khung pháp lý cho hoạt động quản lý ngoại hối và thanh toán quốc tế.",
      bullet2Title: "Giao dịch Xuyên biên giới",
      bullet2Desc: "Bề dày thành tích phối hợp cùng các tổ chức đa quốc gia, cấu trúc thành công các thương vụ cho nhà đầu tư từ Mỹ, Châu Âu, Nhật Bản, Hàn Quốc, Singapore, Hong Kong, Đài Loan và Nga.",
      bullet3Title: "Lợi thế Lãnh đạo",
      bullet3Desc: "Sự kết hợp hoàn hảo giữa góc nhìn tư vấn của Luật sư điều hành (Paxlaw, Penfield) và tư duy thực chiến của Giám đốc Pháp chế (Techcombank, Green Invest)."
    },
    stats: { expValue: "15+", expLabel: "Năm kinh nghiệm", dealValue: "10.000+ Tỷ", dealLabel: "Tổng giao dịch", fdiValue: "10+", fdiLabel: "Quốc gia đối tác" },
    profile: {
      eduTitle: "Học vấn & Chứng chỉ",
      eduItems: ["Thạc sĩ Chính sách & Luật Thương mại Quốc tế - ĐH Ngoại Thương", "Cử nhân Luật Kinh tế - ĐH Luật Hà Nội", "Chứng chỉ Hành nghề Luật sư | Quản tài viên", "Chứng chỉ Đại diện Sở hữu Công nghiệp"],
      assoTitle: "Hiệp hội & Ngôn ngữ",
      assoItems: ["Phó Chủ tịch Quốc gia JCI Việt Nam (2026)", "Thành viên Đoàn Luật sư TP. Hà Nội", "Ngôn ngữ: Tiếng Việt • Tiếng Anh • Tiếng Nhật"],
    },
    practice: {
      title: "Lĩnh vực tư vấn chuyên sâu",
      ma: { title: "M&A - Tái cấu trúc", desc: "Tư vấn cấu trúc giao dịch, thực hiện thủ tục mua bán, sáp nhập và tái cấu trúc tài chính." },
      finance: { title: "Tài chính - Ngân hàng", desc: "Tư vấn phát hành trái phiếu, xử lý nợ quá hạn và thiết lập khung quản lý ngoại hối." },
      realEstate: { title: "Đầu tư Bất động sản", desc: "Tư vấn phát triển dự án BĐS nghỉ dưỡng, khu đô thị từ chuẩn bị đến vận hành." },
      dispute: { title: "Giải quyết Tranh chấp", desc: "Soạn thảo hợp đồng thương mại và đại diện giải quyết các tranh chấp thầu xây dựng." },
      ctaSubTitle: "KẾT NỐI TRỰC TIẾP",
      ctaTitle: "Định hướng rủi ro chuyên sâu",
      ctaText: "Trao đổi trực tiếp để đánh giá rủi ro pháp lý và tối ưu hóa cấu trúc chiến lược cho doanh nghiệp của bạn.",
      ctaBtn: "Liên Hệ Đặt Lịch",
      ctaNote: "(Bảo mật thông tin tuyệt đối bởi bộ phận thư ký)"
    },
    cases: {
      title: "Các thương vụ tiêu biểu",
      list: [
        { title: "M&A Dự án BĐS Thương mại (NĐT Hàn Quốc)", result: "1.500 Tỷ VNĐ" },
        { title: "Chuyển nhượng Resort Bãi Dài (NĐT Nga & VN)", result: "1.600 Tỷ VNĐ" },
        { title: "Bán cổ phần Công ty Top EPC (NĐT Nhật Bản)", result: "20 Triệu USD" },
        { title: "Tái cấu trúc Tập đoàn Khoáng sản Thái Nguyên", result: ">1.000 Tỷ VNĐ" },
        { title: "Quản lý khủng hoảng & Xử lý 7 gói Trái phiếu", result: "500-850 Tỷ/Gói" }
      ]
    },
    speaker: {
      title: "Diễn giả & Đào tạo",
      desc: "Luật sư Hoa trực tiếp tham gia giảng dạy và diễn thuyết tại các diễn đàn doanh nhân lớn, mang lại giá trị học thuật kết hợp thực tiễn.",
      teachingTitle: "Công tác Giảng dạy",
      teachingItems: ["Giảng viên thỉnh giảng tại Đại học Thành Đông (2019 - Nay)", "Giảng viên nội bộ tại Techcombank (2013 - 2018)"],
      eventTitle: "Sự kiện & Diễn đàn JCI",
      eventItems: ["Đang cập nhật thông tin sự kiện..."],
      contactText: "Để mời Luật sư tham gia giảng dạy hoặc diễn thuyết:",
      contactBtn: "Gửi Yêu Cầu"
    }
  },
  en: {
    hero: {
      name: "Hoa Nguyen",
      role1: "CEO",
      role2: "Managing Attorney at Paxlaw",
    },
    socials: { linkedin: "LinkedIn", facebook: "Facebook", email: "Email", phone: "Call" },
    tabs: { tab1: "Introduction", tab2: "Practice Areas", tab3: "Speaking" },
    summary: {
      hook: "Investment Structure & Legal Risk Specialist.",
      intro: "With 15+ years of experience, Attorney Hoa Nguyen provides strategic guidance for large-scale investments, banking compliance, and real estate litigation.",
      quotePart1: "“If the law is a tapestry of multi-colored silk, I will stand by my clients to weave their very own ",
      quoteHighlight: "‘SILK SHIELD’",
      quotePart2: " in the business arena.”",
      quoteAuthor: "Attorney Hoa Nguyen",
      bullet1Title: "Core Competencies",
      bullet1Desc: "Expert in M&A, financial restructuring, and international payment legal frameworks.",
      bullet2Title: "Global Transactions",
      bullet2Desc: "Coordinating with investors from USA, EU, Japan, Korea, Singapore, and Russia.",
      bullet3Title: "Leadership Edge",
      bullet3Desc: "Blending Managing Partner experience (Paxlaw) with In-house Legal Head tenure (Techcombank)."
    },
    stats: { expValue: "15+", expLabel: "Years Exp", dealValue: "$500M+", dealLabel: "Total Deals", fdiValue: "10+", fdiLabel: "Partner Countries" },
    profile: {
      eduTitle: "Education",
      eduItems: ["Master of Int. Commercial Law - Foreign Trade Univ", "Bachelor of Law - Hanoi Law University", "Lawyer Practicing Certificate", "Industrial Property Representative"],
      assoTitle: "Associations",
      assoItems: ["National Vice President - JCI Vietnam (2026)", "Member of Hanoi Bar Association", "Vietnamese • English • Japanese"],
    },
    practice: {
      title: "Legal Practice Areas",
      ma: { title: "M&A & Restructuring", desc: "Advising on transaction structures and executing complex mergers & acquisitions." },
      finance: { title: "Banking & Finance", desc: "Bond issuance and established FX management legal frameworks." },
      realEstate: { title: "Real Estate Investment", desc: "Legal development of hospitality and urban projects from start to finish." },
      dispute: { title: "Dispute Resolution", desc: "Handling commercial contract disputes and 건설 thầu construction litigations." },
      ctaSubTitle: "CONNECT",
      ctaTitle: "Strategic Legal Consultation",
      ctaText: "Discuss directly to evaluate legal risks and optimize your corporate strategy.",
      ctaBtn: "Book Appointment",
      ctaNote: "Confidentiality guaranteed by our legal secretariat."
    },
    cases: {
      title: "Highlight Deals",
      list: [
        { title: "Real Estate M&A (Korean Investor)", result: "1,500 Bil VND" },
        { title: "Resort Transfer (Russian Investor)", result: "1,600 Bil VND" },
        { title: "EPC Share Acquisition (Japanese)", result: "$20M USD" },
        { title: "Mining Corp Restructuring", result: ">1,000 Bil VND" },
        { title: "Bond Crisis Management", result: "500-850 Bil/Pkg" }
      ]
    },
    speaker: {
      title: "Speaker & Training",
      desc: "Engaging in major academic and business forums globally.",
      teachingTitle: "Academic Lecturing",
      teachingItems: ["Visiting Lecturer at Thanh Dong University", "Internal Lecturer at Techcombank"],
      eventTitle: "JCI Events",
      eventItems: ["Updating JCI event data..."],
      contactText: "To invite for speaking engagements:",
      contactBtn: "Send Request"
    }
  }
};

// --- ICONS ---
const Icons = {
  LinkedIn: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  Facebook: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z"/></svg>,
  Globe: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  GraduationCap: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Users: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
  ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  MessageCircle: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  Briefcase: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Building: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/></svg>,
  Scale: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16l3-8 3 8"/><path d="M2 16l3-8 3 8"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>,
  Shield: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  QuoteIcon: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-10"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
};

// --- BRAND CONSTANTS ---
const colors = {
  mint: "#2eb793",
  deepGreen: "#1d6266",
  white: "#FFFFFF",
  bgGray: "#F8F9FA",
  textDark: "#2D3436"
};

const springTransition = { type: "spring", stiffness: 300, damping: 30 };
const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeTab, setActiveTab] = useState<TabId>('tab1');
  const t = dict[lang];

  return (
    <div className={`bg-[${colors.deepGreen}] font-sans text-[${colors.textDark}] selection:bg-[${colors.mint}] selection:text-white`}>
      
      {/* CSS: Brand Guideline Synergy */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        .font-sans { font-family: "Inter", sans-serif !important; }
        .hide-scroll::-webkit-scrollbar { width: 0; height: 0; }
        .name-shadow { text-shadow: 0 2px 12px rgba(0,0,0,0.5); }
        .pax-silk-overlay {
          background: linear-gradient(135deg, rgba(46, 183, 147, 0.1) 0%, rgba(29, 98, 102, 0.05) 100%);
          border-radius: 40% 60% 60% 40% / 30% 30% 70% 70%;
        }
        .silk-shield-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 5s infinite linear;
        }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>

      {/* --- MAIN INTERFACE --- */}
      <div className="flex flex-col md:flex-row w-full min-h-screen md:h-[100dvh] bg-[#F8F9FA]">
        
        {/* === IDENTITY PANEL (Left) === */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-full md:w-[40%] lg:w-[45%] shrink-0 overflow-hidden bg-white">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
            alt="Lawyer Portait" 
            className="w-full h-full object-cover object-top md:object-center"
          />
          
          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

          {/* TOP RIGHT: Language Switch (Press) */}
          <div className="absolute top-6 right-6 z-40">
            <motion.div className="flex items-center bg-black/40 border border-white/20 backdrop-blur-xl p-1 rounded-full shadow-2xl">
              <div className="pl-2.5 pr-1.5 text-white"><Icons.Globe /></div>
              <div className="flex items-center gap-1">
                {(['vi', 'en'] as Language[]).map(l => (
                  <motion.button 
                    key={l}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLang(l)} 
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${lang === l ? 'bg-[#2eb793] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                  >
                    <span className="text-[10px] font-bold uppercase">{l}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* TOP LEFT: Contact Nodes (Hover + Drag) */}
          <div className="absolute top-6 left-6 flex flex-col items-start gap-3 z-40">
            {(['linkedin', 'facebook', 'email', 'phone'] as const).map((key, i) => (
              <motion.a 
                key={key} 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: colors.mint }}
                whileTap={{ scale: 0.95 }}
                href={key === 'email' ? 'mailto:hoant@paxlaw.vn' : key === 'phone' ? 'tel:+84911553686' : '#'}
                className="flex items-center h-10 bg-black/50 border border-white/10 backdrop-blur-md text-white rounded-full group shadow-2xl overflow-hidden max-w-[40px] hover:max-w-[180px] transition-all duration-500 ease-out"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  {key === 'linkedin' && <Icons.LinkedIn />}
                  {key === 'facebook' && <Icons.Facebook />}
                  {key === 'email' && <Icons.Mail />}
                  {key === 'phone' && <Icons.Phone />}
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dict[lang].socials[key]}
                </span>
              </motion.a>
            ))}
          </div>
          
          {/* BRAND TITLE (Single Line) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-0 left-0 w-full p-8 pb-12 md:p-12 lg:p-16 text-white flex flex-col justify-end items-start z-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight whitespace-nowrap name-shadow">
              {t.hero.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em]">
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ repeat: Infinity, duration: 4 }}
                className="bg-[#1d6266] text-[#2eb793] px-4 py-2 rounded-md shadow-2xl border border-[#2eb793]/30"
              >
                {t.hero.role1}
              </motion.span>
              <span className="text-white/40 font-light text-lg px-1">|</span>
              <span className="text-white name-shadow">{t.hero.role2}</span>
            </div>
          </motion.div>
        </div>

        {/* === CONTENT PANEL (Right) === */}
        <div className="flex-1 flex flex-col bg-[#F8F9FA] rounded-t-[3rem] md:rounded-none -mt-10 md:mt-0 relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.2)] md:shadow-none md:overflow-hidden">
          
          {/* NAVIGATION BAR (Layout Animation) */}
          <div className="shrink-0 sticky top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-100 px-8 md:px-12 lg:px-16 pt-8 md:pt-10 flex items-end rounded-t-[3rem] md:rounded-none overflow-hidden">
            <div className="flex gap-8 md:gap-12 overflow-x-auto hide-scroll flex-1">
              {(['tab1', 'tab2', 'tab3'] as TabId[]).map((tab) => (
                <motion.button 
                  key={tab} 
                  whileTap={{ y: -2 }}
                  onClick={() => setActiveTab(tab)} 
                  className={`pb-5 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.3em] transition-all relative whitespace-nowrap shrink-0 ${activeTab === tab ? 'text-[#1d6266]' : 'text-slate-400 hover:text-[#1d6266]'}`}
                >
                  {t.tabs[tab]}
                  {activeTab === tab && (
                    <motion.span 
                      layoutId="nav-underline" 
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2eb793] rounded-t-full"
                      transition={springTransition}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="pb-5 ml-4 hidden lg:block opacity-20"><span className="text-[10px] font-black tracking-tighter uppercase text-[#1d6266]">PAXLAW</span></div>
          </div>

          {/* MAIN SCROLL AREA (Staggered Appear) */}
          <div className="flex-1 overflow-visible md:overflow-y-auto hide-scroll p-8 md:p-12 lg:p-16 pb-24">
            
            <AnimatePresence mode="wait">
              {activeTab === 'tab1' && (
                <motion.div 
                  key="tab1"
                  initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }}
                  className="max-w-4xl mx-auto md:mx-0 space-y-20"
                >
                  {/* Hook */}
                  <motion.section custom={0} variants={revealVariants}>
                    <h2 className="text-2xl md:text-[2.5rem] font-extrabold text-[#1d6266] leading-[1.2] mb-8 tracking-tighter">
                      {t.summary.hook}
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                      {t.summary.intro}
                    </p>
                  </motion.section>

                  {/* Brand Quote (Loop Float + Shimmer) */}
                  <motion.section 
                    custom={1} variants={revealVariants}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 pax-silk-overlay -mr-10 -mt-10 opacity-30"></div>
                    <div className="relative z-10 bg-[#1d6266] p-10 md:p-16 rounded-[2.5rem] shadow-3xl overflow-hidden border-l-4 border-[#2eb793]">
                      <div className="absolute inset-0 silk-shield-shimmer opacity-40"></div>
                      <p className="text-xl md:text-2xl lg:text-[1.8rem] font-light text-white leading-relaxed tracking-wide mb-10">
                        {t.summary.quotePart1}
                        <span className="font-extrabold text-[#2eb793]">{t.summary.quoteHighlight}</span>
                        {t.summary.quotePart2}
                      </p>
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-px bg-[#2eb793]/50"></div>
                        <div>
                          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#2eb793]">{t.summary.quoteAuthor}</p>
                          <p className="text-[9px] font-medium text-white/40 uppercase mt-1">Founder Paxlaw</p>
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  {/* Competencies (Hover Tilt) */}
                  <motion.section custom={2} variants={revealVariants} className="grid gap-14">
                    {[1, 2, 3].map(num => (
                      <motion.div 
                        key={num} 
                        whileHover={{ x: 15 }}
                        className="group flex gap-8 md:gap-12 items-start"
                      >
                        <div className="text-[2.5rem] font-black text-[#2eb793]/10 group-hover:text-[#2eb793] transition-all leading-none pt-1">0{num}</div>
                        <div className="flex-1">
                          <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1d6266] mb-4">{t.summary[`bullet${num}Title` as keyof Translation['summary']]}</h4>
                          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">{t.summary[`bullet${num}Desc` as keyof Translation['summary']]}</p>
                          {num === 3 && (
                            <div className="mt-10 flex flex-wrap items-center gap-8 md:gap-12 opacity-80">
                              {['Techcombank', 'Paxlaw', 'Penfield', 'Green Invest'].map((n, idx) => (
                                <motion.div 
                                  key={idx} 
                                  whileHover={{ scale: 1.1, opacity: 1 }}
                                  className="h-6 md:h-8 flex items-center grayscale hover:grayscale-0 transition-all duration-500"
                                >
                                  <span className="text-[10px] font-black text-[#1d6266]/30 uppercase tracking-widest">{n}</span>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.section>

                  {/* Stats (Loop Count-up Feeling) */}
                  <motion.section custom={3} variants={revealVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-16 border-y border-slate-100">
                    {['exp', 'deal', 'fdi'].map((k, i) => (
                      <motion.div 
                        key={k}
                        whileHover={{ y: -8 }}
                        className="text-center sm:text-left"
                      >
                        <motion.h3 
                          animate={{ color: [colors.mint, colors.deepGreen, colors.mint] }}
                          transition={{ repeat: Infinity, duration: 5, delay: i * 0.6 }}
                          className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
                        >
                          {t.stats[`${k}Value`]}
                        </motion.h3>
                        <p className="text-[#1d6266] text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">{t.stats[`${k}Label`]}</p>
                      </motion.div>
                    ))}
                  </motion.section>

                  {/* Formal Cards (Drag) */}
                  <motion.section custom={4} variants={revealVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      { t: t.profile.eduTitle, items: t.profile.eduItems, icon: <Icons.GraduationCap /> },
                      { t: t.profile.assoTitle, items: t.profile.assoItems, icon: <Icons.Users /> }
                    ].map((card, i) => (
                      <motion.div 
                        key={i} 
                        drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                        whileHover={{ scale: 1.02, borderColor: colors.mint }}
                        className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl transition-all cursor-grab active:cursor-grabbing"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="text-[#2eb793]">{card.icon}</div>
                          <h3 className="text-[13px] font-bold tracking-[0.2em] text-[#1d6266] uppercase">{card.t}</h3>
                        </div>
                        <ul className="space-y-6">
                          {card.items.map((item, idx) => (
                            <li key={idx} className="flex gap-4 text-[14px] text-slate-500 font-light leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2eb793] mt-2 shrink-0 opacity-40"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.section>
                </motion.div>
              )}

              {activeTab === 'tab2' && (
                <motion.div 
                  key="tab2"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="max-w-5xl space-y-24"
                >
                  {/* Practice Areas */}
                  <section>
                    <h3 className="text-3xl font-bold text-[#1d6266] mb-12 tracking-tight">Practice Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {['ma', 'finance', 'realEstate', 'dispute'].map((id, i) => (
                        <motion.div 
                          key={id}
                          whileHover={{ y: -10, boxShadow: "0 40px 60px -15px rgba(29, 98, 102, 0.1)" }}
                          className="bg-white p-12 rounded-[3rem] border border-slate-100 transition-all"
                        >
                          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }} className="text-[#2eb793] mb-8">
                            {id === 'ma' && <Icons.Briefcase />}
                            {id === 'finance' && <Icons.Building />}
                            {id === 'realEstate' && <Icons.Scale />}
                            {id === 'dispute' && <Icons.Shield />}
                          </motion.div>
                          <h4 className="text-xl font-bold text-[#1d6266] mb-5">{t.practice[id as keyof Translation['practice']].title}</h4>
                          <p className="text-sm text-slate-500 font-light leading-relaxed">{t.practice[id as keyof Translation['practice']].desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Deals (Drag to Peek) */}
                  <section>
                    <h3 className="text-3xl font-bold text-[#1d6266] mb-12 tracking-tight">Key Portfolio</h3>
                    <div className="grid gap-5">
                      {t.cases.list.map((caseItem, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ x: 20, backgroundColor: "rgba(46, 183, 147, 0.03)" }}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-white border border-slate-100 rounded-2xl transition-all"
                        >
                          <div className="flex items-center gap-6 mb-4 sm:mb-0">
                            <Icons.ArrowRight />
                            <p className="font-semibold text-[#1d6266] text-lg">{caseItem.title}</p>
                          </div>
                          <span className="px-6 py-2 bg-[#1d6266] text-[#2eb793] text-[11px] font-black tracking-widest uppercase rounded-full">
                            {caseItem.result}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* CTA (Pulse) */}
                  <motion.section 
                    whileHover={{ scale: 1.01 }}
                    className="bg-[#1d6266] rounded-[3.5rem] p-16 md:p-24 text-center shadow-4xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2eb793]/15 to-transparent"></div>
                    <div className="relative z-10">
                      <span className="text-[#2eb793] text-[11px] font-black tracking-[0.5em] mb-10 block">COLLABORATE</span>
                      <h4 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-[1.1]">
                        {t.practice.ctaTitle}
                      </h4>
                      <motion.a 
                        href="https://zalo.me/0911553686" target="_blank"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-4 bg-[#2eb793] text-white px-16 py-6 text-xs font-black tracking-[0.3em] uppercase rounded-full shadow-2xl transition-all"
                      >
                        <Icons.MessageCircle /> 
                        <span>{t.practice.ctaBtn}</span>
                      </motion.a>
                    </div>
                  </motion.section>
                </motion.div>
              )}

              {activeTab === 'tab3' && (
                <motion.div 
                  key="tab3"
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto space-y-24"
                >
                  <section>
                    <h3 className="text-4xl font-bold text-[#1d6266] mb-10">Public Engagements</h3>
                    <p className="text-lg text-slate-500 font-light leading-relaxed mb-16">{t.speaker.desc}</p>

                    <div className="grid gap-12">
                      {/* Teaching (Hover Scale) */}
                      <div className="space-y-8">
                        {t.speaker.teachingItems.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            whileHover={{ scale: 1.02, backgroundColor: "white" }}
                            className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 transition-all flex gap-8 items-start"
                          >
                            <div className="text-[#2eb793] mt-1"><Icons.GraduationCap /></div>
                            <p className="text-lg text-slate-600 font-medium">{item}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Empty State (Floating Loop) */}
                      <motion.div 
                        animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 3 }}
                        className="p-24 rounded-[3rem] border-2 border-dashed border-slate-200 flex items-center justify-center text-center"
                      >
                        <p className="text-slate-400 italic text-sm tracking-[0.4em] uppercase">{t.speaker.eventItems[0]}</p>
                      </motion.div>
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
}
