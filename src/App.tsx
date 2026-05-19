import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck, BookOpen, Globe,
  MapPin, Flag, Rocket, Crown, Network, User, HandHeart, CheckCircle,
  ChevronDown, ZoomIn
} from 'lucide-react';

/* =========================================
   1. DICTIONARY (DỮ LIỆU ĐA NGỮ)
========================================= */

const dict = {
  vi: {
    nav: ['Tổng quan', 'Chuyên môn', 'Dấu ấn'],
    hero: { subtitle: "LUẬT SƯ ĐIỀU HÀNH & CỐ VẤN CẤP CAO", desc: "Pháp luật là không gian kiến tạo lợi thế cho doanh nghiệp." },
    ui: { viewDetails: "Xem chi tiết", hideDetails: "Thu gọn" },
    profile: { title: "Tổng quan & Hành trình", subtitle: "Luật sư Nguyễn Thị Hoa", desc1: "Dưới lăng kính của một người trực tiếp gắn bó với nhịp đập kinh doanh, tôi chưa bao giờ coi hành lang pháp lý là những rào cản khô khan.", desc2: "Khi pháp luật được thấu hiểu và vận dụng linh hoạt, chúng không chỉ là ranh giới đúng - sai, mà là bệ phóng vững chắc." },
    stats: [{ value: "15+", label: "Năm Kinh Nghiệm" }, { value: "50+", label: "Quốc Gia Đối Tác" }],
    career: { title: "Sự nghiệp thực chiến" },
    practice: { title: "Thương vụ & Dự án tiêu biểu", speakerTitle: "Hoạt động diễn giả / Kết nối", domestic: "Trong nước", international: "Quốc tế" },
    community: { title: "Dấu ấn cộng đồng", activityTitle: "Giá trị kiến tạo" }
  },
  en: {
    nav: ['Overview', 'Expertise', 'Impact'],
    hero: { subtitle: "MANAGING ATTORNEY & SENIOR COUNSEL", desc: "Law is the framework that creates competitive advantages for businesses." },
    ui: { viewDetails: "View Details", hideDetails: "Show Less" },
    profile: { title: "Summary & Journey", subtitle: "Atty. Hoa Nguyen", desc1: "Through the lens of someone deeply engaged with the pulse of business, I have never viewed legal frameworks as rigid barriers.", desc2: "When the law is thoroughly understood and flexibly applied, it transforms into a solid launchpad." },
    stats: [{ value: "15+", label: "Years of Experience" }, { value: "50+", label: "Global Partners" }],
    career: { title: "Professional Experience" },
    practice: { title: "Key Transactions & Projects", speakerTitle: "Speaking & Networking", domestic: "Domestic", international: "International" },
    community: { title: "Community Impact", activityTitle: "Featured Activities" }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [lang, setLang] = useState('vi');
  const [zoomedImage, setZoomedImage] = useState(null);
  const t = dict[lang];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-800 flex flex-col lg:flex-row p-0 lg:p-4" style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      {/* --- MODAL PHÓNG TO ẢNH --- */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4" onClick={() => setZoomedImage(null)}>
          <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white"><X /></button>
          <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* --- MAIN LAYOUT --- */}
      <div className="w-full h-screen max-w-[1440px] mx-auto bg-white lg:rounded-[2rem] shadow-xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* Sidebar ... (giữ nguyên logic cũ) */}
        <div className="w-full lg:w-[320px] bg-[#1d6266] text-white flex flex-col p-6">
            <h1 className="text-xl font-bold mb-8">Nguyễn Thị Hoa</h1>
            <div className="space-y-4">
                {t.nav.map((item, idx) => (
                    <button key={idx} onClick={() => setActiveTab(idx)} className={`block w-full text-left p-3 rounded ${activeTab === idx ? 'bg-[#2eb793]' : ''}`}>
                        {item}
                    </button>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
            {activeTab === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ví dụ thẻ ảnh có tính năng zoom */}
                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="h-40 bg-slate-100 flex items-center justify-center cursor-pointer group" onClick={() => setZoomedImage('https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg')}>
                            <img src="https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" className="w-full h-full object-contain" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold">Workshop Pháp lý thông minh</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
