import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck, BookOpen, Globe
} from 'lucide-react';

/* =========================================
   1. DICTIONARY (DỮ LIỆU ĐA NGỮ - ĐÃ CHUẨN HOÁ THUẬT NGỮ)
========================================= */

const dict = {
  vi: {
    nav: ['Hồ sơ', 'Chuyên môn', 'Cộng đồng', 'Liên hệ'],
    hero: {
      subtitle: "LUẬT SƯ ĐIỀU HÀNH & CỐ VẤN CẤP CAO",
      quote: `"Global Mind, Silk Touch."`,
      // Đã dịch chuyển vị trí <br> để cân bằng 2 dòng
      desc: "Hơn 15 năm kinh nghiệm kiến tạo màng lọc rủi ro pháp lý vững chắc, bảo vệ lợi ích hợp pháp và khơi mở <br class='hidden md:block' /> tiềm năng phát triển cho doanh nghiệp thông qua mạng lưới chuyên gia pháp lý toàn cầu (Pax Alliance Network - P.A.N).",
      scroll: "Khám phá"
    },
    profile: {
      title: "Tổng quan chuyên môn",
      subtitle: "Hồ sơ chuyên gia",
      desc1: "Trong thế giới pháp luật mang đậm sắc thái khuôn mẫu, tôi lựa chọn phương pháp tiếp cận <strong>Tinh tế (Graceful)</strong> và <strong>Sâu sắc (Insightful)</strong>. Giải pháp pháp lý tối ưu không chỉ giải quyết tranh chấp, mà còn phải tạo ra bệ phóng vững chắc cho sự phát triển của doanh nghiệp.",
      desc2: "Chuyên môn thực chiến của tôi tập trung vào cấu trúc M&A, tư vấn đầu tư và các giao dịch xuyên biên giới. Thông qua <strong>giải pháp pháp chế thuê ngoài (PaxFlow)</strong> và <strong>mạng lưới liên kết toàn cầu (P.A.N)</strong>, tôi cam kết bảo vệ lợi ích tối đa cho các đối tác."
    },
    stats: [
      { value: "15+", label: "Năm Kinh Nghiệm" },
      { value: "50+", label: "Quốc Gia (Mạng lưới P.A.N)" }
    ],
    highlights: [
      {
        title: "Học vấn & Đào tạo",
        icon: GraduationCap,
        items: [
          "Thạc sĩ Chính sách & Luật Thương mại Quốc tế - ĐH Ngoại Thương",
          "Cử nhân Luật Thương mại - Đại học Luật Hà Nội",
          "Khóa đào tạo Nghiệp vụ Luật sư - Học viện Tư pháp"
        ]
      },
      {
        title: "Giảng dạy & Đào tạo",
        icon: BookOpen,
        items: [
          "Giảng viên thỉnh giảng Luật Ngân hàng - Đại học Thành Đông",
          "Chuyên gia đào tạo nội bộ Quản lý ngoại hối - Techcombank"
        ]
      },
      {
        title: "Chứng chỉ hành nghề & Tổ chức",
        icon: Award,
        items: [
          "Thành viên Đoàn Luật sư TP. Hà Nội (Liên đoàn LS Việt Nam)",
          "Chứng chỉ hành nghề Quản tài viên",
          "Chứng chỉ Đại diện Sở hữu Công nghiệp"
        ]
      }
    ],
    career: {
      title: "Hành trình chuyên môn",
      subtitle: "Sự nghiệp thực chiến"
    },
    timelineData: [
      {
        period: "12/2024 - Nay",
        role: "Luật sư Sáng lập & Điều hành",
        company: "Paxlaw Law Firm",
        desc: "Thiết kế chiến lược pháp lý cá nhân hóa, cung cấp giải pháp pháp chế thuê ngoài (PaxFlow) trọn gói về M&A và đầu tư cho khách hàng đa quốc gia.",
      },
      {
        period: "2022 - Nay",
        role: "Giám đốc Pháp chế",
        company: "Green Investment JSC",
        desc: "Quản trị rủi ro, đảm bảo tuân thủ pháp luật, tạo nền tảng quản trị vững chắc cho các dự án đầu tư và liên doanh.",
      },
      {
        period: "2018 - 2024",
        role: "Phó Giám đốc / Luật sư Thành viên",
        company: "Penfield Law Firm",
        desc: "Dẫn dắt các thương vụ M&A phức tạp và thiết lập kế hoạch tái cấu trúc tài chính cho các tập đoàn lớn; điều phối giải quyết tranh chấp đa lĩnh vực.",
      },
      {
        period: "2012 - 2018",
        role: "Chuyên viên Pháp chế Cấp cao",
        company: "Techcombank",
        desc: "Hỗ trợ pháp lý ngoại hối, quản lý vốn, và chuẩn hóa quy trình phục vụ hệ thống Khách hàng Doanh nghiệp bán buôn.",
      }
    ],
    practice: {
      title: "Lĩnh vực hành nghề",
      subtitle: "Thực tiễn & Giải pháp"
    },
    practiceAreas: [
      {
        title: "M&A & Tái cấu trúc doanh nghiệp",
        icon: Building2,
        cases: [
          { text: "Tư vấn bên mua trong thương vụ thâu tóm nhà máy sản xuất thép (Miền Bắc) giá trị", highlight: "1.000 tỷ VNĐ." },
          { text: "Tư vấn chuyển nhượng dự án Bất động sản nghỉ dưỡng Bãi Dài (Khánh Hòa) trị giá", highlight: "1.600 tỷ VNĐ." },
          { text: "Tư vấn tái cấu trúc tài chính tập đoàn khoáng sản Thái Nguyên (Tổng vốn", highlight: "1.000+ tỷ VNĐ)." },
          { text: "Tư vấn bán cổ phần của công ty EPC top đầu VN cho đối tác Nhật Bản giá trị", highlight: "20 triệu USD." },
        ]
      },
      {
        title: "Tài chính - Ngân hàng",
        icon: Landmark,
        cases: [
          { text: "Tư vấn phát hành trái phiếu doanh nghiệp riêng lẻ dự án tại Bà Rịa - Vũng Tàu trị giá", highlight: "800 tỷ VNĐ." },
          { text: "Quản trị rủi ro, xử lý khủng hoảng cho 07 gói trái phiếu với giá trị", highlight: "500 - 850 tỷ VNĐ", suffix: " mỗi gói." },
          { text: "Thiết kế cấu trúc các khoản vay và trả nợ nước ngoài (", highlight: "3.5 triệu USD", suffix: ") cho Tập đoàn tài chính Hà Lan." },
        ]
      },
      {
        title: "Đầu tư xuyên biên giới & Bất động sản",
        icon: Globe2,
        cases: [
          { text: "Cố vấn pháp lý toàn diện dự án nghỉ dưỡng", highlight: "1000+ Condotel 5 sao", suffix: " tại Nha Trang." },
          { text: "Cố vấn pháp lý phát triển dự án Khu đô thị quy mô", highlight: "37.4ha", suffix: " tại Bà Rịa - Vũng Tàu." },
          { text: "Xây dựng và cập nhật Báo cáo chính sách PPP tại Việt Nam theo đặt hàng của Bộ KH&ĐT Hàn Quốc.", highlight: "" },
          { text: "Thiết lập pháp nhân, tư vấn vận hành cho nhà đầu tư FDI từ Mỹ, Nhật Bản, Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Hợp đồng thương mại & Tranh chấp",
        icon: ShieldCheck,
        cases: [
          { text: "Soạn thảo chuẩn hóa bộ mẫu hợp đồng cung ứng dịch vụ trên nền tảng E-commerce (Shopee, Lazada, Tiki).", highlight: "" },
          { text: "Đại diện bảo vệ quyền lợi Tập đoàn Xây dựng VN trong tranh chấp hợp đồng EPC (Trị giá", highlight: "250 tỷ VNĐ)." },
          { text: "Bảo vệ quyền lợi Chủ đầu tư trong tranh chấp thầu xây dựng tại Khánh Hòa (Trị giá", highlight: "350 tỷ VNĐ)." },
        ]
      }
    ],
    community: {
      title: "Dấu ấn cộng đồng",
      subtitle: "Trách nhiệm xã hội",
      topicTitle: "Chủ đề trọng tâm",
      topicDesc: "Nội dung chia sẻ thường xuyên tại các diễn đàn pháp lý và khởi nghiệp uy tín.",
      jciTitle: "Lãnh đạo & Tổ chức (JCI)",
      speakerTitle: "Cố vấn & Diễn giả chuyên môn"
    },
    keynoteTopics: [
      "Các vấn đề pháp lý chuyên sâu dành cho Chủ đầu tư và các Start-up.",
      "Định hướng lộ trình phát triển năng lực trong ngành Luật."
    ],
    jciEvents: [
      { year: "2026", title: "Phó Chủ tịch JCI Vietnam", desc: "Phụ trách mảng phát triển kinh doanh và khởi nghiệp, định hướng và dẫn dắt các dự án doanh nhân trẻ.", img: "https://i.postimg.cc/Zqr7kHFk/Pho-chu-ti-ch-JCI.jpg" },
      { year: "2025", title: "Chủ tịch sáng lập JCI Grace", desc: "Kiến tạo và lãnh đạo chapter JCI Grace, mang đến các giá trị tích cực và bền vững cho cộng đồng.", img: "https://i.postimg.cc/Qdn98ZSD/Chu-ti-ch-JCI-Grace.jpg" },
      { year: "2025", title: "Hội nghị JCI ASPAC Mông Cổ", desc: "Đại diện JCI Grace và Đoàn Việt Nam tham gia Hội nghị Châu Á Thái Bình Dương (ASPAC).", img: "https://jci.vn/wp-content/uploads/2025/09/493888640_1116355330518984_4354365979132898970_n.jpg" },
      { year: "2025", title: "Let’s meet up VN", desc: "Đại diện tổ chức và triển khai chương trình kết nối với các cố vấn cấp cao và doanh nghiệp khu vực ASEAN.", img: "https://i.postimg.cc/NjLFPPt9/Let-s-meet-up.jpg" },
      { year: "2025 - 2026", title: "Họp BĐH JCI ASEAN Senator", desc: "Thành viên Đoàn VN tham gia cuộc họp BĐH thường quý tại Tô Châu (Trung Quốc) và Sabah (Malaysia).", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" },
      { year: "2024", title: "JCI World Congress Đài Loan", desc: "Đại diện Đoàn JCI Việt Nam tham gia hội nghị toàn cầu World Congress cùng hàng ngàn đại biểu quốc tế.", img: "https://i.postimg.cc/4d0BV0Xp/congress.jpg" },
      { year: "2024", title: "Dự án Launch to Leader", desc: "Giám đốc sáng lập dự án của JCI Thăng Long. Vinh dự đạt giải thưởng The Most Social Impact JCI VN 2024.", img: "https://i.postimg.cc/NFTSMtRk/launch-to-leader.jpg" },
      { year: "Dự án", title: "JCI Lawyer Council", desc: "Đồng khởi xướng và kiến tạo nền tảng mạng lưới hội đồng luật sư toàn cầu thuộc hệ thống JCI.", img: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop" },
    ],
    speakerEvents: [
      { year: "2024", title: "Triển lãm Trade Expo, Mumbai", desc: "Tham gia đoàn làm việc đại diện cho doanh nghiệp VN phối hợp với Lãnh sự quán VN tại triển lãm dịch vụ quốc tế.", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" },
      { year: "2024", title: "Workshop Pháp Lý Thông Minh (CSK)", desc: "Tham gia với vai trò diễn giả chính tại sự kiện do TT Khởi nghiệp CSK (ĐH Quốc gia) tổ chức. Phân tích rủi ro pháp lý, quan hệ cổ đông và giải pháp cho doanh nghiệp.", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
      { year: "2023-2025", title: "Dự án Shape Your Future", desc: "Thường xuyên góp mặt với vai trò diễn giả hướng nghiệp nghề luật cho sinh viên và thế hệ trẻ.", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
      { year: "2024", title: "Giám khảo SIL ĐH Đại Nam", desc: "Cố vấn pháp lý, Giám khảo trong cuộc thi SIL (Social Innovation Launch) Đại học Đại Nam.", img: "https://i.postimg.cc/15g13P4d/SIL.jpg" }
    ],
    contact: {
      title: "Đồng hành xây dựng nền tảng pháp lý vững chắc cho doanh nghiệp của bạn.",
      subtitle: "Kết nối chuyên gia",
      scanToConnect: "Quét để kết nối",
      address: "Tầng 5, số 31A Nguyễn Quốc Trị, Trung Hoà, Yên Hoà, Hà Nội"
    }
  },
  en: {
    nav: ['Profile', 'Expertise', 'Community', 'Contact'],
    hero: {
      subtitle: "MANAGING ATTORNEY & SENIOR COUNSEL",
      quote: `"Global Mind, Silk Touch."`,
      desc: "Over 15 years of experience in corporate advisory, M&A, financial restructuring, and regulatory compliance. Providing strategic legal guidance <br class='hidden md:block' /> and building global partner networks (Pax Alliance Network - P.A.N) to maximize capital efficiency for multinational clients.",
      scroll: "Explore"
    },
    profile: {
      title: "Professional Summary",
      subtitle: "Expert Profile",
      desc1: "In a legal world characterized by rigid frameworks, I adopt a <strong>Graceful</strong> and <strong>Insightful</strong> approach. The optimal legal solution should not merely resolve disputes but serve as a solid foundation for business growth.",
      desc2: "My expertise centers on M&A structuring, investment advisory, and cross-border transactions. Through our <strong>outsourced legal department solutions (PaxFlow)</strong> and <strong>global partner network (P.A.N)</strong>, I am committed to safeguarding and maximizing the interests of our clients."
    },
    stats: [
      { value: "15+", label: "Years of Experience" },
      { value: "50+", label: "Countries (P.A.N Network)" }
    ],
    highlights: [
      {
        title: "Education",
        icon: GraduationCap,
        items: [
          "Master of International Policy and Law (MIPL) - Foreign Trade University",
          "Bachelor of Commercial Law - Hanoi Law University",
          "Legal Practice Course - Judicial Academy"
        ]
      },
      {
        title: "Teaching & Training",
        icon: BookOpen,
        items: [
          "Visiting Lecturer of Banking Law - Thanh Dong University",
          "Internal Trainer for FX Management - Techcombank"
        ]
      },
      {
        title: "Certifications & Memberships",
        icon: Award,
        items: [
          "Member of Hanoi Bar Association (Vietnam Bar Federation)",
          "Certified Asset Management Officer",
          "Certificate of Industrial Property Representation"
        ]
      }
    ],
    career: {
      title: "Professional Experience",
      subtitle: "Career Journey"
    },
    timelineData: [
      {
        period: "12/2024 - Present",
        role: "Founder / Managing Attorney",
        company: "Paxlaw Law Firm",
        desc: "Led end-to-end legal services for complex M&A, real estate, investment, and compliance for multinational clients; built a global partner network.",
      },
      {
        period: "2022 - Present",
        role: "Head of Legal",
        company: "Green Investment JSC",
        desc: "Oversaw legal compliance and risk governance for investment projects; established foundation for project rollout and operations.",
      },
      {
        period: "2018 - 2024",
        role: "Deputy Director / Partner",
        company: "Penfield Law Firm",
        desc: "Advised on high-profile and complex M&A transactions and supported financial restructuring for mining conglomerates; coordinated multi-sector dispute resolution.",
      },
      {
        period: "2012 - 2018",
        role: "Senior Legal Counsel",
        company: "Techcombank",
        desc: "Delivered legal and compliance support for FX activities and capital management; standardized internal procedures for wholesale banking customers.",
      }
    ],
    practice: {
      title: "Core Competencies",
      subtitle: "Practice Areas"
    },
    practiceAreas: [
      {
        title: "M&A & Corporate Restructuring",
        icon: Building2,
        cases: [
          { text: "Advised on the acquisition of a steel factory in Northern Vietnam valued at", highlight: "VND 1,000 billion." },
          { text: "Advised on the transfer of a resort project in Bai Dai, Khanh Hoa valued at", highlight: "VND 1,600 billion." },
          { text: "Advised on financial restructuring for a mining conglomerate in Thai Nguyen with total capital exceeding", highlight: "VND 1,000 billion." },
          { text: "Advised on the sale of shares in a top-tier Vietnamese EPC company to a Japanese investor for", highlight: "USD 20 million." },
        ]
      },
      {
        title: "Banking & Finance",
        icon: Landmark,
        cases: [
          { text: "Advised on private bond issuance for a project in Ba Ria - Vung Tau valued at", highlight: "VND 800 billion." },
          { text: "Risk management and crisis resolution for 07 bond packages valued between", highlight: "VND 500 - 850 billion", suffix: " each." },
          { text: "Structured overdue foreign loans (", highlight: "USD 3.5 million", suffix: ") for a financial group from the Netherlands." },
        ]
      },
      {
        title: "Cross-Border Investment & Real Estate",
        icon: Globe2,
        cases: [
          { text: "Comprehensive legal counsel for a", highlight: "1000+ 5-star condotel", suffix: " resort project in Nha Trang." },
          { text: "Legal advisory for the development of a", highlight: "37.4ha", suffix: " urban project in Ba Ria - Vung Tau." },
          { text: "Drafted and updated the Vietnam PPP Policy Report for the Ministry of Economy and Finance of South Korea.", highlight: "" },
          { text: "Established legal entities and advised on operations for FDI investors from the US, Japan, and Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Commercial Contracts & Dispute Resolution",
        icon: ShieldCheck,
        cases: [
          { text: "Drafted standard service contract templates for e-commerce platforms (Shopee, Lazada, Tiki).", highlight: "" },
          { text: "Represented a Vietnamese Construction Corporation in resolving an EPC contract dispute valued at", highlight: "VND 250 billion." },
          { text: "Protected the Project Owner's rights in a construction bidding dispute in Khanh Hoa valued at", highlight: "VND 350 billion." },
        ]
      }
    ],
    community: {
      title: "Community Associations",
      subtitle: "Social Responsibility",
      topicTitle: "Keynote Topics",
      topicDesc: "Frequently requested topics at prestigious legal and startup forums.",
      jciTitle: "Leadership & JCI Network",
      speakerTitle: "Startup Advisor & Speaker"
    },
    keynoteTopics: [
      "In-depth legal issues for Project Owners and Start-ups.",
      "Career path orientation and capacity development in the legal profession."
    ],
    jciEvents: [
      { year: "2026", title: "National Vice President, JCI Vietnam", desc: "In charge of business development and entrepreneurship, guiding projects for young entrepreneurs.", img: "https://i.postimg.cc/Zqr7kHFk/Pho-chu-ti-ch-JCI.jpg" },
      { year: "2025", title: "Founding President, JCI Grace", desc: "Founded and led the JCI Grace chapter, bringing positive and sustainable values to the community.", img: "https://i.postimg.cc/Qdn98ZSD/Chu-ti-ch-JCI-Grace.jpg" },
      { year: "2025", title: "JCI ASPAC Conference, Mongolia", desc: "Represented JCI Grace and the Vietnam Delegation at the Asia-Pacific Conference (ASPAC).", img: "https://jci.vn/wp-content/uploads/2025/09/493888640_1116355330518984_4354365979132898970_n.jpg" },
      { year: "2025", title: "Let’s meet up VN", desc: "Represented the organization of networking programs with senior advisors and businesses in the ASEAN region.", img: "https://i.postimg.cc/NjLFPPt9/Let-s-meet-up.jpg" },
      { year: "2025 - 2026", title: "JCI ASEAN Senate Board Meeting", desc: "Member of the Vietnam Delegation attending the quarterly Board Meeting in Suzhou (China) and Sabah (Malaysia).", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" },
      { year: "2024", title: "JCI World Congress, Taiwan", desc: "Represented the JCI Vietnam Delegation at the global World Congress with thousands of international delegates.", img: "https://i.postimg.cc/4d0BV0Xp/congress.jpg" },
      { year: "2024", title: "Launch to Leader Project", desc: "Founding Director of the JCI Thang Long project. Honored to receive The Most Social Impact JCI VN 2024 award.", img: "https://i.postimg.cc/NFTSMtRk/launch-to-leader.jpg" },
      { year: "Upcoming", title: "JCI Lawyer Council", desc: "Co-initiating and architecting the foundation for a global lawyer council network within the JCI system.", img: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop" },
    ],
    speakerEvents: [
      { year: "2024", title: "Trade Expo, Mumbai", desc: "Participated in a working delegation representing Vietnamese enterprises in coordination with the Vietnamese Consulate.", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" },
      { year: "2024", title: "Keynote Speaker: Smart Legal Workshop", desc: "Main speaker at the legal event organized by CSK Startup Center (National University). Analyzed legal risks, shareholder relations, and strategic business solutions.", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
      { year: "2023-2025", title: "Shape Your Future Project", desc: "Frequently participated as a speaker providing legal career guidance for students and the younger generation.", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
      { year: "2024", title: "SIL Judge, Dai Nam Univ.", desc: "Legal Advisor and Judge at the SIL (Social Innovation Launch) competition, Dai Nam University.", img: "https://i.postimg.cc/15g13P4d/SIL.jpg" }
    ],
    contact: {
      title: "Partnering to build a secure legal foundation for your business operations.",
      subtitle: "Connect with us",
      scanToConnect: "Scan to connect",
      address: "5th floor, No. 31A Nguyen Quoc Tri Street, Trung Hoa Ward, Cau Giay Dist, Hanoi"
    }
  }
};


/* =========================================
   2. COMPONENTS 
========================================= */

const SectionHeading = ({ title, subtitle, light = false, align = 'center' }) => (
  <div className={`mb-10 md:mb-14 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <div className="inline-flex items-center space-x-3 mb-4">
      <div className={`h-[1px] w-8 ${light ? 'bg-[#2eb793]' : 'bg-[#1d6266]'}`}></div>
      <span className={`text-[11px] font-bold uppercase tracking-widest ${light ? 'text-[#2eb793]' : 'text-[#1d6266]'}`}>
        {subtitle}
      </span>
    </div>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
  </div>
);

const TimelineItem = ({ data, isLast }) => (
  <div className="relative pl-8 pb-10 group">
    {!isLast && (
      <div className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-slate-200"></div>
    )}
    
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center group-hover:border-[#1d6266] transition-colors duration-300 z-10">
      <div className="w-2 h-2 rounded-full bg-[#1d6266] group-hover:bg-[#2eb793] transition-colors duration-300"></div>
    </div>

    <div className="flex flex-col">
      <span className="text-[11px] font-bold text-[#1d6266] uppercase tracking-wider mb-2">{data.period}</span>
      <h4 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{data.role}</h4>
      <h5 className="text-[13px] font-semibold text-slate-500 uppercase tracking-wide mb-3">{data.company}</h5>
      <p className="text-slate-500 font-light leading-relaxed text-[14px]">{data.desc}</p>
    </div>
  </div>
);

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col group border border-slate-100 overflow-hidden h-full">
    <div className="aspect-square relative overflow-hidden bg-white p-2 border-b border-slate-50">
      <img src={event.img} alt={event.title} className="w-full h-full object-contain rounded group-hover:scale-[1.03] transition-transform duration-700" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-[#1d6266] text-[10px] font-bold uppercase tracking-widest mb-2 block">{event.year}</span>
      <h4 className="text-base font-bold tracking-wide text-slate-900 mb-2 leading-snug">
        {event.title}
      </h4>
      <p className="text-slate-600 font-light leading-relaxed text-[13px] line-clamp-4">
        {event.desc}
      </p>
    </div>
  </div>
);

const ContactIcon = ({ icon, label, value, href, qrUrl, scanText }) => {
  const qrImageSource = qrUrl ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrUrl)}&color=1d6266` : null;

  return (
    <div className="relative group flex flex-col items-center cursor-pointer">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#1d6266] hover:bg-[#2eb793] hover:text-white hover:border-[#2eb793] transition-all duration-500 shadow-sm shrink-0"
      >
        {React.cloneElement(icon, { className: 'w-6 h-6 stroke-[1.5]' })}
      </a>
      <span className="mt-5 text-sm font-bold text-white uppercase tracking-widest text-center">{label}</span>
      <span className="text-sm text-white/70 mt-2 font-light text-center">{value}</span>

      {qrImageSource && (
        <div className="absolute bottom-full mb-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50 w-max flex flex-col items-center">
          <div className="bg-white p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] relative border border-slate-100 flex flex-col items-center">
            <img src={qrImageSource} alt={`QR Code ${label}`} className="w-32 h-32 object-contain" />
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-3 font-bold">{scanText}</p>
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
  
  // STATE NGÔN NGỮ: Mặc định là Tiếng Việt ('vi')
  const [lang, setLang] = useState('vi');
  const t = dict[lang]; // Lấy dictionary tương ứng

  // Hàm chuyển đổi ngôn ngữ
  const toggleLanguage = () => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  };

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
    <div 
      className="min-h-screen bg-white text-slate-800 selection:bg-[#1d6266] selection:text-white"
      style={{ fontFamily: '"AvertaStdCY", "Averta", Arial, sans-serif' }}
    >
      {/* KHAI BÁO FONT CHỮ GLOBAL ĐƯỢC LOAD TỪ THƯ MỤC PUBLIC/FONTS TRÊN VERCEL */}
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'AvertaStdCY';
          src: url('/fonts/AvertaStdCY-Regular.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'AvertaStdCY';
          src: url('/fonts/AvertaStdCY-Bold.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'AvertaStdCY';
          src: url('/fonts/AvertaStdCY-Black.otf') format('opentype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        * {
          font-family: 'AvertaStdCY', 'Averta', Arial, sans-serif !important;
        }
      `}} />

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
                  {lang === 'vi' ? 'Luật sư Nguyễn Hoa' : 'Atty. Hoa Nguyen'}
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {t.nav.slice(0, 3).map((item, index) => {
                const ids = ['ho-so', 'chuyen-mon', 'cong-dong'];
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

              <div className="flex items-center space-x-4 ml-4">
                {/* NÚT CHUYỂN ĐỔI NGÔN NGỮ */}
                <button 
                  onClick={toggleLanguage}
                  className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-[#2eb793] ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
                  title="Change Language"
                >
                  <Globe className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'EN' : 'VI'}</span>
                </button>

                <button 
                  onClick={() => scrollTo('lien-he')}
                  className={`text-xs font-bold uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${isScrolled ? 'border-[#1d6266] text-[#1d6266] hover:bg-[#1d6266] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1d6266]'}`}
                >
                  {t.nav[3]}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {/* NÚT CHUYỂN NGÔN NGỮ BẢN MOBILE */}
              <button 
                onClick={toggleLanguage}
                className={`flex items-center text-xs font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                <Globe className="w-4 h-4 mr-1" />
                {lang === 'vi' ? 'EN' : 'VI'}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                {mobileMenuOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0 border-transparent'}`}>
          <div className="flex flex-col items-center space-y-6">
            {t.nav.map((item, index) => {
              const ids = ['ho-so', 'chuyen-mon', 'cong-dong', 'lien-he'];
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

      {/* H E R O   S E C T I O N */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#113a3c] via-[#164e50] to-[#1d6266] px-6 text-center z-10 pt-24 overflow-hidden">
        
        {/* HỌA TIẾT DẢI LỤA PAXLAW - BACKGROUND MOTIFS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-end">
          {/* Lớp lụa Xanh thẫm mờ ảo */}
          <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full min-w-[1440px] opacity-40 mix-blend-multiply">
            <path d="M-100,600 C300,600 400,200 900,300 C1300,400 1500,200 1600,200 L1600,800 L-100,800 Z" fill="#0d2b2c" />
          </svg>
          {/* Lớp lụa Xanh ngọc phát sáng nhẹ */}
          <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full min-w-[1440px] opacity-30 mix-blend-screen">
            <path d="M-100,600 C200,600 400,300 900,400 C1200,500 1400,300 1600,400 L1600,800 L-100,800 Z" fill="#2eb793" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
          {/* Subtitle cách điệu */}
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#2eb793]"></div>
            <span className="text-[#2eb793] font-bold tracking-[0.25em] uppercase text-[10px] md:text-sm whitespace-nowrap">
              {t.hero.subtitle}
            </span>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#2eb793]"></div>
          </div>
          
          {/* Tên Luật Sư */}
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-md">
            {lang === 'vi' ? 'Nguyễn Thị Hoa' : 'Hoa Nguyen'}
          </h1>
          
          {/* Câu Quote - Đã gỡ bỏ font-serif để đồng bộ 100% Averta */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light italic mb-12 tracking-wide">
            {t.hero.quote}
          </p>
          
          {/* Đoạn mô tả */}
          <p 
            className="text-[15px] md:text-[18px] text-white/80 leading-relaxed max-w-4xl mx-auto font-light text-center px-4"
            dangerouslySetInnerHTML={{ __html: t.hero.desc }}
          />

          {/* Scroll Indicator */}
          <div className="mt-20 flex flex-col items-center animate-bounce cursor-pointer" onClick={() => scrollTo('ho-so')}>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4">{t.hero.scroll}</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION: HỒ SƠ & HÀNH TRÌNH SỰ NGHIỆP */}
      <section id="ho-so" className="py-24 md:py-32 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            
            {/* CỘT TRÁI: GIỚI THIỆU CHÂN DUNG & PROFILE HIGHLIGHTS */}
            <div className="flex flex-col">
              <SectionHeading title={t.profile.title} subtitle={t.profile.subtitle} align="left" />
              
              <div className="relative mb-12 p-1.5 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden">
                <img 
                  src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                  alt="Luật sư Hoa Nguyễn" 
                  className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="prose prose-slate text-slate-600 font-light leading-relaxed text-justify mb-10">
                <p dangerouslySetInnerHTML={{ __html: t.profile.desc1 }}></p>
                <p dangerouslySetInnerHTML={{ __html: t.profile.desc2 }}></p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100 mb-10">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="border-l-4 border-[#2eb793] pl-4">
                    <div className="text-4xl font-bold text-[#1d6266] mb-1">{stat.value}</div>
                    <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* HỌC VẤN, CHỨNG CHỈ, GIẢNG DẠY */}
              <div className="flex flex-col space-y-6 pt-8 border-t border-slate-100">
                {t.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mr-4 border border-slate-100">
                      <highlight.icon className="w-5 h-5 text-[#2eb793]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">{highlight.title}</h4>
                      <ul className="space-y-1.5">
                        {highlight.items.map((item, i) => (
                          <li key={i} className="text-[13.5px] text-slate-600 font-light flex items-start">
                            <span className="text-[#2eb793] mr-2 mt-0.5">•</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* CỘT PHẢI: HÀNH TRÌNH CHUYÊN MÔN */}
            <div className="flex flex-col bg-slate-50/50 p-8 lg:p-12 rounded-2xl border border-slate-100 h-fit lg:sticky lg:top-24">
              <SectionHeading title={t.career.title} subtitle={t.career.subtitle} align="left" />
              <div className="mt-4">
                {t.timelineData.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    data={item} 
                    isLast={index === t.timelineData.length - 1} 
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: LĨNH VỰC CHUYÊN MÔN */}
      <section id="chuyen-mon" className="py-24 md:py-32 bg-[#0d3a3c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeading title={t.practice.title} subtitle={t.practice.subtitle} light={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.practiceAreas.map((area, idx) => (
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

      {/* SECTION: CỘNG ĐỒNG & SỰ KIỆN */}
      <section id="cong-dong" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeading title={t.community.title} subtitle={t.community.subtitle} />

          {/* KHỐI CHỦ ĐỀ ĐINH */}
          <div className="mb-20 bg-slate-50 rounded-xl border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-[#2eb793]/30 transition-colors duration-300">
            <div className="md:w-1/3 shrink-0">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1d6266] mb-2 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-[#2eb793]" />
                {t.community.topicTitle}
              </h3>
              <p className="text-slate-500 font-light text-sm">{t.community.topicDesc}</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.keynoteTopics.map((topic, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-[14px] font-bold tracking-wide text-[#1d6266] leading-relaxed">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NHÓM 1: JCI */}
          <div className="mb-20">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
              <h3 className="text-xl font-light text-slate-900">{t.community.jciTitle}</h3>
              <Award className="w-5 h-5 text-slate-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.jciEvents.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>
          </div>

          {/* NHÓM 2: SPEAKER */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
              <h3 className="text-xl font-light text-slate-900">{t.community.speakerTitle}</h3>
              <Mic className="w-5 h-5 text-slate-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.speakerEvents.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: LIÊN HỆ */}
      <section id="lien-he" className="relative py-24 md:py-32 bg-[#1d6266] overflow-hidden">
        
        {/* Họa tiết Dải lụa góc */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-auto pointer-events-none z-0 opacity-20 rotate-180 transform translate-x-1/4 -translate-y-1/4">
          <svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g transform="translate(15, -15)">
              <path d="M-20,220 C60,220 140,140 220,-20 L160,-20 C100,100 40,160 -20,160 Z" fill="#2eb793" />
            </g>
            <g transform="translate(-10, 10)">
              <path d="M-20,140 C40,150 100,100 140,-20 L110,-20 C70,60 20,110 -20,120 Z" fill="#113a3c" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center z-20">
          <SectionHeading 
            title={t.contact.title} 
            subtitle={t.contact.subtitle} 
            light={true} 
          />
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-16">
            <ContactIcon icon={<Phone />} label={lang === 'vi' ? 'Điện thoại' : 'Phone'} value="+84 911 55 3686" href="tel:+84911553686" qrUrl="tel:+84911553686" scanText={t.contact.scanToConnect} />
            <ContactIcon icon={<Mail />} label="Email" value="hoant@paxlaw.vn" href="mailto:hoant@paxlaw.vn" qrUrl="mailto:hoant@paxlaw.vn" scanText={t.contact.scanToConnect} />
            <ContactIcon icon={<Linkedin />} label="LinkedIn" value="lawyerhoanguyen" href="https://linkedin.com/in/lawyerhoanguyen" qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.contact.scanToConnect} />
            <ContactIcon icon={<Facebook />} label="Facebook" value="Hoa Nguyen" href="https://facebook.com/hoant.paxlaw" qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.contact.scanToConnect} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#113a3c] py-12 md:py-16 relative overflow-hidden z-20">
        
        {/* Họa tiết Dải lụa góc trái */}
        <div className="absolute bottom-0 left-0 w-56 md:w-72 h-auto pointer-events-none z-0 opacity-25 transform -translate-x-1/4 translate-y-1/4">
          <svg viewBox="-20 -20 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g transform="translate(15, -15)">
              <path d="M-20,220 C60,220 140,140 220,-20 L160,-20 C100,100 40,160 -20,160 Z" fill="#1d6266" />
            </g>
            <g transform="translate(-10, 10)">
              <path d="M-20,140 C40,150 100,100 140,-20 L110,-20 C70,60 20,110 -20,120 Z" fill="#2eb793" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          <div className="flex items-center justify-center md:justify-start md:pl-16 lg:pl-28">
            <img 
              src="https://i.postimg.cc/fWf76h84/A-nh-chu-p-Ma-n-hi-nh-2026-04-15-lu-c-2-32-45-CH-removebg-preview.png" 
              alt="Paxlaw Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain" 
              onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} 
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/80 text-[11px] font-bold tracking-widest uppercase mb-2"> 
              &copy; {new Date().getFullYear()} PAXLAW. "Global Mind, Silk Touch." All rights reserved. 
            </p>
            <p className="text-white/50 text-[12px] font-light tracking-wide"> 
              {t.contact.address}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
