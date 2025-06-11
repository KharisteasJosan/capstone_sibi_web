"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function TentangSibiPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-3xl bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Tentang SIBI</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          SIBI (Sistem Isyarat Bahasa Indonesia) adalah sistem bahasa isyarat yang digunakan oleh komunitas Tuli di Indonesia. 
          SIBI mengadaptasi struktur Bahasa Indonesia dengan menggunakan gerakan tangan, ekspresi wajah, dan posisi tubuh 
          sebagai media komunikasi visual. Tujuan utama dari SIBI adalah untuk meningkatkan aksesibilitas komunikasi dan pendidikan 
          bagi penyandang disabilitas pendengaran.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Dalam aplikasi ini, kami menyediakan fitur untuk memprediksi dan mengonversi huruf ke dalam bentuk isyarat sesuai 
          standar SIBI. Ini diharapkan dapat membantu proses belajar, edukasi, dan komunikasi inklusif.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium shadow transition duration-200"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
}
