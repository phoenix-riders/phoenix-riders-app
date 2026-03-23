"use client";
import { useState } from "react";
import Link from "next/link";

export default function Documents() {
  const [lang, setLang] = useState("en");

  return (
    <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] px-4 pb-12">
      <div className="sticky top-0 bg-[#0F0D0B] border-b border-[#3D3526] px-2 py-4 flex items-center gap-3 z-10">
        <Link href="/" className="text-[#C9A84C] text-sm">Back</Link>
        <div className="flex-1 text-center">
          <p className="text-xs text-[#8B7E6A] tracking-widest uppercase">Phoenix Riders</p>
          <h1 className="text-base font-semibold">{lang === "en" ? "Documents" : "Documente"}</h1>
        </div>
        <button
          onClick={() => setLang(lang === "en" ? "ro" : "en")}
          className="text-xs border border-[#3D3526] rounded-lg px-2 py-1 text-[#C9A84C]"
        >
          {lang === "en" ? "RO" : "EN"}
        </button>
      </div>

      <div className="mx-2 mt-4 bg-[#2A2318] border border-[#C9A84C33] rounded-xl px-4 py-3">
        <p className="text-xs text-[#8B7E6A] leading-relaxed">
          {lang === "en"
            ? "Official show schedules, prize lists and regulations. Tap any document to open or download."
            : "Programe oficiale, liste de premii si regulamente. Apasa pentru a deschide sau descarca."}
        </p>
      </div>

      <div className="mt-5 mx-2 flex flex-col gap-5">

        <div>
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-3 px-1">
            {lang === "en" ? "Show Schedules" : "Programe Concurs"}
          </p>
          <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">

            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#C9A84C22]">📄</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Cupa Federatiei 2026 — Sapt 1</p>
                <p className="text-xs text-[#8B7E6A] mt-0.5">22-26 Apr · Seniori, U25, Amazoane</p>
                <p className="text-[10px] text-[#5A4F3E] mt-0.5">PDF · 5 pagini</p>
              </div>
              <a href="https://www.phoenixriders.ro" target="_blank" rel="noopener noreferrer"
                className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">
                Open
              </a>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#C9A84C22]">📄</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Cupa Federatiei 2026 — Sapt 2</p>
                <p className="text-xs text-[#8B7E6A] mt-0.5">29 Apr - 03 May · Copii, Juniori, Tineret</p>
                <p className="text-[10px] text-[#5A4F3E] mt-0.5">PDF · 5 pagini</p>
              </div>
              <a href="https://www.phoenixriders.ro" target="_blank" rel="noopener noreferrer"
                className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">
                Open
              </a>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#3D3526]">🔒</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#5A4F3E]">HOE 2026 — 03-06 Dec</p>
                <p className="text-xs text-[#5A4F3E] mt-0.5">CSI4*, CSI2*, CSI1*, CSIAM, CSIYH</p>
              </div>
              <span className="shrink-0 text-[10px] text-[#5A4F3E] border border-[#3D3526] px-2 py-1 rounded-lg">
                {lang === "en" ? "Coming soon" : "In curand"}
              </span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#3D3526]">🔒</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#5A4F3E]">HOE 2026 — 10-13 Dec</p>
                <p className="text-xs text-[#5A4F3E] mt-0.5">CSI4*, CSI2*, CSI1*, CSIAM, CSIYH</p>
              </div>
              <span className="shrink-0 text-[10px] text-[#5A4F3E] border border-[#3D3526] px-2 py-1 rounded-lg">
                {lang === "en" ? "Coming soon" : "In curand"}
              </span>
            </div>

          </div>
        </div>

        <div>
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-3 px-1">
            {lang === "en" ? "Regulations" : "Regulamente"}
          </p>
          <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">

            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#C9A84C22]">📄</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Regulament FER 2025</p>
                <p className="text-xs text-[#8B7E6A] mt-0.5">Regulamentul de obstacole FER</p>
              </div>
              <a href="https://www.fer.org.ro" target="_blank" rel="noopener noreferrer"
                className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">
                Open
              </a>
            </div>

            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#C9A84C22]">📄</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">FEI Jumping Rules 2026</p>
                <p className="text-xs text-[#8B7E6A] mt-0.5">Official FEI jumping regulations</p>
              </div>
              <a href="https://www.fei.org" target="_blank" rel="noopener noreferrer"
                className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">
                Open
              </a>
            </div>

          </div>
        </div>

        <div>
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-3 px-1">
            {lang === "en" ? "Results & Rankings" : "Rezultate si Clasamente"}
          </p>
          <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">

            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#C9A84C22]">🏆</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Live Results</p>
                <p className="text-xs text-[#8B7E6A] mt-0.5">Real-time results — livejumping.com</p>
              </div>
              <a href="https://www.livejumping.com" target="_blank" rel="noopener noreferrer"
                className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">
                Open
              </a>
            </div>

            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 bg-[#C9A84C22]">📊</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Phoenix Ranking 2026</p>
                <p className="text-xs text-[#8B7E6A] mt-0.5">Season ranking — all categories</p>
              </div>
              <a href="https://www.phoenixriders.ro/phoenix-ranking/" target="_blank" rel="noopener noreferrer"
                className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">
                Open
              </a>
            </div>

          </div>
        </div>

        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-4 py-4">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-medium mb-2">
            {lang === "en" ? "Registration" : "Inscrieri"}
          </p>
          <p className="text-xs text-[#8B7E6A] mb-3">
            {lang === "en"
              ? "All entries via livejumping.com. Deadline and fees apply per competition."
              : "Toate inscrierile pe livejumping.com. Data limita si taxele se aplica per concurs."}
          </p>
          <a href="https://live.jumping.com" target="_blank" rel="noopener noreferrer"
            className="inline-block text-xs text-[#C9A84C] border border-[#C9A84C44] rounded-lg px-3 py-1.5">
            livejumping.com
          </a>
        </div>

      </div>
    </main>
  );
}