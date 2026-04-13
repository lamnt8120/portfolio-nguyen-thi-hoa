// PRODUCTION-READY NEXT.JS LANDING PAGE (BIG LAW)
// Stack: Next.js + Tailwind + SEO + CTA + Tracking-ready

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luật sư M&A | Paxlaw</title>
        <meta
          name="description"
          content="Tư vấn M&A, tái cấu trúc và giải quyết tranh chấp doanh nghiệp quy mô lớn."
        />
      </Head>

      <main className="bg-white text-gray-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-lg">PAXLAW</div>
            <nav className="hidden md:flex gap-8 text-sm text-gray-600">
              <a href="#about">Giới thiệu</a>
              <a href="#practice">Lĩnh vực</a>
              <a href="#deals">Thương vụ</a>
              <a href="#contact">Liên hệ</a>
            </nav>
            <a
              href="#contact"
              className="bg-black text-white px-5 py-2 rounded-md text-sm"
            >
              Đặt lịch tư vấn
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Luật sư Doanh nghiệp & M&A
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Tư vấn giao dịch, tái cấu trúc và xử lý tranh chấp quy mô lớn
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-md"
              >
                Đặt lịch tư vấn
              </a>
              <a
                href="tel:+84911553686"
                className="border border-gray-300 px-6 py-3 rounded-md"
              >
                Gọi ngay
              </a>
            </div>
            <p className="text-sm text-gray-500">
              15+ năm | 10.000+ tỷ giao dịch | Khách hàng quốc tế
            </p>
          </div>
          <img
            src="https://paxlaw.vn/wp-content/uploads/2025/10/JCI-anh-co-Hoa-e1773280779616.png"
            className="w-full rounded-lg object-cover"
          />
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-gray-50 py-20">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-6">
              Giải pháp pháp lý mang tính chiến lược
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi giúp doanh nghiệp kiểm soát rủi ro, tối ưu cấu trúc giao
              dịch và bảo vệ lợi ích trong các tình huống phức tạp.
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

        {/* CONTACT FORM */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Đặt lịch tư vấn
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border p-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-md"
              />
              <textarea
                placeholder="Vấn đề cần tư vấn"
                className="w-full border p-3 rounded-md"
              />
              <button className="w-full bg-black text-white py-3 rounded-md">
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </section>

        {/* FLOATING ZALO */}
        <a
          href="https://zalo.me/0911553686"
          className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg"
        >
          Zalo
        </a>

        {/* FOOTER */}
        <footer className="border-t py-10 text-center text-sm text-gray-500">
          © Paxlaw. All rights reserved.
        </footer>
      </main>
    </>
  );
}
