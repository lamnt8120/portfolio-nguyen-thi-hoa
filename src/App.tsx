import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, FileText, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, Award, ShieldCheck
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Xử lý hiệu ứng navbar khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#2eb793] selection:text-white">
      
      {/* N A V B A R */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo Area */}
            <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className={`flex items-center justify-center w-10 h-10 rounded bg-[#1d6266] text-white mr-3 group-hover:bg-[#2eb793] transition-colors`}>
                <Scale className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-wide leading-tight ${isScrolled ? 'text-[#1d6266]' : 'text-white'}`}>
                  PAXLAW
                </span>
                <span className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled ? 'text-[#2eb793]' : 'text-[#2eb793]'}`}>
                  Luật sư Hoa Nguyễn
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Giới thiệu', 'Lĩnh vực luật sư', 'Ngoại khoá', 'Liên hệ'].map((item, index) => {
                const ids = ['gioi-thieu', 'linh-vuc', 'ngoai-khoa', 'lien-he'];
                return (
                  <button 
                    key={item}
                    onClick={() => scrollTo(ids[index])}
                    className={`font-bold text-sm uppercase tracking-wide transition-colors hover:text-[#2eb793] ${isScrolled ? 'text-[#1d6266]' : 'text-slate-100'}`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? 'text-[#1d6266]' : 'text-white'}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1d6266] shadow-xl py-4 flex flex-col items-center space-y-4 border-t border-[#2eb793]/30">
            {['Giới thiệu', 'Lĩnh vực luật sư', 'Ngoại khoá', 'Liên hệ'].map((item, index) => {
              const ids = ['gioi-thieu', 'linh-vuc', 'ngoai-khoa', 'lien-he'];
              return (
                <button 
                  key={item}
                  onClick={() => scrollTo(ids[index])}
                  className="font-bold text-white uppercase tracking-wide w-full py-2 hover:text-[#2eb793]"
                >
                  {item}
                </button>
              )
            })}
          </div>
        )}
      </nav>

      {/* H E R O   S E C T I O N */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1d6266] pt-24 pb-20">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2eb793] rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
          <div className="absolute bottom-20 -left-20 w-72 h-72 bg-[#2eb793] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Text Content - Left */}
            <div className="lg:w-1/2 text-center lg:text-left z-10">
              <p className="text-[#2eb793] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Founder / CEO & Luật sư Điều hành</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                HOA NGUYỄN
              </h1>
              <p className="text-xl md:text-2xl text-[#2eb793] font-medium mb-6 italic">"Be Grace, Build Grand."</p>
              <p className="text-base md:text-lg text-slate-200 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Hơn 15 năm kinh nghiệm. Đồng hành kiến tạo khung pháp lý bền vững, bảo vệ quyền lợi và khơi mở tiềm năng phát triển cho doanh nghiệp thông qua mạng lưới toàn cầu P.A.N.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button onClick={() => scrollTo('lien-he')} className="px-8 py-3 bg-[#2eb793] hover:bg-[#259b7c] text-white font-bold rounded shadow-lg hover:shadow-[#2eb793]/30 uppercase tracking-wide text-sm w-full sm:w-auto transition-all">
                  Kết nối chuyên gia
                </button>
                <button onClick={() => scrollTo('linh-vuc')} className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-[#1d6266] text-white font-bold rounded uppercase tracking-wide text-sm w-full sm:w-auto transition-all">
                  Khám phá giải pháp
                </button>
              </div>
            </div>

            {/* Image Content - Right */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative z-10 pb-16 lg:pb-0">
              {/* Decorative frame behind image */}
              <div className="absolute inset-0 bg-[#2eb793] rounded-2xl transform translate-x-4 translate-y-4 opacity-40 hidden lg:block w-4/5 ml-auto"></div>
              
              <img 
                src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                alt="Luật sư Hoa Nguyễn - CEO Paxlaw" 
                className="relative z-10 w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover object-top border-4 border-[#2eb793]/30 aspect-[4/5] lg:aspect-auto"
              />
            </div>
          </div>
        </div>

        {/* Motif Dải Lụa (Silk Ribbon Wave) ở đáy Hero */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
             <path fill="#ffffff" fillOpacity="0.1" d="M0 60 C 360 120, 1080 0, 1440 60 L 1440 120 L 0 120 Z"></path>
             <path fill="#ffffff" fillOpacity="0.4" d="M0 80 C 480 140, 960 -20, 1440 80 L 1440 120 L 0 120 Z"></path>
             <path fill="#ffffff" d="M0 100 C 600 160, 840 20, 1440 100 L 1440 120 L 0 120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 1. G I Ớ I   T H I Ệ U */}
      <section id="gioi-thieu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Cột trái: Thông tin chung */}
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-1 w-12 bg-[#2eb793]"></div>
                <h2 className="text-3xl font-extrabold text-[#1d6266] uppercase tracking-wide">Về Tôi</h2>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-lg text-justify font-light">
                Trong thế giới pháp luật vốn mang sắc thái cứng nhắc, tôi lựa chọn phương pháp tiếp cận <b className="text-[#1d6266]">Tinh tế (Graceful)</b> và <b className="text-[#1d6266]">Sâu sắc (Insightful)</b>. Với tư cách là người sáng lập Paxlaw, tôi tin rằng giải pháp pháp lý không chỉ để giải quyết tranh chấp mà còn để phòng ngừa rủi ro, tạo nền tảng vững chắc để doanh nghiệp tự tin tiến xa.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg text-justify font-light">
                Với 15 năm thực chiến, chuyên môn của tôi tập trung vào cấu trúc M&A, tư vấn đầu tư, quản lý ngoại hối và các giao dịch xuyên biên giới. Thông qua việc tiên phong cung cấp giải pháp pháp chế thuê ngoài <b className="text-[#2eb793]">PaxFlow</b> và mạng lưới <b className="text-[#2eb793]">P.A.N</b> toàn cầu, tôi cam kết bảo vệ lợi ích tối đa cho khách hàng đa quốc gia.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-5 rounded border-l-4 border-[#1d6266] group hover:bg-[#1d6266] transition-colors">
                  <h4 className="font-extrabold text-[#1d6266] group-hover:text-white text-3xl mb-1">15+</h4>
                  <p className="text-sm font-medium text-slate-500 group-hover:text-[#2eb793]">Năm Kinh Nghiệm</p>
                </div>
                <div className="bg-slate-50 p-5 rounded border-l-4 border-[#2eb793] group hover:bg-[#2eb793] transition-colors">
                  <h4 className="font-extrabold text-[#1d6266] group-hover:text-white text-3xl mb-1">50+</h4>
                  <p className="text-sm font-medium text-slate-500 group-hover:text-white">Quốc Gia (Mạng lưới P.A.N)</p>
                </div>
              </div>

              {/* Học vấn & Ngôn ngữ */}
              <div className="bg-[#1d6266]/5 p-6 rounded-lg space-y-4 border border-[#1d6266]/10">
                <h3 className="font-bold text-xl text-[#1d6266] flex items-center"><GraduationCap className="w-5 h-5 mr-2 text-[#2eb793]"/> Học Vấn & Chứng Chỉ</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2 font-medium">
                  <li>Thạc sỹ Chính sách & Luật thương mại quốc tế (ĐH Ngoại Thương)</li>
                  <li>Chứng chỉ hành nghề Luật sư & Quản Tài Viên</li>
                  <li>Chứng chỉ Đại diện Sở hữu Công nghiệp & Nghiệp vụ Ngân hàng</li>
                </ul>
                <div className="pt-4 flex items-center space-x-2 text-slate-700 border-t border-[#1d6266]/10 mt-4">
                  <Globe2 className="w-5 h-5 text-[#2eb793]"/>
                  <span className="font-bold text-[#1d6266]">Ngôn ngữ:</span> 
                  <span className="font-medium">Tiếng Việt, Tiếng Anh, Tiếng Nhật.</span>
                </div>
              </div>
            </div>

            {/* Cột phải: Kinh nghiệm làm việc */}
            <div className="lg:w-1/2">
               <h3 className="text-2xl font-extrabold text-[#1d6266] mb-8 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-[#2eb793]"/> Hành Trình Sự Nghiệp
               </h3>
               
               <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#2eb793] before:to-transparent">
                  
                  {/* Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#1d6266] text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-lg border border-[#2eb793]/20 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#2eb793]">
                      <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-extrabold text-[#1d6266] text-lg">Paxlaw Law Firm</div>
                        <span className="px-2 py-1 bg-[#2eb793]/10 text-[#2eb793] rounded text-xs font-bold">12/2024 - Nay</span>
                      </div>
                      <div className="text-sm text-[#2eb793] font-bold mb-2 uppercase tracking-wide">CEO / Luật sư Điều hành</div>
                      <p className="text-sm text-slate-600 font-light">Thiết kế chiến lược pháp lý cá nhân hóa, cung cấp dịch vụ PaxFlow trọn gói về M&A, đầu tư cho khách hàng đa quốc gia.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-[#1d6266] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-[#2eb793] group-hover:text-white">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-lg border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#2eb793]">
                      <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-bold text-[#1d6266] text-lg">Green Investment JSC</div>
                        <span className="text-xs font-medium text-slate-500">2022 - Nay</span>
                      </div>
                      <div className="text-sm text-slate-500 font-bold mb-2">Giám đốc Pháp chế</div>
                      <p className="text-sm text-slate-600 font-light">Quản trị rủi ro, đảm bảo tuân thủ pháp luật, tạo nền tảng vững chắc cho các dự án đầu tư và liên doanh.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-[#1d6266] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-[#2eb793] group-hover:text-white">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-lg border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#2eb793]">
                      <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-bold text-[#1d6266] text-lg">Penfield Law Firm</div>
                        <span className="text-xs font-medium text-slate-500">2018 - 2024</span>
                      </div>
                      <div className="text-sm text-slate-500 font-bold mb-2">Phó Giám Đốc / Partner</div>
                      <p className="text-sm text-slate-600 font-light">Dẫn dắt các thương vụ M&A phức tạp và thiết lập kế hoạch tái cấu trúc tài chính cho các tập đoàn lớn nghìn tỷ.</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-[#1d6266] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-[#2eb793] group-hover:text-white">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-lg border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg hover:border-[#2eb793]">
                      <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-bold text-[#1d6266] text-lg">Techcombank</div>
                        <span className="text-xs font-medium text-slate-500">2012 - 2018</span>
                      </div>
                      <div className="text-sm text-slate-500 font-bold mb-2">Chuyên viên Pháp chế cao cấp</div>
                      <p className="text-sm text-slate-600 font-light">Hỗ trợ pháp lý ngoại hối, quản lý vốn, và chuẩn hóa quy trình phục vụ hệ thống Khách hàng Doanh nghiệp lớn.</p>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. L Ĩ N H   V Ự C   &   V Ụ   V I Ệ C   Đ I Ể N   H Ì N H */}
      <section id="linh-vuc" className="py-24 bg-[#1d6266] text-white relative">
        {/* Decorative background Motif */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2eb793" d="M42.7,-73.4C55.9,-66.6,67.6,-56.3,77.5,-43.5C87.4,-30.8,95.5,-15.4,96.3,0.5C97.1,16.3,90.6,32.7,80.7,45.4C70.8,58.1,57.5,67.2,43.3,74.1C29.1,81,14.6,85.6,0.5,84.7C-13.6,83.8,-27.1,77.3,-40.4,70C-53.7,62.7,-66.8,54.6,-75.4,42.5C-84,30.4,-88.1,15.2,-87.3,0.5C-86.5,-14.3,-80.8,-28.6,-72.1,-40.5C-63.4,-52.4,-51.7,-61.9,-39,-69C-26.2,-76.1,-13.1,-80.8,0.7,-82C14.5,-83.2,29.4,-80.1,42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4">Lĩnh vực Trọng tâm & Vụ việc Điển hình</h2>
            <div className="h-1 w-24 bg-[#2eb793] mx-auto"></div>
            <p className="mt-6 text-slate-300 max-w-2xl mx-auto font-light text-lg">Thiết kế các chiến lược pháp lý Đáng tin cậy (Trustworthy), mang lại thành công bền vững cho doanh nghiệp trong các giao dịch nghìn tỷ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#144b4e] p-8 rounded-lg border border-[#2eb793]/20 hover:border-[#2eb793] transition-all hover:-translate-y-1 group shadow-lg">
              <div className="bg-[#1d6266] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2eb793] transition-colors">
                <Building2 className="text-[#2eb793] group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">M&A & Tái Cấu Trúc</h3>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Tư vấn thâu tóm công ty sản xuất thép (Miền Bắc) giá trị <b className="text-white ml-1">1.000 tỷ VNĐ</b>.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Chuyển nhượng dự án BĐS nghỉ dưỡng Bãi Dài (Khánh Hòa) trị giá <b className="text-white ml-1">1.600 tỷ VNĐ</b>.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Tái cấu trúc tài chính tập đoàn khoáng sản Thái Nguyên (Vốn <b className="text-white ml-1">1.000+ tỷ VNĐ</b>).</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Tư vấn bán cổ phần EPC top đầu VN cho đối tác Nhật Bản giá trị <b className="text-white ml-1">20 triệu USD</b>.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#144b4e] p-8 rounded-lg border border-[#2eb793]/20 hover:border-[#2eb793] transition-all hover:-translate-y-1 group shadow-lg">
              <div className="bg-[#1d6266] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2eb793] transition-colors">
                <Landmark className="text-[#2eb793] group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tài Chính - Ngân Hàng</h3>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Tư vấn phát hành trái phiếu riêng lẻ dự án tại Bà Rịa - Vũng Tàu trị giá <b className="text-white ml-1">800 tỷ VNĐ</b>.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Quản trị rủi ro, xử lý khủng hoảng cho 07 gói trái phiếu với giá trị <b className="text-white ml-1">500 - 850 tỷ VNĐ</b> mỗi gói.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Thiết kế cấu trúc các khoản vay và trả nợ quá hạn (<b className="text-white">3.5 triệu USD</b>) cho Tập đoàn tài chính Hà Lan.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#144b4e] p-8 rounded-lg border border-[#2eb793]/20 hover:border-[#2eb793] transition-all hover:-translate-y-1 group shadow-lg">
              <div className="bg-[#1d6266] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2eb793] transition-colors">
                <Globe2 className="text-[#2eb793] group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Đầu Tư Xuyên Biên Giới & BĐS</h3>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Cố vấn toàn diện dự án nghỉ dưỡng <b className="text-white mx-1">1000+ Condotel 5 sao</b> tại Nha Trang.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Cố vấn pháp lý phát triển dự án khu đô thị quy mô <b className="text-white mx-1">37.4ha</b> tại Bà Rịa - Vũng Tàu.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Xây dựng và cập nhật Báo cáo chính sách PPP tại Việt Nam cho Bộ Kế hoạch & Đầu tư Hàn Quốc.</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Thiết lập pháp nhân, tư vấn vận hành cho nhà đầu tư FDI từ Mỹ, Nhật Bản, Hong Kong.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-[#144b4e] p-8 rounded-lg border border-[#2eb793]/20 hover:border-[#2eb793] transition-all hover:-translate-y-1 group shadow-lg">
              <div className="bg-[#1d6266] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2eb793] transition-colors">
                <ShieldCheck className="text-[#2eb793] group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hợp Đồng & Giải Quyết Tranh Chấp</h3>
              <ul className="space-y-3 text-slate-300 text-sm font-light">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Soạn thảo chuẩn hóa bộ mẫu hợp đồng dịch vụ trên nền tảng E-commerce (Shopee, Lazada, Tiki).</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Đại diện giải quyết tranh chấp hợp đồng EPC của Tập đoàn Xây dựng VN (Trị giá <b className="text-white ml-1">250 tỷ VNĐ</b>).</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-[#2eb793] shrink-0 mr-2"/> Bảo vệ quyền lợi Chủ đầu tư trong tranh chấp thầu xây dựng tại Khánh Hòa (Trị giá <b className="text-white ml-1">350 tỷ VNĐ</b>).</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. N G O Ạ I   K H Ó A */}
      <section id="ngoai-khoa" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Motif góc trái */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#2eb793] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 -right-20 w-64 h-64 bg-[#1d6266] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d6266] uppercase tracking-wide mb-4">Cộng đồng & Xã hội</h2>
            <div className="h-1 w-24 bg-[#2eb793] mx-auto"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2eb793] hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start">
              <Award className="w-10 h-10 text-[#2eb793] shrink-0 mt-1 sm:mr-5 mb-4 sm:mb-0" />
              <div>
                <h3 className="text-xl font-bold text-[#1d6266]">Phó Chủ Tịch Quốc Gia JCI Việt Nam 2026</h3>
                <p className="text-slate-600 mt-2 font-light text-justify">
                  Thành viên Ban Lãnh đạo cấp cao tại JCI Việt Nam (Junior Chamber International). Cống hiến với tư duy lãnh đạo dẫn dắt, tạo ra những tác động tích cực và xây dựng giá trị bền vững cho cộng đồng doanh nhân trẻ.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#1d6266] hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start">
              <Scale className="w-10 h-10 text-[#1d6266] shrink-0 mt-1 sm:mr-5 mb-4 sm:mb-0" />
              <div>
                <h3 className="text-xl font-bold text-[#1d6266]">Thành viên Đoàn Luật sư</h3>
                <p className="text-slate-600 mt-2 font-light text-justify">
                  Thành viên chính thức của Đoàn Luật sư Việt Nam & Đoàn Luật sư TP. Hà Nội. Đề cao tính chính trực, trách nhiệm nghề nghiệp và tính chuyên môn khoa học được thể hiện qua triết lý thương hiệu Paxlaw.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2eb793] hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start">
              <GraduationCap className="w-10 h-10 text-[#2eb793] shrink-0 mt-1 sm:mr-5 mb-4 sm:mb-0" />
              <div>
                <h3 className="text-xl font-bold text-[#1d6266]">Giảng viên Thỉnh giảng</h3>
                <p className="text-slate-600 mt-2 font-light text-justify">
                  Đại học Thành Đông (Từ 2019 - Nay). Chia sẻ kiến thức thực tiễn và tư duy pháp lý chuyên nghiệp tại Bộ môn Luật chung & Tài chính Ngân hàng, góp phần ươm mầm thế hệ chuyên gia tương lai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. L I Ê N   H Ệ */}
      <section id="lien-he" className="py-24 bg-[#1d6266] text-center relative border-t-8 border-[#2eb793]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-[#2eb793]/20 px-4 py-2 rounded-full mb-6">
            <Scale className="w-6 h-6 text-[#2eb793] inline-block mr-2" />
            <span className="text-white font-bold tracking-widest text-sm uppercase">Paxlaw | Giải pháp toàn diện</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">Kết nối cùng Luật sư Hoa Nguyễn</h2>
          <p className="text-slate-300 mb-12 font-light text-lg">Đồng hành xây dựng nền tảng pháp lý an tâm cho sự nghiệp kinh doanh của bạn.</p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            
            {/* Phone Button */}
            <ContactIcon 
              icon={<Phone />} 
              label="Điện thoại" 
              value="0911 55 3686" 
              href="tel:+84911553686" 
            />

            {/* Email Button */}
            <ContactIcon 
              icon={<Mail />} 
              label="Email" 
              value="hoant@paxlaw.vn" 
              href="mailto:hoant@paxlaw.vn" 
            />

            {/* LinkedIn Button with QR */}
            <ContactIcon 
              icon={<Linkedin />} 
              label="LinkedIn" 
              value="lawyerhoanguyen" 
              href="https://linkedin.com/in/lawyerhoanguyen" 
              qrUrl="https://linkedin.com/in/lawyerhoanguyen"
            />

            {/* Facebook Button with QR */}
            <ContactIcon 
              icon={<Facebook />} 
              label="Facebook" 
              value="Hoa Nguyen" 
              href="https://www.facebook.com/Paxlaw.vn" 
              qrUrl="https://facebook.com"
            />

          </div>
        </div>
      </section>

      {/* F O O T E R */}
      <footer className="bg-[#144b4e] py-10 text-center border-t border-[#1d6266]">
        <div className="flex justify-center items-center mb-6">
            <Scale className="h-8 w-8 text-[#2eb793] mr-2" />
            <span className="font-extrabold text-2xl text-white tracking-wider">PAXLAW</span>
        </div>
        <p className="text-slate-400 text-sm font-light">
          &copy; {new Date().getFullYear()} PAXLAW. "Be Grace, Build Grand." All rights reserved.
        </p>
        <p className="text-slate-400 text-sm mt-2 font-light">
          Địa chỉ: Tầng 5, số 1 ngõ 30 Nguyễn Thị Định, Trung Hòa, Cầu Giấy, Hà Nội
        </p>
      </footer>
    </div>
  );
}

// Component Icon Liên hệ (Có hiệu ứng Hover hiện QR Code)
function ContactIcon({ icon, label, value, href, qrUrl }) {
  // Sử dụng API tạo QR Code miễn phí để tự động render mã QR từ link URL
  const qrImageSource = qrUrl ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrUrl)}&color=1d6266` : null;

  return (
    <div className="relative group flex flex-col items-center cursor-pointer">
      {/* Nút bấm tròn */}
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#1d6266] border-2 border-[#2eb793] flex items-center justify-center text-[#2eb793] hover:bg-[#2eb793] hover:text-white transition-all hover:scale-110 shadow-lg"
      >
        {React.cloneElement(icon, { className: 'w-7 h-7' })}
      </a>
      <span className="mt-4 text-sm font-bold text-white uppercase tracking-wider">{label}</span>
      <span className="text-xs text-[#2eb793] mt-1 font-medium">{value}</span>

      {/* Tooltip QR Code ẩn, hiện khi hover */}
      {qrImageSource && (
        <div className="absolute bottom-full mb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50">
          <div className="bg-white p-3 rounded-lg shadow-2xl relative border-2 border-[#2eb793]">
            <img src={qrImageSource} alt={`QR Code for ${label}`} className="w-32 h-32 rounded" />
            <p className="text-[10px] uppercase tracking-wider text-center text-[#1d6266] mt-2 font-bold">Quét để truy cập</p>
            {/* Mũi tên trỏ xuống */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#2eb793]"></div>
            <div className="absolute top-[calc(100%-2px)] left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  );
}
