import React, { useState } from "react";


const dict = {
  vi: {
    nav: {
      logoSub: "Luật sư & Cố vấn",
    },
    hero: {
      name: "Nguyễn Thị Hoa",
      role1: "Giám Đốc",
      role2: "Luật sư điều hành tại Paxlaw",
    },
    socials: {
      linkedin: "LinkedIn",
      facebook: "Facebook",
      email: "Email",
      phone: "Gọi",
    },
    tabs: {
      tab1: "Giới thiệu",
      tab2: "Luật sư tư vấn",
      tab3: "Diễn giả sự kiện",
    },
    summary: {
      hook: "Chuyên gia Cấu trúc Đầu tư & Quản trị Rủi ro pháp lý.",
      intro:
        "Với hơn 15 năm kinh nghiệm, Luật sư Nguyễn Thị Hoa cung cấp định hướng pháp lý chiến lược cho các dự án đầu tư quy mô lớn, giải quyết tranh chấp phức tạp và thiết lập khung tuân thủ toàn diện cho hệ thống Ngân hàng, Tài chính và Bất động sản.",
      bullet1Title: "Năng lực Cốt lõi",
      bullet1Desc:
        "Chuyên sâu tư vấn Doanh nghiệp, M&A và Tái cấu trúc tài chính. Sở hữu thế mạnh đặc biệt trong việc thiết kế khung pháp lý cho hoạt động quản lý ngoại hối và thanh toán quốc tế.",
      bullet2Title: "Giao dịch Xuyên biên giới",
      bullet2Desc:
        "Bề dày thành tích phối hợp cùng các tổ chức đa quốc gia, cấu trúc thành công các thương vụ cho nhà đầu tư từ Mỹ, Châu Âu, Nhật Bản, Hàn Quốc, Singapore, Hong Kong, Đài Loan và Nga.",
      bullet3Title: "Lợi thế Lãnh đạo",
      bullet3Desc:
        "Sự kết hợp hoàn hảo giữa góc nhìn tư vấn của Luật sư điều hành (Paxlaw, Penfield) và tư duy thực chiến của Giám đốc Pháp chế (Techcombank, Green Invest).",
    },
    stats: {
      expValue: "15+",
      expLabel: "Năm kinh nghiệm",
      dealValue: "10.000+ Tỷ",
      dealLabel: "Tổng giá trị giao dịch",
      fdiValue: "10+",
      fdiLabel: "Quốc gia đối tác",
    },
    practice: {
      title: "Lĩnh vực tư vấn chuyên sâu",
      ma: {
        title: "M&A - Tái cấu trúc",
        desc: "Tư vấn cấu trúc giao dịch, thực hiện thủ tục mua bán, sáp nhập và tái cấu trúc tài chính doanh nghiệp toàn diện.",
      },
      finance: {
        title: "Tài chính - Ngân hàng",
        desc: "Tư vấn phát hành trái phiếu, xử lý nợ quá hạn nước ngoài, thiết lập khung pháp lý quản lý ngoại hối.",
      },
      realEstate: {
        title: "Đầu tư Bất động sản",
        desc: "Tư vấn phát triển dự án bất động sản nghỉ dưỡng, khu đô thị từ giai đoạn chuẩn bị đến vận hành.",
      },
      dispute: {
        title: "Giải quyết Tranh chấp",
        desc: "Soạn thảo hợp đồng thương mại phức tạp và đại diện giải quyết các tranh chấp thầu xây dựng quy mô lớn.",
      },
      ctaSubTitle: "Kết nối trực tiếp",
      ctaTitle: "Đánh giá rủi ro & định hướng chuyên sâu",
      ctaText: "Đánh giá rủi ro và nhận định hướng pháp lý chuyên sâu:",
      ctaBtn: "Liên Hệ Đặt Lịch",
      ctaNote:
        "(Bộ phận thư ký sẽ tiếp nhận, bảo mật thông tin và xếp lịch với Luật sư)",
    },
    cases: {
      title: "Vụ việc tiêu biểu",
      c1: {
        title: "Thương vụ M&A Nhà máy thép",
        result: "Giá trị giao dịch 1.000 tỷ VNĐ",
      },
      c2: {
        title: "Tái cấu trúc Tập đoàn Khoáng sản",
        result: "Tổng vốn tái cấu trúc hơn 1.000 tỷ VNĐ",
      },
      c3: {
        title: "Chuyển nhượng Resort Bãi Dài",
        result: "Giá trị giao dịch 1.600 tỷ VNĐ",
      },
    },
    speaker: {
      title: "Diễn giả & Đào tạo doanh nghiệp",
      desc: "Luật sư Hoa thường xuyên được mời làm diễn giả tại các diễn đàn pháp lý, hội nghị đầu tư và trực tiếp đào tạo nội bộ cho các Tập đoàn, Tổng công ty lớn.",
      items: ["Đang cập nhật..."],
      contactText:
        "Để mời diễn giả cho sự kiện pháp lý hoặc đào tạo doanh nghiệp:",
      contactBtn: "Gửi Email Liên Hệ",
    },
  },
  en: {
    nav: {
      logoSub: "Attorney & Counsel",
    },
    hero: {
      name: "Hoa Nguyen",
      role1: "CEO",
      role2: "Managing Attorney at Paxlaw",
    },
    socials: {
      linkedin: "LinkedIn",
      facebook: "Facebook",
      email: "Email",
      phone: "Call Now",
    },
    tabs: {
      tab1: "Introduction",
      tab2: "Legal Practice",
      tab3: "Speaking Events",
    },
    summary: {
      hook: "Risk management and investment structuring expert.",
      intro:
        "With over 15 years of experience, Attorney Hoa Nguyen provides strategic legal guidance for large-scale investment projects, complex dispute resolution, and regulatory compliance across the Banking, Finance, and Real Estate sectors.",
      bullet1Title: "Core Competencies",
      bullet1Desc:
        "Corporate advisory, M&A, and financial restructuring. Highly proficient in designing legal frameworks for financial activities, FX management, and cross-border payments.",
      bullet2Title: "Cross-Border Transactions",
      bullet2Desc:
        "Proven ability to coordinate with multinational teams, delivering measurable outcomes for investors from the US, Europe, Japan, Korea, Singapore, Hong Kong, Taiwan, and Russia.",
      bullet3Title: "Executive Leadership",
      bullet3Desc:
        "A unique blend of experience as a Managing Partner (Paxlaw, Penfield) and In-house Legal Head (Techcombank, Green Investment).",
    },
    stats: {
      expValue: "15+",
      expLabel: "Years Experience",
      dealValue: "$500M+",
      dealLabel: "Total Deal Value",
      fdiValue: "10+",
      fdiLabel: "Partner Countries",
    },
    practice: {
      title: "Core Practice Areas",
      ma: {
        title: "M&A - Restructuring",
        desc: "Advising on deal structures, executing mergers, acquisitions, and comprehensive corporate financial restructuring.",
      },
      finance: {
        title: "Banking - Finance",
        desc: "Advising on bond issuance, structuring overseas overdue loans, and establishing FX management legal frameworks.",
      },
      realEstate: {
        title: "Real Estate Investment",
        desc: "Legal development of resort and urban real estate projects from investment preparation to handover and operation.",
      },
      dispute: {
        title: "Dispute Resolution",
        desc: "Drafting complex commercial contracts and representing clients in large-scale EPC contract disputes.",
      },
      ctaSubTitle: "Direct Connection",
      ctaTitle: "Risk Assessment & Legal Strategy",
      ctaText: "Assess risks and receive in-depth legal strategies:",
      ctaBtn: "Book an Appointment",
      ctaNote:
        "(The Secretariat will securely receive your request and schedule with the Attorney)",
    },
    cases: {
      title: "Highlight Deals",
      c1: {
        title: "Steel Factory M&A Transaction",
        result: "Deal value 1,000 billion VND",
      },
      c2: {
        title: "Mineral Corporation Restructuring",
        result: "Restructuring capital over 1,000 billion VND",
      },
      c3: {
        title: "Bai Dai Resort Project Transfer",
        result: "Deal value 1,600 billion VND",
      },
    },
    speaker: {
      title: "Speaking Events & Corporate Training",
      desc: "Attorney Hoa is frequently invited as a guest speaker at legal forums, investment conferences, and conducts internal training for large corporations.",
      items: ["Pending update..."],
      contactText:
        "To invite Attorney Hoa for legal events or corporate training:",
      contactBtn: "Send Email Request",
    },
  },
};

