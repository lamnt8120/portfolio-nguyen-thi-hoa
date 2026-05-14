import React, { useState, useEffect } from 'react';
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
      hideDetails: "Thu gọn"
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
        { title: 'Hợp tác với hãng luật BNA (chị Dung)', icon: HandHeart, desc: 'Thiết lập quan hệ đối tác chiến lược nhằm mở rộng hệ sinh thái dịch vụ pháp lý trọn gói.', image: 'https://placehold.co/600x400/e2e8f0/1d6266?text=BNA+Partnership' }
      ],
      international: [
        { title: 'Đại biểu đoàn Việt Nam Triển lãm Quốc tế Trade Expo, Mumbai (2024)', icon: Flag, desc: 'Xúc tiến giao thương, kết nối cơ hội đầu tư và hợp tác pháp lý giữa doanh nghiệp Việt Nam và Ấn Độ.', image: 'https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg' },
        { title: 'Triển lãm quốc tế về sản phẩm/dịch vụ ASEAN - Trade Expo Mumbai Ấn Độ (2024)', icon: Briefcase, desc: 'Tham gia gian hàng triển lãm, giới thiệu và xúc tiến các cơ hội hợp tác thương mại tại thị trường Ấn Độ.', image: 'https://i.postimg.cc/VktkP5cD/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-9-45-02-SA.png' },
        { title: 'Giao lưu luật sư JCI toàn cầu với đoàn luật sư tại Đào Viên (2024)', icon: Globe, desc: 'Tham gia mạng lưới kết nối chuyên gia pháp lý quốc tế, trao đổi kinh nghiệm hành nghề xuyên biên giới.', image: 'https://i.postimg.cc/0QPHVKcX/Doa-n-Vie-n.jpg' },
        { title: 'Thăm và giao lưu đối tác tại Đài Loan - Braintrust (Anh Hung Ou Yang) (2024)', icon: MapPin, desc: 'Mở rộng mạng lưới đối tác chiến lược tại khu vực Đông Á.', image: 'https://i.postimg.cc/4NDP8h3D/braintrust.jpg' },
        { title: 'Giao kết hợp tác với đối tác tại Nhật Bản - LS Yoshio', icon: HandHeart, desc: 'Ký kết thỏa thuận hợp tác, tạo kênh hỗ trợ pháp lý trực tiếp cho các luồng đầu tư Việt - Nhật.', image: 'https://placehold.co/600x400/e2e8f0/1d6266?text=Japan+Partnership' }
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
          { name: "Sự kiện giao lưu với Hiệp hội doanh nghiệp Tô Châu - Trung Quốc với khu vực Đông Nam Á", desc: "Kết nối doanh nghiệp Trung Quốc với khu vực Đông Nam Á.", image: 'https://i.postimg.cc/xdDzDvD9/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-57-38-SA.png' }
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
      desc: "Law is the framework that creates competitive advantages for businesses.",
      contactBtn: "Contact Me",
      scanToConnect: "Scan to connect"
    },
    ui: {
      viewDetails: "View Details",
      hideDetails: "Show Less"
    },
    profile: {
      title: "Summary & Journey",
      subtitle: "Atty. Hoa Nguyen",
      desc1: "Through the lens of someone deeply engaged with the pulse of business, I have never viewed legal frameworks as rigid barriers. Having navigated market cycles alongside founders, I truly appreciate the value of early protection.",
      desc2: "When the law is thoroughly understood and flexibly applied, it goes beyond mere boundaries of right and wrong. It transforms into a solid launchpad and a guiding compass for sustainable growth strategies."
    },
    stats: [
      { value: "15+", label: "Years of Experience" },
      { value: "50+", label: "Global Partners" }
    ],
    highlights: [
      {
        title: "Education & Training",
        icon: GraduationCap,
        items: [
          "Master of International Trade Policy & Law (Foreign Trade University)",
          "Bachelor of Commercial Law (Hanoi Law University)",
          "Lawyer's Skills Training Course – Judicial Academy"
        ]
      },
      {
        title: "Teaching & Coaching",
        icon: BookOpen,
        items: [
          "Visiting Lecturer of Banking Law – Thanh Dong University",
          "Internal Trainer on Foreign Exchange Management at Techcombank"
        ]
      },
      {
        title: "Certifications & Organizations",
        icon: Award,
        items: [
          "Member of the Hanoi Bar Association (Vietnam Bar Federation)",
          "Certified Bankruptcy Trustee (Receiver/Liquidator)",
          "Registered Industrial Property Agent"
        ]
      }
    ],
    career: {
      title: "Professional Experience"
    },
    timelineData: [
      { period: "12/2024 - Present", role: "Managing Attorney", company: "Paxlaw", desc: "Providing comprehensive outsourced legal solutions (PaxFlow) focusing on M&A and investments." },
      { period: "2022 - Present", role: "Head of Legal", company: "Green Investment JSC", desc: "Risk management, ensuring compliance for investment projects and joint ventures." },
      { period: "2018 - 2024", role: "Deputy Director / Partner", company: "Penfield Law Firm", desc: "Led complex M&A transactions and financial restructuring plans." },
      { period: "2013 - 2018", role: "Senior Legal Counsel", company: "Techcombank", desc: "Legal support for foreign exchange and capital management for wholesale corporate clients." }
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
        title: "M&A & Corporate Restructuring",
        icon: Building2,
        cases: [
          { text: "Legal representative for the buyer in the acquisition of a steel plant (Northern region) valued at ", highlight: "VND 1,000 billion." },
          { text: "Strategic M&A advisor for the transfer of Bai Dai Resort project (Cam Ranh) valued at ", highlight: "VND 1,600 billion." },
          { text: "Designed and implemented a comprehensive financial, HR, and operational restructuring plan for Thai Nguyen Mineral Group ", highlight: "(>VND 1,000 billion)." },
        ]
      },
      {
        title: "International Investment & Real Estate",
        icon: Globe2,
        cases: [
          { text: "Comprehensive legal backing for a luxury resort complex featuring ", highlight: "1,000+ 5-star Condotels", suffix: " in Nha Trang." },
          { text: "Member of the expert advisory group developing the Policy Report on Public-Private Partnerships (PPP) in Vietnam for the Ministry of Economy and Finance of South Korea." },
          { text: "Established and operated legal structures for multiple FDI corporations (Japan, South Korea, Hong Kong...) investing in Vietnam's industrial zones." },
        ]
      },
      {
        title: "Banking & Finance",
        icon: Landmark,
        cases: [
          { text: "Legal backing for corporate bond issuance of a waste-to-energy project (Ba Ria - Vung Tau), sized at ", highlight: "VND 800 billion." },
          { text: "Advised on crisis resolution and restructuring solutions for 07 corporate bond issuances, valued at ", highlight: "VND 500-850B each." },
          { text: "Designed legal frameworks for foreign loans ", highlight: "(USD 3.5M)", suffix: " for a Dutch agricultural corporation investing in Vietnam." },
        ]
      },
      {
        title: "Contracts & Disputes",
        icon: ShieldCheck,
        cases: [
          { text: "Standardized the supply and transportation contract system for leading E-commerce platforms (Shopee, Lazada, Tiki...)." },
          { text: "Successfully defended the rights of a Vietnam Construction Group in an EPC contract dispute ", highlight: "(VND 250 billion)." },
          { text: "Represented the Project Owner to successfully resolve a construction bidding dispute in Khanh Hoa ", highlight: "(VND 350 billion)." },
        ]
      }
    ],
    community: {
      title: "Community Impact",
      subtitle: "Networking",
      jciTitle: "1. JCI - Junior Chamber International",
      jciIntro: "JCI is a global network of nearly 200,000 young leaders across 100+ countries. In Vietnam, the network has grown robustly with 15 chapters under the Vietnam Young Entrepreneurs Association (VYEA), continuously spreading the spirit of service and sustainable value creation.",
      leadershipTitle: "Leadership Roadmap",
      activityTitle: "Featured Activities",
      otherCommunities: [
        {
          index: "2.",
          name: "Vietnam Business Association in Benelux",
          role: "Executive Committee Member in charge of Public Relations for Northern Vietnam",
          icon: Globe
        },
        {
          index: "3.",
          name: "Vietnam - Saudi Business Council",
          role: "Founding Member of the Interim Executive Council",
          icon: HandHeart
        }
      ]
    },
    networking: {
      domestic: [
        { title: 'Speaker at Workshop "Smart Legal Frameworks, Rational Cooperation" (2024)', icon: Mic, desc: 'Sharing practical legal knowledge for startups and SME communities.', image: 'https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg' },
        { title: 'Speaker for the "Shape Your Future" Project (2023-2025)', icon: User, desc: 'Career orientation, inspiring and sharing practical experience for law students.', image: 'https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg' },
        { title: 'Advisor & Judge for SIL at Dai Nam University (2024)', icon: Award, desc: 'Accompanying student innovation projects as an Expert Advisor and Judge.', image: 'https://i.postimg.cc/mgyTBfvz/SIL.jpg' },
        { title: 'Strategic Partnership with BNA Law Firm (Ms. Dung)', icon: HandHeart, desc: 'Establishing a strategic partnership to expand the comprehensive legal service ecosystem.', image: 'https://placehold.co/600x400/e2e8f0/1d6266?text=BNA+Partnership' }
      ],
      international: [
        { title: 'Vietnam Delegate at Trade Expo, Mumbai (2024)', icon: Flag, desc: 'Promoting trade, connecting investment and legal cooperation opportunities between VN and India.', image: 'https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg' },
        { title: 'International Exhibition of ASEAN Products/Services - Trade Expo Mumbai, India (2024)', icon: Briefcase, desc: 'Participating in the exhibition, promoting trade and introducing products to the Indian market.', image: 'https://i.postimg.cc/VktkP5cD/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-9-45-02-SA.png' },
        { title: 'JCI Global Lawyers Exchange with the Taoyuan Bar Association (2024)', icon: Globe, desc: 'Participating in the international legal expert network, exchanging cross-border practice experience.', image: 'https://i.postimg.cc/0QPHVKcX/Doa-n-Vie-n.jpg' },
        { title: 'Partner Visit & Exchange in Taiwan - Braintrust (Mr. Hung Ou Yang) (2024)', icon: MapPin, desc: 'Expanding the strategic partner network in East Asia.', image: 'https://i.postimg.cc/4NDP8h3D/braintrust.jpg' },
        { title: 'Strategic Partnership with Japanese Partner - Lawyer Yoshio', icon: HandHeart, desc: 'Signing cooperation agreements, creating a direct legal support channel for Vietnam - Japan investments.', image: 'https://placehold.co/600x400/e2e8f0/1d6266?text=Japan+Partnership' }
      ]
    },
    jciLeadership: [
      { year: "2024", title: "Inaugural Project Director", desc: "\"Launch To Leaders\" Initiative.", icon: Rocket },
      { year: "2025", title: "Founding President", desc: "JCI Grace.", icon: Crown },
      { year: "2026", title: "Vice President", desc: "JCI Vietnam.", icon: Network },
      { year: "2024 - Present", title: "Core Founding Member", desc: "JCI Global Lawyers Council.", icon: Scale },
    ],
    jciActivities: {
      local: {
        id: 'local',
        title: "Local Chapter Level",
        items: [
          { name: "GUC - Launch To Leader (2024)", desc: "Leadership capacity development program.", image: 'https://i.postimg.cc/c1nG6wVq/guc.jpg' },
          { name: "Flow of Success (2026)", desc: "Practical business networking event series.", image: 'https://i.postimg.cc/RZjcCrtY/do-ng-cha-y-tha-nh-co-ng.jpg' },
          { name: "Exchange Event with Suzhou Business Association (China) and Southeast Asia", desc: "Connecting Chinese enterprises with SE Asia.", image: 'https://i.postimg.cc/xdDzDvD9/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-57-38-SA.png' }
        ]
      },
      national: {
        id: 'national',
        title: "National Level",
        items: [
          { name: "NATCON & NYC Agendas (2024 - 2025)", desc: "Attended high-level meetings and strategic planning sessions.", image: 'https://i.postimg.cc/rmvwtSNk/Natcon-2025.jpg' },
          { name: "\"Let's meet up Vietnam\" Forum (2025)", desc: "Representative of the Organizing Committee, facilitating cooperation and building an ASEAN trade bridge.", image: 'https://i.postimg.cc/NjLFPPt9/Let-s-meet-up.jpg' },
          { name: "Rise To Shine JCI Vietnam 2025", desc: "Honoring Top 5 outstanding projects, spreading the JCI RISE message of service aspiration.", image: 'https://i.postimg.cc/Y0rt5Mk4/rise-to-shine.jpg' }
        ]
      },
      international: {
        id: 'international',
        title: "International Level",
        items: [
          { name: "JCI World Congress 2024 (Taiwan)", desc: "Touchpoint of the global young leaders network, connecting trade with elite members.", image: 'https://i.postimg.cc/4d0BV0Xp/congress.jpg' },
          { name: "JCI ASPAC 2024 & 2025 (Mongolia)", desc: "Space for cultural sympathy and regional strategy, opening up international MOU opportunities.", image: 'https://i.postimg.cc/dVbkzkf1/aspac-2025.webp' },
          { name: "JCI Marine Lines India & JCI Thanglong Exchange", desc: "Fostering a spirit of multicultural learning and creating opportunities for sustainable economic cooperation.", image: 'https://i.postimg.cc/mgMPwPzx/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-58-35-SA.png' },
          { name: "JCI ASEAN Senator BOD Meeting (2025 - 2026)", desc: "Official delegate of Vietnam participating in the agenda series in China and Malaysia.", image: 'https://i.postimg.cc/4xbJyV7S/A-nh-chu-p-Ma-n-hi-nh-2026-05-14-lu-c-8-59-46-SA.png' }
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
      {/* Ẩn hoàn toàn tooltip QR trên mobile (dùng hidden md:flex) để không bị vướng khi thao tác cảm ứng */}
      {qrImageSource && (
        <div className="hidden md:flex absolute bottom-full mb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2 z-50 w-max flex-col items-center pointer-events-none">
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

  const [activePractice, setActivePractice] = useState(null);
  const [activeDomNetwork, setActiveDomNetwork] = useState(null);
  const [activeIntNetwork, setActiveIntNetwork] = useState(null);
  const [activeJciActivity, setActiveJciActivity] = useState(null);

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
        /* Ẩn scrollbar cho timeline nằm ngang trên mobile */
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             <div className="flex items-center">
                <img 
                  src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" 
                  alt="PAXLAW Logo" 
                  className={`h-10 md:h-12 lg:h-16 object-contain transition-all duration-300 ${isScrolled ? 'brightness-0 opacity-80' : 'drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`} 
                />
                <div className={`ml-3 md:ml-4 pl-3 md:pl-4 border-l h-8 md:h-10 lg:h-12 flex flex-col justify-center transition-colors duration-300 ${isScrolled ? 'border-slate-300' : 'border-white/30'}`}>
                  <span className={`text-[8px] md:text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase leading-none mb-1 md:mb-1.5 transition-colors ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                    {lang === 'vi' ? 'Luật sư' : 'Atty.'}
                  </span>
                  <span className={`text-[13px] md:text-[14px] lg:text-[16px] font-extrabold tracking-widest uppercase leading-none transition-colors ${isScrolled ? 'text-[#1d6266]' : 'text-white'}`}>
                    Nguyễn Hoa
                  </span>
                </div>
             </div>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {t.nav.map((item, idx) => (
              <button key={idx} onClick={() => scrollTo(['ho-so', 'chuyen-mon', 'cong-dong'][idx])}
                className={`text-[11px] lg:text-[12px] font-bold uppercase tracking-widest hover:text-[#2eb793] transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-4 border-l pl-4 lg:pl-6 border-slate-400/30">
              <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className={`flex items-center text-xs font-bold uppercase tracking-widest hover:opacity-80 ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                <Globe className="w-4 h-4 mr-1" /> {lang === 'vi' ? 'VI' : 'EN'}
              </button>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-800 p-1">
            {mobileMenuOpen ? <X className={`h-6 w-6 transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`} /> : <Menu className={`h-6 w-6 transition-colors ${isScrolled ? 'text-[#1d6266]' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 border-t border-slate-100">
            {t.nav.map((item, idx) => (
              <button key={idx} onClick={() => scrollTo(['ho-so', 'chuyen-mon', 'cong-dong'][idx])} className="text-sm font-bold text-slate-700 uppercase tracking-widest w-full py-3">{item}</button>
            ))}
             <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="text-sm font-bold text-[#1d6266] uppercase py-3 flex items-center w-full justify-center bg-slate-50">
                <Globe className="w-4 h-4 mr-2" /> Ngôn ngữ: {lang === 'vi' ? 'VI' : 'EN'}
             </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-24 bg-[#1d6266] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-center bg-cover mix-blend-overlay" style={{ backgroundImage: "url('https://i.postimg.cc/L8zfbHqn/Paxlaw-template-2.png')" }}></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
               <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-4 lg:mb-6">
                 <div className="h-[2px] w-6 lg:w-8 bg-[#2eb793]"></div>
                 <span className="text-[#2eb793] font-bold tracking-[0.2em] uppercase text-[10px] lg:text-xs">{t.hero.subtitle}</span>
               </div>
               
               <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold text-white mb-3 lg:mb-4 tracking-tight leading-[1.1] drop-shadow-lg">
                 {lang === 'vi' ? 'Nguyễn Thị Hoa' : 'Hoa Nguyen'}
               </h1>
               
               <p className="text-lg md:text-xl lg:text-2xl text-[#2eb793] font-light italic mb-6 lg:mb-8">
                 {t.hero.quote}
               </p>
               
               <p className="text-sm md:text-base lg:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10 px-4 lg:px-0">
                 {t.hero.desc}
               </p>

               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4">
                  <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
                    <a href="tel:+84911553686" className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-[#2eb793] text-[#1d6266] rounded-full hover:bg-white transition-colors border border-[#2eb793] shadow-lg">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
                    <a href="mailto:hoant@paxlaw.vn" className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/20 shadow-lg">
                      <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
                    <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/20 shadow-lg">
                      <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                  </TooltipQR>
                  <TooltipQR qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.hero.scanToConnect}>
                    <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors border border-white/20 shadow-lg">
                      <Facebook className="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                  </TooltipQR>
               </div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 px-6 sm:px-0">
               <div className="relative w-full max-w-[260px] sm:max-w-[320px] aspect-[4/5] lg:max-w-[400px] lg:h-[480px]">
                 <div className="absolute inset-0 bg-[#2eb793] rounded-3xl transform translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 opacity-50 blur-sm"></div>
                 <img 
                   src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                   alt="LS Hoa Nguyen" 
                   className="absolute inset-0 w-full h-full object-cover rounded-3xl border-[3px] lg:border-4 border-white/10 shadow-2xl"
                 />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: HỒ SƠ --- */}
      <section id="ho-so" className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="mb-8 lg:mb-12 text-center lg:text-left">
             <div className="inline-flex items-center space-x-3 mb-2 lg:mb-3">
                 <div className="h-[2px] w-6 lg:w-8 bg-[#1d6266]"></div>
                 <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-[#1d6266]">{t.profile.subtitle}</span>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">{t.profile.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:space-y-8">
              <div className="text-[14px] lg:text-[15px] text-slate-600 font-light leading-relaxed space-y-4 text-justify">
                <p>{t.profile.desc1}</p>
                <p className="border-l-[3px] lg:border-l-4 border-[#2eb793] pl-3 lg:pl-4 font-medium text-slate-800">{t.profile.desc2}</p>
              </div>

              <div className="flex gap-4 md:gap-8 bg-slate-50 p-5 lg:p-6 rounded-2xl border border-slate-100 justify-around lg:justify-start">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-extrabold text-[#1d6266] mb-1">{stat.value}</div>
                    <div className="text-[9px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-5 lg:space-y-6">
                {t.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <item.icon className="w-5 h-5 text-[#2eb793] mr-3 lg:mr-4 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[13px] lg:text-sm font-bold text-slate-900 uppercase tracking-wide mb-1.5 lg:mb-2">{item.title}</h4>
                      <ul className="space-y-1 lg:space-y-1.5">
                        {item.items.map((li, i) => (
                          <li key={i} className="text-[12.5px] lg:text-[13.5px] text-slate-600 font-light">• {li}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-6 md:p-8 lg:p-12 rounded-[2rem] lg:rounded-3xl border border-slate-100 h-full">
                <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-6 lg:mb-8 flex items-center"><Briefcase className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-[#2eb793]"/> {t.career.title}</h3>
                <div className="space-y-6 lg:space-y-8">
                  {t.timelineData.map((item, idx) => (
                    <div key={idx} className="relative pl-5 lg:pl-6 pb-2 border-l border-slate-200 last:border-0 last:pb-0 group">
                      <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#2eb793] transition-colors duration-300"></div>
                      <span className="text-[10px] lg:text-[11px] font-bold text-[#1d6266] uppercase tracking-wider block mb-1">{item.period}</span>
                      <h4 className="text-[14px] lg:text-[15px] font-bold text-slate-900">{item.role}</h4>
                      <h5 className="text-[11px] lg:text-[12px] font-medium text-slate-500 uppercase mb-1.5 lg:mb-2">{item.company}</h5>
                      <p className="text-[12.5px] lg:text-[13px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: LĨNH VỰC CHUYÊN MÔN --- */}
      <section id="chuyen-mon" className="py-12 md:py-16 lg:py-24 bg-[#1d6266] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8 lg:mb-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-2 lg:mb-3">
                <div className="h-[2px] w-6 lg:w-8 bg-[#2eb793]"></div>
                <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-[#2eb793]">{t.practice.subtitle}</span>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.practice.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-12 lg:mb-16">
            {t.practiceAreas.map((area, idx) => {
              const isActive = activePractice === idx;
              return (
                <div key={idx} 
                     onClick={() => setActivePractice(isActive ? null : idx)}
                     className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 hover:bg-white/10 transition-colors cursor-pointer group">
                  
                  <div className="flex items-center justify-between pb-1 lg:pb-2">
                    <div className="flex items-center">
                      <area.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#2eb793] mr-2 lg:mr-3" />
                      <h3 className="text-[14px] lg:text-[16px] font-bold text-white tracking-wide">{area.title}</h3>
                    </div>
                    <div className="flex items-center text-[#2eb793] text-[10px] lg:text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="hidden sm:inline">{isActive ? t.ui.hideDetails : t.ui.viewDetails}</span>
                      <ChevronDown className={`w-4 h-4 sm:ml-1 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Nội dung chi tiết xổ xuống */}
                  <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-3 pt-3 lg:mt-4 lg:pt-4 border-t border-white/10 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <ul className="space-y-2.5 lg:space-y-3 pb-1 lg:pb-2">
                        {area.cases.map((c, i) => (
                          <li key={i} className="flex items-start text-[12.5px] lg:text-[13.5px] font-light text-slate-300">
                            <ChevronRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#2eb793] shrink-0 mr-1.5 mt-0.5" />
                            <span>
                              {c.text} 
                              {c.highlight && <span className="font-semibold text-white">{c.highlight}</span>}
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

          <div className="border-t border-white/10 pt-10 lg:pt-16">
            <div className="text-center mb-8 lg:mb-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white inline-flex items-center"><Mic className="w-5 h-5 lg:w-6 lg:h-6 text-[#2eb793] mr-2 lg:mr-3" /> {t.practice.speakerTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
              {/* Trong nước (Accordions) */}
              <div className="bg-white/5 border border-white/10 rounded-[2rem] lg:rounded-3xl p-5 md:p-6 lg:p-8">
                <h4 className="text-base lg:text-lg font-bold text-[#2eb793] flex items-center mb-5 lg:mb-6 uppercase tracking-wide"><MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-2" /> {t.practice.domestic}</h4>
                <div className="space-y-3 lg:space-y-4">
                  {t.networking.domestic.map((item, idx) => {
                    const isActive = activeDomNetwork === idx;
                    return (
                      <div key={idx} 
                           onClick={() => setActiveDomNetwork(isActive ? null : idx)}
                           className={`bg-white/5 border rounded-2xl p-3.5 lg:p-4 transition-all cursor-pointer group ${isActive ? 'border-[#2eb793]/40 bg-white/10' : 'border-white/10 hover:bg-[#2eb793]/5 hover:border-[#2eb793]/20'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                             <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#2eb793] mr-3 lg:mr-4 shrink-0 p-1.5 lg:p-2 bg-[#1d6266] rounded-xl group-hover:scale-110 transition-transform" />
                             <h5 className="text-[13.5px] lg:text-[14.5px] font-medium text-slate-200 leading-snug mt-0.5 lg:mt-1 group-hover:text-white transition-colors pr-2 lg:pr-4">{item.title}</h5>
                          </div>
                          <ChevronDown className={`w-4 h-4 lg:w-5 lg:h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#2eb793]' : ''}`} />
                        </div>
                        {/* Chi tiết xổ xuống */}
                        <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-3 pt-3 lg:mt-4 lg:pt-4 border-t border-white/10 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                             <div className="w-full h-auto rounded-xl overflow-hidden mb-3 lg:mb-4 bg-black/20">
                               <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                             </div>
                             <p className="text-[12px] lg:text-[13px] text-slate-300 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quốc tế (Accordions) */}
              <div className="bg-white/5 border border-white/10 rounded-[2rem] lg:rounded-3xl p-5 md:p-6 lg:p-8">
                <h4 className="text-base lg:text-lg font-bold text-[#2eb793] flex items-center mb-5 lg:mb-6 uppercase tracking-wide"><Globe className="w-4 h-4 lg:w-5 lg:h-5 mr-2" /> {t.practice.international}</h4>
                <div className="space-y-3 lg:space-y-4">
                  {t.networking.international.map((item, idx) => {
                    const isActive = activeIntNetwork === idx;
                    return (
                      <div key={idx} 
                           onClick={() => setActiveIntNetwork(isActive ? null : idx)}
                           className={`bg-white/5 border rounded-2xl p-3.5 lg:p-4 transition-all cursor-pointer group ${isActive ? 'border-[#2eb793]/40 bg-white/10' : 'border-white/10 hover:bg-[#2eb793]/5 hover:border-[#2eb793]/20'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                             <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#2eb793] mr-3 lg:mr-4 shrink-0 p-1.5 lg:p-2 bg-[#1d6266] rounded-xl group-hover:scale-110 transition-transform" />
                             <h5 className="text-[13.5px] lg:text-[14.5px] font-medium text-slate-200 leading-snug mt-0.5 lg:mt-1 group-hover:text-white transition-colors pr-2 lg:pr-4">{item.title}</h5>
                          </div>
                          <ChevronDown className={`w-4 h-4 lg:w-5 lg:h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#2eb793]' : ''}`} />
                        </div>
                        {/* Chi tiết xổ xuống */}
                        <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-3 pt-3 lg:mt-4 lg:pt-4 border-t border-white/10 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                             <div className="w-full h-auto rounded-xl overflow-hidden mb-3 lg:mb-4 bg-black/20">
                               <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                             </div>
                             <p className="text-[12px] lg:text-[13px] text-slate-300 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CỘNG ĐỒNG JCI --- */}
      <section id="cong-dong" className="py-12 md:py-16 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          
          <div className="mb-8 lg:mb-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-2 lg:mb-3">
                <div className="h-[2px] w-6 lg:w-8 bg-[#1d6266]"></div>
                <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-[#1d6266]">{t.community.subtitle}</span>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 lg:mb-10">{t.community.title}</h2>
          </div>

          {/* --- 1. JCI --- */}
          <div className="mb-16 lg:mb-20">
             <div className="flex items-center justify-center mb-4 lg:mb-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1d6266] text-center px-4">{t.community.jciTitle}</h3>
             </div>
             <p className="text-[13px] md:text-[14px] lg:text-[15px] text-slate-600 max-w-4xl mx-auto font-light leading-relaxed text-center mb-10 lg:mb-12 px-2">{t.community.jciIntro}</p>

             {/* --- TIMELINE NẰM NGANG (Vuốt trên mobile) --- */}
             <div className="mb-16 lg:mb-24 pt-4 lg:pt-8">
               <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-8 lg:mb-14 text-center">{t.community.leadershipTitle}</h4>
               
               <div className="relative group/timeline">
                  <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[4px] bg-slate-200 rounded-full z-0">
                     <div className="absolute top-0 left-0 h-full w-0 group-hover/timeline:w-full bg-gradient-to-r from-[#1d6266] to-[#2eb793] transition-all duration-1000 ease-in-out rounded-full shadow-[0_0_10px_rgba(46,183,147,0.5)]"></div>
                  </div>
                  
                  {/* Container scroll ngang trên mobile */}
                  <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10 snap-x snap-mandatory hide-scroll pb-6 -mx-5 px-5 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 lg:pb-0">
                    {t.jciLeadership.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center group/item relative min-w-[75%] sm:min-w-[45%] md:min-w-[40%] lg:min-w-0 snap-center">
                         <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-[3px] lg:border-[4px] border-slate-100 flex items-center justify-center mb-4 lg:mb-6 z-10 shadow-sm group-hover/item:border-[#2eb793] group-hover/item:shadow-[0_0_20px_rgba(46,183,147,0.4)] group-hover/item:-translate-y-1 transition-all duration-300">
                           <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#1d6266] group-hover/item:text-[#2eb793] transition-colors" />
                         </div>
                         
                         <div className="bg-white w-full p-5 lg:p-6 rounded-2xl border border-slate-100 shadow-sm group-hover/item:shadow-lg group-hover/item:border-[#2eb793]/30 transition-all duration-300 text-center flex-1 relative overflow-hidden lg:group-hover/item:-translate-y-1">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1d6266] to-[#2eb793] transform origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"></div>
                            
                            <span className="inline-block px-2.5 py-1 bg-[#1d6266]/5 text-[#1d6266] rounded-md text-[10px] lg:text-[11px] font-bold uppercase tracking-widest mb-2.5 lg:mb-3">
                              {item.year}
                            </span>
                            <h4 className="text-[14px] lg:text-[15px] font-bold text-slate-900 mb-1.5 lg:mb-2 leading-snug">{item.title}</h4>
                            <p className="text-[12px] lg:text-[13px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
             </div>

             {/* --- HOẠT ĐỘNG TIÊU BIỂU (Expandable Cards) --- */}
             <div>
               <div className="flex items-center justify-center border-b border-slate-200 pb-4 lg:pb-6 mb-8 lg:mb-12">
                 <h4 className="text-lg lg:text-3xl font-bold text-slate-900 text-center">{t.community.activityTitle}</h4>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
                 
                 {Object.values(t.jciActivities).map((category, idx) => {
                   let IconMap = MapPin;
                   if(category.id === 'national') IconMap = Flag;
                   if(category.id === 'international') IconMap = Globe;

                   const isActive = activeJciActivity === category.id;

                   return (
                     <div key={idx} 
                          className="bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 flex flex-col relative overflow-hidden group h-fit">
                       
                       <div 
                         onClick={() => setActiveJciActivity(isActive ? null : category.id)}
                         className="p-6 lg:p-8 lg:pb-6 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col items-center relative z-10"
                       >
                         <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 lg:mb-5 group-hover:bg-[#1d6266] transition-colors duration-500 border border-slate-100 group-hover:border-[#1d6266] shadow-sm transform group-hover:-rotate-3">
                           <IconMap className="w-6 h-6 lg:w-7 lg:h-7 text-[#1d6266] group-hover:text-white transition-colors duration-500" />
                         </div>
                         <h4 className="text-[14px] lg:text-[16px] font-extrabold uppercase tracking-widest text-slate-900 text-center mb-2 lg:mb-3">{category.title}</h4>
                         <div className="flex items-center text-[#2eb793] text-[10px] lg:text-[11px] font-bold tracking-widest uppercase mt-1 lg:mt-2">
                           {isActive ? t.ui.hideDetails : t.ui.viewDetails}
                           <ChevronDown className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ml-1 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                         </div>
                       </div>

                       <div className={`grid transition-all duration-500 ease-in-out bg-slate-50 ${isActive ? 'grid-rows-[1fr] opacity-100 border-t border-slate-100' : 'grid-rows-[0fr] opacity-0'}`}>
                         <div className="overflow-hidden">
                           <div className="p-4 lg:p-5">
                             <div className="space-y-3 lg:space-y-4 relative z-10">
                               {category.items.map((item, i) => (
                                 <div key={i} className="group/item bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
                                   <div className="w-full h-auto rounded-lg overflow-hidden mb-3 bg-slate-200">
                                      <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover/item:scale-105 transition-transform duration-500" />
                                   </div>
                                   <div className="px-1">
                                     <h5 className="text-[13px] lg:text-[14px] font-bold text-slate-800 mb-1.5 leading-snug group-hover/item:text-[#1d6266] transition-colors">{item.name}</h5>
                                     <p className="text-[11.5px] lg:text-[12px] font-light leading-relaxed text-slate-500">{item.desc}</p>
                                   </div>
                                 </div>
                               ))}
                             </div>
                           </div>
                         </div>
                       </div>

                     </div>
                   )
                 })}

               </div>
             </div>
          </div>

          {/* --- 2 & 3. OTHER COMMUNITIES (Vuốt ngang trên mobile) --- */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 lg:gap-8 snap-x snap-mandatory hide-scroll pb-6 -mx-5 px-5 md:-mx-0 md:px-0 md:pb-0">
            {t.community.otherCommunities.map((org, idx) => (
              <div key={idx} className="min-w-[85%] md:min-w-0 snap-center bg-white rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#2eb793]/40 hover:shadow-[0_20px_50px_-15px_rgba(29,98,102,0.15)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-bl from-[#2eb793]/10 to-transparent rounded-tr-[1.5rem] lg:rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-slate-50 flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-[#1d6266] transition-colors duration-500 border border-slate-100 group-hover:border-[#1d6266] shadow-sm transform group-hover:-rotate-3 relative z-10">
                  <org.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#1d6266] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h4 className="text-[15px] lg:text-[18px] font-bold text-slate-900 mb-3 lg:mb-4 leading-snug group-hover:text-[#1d6266] transition-colors relative z-10">
                  <span className="text-[#1d6266] mr-1 lg:mr-2">{org.index}</span> 
                  {org.name}
                </h4>
                <div className="bg-[#2eb793]/10 text-[#1d6266] px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-[12px] lg:text-[14px] font-semibold border border-[#2eb793]/20 relative z-10">
                  {org.role}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- FOOTER TỐI GIẢN --- */}
      <footer className="bg-[#1d6266] py-8 lg:py-10 relative z-20 border-t border-[#2eb793]/20">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center flex-col md:flex-row gap-4 md:gap-5">
             <div className="flex items-center justify-center">
               <img 
                 src="https://i.postimg.cc/Hsvp0Hy0/PAXLAW-logo-file-goc-02.png" 
                 alt="Paxlaw Logo" 
                 className="h-16 md:h-20 lg:h-24 object-contain opacity-90"
               />
               <div className="ml-3 pl-3 lg:ml-4 lg:pl-4 border-l border-white/30 h-12 lg:h-16 flex flex-col justify-center text-left">
                  <span className="text-[8px] lg:text-[9px] font-bold tracking-[0.2em] uppercase leading-none mb-1 text-white/60">
                    {lang === 'vi' ? 'Luật sư' : 'Atty.'}
                  </span>
                  <span className="text-[12px] lg:text-[14px] font-extrabold tracking-widest uppercase leading-none text-[#2eb793]">
                    Nguyễn Hoa
                  </span>
               </div>
             </div>
             <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-5 flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
                <p className="text-white/50 text-[11px] lg:text-[12px] font-light max-w-[200px] md:max-w-none">{t.contactInfo.address}</p>
             </div>
          </div>
          <div className="flex gap-3 lg:gap-5">
             <TooltipQR qrUrl="tel:+84911553686" scanText={t.hero.scanToConnect}>
               <a href="tel:+84911553686" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Phone className="w-4 h-4"/></a>
             </TooltipQR>
             <TooltipQR qrUrl="mailto:hoant@paxlaw.vn" scanText={t.hero.scanToConnect}>
               <a href="mailto:hoant@paxlaw.vn" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Mail className="w-4 h-4"/></a>
             </TooltipQR>
             <TooltipQR qrUrl="https://linkedin.com/in/lawyerhoanguyen" scanText={t.hero.scanToConnect}>
               <a href="https://linkedin.com/in/lawyerhoanguyen" target="_blank" rel="noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Linkedin className="w-4 h-4"/></a>
             </TooltipQR>
             <TooltipQR qrUrl="https://facebook.com/hoant.paxlaw" scanText={t.hero.scanToConnect}>
               <a href="https://facebook.com/hoant.paxlaw" target="_blank" rel="noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#2eb793] hover:text-[#1d6266] transition-colors"><Facebook className="w-4 h-4"/></a>
             </TooltipQR>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
