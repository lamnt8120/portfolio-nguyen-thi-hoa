import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Scale, Briefcase, GraduationCap, 
  Landmark, Building2, Globe2, 
  Mail, Phone, Linkedin, Facebook, ChevronRight, 
  Award, Mic, Sparkles, ShieldCheck, BookOpen, Globe,
  MapPin, Flag, Navigation,
  Rocket, Crown, Network
} from 'lucide-react';

/* =========================================
   1. DICTIONARY (DỮ LIỆU ĐA NGỮ - CẬP NHẬT CHUẨN FILE EXCEL)
========================================= */

const dict = {
  vi: {
    nav: ['Tổng quan', 'Chuyên môn', 'Dấu ấn', 'Kết nối'],
    hero: {
      subtitle: "LUẬT SƯ ĐIỀU HÀNH & CỐ VẤN CẤP CAO",
      quote: `"Global Mind, Silk Touch."`,
      desc: "Pháp luật là không gian kiến tạo lợi thế cho doanh nghiệp",
      scroll: "Khám phá"
    },
    profile: {
      title: "Tổng quan",
      subtitle: "Luật sư Nguyễn Thị Hoa",
      desc1: "Dưới lăng kính của một người trực tiếp gắn bó với nhịp đập kinh doanh, tôi chưa bao giờ coi hành lang pháp lý là những rào cản khô khan hay sợi dây trói buộc sự phát triển. Đi qua nhiều thăng trầm cùng các nhà sáng lập, chứng kiến không ít doanh nghiệp chao đảo chỉ vì một lỗ hổng nhỏ, tôi càng thấm thía giá trị của sự bảo vệ từ sớm.",
      desc2: "Với tôi, khi pháp luật được thấu hiểu tận cùng và vận dụng linh hoạt, chúng không chỉ dừng lại ở ranh giới đúng - sai. Hơn thế nữa, chúng thực sự chuyển mình thành một bệ phóng vững chắc, một tấm khiên bảo vệ kiên cố và là chiếc la bàn dẫn lối cho mọi chiến lược tăng trưởng bền vững của doanh nghiệp."
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
          "Thạc sĩ Chính sách & Luật Thương mại Quốc tế (Đại học Ngoại Thương)",
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
          "Thành viên Đoàn Luật sư TP Hà Nội (Liên đoàn LS Việt Nam)",
          "Chứng chỉ hành nghề Quản tài viên",
          "Chứng chỉ Sở hữu Công nghiệp"
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
        company: "Paxlaw",
        desc: "Thiết kế chiến lược pháp lý cá nhân hoá, cung cấp giải pháp pháp chế thuê ngoài (Paxflow) trọn gói về M&A và đầu tư cho khách hàng đa quốc gia.",
      },
      {
        period: "2022 - Nay",
        role: "Giám đốc Pháp chế",
        company: "Green Investment Joint Stock Company",
        desc: "Quản trị rủi ro, đảm bảo tuân thủ pháp luật, tạo nền tảng quản trị vững chắc cho các dự án đầu tư và liên doanh.",
      },
      {
        period: "2018 - 2024",
        role: "Phó Giám đốc / Luật sư Thành viên",
        company: "Penfield Law Firm",
        desc: "Dẫn dắt các thương vụ M&A phức tạp và thiết lập kế hoạch tái cấu trúc tài chính cho các tập đoàn lớn; điều phối giải quyết tranh chấp đa lĩnh vực.",
      },
      {
        period: "2013 - 2018",
        role: "Chuyên viên Pháp chế Cấp cao",
        company: "Techcombank",
        desc: "Hỗ trợ pháp lý ngoại hối, quản lý vốn và chuẩn hoá quy trình phục vụ hệ thống Khách hàng Doanh nghiệp bán buôn.",
      }
    ],
    practice: {
      title: "Lĩnh vực hành nghề",
      subtitle: "Chuyên môn Luật sư",
      speakerTitle: "Hoạt động & Sự kiện chuyên môn"
    },
    practiceAreas: [
      {
        title: "M&A & Tái cấu trúc doanh nghiệp",
        icon: Building2,
        cases: [
          { text: "Đại diện pháp lý bên mua trong thương vụ thâu tóm nhà máy sản xuất thép (Miền Bắc) quy mô", highlight: "1.000 tỷ VNĐ." },
          { text: "Cố vấn chiến lược M&A chuyển nhượng dự án Bất động sản nghỉ dưỡng Bãi Dài (Khánh Hòa) trị giá", highlight: "1.600 tỷ VNĐ." },
          { text: "Hoạch định & thực thi tái cấu trúc tài chính toàn diện cho Tập đoàn Khoáng sản Thái Nguyên (Tổng vốn", highlight: ">1.000 tỷ VNĐ)." },
          { text: "Thiết kế cấu trúc giao dịch bán cổ phần của doanh nghiệp EPC top đầu Việt Nam cho đối tác Nhật Bản, định giá", highlight: "20 triệu USD." },
        ]
      },
      {
        title: "Tài chính - Ngân hàng",
        icon: Landmark,
        cases: [
          { text: "Bảo trợ pháp lý đợt phát hành trái phiếu doanh nghiệp riêng lẻ cho dự án tại Bà Rịa - Vũng Tàu, quy mô", highlight: "800 tỷ VNĐ." },
          { text: "Trực tiếp quản trị rủi ro & xử lý khủng hoảng cho 07 gói trái phiếu doanh nghiệp, giá trị", highlight: "500 - 850 tỷ VNĐ/gói." },
          { text: "Thiết kế cấu trúc pháp lý cho các khoản vay và nghĩa vụ trả nợ nước ngoài", highlight: "(3.5 triệu USD)", suffix: " của Tập đoàn Tài chính Hà Lan." },
        ]
      },
      {
        title: "Đầu tư xuyên biên giới & Bất động sản",
        icon: Globe2,
        cases: [
          { text: "Bảo trợ pháp lý toàn diện dự án tổ hợp nghỉ dưỡng quy mô", highlight: "1000+ Condotel 5 sao", suffix: " tại Nha Trang." },
          { text: "Thiết kế cấu trúc pháp lý & Thẩm định dự án Khu đô thị quy mô", highlight: "37.4ha", suffix: " tại Bà Rịa - Vũng Tàu." },
          { text: "Nghiên cứu & Cố vấn chuyên sâu Báo cáo chính sách PPP tại Việt Nam, đối tác chiến lược: Bộ KH&ĐT Hàn Quốc.", highlight: "" },
          { text: "Thiết lập cấu trúc đầu tư & Pháp nhân, cố vấn vận hành chiến lược cho các tập đoàn FDI từ Mỹ, Nhật Bản, Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Hợp đồng thương mại & Tranh chấp",
        icon: ShieldCheck,
        cases: [
          { text: "Kiến tạo & Chuẩn hóa hệ thống hợp đồng thương mại cho mạng lưới cung ứng dịch vụ trên các sàn E-commerce top đầu (Shopee, Lazada, Tiki).", highlight: "" },
          { text: "Đại diện pháp lý giải quyết tranh chấp, bảo vệ thành công quyền lợi Tập đoàn Xây dựng VN trong dự án EPC (Quy mô", highlight: "250 tỷ VNĐ)." },
          { text: "Luật sư đại diện bảo vệ quyền lợi Chủ đầu tư trong tranh chấp thầu xây dựng tại Khánh Hòa (Quy mô", highlight: "350 tỷ VNĐ)." },
        ]
      }
    ],
    community: {
      title: "Dấu ấn cộng đồng",
      subtitle: "Hoạt động & Sự kiện tiêu biểu",
      jciQuote: "HÀNH TRÌNH KIẾN TẠO GIÁ TRỊ CÙNG JCI",
      jciDesc: "(Junior Chamber International)",
      leadershipTitle: "Lộ trình lãnh đạo",
      activityTitle: "Sự kiện & Hoạt động tiêu biểu"
    },
    speakerEvents: [
      { year: "2024", title: "Diễn giả Workshop \"Pháp lý thông minh\"", desc: "Khách mời chuyên gia tại Trung tâm Khởi nghiệp CSK (Đại học Quốc gia). Trực tiếp cố vấn chuyên sâu về nhận diện rủi ro, cấu trúc quan hệ cổ đông và hoạch định giải pháp pháp lý an toàn cho các startup.", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
      { year: "2023 - 2025", title: "Diễn giả Dự án \"Shape Your Future\"", desc: "Đồng hành chiến lược cùng chuỗi dự án hướng nghiệp. Trực tiếp truyền cảm hứng, chia sẻ kinh nghiệm thực chiến và định hướng lộ trình phát triển nghề luật cho thế hệ sinh viên.", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
      { year: "2024", title: "Cố vấn Pháp lý & Giám khảo SIL", desc: "Đồng hành cùng Đại học Đại Nam trong vai trò Hội đồng chuyên môn. Trực tiếp đánh giá, định hướng chiến lược và xây dựng nền tảng pháp lý vững chắc cho các dự án đổi mới sáng tạo xã hội.", img: "https://i.postimg.cc/15g13P4d/SIL.jpg" },
      { year: "2024", title: "Đại biểu Trade Expo, Mumbai", desc: "Phối hợp cùng Tổng Lãnh sự quán Việt Nam tại Ấn Độ. Đại diện phái đoàn doanh nghiệp trong nước xúc tiến quan hệ đối tác, mở rộng giao thương và dịch vụ xuyên biên giới.", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" }
    ],
    jciLeadership: [
      { year: "2024", title: "Bứt phá & Ghi dấu: Giám đốc Sáng lập Dự án \"Launch To Leaders\"", desc: "Đóng vai trò kiến trúc sư trưởng, trực tiếp thiết kế và vận hành dự án trọng điểm của JCI Thanglong. Dẫn dắt dự án vinh dự xác lập kỷ lục với giải thưởng danh giá \"The Most Social Impact JCI Vietnam 2024\" - minh chứng cho tầm ảnh hưởng xã hội sâu rộng.", icon: Rocket, img: "https://i.postimg.cc/NFTSMtRk/launch-to-leader.jpg" },
      { year: "2025", title: "Tiên phong Kiến tạo: Chủ tịch Sáng lập JCI Grace", desc: "Đặt viên gạch nền móng và dẫn dắt JCI Grace từ giai đoạn sơ khởi trở thành một mảnh ghép vững chắc trong hệ sinh thái 15 chi hội chính thức của JCI Vietnam. Định vị một cộng đồng lãnh đạo trẻ chuẩn mực, lấy phát triển bền vững và phụng sự cộng đồng làm kim chỉ nam chiến lược.", icon: Crown, img: "https://i.postimg.cc/Qdn98ZSD/Chu-ti-ch-JCI-Grace.jpg" },
      { year: "2026", title: "Tầm vóc Quốc gia: Phó Chủ tịch JCI Vietnam", desc: "Đảm nhận trọng trách lãnh đạo cấp cao tại mạng lưới hơn 500 hội viên trên toàn quốc (tổ chức hoạt động dưới sự bảo trợ của Hội Doanh nhân trẻ TP.HCM - YBA). Trực tiếp điều hành Trụ cột Phát triển Kinh doanh & Khởi nghiệp, vận dụng tư duy pháp lý sắc bén để thiết lập hành lang an toàn, cố vấn chiến lược và dẫn dắt các dự án đổi mới sáng tạo.", icon: Network, img: "https://i.postimg.cc/Zqr7kHFk/Pho-chu-ti-ch-JCI.jpg", imgClass: "w-full h-[300px] md:h-[400px] object-cover object-bottom" },
      { year: "Tầm nhìn Tương lai", title: "Hội nhập Toàn cầu: Đồng Sáng lập JCI Lawyer Council", desc: "Khởi xướng và xây dựng mạng lưới chuyên gia pháp lý vươn tầm quốc tế, kết nối sâu rộng với Junior Chamber International (JCI) – mạng lưới lãnh đạo trẻ toàn cầu lớn nhất thế giới. Kiến tạo nền tảng đối thoại cấp cao, hợp tác chiến lược và chia sẻ tri thức xuyên biên giới đặc quyền dành cho giới luật sư.", icon: Scale, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop" },
    ],
    jciActivities: {
      local: {
        title: "Cấp Chi Hội",
        icon: MapPin,
        items: [
          { name: "Sự kiện Đào tạo Pháp lý \"Nghĩ Vững Bước Bền\"", desc: "Kết hợp cùng Đại học Quốc Gia Hà Nội." },
          { name: "Sự kiện \"Rẽ Sóng Đón Bình Minh\"", desc: "Chương trình kết nối kinh doanh quy mô 200 doanh nhân." },
          { name: "Sự kiện \"Dòng Chảy Thành Công\"", desc: "Thăm và kết nối thực tế tại Công ty nước mặt sông Đuống." },
          { name: "Giao thương Quốc tế (JCI Grace)", desc: "Giao lưu giữa Hiệp hội doanh nghiệp Tô Châu (Trung Quốc) và khu vực Đông Nam Á (100 thương nhân)." },
          { name: "Trách nhiệm Xã hội \"Chung lòng mùa bão 2024\"", desc: "(Liên quân JCI Miền Bắc): Tham gia chiến dịch hỗ trợ đồng bào vùng lũ." },
          { name: "Giải Pickleball Miền Bắc mở rộng", desc: "Đóng vai trò Đồng tổ chức (Co-host đại diện JCI Thăng Long & JCI Grace) cùng JCI Hải Phòng (Host) và JCI Hà Nội." }
        ]
      },
      national: {
        title: "Cấp Quốc Gia",
        icon: Flag,
        items: [
          { name: "Đại hội Quốc gia (NATCON)", desc: "Tham dự các kỳ Đại hội cấp cao. Chính thức đắc cử Phó Chủ tịch JCI Vietnam 2026 tại NATCON 2025 (Đà Lạt)." },
          { name: "Diễn đàn \"Let's meet up Việt Nam\" (2025)", desc: "Đại diện Ban tổ chức, trực tiếp điều hành và xúc tiến quan hệ hợp tác. Xây dựng cầu nối giao thương trực tiếp giữa doanh nghiệp ASEAN với mạng lưới cố vấn chiến lược cấp cao." },
          { name: "Sự kiện Rise To Shine 2025", desc: "Đánh dấu 8 tháng đồng hành cùng 29 dự án cộng đồng qua chuỗi mentoring chuyên sâu. Sự kiện vinh danh Top 5 dự án xuất sắc đã lan tỏa sâu rộng thông điệp JCI RISE về khát vọng phụng sự của lãnh đạo trẻ." },
          { name: "Đại hội Giữa năm (NYC)", desc: "Tham dự Đại hội Giữa năm (National Mid-Year Convention) năm 2024." },
          { name: "Học thuật & Đào tạo", desc: "Tốt nghiệp JCI Vietnam Academy (2024, 2025)." },
          { name: "Nâng tầm Kỹ năng", desc: "Đạt chứng nhận Trainer 2 sao tại chương trình Train The Trainer 2025." }
        ]
      },
      international: {
        title: "Cấp Quốc Tế",
        icon: Globe,
        items: [
          { name: "JCI World Congress 2024 (Đài Loan)", desc: "Điểm chạm của mạng lưới lãnh đạo trẻ toàn cầu, nơi trực tiếp tiếp cận những khóa đào tạo chất lượng cao và kết nối giao thương với hơn 4.000 hội viên tinh hoa từ 100 quốc gia." },
          { name: "JCI ASPAC 2024 & 2025 (Mông Cổ)", desc: "Không gian giao cảm văn hóa và chiến lược khu vực, mở ra các cơ hội ký kết hợp tác quốc tế (MOU) và khẳng định vị thế tiên phong của lãnh đạo trẻ Việt Nam trên bản đồ doanh nhân Á Châu." },
          { name: "Giao lưu Quốc tế JCI Marine Lines India & JCI Thanglong", desc: "Nhịp cầu kết nối song phương đặc quyền, thúc đẩy tinh thần học hỏi đa văn hóa và kiến tạo những cơ hội hợp tác kinh tế - xã hội bền vững giữa hai cộng đồng doanh nhân trẻ Việt Nam và Ấn Độ." },
          { name: "Ban điều hành JCI ASEAN Senator (2025 - 2026)", desc: "Đại biểu chính thức đoàn Việt Nam tham gia chuỗi nghị sự tại Tô Châu (Trung Quốc) và Sabah (Malaysia), đóng góp chiến lược vào các quyết sách mạng lưới lãnh đạo khu vực." }
        ]
      }
    },
    contact: {
      title: "Đồng hành xây dựng nền tảng pháp lý vững chắc cho doanh nghiệp của bạn.",
      subtitle: "Kết nối chuyên gia",
      scanToConnect: "Quét để kết nối",
      address: "Tầng 5, số 31A Nguyễn Quốc Trị, Trung Hoà, Yên Hoà, Hà Nội"
    }
  },
  en: {
    nav: ['Overview', 'Expertise', 'Impact', 'Connect'],
    hero: {
      subtitle: "MANAGING ATTORNEY & SENIOR COUNSEL",
      quote: `"Global Mind, Silk Touch."`,
      desc: "Law is the space to create competitive advantages for businesses.",
      scroll: "Explore"
    },
    profile: {
      title: "Professional Summary",
      subtitle: "Expert Profile",
      desc1: "Through the lens of someone deeply engaged with the heartbeat of business, I have never viewed the legal framework as a dry barrier or a restrictive cord to development. Having navigated numerous ups and downs alongside founders and witnessing businesses falter over minor loopholes, I deeply appreciate the value of early protection.",
      desc2: "For me, when the law is thoroughly understood and flexibly applied, it goes beyond the boundaries of right and wrong. Furthermore, it truly transforms into a solid launchpad, a steadfast protective shield, and a guiding compass for every sustainable growth strategy of a business."
    },
    stats: [
      { value: "15+", label: "Years of Experience" },
      { value: "50+", label: "Partner Countries" }
    ],
    highlights: [
      {
        title: "Education & Training",
        icon: GraduationCap,
        items: [
          "Master of International Policy and Commercial Law (Foreign Trade University)",
          "Bachelor of Commercial Law (Hanoi Law University)",
          "Lawyer Professional Training Course – Judicial Academy"
        ]
      },
      {
        title: "Teaching & Coaching",
        icon: BookOpen,
        items: [
          "Visiting Lecturer of Banking Law – Thanh Dong University",
          "Internal Trainer for FX Management at Techcombank"
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
        role: "Founder & Managing Attorney",
        company: "Paxlaw",
        desc: "Designing personalized legal strategies, providing comprehensive outsourced legal solutions (PaxFlow) in M&A and investment for multinational clients.",
      },
      {
        period: "2022 - Present",
        role: "Head of Legal",
        company: "Green Investment Joint Stock Company",
        desc: "Managing risks, ensuring legal compliance, and establishing a solid governance foundation for investment projects and joint ventures.",
      },
      {
        period: "2018 - 2024",
        role: "Deputy Director / Partner",
        company: "Penfield Law Firm",
        desc: "Led complex M&A transactions and established financial restructuring plans for large conglomerates; coordinated multi-sector dispute resolution.",
      },
      {
        period: "2013 - 2018",
        role: "Senior Legal Counsel",
        company: "Techcombank",
        desc: "Provided legal support for foreign exchange, capital management, and standardized service procedures for the wholesale corporate banking system.",
      }
    ],
    practice: {
      title: "Core Competencies",
      subtitle: "Practice Areas",
      speakerTitle: "Professional Events & Activities"
    },
    practiceAreas: [
      {
        title: "M&A & Corporate Restructuring",
        icon: Building2,
        cases: [
          { text: "Acted as legal counsel for the buyer in the acquisition of a steel manufacturing plant (Northern Vietnam) valued at", highlight: "VND 1,000 billion." },
          { text: "Strategic M&A advisor for the transfer of Bai Dai Resort Real Estate project (Khanh Hoa) valued at", highlight: "VND 1,600 billion." },
          { text: "Planned and executed comprehensive financial restructuring for Thai Nguyen Mineral Group (Total capital", highlight: ">VND 1,000 billion)." },
          { text: "Structured the share sale transaction of a top-tier Vietnamese EPC enterprise to a Japanese partner, valued at", highlight: "USD 20 million." },
        ]
      },
      {
        title: "Banking & Finance",
        icon: Landmark,
        cases: [
          { text: "Provided legal backing for a private corporate bond issuance for a project in Ba Ria - Vung Tau, sized at", highlight: "VND 800 billion." },
          { text: "Directly managed risks & handled crises for 07 corporate bond packages, valued at", highlight: "VND 500 - 850 billion/package." },
          { text: "Designed legal structures for foreign loans and debt repayment obligations", highlight: "(USD 3.5 million)", suffix: " of a Dutch Financial Group." },
        ]
      },
      {
        title: "Cross-Border Investment & Real Estate",
        icon: Globe2,
        cases: [
          { text: "Comprehensive legal backing for a resort complex project with", highlight: "1000+ 5-star Condotels", suffix: " in Nha Trang." },
          { text: "Legal structuring & appraisal for a 37.4ha Urban Area project in Ba Ria - Vung Tau.", highlight: "" },
          { text: "In-depth research & advisory on the Vietnam PPP Policy Report, strategic partner: Ministry of Economy and Finance of South Korea.", highlight: "" },
          { text: "Established investment structures & legal entities, advised on operational strategies for FDI corporations from the US, Japan, Hong Kong.", highlight: "" },
        ]
      },
      {
        title: "Commercial Contracts & Dispute Resolution",
        icon: ShieldCheck,
        cases: [
          { text: "Created & standardized the commercial contract system for the service supply network on top E-commerce platforms (Shopee, Lazada, Tiki).", highlight: "" },
          { text: "Acted as legal representative in dispute resolution, successfully protecting the rights of a Vietnam Construction Group in an EPC project (Valued at", highlight: "VND 250 billion)." },
          { text: "Representing Attorney protecting the Project Owner's rights in a construction bidding dispute in Khanh Hoa (Valued at", highlight: "VND 350 billion)." },
        ]
      }
    ],
    community: {
      title: "Community Associations",
      subtitle: "Highlight Events & Activities",
      jciQuote: "VALUE CREATION JOURNEY WITH JCI",
      jciDesc: "(Junior Chamber International)",
      leadershipTitle: "Leadership Roadmap",
      activityTitle: "Highlight Events & Activities"
    },
    speakerEvents: [
      { year: "2024", title: "Speaker at Smart Legal Workshop", desc: "Expert Guest at CSK Startup Center (National University). Provided in-depth advisory on risk identification, shareholder structures, and safe legal solutions for startups.", img: "https://i.postimg.cc/y6P0M5MP/pha-p-ly-tho-ng-minh.jpg" },
      { year: "2023 - 2025", title: "Speaker for \"Shape Your Future\" Project", desc: "Strategic companion for a series of career orientation projects. Inspired, shared practical experiences, and guided the legal career path for students.", img: "https://i.postimg.cc/XYD8ThCZ/Hu-o-ng-nghie-p.jpg" },
      { year: "2024", title: "Legal Advisor & Judge for SIL Competition", desc: "Accompanied Dai Nam University as a Professional Council member. Directly evaluated, provided strategic direction, and built a solid legal foundation for social innovation projects.", img: "https://i.postimg.cc/15g13P4d/SIL.jpg" },
      { year: "2024", title: "Delegate at Trade Expo, Mumbai", desc: "Coordinated with the Consulate General of Vietnam in India. Represented the domestic business delegation to promote partnerships, expand trade, and cross-border services.", img: "https://i.postimg.cc/bvs6r8hh/la-nh-su-qua.jpg" }
    ],
    jciLeadership: [
      { year: "2024", title: "Breakthrough & Milestone: Founding Director of \"Launch To Leaders\"", desc: "Acting as the chief architect, directly designing and operating the key project of JCI Thanglong. Led the project to honorably set a record with the prestigious award \"The Most Social Impact JCI Vietnam 2024\" - a testament to its profound social influence.", icon: Rocket, img: "https://i.postimg.cc/NFTSMtRk/launch-to-leader.jpg" },
      { year: "2025", title: "Pioneering Creation: Founding President of JCI Grace", desc: "Laid the foundation and led JCI Grace from its infancy to become a solid piece in the ecosystem of 15 official chapters of JCI Vietnam. Positioned a standard young leadership community, taking sustainable development and community service as strategic guidelines.", icon: Crown, img: "https://i.postimg.cc/Qdn98ZSD/Chu-ti-ch-JCI-Grace.jpg" },
      { year: "2026", title: "National Stature: Vice President of JCI Vietnam", desc: "Assumed senior leadership responsibilities in a network of over 500 members nationwide (operating under the sponsorship of the Young Business Association of HCMC - YBA). Directly managed the Business Development & Entrepreneurship Pillar, applying sharp legal thinking to establish safe corridors, advise on strategy, and lead innovation projects.", icon: Network, img: "https://i.postimg.cc/Zqr7kHFk/Pho-chu-ti-ch-JCI.jpg", imgClass: "w-full h-[300px] md:h-[400px] object-cover object-bottom" },
      { year: "Future Vision", title: "Global Integration: Co-Founder of JCI Lawyer Council", desc: "Initiated and built an international network of legal experts, deeply connected with Junior Chamber International (JCI) - the world's largest global young leadership network. Created a platform for high-level dialogue, strategic cooperation, and cross-border knowledge sharing exclusively for lawyers.", icon: Scale, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop" },
    ],
    jciActivities: {
      local: {
        title: "Local Level",
        icon: MapPin,
        items: [
          { name: "Legal Training Event \"Think Solid, Step Steady\"", desc: "Co-organized with Vietnam National University, Hanoi." },
          { name: "Event \"Turning the Waves, Welcoming the Dawn\"", desc: "A business networking program involving 200 entrepreneurs." },
          { name: "Event \"Flow of Success\"", desc: "Field visit and practical networking at Duong River Surface Water Plant." },
          { name: "International Trade (JCI Grace)", desc: "Exchange between Suzhou Business Association (China) and Southeast Asia (100 merchants)." },
          { name: "Social Responsibility \"Uniting through the 2024 Storm Season\"", desc: "(Northern JCI Alliance): Participated in the campaign to support flood victims." },
          { name: "Northern Open Pickleball Tournament", desc: "Co-host (representing JCI Thang Long & JCI Grace) alongside JCI Hai Phong (Host) and JCI Hanoi." }
        ]
      },
      national: {
        title: "National Level",
        icon: Flag,
        items: [
          { name: "National Convention (NATCON)", desc: "Attended high-level congresses. Officially elected as Vice President of JCI Vietnam 2026 at NATCON 2025 (Da Lat)." },
          { name: "Forum \"Let's meet up Vietnam\" (2025)", desc: "Organizing Committee Representative, directing and promoting partnerships. Built a direct trade bridge between ASEAN businesses and a high-level strategic advisor network." },
          { name: "Event \"Rise To Shine 2025\"", desc: "Marked 8 months of accompanying 29 community projects through an intensive mentoring series. The event honoring the Top 5 outstanding projects widely spread the JCI RISE message about the service aspiration of young leaders." },
          { name: "National Mid-Year Convention (NYC)", desc: "Attended the Mid-Year Convention in 2024." },
          { name: "Academic & Training", desc: "Graduated from JCI Vietnam Academy (2024, 2025)." },
          { name: "Skill Elevation", desc: "Achieved 2-Star Trainer certification at the Train The Trainer 2025 program." }
        ]
      },
      international: {
        title: "International Level",
        icon: Globe,
        items: [
          { name: "JCI World Congress 2024 (Taiwan)", desc: "A touchpoint of the global young leaders network, offering direct access to high-quality training and trade connections with over 4,000 elite members from 100 countries." },
          { name: "JCI ASPAC 2024 & 2025 (Mongolia)", desc: "A space for cultural exchange and regional strategy, opening up opportunities for international cooperation agreements (MOU) and affirming the pioneering position of young Vietnamese leaders on the Asian business map." },
          { name: "International Exchange JCI Marine Lines India & JCI Thanglong", desc: "An exclusive bilateral bridge, promoting a cross-cultural learning spirit and creating sustainable socio-economic cooperation opportunities between the young entrepreneur communities of Vietnam and India." },
          { name: "JCI ASEAN Senate Board (2025 - 2026)", desc: "Official delegate of the Vietnam team participating in the meeting series in Suzhou (China) and Sabah (Malaysia), contributing strategically to regional leadership network policies." }
        ]
      }
    },
    contact: {
      title: "Đồng hành xây dựng nền tảng pháp lý vững chắc cho doanh nghiệp của bạn.",
      subtitle: "Kết nối chuyên gia",
      scanToConnect: "Quét để kết nối",
      address: "Tầng 5, số 31A Nguyễn Quốc Trị, Trung Hoà, Yên Hoà, Hà Nội"
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
      <img src={event.img} alt={event.title} className="w-full h-full object-cover rounded group-hover:scale-[1.03] transition-transform duration-700" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-[#1d6266] text-[10px] font-bold uppercase tracking-widest mb-2 block">{event.year}</span>
      <h4 className="text-base font-bold tracking-wide text-slate-900 mb-2 leading-snug">
        {event.title}
      </h4>
      <p className="text-slate-600 font-light leading-relaxed text-[13px] line-clamp-none">
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
  const [activeActivityTab, setActiveActivityTab] = useState('local');
  
  // STATE NGÔN NGỮ
  const [lang, setLang] = useState('vi');
  const t = dict[lang]; 

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

  const activityTabs = [
    { id: 'local', data: t.jciActivities.local },
    { id: 'national', data: t.jciActivities.national },
    { id: 'international', data: t.jciActivities.international }
  ];

  return (
    <div 
      className="min-h-screen bg-white text-slate-800 selection:bg-[#1d6266] selection:text-white"
      style={{ fontFamily: '"AvertaStdCY", "Averta", Arial, sans-serif' }}
    >
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
            
            <div className="hidden md:flex space-x-12 items-center">
              {t.nav.slice(0, 3).map((item, index) => {
                const ids = ['ho-so', 'chuyen-mon', 'cong-dong'];
                return (
                  <button 
                    key={item}
                    onClick={() => scrollTo(ids[index])}
                    className={`relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 py-1 ${isScrolled ? 'text-slate-700 hover:text-[#1d6266]' : 'text-white/80 hover:text-white'} after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#2eb793] after:transition-all after:duration-300`}
                  >
                    {item}
                  </button>
                )
              })}

              <div className="flex items-center space-x-6 ml-4">
                <button 
                  onClick={toggleLanguage}
                  className={`flex items-center text-[12px] font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
                  title="Change Language"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  <span className={`transition-colors ${lang === 'vi' ? (isScrolled ? 'text-[#1d6266]' : 'text-[#2eb793]') : 'opacity-50 hover:opacity-100'}`}>VI</span>
                  <span className="opacity-30 mx-1">/</span>
                  <span className={`transition-colors ${lang === 'en' ? (isScrolled ? 'text-[#1d6266]' : 'text-[#2eb793]') : 'opacity-50 hover:opacity-100'}`}>EN</span>
                </button>

                <button 
                  onClick={() => scrollTo('lien-he')}
                  className={`relative text-[12px] font-bold uppercase tracking-[0.15em] px-7 py-3 border transition-all duration-500 overflow-hidden group ${isScrolled ? 'border-[#1d6266] text-[#1d6266]' : 'border-white/80 text-white hover:border-white'}`}
                >
                  <span className={`relative z-10 transition-colors duration-500 ${isScrolled ? 'group-hover:text-white' : 'group-hover:text-[#1d6266]'}`}>{t.nav[3]}</span>
                  <div className={`absolute inset-0 h-full w-0 transition-all duration-500 ease-out group-hover:w-full z-0 ${isScrolled ? 'bg-[#1d6266]' : 'bg-white'}`}></div>
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center text-xs font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                <Globe className="w-4 h-4 mr-1.5" />
                <span className={lang === 'vi' ? (isScrolled ? 'text-[#1d6266]' : 'text-[#2eb793]') : 'opacity-50'}>VI</span>
                <span className="opacity-30 mx-1">/</span>
                <span className={lang === 'en' ? (isScrolled ? 'text-[#1d6266]' : 'text-[#2eb793]') : 'opacity-50'}>EN</span>
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
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 text-center z-10 pt-24 overflow-hidden">
        
        <div 
          className="absolute inset-0 z-0 bg-cover bg-left-bottom bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.postimg.cc/59Y8BZzR/Paxlaw-template.png')" 
          }}
        ></div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0d3a3c]/80 via-[#0d3a3c]/80 to-[#0d3a3c]"></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#2eb793]"></div>
            <span className="text-[#2eb793] font-bold tracking-[0.25em] uppercase text-[10px] md:text-sm whitespace-nowrap">
              {t.hero.subtitle}
            </span>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#2eb793]"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-md">
            {lang === 'vi' ? 'Nguyễn Thị Hoa' : 'Hoa Nguyen'}
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light italic mb-10 tracking-wide drop-shadow-md">
            {t.hero.quote}
          </p>
          
          <div className="backdrop-blur-md bg-[#0d3a3c]/60 border border-[#2eb793]/30 px-6 md:px-10 py-3.5 md:py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <p 
              className="text-[15px] md:text-[19px] text-white font-medium tracking-wide leading-relaxed max-w-4xl mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: t.hero.desc }}
            />
          </div>

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
            
            {/* CỘT TRÁI */}
            <div className="flex flex-col">
              <SectionHeading title={t.profile.title} subtitle={t.profile.subtitle} align="left" />
              
              <div className="relative mb-12 p-1.5 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden">
                <img 
                  src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png" 
                  alt="Luật sư Hoa Nguyễn" 
                  className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex flex-col space-y-4 mb-10 text-[14px] text-slate-500 font-light leading-relaxed text-justify">
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

              {/* HỌC VẤN */}
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

            {/* CỘT PHẢI */}
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
      <section id="chuyen-mon" className="relative py-24 md:py-32 bg-[#0d3a3c] overflow-hidden">
        
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{ 
            backgroundImage: "url('https://i.postimg.cc/59Y8BZzR/Paxlaw-template.png')" 
          }}
        ></div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0d3a3c]/80 via-[#0d3a3c]/80 to-[#0d3a3c]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeading title={t.practice.title} subtitle={t.practice.subtitle} light={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.practiceAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="bg-[#134a4c]/80 backdrop-blur-md border border-[#2eb793]/10 rounded-xl p-8 md:p-10 lg:p-12 hover:border-[#2eb793]/40 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#1a5b5e]/80 flex items-center justify-center mb-8 border border-white/5">
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

          {/* NHÓM: DIỄN GIẢ & CỐ VẤN CHUYÊN MÔN */}
          <div className="mt-24">
            <div className="flex items-center justify-between border-b border-[#2eb793]/20 pb-4 mb-8">
              <h3 className="text-xl font-bold text-white">{t.practice.speakerTitle}</h3>
              <Mic className="w-5 h-5 text-[#2eb793]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.speakerEvents.map((event, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col group border border-white/10 overflow-hidden h-full">
                  <div className="aspect-square relative overflow-hidden bg-black/20 p-2 border-b border-white/10">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover rounded group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[#2eb793] text-[10px] font-bold uppercase tracking-widest mb-2 block">{event.year}</span>
                    <h4 className="text-base font-bold tracking-wide text-white mb-2 leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-white/70 font-light leading-relaxed text-[13px] line-clamp-none">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: CỘNG ĐỒNG & SỰ KIỆN */}
      <section id="cong-dong" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeading title={t.community.title} subtitle={t.community.subtitle} />

          {/* NHÓM 1: JCI LỘ TRÌNH LÃNH ĐẠO (ZIC-ZAC TIMELINE) */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 bg-[#1d6266]/10 rounded-full mb-4">
                <span className="text-sm font-bold text-[#1d6266] uppercase tracking-widest">{t.community.jciQuote}</span>
              </div>
              <p className="text-slate-500 font-light">{t.community.jciDesc}</p>
            </div>

            <div className="flex items-center justify-center md:justify-between border-b border-slate-100 pb-4 mb-20">
              <h3 className="text-2xl font-bold text-slate-900 text-center md:text-left w-full md:w-auto">{t.community.leadershipTitle}</h3>
              <Award className="w-6 h-6 text-[#1d6266] hidden md:block" />
            </div>
            
            {/* TIMELINE TRỤC GIỮA (NEW ZIC-ZAC LAYOUT) */}
            <div className="relative max-w-6xl mx-auto px-4 md:px-0">
              {/* Trục giữa (Chỉ hiện trên Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2eb793]/10 via-[#2eb793]/40 to-[#2eb793]/10 transform -translate-x-1/2"></div>

              {/* Trục trái (Chỉ hiện trên Mobile) */}
              <div className="md:hidden absolute left-[31px] top-4 bottom-4 w-[2px] bg-[#2eb793]/30"></div>

              {t.jciLeadership.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32 group">

                    {/* --- ICON TRUNG TÂM --- */}
                    {/* Desktop Icon */}
                    <div className="hidden md:flex absolute left-1/2 w-16 h-16 rounded-full bg-white border-[3px] border-[#1d6266] items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(29,98,102,0.15)] group-hover:bg-[#1d6266] group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-7 h-7 text-[#2eb793] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden absolute left-[15px] top-0 w-9 h-9 rounded-full bg-white border-2 border-[#1d6266] flex items-center justify-center z-10 shadow-md">
                      <item.icon className="w-4 h-4 text-[#2eb793]" />
                    </div>

                    {/* --- NỘI DUNG MOBILE --- */}
                    <div className="md:hidden w-full pl-16 pt-0">
                       <span className="inline-block px-3 py-1 bg-[#1d6266] text-white text-[11px] font-bold uppercase tracking-widest rounded mb-3">
                          {item.year}
                       </span>
                       <h4 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{item.title}</h4>
                       <p className="text-[14.5px] font-light text-slate-600 leading-relaxed mb-6">
                          {item.desc}
                       </p>
                       {item.img && (
                         <div className="w-full rounded-2xl overflow-hidden shadow-lg border-[4px] border-white bg-slate-50">
                            <img src={item.img} alt={item.title} className={item.imgClass || "w-full h-auto object-contain"} />
                         </div>
                       )}
                    </div>

                    {/* --- NỘI DUNG DESKTOP (ZIC ZAC) --- */}
                    {/* CỘT TRÁI */}
                    <div className={`hidden md:flex w-[45%] ${isEven ? 'justify-end text-right' : 'justify-start'}`}>
                      {isEven ? (
                        // Lẻ (Even index) -> Chữ bên trái
                        <div className="w-full xl:w-5/6 pr-8">
                           <span className="inline-block px-4 py-1.5 bg-[#1d6266] text-white text-[12px] font-bold uppercase tracking-widest rounded-full mb-6 shadow-md">
                             {item.year}
                           </span>
                           <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5 leading-tight">{item.title}</h4>
                           <p className="text-[16px] font-light text-slate-600 leading-relaxed">
                             {item.desc}
                           </p>
                        </div>
                      ) : (
                        // Chẵn (Odd index) -> Ảnh bên trái
                        item.img && (
                          <div className="w-full xl:w-5/6 rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border-[8px] border-white group-hover:border-[#2eb793]/20 transition-all duration-500 transform group-hover:-translate-y-2 bg-slate-50 flex">
                            <img src={item.img} alt={item.title} className={item.imgClass || "w-full h-auto object-contain"} />
                          </div>
                        )
                      )}
                    </div>

                    {/* CỘT PHẢI */}
                    <div className={`hidden md:flex w-[45%] ${isEven ? 'justify-start' : 'justify-start text-left'}`}>
                      {isEven ? (
                        // Lẻ (Even index) -> Ảnh bên phải
                        item.img && (
                          <div className="w-full xl:w-5/6 rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border-[8px] border-white group-hover:border-[#2eb793]/20 transition-all duration-500 transform group-hover:-translate-y-2 bg-slate-50 flex">
                            <img src={item.img} alt={item.title} className={item.imgClass || "w-full h-auto object-contain"} />
                          </div>
                        )
                      ) : (
                        // Chẵn (Odd index) -> Chữ bên phải
                        <div className="w-full xl:w-5/6 pl-8">
                           <span className="inline-block px-4 py-1.5 bg-[#1d6266] text-white text-[12px] font-bold uppercase tracking-widest rounded-full mb-6 shadow-md">
                             {item.year}
                           </span>
                           <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5 leading-tight">{item.title}</h4>
                           <p className="text-[16px] font-light text-slate-600 leading-relaxed">
                             {item.desc}
                           </p>
                        </div>
                      )}
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* NHÓM 2: JCI HOẠT ĐỘNG TIÊU BIỂU (TABBED INTERFACE MỚI) */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-10">
              <h3 className="text-xl font-bold text-slate-900">{t.community.activityTitle}</h3>
              <Sparkles className="w-5 h-5 text-slate-300" />
            </div>
            
            {/* Thanh điều hướng Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {activityTabs.map((tab) => {
                const isActive = activeActivityTab === tab.id;
                const Icon = tab.data.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveActivityTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1d6266] text-white shadow-md transform scale-105' 
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-[#2eb793]' : 'text-slate-400'}`} />
                    {tab.data.title}
                  </button>
                )
              })}
            </div>

            {/* Nội dung Tab */}
            <div className="bg-slate-50/50 rounded-3xl p-6 md:p-10 border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activityTabs.find(t => t.id === activeActivityTab)?.data.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col relative overflow-hidden group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-[#2eb793] transition-colors duration-300"></div>
                    <h5 className="text-[15px] font-bold text-slate-900 mb-3 leading-snug">{item.name}</h5>
                    <p className="text-[14px] font-light leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: LIÊN HỆ */}
      <section id="lien-he" className="relative py-24 md:py-32 bg-[#1d6266] overflow-hidden">
        
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          <div className="flex items-center justify-center md:justify-start md:pl-16 lg:pl-28">
            <img 
              src="https://i.postimg.cc/yYtjqxNv/PAXLAW-logo-file-goc-02-removebg-preview.png" 
              alt="Paxlaw Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain" 
              onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} 
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/80 text-[11px] font-bold tracking-widest uppercase mb-2"> 
              &copy; {new Date().getFullYear()} PAXLAW. "Global Mind, Silk Touch." {lang === 'vi' ? 'Mọi bản quyền được bảo lưu.' : 'All rights reserved.'} 
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
