import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck, BookOpen, Globe,
  MapPin, Flag, Rocket, Crown, Network, User, HandHeart, CheckCircle, ArrowRight
} from 'lucide-react';

/* =========================================
   1. DICTIONARY (DỮ LIỆU ĐA NGỮ)
========================================= */

const dict = {
  vi: {
    nav: ['Tổng quan', 'Chuyên môn', 'Dấu ấn'],
    hero: {
      subtitle: "LUẬT SƯ ĐIỀU HÀNH & CỐ VẤN CẤP CAO",
      quote: `"Global Mind, Silk Touch."`,
      desc: "Pháp luật là không gian kiến tạo lợi thế cho doanh nghiệp",
      contactBtn: "Liên hệ ngay"
    },
    profile: {
      title: "Tổng quan & Hành trình",
      subtitle: "Luật sư Nguyễn Thị Hoa",
      desc1: "Dưới lăng kính của một người trực tiếp gắn bó với nhịp đập kinh doanh, tôi chưa bao giờ coi hành lang pháp lý là những rào cản khô khan. Đi qua nhiều thăng trầm cùng các nhà sáng lập, tôi càng thấm thía giá trị của sự bảo vệ từ sớm.",
      desc2: "Khi pháp luật được thấu hiểu và vận dụng linh hoạt, chúng không chỉ là ranh giới đúng - sai, mà là bệ phóng vững chắc, chiếc la bàn dẫn lối cho mọi chiến lược tăng trưởng bền vững."
    },
    stats: [
      { value: "15+", label: "Năm Kinh Nghiệm" },
      { value: "50+", label: "Quốc Gia Đối Tác" }
    ],
    highlights: [
      {
        title: "Học vấn & Đào tạo",
        icon: GraduationCap,
        items: [
          "Thạc sĩ Chính sách & Luật Thương mại Quốc tế (ĐH Ngoại Thương)",
          "Cử nhân Luật Thương mại (ĐH Luật Hà Nội)",
          "Khóa đào tạo Nghiệp vụ Luật sư – Học viện Tư pháp"
        ]
      },
      {
        title: "Giảng dạy & Đào tạo",
        icon: BookOpen,
        items: [
          "Giảng viên thỉnh giảng Luật Ngân hàng – Đại học Thành Đông",
          "Chuyên gia đào tạo nội bộ Quản lý ngoại hối tại Techcombank"
        ]
      },
      {
        title: "Chứng chỉ & Tổ chức",
        icon: Award,
        items: [
          "Thành viên Đoàn Luật sư TP Hà Nội (LĐLS Việt Nam)",
          "Chứng chỉ hành nghề Quản tài viên",
          "Chứng chỉ Đại diện Sở hữu Công nghiệp"
        ]
      }
    ],
    career: {
      title: "Sự nghiệp thực chiến"
    },
    timelineData: [
      { period: "12/2024 - Nay", role: "Luật sư Sáng lập & Điều hành", company: "Paxlaw", desc: "Cung cấp giải pháp pháp chế thuê ngoài (Paxflow) trọn gói về M&A và đầu tư." },
      { period: "2022 - Nay", role: "Giám đốc Pháp chế", company: "Green Investment JSC", desc: "Quản trị rủi ro, đảm bảo tuân thủ pháp luật dự án đầu tư và liên doanh." },
      { period: "2018 - 2024", role: "Phó Giám đốc / LS Thành viên", company: "Penfield Law Firm", desc: "Dẫn dắt các thương vụ M&A phức tạp và tái cấu trúc tài chính." },
      { period: "2013 - 2018", role: "Chuyên viên Pháp chế Cấp cao", company: "Techcombank", desc: "Hỗ trợ pháp lý ngoại hối, quản lý vốn phục vụ KHDN bán buôn." }
    ],
    practice: {
      title: "Lĩnh vực hành nghề",
      subtitle: "Chuyên môn Luật sư",
      speakerTitle: "Hoạt động diễn giả"
    },
    practiceAreas: [
      {
        title: "M&A & Tái cấu trúc",
        icon: Building2,
        cases: [
          { text: "Đại diện mua nhà máy sản xuất thép (Miền Bắc) quy mô", highlight: "1.000 tỷ VNĐ." },
          { text: "Cố vấn chuyển nhượng dự án BĐS nghỉ dưỡng Bãi Dài trị giá", highlight: "1.600 tỷ VNĐ." },
          { text: "Tái cấu trúc tài chính Tập đoàn Khoáng sản Thái Nguyên", highlight: "(>1.000 tỷ VNĐ)." },
        ]
      },
      {
        title: "Tài chính - Ngân hàng",
        icon: Landmark,
        cases: [
          { text: "Bảo trợ phát hành trái phiếu dự án tại BR-VT, quy mô", highlight: "800 tỷ VNĐ." },
          { text: "Xử lý khủng hoảng cho 07 gói trái phiếu DN, giá trị", highlight: "500 - 850 tỷ VNĐ/gói." },
          { text: "Thiết kế pháp lý vay & trả nợ nước ngoài", highlight: "(3.5 triệu USD)", suffix: " của Tập đoàn Hà Lan." },
        ]
      },
      {
        title: "Đầu tư quốc tế & BĐS",
        icon: Globe2,
        cases: [
          { text: "Bảo trợ dự án tổ hợp nghỉ dưỡng", highlight: "1000+ Condotel 5 sao", suffix: " tại Nha Trang." },
          { text: "Cố vấn chính sách PPP tại Việt Nam cho Bộ KH&ĐT Hàn Quốc.", highlight: "" },
          { text: "Thiết lập pháp nhân cho tập đoàn FDI từ Mỹ, Nhật, Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Hợp đồng & Tranh chấp",
        icon: ShieldCheck,
        cases: [
          { text: "Chuẩn hóa hợp đồng cung ứng E-commerce (Shopee, Lazada, Tiki).", highlight: "" },
          { text: "Bảo vệ quyền lợi Tập đoàn Xây dựng VN dự án EPC", highlight: "(250 tỷ VNĐ)." },
          { text: "Đại diện Chủ đầu tư tranh chấp thầu xây dựng tại Khánh Hòa", highlight: "(350 tỷ VNĐ)." },
        ]
      }
    ],
    community: {
      title: "Dấu ấn cộng đồng",
      subtitle: "JCI Vietnam",
      jciIntro: "JCI (Junior Chamber International) là tổ chức phi lợi nhuận toàn cầu quy tụ công dân trẻ (18-40). Tại Việt Nam, mạng lưới có 15 chi hội lan tỏa tinh thần phụng sự.",
      leadershipTitle: "Lộ trình kiến tạo giá trị (Roadmap)",
      activityTitle: "Hoạt động tiêu biểu"
    },
    speakerEvents: [
      { year: "2024", title: "Workshop \"Pháp lý thông minh\"", desc: "Trung tâm Khởi nghiệp CSK (ĐHQG)" },
      { year: "2023 - 2025", title: "Dự án \"Shape Your Future\"", desc: "Định hướng nghề luật cho sinh viên" },
      { year: "2024", title: "Cố vấn & Giám khảo SIL", desc: "ĐH Đại Nam - Đổi mới sáng tạo" },
      { year: "2024", title: "Đại biểu Trade Expo, Mumbai", desc: "Xúc tiến giao thương VN - Ấn Độ" }
    ],
    jciLeadership: [
      { year: "2024", title: "GĐ Dự án \"Launch To Leaders\"", desc: "Thiết kế dự án trọng điểm JCI Thanglong. Đạt giải 'The Most Social Impact 2024'.", icon: Rocket },
      { year: "2025", title: "Chủ tịch Sáng lập JCI Grace", desc: "Định vị cộng đồng lãnh đạo trẻ chuẩn mực, lấy phát triển bền vững làm kim chỉ nam.", icon: Crown },
      { year: "2026", title: "Phó Chủ tịch JCI Vietnam", desc: "Điều hành Trụ cột Phát triển Kinh doanh & Khởi nghiệp, thiết lập hành lang an toàn.", icon: Network },
      { year: "Tương lai", title: "Đồng Sáng lập JCI Lawyer", desc: "Khởi xướng mạng lưới chuyên gia pháp lý vươn tầm quốc tế.", icon: Scale },
    ],
    jciActivities: {
      items: [
        { level: "Cấp Chi hội", name: "Đào tạo Pháp lý", desc: "Nghĩ Vững Bước Bền (cùng ĐHQG HN)." },
        { level: "Cấp Chi hội", name: "Giao thương QT", desc: "Hiệp hội DN Tô Châu & Đông Nam Á." },
        { level: "Cấp Quốc gia", name: "NATCON & Let's Meet Up", desc: "Đại hội QG và kết nối DN ASEAN." },
        { level: "Cấp Quốc gia", name: "Rise To Shine 2025", desc: "Vinh danh Top 5 dự án cộng đồng." },
        { level: "Quốc tế", name: "World Congress (Đài Loan)", desc: "Kết nối 4.000+ hội viên tinh hoa." },
        { level: "Quốc tế", name: "ASPAC (Mông Cổ)", desc: "Cơ hội ký kết hợp tác quốc tế (MOU)." }
      ]
    },
    contactInfo: { address: "Tầng 5, số 31A Nguyễn Quốc Trị, Trung Hoà, Cầu Giấy, Hà Nội" }
  },
  en: {
    nav: ['Overview', 'Expertise', 'Impact'],
    hero: {
      subtitle: "MANAGING ATTORNEY & SENIOR COUNSEL",
      quote: `"Global Mind, Silk Touch."`,
      desc: "The law is a framework for creating competitive advantages for businesses.",
      contactBtn: "Contact Me"
    },
    profile: {
      title: "Summary & Journey",
      subtitle: "Atty. Hoa Nguyen",
      desc1: "Through the lens of someone deeply engaged with business, I never view the legal framework as a dry barrier. Having navigated market cycles alongside founders, I appreciate the value of early protection.",
      desc2: "When the law is thoroughly understood, it goes beyond boundaries. It transforms into a solid launchpad and a guiding compass for sustainable growth strategies."
    },
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "50+", label: "Global Partners" }
    ],
    highlights: [
      {
        title: "Education & Training",
        icon: GraduationCap,
        items: [
          "Master of Int. Policy & Commercial Law (Foreign Trade Uni)",
          "Bachelor of Commercial Law (Hanoi Law Uni)",
          "Lawyer Professional Training – Judicial Academy"
        ]
      },
      {
        title: "Teaching & Coaching",
        icon: BookOpen,
        items: [
          "Visiting Lecturer of Banking Law – Thanh Dong Uni",
          "Internal Trainer for FX Management at Techcombank"
        ]
      },
      {
        title: "Certifications",
        icon: Award,
        items: [
          "Member of Hanoi Bar Association",
          "Certified Receiver / Liquidator",
          "Registered Industrial Property Agent"
        ]
      }
    ],
    career: {
      title: "Professional Experience"
    },
    timelineData: [
      { period: "12/2024 - Present", role: "Managing Attorney", company: "Paxlaw", desc: "Comprehensive External General Counsel (PaxFlow) services in M&A." },
      { period: "2022 - Present", role: "Head of Legal", company: "Green Investment JSC", desc: "Risk management, ensuring compliance for investment projects." },
      { period: "2018 - 2024", role: "Deputy Director / Partner", company: "Penfield Law Firm", desc: "Led complex M&A transactions and financial restructuring plans." },
      { period: "2013 - 2018", role: "Senior Legal Counsel", company: "Techcombank", desc: "Legal support for FX and capital management." }
    ],
    practice: {
      title: "Core Competencies",
      subtitle: "Practice Areas",
      speakerTitle: "Speaking Events"
    },
    practiceAreas: [
      {
        title: "M&A & Restructuring",
        icon: Building2,
        cases: [
          { text: "Acquisition of a major steel plant valued at", highlight: "VND 1,000 billion." },
          { text: "Transfer of Bai Dai Resort project valued at", highlight: "VND 1,600 billion." },
          { text: "Financial restructuring plan for Thai Nguyen Mineral Group", highlight: "(>VND 1,000 billion)." },
        ]
      },
      {
        title: "Banking & Finance",
        icon: Landmark,
        cases: [
          { text: "Corporate bond issuance for a real estate project, sized at", highlight: "VND 800 billion." },
          { text: "Crisis resolution for 7 corporate bond issuances", highlight: "(VND 500-850B each)." },
          { text: "Legal frameworks for foreign loans", highlight: "(USD 3.5M)", suffix: " for a Dutch Group." },
        ]
      },
      {
        title: "Investment & Real Estate",
        icon: Globe2,
        cases: [
          { text: "Legal backing for a luxury resort featuring", highlight: "1,000+ Condotels." },
          { text: "PPP Policy Report advisor for Ministry of Finance (South Korea).", highlight: "" },
          { text: "Investment structures for FDI from US, Japan, Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Contracts & Disputes",
        icon: ShieldCheck,
        cases: [
          { text: "Standardized contracts for E-commerce platforms (Shopee, Lazada).", highlight: "" },
          { text: "Represented Construction Group in an EPC dispute", highlight: "(VND 250 billion)." },
          { text: "Project Owner rights in a construction bidding dispute", highlight: "(VND 350 billion)." },
        ]
      }
    ],
    community: {
      title: "Community Impact",
      subtitle: "JCI Vietnam",
      jciIntro: "JCI is a global non-profit organization of active young citizens. In Vietnam, it has grown with 15 chapters instilling a commitment to service.",
      leadershipTitle: "Leadership Roadmap",
      activityTitle: "Featured Activities"
    },
    speakerEvents: [
      { year: "2024", title: "Smart Legal Workshop", desc: "CSK Startup Center (VNU)" },
      { year: "2023 - 2025", title: "Shape Your Future", desc: "Career orientation for students" },
      { year: "2024", title: "Judge for SIL", desc: "Dai Nam University Innovation" },
      { year: "2024", title: "Trade Expo, Mumbai", desc: "Cross-border trade partnerships" }
    ],
    jciLeadership: [
      { year: "2024", title: "Dir. of 'Launch To Leaders'", desc: "Led the initiative to win 'The Most Social Impact JCI Vietnam 2024'.", icon: Rocket },
      { year: "2025", title: "President of JCI Grace", desc: "Fostered a community focused on sustainable development.", icon: Crown },
      { year: "2026", title: "VP of JCI Vietnam", desc: "Managed Business Pillar, applying legal acumen to guide projects.", icon: Network },
      { year: "Future", title: "JCI Lawyer Council", desc: "Initiated an international network of legal experts.", icon: Scale },
    ],
    jciActivities: {
      items: [
        { level: "Local", name: "Legal Training", desc: "Co-organized with VNU." },
        { level: "Local", name: "Int. Trade", desc: "Suzhou Assoc. (China) & SE Asia." },
        { level: "National", name: "NATCON Forum", desc: "Trade bridge between ASEAN businesses." },
        { level: "National", name: "Rise To Shine", desc: "Honored Top 5 community projects." },
        { level: "Intl", name: "World Congress", desc: "Global trade with 4,000+ members." },
        { level: "Intl", name: "ASPAC", desc: "Cultural exchange and MOU signings." }
      ]
    },
    contactInfo: { address: "5th Floor, 31A Nguyen Quoc Tri St, Cau Giay, Hanoi" }
  }
};

/* =========================================
   2. MAIN COMPONENT
========================================= */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('vi');
  const t = dict[lang]; 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#1d6266] selection:text-white"
         style={{ fontFamily: '"AvertaStdCY", "Montserrat", sans-serif' }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Montserrat', sans-serif !important; }
        html { scroll-behavior: smooth; }
        /* Ẩn scrollbar cho timeline nằm ngang */
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img src="https://i.postimg.cc/KzSNJM6K/A-nh-chu-p-Ma-n-hi-nh-2026-04-15-lu-c-10-16-13-SA-removebg-preview.png" alt="Logo" className={`h-10 w-10 mr-3 ${isScrolled ? '' : 'brightness-0 invert'}`} />
             <div>
                <div className={`font-bold text-xl tracking-[0.15em] leading-none ${isScrolled ? 'text-[#1d6266]' : 'text-white'}`}>PAXLAW</div>
                <div className={`text-[9px] font-bold tracking-widest uppercase mt-1 ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>Atty. Hoa Nguyen</div>
             </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {t.nav.map((item, idx) => (
              <button key={idx} onClick={() => scrollTo(['ho-so', 'chuyen-mon', 'cong-dong'][idx])}
                className={`text-[12px] font-bold uppercase tracking-widest hover:text-[#2eb793] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-4 border-l pl-6 border-slate-400/30">
              <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className={`flex items-center text-xs font-bold uppercase tracking-widest hover:opacity-80 ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                <Globe className="w-4 h-4 mr-1" /> {lang === 'vi' ? 'VI' : 'EN'}
              </button>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-800">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 border-t">
            {t.nav.map((item, idx) => (
              <button key={idx} onClick={() => scrollTo(['ho-so', 'chuyen-mon', 'cong-dong'][idx])} className="text-sm font-bold text-slate-700 uppercase tracking-widest w-full py-2">{item}</button>
            ))}
             <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="text-sm font-bold text-[#1d6266] uppercase py-2 flex items-center">
                <Globe className="w-4 h-4 mr-2" /> Ngôn ngữ: {lang === 'vi' ? 'VI' : 'EN'}
             </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (COMPRESSED: Info + Photo + Contacts) --- */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#0a2f30] via-[#0d3a3c] to-[#113a3c] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-center bg-cover mix-blend-overlay" style={{ backgroundImage: "url('https://i.postimg.cc/L8zfbHqn/Paxlaw-template-2.png')" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Cột trái: Thông tin */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
               <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-6">
                 <div className="h-[2px] w-8 bg-[#2eb793]"></div>
                 <span className="text-[#2eb793] font-bold tracking-[0.2em] uppercase text-xs">{t.hero.subtitle}</span>
               </div>
               
               <h1 className="text-5xl md:text-6xl lg:text-[80px] font-extrabold text-white mb-4 tracking-tight leading-none drop-shadow-lg">
                 {lang === 'vi' ? 'Nguyễn Thị Hoa' : 'Hoa Nguyen'}
               </h1>
               
               <p className="text-xl lg:text-2xl text-[#2eb793] font-light italic mb-8">
                 {t.hero.quote}
               </p>
               
               <p className="text-base lg:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                 {t.hero.desc}
               </p>

               {/* Nút Contact Icon Ngang */}
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a href="tel:+84911553686" className="flex items-center px-5 py-3 bg-[#2eb793] text-[#0a2f30] rounded-full font-bold text-sm hover:bg-white transition-colors">
                    <Phone className="w-4 h-4 mr-2" /> +84 911 55 3686
                  </a>
                  <a href="mailto:hoant@paxlaw.vn" className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#0a2f30] transition-colors border border-white/20">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#0a2f30] transition-colors border border-white/20">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#0a2f30] transition-colors border border-white/20">
                    <Facebook className="w-5 h-5" />
                  </a>
               </div>
            </div>

            {/* Cột phải: Ảnh chân dung */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
               <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[420px] lg:w-[400px] lg:h-[480px]">
                 <div className="absolute inset-0 bg-[#2eb793] rounded-3xl transform translate-x-4 translate-y-4 opacity-50 blur-sm"></div>
                 <img 
                   src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                   alt="LS Hoa Nguyen" 
                   className="absolute inset-0 w-full h-full object-cover rounded-3xl border-4 border-white/10 shadow-2xl"
                 />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: HỒ SƠ & SỰ NGHIỆP --- */}
      <section id="ho-so" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center lg:text-left">
             <div className="inline-flex items-center space-x-3 mb-3">
                <div className="h-[2px] w-8 bg-[#1d6266]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#1d6266]">{t.profile.subtitle}</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.profile.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Trái: Giới thiệu, Stats, Học vấn */}
            <div className="lg:col-span-6 flex flex-col space-y-8">
              <div className="text-[15px] text-slate-600 font-light leading-relaxed space-y-4 text-justify">
                <p>{t.profile.desc1}</p>
                <p className="border-l-4 border-[#2eb793] pl-4 font-medium text-slate-800">{t.profile.desc2}</p>
              </div>

              {/* Stats nhỏ gọn */}
              <div className="flex gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {t.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-extrabold text-[#1d6266] mb-1">{stat.value}</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Accordion học vấn (giả lập) / List siêu gọn */}
              <div className="space-y-6">
                {t.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <item.icon className="w-5 h-5 text-[#2eb793] mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">{item.title}</h4>
                      <ul className="space-y-1.5">
                        {item.items.map((li, i) => (
                          <li key={i} className="text-[13.5px] text-slate-600 font-light">• {li}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phải: Timeline sự nghiệp */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center"><Briefcase className="w-5 h-5 mr-2 text-[#2eb793]"/> {t.career.title}</h3>
                <div className="space-y-6">
                  {t.timelineData.map((item, idx) => (
                    <div key={idx} className="relative pl-6 pb-2 border-l-2 border-slate-200 last:border-0 last:pb-0">
                      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[#2eb793]"></div>
                      <span className="text-[11px] font-bold text-[#1d6266] uppercase tracking-wider block mb-1">{item.period}</span>
                      <h4 className="text-[15px] font-bold text-slate-900">{item.role}</h4>
                      <h5 className="text-[12px] font-medium text-slate-500 uppercase mb-2">{item.company}</h5>
                      <p className="text-[13px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: LĨNH VỰC CHUYÊN MÔN --- */}
      <section id="chuyen-mon" className="py-16 lg:py-24 bg-[#0d3a3c] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="mb-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-3">
                <div className="h-[2px] w-8 bg-[#2eb793]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2eb793]">{t.practice.subtitle}</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white">{t.practice.title}</h2>
          </div>

          {/* Grid Chuyên môn (Nhỏ gọn hơn) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {t.practiceAreas.map((area, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center mb-4 border-b border-white/10 pb-4">
                  <area.icon className="w-6 h-6 text-[#2eb793] mr-3" />
                  <h3 className="text-[16px] font-bold text-white tracking-wide">{area.title}</h3>
                </div>
                <ul className="space-y-3">
                  {area.cases.map((c, i) => (
                    <li key={i} className="flex items-start text-[13.5px] font-light text-slate-300">
                      <ChevronRight className="w-4 h-4 text-[#2eb793] shrink-0 mr-1.5 mt-0.5" />
                      <span>{c.text} <span className="font-semibold text-white">{c.highlight}</span> {c.suffix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Speaker Events (Dạng Grid mỏng) */}
          <h3 className="text-xl font-bold text-white flex items-center mb-6"><Mic className="w-5 h-5 text-[#2eb793] mr-2" /> {t.practice.speakerTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {t.speakerEvents.map((event, idx) => (
               <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col">
                  <span className="text-[#2eb793] text-[10px] font-bold uppercase mb-1">{event.year}</span>
                  <h4 className="text-[14px] font-bold text-white mb-1.5">{event.title}</h4>
                  <p className="text-[12px] text-slate-400 font-light">{event.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CỘNG ĐỒNG JCI (NẰM NGANG & GỌN GÀNG) --- */}
      <section id="cong-dong" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-3">
                <div className="h-[2px] w-8 bg-[#1d6266]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#1d6266]">{t.community.subtitle}</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.community.title}</h2>
             <p className="text-[14px] text-slate-600 max-w-3xl mx-auto font-light">{t.community.jciIntro}</p>
          </div>

          {/* --- TIMELINE NẰM NGANG (Không hình ảnh) --- */}
          <div className="mb-20">
            <h3 className="text-xl font-bold text-slate-900 mb-10 text-center">{t.community.leadershipTitle}</h3>
            
            {/* Grid container cho Roadmap ngang */}
            <div className="relative">
               {/* Đường kẻ ngang (Desktop) */}
               <div className="hidden lg:block absolute top-[24px] left-8 right-8 h-[2px] bg-slate-200 z-0"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
                 {t.jciLeadership.map((item, idx) => (
                   <div key={idx} className="flex flex-col items-center lg:items-start bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-slate-100 lg:border-none text-center lg:text-left">
                      {/* Node tròn */}
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-[#1d6266] flex items-center justify-center mb-4 z-10 lg:mx-0 mx-auto">
                        <item.icon className="w-5 h-5 text-[#2eb793]" />
                      </div>
                      <span className="inline-block px-3 py-1 bg-[#1d6266]/10 text-[#1d6266] rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-[15px] font-bold text-slate-900 mb-2 h-auto lg:h-[45px]">{item.title}</h4>
                      <p className="text-[13px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* --- HOẠT ĐỘNG TIÊU BIỂU (Dạng thẻ gọn) --- */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{t.community.activityTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.jciActivities.items.map((act, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#2eb793] transition-colors flex items-start">
                   <CheckCircle className="w-4 h-4 text-[#2eb793] mr-3 mt-1 shrink-0" />
                   <div>
                     <div className="flex items-center gap-2 mb-1">
                       <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase">{act.level}</span>
                       <h5 className="text-[14px] font-bold text-slate-800">{act.name}</h5>
                     </div>
                     <p className="text-[12.5px] text-slate-500 font-light">{act.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER TỐI GIẢN --- */}
      <footer className="bg-[#0a2f30] py-10 relative overflow-hidden z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center">
             <img src="https://i.postimg.cc/KzSNJM6K/A-nh-chu-p-Ma-n-hi-nh-2026-04-15-lu-c-10-16-13-SA-removebg-preview.png" alt="Logo" className="w-10 h-10 mr-4 brightness-0 invert opacity-50" />
             <div>
                <p className="text-[#2eb793] text-[12px] font-bold tracking-[0.1em] uppercase mb-1">PAXLAW &copy; {new Date().getFullYear()}</p>
                <p className="text-white/50 text-[12px] font-light">{t.contactInfo.address}</p>
             </div>
          </div>
          <div className="flex gap-4">
             <a href="tel:+84911553686" className="text-white/50 hover:text-white transition-colors"><Phone className="w-5 h-5"/></a>
             <a href="mailto:hoant@paxlaw.vn" className="text-white/50 hover:text-white transition-colors"><Mail className="w-5 h-5"/></a>
             <a href="https://linkedin.com/in/lawyerhoanguyen" className="text-white/50 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
