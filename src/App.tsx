import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck
} from 'lucide-react';

/* =========================================
   1. DATA LAYER (DỮ LIỆU CHUẨN XÁC)
========================================= */

const stats = [
  { value: "15+", label: "Năm Kinh Nghiệm" },
  { value: "50+", label: "Quốc Gia (Mạng lưới liên kết P.A.N)" }
];

const timelineData = [
  {
    period: "12/2024 - Nay",
    role: "CEO / Luật sư Điều hành",
    company: "Paxlaw Law Firm",
    desc: "Thiết kế chiến lược pháp lý cá nhân hóa, cung cấp giải pháp phòng pháp chế thuê ngoài (PaxFlow) trọn gói về M&A và đầu tư cho khách hàng đa quốc gia.",
  },
  {
    period: "2022 - Nay",
    role: "Giám đốc Pháp chế",
    company: "Green Investment JSC",
    desc: "Quản trị rủi ro, đảm bảo tuân thủ pháp luật, tạo nền tảng vững chắc cho các dự án đầu tư và liên doanh.",
  },
  {
    period: "2018 - 2024",
    role: "Phó Giám Đốc / Partner",
    company: "Penfield Law Firm",
    desc: "Dẫn dắt các thương vụ M&A phức tạp và thiết lập kế hoạch tái cấu trúc tài chính cho các tập đoàn lớn.",
  },
  {
    period: "2012 - 2018",
    role: "Chuyên viên Pháp chế cao cấp",
    company: "Techcombank",
    desc: "Hỗ trợ pháp lý ngoại hối, quản lý vốn, và chuẩn hóa quy trình phục vụ hệ thống Khách hàng Doanh nghiệp lớn.",
  }
];

const practiceAreas = [
  {
    title: "M&A & Tái Cấu Trúc",
    icon: Building2,
    cases: [
      { text: "Tư vấn thâu tóm công ty sản xuất thép (Miền Bắc) giá trị", highlight: "1.000 tỷ VNĐ." },
      { text: "Chuyển nhượng dự án BĐS nghỉ dưỡng Bãi Dài (Khánh Hòa) trị giá", highlight: "1.600 tỷ VNĐ." },
      { text: "Tái cấu trúc tài chính tập đoàn khoáng sản Thái Nguyên (Vốn", highlight: "1.000+ tỷ VNĐ)." },
      { text: "Tư vấn bán cổ phần EPC top đầu VN cho đối tác Nhật Bản giá trị", highlight: "20 triệu USD." },
    ]
  },
  {
    title: "Tài Chính - Ngân Hàng",
    icon: Landmark,
    cases: [
      { text: "Tư vấn phát hành trái phiếu riêng lẻ dự án tại Bà Rịa - Vũng Tàu trị giá", highlight: "800 tỷ VNĐ." },
      { text: "Quản trị rủi ro, xử lý khủng hoảng cho 07 gói trái phiếu với giá trị", highlight: "500 - 850 tỷ VNĐ", suffix: " mỗi gói." },
      { text: "Thiết kế cấu trúc các khoản vay và trả nợ quá hạn (", highlight: "3.5 triệu USD", suffix: ") cho Tập đoàn tài chính Hà Lan." },
    ]
  },
  {
    title: "Đầu Tư Xuyên Biên Giới & BĐS",
    icon: Globe2,
    cases: [
      { text: "Cố vấn toàn diện dự án nghỉ dưỡng", highlight: "1000+ Condotel 5 sao", suffix: " tại Nha Trang." },
      { text: "Cố vấn pháp lý phát triển dự án khu đô thị quy mô", highlight: "37.4ha", suffix: " tại Bà Rịa - Vũng Tàu." },
      { text: "Xây dựng và cập nhật Báo cáo chính sách PPP tại Việt Nam cho Bộ Kế hoạch & Đầu tư Hàn Quốc.", highlight: "" },
      { text: "Thiết lập pháp nhân, tư vấn vận hành cho nhà đầu tư FDI từ Mỹ, Nhật Bản, Hong Kong.", highlight: "" },
    ]
  },
  {
    title: "Hợp Đồng & Giải Quyết Tranh Chấp",
    icon: ShieldCheck,
    cases: [
      { text: "Soạn thảo chuẩn hóa bộ mẫu hợp đồng dịch vụ trên nền tảng E-commerce (Shopee, Lazada, Tiki).", highlight: "" },
      { text: "Đại diện giải quyết tranh chấp hợp đồng EPC của Tập đoàn Xây dựng VN (Trị giá", highlight: "250 tỷ VNĐ)." },
      { text: "Bảo vệ quyền lợi Chủ đầu tư trong tranh chấp thầu xây dựng tại Khánh Hòa (Trị giá", highlight: "350 tỷ VNĐ)." },
    ]
  }
];

