"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const menus = [
    {
      title: "Tentang SIBI",
      desc: "Pelajari dasar-dasar dan sejarah SIBI.",
      href: "/tentang-sibi",
    },
    {
      title: "Kamus Isyarat",
      desc: "Lihat daftar huruf dalam bahasa isyarat SIBI.",
      href: "/kamus-isyarat",
    },
    {
      title: "Prediksi Gambar",
      desc: "Unggah gambar bahasa isyarat untuk dikenali.",
      href: "/upload",
    },
    {
      title: "Konversi Teks ke SIBI",
      desc: "Tampilkan huruf-huruf SIBI berdasarkan input teks.",
      href: "/text-to-sibi",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">
          Selamat Datang di Aplikasi SIBI
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Jelajahi fitur kami untuk mempelajari dan menggunakan Bahasa Isyarat
          Indonesia (SIBI)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menus.map((menu) => (
            <button
              key={menu.href}
              onClick={() => router.push(menu.href)}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 text-left"
            >
              <h2 className="text-xl font-semibold text-blue-700">{menu.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{menu.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
