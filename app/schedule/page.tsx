"use client";
import { useState } from "react";
import Link from "next/link";

const translations = {
  en: {
    title: "Competition Schedule",
    subtitle: "Phoenix Riders",
    prize: "Prize",
    arena: "Arena",
    featured: "Featured",
    vetCheck: "Vet Check",
    week1: "Week 1 — Cupa FER Seniori, U25, Amazoane",
    week2: "Week 2 — Cupa FER Copii, Juniori, Tineret",
    totalPrize: "Total prize fund",
  },
  ro: {
    title: "Program Concurs",
    subtitle: "Phoenix Riders",
    prize: "Premii",
    arena: "Teren",
    featured: "Principal",
    vetCheck: "Vizita Medicala",
    week1: "Saptamana 1 — Cupa FER Seniori, U25, Amazoane",
    week2: "Saptamana 2 — Cupa FER Copii, Juniori, Tineret",
    totalPrize: "Fond total de premiere",
  },
};

const days = [
  {
    week: 1,
    date: "Miercuri / Wednesday 22.04.2026",
    classes: [
      { time: "17:00", name: "Vet Check — Vizita Medicala", detail: "Caii pentru Cupa FER (Seniori, Echipe Sen, U25, Amazoane)", arena: "", prize: "", highlight: false },
    ],
  },
  {
    week: 1,
    date: "Joi / Thursday 23.04.2026",
    classes: [
      { time: "10:00", name: "Bronze Tour — H=110cm", detail: "Phoenix Grand Arena · Art. 220.2.1.1", arena: "Grand", prize: "1.000 lei", highlight: false },
      { time: "11:00", name: "Proba de Incurajare — H=70cm", detail: "Gusto Arena · fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "13:00", name: "Silver Tour — H=120cm", detail: "Phoenix Grand Arena · Tab C, Art. 225", arena: "Grand", prize: "1.000 lei", highlight: false },
      { time: "14:00", name: "Elite Tour — H=80cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "16:00", name: "Cupa FER — Seniori Mansa I", detail: "Phoenix Grand Arena · H=135cm", arena: "Grand", prize: "vezi Mansa III", highlight: true },
      { time: "17:00", name: "VIP Tour — H=100cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "18:00", name: "Gold Tour — H=130cm", detail: "Phoenix Grand Arena · Tab C, Art. 225", arena: "Grand", prize: "2.000 lei", highlight: false },
    ],
  },
  {
    week: 1,
    date: "Vineri / Friday 24.04.2026",
    classes: [
      { time: "10:00", name: "Cupa FER — Amazoane Mansa I", detail: "Phoenix Grand Arena · H=120cm", arena: "Grand", prize: "vezi Mansa II", highlight: true },
      { time: "11:00", name: "Proba de Incurajare — H=70cm", detail: "Gusto Arena · fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "12:00", name: "Silver Tour — H=125cm", detail: "Phoenix Grand Arena · 2 faze speciale", arena: "Grand", prize: "2.000 lei", highlight: false },
      { time: "13:00", name: "Elite Tour — H=85cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "14:00", name: "Cupa FER — Senior Mansa II", detail: "Phoenix Grand Arena · H=140cm", arena: "Grand", prize: "vezi Mansa III", highlight: true },
      { time: "16:00", name: "Gold Tour — H=135cm", detail: "Phoenix Grand Arena · 2 faze speciale", arena: "Grand", prize: "3.000 lei", highlight: false },
      { time: "17:00", name: "VIP Tour — H=100cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "18:00", name: "Cupa FER — U25 Mansa I", detail: "Phoenix Grand Arena · H=130cm", arena: "Grand", prize: "vezi Mansa II", highlight: true },
    ],
  },
  {
    week: 1,
    date: "Sambata / Saturday 25.04.2026",
    classes: [
      { time: "10:00", name: "Bronze Tour — H=110cm", detail: "Phoenix Grand Arena · 2 faze speciale", arena: "Grand", prize: "1.000 lei", highlight: false },
      { time: "11:00", name: "Proba de Incurajare — H=70cm", detail: "Gusto Arena · fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "12:00", name: "Finala Silver Tour — H=125cm", detail: "Phoenix Grand Arena · cu baraj", arena: "Grand", prize: "3.000 lei", highlight: false },
      { time: "13:00", name: "Elite Tour — H=85cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "14:00", name: "Cupa FER — Echipe Seniori", detail: "Phoenix Grand Arena · H=130cm, 2 manse", arena: "Grand", prize: "30.000 lei", highlight: true },
      { time: "16:00", name: "VIP Tour — H=100cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "17:00", name: "Finala Gold Tour — H=140cm", detail: "Phoenix Grand Arena · cu baraj", arena: "Grand", prize: "5.000 lei", highlight: false },
    ],
  },
  {
    week: 1,
    date: "Duminica / Sunday 26.04.2026",
    classes: [
      { time: "10:00", name: "Cupa FER — Amazoane Mansa II", detail: "Phoenix Grand Arena · H=125cm", arena: "Grand", prize: "4.000 lei", highlight: true },
      { time: "11:00", name: "Finala Proba de Incurajare", detail: "Gusto Arena · H=70cm, fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "12:00", name: "Cupa FER — U25 Mansa II", detail: "Phoenix Grand Arena · H=140cm", arena: "Grand", prize: "12.000 lei", highlight: true },
      { time: "13:00", name: "Finala Elite Tour — H=90cm", detail: "Gusto Arena · cu baraj", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "14:00", name: "Cupa FER — Seniori Mansa III", detail: "Phoenix Grand Arena · H=145cm", arena: "Grand", prize: "40.000 lei", highlight: true },
      { time: "16:00", name: "Finala VIP Tour — H=100cm", detail: "Gusto Arena · cu baraj", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "17:00", name: "Finala Bronze Tour — H=110cm", detail: "Phoenix Grand Arena · cu baraj", arena: "Grand", prize: "1.500 lei", highlight: false },
    ],
  },
  {
    week: 2,
    date: "Miercuri / Wednesday 29.04.2026",
    classes: [
      { time: "17:00", name: "Vet Check — Vizita Medicala", detail: "Caii pentru Cupa FER (Copii, Juniori, Tineret, Amatori 2)", arena: "", prize: "", highlight: false },
    ],
  },
  {
    week: 2,
    date: "Joi / Thursday 30.04.2026",
    classes: [
      { time: "10:00", name: "Bronze Tour — H=110cm", detail: "Phoenix Grand Arena · Art. 220.2.1.1", arena: "Grand", prize: "1.000 lei", highlight: false },
      { time: "11:00", name: "Proba de Incurajare — H=70cm", detail: "Gusto Arena · fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "13:00", name: "Silver Tour — H=120cm", detail: "Phoenix Grand Arena · Tab C", arena: "Grand", prize: "1.000 lei", highlight: false },
      { time: "14:00", name: "Elite Tour — H=80cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "16:00", name: "Cupa FER — Juniori Mansa I", detail: "Phoenix Grand Arena · H=125cm", arena: "Grand", prize: "vezi Mansa II", highlight: true },
      { time: "17:00", name: "VIP Tour — H=100cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "18:00", name: "Gold Tour — H=130cm", detail: "Phoenix Grand Arena · Tab C", arena: "Grand", prize: "2.000 lei", highlight: false },
    ],
  },
  {
    week: 2,
    date: "Vineri / Friday 01.05.2026",
    classes: [
      { time: "10:00", name: "Cupa FER — Amatori 2 Mansa I", detail: "Phoenix Grand Arena · H=105cm", arena: "Grand", prize: "vezi Mansa II", highlight: false },
      { time: "11:00", name: "Proba de Incurajare — H=70cm", detail: "Gusto Arena · fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "12:00", name: "Silver Tour — H=125cm", detail: "Phoenix Grand Arena · 2 faze speciale", arena: "Grand", prize: "2.000 lei", highlight: false },
      { time: "13:00", name: "Elite Tour — H=85cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "14:00", name: "Cupa FER — Tineret Mansa I", detail: "Phoenix Grand Arena · H=130cm", arena: "Grand", prize: "vezi Mansa II", highlight: true },
      { time: "16:00", name: "Gold Tour — H=135cm", detail: "Phoenix Grand Arena · 2 faze speciale", arena: "Grand", prize: "3.000 lei", highlight: false },
      { time: "17:00", name: "VIP Tour — H=100cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "18:00", name: "Cupa FER — Copii Mansa I", detail: "Phoenix Grand Arena · H=115cm", arena: "Grand", prize: "vezi Mansa II", highlight: true },
    ],
  },
  {
    week: 2,
    date: "Sambata / Saturday 02.05.2026",
    classes: [
      { time: "10:00", name: "Bronze Tour — H=110cm", detail: "Phoenix Grand Arena · 2 faze speciale", arena: "Grand", prize: "1.000 lei", highlight: false },
      { time: "11:00", name: "Proba de Incurajare — H=70cm", detail: "Gusto Arena · fara crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "12:00", name: "Cupa FER — Amatori 2 Mansa II", detail: "Phoenix Grand Arena · H=105cm", arena: "Grand", prize: "Produse", highlight: false },
      { time: "13:00", name: "Elite Tour — H=85cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "14:00", name: "Cupa FER — Juniori Mansa II", detail: "Phoenix Grand Arena · H=125cm", arena: "Grand", prize: "6.000 lei", highlight: true },
      { time: "16:00", name: "VIP Tour — H=100cm", detail: "Gusto Arena · la crono", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "17:00", name: "Finala Silver Tour — H=125cm", detail: "Phoenix Grand Arena · cu baraj", arena: "Grand", prize: "3.000 lei", highlight: false },
    ],
  },
  {
    week: 2,
    date: "Duminica / Sunday 03.05.2026",
    classes: [
      { time: "10:00", name: "Cupa FER — Tineret Mansa II", detail: "Phoenix Grand Arena · H=130cm", arena: "Grand", prize: "7.000 lei", highlight: true },
      { time: "11:00", name: "Finala Proba de Incurajare", detail: "Gusto Arena · H=70cm", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "12:00", name: "Cupa FER — Copii Mansa II", detail: "Phoenix Grand Arena · H=120cm", arena: "Grand", prize: "Produse", highlight: true },
      { time: "13:00", name: "Finala Elite Tour — H=90cm", detail: "Gusto Arena · cu baraj", arena: "Gusto", prize: "Diplome", highlight: false },
      { time: "14:00", name: "Finala Gold Tour — H=140cm", detail: "Phoenix Grand Arena · cu baraj", arena: "Grand", prize: "5.000 lei", highlight: false },
      { time: "15:00", name: "Finala VIP Tour — H=100cm", detail: "Gusto Arena · cu baraj", arena: "Gusto", prize: "1.000 lei", highlight: false },
      { time: "16:00", name: "Finala Bronze Tour — H=110cm", detail: "Phoenix Grand Arena · cu baraj", arena: "Grand", prize: "1.500 lei", highlight: false },
    ],
  },
];

export default function Schedule() {
  const [lang, setLang] = useState<"en" | "ro">("en");
  const [activeWeek, setActiveWeek] = useState<1 | 2>(1);
  const t = translations[lang];
  const filteredDays = days.filter((d) => d.week === activeWeek);

  return (
    <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] px-4 pb-12">
      <div className="sticky top-0 bg-[#0F0D0B] border-b border-[#3D3526] px-2 py-4 flex items-center gap-3 z-10">
        <Link href="/" className="text-[#C9A84C] text-sm">Back</Link>
        <div className="flex-1 text-center">
          <p className="text-xs text-[#8B7E6A] tracking-widest uppercase">{t.subtitle}</p>
          <h1 className="text-base font-semibold">{t.title}</h1>
        </div>
        <button
          onClick={() => setLang(lang === "en" ? "ro" : "en")}
          className="text-xs border border-[#3D3526] rounded-lg px-2 py-1 text-[#C9A84C]"
        >
          {lang === "en" ? "RO" : "EN"}
        </button>
      </div>

      <div className="mx-2 mt-4 bg-[#2A2318] border border-[#C9A84C33] rounded-xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-[#C9A84C] tracking-wider uppercase font-medium">Phoenix Riders Spring Tour</p>
          <p className="text-sm font-medium mt-0.5">Cupa Federatiei 2026</p>
          <p className="text-xs text-[#8B7E6A] mt-0.5">22 Apr – 03 May · Baicoi</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#8B7E6A]">{t.totalPrize}</p>
          <p className="text-[#C9A84C] font-semibold text-base">145.000 lei</p>
        </div>
      </div>

      <div className="mx-2 mt-3 flex gap-2">
        <button
          onClick={() => setActiveWeek(1)}
          className={`flex-1 py-2.5 rounded-xl text-xs font-medium border transition-colors ${activeWeek === 1 ? "bg-[#C9A84C] text-[#0F0D0B] border-[#C9A84C]" : "bg-[#2A2318] text-[#8B7E6A] border-[#3D3526]"}`}
        >
          {lang === "en" ? "Week 1 · 22-26 Apr" : "Sapt 1 · 22-26 Apr"}
        </button>
        <button
          onClick={() => setActiveWeek(2)}
          className={`flex-1 py-2.5 rounded-xl text-xs font-medium border transition-colors ${activeWeek === 2 ? "bg-[#C9A84C] text-[#0F0D0B] border-[#C9A84C]" : "bg-[#2A2318] text-[#8B7E6A] border-[#3D3526]"}`}
        >
          {lang === "en" ? "Week 2 · 29 Apr-3 May" : "Sapt 2 · 29 Apr-3 Mai"}
        </button>
      </div>

      <div className="mx-2 mt-2 bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-2">
        <p className="text-xs text-[#8B7E6A]">{activeWeek === 1 ? t.week1 : t.week2}</p>
      </div>

      <div className="mt-4 flex flex-col gap-5 mx-2">
        {filteredDays.map((day) => (
          <div key={day.date}>
            <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-2 px-1">{day.date}</p>
            <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">
              {day.classes.map((cls, i) => (
                <div
                  key={i}
                  className={`flex gap-3 px-4 py-3 ${i !== day.classes.length - 1 ? "border-b border-[#3D3526]" : ""} ${cls.highlight ? "bg-[#C9A84C0D]" : ""}`}
                >
                  <p className="text-xs text-[#8B7E6A] w-10 pt-0.5 shrink-0">{cls.time}</p>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${cls.highlight ? "text-[#E8D5A3]" : ""}`}>{cls.name}</p>
                    <p className="text-xs text-[#8B7E6A] mt-0.5">{cls.detail}</p>
                  </div>
                  {cls.prize && (
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-[#C9A84C] font-medium">{cls.prize}</p>
                    </div>
                  )}
                  {cls.highlight && (
                    <div className="shrink-0 flex items-center">
                      <span className="text-[10px] bg-[#C9A84C22] text-[#C9A84C] border border-[#C9A84C44] px-2 py-0.5 rounded-full">{t.featured}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}