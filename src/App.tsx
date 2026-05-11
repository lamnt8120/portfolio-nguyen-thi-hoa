import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck, BookOpen, Globe,
  MapPin, Flag, Rocket, Crown, Network, User, HandHeart, CheckCircle
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
      desc: "Pháp luật là không gian kiến tạo lợi thế cho doanh nghiệp.",
      contactBtn: "Liên hệ ngay",
      scanToConnect: "Quét để kết nối"
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
          "Cử nhân Luật Thương mại (Đại học Luật Hà Nội)",
          "Khóa đào tạo Nghiệp vụ Luật sư – Học viện Tư pháp"
        ]
      },
      {
        title: "Giảng dạy & Đào tạo",
        icon: BookOpen,
        items: [
          "Giảng viên thỉnh giảng Luật Ngân hàng – Đại học Thành Đông",
          "Chuyên gia đào tạo nội bộ Quản lý ngoại hối tại Ngân hàng Techcombank"
        ]
      },
      {
        title: "Chứng chỉ hành nghề & Tổ chức",
        icon: Award,
        items: [
          "Thành viên Đoàn Luật sư TP. Hà Nội (Liên đoàn Luật sư Việt Nam)",
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
      { period: "2018 - 2024", role: "Phó Giám đốc / Luật sư thành viên", company: "Penfield Law Firm", desc: "Dẫn dắt các thương vụ M&A phức tạp và tái cấu trúc tài chính." },
      { period: "2013 - 2018", role: "Chuyên viên Pháp chế Cấp cao", company: "Techcombank", desc: "Hỗ trợ pháp lý ngoại hối, quản lý vốn phục vụ KHDN bán buôn." }
    ],
    practice: {
      title: "Thương vụ & Dự án tiêu biểu",
      subtitle: "Chuyên môn Luật sư",
      speakerTitle: "Hoạt động diễn giả / Kết nối",
      domestic: "Trong nước",
      international: "Quốc tế"
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
      jciIntro: "JCI (Junior Chamber International) là mạng lưới toàn cầu quy tụ gần 200.000 nhà lãnh đạo trẻ tại hơn 100 quốc gia. Tại Việt Nam, mạng lưới đã phát triển mạnh mẽ với 15 chi hội trực thuộc Hội Doanh nhân trẻ Việt Nam (VYEA), không ngừng lan tỏa tinh thần phụng sự và năng lực kiến tạo giá trị bền vững.",
      leadershipTitle: "Lộ trình lãnh đạo",
      activityTitle: "Giá trị kiến tạo"
    },
    networking: {
      domestic: [
        { title: 'Workshop "Pháp lý thông minh, lý tình hợp tác" (2024)', icon: Mic },
        { title: 'Diễn giả Dự án "Shape Your Future" (2023-2025)', icon: User },
        { title: 'Cố vấn & Giám khảo SIL Đại học Đại Nam (2024)', icon: Award },
        { title: 'Hợp tác với hãng luật BNA (chị Dung)', icon: HandHeart }
      ],
      international: [
        { title: 'Đại biểu đoàn Việt Nam Triển lãm Quốc tế Trade Expo, Mumbai (2024)', icon: Flag },
        { title: 'Giao lưu luật sư JCI toàn cầu với đoàn luật sư tại Đào Viên', icon: Globe },
        { title: 'Thăm và giao lưu đối tác tại Đài Loan - Braintrust (Anh Hung Ou Yang)', icon: MapPin },
        { title: 'Giao kết hợp tác với đối tác tại Nhật Bản - Luật sư Yoshio', icon: HandHeart }
      ]
    },
    jciLeadership: [
      { year: "2024", title: "Giám đốc Dự án đầu tiên", desc: 'Dự án "Launch To Leaders".', icon: Rocket },
      { year: "2025", title: "Chủ tịch Sáng lập", desc: "JCI Grace.", icon: Crown },
      { year: "2026", title: "Phó Chủ tịch", desc: "JCI Vietnam.", icon: Network },
      { year: "2024 - Nay", title: "Thành viên Nòng cốt Sáng lập", desc: "Hội đồng Luật gia JCI toàn cầu.", icon: Scale },
    ],
    jciActivities: {
      local: {
        title: "Hoạt động cấp chi hội",
        items: [
          { name: "GUC - Launch To Leader", desc: "Chương trình phát triển năng lực lãnh đạo." },
          { name: "Dòng Chảy Thành Công", desc: "Chuỗi sự kiện kết nối thực tế doanh nghiệp." },
          { name: "Sự kiện giao lưu Hiệp hội DN Tô Châu", desc: "Kết nối doanh nghiệp Trung Quốc với khu vực Đông Nam Á." }
        ]
      },
      national: {
        title: "Hoạt động cấp quốc gia",
        items: [
          { name: "Nghị sự NATCON & NYC (2024 - 2025)", desc: "Tham gia các kỳ họp cấp cao và hoạch định chiến lược." }
        ]
      },
      international: {
        title: "Hoạt động cấp quốc tế",
        items: [
          { name: "Đại biểu JCI Quốc tế", desc: "Tích cực tham gia các kỳ họp và giao thương tại khu vực." }
        ]
      }
    },
    contactInfo: { address: "Tầng 5, số 31A Nguyễn Quốc Trị, Trung Hoà, Cầu Giấy, Hà Nội" },
    footer: {
      desc: "Đồng hành chiến lược, kiến tạo hành lang pháp lý an toàn và lợi thế cạnh tranh bền vững cho doanh nghiệp.",
      linksTitle: "Lĩnh vực chuyên môn",
      contactTitle: "Thông tin liên hệ"
    }
  },
  en: {
    nav: ['Overview', 'Expertise', 'Impact'],
    hero: {
      subtitle: "MANAGING ATTORNEY & SENIOR COUNSEL",
      quote: `"Global Mind, Silk Touch."`,
      desc: "The law is a framework for creating competitive advantages for businesses.",
      contactBtn: "Contact Me",
      scanToConnect: "Scan to connect"
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
        title: "Certifications & Organizations",
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
      title: "Key Transactions & Projects",
      subtitle: "Practice Areas",
      speakerTitle: "Speaking & Networking",
      domestic: "Domestic",
      international: "International"
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
      jciIntro: "JCI (Junior Chamber International) is a global network of nearly 200,000 young leaders across 100+ countries. In Vietnam, the network has grown robustly with 15 chapters under the Vietnam Young Entrepreneurs Association (VYEA), continuously spreading the spirit of service and sustainable value creation.",
      leadershipTitle: "Leadership Roadmap",
      activityTitle: "Featured Activities"
    },
    networking: {
      domestic: [
        { title: 'Workshop "Smart Legal, Collaborative Spirit" (2024)', icon: Mic },
        { title: 'Speaker for "Shape Your Future" Project (2023-2025)', icon: User },
        { title: 'Advisor & Judge for SIL at Dai Nam University (2024)', icon: Award },
        { title: 'Partnership with BNA Law Firm (Ms. Dung)', icon: HandHeart }
      ],
      international: [
        { title: 'Vietnam Delegate at Trade Expo, Mumbai (2024)', icon: Flag },
        { title: 'JCI Global Lawyers Exchange with Taoyuan Bar Assoc.', icon: Globe },
        { title: 'Partner Visit in Taiwan - Braintrust (Mr. Hung Ou Yang)', icon: MapPin },
        { title: 'Partnership with Japan Partner - Lawyer Yoshio', icon: HandHeart }
      ]
    },
    jciLeadership: [
      { year: "2024", title: "First Project Director", desc: "\"Launch To Leaders\" Initiative.", icon: Rocket },
      { year: "2025", title: "Founding President", desc: "JCI Grace.", icon: Crown },
      { year: "2026", title: "Vice President", desc: "JCI Vietnam.", icon: Network },
      { year: "2024 - Present", title: "Core Founding Member", desc: "JCI Global Lawyers Council.", icon: Scale },
    ],
    jciActivities: {
      local: {
        title: "Local Chapter Level",
        items: [
          { name: "GUC - Launch To Leader", desc: "Leadership capacity development program." },
          { name: "Flow of Success", desc: "Practical business networking event series." },
          { name: "Suzhou Business Assoc. Exchange", desc: "Connecting Chinese enterprises with SE Asia." }
        ]
      },
      national: {
        title: "National Level",
        items: [
          { name: "NATCON & NYC Agendas", desc: "Participated in JCI Vietnam high-level meetings (2024 - 2025)." }
        ]
      },
      international: {
        title: "International Level",
        items: [
          { name: "JCI International Delegate", desc: "Actively engaged in regional meetings and trade." }
        ]
      }
    },
    contactInfo: { address: "5th Floor, 31A Nguyen Quoc Tri St, Cau Giay, Hanoi" },
    footer: {
      desc: "Strategic partnership, creating a safe legal corridor and sustainable competitive advantage for businesses.",
      linksTitle: "Practice Areas",
      contactTitle: "Contact Info"
    }
  }
};

