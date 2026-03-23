"use client";
import Link from "next/link";

export default function Info() {
  return (
    <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] px-4 pb-12">
      <div className="sticky top-0 bg-[#0F0D0B] border-b border-[#3D3526] px-2 py-4 flex items-center gap-3 z-10">
        <Link href="/" className="text-[#C9A84C] text-sm">Back</Link>
        <div className="flex-1 text-center">
          <p className="text-xs text-[#8B7E6A] tracking-widest uppercase">Phoenix Riders</p>
          <h1 className="text-base font-semibold">Event Info</h1>
        </div>
        <div className="w-12" />
      </div>

      <div className="mx-2 mt-4 bg-[#2A2318] border border-[#3D3526] rounded-xl px-4 py-4">
        <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-medium mb-2">Venue</p>
        <p className="text-sm font-semibold">Phoenix Riders Equestrian Centre</p>
        <p className="text-xs text-[#8B7E6A] mt-1">DN1 Nr. 12, Baicoi, Jud. Prahova</p>
      </div>

      <div className="mx-2 mt-4 bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-[#3D3526]">
          <p className="text-xs text-[#8B7E6A]">Veterinarian</p>
          <p className="text-sm font-medium mt-0.5">Dr. Andreea Popescu</p>
          <a href="tel:+40721234567" className="text-xs text-[#C9A84C] mt-1 block">+40 721 234 567</a>
        </div>
        <div className="px-4 py-3 border-b border-[#3D3526]">
          <p className="text-xs text-[#8B7E6A]">Farrier</p>
          <p className="text-sm font-medium mt-0.5">Ion Dumitrescu</p>
          <a href="tel:+40740345678" className="text-xs text-[#C9A84C] mt-1 block">+40 740 345 678</a>
        </div>
        <div className="px-4 py-3 border-b border-[#3D3526]">
          <p className="text-xs text-[#8B7E6A]">Stable Manager</p>
          <p className="text-sm font-medium mt-0.5">Maria Constantin</p>
          <a href="tel:+40756456789" className="text-xs text-[#C9A84C] mt-1 block">+40 756 456 789</a>
        </div>
        <div className="px-4 py-3 border-b border-[#3D3526]">
          <p className="text-xs text-[#8B7E6A]">Event Physician</p>
          <p className="text-sm font-medium mt-0.5">Dr. Radu Ionescu</p>
          <a href="tel:+40723567890" className="text-xs text-[#C9A84C] mt-1 block">+40 723 567 890</a>
        </div>
        <div className="px-4 py-3">
          <p className="text-xs text-[#8B7E6A]">Competition Secretary</p>
          <p className="text-sm font-medium mt-0.5">Alexandra Popa</p>
          <a href="tel:+40734678901" className="text-xs text-[#C9A84C] mt-1 block">+40 734 678 901</a>
        </div>
      </div>

      <div className="mx-2 mt-4 bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-[#3D3526] flex justify-between">
          <p className="text-xs text-[#8B7E6A]">WiFi</p>
          <p className="text-xs text-[#E8E0D0]">PhoenixRiders_Event</p>
        </div>
        <div className="px-4 py-3 border-b border-[#3D3526] flex justify-between">
          <p className="text-xs text-[#8B7E6A]">Truck parking</p>
          <p className="text-xs text-[#E8E0D0]">Lot D - Gate 2</p>
        </div>
        <div className="px-4 py-3 border-b border-[#3D3526] flex justify-between">
          <p className="text-xs text-[#8B7E6A]">Hay and bedding</p>
          <p className="text-xs text-[#E8E0D0]">Stable office 06:00</p>
        </div>
        <div className="px-4 py-3 flex justify-between">
          <p className="text-xs text-[#8B7E6A]">Fuel nearby</p>
          <p className="text-xs text-[#E8E0D0]">OMV - 2km on DN1</p>
        </div>
      </div>
    </main>
  );
}