const jciEvents = [
  { year: "2026", title: "Phó Chủ tịch JCI Vietnam", desc: "Phụ trách mảng phát triển kinh doanh và khởi nghiệp, định hướng và dẫn dắt các dự án doanh nhân trẻ.", img: "https://i.postimg.cc/Zqr7kHFk/Pho-chu-ti-ch-JCI.jpg" },
  { year: "2025", title: "Chủ tịch sáng lập JCI Grace", desc: "Kiến tạo và lãnh đạo chapter JCI Grace, mang đến các giá trị tích cực và bền vững cho cộng đồng.", img: "https://i.postimg.cc/Qdn98ZSD/Chu-ti-ch-JCI-Grace.jpg" },
  { year: "2025", title: "Hội nghị JCI ASPAC Mông Cổ", desc: "Đại diện JCI Grace và Đoàn Việt Nam tham gia Hội nghị Châu Á Thái Bình Dương (ASPAC).", img: "https://jci.vn/wp-content/uploads/2025/09/493888640_1116355330518984_4354365979132898970_n.jpg" },
  { year: "2025", title: "Let’s meet up VN", desc: "Đại diện tổ chức và triển khai chương trình kết nối với các cố vấn cấp cao và doanh nghiệp khu vực ASEAN.", img: "https://i.postimg.cc/NjLFPPt9/Let-s-meet-up.jpg" },
  { year: "2025 - 2026", title: "Họp BĐH JCI ASEAN Senator", desc: "Thành viên Đoàn VN tham gia cuộc họp BĐH thường quý tại Tô Châu (Trung Quốc) và Sabah (Malaysia).", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" },
  { year: "2024", title: "JCI World Congress Đài Loan", desc: "Đại diện Đoàn JCI Việt Nam tham gia hội nghị toàn cầu World Congress cùng hàng ngàn đại biểu quốc tế.", img: "https://i.postimg.cc/4d0BV0Xp/congress.jpg" },
  { year: "2024", title: "Dự án Launch to Leader", desc: "Giám đốc sáng lập dự án của JCI Thăng Long. Vinh dự đạt giải thưởng The Most Social Impact JCI VN 2024.", img: "https://i.postimg.cc/NFTSMtRk/launch-to-leader.jpg" },
  { year: "Worldwide", title: "JCI Lawyer Council", desc: "Thành viên sáng lập mạng lưới hội đồng luật sư toàn cầu thuộc hệ thống JCI toàn thế giới.", img: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop" },
];

const speakerEvents = [
  { year: "2024", title: "Triển lãm Trade Expo, Mumbai", desc: "Tham gia đoàn làm việc đại diện cho doanh nghiệp VN phối hợp với Lãnh sự quán VN tại triển lãm dịch vụ quốc tế.", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" },
  { year: "2024", title: "Diễn giả tại TT Khởi nghiệp CSK", desc: "Sự kiện pháp lý do TT Hỗ trợ khởi nghiệp & CGTT ĐH Quốc gia tổ chức. Chia sẻ về quan hệ Cổ đông trong doanh nghiệp.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
  { year: "2024", title: "Dự án Shape Your Future", desc: "Thường xuyên góp mặt với vai trò diễn giả hướng nghiệp nghề luật cho sinh viên và thế hệ trẻ.", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
  { year: "Workshop", title: "Pháp Lý Thông Minh – Lý Tình Hợp Tác", desc: "Tham gia với vai trò diễn giả chính, phân tích các rủi ro pháp lý và giải pháp cho doanh nghiệp.", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
];

const keynoteTopics = [
  "Các vấn đề pháp lý chuyên sâu cho Chủ đầu tư và các Start-up.",
  "Định hướng lộ trình kỹ năng phát triển ngành Luật cho HSSV."
];


/* =========================================
   2. COMPONENTS (Căn chỉnh cực kỳ chi tiết)
========================================= */

const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="mb-14 md:mb-20 flex flex-col items-center text-center">
    <div className="inline-flex items-center space-x-3 mb-6">
      <div className={`h-[1px] w-8 ${light ? 'bg-[#2eb793]' : 'bg-[#1d6266]'}`}></div>
      <span className={`text-xs font-bold uppercase tracking-widest ${light ? 'text-[#2eb793]' : 'text-[#1d6266]'}`}>
        {subtitle}
      </span>
    </div>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
  </div>
);

const TimelineItem = ({ data, isLast }) => (
  <div className="relative pl-10 md:pl-0">
    {!isLast && (
      <div className="absolute left-[11px] md:left-1/2 top-8 bottom-[-2rem] w-[1px] bg-slate-200 md:-translate-x-1/2"></div>
    )}
    
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
      <div className="hidden md:block md:w-[45%] text-right pr-12">
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">{data.period}</span>
      </div>

      <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border border-slate-300 md:-translate-x-1/2 flex items-center justify-center mt-1 md:mt-0 group-hover:border-[#1d6266] transition-colors duration-300 z-10">
        <div className="w-2 h-2 rounded-full bg-[#1d6266] group-hover:bg-[#2eb793] transition-colors duration-300"></div>
      </div>

      <div className="md:w-[45%] md:pl-12 w-full pb-10 md:pb-12">
        <span className="md:hidden text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2 block">{data.period}</span>
        <h4 className="text-lg font-bold text-slate-900 mb-1 tracking-wide">{data.role}</h4>
        <h5 className="text-sm font-medium text-[#1d6266] uppercase tracking-wide mb-3">{data.company}</h5>
        <p className="text-slate-500 font-light leading-relaxed text-[14px]">{data.desc}</p>
      </div>
    </div>
  </div>
);

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col group border border-slate-100 overflow-hidden h-full">
    <div className="aspect-[4/3] relative overflow-hidden bg-slate-50 p-2">
      {event.img2 ? (
        <div className="flex w-full h-full gap-2">
          <img src={event.img} alt={event.title} className="w-1/2 h-full object-cover rounded group-hover:scale-[1.03] transition-transform duration-700" />
          <img src={event.img2} alt={event.title} className="w-1/2 h-full object-cover rounded group-hover:scale-[1.03] transition-transform duration-700" />
        </div>
      ) : (
        <img src={event.img} alt={event.title} className="w-full h-full object-cover rounded group-hover:scale-[1.03] transition-transform duration-700" />
      )}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-[#1d6266] text-[10px] font-bold uppercase tracking-widest mb-2 block">{event.year}</span>
      <h4 className="text-base font-bold tracking-wide text-slate-900 mb-2 leading-snug line-clamp-2">{event.title}</h4>
      <p className="text-slate-500 font-light leading-relaxed text-[13px] line-clamp-2">{event.desc}</p>
    </div>
  </div>
);

const ContactIcon = ({ icon, label, value, href, qrUrl }) => {
  const qrImageSource = qrUrl ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrUrl)}&color=1d6266` : null;

  return (
    <div className="relative group flex flex-col items-center cursor-pointer">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1d6266] hover:bg-[#1d6266] hover:text-white hover:border-[#1d6266] transition-all duration-500 shadow-sm shrink-0"
      >
        {React.cloneElement(icon, { className: 'w-6 h-6 stroke-[1.5]' })}
      </a>
      <span className="mt-5 text-sm font-bold text-slate-900 uppercase tracking-widest text-center">{label}</span>
      <span className="text-sm text-slate-500 mt-2 font-light text-center">{value}</span>

      {qrImageSource && (
        <div className="absolute bottom-full mb-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50 w-max flex flex-col items-center">
          <div className="bg-white p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] relative border border-slate-100 flex flex-col items-center">
            <img src={qrImageSource} alt={`QR Code ${label}`} className="w-32 h-32 object-contain" />
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-3 font-bold">Quét để kết nối</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};


/* =========================================
   3. MAIN APP COMPONENT
========================================= */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#1d6266] selection:text-white">
      
      {/* N A V B A R */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md border-slate-100 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="flex items-center justify-center w-10 h-10 mr-3">
                <img 
                  src="https://i.postimg.cc/KzSNJM6K/A-nh-chu-p-Ma-n-hi-nh-2026-04-15-lu-c-10-16-13-SA-removebg-preview.png" 
                  alt="Paxlaw P Logo" 
                  className="w-full h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%25' y='55%25' font-size='75' font-weight='bold' text-anchor='middle' alignment-baseline='middle' font-family='sans-serif' fill='%231d6266'%3EP%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg tracking-widest leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  PAXLAW
                </span>
                <span className={`text-[9px] font-bold tracking-[0.2em] uppercase mt-1 ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                  Luật sư Hoa Nguyễn
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {['Về Tôi', 'Lĩnh Vực', 'Dấu Ấn'].map((item, index) => {
                const ids = ['gioi-thieu', 'linh-vuc', 'ngoai-khoa'];
                return (
                  <button 
                    key={item}
                    onClick={() => scrollTo(ids[index])}
                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-[#2eb793] ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
                  >
                    {item}
                  </button>
                )
              })}
              <button 
                onClick={() => scrollTo('lien-he')}
                className={`text-xs font-bold uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${isScrolled ? 'border-[#1d6266] text-[#1d6266] hover:bg-[#1d6266] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1d6266]'}`}
              >
                Đặt Lịch
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                {mobileMenuOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0 border-transparent'}`}>
          <div className="flex flex-col items-center space-y-6">
            {['Về Tôi', 'Lĩnh Vực', 'Dấu Ấn', 'Đặt Lịch'].map((item, index) => {
              const ids = ['gioi-thieu', 'linh-vuc', 'ngoai-khoa', 'lien-he'];
              return (
                <button 
                  key={item}
                  onClick={() => scrollTo(ids[index])}
                  className="text-sm font-bold text-slate-600 uppercase tracking-widest w-full hover:text-[#1d6266]"
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* H E R O   S E C T I O N (Cập nhật tên và font chữ đồng đều) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#1d6266] px-6 text-center z-10 pt-16">
        <div className="inline-flex items-center space-x-3 mb-10">
          <div className="h-[1px] w-10 bg-[#2eb793]"></div>
          <span className="text-[#2eb793] font-semibold tracking-[0.15em] uppercase text-[10px] md:text-sm">LUẬT SƯ ĐIỀU HÀNH & CỐ VẤN CẤP CAO</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold text-white mb-8 tracking-tight leading-tight md:leading-none">
          Nguyễn Thị Hoa
        </h1>
        
        <p className="text-2xl md:text-3xl text-white font-light italic mb-12">
          "Be Grace, Build Grand."
        </p>
        
        <p className="text-[15px] md:text-[17px] text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
          Hơn 15 năm kiến tạo màng lọc rủi ro pháp lý bền vững, bảo vệ quyền lợi và khơi mở tiềm năng phát triển cho doanh nghiệp thông qua mạng lưới chuyên gia pháp lý toàn cầu (Pax Alliance Network - P.A.N).
        </p>
      </section>

      {/* 1. A B O U T   &   E X P E R I E N C E (Bố cục Editorial + Chân dung Luật sư) */}
      <section id="gioi-thieu" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Cột Trái: Ảnh Chân Dung chuyên nghiệp */}
          <div className="lg:w-5/12 w-full">
            <div className="relative p-2 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm">
              <img 
                src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                alt="Luật sư Hoa Nguyễn" 
                className="w-full h-auto object-cover rounded-sm filter grayscale-[5%] contrast-[1.02]"
              />
            </div>
          </div>
          
          {/* Cột Phải: Nội dung & Stats (Chuẩn xác theo image_d23c43.png) */}
          <div className="lg:w-7/12 w-full lg:pl-8">
            <div className="mb-10 text-left">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-[1px] w-8 bg-[#1d6266]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1d6266]">Hồ sơ năng lực</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">Về Tôi</h2>
            </div>
            
            <div className="prose prose-lg text-slate-600 font-light leading-relaxed mb-12 text-justify">
              <p>Trong thế giới pháp luật mang đậm sắc thái khuôn mẫu, tôi lựa chọn phương pháp tiếp cận <strong>Tinh tế (Graceful)</strong> và <strong>Sâu sắc (Insightful)</strong>. Giải pháp pháp lý tối ưu không chỉ giải quyết tranh chấp, mà còn phải tạo ra bệ phóng vững chắc cho doanh nghiệp.</p>
              <p>Chuyên môn thực chiến của tôi tập trung vào cấu trúc M&A, tư vấn đầu tư và các giao dịch xuyên biên giới. Thông qua <strong>giải pháp phòng pháp chế thuê ngoài (PaxFlow)</strong> và <strong>mạng lưới luật sư liên kết toàn cầu (P.A.N)</strong>, chúng tôi cam kết bảo vệ lợi ích tối đa cho các đối tác.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-12 mt-12 pt-10 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-[5px] border-[#2eb793] pl-6 py-1">
                  <div className="text-5xl font-bold text-[#1d6266] tracking-tight mb-2 leading-none">{stat.value}</div>
                  <div className="text-[15px] font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. C A R E E R   T I M E L I N E */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading title="Hành trình sự nghiệp" subtitle="Chuyên môn" />
          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index} 
                data={item} 
                isLast={index === timelineData.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. P R A C T I C E   A R E A S (Thiết kế chuẩn xác 100% theo image_609f8d.png) */}
      <section id="linh-vuc" className="py-24 md:py-32 bg-[#0d3a3c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeading title="Lĩnh vực chuyên môn" subtitle="Thực tiễn hành nghề" light={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="bg-[#134a4c] rounded-xl p-8 md:p-10 lg:p-12 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#1a5b5e] flex items-center justify-center mb-8">
                  <area.icon className="w-7 h-7 text-[#2eb793] stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold tracking-wide text-white mb-8">{area.title}</h3>
                
                <ul className="space-y-5 flex-1">
                  {area.cases.map((c, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-[#2eb793] mt-[2px] mr-3 shrink-0" />
                      <p className="text-[15px] font-light leading-relaxed text-slate-200">
                        {c.text} 
                        {c.highlight && <span className="font-bold text-white ml-1">{c.highlight}</span>}
                        {c.suffix && <span className="text-slate-200">{c.suffix}</span>}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. C O M M U N I T Y   &   E V E N T S */}
      <section id="ngoai-khoa" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeading title="Lan tỏa giá trị & Trách nhiệm xã hội" subtitle="Dấu ấn sự kiện" />

          {/* KHỐI CHỦ ĐỀ ĐINH */}
          <div className="mb-20 bg-slate-50 rounded-xl border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-[#2eb793]/30 transition-colors duration-300">
            <div className="md:w-1/3 shrink-0">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1d6266] mb-2 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-[#2eb793]" />
                Chủ đề trọng tâm
              </h3>
              <p className="text-slate-500 font-light text-sm">Các nội dung được yêu cầu chia sẻ nhiều nhất tại các diễn đàn uy tín.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keynoteTopics.map((topic, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-[14px] font-bold tracking-wide text-[#1d6266] leading-relaxed">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NHÓM 1: JCI */}
          <div className="mb-20">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
              <h3 className="text-xl font-light text-slate-900">Lãnh đạo & Dấu ấn tại JCI</h3>
              <Award className="w-5 h-5 text-slate-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jciEvents.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>
          </div>

          {/* NHÓM 2: SPEAKER */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
              <h3 className="text-xl font-light text-slate-900">Diễn giả & Cố vấn khởi nghiệp</h3>
              <Mic className="w-5 h-5 text-slate-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakerEvents.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. C O N T A C T   (C T A) */}
      <section id="lien-he" className="relative py-24 md:py-32 bg-[#1d6266] overflow-hidden">
        
        {/* Motif Dải Lụa Brand Guideline Paxlaw */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none rotate-180">
          <svg className="absolute bottom-0 left-0 w-[150%] h-auto translate-y-[15%] -translate-x-[10%] opacity-90" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200 600 C 200 600, 300 200, 800 200 C 1300 200, 1500 400, 1800 400 L 1800 800 L -200 800 Z" fill="#2eb793" opacity="0.4"/>
            <path d="M-200 700 C 300 700, 600 100, 1100 100 C 1600 100, 1600 500, 1900 500 L 1900 800 L -200 800 Z" fill="#113a3c" opacity="0.6"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center z-20">
          
          <SectionHeading 
            title="Đồng hành xây dựng nền tảng pháp lý an tâm cho sự nghiệp kinh doanh của bạn." 
            subtitle="Kết nối chuyên gia" 
            light={true} 
          />

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-16">
            <ContactIcon 
              icon={<Phone />} 
              label="Điện thoại" 
              value="+84 911 55 3686" 
              href="tel:+84911553686" 
              qrUrl="tel:+84911553686"
            />
            <ContactIcon 
              icon={<Mail />} 
              label="Email" 
              value="hoant@paxlaw.vn" 
              href="mailto:hoant@paxlaw.vn" 
              qrUrl="mailto:hoant@paxlaw.vn"
            />
            <ContactIcon 
              icon={<Linkedin />} 
              label="LinkedIn" 
              value="lawyerhoanguyen" 
              href="https://linkedin.com/in/lawyerhoanguyen" 
              qrUrl="https://linkedin.com/in/lawyerhoanguyen"
            />
            <ContactIcon 
              icon={<Facebook />} 
              label="Facebook" 
              value="Hoa Nguyen" 
              href="https://facebook.com/hoant.paxlaw" 
              qrUrl="https://facebook.com/hoant.paxlaw"
            />
          </div>
        </div>
      </section>

      {/* F O O T E R */}
      <footer className="bg-[#113a3c] py-12 text-center relative z-20">
        <div className="flex justify-center items-center mb-8">
            <img 
              src="[Dán-Link-Trực-Tiếp-Từ-Postimages-Vào-Đây]" 
              alt="Paxlaw Logo" 
              className="h-8 w-auto object-contain brightness-0 invert opacity-80"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none';
              }} 
            />
        </div>
        <p className="text-white/40 text-xs font-light tracking-wide uppercase mb-3">
          &copy; {new Date().getFullYear()} PAXLAW. "Be Grace, Build Grand." All rights reserved.
        </p>
        <p className="text-white/40 text-xs font-light tracking-wide">
          Tầng 5, số 31A Nguyễn Quốc Trị, Trung Hoà, Yên Hoà, Hà Nội
        </p>
      </footer>
    </div>
  );
}