/* =========================================
   2. MAIN COMPONENT
========================================= */

const TooltipQR = ({ children, qrUrl, scanText }) => {
  const qrImageSource = qrUrl ? `https://quickchart.io/qr?text=${encodeURIComponent(qrUrl)}&size=200&dark=1d6266` : null;
  return (
    <div className="relative group flex flex-col items-center justify-center">
      {children}
      {qrImageSource && (
        <div className="absolute bottom-full mb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50 w-max flex flex-col items-center pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md p-3 shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl border border-white/40 flex flex-col items-center">
            <img src={qrImageSource} alt={`QR Code`} className="w-32 h-32 object-contain rounded-xl mix-blend-multiply" />
            <p className="text-[9px] uppercase tracking-widest text-[#1d6266] mt-2 font-bold">{scanText}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/95"></div>
          </div>
        </div>
      )}
    </div>
  )
};

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
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#2eb793] selection:text-[#ffffff]"
         style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        * { font-family: 'Montserrat', sans-serif !important; }
        html { scroll-behavior: smooth; }
        /* Ẩn scrollbar cho timeline nằm ngang */
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             <div className="flex items-center">
                <img 
                  src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" 
                  alt="PAXLAW Logo" 
                  className={`h-12 md:h-16 object-contain transition-all duration-300 ${isScrolled ? 'brightness-0 opacity-80' : 'drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`} 
                />
                <div className={`ml-3 md:ml-4 pl-3 md:pl-4 border-l h-10 md:h-12 flex flex-col justify-center transition-colors duration-300 ${isScrolled ? 'border-slate-300' : 'border-white/30'}`}>
                  <span className={`text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase leading-none mb-1.5 transition-colors ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                    {lang === 'vi' ? 'Luật sư' : 'Atty.'}
                  </span>
                  <span className={`text-[14px] md:text-[16px] font-extrabold tracking-widest uppercase leading-none transition-colors ${isScrolled ? 'text-[#1d6266]' : 'text-white'}`}>
                    Nguyễn Hoa
                  </span>
                </div>
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
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className={`h-6 w-6 transition-colors ${isScrolled ? 'text-[#1d6266]' : 'text-white'}`} />}
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

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#1d6266] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-center bg-cover mix-blend-overlay" style={{ backgroundImage: "url('https://i.postimg.cc/L8zfbHqn/Paxlaw-template-2.png')" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
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

               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
                    <a href="tel:+84911553686" className="w-12 h-12 flex items-center justify-center bg-[#2eb793] text-[#1d6266] rounded-full hover:bg-white transition-colors border border-[#2eb793] shadow-lg">
                      <Phone className="w-5 h-5" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
                    <a href="mailto:hoant@paxlaw.vn" className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/20 shadow-lg">
                      <Mail className="w-5 h-5" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
                    <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/20 shadow-lg">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.hero.scanToConnect}>
                    <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/20 shadow-lg">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </TooltipQR>
               </div>
            </div>

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

      {/* --- SECTION 2: HỒ SƠ --- */}
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
            
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div className="text-[15px] text-slate-600 font-light leading-relaxed space-y-4 text-justify">
                <p>{t.profile.desc1}</p>
                <p className="border-l-4 border-[#2eb793] pl-4 font-medium text-slate-800">{t.profile.desc2}</p>
              </div>

              <div className="flex gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {t.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-extrabold text-[#1d6266] mb-1">{stat.value}</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

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

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 h-full">
                <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center"><Briefcase className="w-5 h-5 mr-2 text-[#2eb793]"/> {t.career.title}</h3>
                <div className="space-y-8">
                  {t.timelineData.map((item, idx) => (
                    <div key={idx} className="relative pl-6 pb-2 border-l border-slate-200 last:border-0 last:pb-0 group">
                      <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#2eb793] transition-colors duration-300"></div>
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
      <section id="chuyen-mon" className="py-16 lg:py-24 bg-[#1d6266] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="mb-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-3">
                <div className="h-[2px] w-8 bg-[#2eb793]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2eb793]">{t.practice.subtitle}</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white">{t.practice.title}</h2>
          </div>

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

          <div className="border-t border-white/10 pt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white inline-flex items-center"><Mic className="w-6 h-6 text-[#2eb793] mr-3" /> {t.practice.speakerTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Trong nước */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-[#2eb793] flex items-center mb-6 uppercase tracking-wide"><MapPin className="w-5 h-5 mr-2" /> {t.practice.domestic}</h4>
                <div className="space-y-4">
                  {t.networking.domestic.map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-[#2eb793]/10 hover:border-[#2eb793]/30 transition-all flex items-start group">
                      <item.icon className="w-10 h-10 text-[#2eb793] mr-4 shrink-0 p-2 bg-[#1d6266] rounded-xl group-hover:scale-110 transition-transform" />
                      <h5 className="text-[14.5px] font-medium text-slate-200 leading-snug mt-1 group-hover:text-white transition-colors">{item.title}</h5>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quốc tế */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-[#2eb793] flex items-center mb-6 uppercase tracking-wide"><Globe className="w-5 h-5 mr-2" /> {t.practice.international}</h4>
                <div className="space-y-4">
                  {t.networking.international.map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-[#2eb793]/10 hover:border-[#2eb793]/30 transition-all flex items-start group">
                      <item.icon className="w-10 h-10 text-[#2eb793] mr-4 shrink-0 p-2 bg-[#1d6266] rounded-xl group-hover:scale-110 transition-transform" />
                      <h5 className="text-[14.5px] font-medium text-slate-200 leading-snug mt-1 group-hover:text-white transition-colors">{item.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CỘNG ĐỒNG JCI --- */}
      <section id="cong-dong" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-3">
                <div className="h-[2px] w-8 bg-[#1d6266]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#1d6266]">{t.community.subtitle}</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.community.title}</h2>
             <p className="text-[14px] md:text-[15px] text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">{t.community.jciIntro}</p>
          </div>

          {/* --- TIMELINE NẰM NGANG --- */}
          <div className="mb-24 pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-14 text-center">{t.community.leadershipTitle}</h3>
            
            <div className="relative group/timeline">
               <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[4px] bg-slate-200 rounded-full z-0">
                  <div className="absolute top-0 left-0 h-full w-0 group-hover/timeline:w-full bg-gradient-to-r from-[#1d6266] to-[#2eb793] transition-all duration-1000 ease-in-out rounded-full shadow-[0_0_10px_rgba(46,183,147,0.5)]"></div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                 {t.jciLeadership.map((item, idx) => (
                   <div key={idx} className="flex flex-col items-center group/item relative">
                      <div className="w-14 h-14 rounded-full bg-white border-[4px] border-slate-100 flex items-center justify-center mb-6 z-10 shadow-sm group-hover/item:border-[#2eb793] group-hover/item:shadow-[0_0_20px_rgba(46,183,147,0.4)] group-hover/item:-translate-y-1 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-[#1d6266] group-hover/item:text-[#2eb793] transition-colors" />
                      </div>
                      
                      <div className="bg-white w-full p-6 rounded-2xl border border-slate-100 shadow-sm group-hover/item:shadow-lg group-hover/item:border-[#2eb793]/30 transition-all duration-300 text-center flex-1 relative overflow-hidden group-hover/item:-translate-y-1">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1d6266] to-[#2eb793] transform origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"></div>
                         
                         <span className="inline-block px-3 py-1 bg-[#1d6266]/5 text-[#1d6266] rounded-md text-[11px] font-bold uppercase tracking-widest mb-3">
                           {item.year}
                         </span>
                         <h4 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug">{item.title}</h4>
                         <p className="text-[13px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* --- HOẠT ĐỘNG TIÊU BIỂU --- */}
          <div>
            <div className="flex items-center justify-center border-b border-slate-200 pb-6 mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center">{t.community.activityTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Local */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#2eb793]/40 hover:shadow-[0_20px_50px_-15px_rgba(29,98,102,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden group h-fit">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2eb793]/10 to-transparent rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col items-center mb-8 border-b border-slate-100 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#1d6266] transition-colors duration-500 border border-slate-100 group-hover:border-[#1d6266] shadow-sm transform group-hover:-rotate-3">
                    <MapPin className="w-7 h-7 text-[#1d6266] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-[16px] font-extrabold uppercase tracking-widest text-slate-900 text-center">{t.jciActivities.local.title}</h4>
                </div>

                <div className="space-y-6 relative z-10">
                  {t.jciActivities.local.items.map((item, idx) => (
                    <div key={idx} className="flex items-start group/item">
                      <div className="mt-1.5 mr-4 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1d6266]/30 group-hover/item:bg-[#2eb793] group-hover/item:scale-[2] transition-all duration-300"></div>
                      </div>
                      <div>
                        <h5 className="text-[14px] font-bold text-slate-800 mb-1.5 leading-snug group-hover/item:text-[#1d6266] transition-colors">{item.name}</h5>
                        <p className="text-[13px] font-light leading-relaxed text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* National */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#2eb793]/40 hover:shadow-[0_20px_50px_-15px_rgba(29,98,102,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden group h-fit">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2eb793]/10 to-transparent rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col items-center mb-8 border-b border-slate-100 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#1d6266] transition-colors duration-500 border border-slate-100 group-hover:border-[#1d6266] shadow-sm transform group-hover:-rotate-3">
                    <Flag className="w-7 h-7 text-[#1d6266] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-[16px] font-extrabold uppercase tracking-widest text-slate-900 text-center">{t.jciActivities.national.title}</h4>
                </div>

                <div className="space-y-6 relative z-10">
                  {t.jciActivities.national.items.map((item, idx) => (
                    <div key={idx} className="flex items-start group/item">
                      <div className="mt-1.5 mr-4 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1d6266]/30 group-hover/item:bg-[#2eb793] group-hover/item:scale-[2] transition-all duration-300"></div>
                      </div>
                      <div>
                        <h5 className="text-[14px] font-bold text-slate-800 mb-1.5 leading-snug group-hover/item:text-[#1d6266] transition-colors">{item.name}</h5>
                        <p className="text-[13px] font-light leading-relaxed text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* International */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#2eb793]/40 hover:shadow-[0_20px_50px_-15px_rgba(29,98,102,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden group h-fit">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2eb793]/10 to-transparent rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col items-center mb-8 border-b border-slate-100 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#1d6266] transition-colors duration-500 border border-slate-100 group-hover:border-[#1d6266] shadow-sm transform group-hover:-rotate-3">
                    <Globe className="w-7 h-7 text-[#1d6266] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-[16px] font-extrabold uppercase tracking-widest text-slate-900 text-center">{t.jciActivities.international.title}</h4>
                </div>

                <div className="space-y-6 relative z-10">
                  {t.jciActivities.international.items.map((item, idx) => (
                    <div key={idx} className="flex items-start group/item">
                      <div className="mt-1.5 mr-4 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1d6266]/30 group-hover/item:bg-[#2eb793] group-hover/item:scale-[2] transition-all duration-300"></div>
                      </div>
                      <div>
                        <h5 className="text-[14px] font-bold text-slate-800 mb-1.5 leading-snug group-hover/item:text-[#1d6266] transition-colors">{item.name}</h5>
                        <p className="text-[13px] font-light leading-relaxed text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER TỐI GIẢN --- */}
      <footer className="bg-[#1d6266] py-10 relative z-20 border-t border-[#2eb793]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 text-center md:text-left">
          <div className="flex items-center flex-col md:flex-row gap-4 md:gap-5">
             <div className="flex items-center justify-center">
               <img 
                 src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" 
                 alt="Paxlaw Logo" 
                 className="h-10 md:h-12 object-contain opacity-90"
               />
               <div className="ml-4 pl-4 border-l border-white/30 h-10 flex flex-col justify-center text-left">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase leading-none mb-1 text-white/60">
                    {lang === 'vi' ? 'Luật sư' : 'Atty.'}
                  </span>
                  <span className="text-[12px] md:text-[14px] font-extrabold tracking-widest uppercase leading-none text-[#2eb793]">
                    Nguyễn Hoa
                  </span>
               </div>
             </div>
             <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-5 flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
                <p className="text-white/50 text-[12px] font-light">{t.contactInfo.address}</p>
             </div>
          </div>
          <div className="flex gap-4 md:gap-5">
             <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
               <a href="tel:+84911553686" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Phone className="w-4 h-4"/></a>
             </TooltipQR>
             <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
               <a href="mailto:hoant@paxlaw.vn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Mail className="w-4 h-4"/></a>
             </TooltipQR>
             <TooltipQR qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
               <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Linkedin className="w-4 h-4"/></a>
             </TooltipQR>
             <TooltipQR qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.hero.scanToConnect}>
               <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Facebook className="w-4 h-4"/></a>
             </TooltipQR>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