// --- ICONS ---
const strokeW = "1.5";
const Icons = {
  LinkedIn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  Mail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  Scale: ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  ),
  Building: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
  Briefcase: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Shield: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Globe: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Calendar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  MessageCircle: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  ),
};

export default function App() {
  const [lang, setLang] = useState("vi");
  const [activeTab, setActiveTab] = useState("tab1");
  const t = dict[lang];

  const toggleLang = () => setLang((prev) => (prev === "vi" ? "en" : "vi"));

  return (
    <div className="bg-[#F6F5F2] font-sans text-slate-800 selection:bg-[#1A233A] selection:text-white">
      <style>{`
        .hide-scroll::-webkit-scrollbar { width: 4px; }
        .hide-scroll::-webkit-scrollbar-track { background: transparent; }
        .hide-scroll::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .hide-scroll::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-tab { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>

      {/* --- SPLIT SCREEN LAYOUT: Khóa cứng chiều cao 100dvh để hoạt động như một App --- */}
      <div className="flex flex-col md:flex-row w-full h-[100dvh] overflow-hidden bg-[#1A233A]">
        {/* === LEFT PANEL: IMAGE & CONTACT INFO === */}
        <div className="relative w-full h-[42dvh] md:h-full md:w-[40%] lg:w-[45%] shrink-0">
          <img
            src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png"
            alt="Lawyer Portrait"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlays: Làm dịu ánh sáng gắt, tăng sự gắn kết với nền */}
          <div className="absolute inset-0 bg-[#1A233A]/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A233A] via-[#1A233A]/60 to-transparent md:from-[#1A233A] md:via-[#1A233A]/80 md:to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1A233A]/80 to-transparent"></div>

          {/* === TOP BAR: 4 LIÊN HỆ ĐỒNG NHẤT BỐ CỤC LỀ TRÁI === */}
          <div className="absolute top-0 left-0 w-full p-4 md:p-8 lg:p-12 flex flex-nowrap items-center justify-start gap-2 md:gap-3 z-10 animate-tab overflow-x-auto hide-scroll">
            {/* 1. LINKEDIN */}
            <a
              href="https://vn.linkedin.com/in/lawyerhoanguyen"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="flex items-center justify-center w-10 h-10 md:w-auto md:px-5 gap-2.5 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white hover:text-[#1A233A] transition-all duration-300 rounded-full group shadow-sm"
            >
              <Icons.LinkedIn />
              <span className="hidden lg:inline text-[11px] font-semibold tracking-widest uppercase">
                {t.socials.linkedin}
              </span>
            </a>

            {/* 2. FACEBOOK */}
            <a
              href="https://www.facebook.com/Paxlaw.vn?locale=vi_VN"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="flex items-center justify-center w-10 h-10 md:w-auto md:px-5 gap-2.5 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white hover:text-[#1A233A] transition-all duration-300 rounded-full group shadow-sm"
            >
              <Icons.Facebook />
              <span className="hidden lg:inline text-[11px] font-semibold tracking-widest uppercase">
                {t.socials.facebook}
              </span>
            </a>

            {/* 3. EMAIL */}
            <a
              href="mailto:hoant@paxlaw.vn"
              title="Email"
              className="flex items-center justify-center w-10 h-10 md:w-auto md:px-5 gap-2.5 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white hover:text-[#1A233A] transition-all duration-300 rounded-full group shadow-sm"
            >
              <Icons.Mail />
              <span className="hidden lg:inline text-[11px] font-semibold tracking-widest uppercase">
                {t.socials.email}
              </span>
            </a>

            {/* 4. PHONE */}
            <a
              href="tel:+84911553686"
              title="Hotline"
              className="flex items-center justify-center w-10 h-10 md:w-auto md:px-5 gap-2.5 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#B8905B] hover:border-[#B8905B] text-white hover:text-[#1A233A] transition-all duration-300 rounded-full group shadow-sm"
            >
              <Icons.Phone />
              <span className="hidden lg:inline text-[11px] font-bold tracking-widest uppercase">
                {t.socials.phone}
              </span>
            </a>
          </div>

          {/* Tên và Chức danh ở dưới cùng */}
          <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 lg:p-12 text-white flex flex-col justify-end items-start animate-tab">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-1 md:mb-3 text-[#F6F5F2] drop-shadow-lg leading-tight pr-4 break-words">
              {t.hero.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[9px] md:text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] mb-1 md:mb-4 drop-shadow">
              <span className="text-white/90">{t.hero.role1}</span>
              <span className="hidden sm:block text-[#B8905B]/50">|</span>
              <span className="text-[#B8905B]">{t.hero.role2}</span>
            </div>
          </div>
        </div>

        {/* === RIGHT PANEL: TABS & CONTENT === */}
        <div className="flex-1 flex flex-col h-[58dvh] md:h-full overflow-hidden bg-[#F6F5F2] rounded-t-3xl md:rounded-none -mt-4 md:mt-0 relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] md:shadow-none">
          {/* --- STICKY TABS HEADER --- */}
          <div className="shrink-0 bg-white border-b border-slate-200 px-5 md:px-8 lg:px-12 pt-4 md:pt-6 lg:pt-10 z-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-end rounded-t-3xl md:rounded-none">
            {/* Tabs List (Cho phép cuộn ngang trên điện thoại) */}
            <div className="flex gap-5 md:gap-8 lg:gap-12 overflow-x-auto hide-scroll flex-1 pr-4 md:pr-8">
              {["tab1", "tab2", "tab3"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 md:pb-4 text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase tracking-widest transition-all duration-300 relative outline-none whitespace-nowrap shrink-0
                    ${activeTab === tab ? "text-[#1A233A]" : "text-slate-400 hover:text-slate-600"}`}
                >
                  {t.tabs[tab]}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#B8905B] transition-transform duration-300 origin-left 
                      ${activeTab === tab ? "scale-x-100" : "scale-x-0"}`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Nút Ngôn ngữ (Cố định góc phải) */}
            <div className="pb-2 md:pb-3 pl-3 md:pl-4 shrink-0 border-l border-slate-200">
              <button
                onClick={toggleLang}
                className="flex items-center justify-center gap-1.5 h-8 px-3 md:h-10 md:px-5 bg-[#1A233A] text-white hover:bg-[#B8905B] hover:text-[#1A233A] transition-all duration-300 rounded-full shadow-md hover:shadow-lg border border-[#1A233A] hover:border-[#B8905B]"
              >
                <Icons.Globe />
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mt-[1px]">
                  {lang === "vi" ? "EN" : "VI"}
                </span>
              </button>
            </div>
          </div>

          {/* --- SCROLLABLE CONTENT AREA (Khu vực cuộn nội dung độc lập) --- */}
          <div className="flex-1 overflow-y-auto hide-scroll p-5 md:p-8 lg:p-12 pb-12 bg-white/50">
            {/* TAB 1: GIỚI THIỆU */}
            {activeTab === "tab1" && (
              <div className="animate-tab max-w-3xl">
                {/* Intro Hook */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A233A] leading-tight mb-4 md:mb-6">
                  {t.summary.hook}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 font-light leading-relaxed mb-6 md:mb-10">
                  {t.summary.intro}
                </p>

                {/* Bullets */}
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                  <div className="border-l-2 border-[#B8905B] pl-4 md:pl-5">
                    <h4 className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-[#1A233A] mb-1 md:mb-2">
                      {t.summary.bullet1Title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 font-light leading-relaxed">
                      {t.summary.bullet1Desc}
                    </p>
                  </div>
                  <div className="border-l-2 border-[#B8905B] pl-4 md:pl-5">
                    <h4 className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-[#1A233A] mb-1 md:mb-2">
                      {t.summary.bullet2Title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 font-light leading-relaxed">
                      {t.summary.bullet2Desc}
                    </p>
                  </div>
                  <div className="border-l-2 border-[#B8905B] pl-4 md:pl-5">
                    <h4 className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-[#1A233A] mb-1 md:mb-2">
                      {t.summary.bullet3Title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 font-light leading-relaxed">
                      {t.summary.bullet3Desc}
                    </p>
                  </div>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-5 md:gap-6 mb-8 md:mb-12">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIdCgyjPpeiTDv0BrLrz6rqtm-Db7Cq3gTQ&s"
                    alt="Paxlaw"
                    className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExxae_4L6FCMvq6EsOVn9VHzX9RDYrXMRrA&s"
                    alt="Techcombank"
                    className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgZN0vRbNUkX6vz-bfm8JcH7Wrhxscgkc7w&s"
                    alt="Penfield"
                    className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHFKnavNAs3hUhillIyW74hlLc2SK6qkd-g&s"
                    alt="Green Investment"
                    className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1A233A] mb-1">
                      {t.stats.expValue}
                    </h3>
                    <p className="text-slate-400 text-[9px] md:text-[10px] font-semibold uppercase tracking-widest">
                      {t.stats.expLabel}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1A233A] mb-1">
                      {t.stats.dealValue}
                    </h3>
                    <p className="text-slate-400 text-[9px] md:text-[10px] font-semibold uppercase tracking-widest">
                      {t.stats.dealLabel}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1A233A] mb-1">
                      {t.stats.fdiValue}
                    </h3>
                    <p className="text-slate-400 text-[9px] md:text-[10px] font-semibold uppercase tracking-widest">
                      {t.stats.fdiLabel}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LUẬT SƯ TƯ VẤN */}
            {activeTab === "tab2" && (
              <div className="animate-tab max-w-4xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#1A233A] mb-4 md:mb-6 border-b border-slate-200 pb-3 md:pb-4">
                  {t.practice.title}
                </h3>

                {/* Practice Areas Grid - Căn chỉnh padding và viền chuẩn Premium Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
                  {[
                    { id: "ma", icon: <Icons.Briefcase /> },
                    { id: "finance", icon: <Icons.Building /> },
                    { id: "realEstate", icon: <Icons.Scale size={24} /> },
                    { id: "dispute", icon: <Icons.Shield /> },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 md:p-8 rounded-[20px] border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#B8905B]/40 transition-all duration-300 flex flex-col"
                    >
                      <div className="text-[#B8905B] mb-4 md:mb-5 transform scale-110 origin-left">
                        {item.icon}
                      </div>
                      <h4 className="text-lg md:text-xl font-serif text-[#1A233A] mb-3 leading-snug">
                        {t.practice[item.id].title}
                      </h4>
                      <p className="text-slate-500 text-sm font-light leading-relaxed">
                        {t.practice[item.id].desc}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#1A233A] mb-4 md:mb-6 border-b border-slate-200 pb-3 md:pb-4">
                  {t.cases.title}
                </h3>

                {/* Highlight Cases List */}
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-slate-100 rounded-xl hover:border-slate-200 transition-colors"
                    >
                      <div className="flex items-center gap-3.5 mb-3 sm:mb-0">
                        <div className="text-[#B8905B]">
                          <Icons.Check />
                        </div>
                        <p className="font-medium text-[#1A233A] text-sm md:text-base">
                          {t.cases[`c${num}`].title}
                        </p>
                      </div>
                      <div className="sm:text-right pl-8 sm:pl-0">
                        <span className="inline-block px-3 py-1.5 bg-[#F6F5F2] text-[#B8905B] text-[10px] md:text-xs font-semibold tracking-widest uppercase rounded-md">
                          {t.cases[`c${num}`].result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to action for legal consultation - Thẻ liên hệ kết hợp Zalo */}
                <div className="bg-[#1A233A] text-white p-6 md:p-8 lg:p-10 rounded-3xl text-center mb-6 shadow-[0_10px_30px_rgba(26,35,58,0.2)] border border-[#B8905B]/20">
                  <p className="text-base md:text-lg lg:text-xl font-serif text-[#F6F5F2] mb-5 md:mb-6">
                    {t.practice.ctaText}
                  </p>

                  <div className="flex flex-col items-center">
                    <a
                      href="https://zalo.me/0911553686"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#B8905B] text-[#1A233A] px-7 py-3.5 md:px-10 md:py-4 text-[11px] md:text-xs lg:text-sm font-black tracking-widest uppercase rounded-2xl hover:bg-white hover:text-[#1A233A] transition-all duration-300 w-full sm:w-auto shadow-[0_4px_15px_rgba(184,144,91,0.3)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
                    >
                      <Icons.MessageCircle /> {t.practice.ctaBtn}
                    </a>
                    <span className="mt-4 text-[10px] md:text-[11px] text-gray-400 font-light italic opacity-80 max-w-[250px] md:max-w-none">
                      {t.practice.ctaNote}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DIỄN GIẢ SỰ KIỆN */}
            {activeTab === "tab3" && (
              <div className="animate-tab max-w-3xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A233A] mb-4 md:mb-6">
                  {t.speaker.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 font-light leading-relaxed mb-6 md:mb-10">
                  {t.speaker.desc}
                </p>

                <div className="space-y-3 md:space-y-6 mb-10 md:mb-16">
                  {t.speaker.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 md:gap-4 bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm"
                    >
                      <div className="text-[#B8905B] mt-1 shrink-0">
                        <Icons.ArrowRight />
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Call to action for speaking */}
                <div className="bg-[#1A233A] text-white p-6 md:p-8 lg:p-10 rounded-3xl text-center mb-6">
                  <p className="text-sm md:text-base lg:text-lg font-light mb-4 md:mb-6">
                    {t.speaker.contactText}
                  </p>
                  <a
                    href="mailto:hoant@paxlaw.vn"
                    className="inline-flex items-center justify-center gap-2 bg-[#B8905B] text-[#1A233A] px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs lg:text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-white transition-colors w-full sm:w-auto"
                  >
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
