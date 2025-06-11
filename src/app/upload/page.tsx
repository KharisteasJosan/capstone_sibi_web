"use client";

import React, { useState } from "react";
import heic2any from "heic2any";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const router = useRouter();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (
      file.type === "image/heic" ||
      file.name.toLowerCase().endsWith(".heic")
    ) {
      try {
        const convertedBlob = (await heic2any({
          blob: file,
          toType: "image/jpeg",
        })) as Blob;

        const convertedFile = new File(
          [convertedBlob],
          file.name.replace(/\.heic$/i, ".jpg"),
          {
            type: "image/jpeg",
          }
        );

        setSelectedFile(convertedFile);
        setPreview(URL.createObjectURL(convertedFile));
      } catch (err) {
        console.error("Konversi HEIC gagal", err);
        alert("Gagal mengonversi file HEIC. Coba gunakan format JPG/PNG.");
      }
    } else {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch(
        "https://kharisjos-capstone-sibi-web.hf.space/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const data = await res.json();
      setResult(data?.result || JSON.stringify(data));
    } catch (err) {
      console.error("Gagal upload atau prediksi:", err);
      setResult("Gagal melakukan prediksi.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Prediksi Bahasa Isyarat SIBI
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pilih gambar (JPG, PNG, HEIC)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            />
          </div>

          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview Gambar:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Upload & Prediksi
          </button>
        </form>

        {result && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <h2 className="text-md font-semibold text-green-800 mb-1">
              Hasil Prediksi:
            </h2>
            <p className="text-green-700">{result}</p>
          </div>
        )}

        {/* Tombol kembali */}
        <button
          onClick={() => router.push("/")}
          className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium shadow transition duration-200 w-full"
        >
          Kembali ke Beranda
        </button>
      </div>
    </main>
  );
}
