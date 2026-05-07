<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Sử dụng Tailwind CSS để style nhanh và chuẩn -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome cho các icon mạng xã hội -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-200 p-4 md:p-8 flex items-center justify-center min-h-screen">

    <!-- Container của Footer (mô phỏng) -->
    <div class="w-full max-w-6xl bg-[#0b5f63] text-white p-8 md:p-12 rounded-xl shadow-2xl flex flex-col md:flex-row justify-between gap-10 leading-relaxed">

        <!-- Cột 1: Logo & Thông tin -->
        <div class="flex-1">
            <div class="text-5xl font-bold mb-1 italic flex items-start">
                Paxlaw<sup class="text-lg mt-2 ml-1">&reg;</sup>
            </div>
            <div class="text-sm text-gray-300 mb-8 italic">Global Mind, Silk Touch</div>
            <p class="mb-8 font-medium text-[15px]">Pháp luật là không gian kiến tạo lợi thế cho doanh nghiệp.</p>
            
            <!-- Nút MXH -->
            <div class="flex gap-3">
                <a href="#" class="w-9 h-9 bg-white text-[#0b5f63] rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="w-9 h-9 bg-white text-[#0b5f63] rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="w-9 h-9 bg-white text-[#0b5f63] rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all"><i class="fab fa-instagram"></i></a>
                <a href="#" class="w-9 h-9 bg-white text-[#0b5f63] rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all"><i class="fab fa-twitter"></i></a>
            </div>
        </div>

        <!-- Cột 2: Liên hệ (Đã tăng khoảng cách) -->
        <div class="flex-1">
            <h3 class="text-[17px] font-bold mb-6 uppercase tracking-wide">Liên hệ với chúng tôi</h3>
            <div class="mb-5 text-[15px]"><strong class="font-semibold">Trụ sở chính:</strong> Số 1 Ngõ 30 Nguyễn Thị Định, P. Yên Hoà, Tp. Hà Nội</div>
            <div class="mb-5 text-[15px]"><strong class="font-semibold">VPGD:</strong> Số 31A P. Nguyễn Quốc Trị, Khu đô thị Nam Trung Yên, Yên Hòa, Hà Nội, Việt Nam</div>
            <div class="mb-5 text-[15px]"><strong class="font-semibold">Hotline:</strong> 0911 55 3686</div>
            <div class="mb-5 text-[15px]"><strong class="font-semibold">Email:</strong> contact@paxlaw.vn</div>
        </div>

        <!-- Cột 3: Fanpage Custom UI mới -->
        <div class="flex-1">
            <h3 class="text-[17px] font-bold mb-6 uppercase tracking-wide">Fanpage Facebook</h3>
            <!-- Khối UI thay thế iframe -->
            <div class="bg-white/10 border border-white/20 p-5 rounded-lg backdrop-blur-sm">
                <div class="flex items-center gap-4 mb-4">
                    <!-- Avatar giả lập -->
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0b5f63] font-bold text-2xl italic shadow-inner">
                        P
                    </div>
                    <div>
                        <div class="font-bold text-[17px]">Paxlaw.,LTD</div>
                        <div class="text-[14px] text-gray-300">122 người theo dõi</div>
                    </div>
                </div>
                <!-- Nút Ghost Button -->
                <a href="#" class="flex items-center justify-center w-full py-2.5 px-4 border border-white rounded font-semibold text-[15px] hover:bg-white hover:text-[#0b5f63] transition-colors duration-300">
                    <i class="fab fa-facebook mr-2 text-lg"></i> Theo dõi Fanpage
                </a>
            </div>
        </div>

    </div>

</body>
</html>
