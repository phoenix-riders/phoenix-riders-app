"use client";
import { useState } from "react";
import Link from "next/link";

export default function Request() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    riderName: "",
    horseName: "",
    phone: "",
    arrivalDate: "",
    arrivalTime: "",
    horses: "1",
    stableType: "single",
    hay: "0",
    bedding: "0",
    carrots: "0",
    notes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.riderName || !form.horseName || !form.arrivalDate) {
      alert("Please fill in your name, horse name and arrival date.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] px-4 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 bg-emerald-900/40 rounded-full flex items-center justify-center text-3xl">✓</div>
        <h2 className="text-xl font-semibold text-center">Request Submitted!</h2>
        <p className="text-sm text-[#8B7E6A] text-center max-w-xs">
          Thank you {form.riderName}. The Phoenix Riders team will confirm your stable allocation by email.
        </p>
        <Link href="/" className="mt-4 text-sm text-[#C9A84C] border border-[#C9A84C44] rounded-xl px-6 py-3">
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] px-4 pb-16">
      <div className="sticky top-0 bg-[#0F0D0B] border-b border-[#3D3526] px-2 py-4 flex items-center gap-3 z-10">
        <Link href="/" className="text-[#C9A84C] text-sm">Back</Link>
        <div className="flex-1 text-center">
          <p className="text-xs text-[#8B7E6A] tracking-widest uppercase">Phoenix Riders</p>
          <h1 className="text-base font-semibold">Stable Request</h1>
        </div>
        <div className="w-12" />
      </div>

      <div className="mx-2 mt-4 flex flex-col gap-4">

        <div className="bg-[#2A2318] border border-[#C9A84C33] rounded-xl px-4 py-3">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-medium mb-1">Year-End Tournament</p>
          <p className="text-sm text-[#8B7E6A]">Fill in this form to reserve your stable and order supplies. The team will confirm within 24 hours.</p>
        </div>

        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-4 py-4 flex flex-col gap-4">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-medium">Rider Details</p>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Rider name *</p>
            <input
              name="riderName"
              value={form.riderName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] placeholder-[#5A4F3E] focus:outline-none focus:border-[#C9A84C]"
            />
          </div>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Horse name *</p>
            <input
              name="horseName"
              value={form.horseName}
              onChange={handleChange}
              placeholder="Horse name"
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] placeholder-[#5A4F3E] focus:outline-none focus:border-[#C9A84C]"
            />
          </div>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Phone number</p>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+40 7xx xxx xxx"
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] placeholder-[#5A4F3E] focus:outline-none focus:border-[#C9A84C]"
            />
          </div>
        </div>

        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-4 py-4 flex flex-col gap-4">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-medium">Arrival</p>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Arrival date *</p>
            <input
              type="date"
              name="arrivalDate"
              value={form.arrivalDate}
              onChange={handleChange}
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]"
            />
          </div>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Preferred arrival time</p>
            <select
              name="arrivalTime"
              value={form.arrivalTime}
              onChange={handleChange}
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]"
            >
              <option value="">Select time slot</option>
              <option>06:00 - 08:00</option>
              <option>08:00 - 10:00</option>
              <option>10:00 - 12:00</option>
              <option>12:00 - 14:00</option>
              <option>14:00 - 16:00</option>
              <option>16:00 - 18:00</option>
            </select>
          </div>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Number of horses</p>
            <select
              name="horses"
              value={form.horses}
              onChange={handleChange}
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <p className="text-xs text-[#8B7E6A] mb-1.5">Stable type</p>
            <select
              name="stableType"
              value={form.stableType}
              onChange={handleChange}
              className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]"
            >
              <option value="single">Single box</option>
              <option value="double">Double box</option>
            </select>
          </div>
        </div>

        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-4 py-4 flex flex-col gap-4">
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-medium">Supply Order</p>
          <div className="flex justify-between items-center">
            <p className="text-sm">Hay (bales)</p>
            <select name="hay" value={form.hay} onChange={handleChange} className="bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]">
              {["0","1","2","3","4","5","6","7","8","9","10"].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Bedding (bags)</p>
            <select name="bedding" value={form.bedding} onChange={handleChange} className="bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]">
              {["0","1","2","3","4","5","6","7","8","9","10"].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Carrots (bags)</p>
            <select name="carrots" value={form.carrots} onChange={handleChange} className="bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2 text-sm text-[#E8E0D0] focus:outline-none focus:border-[#C9A84C]">
              {["0","1","2","3","4","5","6","7","8","9","10"].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-4 py-4">
          <p className="text-xs text-[#8B7E6A] mb-1.5">Additional notes</p>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Any special requirements..."
            rows={3}
            className="w-full bg-[#0F0D0B] border border-[#3D3526] rounded-lg px-3 py-2.5 text-sm text-[#E8E0D0] placeholder-[#5A4F3E] focus:outline-none focus:border-[#C9A84C] resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#C9A84C] text-[#0F0D0B] font-semibold text-sm rounded-xl py-4 hover:bg-[#E8D5A3] transition-colors"
        >
          Submit Request
        </button>

      </div>
    </main>
  );
}