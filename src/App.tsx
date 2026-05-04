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
      title: "Tổng Quan & Hành Trình",
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
      title: "Thương vụ & Dự án tiêu biểu",
      subtitle: "Chuyên môn Luật sư",
      speakerTitle: "Hoạt động diễn giả"
    },
    practiceAreas: [
      {
        title: "M&A & Tái Cấu Trúc",
        icon: Building2,
        cases: [
          { text: "Đại diện mua nhà máy sản xuất thép (Miền Bắc) quy mô", highlight: "1.000 tỷ VNĐ." },
          { text: "Cố vấn chuyển nhượng dự án BĐS nghỉ dưỡng Bãi Dài trị giá", highlight: "1.600 tỷ VNĐ." },
          { text: "Tái cấu trúc tài chính Tập đoàn Khoáng sản Thái Nguyên", highlight: "(>1.000 tỷ VNĐ)." },
        ]
      },
      {
        title: "Tài Chính - Ngân Hàng",
        icon: Landmark,
        cases: [
          { text: "Bảo trợ phát hành trái phiếu dự án tại BR-VT, quy mô", highlight: "800 tỷ VNĐ." },
          { text: "Xử lý khủng hoảng cho 07 gói trái phiếu DN, giá trị", highlight: "500 - 850 tỷ VNĐ/gói." },
          { text: "Thiết kế pháp lý vay & trả nợ nước ngoài", highlight: "(3.5 triệu USD)", suffix: " của Tập đoàn Hà Lan." },
        ]
      },
      {
        title: "Đầu Tư Quốc Tế & BĐS",
        icon: Globe2,
        cases: [
          { text: "Bảo trợ dự án tổ hợp nghỉ dưỡng", highlight: "1000+ Condotel 5 sao", suffix: " tại Nha Trang." },
          { text: "Cố vấn chính sách PPP tại Việt Nam cho Bộ KH&ĐT Hàn Quốc.", highlight: "" },
          { text: "Thiết lập pháp nhân cho tập đoàn FDI từ Mỹ, Nhật, Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Hợp Đồng & Tranh Chấp",
        icon: ShieldCheck,
        cases: [
          { text: "Chuẩn hóa hợp đồng cung ứng E-commerce (Shopee, Lazada, Tiki).", highlight: "" },
          { text: "Bảo vệ quyền lợi Tập đoàn Xây dựng VN dự án EPC", highlight: "(250 tỷ VNĐ)." },
          { text: "Đại diện Chủ đầu tư tranh chấp thầu xây dựng tại Khánh Hòa", highlight: "(350 tỷ VNĐ)." },
        ]
      }
    ],
    community: {
      title: "Dấu Ấn Cộng Đồng",
      subtitle: "JCI Vietnam",
      jciIntro: "JCI (Junior Chamber International) là mạng lưới toàn cầu quy tụ gần 200.000 nhà lãnh đạo trẻ tại hơn 100 quốc gia. Tại Việt Nam, mạng lưới đã phát triển mạnh mẽ với 15 chi hội trực thuộc Hội Doanh nhân trẻ Việt Nam (VYEA), không ngừng lan tỏa tinh thần phụng sự và năng lực kiến tạo giá trị bền vững.",
      leadershipTitle: "Lộ trình kiến tạo giá trị",
      activityTitle: "Hoạt động tiêu biểu"
    },
    speakerEvents: [
      { year: "2024", title: "Workshop \"Pháp lý thông minh\"", desc: "Trung tâm Khởi nghiệp CSK (ĐHQG)", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
      { year: "2023 - 2025", title: "Dự án \"Shape Your Future\"", desc: "Định hướng nghề luật cho sinh viên", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
      { year: "2024", title: "Cố vấn & Giám khảo SIL", desc: "ĐH Đại Nam - Đổi mới sáng tạo", img: "https://i.postimg.cc/15g13P4d/SIL.jpg" },
      { year: "2024", title: "Đại biểu Trade Expo, Mumbai", desc: "Xúc tiến giao thương VN - Ấn Độ", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" }
    ],
    jciLeadership: [
      { year: "2024", title: "GĐ Dự án \"Launch To Leaders\"", desc: "Thiết kế dự án trọng điểm JCI Thanglong. Đạt giải 'The Most Social Impact 2024'.", icon: Rocket },
      { year: "2025", title: "Chủ tịch Sáng lập JCI Grace", desc: "Định vị cộng đồng lãnh đạo trẻ chuẩn mực, lấy phát triển bền vững làm kim chỉ nam.", icon: Crown },
      { year: "2026", title: "Phó Chủ tịch JCI Vietnam", desc: "Điều hành Trụ cột Phát triển Kinh doanh & Khởi nghiệp, thiết lập hành lang an toàn.", icon: Network },
      { year: "Tương lai", title: "Đồng Sáng lập JCI Lawyer", desc: "Khởi xướng mạng lưới chuyên gia pháp lý vươn tầm quốc tế.", icon: Scale },
    ],
    jciActivities: {
      local: {
        title: "Cấp Chi Hội",
        items: [
          { name: "Đào tạo Pháp lý \"Nghĩ Vững Bước Bền\"", desc: "Kết hợp cùng Đại học Quốc Gia Hà Nội." },
          { name: "Sự kiện \"Rẽ Sóng Đón Bình Minh\"", desc: "Chương trình kết nối kinh doanh quy mô 200 doanh nhân." },
          { name: "Sự kiện \"Dòng Chảy Thành Công\"", desc: "Thăm và kết nối thực tế tại Công ty nước mặt sông Đuống." },
          { name: "Giao thương Quốc tế (JCI Grace)", desc: "Giao lưu giữa Hiệp hội DN Tô Châu (TQ) và khu vực Đông Nam Á." },
          { name: "Trách nhiệm Xã hội \"Chung lòng mùa bão 2024\"", desc: "Tham gia chiến dịch hỗ trợ đồng bào vùng lũ." },
          { name: "Giải Pickleball Miền Bắc mở rộng", desc: "Đồng tổ chức cùng JCI Hải Phòng và JCI Hà Nội." }
        ]
      },
      national: {
        title: "Cấp Quốc Gia",
        items: [
          { name: "Đại hội Quốc gia (NATCON)", desc: "Tham dự kỳ Đại hội cấp cao. Đắc cử Phó Chủ tịch JCI Vietnam 2026." },
          { name: "Diễn đàn \"Let's meet up Việt Nam\" (2025)", desc: "Xây dựng cầu nối giao thương trực tiếp giữa doanh nghiệp ASEAN." },
          { name: "Sự kiện Rise To Shine 2025", desc: "Vinh danh Top 5 dự án xuất sắc lan tỏa thông điệp JCI RISE." },
          { name: "Đại hội Giữa năm (NYC)", desc: "Tham dự Đại hội Giữa năm (National Mid-Year Convention)." },
          { name: "Học thuật & Đào tạo", desc: "Tốt nghiệp JCI Vietnam Academy (2024, 2025)." },
          { name: "Nâng tầm Kỹ năng", desc: "Đạt chứng nhận Trainer 2 sao tại Train The Trainer 2025." }
        ]
      },
      international: {
        title: "Cấp Quốc Tế",
        items: [
          { name: "JCI World Congress 2024 (Đài Loan)", desc: "Điểm chạm mạng lưới toàn cầu, kết nối với hơn 4.000 hội viên." },
          { name: "JCI ASPAC 2024 & 2025 (Mông Cổ)", desc: "Không gian giao cảm văn hóa, mở ra các cơ hội hợp tác quốc tế." },
          { name: "Giao lưu Quốc tế JCI Việt - Ấn", desc: "Thúc đẩy học hỏi đa văn hóa và hợp tác kinh tế - xã hội." },
          { name: "Ban điều hành JCI ASEAN Senator", desc: "Đại biểu đoàn Việt Nam tham gia nghị sự tại Tô Châu và Sabah." }
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
      title: "Key Transactions & Projects",
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
      jciIntro: "JCI (Junior Chamber International) is a global network of nearly 200,000 young leaders across 100+ countries. In Vietnam, the network has grown robustly with 15 chapters under the Vietnam Young Entrepreneurs Association (VYEA), continuously spreading the spirit of service and sustainable value creation.",
      leadershipTitle: "Leadership Roadmap",
      activityTitle: "Featured Activities"
    },
    speakerEvents: [
      { year: "2024", title: "Smart Legal Workshop", desc: "CSK Startup Center (VNU)", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
      { year: "2023 - 2025", title: "Shape Your Future", desc: "Career orientation for students", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
      { year: "2024", title: "Judge for SIL", desc: "Dai Nam University Innovation", img: "https://i.postimg.cc/15g13P4d/SIL.jpg" },
      { year: "2024", title: "Trade Expo, Mumbai", desc: "Cross-border trade partnerships", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" }
    ],
    jciLeadership: [
      { year: "2024", title: "Dir. of 'Launch To Leaders'", desc: "Led the initiative to win 'The Most Social Impact JCI Vietnam 2024'.", icon: Rocket },
      { year: "2025", title: "President of JCI Grace", desc: "Fostered a community focused on sustainable development.", icon: Crown },
      { year: "2026", title: "VP of JCI Vietnam", desc: "Managed Business Pillar, applying legal acumen to guide projects.", icon: Network },
      { year: "Future", title: "JCI Lawyer Council", desc: "Initiated an international network of legal experts.", icon: Scale },
    ],
    jciActivities: {
      local: {
        title: "Local Chapter Level",
        items: [
          { name: "Legal Training \"Think Solid, Step Steady\"", desc: "Co-organized with Vietnam National University." },
          { name: "\"Turning Waves, Welcoming Dawn\" Event", desc: "Business networking program for 200 entrepreneurs." },
          { name: "\"Flow of Success\" Event", desc: "Field visit and practical networking at Duong River Surface Water Plant." },
          { name: "International Trade (JCI Grace)", desc: "Business exchange: Suzhou Assoc. (China) & SE Asia." },
          { name: "Social Responsibility \"Uniting through the 2024 Storm Season\"", desc: "(Northern JCI Alliance): Participated in the campaign to support flood victims." },
          { name: "Northern Open Pickleball Tournament", desc: "Co-host representative for JCI Thang Long & Grace." }
        ]
      },
      national: {
        title: "National Level",
        items: [
          { name: "National Convention (NATCON)", desc: "Elected as Vice President of JCI Vietnam 2026." },
          { name: "\"Let's meet up Vietnam\" Forum", desc: "Trade bridge between ASEAN businesses & advisors." },
          { name: "\"Rise To Shine 2025\" Gala", desc: "Honored Top 5 outstanding community projects." },
          { name: "National Mid-Year Convention (NYC)", desc: "Attended the Mid-Year Convention in 2024." },
          { name: "Academic & Training", desc: "Graduated from JCI Vietnam Academy (2024, 2025)." },
          { name: "Trainer Certification", desc: "Achieved 2-Star Trainer (Train The Trainer 2025)." }
        ]
      },
      international: {
        title: "International Level",
        items: [
          { name: "JCI World Congress 2024 (Taiwan)", desc: "Global trade connections with 4,000+ elite members." },
          { name: "JCI ASPAC 2024 & 2025 (Mongolia)", desc: "Cultural exchange and international MOU signings." },
          { name: "Vietnam - India JCI Exchange", desc: "Bilateral bridge promoting socio-economic cooperation." },
          { name: "JCI ASEAN Senate Board", desc: "Vietnam delegate contributing to regional strategy." }
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
  const qrImageSource = qrUrl ? `https://quickchart.io/qr?text=${encodeURIComponent(qrUrl)}&size=200&dark=022020` : null;
  return (
    <div className="relative group flex flex-col items-center justify-center">
      {children}
      {qrImageSource && (
        <div className="absolute bottom-full mb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50 w-max flex flex-col items-center pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md p-3 shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl border border-white/40 flex flex-col items-center">
            <img src={qrImageSource} alt={`QR Code`} className="w-32 h-32 object-contain rounded-xl mix-blend-multiply" />
            <p className="text-[9px] uppercase tracking-widest text-[#052b2b] mt-2 font-bold">{scanText}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/95"></div>
          </div>
        </div>
      )}
    </div>
  )
};

const Heading = ({ title, subtitle, light = false }) => (
  <div className="mb-16 flex flex-col items-center text-center">
    <div className="inline-flex items-center space-x-4 mb-5">
      <div className={`h-[1px] w-12 ${light ? 'bg-gradient-to-r from-transparent to-[#00d084]' : 'bg-gradient-to-r from-transparent to-[#0d5959]'}`}></div>
      <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] ${light ? 'text-[#00d084]' : 'text-[#0d5959]'}`}>{subtitle}</span>
      <div className={`h-[1px] w-12 ${light ? 'bg-gradient-to-l from-transparent to-[#00d084]' : 'bg-gradient-to-l from-transparent to-[#0d5959]'}`}></div>
    </div>
    <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight ${light ? 'text-white' : 'text-[#051c1d]'}`}>
      {title}
    </h2>
  </div>
);

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
    <div className="min-h-screen bg-[#F4F7F6] text-slate-800 selection:bg-[#00d084] selection:text-[#021213]"
         style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif !important; }
        html { scroll-behavior: smooth; }
        
        /* Hiệu ứng gradient chữ */
        .text-gradient-gold {
          background: linear-gradient(to right, #D4AF37, #F3E5AB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient-mint {
          background: linear-gradient(to right, #00d084, #8ae6c3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}} />

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             <div className="flex items-center">
                <img 
                  src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" 
                  alt="PAXLAW Logo" 
                  className={`h-10 md:h-12 object-contain transition-all duration-500 ${isScrolled ? 'brightness-0 opacity-85' : 'drop-shadow-md'}`} 
                />
                <div className={`ml-3 md:ml-4 pl-3 md:pl-4 border-l h-8 md:h-10 flex flex-col justify-center transition-colors duration-500 ${isScrolled ? 'border-slate-300' : 'border-white/30'}`}>
                  <span className={`text-[8.5px] md:text-[9.5px] font-bold tracking-[0.25em] uppercase leading-none mb-1.5 transition-colors ${isScrolled ? 'text-slate-400' : 'text-white/60'}`}>
                    {lang === 'vi' ? 'Luật sư' : 'Atty.'}
                  </span>
                  <span className={`text-[13px] md:text-[15px] font-bold tracking-widest uppercase leading-none transition-colors ${isScrolled ? 'text-[#022020]' : 'text-white'}`}>
                    Nguyễn Hoa
                  </span>
                </div>
             </div>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {t.nav.map((item, idx) => (
              <button key={idx} onClick={() => scrollTo(['ho-so', 'chuyen-mon', 'cong-dong'][idx])}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${isScrolled ? 'text-slate-600 hover:text-[#00d084]' : 'text-white/80 hover:text-white'}`}>
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-5 border-l pl-8 border-slate-400/30">
              <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className={`flex items-center text-[10px] font-bold uppercase tracking-widest transition-opacity hover:opacity-70 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
                <Globe className="w-3.5 h-3.5 mr-1.5" /> {lang === 'vi' ? 'VI' : 'EN'}
              </button>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-800">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className={`h-6 w-6 transition-colors ${isScrolled ? 'text-[#022020]' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl py-6 flex flex-col items-center space-y-6 border-t border-slate-100">
            {t.nav.map((item, idx) => (
              <button key={idx} onClick={() => scrollTo(['ho-so', 'chuyen-mon', 'cong-dong'][idx])} className="text-[12px] font-bold text-slate-700 uppercase tracking-[0.2em] w-full">{item}</button>
            ))}
             <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="text-[12px] font-bold text-[#0da37f] uppercase pt-4 border-t border-slate-100 w-1/2 flex items-center justify-center">
                <Globe className="w-4 h-4 mr-2" /> {lang === 'vi' ? 'English' : 'Tiếng Việt'}
             </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#021213] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0f4a45]/40 via-[#021213] to-[#021213]"></div>
           <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#00d084]/10 via-transparent to-transparent"></div>
           <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Content */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
               <div className="inline-flex items-center justify-center lg:justify-start space-x-4 mb-8">
                 <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                 <span className="text-gradient-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                   {t.hero.subtitle}
                 </span>
               </div>
               
               <h1 className="font-serif text-6xl md:text-7xl lg:text-[90px] text-white mb-6 tracking-tight leading-[1.1]">
                 {lang === 'vi' ? 'Nguyễn Thị Hoa' : 'Hoa Nguyen'}
               </h1>
               
               <p className="font-serif text-2xl lg:text-3xl text-white/60 italic mb-10 font-light">
                 {t.hero.quote}
               </p>
               
               <p className="text-[15px] lg:text-[17px] text-white/50 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
                 {t.hero.desc}
               </p>

               {/* Elegant Contact Icons */}
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
                  <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
                    <a href="tel:+84911553686" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00d084] text-[#021213] hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(0,208,132,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                      <Phone className="w-[18px] h-[18px]" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
                    <a href="mailto:hoant@paxlaw.vn" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#021213] transition-all duration-500 hover:-translate-y-1">
                      <Mail className="w-[18px] h-[18px]" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
                    <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#021213] transition-all duration-500 hover:-translate-y-1">
                      <Linkedin className="w-[18px] h-[18px]" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.hero.scanToConnect}>
                    <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#021213] transition-all duration-500 hover:-translate-y-1">
                      <Facebook className="w-[18px] h-[18px]" />
                    </a>
                  </TooltipQR>
               </div>
            </div>

            {/* Photo / Portrait */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
               <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[480px]">
                 {/* Decorative Frame */}
                 <div className="absolute -inset-4 border border-[#00d084]/30 rounded-t-full rounded-b-xl transform rotate-3 transition-transform duration-1000 hover:rotate-0"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#021213] to-transparent z-10 h-full w-full opacity-60"></div>
                 <img 
                   src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                   alt="LS Hoa Nguyen" 
                   className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-b-xl grayscale-[20%] contrast-125"
                 />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: HỒ SƠ --- */}
      <section id="ho-so" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <Heading title={t.profile.title} subtitle={t.profile.subtitle} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Story & Stats */}
            <div className="lg:col-span-5 flex flex-col space-y-10">
              <div className="text-[15px] text-slate-500 font-light leading-[1.8] space-y-6 text-justify">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#0d5959] first-letter:mr-2 first-letter:float-left">{t.profile.desc1}</p>
                <p className="pl-5 border-l-[3px] border-[#00d084] font-medium text-slate-800 italic">{t.profile.desc2}</p>
              </div>

              <div className="flex gap-10 pt-6 border-t border-slate-200/60">
                {t.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-4xl lg:text-5xl text-[#0d5959] mb-2">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Timeline & Highlights (Editorial Style) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-100">
                
                {/* Career Timeline */}
                <div className="mb-14">
                  <h3 className="font-serif text-2xl text-[#051c1d] mb-8">{t.career.title}</h3>
                  <div className="space-y-8">
                    {t.timelineData.map((item, idx) => (
                      <div key={idx} className="relative pl-6 border-l border-slate-200 group">
                        <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#00d084] transition-colors duration-300"></div>
                        <span className="text-[10px] font-bold text-[#0da37f] uppercase tracking-widest block mb-1.5">{item.period}</span>
                        <h4 className="text-[15px] font-bold text-slate-800 mb-0.5">{item.role}</h4>
                        <h5 className="text-[12px] text-slate-500 uppercase tracking-wider mb-2 font-medium">{item.company}</h5>
                        <p className="text-[13px] text-slate-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                  {t.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                        <item.icon className="w-3.5 h-3.5 mr-2 text-[#0da37f]" />
                        {item.title}
                      </h4>
                      <ul className="space-y-3">
                        {item.items.map((li, i) => (
                          <li key={i} className="text-[13px] text-slate-600 font-light leading-relaxed flex items-start">
                            <span className="text-[#00d084] mr-2 mt-0.5">✦</span>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: LĨNH VỰC CHUYÊN MÔN (DARK/PREMIUM THEME) --- */}
      <section id="chuyen-mon" className="py-24 lg:py-32 bg-[#041516] relative">
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <Heading title={t.practice.title} subtitle={t.practice.subtitle} light={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
            {t.practiceAreas.map((area, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-[#00d084]/30 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-[#00d084]/20 transition-colors">
                     <area.icon className="w-5 h-5 text-[#00d084]" />
                  </div>
                  <h3 className="font-serif text-[20px] text-white tracking-wide">{area.title}</h3>
                </div>
                <ul className="space-y-4">
                  {area.cases.map((c, i) => (
                    <li key={i} className="flex items-start text-[14px] font-light text-white/60 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-[#00d084] shrink-0 mr-2 mt-0.5 opacity-50" />
                      <span>{c.text} <span className="font-medium text-white">{c.highlight}</span> {c.suffix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Speaker Events (Magazine Cards) */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-2xl lg:text-3xl text-white mb-10 flex items-center">
              {t.practice.speakerTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
               {t.speakerEvents.map((event, idx) => (
                 <div key={idx} className="group cursor-pointer">
                   <div className="aspect-[4/5] relative overflow-hidden rounded-2xl mb-4">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                     <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0" />
                     <div className="absolute top-4 left-4 z-20">
                        <span className="backdrop-blur-md bg-black/40 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                          {event.year}
                        </span>
                     </div>
                   </div>
                   <h4 className="text-[15px] font-bold text-white mb-1.5 group-hover:text-[#00d084] transition-colors">{event.title}</h4>
                   <p className="text-[13px] text-white/50 font-light line-clamp-2">{event.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CỘNG ĐỒNG JCI (LIGHT EDITORIAL) --- */}
      <section id="cong-dong" className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <Heading title={t.community.title} subtitle={t.community.subtitle} />
          
          <div className="max-w-4xl mx-auto text-center mb-24">
             <p className="text-[15px] lg:text-[16px] text-slate-500 font-light leading-relaxed">
               {t.community.jciIntro}
             </p>
          </div>

          {/* Timeline Nodes */}
          <div className="mb-32">
            <h3 className="font-serif text-2xl lg:text-3xl text-[#051c1d] mb-16 text-center">{t.community.leadershipTitle}</h3>
            
            <div className="relative group/timeline max-w-5xl mx-auto">
               <div className="hidden lg:block absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-slate-300 z-0">
                  <div className="absolute top-0 left-0 h-full w-0 group-hover/timeline:w-full bg-[#00d084] transition-all duration-1000 ease-in-out"></div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                 {t.jciLeadership.map((item, idx) => (
                   <div key={idx} className="flex flex-col items-center text-center group/item">
                      <div className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-slate-300 flex items-center justify-center mb-6 z-10 group-hover/item:border-[#00d084] group-hover/item:bg-[#00d084] transition-all duration-500">
                        <div className="w-2 h-2 rounded-full bg-[#0d5959] group-hover/item:bg-white transition-colors"></div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0da37f] mb-3">{item.year}</span>
                      <h4 className="font-serif text-[17px] text-slate-900 mb-3 leading-snug">{item.title}</h4>
                      <p className="text-[13px] text-slate-500 font-light leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Activities List (Clean Minimalist) */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#051c1d] mb-16 text-center">{t.community.activityTitle}</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              
              {/* Local */}
              <div>
                <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                  <MapPin className="w-5 h-5 text-[#00d084] mr-3" />
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900">{t.jciActivities.local.title}</h4>
                </div>
                <div className="space-y-6">
                  {t.jciActivities.local.items.map((item, idx) => (
                    <div key={idx}>
                      <h5 className="text-[14px] font-semibold text-slate-800 mb-1.5">{item.name}</h5>
                      <p className="text-[13px] font-light text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* National */}
              <div>
                <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                  <Flag className="w-5 h-5 text-[#00d084] mr-3" />
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900">{t.jciActivities.national.title}</h4>
                </div>
                <div className="space-y-6">
                  {t.jciActivities.national.items.map((item, idx) => (
                    <div key={idx}>
                      <h5 className="text-[14px] font-semibold text-slate-800 mb-1.5">{item.name}</h5>
                      <p className="text-[13px] font-light text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* International */}
              <div>
                <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                  <Globe className="w-5 h-5 text-[#00d084] mr-3" />
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900">{t.jciActivities.international.title}</h4>
                </div>
                <div className="space-y-6">
                  {t.jciActivities.international.items.map((item, idx) => (
                    <div key={idx}>
                      <h5 className="text-[14px] font-semibold text-slate-800 mb-1.5">{item.name}</h5>
                      <p className="text-[13px] font-light text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER (LUXURY CORPORATE) --- */}
      <footer className="bg-[#021213] pt-16 pb-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
            
            {/* Left: Branding */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
               <img 
                 src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" 
                 alt="Paxlaw Logo" 
                 className="h-12 object-contain opacity-90"
               />
               <div className="hidden md:block h-10 border-l border-white/20"></div>
               <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1 text-white/50">
                    {lang === 'vi' ? 'Luật sư Điều hành' : 'Managing Attorney'}
                  </span>
                  <span className="font-serif text-[20px] text-white tracking-wide">
                    Nguyễn Thị Hoa
                  </span>
               </div>
            </div>

            {/* Right: Connect */}
            <div className="flex flex-col items-start lg:items-end">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-white/50">
                 {t.footer.contactTitle}
               </span>
               <div className="flex gap-3">
                 <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
                   <a href="tel:+84911553686" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d084] hover:text-[#021213] hover:border-[#00d084] transition-all duration-300"><Phone className="w-4 h-4"/></a>
                 </TooltipQR>
                 <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
                   <a href="mailto:hoant@paxlaw.vn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d084] hover:text-[#021213] hover:border-[#00d084] transition-all duration-300"><Mail className="w-4 h-4"/></a>
                 </TooltipQR>
                 <TooltipQR qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
                   <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d084] hover:text-[#021213] hover:border-[#00d084] transition-all duration-300"><Linkedin className="w-4 h-4"/></a>
                 </TooltipQR>
                 <TooltipQR qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.hero.scanToConnect}>
                   <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d084] hover:text-[#021213] hover:border-[#00d084] transition-all duration-300"><Facebook className="w-4 h-4"/></a>
                 </TooltipQR>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10">
             <p className="text-[#00d084]/80 text-[11px] font-bold tracking-[0.2em] uppercase">PAXLAW &copy; {new Date().getFullYear()}</p>
             <p className="text-white/40 text-[12px] font-light">{t.contactInfo.address}</p>
          </div>
          
        </div>
      </footer>
      
    </div>
  );
}
