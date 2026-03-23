import Link from "next/link";

const alerts = [
  {
    id: 1,
    type: "urgent",
    title: "Class 3 running 20 min early",
    message: "Class 3 (1.20m Speed) will now start at 13:40 instead of 14:00. Please be at the warm-up ring by 13:00.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "reminder",
    title: "Course walk — Grand Prix",
    message: "Course walk for the Grand Prix (1.45m) begins in 30 minutes at the Main Arena. All riders must attend.",
    time: "25 min ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "Start list published — Class 5",
    message: "The official start list for Class 5 (1.30m) is now available. Check your start number at the secretary's office.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    type: "success",
    title: "Stable request confirmed",
    message: "Your stable booking has been confirmed. 2 boxes assigned at Stable Block B. Collect keys at Gate A on arrival.",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "info",
    title: "Supply order received",
    message: "Your order (hay × 4, bedding × 2, carrots × 1) has been received and will be ready at the stable office from 07:00.",
    time: "Yesterday 20:00",
    read: true,
  },
  {
    id: 6,
    type: "info",
    title: "Welcome to Phoenix Riders",
    message: "Welcome to the Year-End Tournament! Ground plan, stable map and WiFi details are available in the Event Info section.",
    time: "Yesterday 08:00",
    read: true,
  },
];

const typeStyles: Record<string, { dot: string; badge: string; label: string }> = {
  urgent:   { dot: "bg-red-400",         badge: "bg-red-900/30 text-red-300 border-red-700/40",       label: "Urgent" },
  reminder: { dot: "bg-yellow-400",      badge: "bg-yellow-900/30 text-yellow-300 border-yellow-700/40", label: "Reminder" },
  info:     { dot: "bg-[#C9A84C]",       badge: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30",  label: "Info" },
  success:  { dot: "bg-emerald-400",     badge: "bg-emerald-900/30 text-emerald-300 border-emerald-700/40", label: "Confirmed" },
};

export default function Alerts() {
  const unread = alerts.filter((a) => !a.read).length;

  return (
    <main className="min-h-screen bg-[#0F0D0B] text-[#E8E0D0] px-4 pb-12">
      {/* Header */}
      <div className="sticky top-0 bg-[#0F0D0B] border-b border-[#3D3526] px-2 py-4 flex items-center gap-3 z-10">
        <Link href="/" className="text-[#C9A84C] text-sm">← Back</Link>
        <div className="flex-1 text-center">
          <p className="text-xs text-[#8B7E6A] tracking-widest uppercase">Phoenix Riders</p>
          <h1 className="text-base font-semibold">Alerts</h1>
        </div>
        <div className="w-12 text-right">
          {unread > 0 && (
            <span className="text-xs bg-red-500 text-white rounded-full px-2 py-0.5 font-medium">
              {unread}
            </span>
          )}
        </div>
      </div>

      {/* Unread summary */}
      {unread > 0 && (
        <div className="mx-2 mt-4 bg-[#2A2318] border border-[#C9A84C33] rounded-xl px-4 py-3">
          <p className="text-xs text-[#C9A84C] font-medium tracking-wide">
            {unread} unread alert{unread > 1 ? "s" : ""} — tap each one to read
          </p>
        </div>
      )}

      {/* Alert list */}
      <div className="mt-4 mx-2 flex flex-col gap-3">
        {alerts.map((alert) => {
          const style = typeStyles[alert.type];
          return (
            <div
              key={alert.id}
              className={`bg-[#2A2318] border rounded-xl px-4 py-4 ${
                alert.read ? "border-[#3D3526] opacity-60" : "border-[#3D3526]"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Dot */}
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${style.dot} ${alert.read ? "opacity-40" : ""}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className={`text-sm font-medium ${alert.read ? "text-[#8B7E6A]" : "text-[#E8E0D0]"}`}>
                      {alert.title}
                    </p>
                    <span className={`text-[10px] border px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                      {style.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#8B7E6A] leading-relaxed">{alert.message}</p>
                  <p className="text-[10px] text-[#5A4F3E] mt-2">{alert.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-center text-[10px] text-[#5A4F3E] mt-8 tracking-wide">
        Notifications are sent by the Phoenix Riders organisation team
      </p>
    </main>
  );
}