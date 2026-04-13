import React from "react";

export default function BigLawLanding() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg tracking-wide">PAXLAW</div>
          <nav className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="#about">Giới thiệu</a>
            <a href="#practice">Lĩnh vực</a>
            <a href="#deals">Thương vụ</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <button className="bg-black text-white px-5 py-2 rounded-md text-sm">
            Đặt lịch tư vấn
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Luật sư Doanh nghiệp & M&A
          </h1>
          <p className="text-gray-600 mb-6">
            Tư vấn giao dịch, tái cấu trúc và giải quyết tranh chấp quy mô lớn
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Đặt lịch tư vấn
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md">
              Liên hệ
            </button>
          </div>
          <p className="text-sm text-gray-500">
            15+ năm | 10.000+ tỷ | Khách hàng quốc tế
          </p>
        </div>
        <img
          src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png"
          className="w-full rounded-lg object-cover"
        />
      </section>

      {/* VALUE */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Giải pháp pháp lý không chỉ để tuân thủ
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Trong các giao dịch lớn, rủi ro nằm ở cấu trúc và điều khoản.
            Chúng tôi giúp doanh nghiệp kiểm soát rủi ro và tối ưu lợi ích.
          </p>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Lĩnh vực tư vấn</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "M&A & Gọi vốn",
            "Tài chính & Trái phiếu",
            "Bất động sản",
            "Tranh chấp & Khủng hoảng",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition"
            >
              <h3 className="font-semibold mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                Tư vấn chuyên sâu và xử lý thực tiễn cho doanh nghiệp.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DEALS */}
      <section id="deals" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Thương vụ tiêu biểu</h2>
          <div className="space-y-6">
            {[
              ["M&A BĐS thương mại", "1.500 Tỷ VNĐ"],
              ["Chuyển nhượng Resort", "1.600 Tỷ VNĐ"],
              ["EPC Nhật Bản", "20 Triệu USD"],
            ].map((d, i) => (
              <div key={i} className="flex justify-between border-b pb-4">
                <span>{d[0]}</span>
                <span className="font-semibold">{d[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Trao đổi trực tiếp về vấn đề của bạn
        </h2>
        <p className="text-gray-600 mb-8">
          Mọi thông tin được bảo mật tuyệt đối.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-md">
          Đặt lịch tư vấn
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-gray-500">
        © Paxlaw. All rights reserved.
      </footer>
    </div>
  );
}
