"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function TextToSibiClient() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const letters = input
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white max-w-xl w-full p-8 rounded-2xl shadow-2xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Konversi Teks ke Bahasa Isyarat SIBI
        </h1>

        <input
          type="text"
          placeholder="Masukkan huruf atau kata..."
          className="w-full px-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {letters.map((char, idx) => (
            <div key={idx} className="text-center">
              {char === "j" || char === "z" ? (
                <video
                  src={`/sibi/${char.toUpperCase()}.mp4`}
                  controls
                  className="w-24 h-24 object-contain border rounded-lg shadow"
                />
              ) : (
                <img
                  src={`/sibi/${char.toUpperCase()}.jpg`}
                  alt={char}
                  className="w-24 h-24 object-contain border rounded-lg shadow"
                />
              )}
              <p className="mt-1 text-sm font-medium">{char.toUpperCase()}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-6 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium shadow transition duration-200"
        >
          ⬅ Kembali ke Beranda
        </button>
      </div>
    </main>
  );
}