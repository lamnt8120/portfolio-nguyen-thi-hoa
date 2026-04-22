<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông Báo Lịch Nghỉ Lễ - Paxlaw Luxury Dark</title>
    <!-- Import Fonts: Inter (Sans-serif) & Playfair Display (Serif) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400;1,600&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkteal: '#1d6266', // Xanh ngọc đậm thương hiệu (Nền)
                        mint: '#2eb793',     // Xanh mint sáng (Highlight)
                        white: '#FFFFFF',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    }
                }
            }
        }
    </script>
    <style>
        /* Nền tổng thể: Dark Teal nguyên bản */
        body {
            background-color: #1d6266;
        }

        /* Hiệu ứng Light Beam chiếu từ trên xuống */
        .light-beam {
            background: radial-gradient(ellipse at top center, rgba(46, 183, 147, 0.4) 0%, rgba(29, 98, 102, 0) 60%);
        }

        /* Outer Glow cho Tiêu đề sắc nét */
        .text-glow {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4);
        }

        /* Glassmorphism Card Lịch */
        .glass-card {
            /* Tăng độ đậm của nền lên 0.85 để khi tải về (mất blur) vẫn giữ được màu nền đẹp */
            background-color: rgba(29, 98, 102, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid #2eb793;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(46, 183, 147, 0.15);
        }

        /* CẤU TRÚC CHUẨN CỦA Ô LỊCH (.date-box) THEO LỆNH YÊU CẦU */
        .date-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Đẩy chữ và số ra xa nhau */
            align-items: center;
            padding: 8px 4px;
            aspect-ratio: 4/5; /* Giữ form ô chữ nhật đứng mềm mại */
            border-radius: 14px;
            box-shadow: none; /* XÓA BỎ mọi hiệu ứng hộp lồng hộp/inset shadow */
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .date-box:hover {
            transform: translateY(-2px);
        }

        /* Ô Ngày thường */
        .date-box.workday {
            border: 1px solid rgba(255, 255, 255, 0.25);
            background-color: transparent;
        }
        
        /* Ô Ngày nghỉ */
        .date-box.holiday {
            background: #2eb793; /* Tràn nền đồng nhất màu Mint */
            border: 1px solid rgba(46, 183, 147, 0.8);
            box-shadow: 0 0 20px rgba(46, 183, 147, 0.6); /* CHỈ có Outer Glow */
        }

        /* Các phần tử bên trong Ô Lịch */
        .date-box .top-text {
            font-size: 10px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.8);
            width: 100%;
            text-align: right;
            padding-right: 4px;
            min-height: 14px; /* Giữ chỗ cố định */
            line-height: 1;
            z-index: 10;
        }

        .date-box .main-number {
            font-size: 38px;
            font-weight: 900;
            line-height: 1;
            margin: 0;
            color: #FFFFFF;
            z-index: 10;
            text-shadow: 0 2px 4px rgba(0,0,0,0.15); /* Nổi nhẹ lên */
        }
        @media (min-width: 768px) {
            .date-box .main-number { font-size: 46px; }
        }

        .date-box .bottom-text {
            font-size: 9px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            width: 100%;
            min-height: 24px; /* Ép không gian cho chữ rớt dòng */
            color: #FFFFFF;
            z-index: 10;
            padding-bottom: 2px;
            letter-spacing: 0.05em;
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen relative overflow-x-hidden p-4 sm:p-8 font-sans">

    <!-- Nút tải ảnh -->
    <button onclick="downloadPNG()" class="fixed top-4 right-4 bg-mint hover:bg-white text-darkteal font-bold py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(46,183,147,0.5)] transition-colors z-50 flex items-center gap-2" id="download-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Tải ảnh PNG
    </button>

    <!-- NỀN TỔNG THỂ & LIGHT BEAM -->
    <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] light-beam"></div>
        
        <!-- Họa tiết Trống đồng mờ (Opacity 5%) -->
        <svg class="absolute inset-0 w-full h-full text-white opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="0.5 1"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="0.1"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="1 2"/>
            <path d="M50 42 L53 50 L50 58 L47 50 Z" fill="currentColor"/>
        </svg>

        <!-- Logo Paxlaw mờ chìm (Opacity 5%) -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl opacity-5 flex justify-center">
            <img src="https://i.postimg.cc/yYtjqxNv/PAXLAW-logo-file-goc-02-removebg-preview.png" crossorigin="anonymous" class="w-full h-auto filter grayscale blur-[1px]">
        </div>
    </div>

    <!-- CONTAINER CHÍNH -->
    <div id="poster-container" class="relative z-10 w-full max-w-4xl flex flex-col items-center pt-8 pb-12">
        
        <!-- LOGO (Đã phóng to kích thước và điều chỉnh lề dưới cho cân đối) -->
        <div class="h-32 md:h-44 mb-6 md:mb-8 bg-transparent border-none flex items-center justify-center">
            <img src="https://i.postimg.cc/yYtjqxNv/PAXLAW-logo-file-goc-02-removebg-preview.png" crossorigin="anonymous" alt="Logo Công ty" class="max-w-full max-h-full object-contain brightness-0 invert opacity-100">
        </div>

        <!-- HEADER & TITLE (Thu gọn lề để gắn kết) -->
        <div class="text-center mb-8 flex flex-col items-center">
            <h2 class="font-sans text-white/80 font-semibold text-sm md:text-base tracking-[0.35em] uppercase mb-2">Thông Báo</h2>
            <h1 class="font-sans text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 text-glow leading-tight">
                Lịch Nghỉ Lễ
            </h1>
            <p class="font-serif text-mint text-lg md:text-2xl font-medium tracking-wide drop-shadow-md">
                Giỗ Tổ Hùng Vương & 30/4 - 1/5
            </p>
        </div>

        <!-- KHỐI LỊCH (GLASSMORPHISM) -->
        <div class="w-full px-2 md:px-6">
            <div class="glass-card rounded-[24px] p-5 md:p-8 w-full">
                
                <!-- Chú thích & Tiêu đề -->
                <div class="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
                    <h3 class="font-sans text-white font-bold text-base md:text-xl tracking-widest uppercase">Tháng 4 & 5 - 2026</h3>
                    
                    <div class="flex items-center gap-4 md:gap-5 text-xs md:text-sm font-normal text-white">
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 md:w-4 md:h-4 rounded border border-white/50 bg-transparent flex-shrink-0"></div>
                            <span class="leading-none pt-[2px]">Làm việc</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 md:w-4 md:h-4 rounded bg-mint shadow-[0_0_8px_rgba(46,183,147,0.8)] border border-mint flex-shrink-0"></div>
                            <span class="leading-none pt-[2px]">Nghỉ lễ</span>
                        </div>
                    </div>
                </div>

                <!-- Tiêu đề cột -->
                <div class="grid grid-cols-7 gap-3 md:gap-4 mb-2">
                    <div class="text-center font-bold text-white/80 uppercase text-[10px] md:text-sm tracking-widest">Thứ 2</div>
                    <div class="text-center font-bold text-white/80 uppercase text-[10px] md:text-sm tracking-widest">Thứ 3</div>
                    <div class="text-center font-bold text-white/80 uppercase text-[10px] md:text-sm tracking-widest">Thứ 4</div>
                    <div class="text-center font-bold text-white/80 uppercase text-[10px] md:text-sm tracking-widest">Thứ 5</div>
                    <div class="text-center font-bold text-white/80 uppercase text-[10px] md:text-sm tracking-widest">Thứ 6</div>
                    <div class="text-center font-bold text-mint uppercase text-[10px] md:text-sm tracking-widest">Thứ 7</div>
                    <div class="text-center font-bold text-mint uppercase text-[10px] md:text-sm tracking-widest">C.Nhật</div>
                </div>

                <!-- LƯỚI LỊCH CHUẨN CẤU TRÚC -->
                <div class="grid grid-cols-7 gap-3 md:gap-4 mb-3 md:mb-4">
                    
                    <!-- Tuần 1 -->
                    <!-- 20 -->
                    <div class="date-box workday">
                        <div class="top-text">Th.4</div>
                        <p class="main-number">20</p>
                        <div class="bottom-text"></div>
                    </div>
                    <!-- 21 -->
                    <div class="date-box workday">
                        <div class="top-text"></div>
                        <p class="main-number">21</p>
                        <div class="bottom-text"></div>
                    </div>
                    <!-- 22 -->
                    <div class="date-box workday">
                        <div class="top-text"></div>
                        <p class="main-number">22</p>
                        <div class="bottom-text"></div>
                    </div>
                    <!-- 23 -->
                    <div class="date-box workday">
                        <div class="top-text"></div>
                        <p class="main-number">23</p>
                        <div class="bottom-text"></div>
                    </div>
                    <!-- 24 -->
                    <div class="date-box workday">
                        <div class="top-text"></div>
                        <p class="main-number">24</p>
                        <div class="bottom-text"></div>
                    </div>
                    <!-- 25 -->
                    <div class="date-box holiday">
                        <div class="top-text"></div>
                        <p class="main-number">25</p>
                        <div class="bottom-text">NGHỈ LỄ</div>
                    </div>
                    <!-- 26 -->
                    <div class="date-box holiday">
                        <div class="top-text"></div>
                        <p class="main-number">26</p>
                        <div class="bottom-text">NGHỈ LỄ</div>
                    </div>
                </div>

                <div class="grid grid-cols-7 gap-3 md:gap-4">
                    <!-- Tuần 2 -->
                    
                    <!-- 27: NGHỈ BÙ GIỖ TỔ -->
                    <div class="date-box holiday">
                        <!-- Icon Nhành quế (Mờ 15%) -->
                        <svg class="absolute inset-0 m-auto w-12 h-12 text-white opacity-15 pointer-events-none z-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21C12 21 17 19 17 14C17 9 12 3 12 3C12 3 7 9 7 14C7 19 12 21 12 21ZM12 18.5C10.5 17.5 9.5 15.5 9.5 14C9.5 11 12 6.5 12 6.5C12 6.5 14.5 11 14.5 14C14.5 15.5 13.5 17.5 12 18.5Z"/><path d="M12 23V21"/></svg>
                        <div class="top-text"></div>
                        <p class="main-number">27</p>
                        <div class="bottom-text">NGHỈ BÙ <br> GIỖ TỔ</div>
                    </div>
                    
                    <!-- 28, 29 -->
                    <div class="date-box workday">
                        <div class="top-text"></div>
                        <p class="main-number">28</p>
                        <div class="bottom-text"></div>
                    </div>
                    <div class="date-box workday">
                        <div class="top-text"></div>
                        <p class="main-number">29</p>
                        <div class="bottom-text"></div>
                    </div>
                    
                    <!-- 30/4: GIẢI PHÓNG -->
                    <div class="date-box holiday">
                        <!-- Icon Ngôi sao (Mờ 15%) -->
                        <svg class="absolute inset-0 m-auto w-10 h-10 text-white opacity-15 pointer-events-none z-0" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <div class="top-text"></div>
                        <p class="main-number">30</p>
                        <div class="bottom-text">GIẢI <br> PHÓNG</div>
                    </div>

                    <!-- 1/5: QUỐC TẾ LAO ĐỘNG -->
                    <div class="date-box holiday">
                        <div class="top-text">Th.5</div>
                        <p class="main-number">01</p>
                        <div class="bottom-text">QUỐC TẾ <br> LAO ĐỘNG</div>
                    </div>

                    <!-- 2, 3/5 -->
                    <div class="date-box holiday">
                        <div class="top-text"></div>
                        <p class="main-number">02</p>
                        <div class="bottom-text">NGHỈ LỄ</div>
                    </div>
                    <div class="date-box holiday">
                        <div class="top-text"></div>
                        <p class="main-number">03</p>
                        <div class="bottom-text">NGHỈ LỄ</div>
                    </div>

                </div>
            </div>
        </div>

        <!-- FOOTER / LỜI CHÚC (Chỉ 1 lần, font in nghiêng không in đậm, căn giữa, padding thoải mái) -->
        <div class="w-full px-4 md:px-16 mt-10 mb-6">
            <p class="font-serif font-normal italic text-white text-center text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                "Kính chúc Quý đối tác, Khách hàng và toàn thể Cán bộ nhân viên có một kỳ nghỉ lễ ngập tràn niềm vui, bình an và hạnh phúc bên gia đình!"
            </p>
        </div>

    </div>

    <script>
        function downloadPNG() {
            const poster = document.getElementById('poster-container');
            const btn = document.getElementById('download-btn');
            
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Đang xử lý...';
            btn.disabled = true;

            // 1. Lưu lại các style hiện tại
            const originalWidth = poster.style.width;
            const originalMaxWidth = poster.style.maxWidth;
            const originalMargin = poster.style.margin;

            // 2. Ép cứng kích thước chuẩn Desktop (tránh lỗi vỡ layout khi chụp ở màn nhỏ)
            poster.style.width = '896px'; // Kích thước max-w-4xl của Tailwind
            poster.style.maxWidth = 'none';
            poster.style.margin = '0 auto';

            // 3. Đảm bảo toàn bộ font chữ đã được tải xong trước khi chụp
            document.fonts.ready.then(function() {
                html2canvas(poster, {
                    scale: 3, // Tăng độ nét x3
                    useCORS: true, 
                    allowTaint: true,
                    backgroundColor: '#1d6266', // Đặt nền khi xuất ảnh trùng màu body
                    onclone: function (clonedDoc) {
                        // Fix ẩn các thẻ không mong muốn trong bản clone nếu cần
                    }
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = 'Paxlaw_Luxury_Dark_Holiday_Fix.png';
                    link.href = canvas.toDataURL('image/png', 1.0);
                    link.click();
                }).catch(err => {
                    console.error('Lỗi xuất ảnh:', err);
                    alert('Có lỗi khi tạo ảnh! Đảm bảo logo có hỗ trợ CORS.');
                }).finally(() => {
                    // 4. Trả lại trạng thái Responsive ban đầu cho giao diện web
                    poster.style.width = originalWidth;
                    poster.style.maxWidth = originalMaxWidth;
                    poster.style.margin = originalMargin;
                    
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                });
            });
        }
    </script>
</body>
</html>
