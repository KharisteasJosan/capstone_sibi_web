"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function KamusIsyaratPage() {
  const router = useRouter();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-5xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Kamus Isyarat (SIBI)
        </h1>
        <p className="text-gray-600 text-lg text-center">
          Berikut adalah daftar huruf dan representasi isyarat tangan
          berdasarkan Sistem Isyarat Bahasa Indonesia (SIBI).
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {alphabet.map((char) => (
            <div key={char} className="flex flex-col items-center">
              {char === "j" || char === "z" ? (
                <video
                  src={`/sibi/${char.toUpperCase()}.mp4`}
                  controls
                  className="w-24 h-24 object-contain border rounded-lg shadow"
                />
              ) : (
                <img
                  src={`/sibi/${char.toUpperCase()}.jpg`}
                  alt={`Isyarat ${char.toUpperCase()}`}
                  className="w-24 h-24 object-contain border rounded-lg shadow"
                />
              )}
              <span className="mt-2 text-sm font-medium">
                {char.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="mt-10 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium shadow transition duration-200"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
}
