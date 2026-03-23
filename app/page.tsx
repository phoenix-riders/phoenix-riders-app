"use client";
import { useState } from "react";
import Link from "next/link";

const translations = {
  en: {
    subtitle: "Competition App",
    location: "Baicoi, Prahova",
    season: "2026 Season",
    schedule: "Schedule",
    scheduleDesc: "Daily programme",
    alerts: "Alerts",
    alertsDesc: "Live updates",
    info: "Event Info",
    infoDesc: "Contacts & logistics",
    request: "Stable Request",
    requestDesc: "Book your stable & supplies",
    documents: "Documents",
    documentsDesc: "Show schedules & prize lists",
    upcoming: "Upcoming Events",
    footer: "phoenixriders.ro",
  },
  ro: {
    subtitle: "Aplicatie Concurs",
    location: "Baicoi, Prahova",
    season: "Sezon 2026",
    schedule: "Program",
    scheduleDesc: "Programul zilnic",
    alerts: "Alerte",
    alertsDesc: "Actualizari live",
    info: "Info Eveniment",
    infoDesc: "Contacte si logistica",
    request: "Rezervare Boxa",
    requestDesc: "Rezerva boxa si furaje",
    documents: "Documente",
    documentsDesc: "Program concurs si premii",
    upcoming: "Evenimente Viitoare",
    footer: "phoenixriders.ro",
  },
};

const events = [
  { dates: "23-25 Jan 2026", name: "CSN Jumping Baicoi", type: "National", done: true },
  { dates: "29 Jan - 01 Feb 2026", name: "CSI1*, CSIYH, CSICH, CSIJ", type: "International", done: true },
  { dates: "20-22 Feb 2026", name: "CSN Jumping Baicoi", type: "National", done: true },
  { dates: "13-15 Mar 2026", name: "CSN Jumping Baicoi", type: "National", done: true },
  { dates: "18-22 Mar 2026", name: "CSI1*, CSIOCH, CSIOJ, CSIYH", type: "International", done: true },
  { dates: "17-19 Apr 2026", name: "CSN Jumping Baicoi", type: "National", done: false },
  { dates: "22-26 Apr 2026", name: "Cupa FER - Seniori, U25, Amazoane", type: "Cupa FER", done: false },
  { dates: "29 Apr - 03 May 2026", name: "Cupa FER - Copii, Juniori, Tineret", type: "Cupa FER", done: false },
  { dates: "29-31 May 2026", name: "CSN Jumping + CDN Dressage", type: "National", done: false },
  { dates: "26-28 Jun 2026", name: "CSN Jumping Baicoi", type: "National", done: false },
  { dates: "03-05 Jul 2026", name: "CSI1*, CSICH, CSIJ, CSIY + CDN Dressage", type: "International", done: false },
  { dates: "10-12 Jul 2026", name: "CSI1*, CSICH, CSIY, CSIJ, CSIP", type: "International", done: false },
  { dates: "31 Jul - 02 Aug 2026", name: "CSN Jumping + CDI1*", type: "International", done: false },
  { dates: "28-30 Aug 2026", name: "CSN Jumping + CDN Dressage", type: "National", done: false },
  { dates: "18-20 Sep 2026", name: "CSI1*, CSICH, CSIJ, CSIY, CSP", type: "International", done: false },
  { dates: "25-27 Sep 2026", name: "CSI1*, CSICH, CSIJ, CSIY + CDN Dressage", type: "International", done: false },
  { dates: "30 Oct - 01 Nov 2026", name: "CSN Jumping + CDN Dressage", type: "National", done: false },
  { dates: "26-29 Nov 2026", name: "CSI3*, CSI2*, CSI1*, CSIAM, CSIYH", type: "International", done: false },
  { dates: "03-06 Dec 2026", name: "CSI4*, CSI2*, CSI1*, CSIAM, CSIYH", type: "HOE", done: false },
  { dates: "10-13 Dec 2026", name: "CSI4*, CSI2*, CSI1*, CSIAM, CSIYH", type: "HOE", done: false },
];

const typeColors: Record<string, string> = {
  "HOE": "bg-[#C9A84C22] text-[#C9A84C] border-[#C9A84C44]",
  "International": "bg-blue-900/20 text-blue-300 border-blue-700/30",
  "Cupa FER": "bg-purple-900/20 text-purple-300 border-purple-700/30",
  "National": "bg-emerald-900/20 text-emerald-300 border-emerald-700/30",
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "ro">("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] pb-12">
      {/* Language toggle */}
      <div className="flex justify-end px-4 pt-4">
        <button
          onClick={() => setLang(lang === "en" ? "ro" : "en")}
          className="text-xs border border-[#3D3526] rounded-lg px-3 py-1.5 text-[#C9A84C] hover:bg-[#2A2318] transition-colors"
        >
          {lang === "en" ? "RO" : "EN"}
        </button>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center gap-2 pt-4 pb-8 px-6">
        <div className="w-14 h-14 bg-gradient-to-br from-[#C9A84C] to-[#E8D5A3] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
        <p className="text-[#C9A84C] text-xs tracking-[4px] uppercase mt-2">Phoenix Riders</p>
        <h1 className="text-2xl font-serif text-center mt-1">House of Equestrian Excellence 2026</h1>
        <p className="text-[#8B7E6A] text-xs text-center mt-1">{t.location} · {t.season}</p>
      </div>

      {/* Nav cards */}
      <div className="px-4 flex flex-col gap-3 max-w-sm mx-auto">
        {[
          { href: "/schedule", icon: "📅", label: t.schedule, desc: t.scheduleDesc },
          { href: "/alerts", icon: "🔔", label: t.alerts, desc: t.alertsDesc },
          { href: "/info", icon: "📋", label: t.info, desc: t.infoDesc },
          { href: "/request", icon: "📝", label: t.request, desc: t.requestDesc },
          { href: "/documents", icon: "📄", label: t.documents, desc: t.documentsDesc },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="w-full bg-[#2A2318] border border-[#3D3526] rounded-xl px-5 py-4 flex items-center justify-between hover:border-[#C9A84C] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-[#8B7E6A] text-xs">{item.desc}</p>
              </div>
            </div>
            <span className="text-[#C9A84C]">›</span>
          </Link>
        ))}
      </div>

      {/* Season calendar */}
      <div className="px-4 mt-8 max-w-sm mx-auto">
        <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-3 px-1">{t.upcoming}</p>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">
          {events.map((e, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 px-4 py-3 ${i !== events.length - 1 ? "border-b border-[#3D3526]" : ""} ${e.done ? "opacity-35" : ""}`}
            >
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-medium ${e.done ? "text-[#5A4F3E]" : "text-[#E8E0D0]"}`}>{e.name}</p>
                <p className="text-[10px] text-[#5A4F3E] mt-0.5">{e.dates}</p>
              </div>
              <span className={`text-[10px] border px-2 py-0.5 rounded-full font-medium shrink-0 ${typeColors[e.type]}`}>
                {e.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[#5A4F3E] text-xs mt-8 tracking-widest uppercase">{t.footer}</p>
    </main>
  );
}