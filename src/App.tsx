import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck, BookOpen, Globe,
  MapPin, Flag, Rocket, Crown, Network, User, HandHeart, CheckCircle,
  ChevronDown
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
    ui: {
      viewDetails: "Xem chi tiết",
      hideDetails: "Thu gọn",
      switchLang: "English"
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
        title: "M&A & Tái cấu trúc doanh nghiệp",
        icon: Building2,
        cases: [
          { text: "Đại diện pháp lý bên mua trong thương vụ thâu tóm nhà máy sản xuất thép (Miền Bắc) quy mô ", highlight: "1.000 tỷ VNĐ." },
          { text: "Cố vấn chiến lược M&A chuyển nhượng dự án Bất động sản nghỉ dưỡng Bãi Dài (Cam Ranh) trị giá ", highlight: "1.600 tỷ VNĐ." },
          { text: "Thiết kế và triển khai phương án tái cấu trúc toàn diện tài chính, nhân sự, quy trình Tập đoàn Khoáng sản Thái Nguyên ", highlight: "(>1.000 tỷ VNĐ)." },
        ]
      },
      {
        title: "Đầu tư quốc tế & BĐS",
        icon: Globe2,
        cases: [
          { text: "Bảo trợ pháp lý trọn gói dự án tổ hợp nghỉ dưỡng ", highlight: "1000+ Condotel 5 sao", suffix: " tại Nha Trang." },
          { text: "Thành viên nhóm chuyên gia cố vấn xây dựng Báo cáo chính sách về phương thức Hợp tác Công - Tư (PPP) tại Việt Nam cho Bộ Kinh tế và Tài chính Hàn Quốc." },
          { text: "Thiết lập và vận hành cấu trúc pháp lý cho loạt tập đoàn FDI (Nhật Bản, Hàn Quốc, Hong Kong...) rót vốn vào các khu công nghiệp Việt Nam." },
        ]
      },
      {
        title: "Tài chính - Ngân hàng",
        icon: Landmark,
        cases: [
          { text: "Bảo trợ pháp lý phát hành trái phiếu doanh nghiệp dự án điện rác (Bà Rịa - Vũng Tàu), quy mô ", highlight: "800 tỷ VNĐ." },
          { text: "Tư vấn giải pháp xử lý khủng hoảng và tái cơ cấu cho 07 gói trái phiếu doanh nghiệp, giá trị ", highlight: "500 - 850 tỷ VNĐ/gói." },
          { text: "Thiết kế khung pháp lý vay và trả nợ nước ngoài ", highlight: "(3.5 triệu USD)", suffix: " của Tập đoàn nông nghiệp Hà Lan đầu tư vào Việt Nam." },
        ]
      },
      {
        title: "Hợp đồng & Tranh chấp",
        icon: ShieldCheck,
        cases: [
          { text: "Chuẩn hóa hệ thống hợp đồng cung ứng và vận chuyển cho các sàn E-commerce hàng đầu (Shopee, Lazada, Tiki...)." },
          { text: "Bảo vệ thành công quyền lợi của Tập đoàn Xây dựng VN trong tranh chấp hợp đồng EPC ", highlight: "(250 tỷ VNĐ)." },
          { text: "Đại diện Chủ đầu tư xử lý thắng lợi tranh chấp thầu xây dựng tại Khánh Hòa ", highlight: "(350 tỷ VNĐ)." },
        ]
      }
    ],
    community: {
      title: "Dấu ấn cộng đồng",
      subtitle: "Mạng lưới kết nối",
      jciTitle: "1. JCI - Liên đoàn lãnh đạo trẻ và doanh nhân thế giới",
      jciIntro: "JCI (Junior Chamber International) là mạng lưới toàn cầu quy tụ gần 200.000 nhà lãnh đạo trẻ tại hơn 100 quốc gia. Tại Việt Nam, mạng lưới đã phát triển mạnh mẽ với 15 chi hội trực thuộc Hội Doanh nhân trẻ Việt Nam (VYEA), không ngừng lan tỏa tinh thần phụng sự và năng lực kiến tạo giá trị bền vững.",
      leadershipTitle: "Lộ trình lãnh đạo",
      activityTitle: "Giá trị kiến tạo",
      otherCommunities: [
        {
          index: "2.",
          name: "Hội doanh nghiệp Việt Nam tại Benelux",
          role: "Thành viên Ban chấp hành phụ trách Quan hệ Công chúng khu vực phía Bắc Việt Nam",
          icon: Globe
        },
        {
          index: "3.",
          name: "Hội đồng kinh doanh Việt Nam - Saudi",
          role: "Thành viên sáng lập Hội đồng điều hành lâm thời",
          icon: HandHeart
        }
      ]
    },
    networking: {
      domestic: [
        { title: 'Diễn giả Workshop "Pháp lý thông minh, lý tình hợp tác" (2024)', icon: Mic, desc: 'Sự kiện chia sẻ kiến thức pháp lý ứng dụng thực tiễn cho cộng đồng khởi nghiệp và doanh nghiệp SME.', image: 'https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg' },
        { title: 'Diễn giả Dự án "Shape Your Future" (2023-2025)', icon: User, desc: 'Dự án định hướng nghề nghiệp, truyền cảm hứng và chia sẻ kinh nghiệm thực chiến cho sinh viên ngành luật.', image: 'https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg' },
        { title: 'Cố vấn & Giám khảo SIL Đại học Đại Nam (2024)', icon: Award, desc: 'Đồng hành cùng các dự án đổi mới sáng tạo của sinh viên trong vai trò Cố vấn chuyên môn và Ban giám khảo.', image: 'https://i.postimg.cc/mgyTBfvz/SIL.jpg' },
        { title: 'Hợp tác với hãng luật BNA (2025)', icon: HandHeart, desc: 'Thiết lập quan hệ đối tác chiến lược nhằm mở rộng hệ sinh thái dịch vụ pháp lý trọn gói.', image: 'https://i.postimg.cc/cHR1jLVd/bna.jpg' }
      ],
      international: [
        { title: 'Triển lãm quốc tế về sản phẩm/dịch vụ ASEAN - Trade Expo Mumbai Ấn Độ (2024)', icon: Briefcase, desc: 'Tham gia gian hàng triển lãm, giới thiệu và xúc tiến các cơ hội hợp tác thương mại tại thị trường Ấn Độ.', image: 'https://i.postimg.cc/VktkP5cD/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-9-45-02-SA.png' },
        { title: 'Giao lưu luật sư JCI toàn cầu với đoàn luật sư tại Đào Viên (2024)', icon: Globe, desc: 'Tham gia mạng lưới kết nối chuyên gia pháp lý quốc tế, trao đổi kinh nghiệm hành nghề xuyên biên giới.', image: 'https://i.postimg.cc/0QPHVKcX/Doa-n-Vie-n.jpg' },
        { title: 'Thăm và giao lưu đối tác tại Đài Loan - Braintrust (Anh Hung Ou Yang) (2024)', icon: MapPin, desc: 'Mở rộng mạng lưới đối tác chiến lược tại khu vực Đông Á.', image: 'https://i.postimg.cc/4NDP8h3D/braintrust.jpg' },
        { title: 'Giao kết hợp tác với đối tác tại Nhật Bản - LS Yoshio', icon: HandHeart, desc: 'Ký kết thỏa thuận hợp tác, tạo kênh hỗ trợ pháp lý trực tiếp cho các luồng đầu tư Việt - Nhật.', image: 'https://i.postimg.cc/9Qbd3WHt/ki-ke-t-o-nha-t.jpg' }
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
        id: 'local',
        title: "Hoạt động cấp chi hội",
        items: [
          { name: "GUC - Launch To Leader (2024)", desc: "Chương trình phát triển năng lực lãnh đạo.", image: 'https://i.postimg.cc/c1nG6wVq/guc.jpg' },
          { name: "Dòng Chảy Thành Công (2026)", desc: "Chuỗi sự kiện kết nối thực tế doanh nghiệp.", image: 'https://i.postimg.cc/RZjcCrtY/do-ng-cha-y-tha-nh-co-ng.jpg' },
          { name: "Sự kiện giao lưu với Hiệp hội DN Tô Châu", desc: "Kết nối doanh nghiệp Trung Quốc với khu vực Đông Nam Á.", image: 'https://i.postimg.cc/xdDzDvD9/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-57-38-SA.png' }
        ]
      },
      national: {
        id: 'national',
        title: "Hoạt động cấp quốc gia",
        items: [
          { name: "Nghị sự NATCON & NYC (2024 - 2025)", desc: "Tham gia các kỳ họp cấp cao và hoạch định chiến lược.", image: 'https://i.postimg.cc/rmvwtSNk/Natcon-2025.jpg' },
          { name: "Diễn đàn \"Let's meet up Việt Nam\" (2025)", desc: "Đại diện BTC điều hành và xúc tiến quan hệ hợp tác, xây dựng cầu nối giao thương ASEAN.", image: 'https://i.postimg.cc/NjLFPPt9/Let-s-meet-up.jpg' },
          { name: "Rise To Shine JCI Vietnam 2025", desc: "Vinh danh Top 5 dự án xuất sắc, lan tỏa thông điệp JCI RISE về khát vọng phụng sự.", image: 'https://i.postimg.cc/Y0rt5Mk4/rise-to-shine.jpg' }
        ]
      },
      international: {
        id: 'international',
        title: "Hoạt động cấp quốc tế",
        items: [
          { name: "JCI World Congress 2024 (Đài Loan)", desc: "Điểm chạm mạng lưới lãnh đạo trẻ toàn cầu, kết nối giao thương với hội viên tinh hoa.", image: 'https://i.postimg.cc/4d0BV0Xp/congress.jpg' },
          { name: "JCI ASPAC 2024 & 2025 (Mông Cổ)", desc: "Không gian giao cảm văn hóa và chiến lược khu vực, mở ra cơ hội ký kết hợp tác.", image: 'https://i.postimg.cc/dVbkzkf1/aspac-2025.webp' },
          { name: "Giao lưu Quốc tế JCI Marine Lines India & JCI Thanglong", desc: "Thúc đẩy tinh thần học hỏi đa văn hóa và kiến tạo cơ hội hợp tác kinh tế bền vững.", image: 'https://i.postimg.cc/mgMPwPzx/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-58-35-SA.png' },
          { name: "JCI ASEAN Senator BOD Meeting (2025 - 2026)", desc: "Đại biểu chính thức đoàn Việt Nam tham gia chuỗi nghị sự tại Trung Quốc và Malaysia.", image: 'https://i.postimg.cc/4xbJyV7S/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-59-46-SA.png' }
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
      desc: "Law is the framework that creates sustainable competitive advantages for your business.",
      contactBtn: "Book Consultation",
      scanToConnect: "Scan to connect"
    },
    ui: {
      viewDetails: "View Details",
      hideDetails: "Show Less",
      switchLang: "Tiếng Việt"
    },
    profile: {
      title: "Professional Summary",
      subtitle: "Attorney Hoa Nguyen",
      desc1: "With extensive experience advising founders and corporations, I provide practical legal strategies tailored to your business operations. Early legal protection is essential to mitigate risks and ensure stable growth.",
      desc2: "We offer clear, actionable advice across Corporate, Mergers and Acquisitions, and Real Estate law. Client confidentiality and data protection are strictly upheld in every transaction."
    },
    stats: [
      { value: "15+", label: "Years of Experience" },
      { value: "50+", label: "Global Partners" }
    ],
    highlights: [
      {
        title: "Education & Credentials",
        icon: GraduationCap,
        items: [
          "Master of Laws in International Trade Policy and Law (Foreign Trade University)",
          "Bachelor of Laws in Commercial Law (Hanoi Law University)",
          "Lawyer Certification – Judicial Academy of Vietnam"
        ]
      },
      {
        title: "Teaching & Coaching",
        icon: BookOpen,
        items: [
          "Visiting Lecturer of Banking Law – Thanh Dong University",
          "Internal Trainer on Foreign Exchange Management – Techcombank"
        ]
      },
      {
        title: "Professional Memberships",
        icon: Award,
        items: [
          "Member of the Hanoi Bar Association",
          "Certified Bankruptcy Trustee",
          "Registered Intellectual Property Agent"
        ]
      }
    ],
    career: {
      title: "Professional Experience"
    },
    timelineData: [
      { period: "12/2024 - Present", role: "Managing Attorney", company: "Paxlaw", desc: "Providing comprehensive outsourced legal solutions for Mergers and Acquisitions and investments." },
      { period: "2022 - Present", role: "Head of Legal", company: "Green Investment Joint Stock Company", desc: "Overseeing risk management and legal compliance for investment projects." },
      { period: "2018 - 2024", role: "Partner", company: "Penfield Law Firm", desc: "Led complex Mergers and Acquisitions transactions and corporate financial restructuring." },
      { period: "2013 - 2018", role: "Senior Legal Counsel", company: "Techcombank", desc: "Advised corporate clients on foreign exchange and capital management." }
    ],
    practice: {
      title: "Representative Matters",
      subtitle: "Practice Areas",
      speakerTitle: "Speaking & Networking",
      domestic: "Domestic",
      international: "International"
    },
    practiceAreas: [
      {
        title: "Mergers, Acquisitions & Restructuring",
        icon: Building2,
        cases: [
          { text: "Buyer's legal counsel in the acquisition of a Northern steel plant valued at ", highlight: "1,000 Billion Vietnam Dong." },
          { text: "Strategic advisor for the transfer of Bai Dai Resort project (Cam Ranh) valued at ", highlight: "1,600 Billion Vietnam Dong." },
          { text: "Executed comprehensive financial and operational restructuring for a major mineral group ", highlight: "(Over 1,000 Billion Vietnam Dong)." },
        ]
      },
      {
        title: "Foreign Direct Investment & Real Estate",
        icon: Globe2,
        cases: [
          { text: "Comprehensive legal advisory for a luxury 5-star resort complex featuring ", highlight: "1,000+ Condotels", suffix: " in Nha Trang." },
          { text: "Advisory expert for the Policy Report on Public-Private Partnerships in Vietnam for the South Korean Ministry of Economy and Finance." },
          { text: "Established legal frameworks for international corporations (Japan, South Korea, Hong Kong) investing in Vietnamese industrial zones." },
        ]
      },
      {
        title: "Banking & Finance",
        icon: Landmark,
        cases: [
          { text: "Legal counsel for corporate bond issuance (Waste-to-Energy project), sized at ", highlight: "800 Billion Vietnam Dong." },
          { text: "Crisis resolution and restructuring advisor for 7 corporate bond issuances, valued at ", highlight: "500 to 850 Billion Vietnam Dong each." },
          { text: "Designed legal frameworks for foreign loans ", highlight: "(3.5 Million US Dollars)", suffix: " for a European agricultural corporation." },
        ]
      },
      {
        title: "Contracts & Dispute Resolution",
        icon: ShieldCheck,
        cases: [
          { text: "Standardized supply and logistics contracts for leading e-commerce platforms (Shopee, Lazada, Tiki)." },
          { text: "Successfully defended a top Construction Group in a contract dispute ", highlight: "(250 Billion Vietnam Dong)." },
          { text: "Represented Project Owner in a successful resolution of a construction bidding dispute ", highlight: "(350 Billion Vietnam Dong)." },
        ]
      }
    ],
    community: {
      title: "Community Impact",
      subtitle: "Global Network",
      jciTitle: "1. Junior Chamber International",
      jciIntro: "Junior Chamber International is a global network of nearly 200,000 young leaders. In Vietnam, we actively promote sustainable value creation and business leadership across 15 chapters.",
      leadershipTitle: "Leadership Roles",
      activityTitle: "Featured Initiatives",
      otherCommunities: [
        {
          index: "2.",
          name: "Vietnam Business Association in Benelux",
          role: "Public Relations Executive Committee Member (Northern Vietnam)",
          icon: Globe
        },
        {
          index: "3.",
          name: "Vietnam - Saudi Business Council",
          role: "Founding Member, Interim Executive Council",
          icon: HandHeart
        }
      ]
    },
    networking: {
      domestic: [
        { title: 'Speaker: "Smart Legal Frameworks" (2024)', icon: Mic, desc: 'Practical legal applications for small and medium enterprises and startups.', image: 'https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg' },
        { title: 'Speaker: "Shape Your Future" (2023-2025)', icon: User, desc: 'Career orientation and real-world insights for law students.', image: 'https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg' },
        { title: 'Innovation Advisor and Judge, Dai Nam University (2024)', icon: Award, desc: 'Mentoring student innovation projects.', image: 'https://i.postimg.cc/mgyTBfvz/SIL.jpg' },
        { title: 'Strategic Partnership: BNA Law Firm (2025)', icon: HandHeart, desc: 'Expanding comprehensive legal service ecosystems.', image: 'https://i.postimg.cc/cHR1jLVd/bna.jpg' }
      ],
      international: [
        { title: 'Trade Exhibition of Southeast Asian Nations - Mumbai (2024)', icon: Briefcase, desc: 'Promoting Vietnamese products to the Indian market.', image: 'https://i.postimg.cc/VktkP5cD/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-9-45-02-SA.png' },
        { title: 'Global Lawyers Exchange - Taoyuan Bar Association (2024)', icon: Globe, desc: 'Cross-border legal practice exchange.', image: 'https://i.postimg.cc/0QPHVKcX/Doa-n-Vie-n.jpg' },
        { title: 'Partner Visit: Braintrust, Taiwan (2024)', icon: MapPin, desc: 'Expanding strategic partnerships in East Asia.', image: 'https://i.postimg.cc/4NDP8h3D/braintrust.jpg' },
        { title: 'Partnership Agreement with Japanese Partner (2024)', icon: HandHeart, desc: 'Direct legal support channel for Vietnam-Japan investments.', image: 'https://i.postimg.cc/9Qbd3WHt/ki-ke-t-o-nha-t.jpg' }
      ]
    },
    jciLeadership: [
      { year: "2024", title: "Inaugural Project Director", desc: '"Launch To Leaders" Initiative', icon: Rocket },
      { year: "2025", title: "Founding President", desc: "Grace Chapter", icon: Crown },
      { year: "2026", title: "Vice President", desc: "Vietnam National Chapter", icon: Network },
      { year: "2024 - Present", title: "Founding Core Member", desc: "Global Lawyers Council", icon: Scale },
    ],
    jciActivities: {
      local: {
        id: 'local',
        title: "Local Chapter",
        items: [
          { name: "Launch To Leader (2024)", desc: "Leadership development program.", image: 'https://i.postimg.cc/c1nG6wVq/guc.jpg' },
          { name: "Flow of Success (2026)", desc: "Business networking event series.", image: 'https://i.postimg.cc/RZjcCrtY/do-ng-cha-y-tha-nh-co-ng.jpg' },
          { name: "Suzhou Business Association Exchange", desc: "Connecting Chinese and Southeast Asian enterprises.", image: 'https://i.postimg.cc/xdDzDvD9/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-57-38-SA.png' }
        ]
      },
      national: {
        id: 'national',
        title: "National Level",
        items: [
          { name: "National Convention and National Youth Council (2024 - 2025)", desc: "Strategic planning and high-level meetings.", image: 'https://i.postimg.cc/rmvwtSNk/Natcon-2025.jpg' },
          { name: "Let's Meet Up Vietnam (2025)", desc: "Facilitating trade bridges among Southeast Asian Nations.", image: 'https://i.postimg.cc/NjLFPPt9/Let-s-meet-up.jpg' },
          { name: "Rise To Shine (2025)", desc: "Honoring outstanding community projects.", image: 'https://i.postimg.cc/Y0rt5Mk4/rise-to-shine.jpg' }
        ]
      },
      international: {
        id: 'international',
        title: "International Level",
        items: [
          { name: "World Congress (Taiwan)", desc: "Global young leaders networking.", image: 'https://i.postimg.cc/4d0BV0Xp/congress.jpg' },
          { name: "Asia-Pacific Conference (Mongolia)", desc: "Regional strategy and international partnership agreements.", image: 'https://i.postimg.cc/dVbkzkf1/aspac-2025.webp' },
          { name: "India and Thanglong Exchange", desc: "Multicultural learning and economic cooperation.", image: 'https://i.postimg.cc/mgMPwPzx/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-58-35-SA.png' },
          { name: "Southeast Asian Senator Board Meeting", desc: "Official Vietnam delegate in China and Malaysia.", image: 'https://i.postimg.cc/4xbJyV7S/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-59-46-SA.png' }
        ]
      }
    },
    contactInfo: { address: "5th Floor, 31A Nguyen Quoc Tri Street, Trung Hoa Ward, Cau Giay District, Hanoi" },
    footer: {
      desc: "Strategic legal partnership for sustainable growth. Strict confidentiality and data protection guaranteed.",
      linksTitle: "Expertise",
      contactTitle: "Contact Us"
    }
  }
};

