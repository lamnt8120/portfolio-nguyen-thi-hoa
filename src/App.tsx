import React, { useState } from 'react';

// --- DICTIONARY FOR BILINGUAL SUPPORT ---
const dict = {
  vi: {
    hero: {
      name: "Nguyễn Thị Hoa",
      role1: "Giám Đốc",
      role2: "Luật sư điều hành tại Paxlaw",
    },
    socials: {
      linkedin: "LinkedIn",
      facebook: "Facebook",
      email: "Email",
      phone: "Gọi"
    },
    tabs: {
      tab1: "Giới thiệu",
      tab2: "Luật sư tư vấn",
      tab3: "Diễn giả sự kiện",
    },
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
    stats: {
      expValue: "15+",
      expLabel: "Năm kinh nghiệm",
      dealValue: "10.000+ Tỷ",
      dealLabel: "Tổng giá trị giao dịch",
      fdiValue: "10+",
      fdiLabel: "Quốc gia đối tác"
    },
    profile: {
      eduTitle: "Học vấn & Chứng chỉ",
      eduItems: [
        "Thạc sĩ Chính sách & Luật Thương mại Quốc tế (MIPL4) - ĐH Ngoại Thương",
        "Cử nhân Luật Kinh tế - ĐH Luật Hà Nội",
        "Chứng chỉ Hành nghề Luật sư | Quản tài viên",
        "Chứng chỉ Đại diện Sở hữu Công nghiệp"
      ],
      assoTitle: "Hiệp hội & Ngôn ngữ",
      assoItems: [
        "Phó Chủ tịch Quốc gia JCI Việt Nam (Nhiệm kỳ 2026)",
        "Thành viên Đoàn Luật sư TP. Hà Nội",
        "Ngôn ngữ: Tiếng Việt (Bản xứ) • Tiếng Anh (Chuyên nghiệp) • Tiếng Nhật (Cơ bản)"
      ]
    },
    practice: {
      title: "Lĩnh vực tư vấn chuyên sâu",
      ma: { title: "M&A - Tái cấu trúc", desc: "Tư vấn cấu trúc giao dịch, thực hiện thủ tục mua bán, sáp nhập và tái cấu trúc tài chính doanh nghiệp toàn diện." },
      finance: { title: "Tài chính - Ngân hàng", desc: "Tư vấn phát hành trái phiếu, xử lý nợ quá hạn nước ngoài, thiết lập khung pháp lý quản lý ngoại hối." },
      realEstate: { title: "Đầu tư Bất động sản", desc: "Tư vấn phát triển dự án bất động sản nghỉ dưỡng, khu đô thị từ giai đoạn chuẩn bị đến vận hành." },
      dispute: { title: "Giải quyết Tranh chấp", desc: "Soạn thảo hợp đồng thương mại phức tạp và đại diện giải quyết các tranh chấp thầu xây dựng quy mô lớn." },
      ctaSubTitle: "Kết nối trực tiếp",
      ctaTitle: "Đánh giá rủi ro & định hướng chuyên sâu",
      ctaText: "Trao đổi để đánh giá rủi ro pháp lý và cấu trúc chiến lược tối ưu nhất cho doanh nghiệp hoặc dự án của bạn.",
      ctaBtn: "Liên Hệ Đặt Lịch",
      ctaNote: "(Bộ phận thư ký sẽ tiếp nhận, bảo mật thông tin và xếp lịch với Luật sư)"
    },
    cases: {
      title: "Các thương vụ tiêu biểu",
      list: [
        { title: "M&A Dự án BĐS Thương mại (NĐT Hàn Quốc)", result: "1.500 Tỷ VNĐ" },
        { title: "Chuyển nhượng Resort Bãi Dài (NĐT Nga & VN)", result: "1.600 Tỷ VNĐ" },
        { title: "Bán cổ phần Công ty Top EPC (NĐT Nhật Bản)", result: "20 Triệu USD" },
        { title: "Tái cấu trúc Tập đoàn Khoáng sản Thái Nguyên", result: ">1.000 Tỷ VNĐ" },
        { title: "Quản lý khủng hoảng & Xử lý 7 gói Trái phiếu", result: "500 - 850 Tỷ/Gói" }
      ]
    },
    speaker: {
      title: "Diễn giả & Đào tạo",
      desc: "Bên cạnh công tác điều hành và tư vấn pháp lý, Luật sư Hoa còn trực tiếp tham gia công tác giảng dạy học thuật và diễn thuyết tại các diễn đàn doanh nhân lớn.",
      teachingTitle: "Công tác Giảng dạy & Học thuật",
      teachingItems: [
        "Giảng viên thỉnh giảng (Bộ môn Luật chung & Tài chính Ngân hàng) tại Đại học Thành Đông (2019 - Nay).",
        "Giảng viên nội bộ chuyên đề Quản lý Ngoại hối và Thanh toán Quốc tế tại Techcombank (2013 - 2018)."
      ],
      eventTitle: "Sự kiện & Diễn đàn JCI",
      eventItems: [
        "Đang cập nhật thông tin sự kiện..."
      ],
      contactText: "Để mời Luật sư tham gia giảng dạy hoặc diễn thuyết sự kiện:",
      contactBtn: "Gửi Yêu Cầu Liên Hệ"
    }
  },
  en: {
    hero: {
      name: "Hoa Nguyen",
      role1: "CEO",
      role2: "Managing Attorney at Paxlaw",
    },
    socials: {
      linkedin: "LinkedIn",
      facebook: "Facebook",
      email: "Email",
      phone: "Call"
    },
    tabs: {
      tab1: "Introduction",
      tab2: "Legal Practice",
      tab3: "Speaking & Training",
    },
    summary: {
      hook: "Risk management and investment structuring expert.",
      intro: "With over 15 years of experience, Attorney Hoa Nguyen provides strategic legal guidance for large-scale investment projects, complex dispute resolution, and regulatory compliance across the Banking, Finance, and Real Estate sectors.",
      quotePart1: "“If the law is likened to a tapestry of multi-colored silk, as a legal counsel, I will stand by my clients to weave their very own ",
      quoteHighlight: "‘SILK SHIELD’",
      quotePart2: " in the business arena.”",
      quoteAuthor: "Attorney Hoa Nguyen",
      bullet1Title: "Core Competencies",
      bullet1Desc: "Corporate advisory, M&A, and financial restructuring. Highly proficient in designing legal frameworks for financial activities, FX management, and cross-border payments.",
      bullet2Title: "Cross-Border Transactions",
      bullet2Desc: "Proven ability to coordinate with multinational teams, delivering measurable outcomes for investors from the US, Europe, Japan, Korea, Singapore, Hong Kong, Taiwan, and Russia.",
      bullet3Title: "Executive Leadership",
      bullet3Desc: "A unique blend of experience as a Managing Partner (Paxlaw, Penfield) and In-house Legal Head (Techcombank, Green Investment)."
    },
    stats: {
      expValue: "15+",
      expLabel: "Years Experience",
      dealValue: "$500M+",
      dealLabel: "Total Deal Value",
      fdiValue: "10+",
      fdiLabel: "Partner Countries"
    },
    profile: {
      eduTitle: "Education & Certifications",
      eduItems: [
        "Master of Int. Policy & Commercial Law - Foreign Trade University",
        "Bachelor of Commercial Law - Hanoi Law University",
        "Lawyer's Practicing Certificate | Asset Management Officer",
        "Certificate of Industrial Property Representation"
      ],
      assoTitle: "Associations & Languages",
      assoItems: [
        "National Vice President of JCI Vietnam (2026 Term)",
        "Member of Hanoi Bar Association",
        "Languages: Vietnamese (Native) • English (Professional) • Japanese (Basic)"
      ]
    },
    practice: {
      title: "Core Practice Areas",
      ma: { title: "M&A - Restructuring", desc: "Advising on deal structures, executing mergers, acquisitions, and comprehensive corporate financial restructuring." },
      finance: { title: "Banking - Finance", desc: "Advising on bond issuance, structuring overseas overdue loans, and establishing FX management legal frameworks." },
      realEstate: { title: "Real Estate Investment", desc: "Legal development of resort and urban real estate projects from investment preparation to handover and operation." },
      dispute: { title: "Dispute Resolution", desc: "Drafting complex commercial contracts and representing clients in large-scale EPC contract disputes." },
      ctaSubTitle: "Direct Connection",
      ctaTitle: "Risk Assessment & Legal Strategy",
      ctaText: "Discuss directly to evaluate legal risks and structure the most optimal strategy for your business or project.",
      ctaBtn: "Book an Appointment",
      ctaNote: "(The Secretariat will securely receive your request and schedule with the Attorney)"
    },
    cases: {
      title: "Highlight Deals",
      list: [
        { title: "Real Estate M&A (Korean Investor)", result: "1,500 Bil VND" },
        { title: "Bai Dai Resort Transfer (Russian & VN Investors)", result: "1,600 Bil VND" },
        { title: "Top EPC Company Share Acquisition (Japanese Investor)", result: "$20M USD" },
        { title: "Mineral Corporation Restructuring", result: ">1,000 Bil VND" },
        { title: "Crisis Mgt: 7 Private Offering Bond Packages", result: "500-850 Bil/Pkg" }
      ]
    },
    speaker: {
      title: "Lecturing & Corporate Training",
      desc: "In addition to her executive and legal advisory roles, Attorney Hoa is actively involved in academic lecturing and speaking at major business forums.",
      teachingTitle: "Academic Lecturing",
      teachingItems: [
        "Visiting Lecturer (Law & Banking Finance) at Thanh Dong University (2019 - Present).",
        "Internal Lecturer on FX and International Payments at Techcombank (2013 - 2018)."
      ],
      eventTitle: "JCI Events & Forums",
      eventItems: [
        "Updating event information..."
      ],
      contactText: "To invite Attorney Hoa for academic lectures or speaking events:",
      contactBtn: "Send Request"
    }
  }
};

