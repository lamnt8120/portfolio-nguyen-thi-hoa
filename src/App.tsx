import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  Quote, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Flag, 
  QrCode,
  Facebook,
  Linkedin,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // ==========================================================================
  // 1. QUẢN LÝ HÌNH ẢNH
  // ==========================================================================
  const assets = {
    portrait: 'https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png',
    logoUrl: 'https://paxlaw.vn/wp-content/uploads/2024/05/logo-paxlaw-ngang.png'
  };

  // ==========================================================================
  // 2. DANH SÁCH LIÊN HỆ & MÃ QR
  // ==========================================================================
  const socialLinks = [
    { 
      id: 'fb', 
      label: 'FB', 
      name: 'Facebook', 
      icon: <Facebook size={16} />,
      url: 'https://www.facebook.com/Paxlaw.vn', 
      qrImage: 'https://paxlaw.vn/wp-content/uploads/qr-facebook.png' 
    },
    { 
      id: 'ln', 
      label: 'LN', 
      name: 'LinkedIn', 
      icon: <Linkedin size={16} />,
      url: 'https://vn.linkedin.com/in/lawyerhoanguyen', 
      qrImage: 'https://paxlaw.vn/wp-content/uploads/qr-linkedin.png' 
    },
    { 
      id: 'zl', 
      label: 'ZL', 
      name: 'Zalo', 
      icon: <MessageCircle size={16} />,
      url: 'https://zalo.me/0396216467', 
      qrImage: 'https://paxlaw.vn/wp-content/uploads/qr-zalo.png' 
    }
  ];

  // Component Logo SVG Paxlaw - Đồng bộ Bold
  const PaxlawLogo = ({ className = "h-8" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="6" fill="#1d6266"/>
        <path d="M12 10H22C25.3137 10 28 12.6863 28 16C28 19.3137 25.3137 22 22 22H16V30H12V10ZM16 18H22C23.1046 18 24 17.1046 24 16C24 14.8954 23.1046 14 22 14H16V18Z" fill="white"/>
      </svg>
      <span className="font-black text-[#1d6266] tracking-tighter text-xl leading-none">PAXLAW</span>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const practiceAreas = [
    {
      title: "PaxFlow (Pháp chế thuê ngoài)",
      desc: "Giải pháp thay thế hoàn toàn phòng pháp chế nội bộ, tối ưu chi phí và hiệu quả cho doanh nghiệp.",
      deal: "Dịch vụ tiên phong"
    },
    {
      title: "M&A & Restructuring",
      desc: "Tư vấn cấu trúc giao dịch, soát xét pháp lý chuyên sâu cho các thương vụ đa quốc gia.",
      deal: "Deal tiêu biểu: 1.500 tỷ"
    },
    {
      title: "Investment & Real Estate",
      desc: "Xử lý rào cản thủ tục đầu tư, dệt nên các chiến lược pháp lý cá nhân hóa cho từng dự án.",
      deal: "Quy mô: >50ha"
    },
    {
      title: "P.A.N (Global Network)",
      desc: "Kết nối mạng lưới luật sư tại hơn 50 quốc gia, đồng hành cùng doanh nghiệp vươn ra thế giới.",
      deal: "Mạng lưới toàn cầu"
    }
  ];

  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#2eb793]/20">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <PaxlawLogo className="h-7 md:h-8" />

          <div className="hidden md:flex gap-8 text-[11px] font-black text-[#1d6266] uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-[#2eb793] transition-colors py-2">Giới thiệu</a>
            <a href="#expertise" className="hover:text-[#2eb793] transition-colors py-2">Lĩnh vực</a>
            <a href="#experience" className="hover:text-[#2eb793] transition-colors py-2">Kinh nghiệm</a>
            <a href="#contact" className="bg-[#1d6266] text-white px-5 py-2 rounded-full hover:bg-[#2eb793] transition-all shadow-sm">Liên hệ</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative grid md:grid-cols-2 min-h-screen items-stretch overflow-hidden bg-white">
        <div className="relative h-[50vh] md:h-full overflow-hidden bg-slate-50">
          <img
            src={assets.portrait}
            alt="Luật sư Nguyễn Thị Hoa"
            className="w-full h-full object-cover object-top opacity-0 transition-opacity duration-700"
            onLoad={(e) => e.target.classList.remove('opacity-0')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d6266]/10 to-transparent md:hidden"></div>
        </div>

        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 relative">
          <div className="inline-block px-3 py-1 bg-[#2eb793]/10 text-[#2eb793] text-[9px] font-black rounded-sm mb-6 w-fit uppercase tracking-[0.3em]">
            Managing Partner
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4 text-[#1d6266] leading-[1.1] tracking-tight">
            Nguyễn Thị Hoa
          </h1>
          <p className="text-lg md:text-xl text-[#2eb793] mb-10 font-bold italic opacity-90">
            Be Grace, Build Grand.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-12 border-y border-slate-100 py-8 max-w-md">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#1d6266]">15+</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-widest font-black mt-1">Kinh nghiệm</div>
            </div>
            <div className="border-x border-slate-100 px-4">
              <div className="text-2xl md:text-3xl font-black text-[#1d6266]">50+</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-widest font-black mt-1">Quốc gia</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#1d6266]">10k+</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-widest font-black mt-1">Tỷ giao dịch</div>
            </div>
          </div>

          <p className="text-slate-600 mb-10 leading-relaxed max-w-md font-bold italic border-l-2 border-[#2eb793] pl-6 text-[15px]">
            "Paxlaw không chỉ bảo vệ mà còn để khơi mở những tiềm năng lớn lao, tạo nền tảng vững chắc cho sự phát triển bền vững."
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1d6266] text-white px-8 py-4 rounded-xl font-black hover:bg-[#2eb793] transition-all shadow-md flex items-center gap-2 uppercase text-[10px] tracking-widest">
              Đặt lịch tư vấn <ChevronRight size={14} />
            </button>
            <button className="border-2 border-[#1d6266]/20 text-[#1d6266] px-8 py-4 rounded-xl font-black hover:bg-slate-50 transition-all uppercase text-[10px] tracking-widest">
              Profile (.PDF)
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-10 border-y bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <span className="text-sm font-black text-slate-800 tracking-tighter uppercase font-sans">Techcombank</span>
             <PaxlawLogo className="h-5 md:h-6 grayscale" />
             <span className="text-base md:text-lg font-black text-[#1d6266] uppercase tracking-tighter">JCI Vietnam</span>
             <span className="text-sm font-serif font-black text-slate-600 tracking-tighter uppercase">Penfield</span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-[10px] font-black text-[#2eb793] uppercase tracking-[0.4em] mb-4">Triết lý hành nghề</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#1d6266]">
              "Dệt" nên những chiến lược pháp lý sâu sắc
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-[17px] font-bold">
              Giống như dải lụa ôm lấy từng góc cạnh của một vật thể, chúng tôi bảo vệ doanh nghiệp bằng sự tinh tế và chuyên môn vững vàng.
            </p>

            <div className="space-y-6">
              {[
                { icon: <ShieldCheck size={18} />, text: "Minh bạch - Tinh tế - Sâu sắc" },
                { icon: <Globe size={18} />, text: "Mạng lưới toàn cầu P.A.N" },
                { icon: <Users size={18} />, text: "Pháp chế thuê ngoài PaxFlow" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="p-2 bg-[#2eb793]/10 rounded text-[#2eb793]">{item.icon}</div>
                  <p className="text-slate-800 font-black text-xs tracking-wider uppercase">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
             <div className="bg-[#1d6266] rounded-[2rem] p-10 md:p-12 text-white shadow-2xl relative z-10 overflow-hidden border border-white/5">
                <Quote size={32} className="text-[#2eb793] opacity-20 mb-6" />
                <p className="text-xl md:text-2xl font-bold italic leading-relaxed mb-10 relative z-10">
                  “Pháp lý không chỉ là tuân thủ, mà là nghệ thuật sử dụng luật pháp để bảo vệ tối đa lợi ích thương mại.”
                </p>
                <div className="flex items-center gap-3 relative z-10 border-t border-white/10 pt-6">
                   <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2eb793]/40 shadow-inner">
                     <img src={assets.portrait} className="object-cover w-full h-full" alt="Mini Profile" />
                   </div>
                   <div>
                     <p className="font-black text-[12px] uppercase tracking-widest">LS. Nguyễn Thị Hoa</p>
                     <p className="text-[#2eb793] text-[9px] font-black uppercase tracking-tighter">Managing Partner</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#2eb793]/10 rounded-[2rem] -z-0 group-hover:scale-105 transition-transform"></div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS */}
      <section id="expertise" className="bg-[#1d6266] py-24 md:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-[10px] font-black text-[#2eb793] uppercase tracking-[0.4em] mb-4">Dịch vụ chuyên môn</h2>
            <h3 className="text-4xl font-bold tracking-tight">Giải pháp pháp lý toàn diện</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2eb793]/40 transition-all group flex flex-col h-full">
                <div className="w-10 h-10 bg-[#2eb793] rounded-lg flex items-center justify-center mb-8 shadow-lg group-hover:scale-105 transition-transform">
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <h3 className="text-lg font-black mb-4 leading-snug tracking-tight">{item.title}</h3>
                <p className="text-slate-200 text-[13px] mb-8 leading-relaxed font-bold opacity-80 italic">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-white/5 mt-auto text-right">
                  <span className="text-[8px] font-black text-[#2eb793] tracking-widest uppercase">
                    {item.deal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY DEALS */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-[10px] font-black text-[#2eb793] uppercase tracking-[0.4em] mb-4">Thành tựu</h2>
        <h3 className="text-3xl font-bold mb-16 text-[#1d6266] font-serif italic">Thương vụ nổi bật</h3>

        <div className="grid gap-3 text-left">
          {[
            { label: "M&A Bất động sản", detail: "Thương vụ quy mô 1.500 tỷ đồng (Đối tác Hàn Quốc)", icon: <Briefcase size={16} /> },
            { label: "Dự án Resort & Golf", detail: "Xây dựng nền tảng pháp lý quy mô 1.600 tỷ đồng (Vốn Nga)", icon: <MapPin size={16} /> },
            { label: "Hợp đồng EPC Năng lượng", detail: "Dự án trị giá 20 triệu USD (Nhà thầu Nhật Bản)", icon: <Flag size={16} /> },
            { label: "Tái cấu trúc Tập đoàn", detail: "Tái cấu trúc danh mục tài sản > 1.000 tỷ đồng", icon: <ShieldCheck size={16} /> },
          ].map((deal, idx) => (
            <div key={idx} className="flex items-center justify-between p-5 rounded-xl bg-white border border-slate-100 hover:shadow-lg hover:border-[#2eb793]/20 transition-all group cursor-pointer shadow-sm">
               <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-[#1d6266] group-hover:bg-[#2eb793] group-hover:text-white transition-all">
                    {deal.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-[14px] text-[#1d6266] uppercase tracking-wide">{deal.label}</h4>
                    <p className="text-slate-500 text-[12px] mt-1 font-bold">{deal.detail}</p>
                  </div>
               </div>
               <ChevronRight size={18} className="text-slate-200 group-hover:text-[#2eb793]" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16 items-start">
            {/* Cột Logo & Slogan */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <PaxlawLogo className="h-8 mb-8" />
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-xs italic border-l-2 border-[#2eb793] pl-5 font-bold">
                "Be Grace, Build Grand. Đơn vị dẫn đầu trong lĩnh vực tư vấn pháp lý và pháp chế thuê ngoài."
              </p>
            </div>
            
            {/* Cột Văn phòng */}
            <div className="md:col-span-4 text-center md:text-left">
              <h4 className="font-black text-[#1d6266] mb-8 uppercase tracking-[0.3em] text-[9px]">Văn phòng Hà Nội</h4>
              <div className="flex gap-4 items-start mb-6">
                <div className="p-1 bg-[#2eb793]/10 rounded-full mt-1 shrink-0">
                  <MapPin size={16} className="text-[#2eb793]" />
                </div>
                <p className="text-slate-700 text-[14px] leading-relaxed font-bold">
                  Tầng 5, số 31A Nguyễn Quốc Trị, <br /> Trung Hoà, Yên Hoà, Cầu Giấy, Hà Nội
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-1 bg-[#2eb793]/10 rounded-full shrink-0">
                  <Globe size={16} className="text-[#2eb793]" />
                </div>
                <span className="text-[14px] font-black text-[#1d6266] border-b-2 border-transparent hover:border-[#1d6266] transition-all cursor-pointer">www.paxlaw.vn</span>
              </div>
            </div>

            {/* Cột Kết nối trực tiếp & QR */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end">
              <h4 className="font-black text-[#1d6266] mb-8 uppercase tracking-[0.3em] text-[9px]">Kết nối trực tuyến</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <div 
                    key={link.id} 
                    className="relative group"
                    onMouseEnter={() => setHoveredSocial(link.id)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <a 
                      href={link.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1d6266] hover:bg-[#2eb793] hover:text-white transition-all shadow-sm border border-slate-200 transition-all duration-300"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>

                    {/* QR POPOVER */}
                    <div className={`hidden md:block absolute bottom-full mb-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 origin-bottom ${hoveredSocial === link.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <div className="bg-white p-3 rounded-2xl shadow-2xl border-2 border-[#1d6266]/5 w-40 text-center">
                        <div className="w-full aspect-square bg-slate-50 rounded-xl flex items-center justify-center border border-[#2eb793]/10 overflow-hidden mb-2">
                           <img 
                              src={link.qrImage} 
                              alt={`QR ${link.name}`} 
                              className="w-full h-full object-contain p-1"
                              onError={(e) => { 
                                e.target.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link.url)}`; 
                              }}
                           />
                        </div>
                        <p className="text-[9px] font-black text-[#1d6266] uppercase tracking-widest leading-none">Quét cho {link.name}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-6 italic md:block hidden font-bold tracking-wider">Di chuột để kết nối</p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 text-slate-400 text-[9px] font-black tracking-[0.3em] uppercase text-center">
             <p>© 2024 PAXLAW LEGAL CONSULTING CO., LTD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