/* =========================================
   2. MAIN COMPONENT (DASHBOARD LAYOUT)
========================================= */

const TooltipQR = ({ children, qrUrl, scanText }) => {
  const qrImageSource = qrUrl ? `https://quickchart.io/qr?text=${encodeURIComponent(qrUrl)}&size=200&dark=1d6266` : null;
  return (
    <div className="relative group flex flex-col items-center justify-center">
      {children}
      {/* Ẩn hoàn toàn tooltip QR trên mobile để không bị vướng khi thao tác cảm ứng */}
      {qrImageSource && (
        <div className="hidden lg:flex absolute bottom-full mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50 w-max flex-col items-center pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md p-2 shadow-xl rounded-xl border border-white/40 flex flex-col items-center">
            <img src={qrImageSource} alt={`QR Code`} className="w-24 h-24 object-contain mix-blend-multiply" />
          </div>
        </div>
      )}
    </div>
  )
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0); // 0: Overview, 1: Expertise, 2: Community
  const [lang, setLang] = useState('vi');
  const t = dict[lang]; 
  const contentRef = useRef(null);

  // States cho Accordions trong các Tab
  const [activePractice, setActivePractice] = useState(null);
  
  // States cho Modals (Pop-ups)
  const [selectedJciModal, setSelectedJciModal] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null); // Modal phóng to ảnh

  // Tự động cuộn lên đầu và đóng Modals khi chuyển tab
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setSelectedJciModal(null);
    setEnlargedImage(null);
  }, [activeTab]);

  return (
    <div className="min-h-screen lg:h-screen w-full bg-[#f8fafc] text-slate-800 selection:bg-[#2eb793] selection:text-[#ffffff] flex flex-col lg:flex-row lg:p-4 xl:p-6 relative"
         style={{ fontFamily: '"Montserrat", sans-serif' }}>
      
      {/* Khắc phục lỗi Unterminated string literal bằng cách viết lại chuẩn cấu trúc thẻ style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        * { font-family: 'Montserrat', sans-serif !important; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* --- KHUNG ỨNG DỤNG CHÍNH --- */}
      <div className="w-full h-full max-w-[1440px] mx-auto bg-white lg:rounded-[2rem] shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row overflow-hidden border border-slate-200/60 relative">
        
        {/* =========================================
            CỘT TRÁI (SIDEBAR) / HEADER TRÊN MOBILE
        ========================================= */}
        <div className="w-full lg:w-[320px] xl:w-[360px] bg-[#1d6266] text-white flex flex-col shrink-0 relative z-20">
           {/* Background Overlay */}
           <div className="absolute inset-0 opacity-[0.06] bg-center bg-cover mix-blend-overlay" style={{ backgroundImage: "url('https://i.postimg.cc/L8zfbHqn/Paxlaw-template-2.png')" }}></div>
           
           <div className="relative z-10 flex flex-col h-full">
             
             {/* Header Logo & Lang (Hiển thị chung) */}
             <div className="flex justify-between items-center p-4 lg:p-6 pb-3 lg:pb-5">
                <img src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" alt="PAXLAW Logo" className="h-7 lg:h-10 object-contain brightness-0 invert opacity-90" />
                <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="flex items-center text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#2eb793] transition-colors bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                  <Globe className="w-3.5 h-3.5 mr-1.5" /> {lang === 'vi' ? 'EN' : 'VI'}
                </button>
             </div>

             {/* Profile Info */}
             <div className="flex flex-row lg:flex-col items-center lg:text-center px-4 lg:px-6 pb-4 lg:pb-6 border-b border-white/10 lg:border-none">
                <div className="relative w-16 h-16 lg:w-40 lg:h-40 shrink-0 mr-4 lg:mr-0 lg:mb-5">
                   <div className="absolute inset-0 bg-[#2eb793] rounded-full transform translate-x-1 translate-y-1 lg:translate-x-2 lg:translate-y-2 opacity-60 blur-sm"></div>
                   <img src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" alt="Profile" className="absolute inset-0 w-full h-full object-cover rounded-full border-2 lg:border-[3px] border-white shadow-lg bg-slate-100 object-top" />
                </div>
                <div className="flex flex-col justify-center lg:items-center">
                   <h1 className="text-lg lg:text-[24px] font-extrabold tracking-tight leading-none mb-1 lg:mb-2">{lang === 'vi' ? 'Nguyễn Thị Hoa' : 'Hoa Nguyen'}</h1>
                   <p className="text-[#2eb793] text-[9px] lg:text-[10px] font-bold tracking-widest uppercase mb-1.5 lg:mb-3">{t.hero.subtitle}</p>
                   <p className="hidden lg:block text-white/70 italic text-[12px] font-light leading-relaxed max-w-[260px]">"{t.hero.desc}"</p>
                </div>
             </div>

             {/* Navigation Menu (Desktop Sidebar) */}
             <div className="hidden lg:flex flex-col space-y-2 px-6 flex-1 mt-2">
               {t.nav.map((item, idx) => (
                 <button 
                    key={idx} 
                    onClick={() => setActiveTab(idx)} 
                    className={`px-4 py-3 rounded-[1rem] text-left font-bold tracking-wide transition-all duration-300 flex items-center justify-between group ${activeTab === idx ? 'bg-[#2eb793] text-[#1d6266] shadow-md transform translate-x-1.5' : 'bg-transparent text-white/70 hover:bg-white/10 hover:text-white'}`}
                 >
                   <span className="uppercase text-[12px] tracking-widest">{item}</span>
                   {activeTab === idx && <ChevronRight className="w-4 h-4" />}
                 </button>
               ))}
             </div>

             {/* Social Links (Desktop Bottom) */}
             <div className="hidden lg:flex justify-center gap-3 p-6 mt-auto border-t border-white/10">
                <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
                  <a href="tel:+84911553686" className="w-9 h-9 flex items-center justify-center bg-white/5 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/10"><Phone className="w-4 h-4" /></a>
                </TooltipQR>
                <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
                  <a href="mailto:hoant@paxlaw.vn" className="w-9 h-9 flex items-center justify-center bg-white/5 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/10"><Mail className="w-4 h-4" /></a>
                </TooltipQR>
                <TooltipQR qrUrl="https://vn.linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
                  <a href="https://vn.linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/5 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/10"><Linkedin className="w-4 h-4" /></a>
                </TooltipQR>
                <TooltipQR qrUrl="https://www.facebook.com/Paxlaw.vn" scanText={t.hero.scanToConnect}>
                  <a href="https://www.facebook.com/Paxlaw.vn" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/5 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/10"><Facebook className="w-4 h-4" /></a>
                </TooltipQR>
             </div>

             {/* Navigation Menu (Mobile Horizontal Tab Bar) */}
             <div className="lg:hidden flex overflow-x-auto hide-scroll bg-[#154a4d] p-2.5 gap-2 shadow-inner snap-x">
               {t.nav.map((item, idx) => (
                 <button 
                    key={idx} 
                    onClick={() => setActiveTab(idx)} 
                    className={`px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-all snap-center ${activeTab === idx ? 'bg-[#2eb793] text-[#1d6266] shadow-sm' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}
                 >
                   {item}
                 </button>
               ))}
             </div>
           </div>
        </div>

        {/* =========================================
            CỘT PHẢI (NỘI DUNG CHÍNH)
        ========================================= */}
        <div ref={contentRef} className="flex-1 bg-slate-50 overflow-y-auto relative scroll-smooth hide-scroll">
          
          <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10 min-h-full flex flex-col">
            
            {/* --- TAB 0: TỔNG QUAN --- */}
            {activeTab === 0 && (
              <div className="fade-in space-y-6 lg:space-y-8">
                
                {/* Intro */}
                <div>
                   <div className="inline-flex items-center space-x-2 mb-2 lg:mb-3">
                       <div className="h-[2px] w-5 lg:w-6 bg-[#1d6266]"></div>
                       <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#1d6266]">{t.profile.subtitle}</span>
                   </div>
                   <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-5">{t.profile.title}</h2>
                   <div className="text-[13px] lg:text-[14px] text-slate-600 font-light leading-relaxed space-y-3 text-justify">
                      <p>{t.profile.desc1}</p>
                      <p className="border-l-[3px] border-[#2eb793] pl-3 font-medium text-slate-800">{t.profile.desc2}</p>
                   </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 bg-white p-4 lg:p-6 rounded-[1rem] lg:rounded-[1.5rem] border border-slate-100 shadow-sm justify-around lg:justify-start">
                  {t.stats.map((stat, idx) => (
                    <div key={idx} className="text-center lg:text-left">
                      <div className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1d6266] mb-0.5">{stat.value}</div>
                      <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Grid: Highlights & Career */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pb-6">
                  
                  {/* Highlights */}
                  <div className="lg:col-span-5 bg-white p-5 lg:p-8 rounded-[1rem] lg:rounded-[1.5rem] border border-slate-100 shadow-sm h-full flex flex-col">
                    <h3 className="text-[15px] lg:text-base font-bold text-slate-900 mb-5 flex items-center">
                      <Award className="w-4 h-4 lg:w-5 lg:h-5 mr-2.5 text-[#2eb793]" /> 
                      {lang === 'vi' ? 'Năng lực cốt lõi' : 'Core Competencies'}
                    </h3>
                    <div className="space-y-5 lg:space-y-6 flex-1">
                      {t.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start pb-5 border-b border-slate-50 last:border-0 last:pb-0 group/hi">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#1d6266]/5 flex items-center justify-center mr-3 lg:mr-4 shrink-0 group-hover/hi:bg-[#1d6266]/10 transition-colors">
                            <item.icon className="w-5 h-5 text-[#1d6266]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[12.5px] lg:text-[13.5px] font-bold text-slate-900 uppercase tracking-wide mb-1.5">{item.title}</h4>
                            <ul className="space-y-1 lg:space-y-1.5">
                              {item.items.map((li, i) => (
                                <li key={i} className="text-[12px] lg:text-[12.5px] text-slate-600 font-medium leading-relaxed flex items-start">
                                  <ChevronRight className="w-3 h-3 text-[#2eb793] shrink-0 mr-1.5 mt-0.5" />
                                  <span>{li}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Timeline */}
                  <div className="lg:col-span-7 bg-white p-5 lg:p-8 rounded-[1rem] lg:rounded-[1.5rem] border border-slate-100 shadow-sm h-full flex flex-col">
                    <h3 className="text-[15px] lg:text-base font-bold text-slate-900 mb-5 flex items-center">
                      <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 mr-2.5 text-[#2eb793]"/> 
                      {t.career.title}
                    </h3>
                    <div className="space-y-5 lg:space-y-6 flex-1">
                      {t.timelineData.map((item, idx) => (
                        <div key={idx} className="relative pl-5 lg:pl-6 pb-5 lg:pb-6 border-l-[2px] border-slate-100 last:border-0 last:pb-0 group/tl">
                          <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-[4px] border-slate-200 group-hover/tl:border-[#2eb793] transition-colors duration-300 shadow-sm"></div>
                          <span className="inline-block px-2.5 py-1 bg-[#1d6266]/5 text-[#1d6266] rounded-md text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mb-2">{item.period}</span>
                          <h4 className="text-[13.5px] lg:text-[15px] font-bold text-slate-900 mb-0.5">{item.role}</h4>
                          <h5 className="text-[11.5px] lg:text-[12px] font-bold text-[#2eb793] uppercase mb-1.5">{item.company}</h5>
                          <p className="text-[12px] lg:text-[13px] text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* --- TAB 1: CHUYÊN MÔN --- */}
            {activeTab === 1 && (
              <div className="fade-in space-y-8 lg:space-y-10">
                
                {/* Practice Areas */}
                <div>
                   <div className="inline-flex items-center space-x-2 mb-2">
                       <div className="h-[2px] w-5 lg:w-6 bg-[#1d6266]"></div>
                       <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#1d6266]">{t.practice.subtitle}</span>
                   </div>
                   <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-5">{t.practice.title}</h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {t.practiceAreas.map((area, idx) => {
                        const isActive = activePractice === idx;
                        return (
                          <div key={idx} className="bg-white border border-slate-200 rounded-[1rem] p-4 lg:p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div 
                               onClick={() => setActivePractice(isActive ? null : idx)}
                               className="flex items-center justify-between cursor-pointer group pb-1"
                            >
                              <div className="flex items-center">
                                <area.icon className="w-5 h-5 text-[#2eb793] mr-2.5 shrink-0" />
                                <h3 className="text-[13.5px] lg:text-[14px] font-bold text-slate-900 tracking-wide pr-2 group-hover:text-[#1d6266] transition-colors">{area.title}</h3>
                              </div>
                              <div className="flex items-center text-[#2eb793] text-[9px] lg:text-[10px] font-semibold tracking-wider uppercase shrink-0 bg-[#2eb793]/10 px-2 py-1 rounded-md">
                                <span className="hidden sm:inline mr-1">{isActive ? t.ui.hideDetails : t.ui.viewDetails}</span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                              </div>
                            </div>

                            <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-3 pt-3 border-t border-slate-100 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                              <div className="overflow-hidden">
                                <ul className="space-y-2 pb-1">
                                  {area.cases.map((c, i) => (
                                    <li key={i} className="flex items-start text-[12px] lg:text-[12.5px] font-light text-slate-600">
                                      <ChevronRight className="w-3.5 h-3.5 text-[#2eb793] shrink-0 mr-1 mt-0.5" />
                                      <span>
                                        {c.text} 
                                        {c.highlight && <span className="font-semibold text-[#1d6266]">{c.highlight}</span>}
                                        {c.suffix && ` ${c.suffix}`}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                   </div>
                </div>

                {/* Networking - DẠNG THẺ NGANG SIÊU GỌN VỚI TÍNH NĂNG PHÓNG TO ẢNH */}
                <div className="pb-6">
                   <div className="text-left mb-5">
                     <h3 className="text-lg lg:text-xl font-bold text-slate-900 inline-flex items-center"><Mic className="w-5 h-5 text-[#2eb793] mr-2" /> {t.practice.speakerTitle}</h3>
                   </div>
                   
                   {/* Domestic */}
                   <div className="mb-8">
                     <h4 className="text-[13px] lg:text-[14px] font-bold text-[#1d6266] flex items-center mb-4 uppercase tracking-widest"><MapPin className="w-4 h-4 mr-1.5 text-[#2eb793]" /> {t.practice.domestic}</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.networking.domestic.map((item, idx) => (
                          <div key={idx} className="bg-white rounded-[1rem] border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-row group h-28 sm:h-32">
                            <div 
                               className="w-1/3 sm:w-32 bg-slate-50 flex-shrink-0 relative border-r border-slate-100 flex items-center justify-center p-2 cursor-pointer overflow-hidden group/img"
                               onClick={() => setEnlargedImage(item.image)}
                               title="Nhấp để phóng to ảnh"
                            >
                               <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain group-hover/img:scale-110 transition-transform duration-500" />
                               <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors z-0"></div>
                               <div className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-lg shadow-sm z-10 pointer-events-none">
                                  <item.icon className="w-3.5 h-3.5 text-[#1d6266]" />
                               </div>
                            </div>
                            <div className="p-3 sm:p-4 flex flex-col flex-1 justify-center overflow-hidden cursor-default">
                               <h5 className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-[#1d6266] transition-colors line-clamp-2">{item.title}</h5>
                               <p className="text-[11px] sm:text-[12px] text-slate-600 font-medium leading-relaxed line-clamp-2 sm:line-clamp-3">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                     </div>
                   </div>

                   {/* International */}
                   <div>
                     <h4 className="text-[13px] lg:text-[14px] font-bold text-[#1d6266] flex items-center mb-4 uppercase tracking-widest"><Globe className="w-4 h-4 mr-1.5 text-[#2eb793]" /> {t.practice.international}</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.networking.international.map((item, idx) => (
                          <div key={idx} className="bg-white rounded-[1rem] border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-row group h-28 sm:h-32">
                            <div 
                               className="w-1/3 sm:w-32 bg-slate-50 flex-shrink-0 relative border-r border-slate-100 flex items-center justify-center p-2 cursor-pointer overflow-hidden group/img"
                               onClick={() => setEnlargedImage(item.image)}
                               title="Nhấp để phóng to ảnh"
                            >
                               <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain group-hover/img:scale-110 transition-transform duration-500" />
                               <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors z-0"></div>
                               <div className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-lg shadow-sm z-10 pointer-events-none">
                                  <item.icon className="w-3.5 h-3.5 text-[#1d6266]" />
                               </div>
                            </div>
                            <div className="p-3 sm:p-4 flex flex-col flex-1 justify-center overflow-hidden cursor-default">
                               <h5 className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-[#1d6266] transition-colors line-clamp-2">{item.title}</h5>
                               <p className="text-[11px] sm:text-[12px] text-slate-600 font-medium leading-relaxed line-clamp-2 sm:line-clamp-3">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                     </div>
                   </div>

                </div>
              </div>
            )}

            {/* --- TAB 2: CỘNG ĐỒNG --- */}
            {activeTab === 2 && (
              <div className="fade-in space-y-10 lg:space-y-12">
                
                {/* Intro JCI */}
                <div className="text-center bg-white p-5 lg:p-8 rounded-[1.5rem] border border-slate-100 shadow-sm">
                   <div className="inline-flex items-center space-x-2 mb-2 lg:mb-3">
                      <div className="h-[2px] w-5 lg:w-6 bg-[#1d6266]"></div>
                      <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#1d6266]">{t.community.subtitle}</span>
                   </div>
                   <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d6266] mb-3 lg:mb-4">{t.community.jciTitle}</h2>
                   <p className="text-[12px] lg:text-[13.5px] text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">{t.community.jciIntro}</p>
                </div>

                {/* Timeline Lộ trình */}
                <div>
                   <h4 className="text-[15px] lg:text-base font-bold text-slate-900 mb-5 lg:mb-6 text-center">{t.community.leadershipTitle}</h4>
                   <div className="relative group/timeline">
                      <div className="hidden lg:block absolute top-[20px] left-[10%] right-[10%] h-[3px] bg-slate-200 rounded-full z-0">
                         <div className="absolute top-0 left-0 h-full w-0 group-hover/timeline:w-full bg-gradient-to-r from-[#1d6266] to-[#2eb793] transition-all duration-1000 ease-in-out rounded-full shadow-[0_0_10px_rgba(46,183,147,0.5)]"></div>
                      </div>
                      
                      <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 relative z-10 snap-x snap-mandatory hide-scroll pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0">
                        {t.jciLeadership.map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center group/item relative min-w-[65%] sm:min-w-[40%] lg:min-w-0 snap-center">
                             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-[3px] border-slate-100 flex items-center justify-center mb-3 z-10 shadow-sm group-hover/item:border-[#2eb793] lg:group-hover/item:-translate-y-1 transition-all duration-300">
                               <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#1d6266] group-hover/item:text-[#2eb793] transition-colors" />
                             </div>
                             <div className="bg-white w-full p-4 lg:p-5 rounded-[1rem] border border-slate-100 shadow-sm text-center flex-1 relative overflow-hidden lg:group-hover/item:-translate-y-1 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1d6266] to-[#2eb793] transform origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"></div>
                                <span className="inline-block px-2 py-0.5 bg-[#1d6266]/5 text-[#1d6266] rounded-md text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mb-2">{item.year}</span>
                                <h4 className="text-[13px] lg:text-[14px] font-bold text-slate-900 mb-1 leading-snug">{item.title}</h4>
                                <p className="text-[11px] lg:text-[12px] text-slate-600 font-medium">{item.desc}</p>
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                {/* Hoạt động tiêu biểu (Cards Clickable -> Modal) */}
                <div>
                   <div className="flex items-center justify-center border-b border-slate-200 pb-3 mb-5 lg:mb-6">
                     <h4 className="text-[15px] lg:text-lg font-bold text-slate-900 text-center">{t.community.activityTitle}</h4>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                     {Object.values(t.jciActivities).map((category, idx) => {
                       let IconMap = MapPin;
                       if(category.id === 'national') IconMap = Flag;
                       if(category.id === 'international') IconMap = Globe;

                       return (
                         <div key={idx} 
                              onClick={() => setSelectedJciModal(category)}
                              className="bg-white rounded-[1rem] lg:rounded-[1.5rem] shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col relative overflow-hidden group h-fit cursor-pointer hover:-translate-y-1">
                           <div className="p-5 flex flex-col items-center relative z-10">
                             <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-[#1d6266] transition-colors duration-500 border border-slate-100 group-hover:border-[#1d6266] shadow-sm transform group-hover:-rotate-3">
                               <IconMap className="w-6 h-6 text-[#1d6266] group-hover:text-white transition-colors duration-500" />
                             </div>
                             <h4 className="text-[13px] lg:text-[14px] font-extrabold uppercase tracking-widest text-slate-900 text-center mb-3 lg:mb-4">{category.title}</h4>
                             <div className="flex items-center text-[#2eb793] text-[9px] lg:text-[10px] font-bold tracking-widest uppercase mt-auto bg-[#2eb793]/10 px-3 py-1.5 rounded-md group-hover:bg-[#2eb793] group-hover:text-white transition-colors">
                               {t.ui.viewDetails}
                               <ChevronRight className="w-3.5 h-3.5 ml-1" />
                             </div>
                           </div>
                         </div>
                       )
                     })}
                   </div>
                </div>

                {/* Other Communities */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 pb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scroll">
                  {t.community.otherCommunities.map((org, idx) => (
                    <div key={idx} className="min-w-[85%] md:min-w-0 snap-center bg-white rounded-[1rem] lg:rounded-[1.5rem] p-5 lg:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col items-center text-center relative overflow-hidden group">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#1d6266]/5 flex items-center justify-center mb-3 group-hover:bg-[#1d6266] transition-colors border border-slate-100 group-hover:border-[#1d6266] transform group-hover:-rotate-3">
                        <org.icon className="w-6 h-6 text-[#1d6266] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-[13px] lg:text-[14.5px] font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#1d6266] transition-colors">
                        <span className="text-[#1d6266] mr-1">{org.index}</span> 
                        {org.name}
                      </h4>
                      <div className="bg-[#2eb793]/10 text-[#1d6266] px-3 py-1.5 rounded-lg text-[11px] lg:text-[12px] font-semibold border border-[#2eb793]/20">
                        {org.role}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* Mobile Footer / Social Links (chỉ hiện trên Mobile ở cuối nội dung cuộn) */}
            <div className="lg:hidden mt-auto pt-6 pb-4 border-t border-slate-100">
               <div className="flex justify-center gap-3">
                 <a href="tel:+84911553686" className="w-9 h-9 flex items-center justify-center bg-white text-[#1d6266] rounded-full shadow-sm border border-slate-200"><Phone className="w-4 h-4" /></a>
                 <a href="mailto:hoant@paxlaw.vn" className="w-9 h-9 flex items-center justify-center bg-white text-[#1d6266] rounded-full shadow-sm border border-slate-200"><Mail className="w-4 h-4" /></a>
                 <a href="https://vn.linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center bg-white text-[#1d6266] rounded-full shadow-sm border border-slate-200"><Linkedin className="w-4 h-4" /></a>
                 <a href="https://www.facebook.com/Paxlaw.vn" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center bg-white text-[#1d6266] rounded-full shadow-sm border border-slate-200"><Facebook className="w-4 h-4" /></a>
               </div>
               <p className="text-center text-slate-400 text-[9px] mt-3">{t.contactInfo.address}</p>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================
          MODALS BẬT LÊN (KHÔNG CUỘN XUỐNG)
      ========================================= */}
      
      {/* 1. Modal Phóng to Ảnh (Dành riêng cho mục Chuyên môn -> Networking) */}
      {enlargedImage && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm transition-opacity" onClick={() => setEnlargedImage(null)}>
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col justify-center items-center">
            <button 
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20 shadow-md backdrop-blur-sm" 
              onClick={() => setEnlargedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      {/* 2. Modal Chi tiết Các cấp độ JCI (Giá trị kiến tạo) */}
      {selectedJciModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedJciModal(null)}>
          <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 lg:p-5 border-b border-slate-100 bg-slate-50 shrink-0">
              <h3 className="font-bold text-base lg:text-lg text-slate-900 flex items-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-[#1d6266]/10 flex items-center justify-center mr-3 shrink-0">
                  {selectedJciModal.id === 'national' ? <Flag className="w-4 h-4 text-[#1d6266]" /> : selectedJciModal.id === 'international' ? <Globe className="w-4 h-4 text-[#1d6266]" /> : <MapPin className="w-4 h-4 text-[#1d6266]" />}
                </div>
                {selectedJciModal.title}
              </h3>
              <button onClick={() => setSelectedJciModal(null)} className="p-2 bg-white border border-slate-200 hover:bg-slate-100 rounded-full transition-colors text-slate-600 shrink-0 shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 lg:p-6 overflow-y-auto hide-scroll flex-1 bg-white">
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${selectedJciModal.items.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 lg:gap-5`}>
                {selectedJciModal.items.map((item, i) => (
                  <div key={i} className="group/item bg-white p-3 lg:p-4 rounded-[1rem] lg:rounded-2xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                    <div className="w-full h-32 lg:h-40 rounded-xl overflow-hidden mb-3 flex items-center justify-center bg-slate-50 border border-slate-100 p-1.5 shrink-0">
                       <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain group-hover/item:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h5 className="text-[12.5px] lg:text-[13.5px] font-bold text-slate-900 mb-1.5 leading-snug group-hover/item:text-[#1d6266] transition-colors">{item.name}</h5>
                      <p className="text-[11.5px] lg:text-[12px] font-medium leading-relaxed text-slate-600 mt-auto">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