// --- ICONS ---
const strokeW = "1.5";
const Icons = {
  LinkedIn: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  Facebook: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 {2.81}.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Scale: ({size=24}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  Building: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
  Briefcase: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Shield: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Globe: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  MessageCircle: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
  GraduationCap: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Award: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Users: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  QuoteIcon: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-10"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3996 5.849h3.983v10h-9.983z"/></svg>
};

export default function App() {
  const [lang, setLang] = useState('vi');
  const [activeTab, setActiveTab] = useState('tab1');
  const t = dict[lang];

  return (
    <div className="bg-[#1A233A] font-sans text-[#334155] selection:bg-[#B8905B] selection:text-white">
      
      {/* CSS: Config Tailwind v4 directly & Modern Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        @theme {
          --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
          --font-serif: "Playfair Display", ui-serif, Georgia, serif;
        }

        .font-sans { font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important; }
        .font-serif { font-family: "Playfair Display", ui-serif, Georgia, serif !important; }

        .hide-scroll::-webkit-scrollbar { width: 4px; height: 4px; }
        .hide-scroll::-webkit-scrollbar-track { background: transparent; }
        .hide-scroll::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
        
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shine {
          0% { text-shadow: 0 0 0px rgba(184, 144, 91, 0); }
          50% { text-shadow: 0 0 10px rgba(184, 144, 91, 0.4); }
          100% { text-shadow: 0 0 0px rgba(184, 144, 91, 0); }
        }

        .animate-reveal { animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        
        .silk-shield-glow { animation: shine 3s infinite; }
      `}</style>

      {/* --- STRUCTURE LAYOUT --- */}
      <div className="flex flex-col md:flex-row w-full min-h-screen md:h-[100dvh] bg-[#F8F9FA]">
        
        {/* === LEFT PANEL: IMAGE & BRANDING === */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-full md:w-[40%] lg:w-[45%] shrink-0 overflow-hidden">
          <img 
            src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
            alt="Luật sư Nguyễn Thị Hoa" 
            className="w-full h-full object-cover object-top md:object-center transition-transform duration-[2s] hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1A233A]/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A233A] via-[#1A233A]/40 to-transparent md:via-[#1A233A]/60"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1A233A]/70 to-transparent pointer-events-none"></div>

          {/* === TOP RIGHT: LANGUAGE TOGGLE SWITCH === */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-12 lg:right-12 z-30 animate-reveal">
            <div className="flex items-center bg-[#1A233A]/40 border border-white/15 backdrop-blur-md p-1 rounded-full shadow-sm">
              <div className="pl-2.5 pr-1.5 text-white/80">
                <Icons.Globe />
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setLang('vi')} aria-label="Tiếng Việt" className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full transition-all duration-300 ${lang === 'vi' ? 'bg-[#B8905B] text-white shadow-md' : 'text-white/50 hover:text-white hover:bg-white/10'}`}>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-widest mt-[1px]">VI</span>
                </button>
                <button onClick={() => setLang('en')} aria-label="English" className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-[#B8905B] text-white shadow-md' : 'text-white/50 hover:text-white hover:bg-white/10'}`}>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-widest mt-[1px]">EN</span>
                </button>
              </div>
            </div>
          </div>

          {/* === TOP LEFT: VERTICAL EXPANDING CONTACT BUTTONS === */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 lg:top-12 lg:left-12 flex flex-col items-start gap-3 z-30 animate-tab">
            <a href="https://vn.linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" aria-label={t.socials.linkedin} title="LinkedIn" className="flex items-center h-10 bg-[#1A233A]/40 border border-white/15 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white transition-all duration-500 ease-out rounded-full group shadow-sm overflow-hidden max-w-[40px] hover:max-w-[160px]">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Icons.LinkedIn />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t.socials.linkedin}
              </span>
            </a>
            
            <a href="https://www.facebook.com/Paxlaw.vn?locale=vi_VN" target="_blank" rel="noreferrer" aria-label={t.socials.facebook} title="Facebook" className="flex items-center h-10 bg-[#1A233A]/40 border border-white/15 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white transition-all duration-500 ease-out rounded-full group shadow-sm overflow-hidden max-w-[40px] hover:max-w-[160px]">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Icons.Facebook />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t.socials.facebook}
              </span>
            </a>

            <a href="mailto:hoant@paxlaw.vn" aria-label={t.socials.email} title="Email" className="flex items-center h-10 bg-[#1A233A]/40 border border-white/15 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white transition-all duration-500 ease-out rounded-full group shadow-sm overflow-hidden max-w-[40px] hover:max-w-[160px]">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Icons.Mail />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t.socials.email}
              </span>
            </a>

            <a href="tel:+84911553686" aria-label={t.socials.phone} title="Hotline" className="flex items-center h-10 bg-[#1A233A]/40 border border-white/15 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white transition-all duration-500 ease-out rounded-full group shadow-sm overflow-hidden max-w-[40px] hover:max-w-[160px]">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Icons.Phone />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t.socials.phone}
              </span>
            </a>
          </div>
          
          {/* Name & Titles */}
          <div className="absolute bottom-0 left-0 w-full p-8 pb-16 md:p-12 lg:p-16 text-white flex flex-col justify-end items-start animate-reveal delay-3 pointer-events-none">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-medium mb-3 text-white drop-shadow-2xl leading-[1.1]">
              {t.hero.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[10px] lg:text-xs font-semibold uppercase tracking-[0.3em] opacity-90">
              <span className="bg-white/10 px-3 py-1 rounded backdrop-blur-md">{t.hero.role1}</span>
              <span className="hidden sm:block text-[#B8905B] text-lg">•</span>
              <span className="text-[#B8905B] font-bold">{t.hero.role2}</span>
            </div>
          </div>
        </div>

        {/* === RIGHT PANEL: SCROLLABLE CONTENT === */}
        <div className="flex-1 flex flex-col bg-[#F8F9FA] rounded-t-[3rem] md:rounded-none -mt-12 md:mt-0 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.3)] md:shadow-none md:overflow-hidden">
          
          <div className="shrink-0 sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-slate-200 px-8 md:px-12 lg:px-16 pt-8 md:pt-10 flex items-end rounded-t-[3rem] md:rounded-none">
            <div className="flex gap-8 md:gap-12 overflow-x-auto hide-scroll flex-1">
              {['tab1', 'tab2', 'tab3'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-5 text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] transition-all relative outline-none whitespace-nowrap shrink-0 ${activeTab === tab ? 'text-[#1A233A]' : 'text-slate-400 hover:text-slate-600'}`}>
                  {t.tabs[tab]}
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#1A233A] transition-transform duration-500 origin-left rounded-t-full ${activeTab === tab ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-visible md:overflow-y-auto hide-scroll p-8 md:p-12 lg:p-16 pb-24">
            
            {/* TAB 1: GIỚI THIỆU (ARCHITECTURE RE-ORDERED) */}
            {activeTab === 'tab1' && (
              <div className="max-w-4xl mx-auto md:mx-0 space-y-16">
                
                {/* 1. Hook & Summary */}
                <section className="animate-reveal">
                  <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium text-[#1A233A] leading-[1.2] mb-8">
                    {t.summary.hook}
                  </h2>
                  <p className="text-base md:text-[1.125rem] text-slate-500 font-light leading-relaxed">
                    {t.summary.intro}
                  </p>
                </section>

                {/* 2. THE BRAND QUOTE (VISUAL CENTERPIECE) */}
                <section className="animate-reveal delay-1 relative">
                  <div className="absolute -top-10 -left-6 text-[#B8905B]/10 scale-[2.5]">
                    <Icons.QuoteIcon />
                  </div>
                  <div className="relative z-10 bg-[#1A233A] p-10 md:p-16 rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#B8905B]/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8905B]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <p className="text-xl md:text-2xl lg:text-[1.85rem] font-serif font-normal text-[#F6F5F2] leading-[1.7] tracking-wide mb-10">
                      {t.summary.quotePart1}
                      <span className="font-bold text-[#B8905B] silk-shield-glow">{t.summary.quoteHighlight}</span>
                      {t.summary.quotePart2}
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-px bg-[#B8905B]/50"></div>
                      <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-[#B8905B]">{t.summary.quoteAuthor}</p>
                        <p className="text-[10px] font-light text-slate-400 uppercase mt-1">Managing Partner / Founder Paxlaw</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. CORE COMPETENCIES (THE SKILLS) + LOGOS UNDER BULLET 3 */}
                <section className="animate-reveal delay-2 grid gap-10">
                  {[1, 2, 3].map(num => (
                    <div key={num} className="group flex flex-col gap-3">
                      <div className="flex gap-6 md:gap-10 items-start">
                        <div className="text-[2rem] font-serif text-[#B8905B]/20 font-bold group-hover:text-[#B8905B] transition-colors leading-none">0{num}</div>
                        <div className="pt-2">
                          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A233A] mb-3">{t.summary[`bullet${num}Title`]}</h4>
                          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">{t.summary[`bullet${num}Desc`]}</p>
                        </div>
                      </div>
                      
                      {/* 4 LOGO ĐI KÈM MỤC LỢI THẾ LÃNH ĐẠO (BULLET 3) */}
                      {num === 3 && (
                        <div className="pl-14 md:pl-24 pt-6">
                          <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIdCgyjPpeiTDv0BrLrz6rqtm-Db7Cq3gTQ&s" alt="Paxlaw" className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExxae_4L6FCMvq6EsOVn9VHzX9RDYrXMRrA&s" alt="Techcombank" className="h-6 md:h-8 w-auto object-contain hover:scale-110 transition-transform" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgZN0vRbNUkX6vz-bfm8JcH7Wrhxscgkc7w&s" alt="Penfield" className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHFKnavNAs3hUhillIyW74hlLc2SK6qkd-g&s" alt="Green Invest" className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </section>

                {/* 4. KEY STATS (THE PROOF) */}
                <section className="animate-reveal delay-3 bg-white p-10 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-12">
                  {[
                    { val: t.stats.expValue, lab: t.stats.expLabel },
                    { val: t.stats.dealValue, lab: t.stats.dealLabel },
                    { val: t.stats.fdiValue, lab: t.stats.fdiLabel },
                  ].map((stat, i) => (
                    <div key={i} className="text-center sm:text-left transition-transform hover:-translate-y-2">
                      <h3 className="text-4xl md:text-5xl font-serif text-[#B8905B] mb-3">{stat.val}</h3>
                      <p className="text-[#1A233A] text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{stat.lab}</p>
                    </div>
                  ))}
                </section>

                {/* 5. FORMAL CREDENTIALS */}
                <section className="animate-reveal delay-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-[#1A233A] transition-all">
                    <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                      <div className="text-[#B8905B] scale-125"><Icons.GraduationCap /></div>
                      <h3 className="font-serif text-[#1A233A] text-xl font-medium">{t.profile.eduTitle}</h3>
                    </div>
                    <ul className="space-y-5">
                      {t.profile.eduItems.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-sm text-slate-500 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8905B] mt-1.5 shrink-0 opacity-40"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-[#1A233A] transition-all">
                    <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                      <div className="text-[#B8905B] scale-125"><Icons.Users /></div>
                      <h3 className="font-serif text-[#1A233A] text-xl font-medium">{t.profile.assoTitle}</h3>
                    </div>
                    <ul className="space-y-5">
                      {t.profile.assoItems.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-sm text-slate-500 font-light leading-relaxed">
                          <span className="text-[#B8905B] opacity-60">{idx === 0 ? <Icons.Award /> : <span className="w-1.5 h-1.5 rounded-full bg-[#B8905B] mt-1.5 block"></span>}</span>
                          <span className={idx === 0 ? "font-semibold text-[#1A233A]" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            )}

            {/* TAB 2: TƯ VẤN (ENHANCED CARDS) */}
            {activeTab === 'tab2' && (
              <div className="animate-reveal max-w-5xl space-y-16">
                <section>
                  <h3 className="text-3xl font-serif text-[#1A233A] mb-10">{t.practice.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {['ma', 'finance', 'realEstate', 'dispute'].map((id) => (
                      <div key={id} className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#1A233A] transition-all duration-500 hover:-translate-y-2">
                        <div className="text-[#B8905B] mb-8 transition-transform group-hover:scale-110">
                          {id === 'ma' && <Icons.Briefcase />}
                          {id === 'finance' && <Icons.Building />}
                          {id === 'realEstate' && <Icons.Scale size={32} />}
                          {id === 'dispute' && <Icons.Shield />}
                        </div>
                        <h4 className="text-xl font-serif text-[#1A233A] mb-4">{t.practice[id].title}</h4>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">{t.practice[id].desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-3xl font-serif text-[#1A233A] mb-10">{t.cases.title}</h3>
                  <div className="space-y-4">
                    {t.cases.list.map((caseItem, idx) => (
                      <div key={idx} className="group flex flex-col sm:flex-row sm:items-center justify-between p-7 bg-white border border-slate-200 rounded-2xl hover:border-[#1A233A] transition-all duration-300">
                        <div className="flex items-center gap-5 mb-4 sm:mb-0">
                          <div className="text-slate-300 group-hover:text-[#B8905B] transition-colors"><Icons.ArrowRight /></div>
                          <p className="font-medium text-[#1A233A] text-[1rem]">{caseItem.title}</p>
                        </div>
                        <span className="inline-block px-5 py-2 bg-[#1A233A] text-[#B8905B] text-[11px] font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
                          {caseItem.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-[#1A233A] rounded-[3rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B8905B]/10 to-transparent"></div>
                  <div className="relative z-10">
                    <span className="text-[#B8905B] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">{t.practice.ctaSubTitle}</span>
                    <h4 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                      {t.practice.ctaTitle}
                    </h4>
                    <p className="text-slate-300 font-light max-w-2xl mx-auto mb-12">
                      {t.practice.ctaText}
                    </p>
                    <a href="https://zalo.me/0911553686" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-4 bg-[#B8905B] text-white px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-[#1A233A] transition-all shadow-xl hover:scale-105 active:scale-95">
                      <Icons.MessageCircle /> 
                      <span>{t.practice.ctaBtn}</span>
                    </a>
                    <p className="mt-8 text-[11px] text-slate-500 italic">{t.practice.ctaNote}</p>
                  </div>
                </section>
              </div>
            )}

            {/* TAB 3: DIỄN GIẢ (PROFESSIONAL LISTS) */}
            {activeTab === 'tab3' && (
              <div className="animate-reveal max-w-4xl space-y-16">
                <section>
                  <h3 className="text-3xl md:text-[2.75rem] font-serif text-[#1A233A] mb-8">{t.speaker.title}</h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-3xl mb-12">
                    {t.speaker.desc}
                  </p>

                  <div className="grid gap-12">
                    {/* Teaching */}
                    <div>
                      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-5">
                        <div className="text-[#B8905B]"><Icons.GraduationCap /></div>
                        <h4 className="text-xl font-serif text-[#1A233A]">{t.speaker.teachingTitle}</h4>
                      </div>
                      <div className="space-y-6">
                        {t.speaker.teachingItems.map((item, idx) => (
                          <div key={idx} className="flex gap-6 bg-white p-8 rounded-3xl border border-slate-200 items-start hover:border-[#1A233A] transition-all">
                            <div className="text-[#B8905B] mt-1 shrink-0"><Icons.ArrowRight /></div>
                            <p className="text-[#334155] leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Events */}
                    <div>
                      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-5">
                        <div className="text-[#B8905B]"><Icons.Users /></div>
                        <h4 className="text-xl font-serif text-[#1A233A]">{t.speaker.eventTitle}</h4>
                      </div>
                      <div className="bg-white/50 p-16 rounded-[3rem] border-2 border-dashed border-slate-200 flex items-center justify-center text-center">
                        <p className="text-slate-400 italic tracking-[0.1em]">{t.speaker.eventItems[0]}</p>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200 text-center shadow-sm">
                  <p className="text-slate-500 font-light mb-8">{t.speaker.contactText}</p>
                  <a href="mailto:hoant@paxlaw.vn" className="inline-flex items-center justify-center gap-4 bg-[#1A233A] text-white px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase rounded-full hover:bg-[#B8905B] transition-all shadow-lg">
                    <Icons.Mail /> {t.speaker.contactBtn}
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
