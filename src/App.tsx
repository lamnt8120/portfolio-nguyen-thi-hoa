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
  // 1. QUẢN LÝ HÌNH ẢNH (Dễ dàng thay đổi tại đây)
  // ==========================================================================
  const assets = {
    logo: 'https://paxlaw.vn/wp-content/uploads/2024/05/logo-paxlaw-ngang.png',
    portrait: 'https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png',
  };

  // ==========================================================================
  // 2. DANH SÁCH LIÊN HỆ & MÃ QR
  // ==========================================================================
  const socialLinks = [
    { 
      id: 'fb', 
      label: 'FB', 
      name: 'Facebook', 
      url: 'https://www.facebook.com/Paxlaw.vn', 
      qrImage: 'https://paxlaw.vn/wp-content/uploads/qr-facebook.png' 
    },
    { 
      id: 'ln', 
      label: 'LN', 
      name: 'LinkedIn', 
      url: 'https://vn.linkedin.com/in/lawyerhoanguyen', 
      qrImage: 'https://paxlaw.vn/wp-content/uploads/qr-linkedin.png' 
    },
    { 
      id: 'zl', 
      label: 'ZL', 
      name: 'Zalo', 
      url: 'https://zalo.me/0396216467', 
      qrImage: 'https://paxlaw.vn/wp-content/uploads/qr-zalo.png' 
    }
  ];

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

  // Thành phần Logo dự phòng nếu ảnh link bị lỗi
  const LogoFallback = () => (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 bg-[#1d6266] rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-[10px]">P</span>
      </div>
      <span className="font-bold text-[#1d6266] tracking-tighter text-lg">PAXLAW</span>
    </div>
  );

  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#2eb793]/20">
      {/* Navigation - Cân đối lại kích thước & padding */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center h-10">
            <img 
              src={assets.logo} 
              alt="Paxlaw Logo" 
              className="h-7 md:h-9 w-auto object-contain transition-all"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden"><LogoFallback /></div>
          </div>

          <div className="hidden md:flex gap-8 text-[12px] font-bold text-[#1d6266] uppercase tracking-widest">
            <a href="#about" className="hover:text-[#2eb793] transition-colors py-2">Giới thiệu</a>
            <a href="#expertise" className="hover:text-[#2eb793] transition-colors py-2">Lĩnh vực</a>
            <a href="#experience" className="hover:text-[#2eb793] transition-colors py-2">Kinh nghiệm</a>
            <a href="#contact" className="bg-[#1d6266] text-white px-5 py-2 rounded-full hover:bg-[#2eb793] transition-all shadow-sm">Đặt lịch</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION - Cân đối ảnh và khối nội dung */}
      <section className="relative grid md:grid-cols-2 min-h-[90vh] md:min-h-screen items-stretch overflow-hidden">
        <div className="relative h-[55vh] md:h-full overflow-hidden">
          <img
            src={assets.portrait}
            alt="Luật sư Nguyễn Thị Hoa"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d6266]/30 to-transparent md:hidden"></div>
        </div>

        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 relative bg-white">
          {/* Họa tiết dải lụa mờ phía sau */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]">
             <svg viewBox="0 0 800 600" className="w-full h-full fill-[#2eb793]">
                <path d="M0,400 C150,300 300,500 500,350 C700,200 800,400 800,300 L800,0 L0,0 Z" />
             </svg>
          </div>

          <div className="inline-block px-3 py-1 bg-[#2eb793]/10 text-[#2eb793] text-[9px] font-bold rounded-sm mb-6 w-fit uppercase tracking-[0.25em]">
            Managing Partner
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4 text-[#1d6266] leading-[1.15] tracking-tight">
            Nguyễn Thị Hoa
          </h1>
          <p className="text-lg md:text-xl text-[#2eb793] mb-10 font-medium italic opacity-90">
            Be Grace, Build Grand.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 border-y border-slate-100 py-8 max-w-lg">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1d6266]">15+</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest font-black mt-1">Kinh nghiệm</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1d6266]">50+</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest font-black mt-1">Quốc gia</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1d6266]">10k+</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest font-black mt-1">Tỷ giao dịch</div>
            </div>
          </div>

          <p className="text-slate-500 mb-10 leading-relaxed max-w-md italic border-l-2 border-[#2eb793] pl-6 text-[14px]">
            "Paxlaw không chỉ bảo vệ mà còn để khơi mở những tiềm năng lớn lao, tạo nền tảng vững chắc cho sự phát triển bền vững của doanh nghiệp."
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1d6266] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2eb793] transition-all shadow-lg shadow-[#1d6266]/10 flex items-center gap-2 uppercase text-[10px] tracking-widest">
              Đặt lịch tư vấn <ChevronRight size={14} />
            </button>
            <button className="border-2 border-[#1d6266]/20 text-[#1d6266] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all uppercase text-[10px] tracking-widest">
              Profile (.PDF)
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR - Cân đối logo đối tác */}
      <section className="py-12 border-y bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10 opacity-80 italic">Hợp tác & Đối tác tin cậy</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <span className="text-base md:text-lg font-black text-slate-800 tracking-tighter">TECHCOMBANK</span>
             <img 
               src={assets.logo} 
               alt="Paxlaw Partner" 
               className="h-5 md:h-7 w-auto" 
               onError={(e) => { e.target.style.display = 'none'; }} 
             />
             <span className="text-lg md:text-xl font-bold text-[#1d6266] uppercase tracking-tighter">JCI Vietnam</span>
             <span className="text-base md:text-lg font-serif font-bold text-slate-600 tracking-tighter uppercase">Penfield</span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT - Dệt nên chiến lược */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative z-10">
            <h2 className="text-[10px] font-bold text-[#2eb793] uppercase tracking-[0.4em] mb-4">Triết lý hành nghề</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#1d6266]">
              "Dệt" nên những chiến lược pháp lý sâu sắc
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-[17px] font-light">
              Giống như dải lụa ôm lấy từng góc cạnh của vật thể, chúng tôi bảo vệ doanh nghiệp bằng sự tinh tế và chuyên môn vững vàng, giúp bạn an tâm trên lộ trình đầu tư.
            </p>

            <div className="space-y-6">
              {[
                { icon: <ShieldCheck size={18} />, text: "Minh bạch - Tinh tế - Sâu sắc" },
                { icon: <Globe size={18} />, text: "Mạng lưới toàn cầu P.A.N tại 50+ quốc gia" },
                { icon: <Users size={18} />, text: "Tiên phong Pháp chế thuê ngoài PaxFlow" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="p-2.5 bg-[#2eb793]/10 rounded-lg text-[#2eb793]">{item.icon}</div>
                  <p className="text-slate-700 font-bold text-sm tracking-wide">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
             <div className="bg-[#1d6266] rounded-[2rem] p-10 md:p-12 text-white shadow-2xl relative z-10 overflow-hidden border border-white/5">
                <Quote size={36} className="text-[#2eb793] opacity-20 mb-8" />
                <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-10 relative z-10">
                  “Pháp lý không chỉ là tuân thủ, mà là nghệ thuật sử dụng luật pháp để bảo vệ tối đa lợi ích thương mại của doanh nghiệp.”
                </p>
                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2eb793]/40">
                     <img src={assets.portrait} className="object-cover w-full h-full" alt="Mini Profile" />
                   </div>
                   <div>
                     <p className="font-bold text-[13px] uppercase tracking-widest leading-none">LS. Nguyễn Thị Hoa</p>
                     <p className="text-[#2eb793] text-[11px] font-semibold mt-1">Managing Partner | Paxlaw</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#2eb793]/10 rounded-[2rem] -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS - Cân đối card dịch vụ */}
      <section id="expertise" className="bg-[#1d6266] py-24 md:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold text-[#2eb793] uppercase tracking-[0.4em] mb-4">Dịch vụ chuyên môn</h2>
            <h3 className="text-4xl font-bold tracking-tight">Giải pháp pháp lý toàn diện</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2eb793]/40 transition-all group flex flex-col h-full">
                <div className="w-11 h-11 bg-[#2eb793] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-black/10 group-hover:scale-105 transition-transform">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4 leading-snug">{item.title}</h3>
                <p className="text-slate-300 text-[13px] mb-8 leading-relaxed font-light opacity-80 italic">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <span className="text-[9px] font-bold text-[#2eb793] tracking-widest uppercase">
                    {item.deal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY DEALS - Thương vụ */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-[10px] font-bold text-[#2eb793] uppercase tracking-[0.4em] mb-4">Thành tựu tiêu biểu</h2>
        <h3 className="text-3xl font-bold mb-16 text-[#1d6266] font-serif italic">Thương vụ nổi bật</h3>

        <div className="grid gap-3 text-left">
          {[
            { label: "M&A Bất động sản", detail: "Thương vụ quy mô 1.500 tỷ đồng (Đối tác Hàn Quốc)", icon: <Briefcase size={16} /> },
            { label: "Dự án Resort & Golf", detail: "Xây dựng nền tảng pháp lý quy mô 1.600 tỷ đồng (Vốn Nga)", icon: <MapPin size={16} /> },
            { label: "Hợp đồng EPC Năng lượng", detail: "Dự án trị giá 20 triệu USD (Nhà thầu Nhật Bản)", icon: <Flag size={16} /> },
            { label: "Tái cấu trúc Tập đoàn", detail: "Tái cấu trúc danh mục tài sản > 1.000 tỷ đồng", icon: <ShieldCheck size={16} /> },
          ].map((deal, idx) => (
            <div key={idx} className="flex items-center justify-between p-6 rounded-xl bg-white border border-slate-100 hover:shadow-xl hover:border-[#2eb793]/10 transition-all group cursor-pointer">
               <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-[#1d6266] group-hover:bg-[#2eb793] group-hover:text-white transition-all shadow-sm">
                    {deal.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#1d6266]">{deal.label}</h4>
                    <p className="text-slate-400 text-[12px] mt-1">{deal.detail}</p>
                  </div>
               </div>
               <ChevronRight size={18} className="text-slate-200 group-hover:text-[#2eb793] transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Cân đối lại toàn bộ thông tin */}
      <footer className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Cột Logo: Rộng hơn để thoáng */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src={assets.logo} 
                alt="Paxlaw Footer" 
                className="h-8 w-auto mb-8 object-contain"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hidden mb-8"><LogoFallback /></div>
              <p className="text-slate-400 text-[12px] leading-relaxed max-w-xs italic border-l-2 border-[#2eb793] pl-5">
                "Be Grace, Build Grand. Đơn vị dẫn đầu trong lĩnh vực tư vấn pháp lý và pháp chế thuê ngoài."
              </p>
            </div>
            
            {/* Cột Văn phòng */}
            <div className="md:col-span-4 text-center md:text-left">
              <h4 className="font-bold text-[#1d6266] mb-6 uppercase tracking-[0.3em] text-[9px]">Văn phòng Hà Nội</h4>
              <p className="text-slate-500 text-[13px] flex gap-3 justify-center md:justify-start leading-relaxed font-light">
                <MapPin size={14} className="text-[#2eb793] shrink-0 mt-1" />
                Tầng 5, số 31A Nguyễn Quốc Trị, <br /> Trung Hoà, Yên Hoà, Cầu Giấy, Hà Nội
              </p>
              <p className="text-slate-500 text-[13px] mt-4 flex gap-3 justify-center md:justify-start font-bold">
                <Globe size={14} className="text-[#2eb793] shrink-0" />
                www.paxlaw.vn
              </p>
            </div>

            {/* Cột Kết nối trực tiếp & QR */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end">
              <h4 className="font-bold text-[#1d6266] mb-6 uppercase tracking-[0.3em] text-[9px]">Kết nối trực tuyến</h4>
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
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d6266] hover:bg-[#2eb793] hover:text-white transition-all font-black text-[9px] shadow-sm border border-slate-100 uppercase"
                    >
                      {link.label}
                    </a>

                    {/* QR POPOVER - Cân đối kích thước hợp lý */}
                    <div className={`hidden md:block absolute bottom-full mb-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 origin-bottom ${hoveredSocial === link.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-90 invisible'}`}>
                      <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 w-36 text-center">
                        <div className="w-full aspect-square bg-slate-50 rounded-xl flex items-center justify-center border border-[#2eb793]/10 overflow-hidden mb-2">
                           <img 
                              src={link.qrImage} 
                              alt={`QR ${link.name}`} 
                              className="w-full h-full object-contain p-1"
                              onError={(e) => { 
                                // Tự động tạo mã QR thật nếu ảnh bạn dán bị lỗi
                                e.target.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link.url)}`; 
                              }}
                           />
                        </div>
                        <p className="text-[8px] font-black text-[#1d6266] uppercase tracking-widest">Truy cập {link.name}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-300 mt-4 italic md:block hidden tracking-wide">Di chuột để hiện mã QR liên hệ</p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-300 text-[8px] font-bold tracking-[0.3em] uppercase text-center">
             <p>© 2024 PAXLAW LEGAL CONSULTING CO., LTD.</p>
             <div className="flex gap-8">
                <a href="#" className="hover:text-[#2eb793] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#2eb793] transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
