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

      <div className="mx-2 mt-4 bg-[#2A2318] border border-[#C9A84C33] rounded-xl px-4 py-4">
        <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-1">Venue</p>
        <p className="text-base font-semibold">Phoenix Riders Equestrian Centre</p>
        <p className="text-xs text-[#8B7E6A] mt-1">Luxury Equestrian Center and Country Club</p>
        <p className="text-xs text-[#8B7E6A]">DN1 Nr. 12, Baicoi, Jud. Prahova</p>
        <a href="https://maps.google.com/?q=Phoenix+Riders+Baicoi+Prahova" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-[#C9A84C] border border-[#C9A84C44] rounded-lg px-3 py-1.5">
          Open in Maps
        </a>
      </div>

      <div className="mx-2 mt-4 grid grid-cols-3 gap-2">
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-3 text-center">
          <p className="text-xl mb-1">🏟️</p>
          <p className="text-[10px] text-[#8B7E6A] leading-tight">3 arenas</p>
        </div>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-3 text-center">
          <p className="text-xl mb-1">🐎</p>
          <p className="text-[10px] text-[#8B7E6A] leading-tight">Intl stables</p>
        </div>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-3 text-center">
          <p className="text-xl mb-1">🅿️</p>
          <p className="text-[10px] text-[#8B7E6A] leading-tight">Truck parking</p>
        </div>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-3 text-center">
          <p className="text-xl mb-1">🍽️</p>
          <p className="text-[10px] text-[#8B7E6A] leading-tight">Restaurant</p>
        </div>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-3 text-center">
          <p className="text-xl mb-1">🏥</p>
          <p className="text-[10px] text-[#8B7E6A] leading-tight">Medical team</p>
        </div>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl px-3 py-3 text-center">
          <p className="text-xl mb-1">📺</p>
          <p className="text-[10px] text-[#8B7E6A] leading-tight">Live stream</p>
        </div>
      </div>

      <div className="mx-2 mt-5">
        <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-3 px-1">Key Contacts</p>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">

          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-red-900/40 text-red-300">SF</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Serban Fratila</p>
              <p className="text-xs text-[#8B7E6A]">Event Director</p>
              <p className="text-[10px] text-[#5A4F3E] mt-0.5">Available all hours</p>
            </div>
            <a href="tel:+40721945999" className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">Call</a>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-blue-900/40 text-blue-300">AP</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Dr. Andrei Popa</p>
              <p className="text-xs text-[#8B7E6A]">Event Veterinarian</p>
              <p className="text-[10px] text-[#5A4F3E] mt-0.5">07:00 - 20:00</p>
            </div>
            <span className="shrink-0 text-[10px] text-[#5A4F3E] border border-[#3D3526] px-2 py-1 rounded-lg">On site</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-emerald-900/40 text-emerald-300">PJ</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Paul Josan</p>
              <p className="text-xs text-[#8B7E6A]">Farrier</p>
              <p className="text-[10px] text-[#5A4F3E] mt-0.5">08:00 - 18:00</p>
            </div>
            <a href="tel:+40740559531" className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">Call</a>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3D3526]">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-yellow-900/40 text-yellow-300">MP</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Mirela Petrulian</p>
              <p className="text-xs text-[#8B7E6A]">Stable Manager</p>
              <p className="text-[10px] text-[#5A4F3E] mt-0.5">06:00 - 22:00</p>
            </div>
            <a href="tel:+40721945999" className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">Call</a>
          </div>

          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-purple-900/40 text-purple-300">LH</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Laura Hotnog</p>
              <p className="text-xs text-[#8B7E6A]">Show Secretary</p>
              <p className="text-[10px] text-[#5A4F3E] mt-0.5">07:30 - 19:00</p>
            </div>
            <a href="tel:+40722810199" className="shrink-0 bg-[#C9A84C15] border border-[#C9A84C33] text-[#C9A84C] text-xs px-3 py-1.5 rounded-lg">Call</a>
          </div>

        </div>
      </div>

      <div className="mx-2 mt-5">
        <p className="text-xs text-[#C9A84C] tracking-widest uppercase font-medium mb-3 px-1">Logistics</p>
        <div className="bg-[#2A2318] border border-[#3D3526] rounded-xl overflow-hidden">
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Address</p>
            <p className="text-xs text-[#E8E0D0] text-right">DN1 Nr. 12, Baicoi, Jud. Prahova</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Phoenix Grand Arena</p>
            <p className="text-xs text-[#E8E0D0] text-right">100 x 80m - Outdoor</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Gusto Arena</p>
            <p className="text-xs text-[#E8E0D0] text-right">90 x 45m - Outdoor</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Warm-up</p>
            <p className="text-xs text-[#E8E0D0] text-right">80 x 22m - Indoor</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Truck parking</p>
            <p className="text-xs text-[#E8E0D0] text-right">On site - unlimited</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Hay and bedding</p>
            <p className="text-xs text-[#E8E0D0] text-right">Secretariat - from 06:00</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3 border-b border-[#3D3526]">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">WiFi</p>
            <p className="text-xs text-[#E8E0D0] text-right">RIDERSGUEST - No password</p>
          </div>
          <div className="flex justify-between items-start gap-4 px-4 py-3">
            <p className="text-xs text-[#8B7E6A] shrink-0 w-28">Entries</p>
            <p className="text-xs text-[#E8E0D0] text-right">livejumping.com</p>
          </div>
        </div>
      </div>

      <div className="mx-2 mt-5 text-center">
        <a href="https://www.phoenixriders.ro" target="_blank" rel="noopener noreferrer" className="text-xs text-[#C9A84C] tracking-widest uppercase">
          phoenixriders.ro
        </a>
      </div>
    </main>
  );
}