import React, { useState, useEffect, useMemo } from "react";
import {
  Send,
  Copy,
  Check,
  Trash2,
  Search,
  RotateCcw,
  Users,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  UserPlus,
} from "lucide-react";
import {
  BRIDE_FULL,
  GROOM_FULL,
  BRIDE_SHORT,
  GROOM_SHORT,
} from "../lib/invitation-data";

interface Guest {
  id: string;
  name: string;
  sent: boolean;
  sentAt?: string;
}

const DEFAULT_TEMPLATE = `Kepada Yth.
Bapak/Ibu/Saudara/i
*{nama}*

_Assalamualaikum Warahmatullahi Wabarakaatuh_
Dengan memohon rahmat dan ridho Allah SWT, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami :

👰🏻 *${BRIDE_FULL}*
dengan
🤵🏻 *${GROOM_FULL}*

Untuk informasi detail mengenai acara, silahkan kunjungi link undangan digital kami di bawah ini :
*{link}*

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
Atas kehadiran dan doa restunya kami ucapkan terima kasih.

Wassalamualaikum Warahmatullahi Wabarakaatuh

Hormat kami,
${BRIDE_SHORT} & ${GROOM_SHORT}`;

const STORAGE_KEY_GUESTS = "tia_agung_guests_list";
const STORAGE_KEY_TEMPLATE = "tia_agung_msg_template";

export const KirimUndangan = () => {
  // Base URL undangan
  const [baseUrl, setBaseUrl] = useState(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
        return `${origin}/pernikahantia`;
      }
    }
    return "https://nzdigi.vercel.app/pernikahantia";
  });

  const [bulkInput, setBulkInput] = useState("");
  const [guests, setGuests] = useState<Guest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_GUESTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [template, setTemplate] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TEMPLATE);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_TEMPLATE;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "pending" | "sent">("all");
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_GUESTS, JSON.stringify(guests));
    } catch {
      // ignore
    }
  }, [guests]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TEMPLATE, template);
    } catch {
      // ignore
    }
  }, [template]);

  // Tambahkan daftar nama sekaligus
  const handleAddBulk = () => {
    if (!bulkInput.trim()) return;

    const rawLines = bulkInput
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    // Hapus nomor awalan jika dicopy dari list bernomor (misal: "1. Bpk Budi" -> "Bpk Budi")
    const cleanedNames = rawLines.map((name) =>
      name.replace(/^\d+[\.\)\-]\s*/, "").trim()
    );

    const existingNamesSet = new Set(
      guests.map((g) => g.name.toLowerCase().trim())
    );

    const newGuests: Guest[] = [];
    cleanedNames.forEach((name) => {
      if (name && !existingNamesSet.has(name.toLowerCase())) {
        newGuests.push({
          id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          name,
          sent: false,
        });
        existingNamesSet.add(name.toLowerCase());
      }
    });

    if (newGuests.length > 0) {
      setGuests((prev) => [...newGuests, ...prev]);
      setBulkInput("");
    } else {
      alert("Semua nama yang dimasukkan sudah ada di daftar.");
    }
  };

  // Generate link undangan per tamu
  const getGuestLink = (guestName: string) => {
    return `${baseUrl}?to=${encodeURIComponent(guestName)}`;
  };

  // Generate pesan lengkap per tamu
  const getGuestMessage = (guestName: string) => {
    const link = getGuestLink(guestName);
    return template.replace(/\{nama\}/g, guestName).replace(/\{link\}/g, link);
  };

  // Kirim WhatsApp langsung
  const handleSendWA = (guest: Guest) => {
    const message = getGuestMessage(guest.name);
    const text = encodeURIComponent(message);
    const webUrl = `https://api.whatsapp.com/send?text=${text}`;
    const mobileUrl = `whatsapp://send?text=${text}`;

    // Tandai otomatis sudah dikirim
    toggleSent(guest.id, true);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = mobileUrl;
      setTimeout(() => {
        window.location.href = webUrl;
      }, 1500);
    } else {
      window.open(webUrl, "_blank");
    }
  };

  // Toggle status kirim
  const toggleSent = (id: string, forceStatus?: boolean) => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id === id) {
          const nextSent = forceStatus !== undefined ? forceStatus : !g.sent;
          return {
            ...g,
            sent: nextSent,
            sentAt: nextSent ? new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) : undefined,
          };
        }
        return g;
      })
    );
  };

  // Hapus 1 tamu
  const handleDeleteGuest = (id: string) => {
    setGuests((prev) => prev.filter((g) => g.id !== id));
  };

  // Hapus semua tamu
  const handleClearAll = () => {
    if (window.confirm("Yakin ingin menghapus seluruh daftar nama tamu?")) {
      setGuests([]);
    }
  };

  // Salin link per tamu
  const handleCopyLink = (guest: Guest) => {
    const link = getGuestLink(guest.name);
    navigator.clipboard.writeText(link);
    setCopiedId(`link-${guest.id}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Salin pesan WhatsApp per tamu
  const handleCopyMessage = (guest: Guest) => {
    const message = getGuestMessage(guest.name);
    navigator.clipboard.writeText(message);
    setCopiedId(`msg-${guest.id}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Salin semua link tamu untuk disimpan/backup
  const handleCopyAllLinks = () => {
    if (guests.length === 0) return;
    const textAll = guests
      .map((g, idx) => `${idx + 1}. ${g.name}\n${getGuestLink(g.name)}`)
      .join("\n\n");
    navigator.clipboard.writeText(textAll);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  // Filter tamu
  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      const matchSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchSearch) return false;
      if (filterTab === "pending") return !g.sent;
      if (filterTab === "sent") return g.sent;
      return true;
    });
  }, [guests, searchQuery, filterTab]);

  const sentCount = guests.filter((g) => g.sent).length;
  const progressPercent = guests.length > 0 ? Math.round((sentCount / guests.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#4A3525] py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-[#FFEED6] border border-[#E5C9A6] rounded-3xl p-6 sm:p-8 text-center shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#7A522E] font-semibold">
            PENGELOLA UNDANGAN PERNIKAHAN
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#5C3A1E]">
            {BRIDE_SHORT} &amp; {GROOM_SHORT}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#7A522E] max-w-md mx-auto">
            Generate link undangan banyak sekaligus, kirim otomatis via WhatsApp, dan pantau status terkirim secara praktis.
          </p>
          
          {/* Base URL configuration */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white/80 border border-[#E5C9A6] px-3.5 py-1.5 rounded-full text-xs text-[#5C3A1E]">
            <span className="font-semibold">Link Undangan:</span>
            <input
              type="text"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              className="bg-transparent border-none outline-none text-[#5C3A1E] font-mono text-[11px] w-56 sm:w-72"
            />
          </div>
        </div>

        {/* Statistik Pengiriman */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white border border-[#E5C9A6] rounded-2xl p-4 text-center shadow-sm">
            <Users className="size-5 mx-auto text-[#5C3A1E] opacity-75" />
            <p className="text-xl sm:text-2xl font-bold font-serif text-[#5C3A1E] mt-1">
              {guests.length}
            </p>
            <p className="text-[11px] text-[#7A522E]">Total Tamu</p>
          </div>
          <div className="bg-white border border-[#E5C9A6] rounded-2xl p-4 text-center shadow-sm">
            <Clock className="size-5 mx-auto text-amber-600 opacity-75" />
            <p className="text-xl sm:text-2xl font-bold font-serif text-amber-700 mt-1">
              {guests.length - sentCount}
            </p>
            <p className="text-[11px] text-[#7A522E]">Belum Dikirim</p>
          </div>
          <div className="bg-white border border-[#E5C9A6] rounded-2xl p-4 text-center shadow-sm">
            <CheckCircle2 className="size-5 mx-auto text-emerald-600 opacity-75" />
            <p className="text-xl sm:text-2xl font-bold font-serif text-emerald-700 mt-1">
              {sentCount}
            </p>
            <p className="text-[11px] text-[#7A522E]">Sudah Dikirim ({progressPercent}%)</p>
          </div>
        </div>

        {/* Input Massal (Bulk Input) */}
        <div className="bg-white border border-[#E5C9A6] rounded-3xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-[#5C3A1E] font-semibold text-sm">
            <UserPlus className="size-4" />
            <span>Tambah Nama Tamu Sekaligus (Banyak)</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">
            Tulis atau tempel daftar nama dari Excel / WhatsApp. <b>1 baris untuk 1 nama tamu</b>.
          </p>

          <textarea
            value={bulkInput}
            onChange={(e) => setBulkInput(e.target.value)}
            rows={4}
            placeholder={`Contoh:\nBapak Ahmad & Keluarga\nIbu Siti Fatimah\nSahabat Tia (Dina, Rani, Nisa)\nOm Hendra & Tante`}
            className="w-full rounded-2xl border border-slate-200 p-3.5 text-sm outline-none focus:border-[#5C3A1E] focus:ring-1 focus:ring-[#5C3A1E] placeholder:text-slate-400"
          />

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {bulkInput.trim() ? `${bulkInput.trim().split("\n").filter((l) => l.trim()).length} nama terdeteksi` : "Tempel nama di atas"}
            </span>
            <button
              onClick={handleAddBulk}
              disabled={!bulkInput.trim()}
              className="bg-[#5C3A1E] hover:bg-[#7A522E] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm transition active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              ➕ Tambahkan ke Daftar
            </button>
          </div>
        </div>

        {/* Pengaturan Template Pesan (Collapsible) */}
        <div className="bg-white border border-[#E5C9A6] rounded-3xl p-5 sm:p-6 shadow-sm">
          <button
            onClick={() => setShowTemplateEditor(!showTemplateEditor)}
            className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#5C3A1E]"
          >
            <div className="flex items-center gap-2">
              <FileText className="size-4" />
              <span>Kustomisasi Teks Pesan WhatsApp</span>
            </div>
            {showTemplateEditor ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>

          {showTemplateEditor && (
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
              <p className="text-xs text-slate-500">
                Gunakan variabel <code className="bg-[#FFEED6] text-[#5C3A1E] px-1.5 py-0.5 rounded font-bold">{"{nama}"}</code> untuk nama tamu dan <code className="bg-[#FFEED6] text-[#5C3A1E] px-1.5 py-0.5 rounded font-bold">{"{link}"}</code> untuk link undangan otomatis.
              </p>
              <textarea
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                rows={9}
                className="w-full rounded-2xl border border-slate-200 p-3 text-xs font-mono outline-none focus:border-[#5C3A1E] focus:ring-1 focus:ring-[#5C3A1E]"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => setTemplate(DEFAULT_TEMPLATE)}
                  className="text-xs text-slate-500 hover:text-[#5C3A1E] underline flex items-center gap-1"
                >
                  <RotateCcw className="size-3" /> Reset ke Template Awal
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Toolbar Pencarian & Filter */}
        <div className="bg-white border border-[#E5C9A6] rounded-3xl p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama tamu..."
                className="w-full rounded-full border border-slate-200 pl-9 pr-4 py-2 text-xs outline-none focus:border-[#5C3A1E]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#FFEED6]/60 p-1 rounded-full text-xs w-full sm:w-auto justify-center">
              <button
                onClick={() => setFilterTab("all")}
                className={`px-3 py-1.5 rounded-full font-medium transition ${
                  filterTab === "all" ? "bg-[#5C3A1E] text-white shadow-sm" : "text-[#7A522E] hover:text-[#5C3A1E]"
                }`}
              >
                Semua ({guests.length})
              </button>
              <button
                onClick={() => setFilterTab("pending")}
                className={`px-3 py-1.5 rounded-full font-medium transition ${
                  filterTab === "pending" ? "bg-amber-600 text-white shadow-sm" : "text-[#7A522E] hover:text-amber-700"
                }`}
              >
                Belum ({guests.length - sentCount})
              </button>
              <button
                onClick={() => setFilterTab("sent")}
                className={`px-3 py-1.5 rounded-full font-medium transition ${
                  filterTab === "sent" ? "bg-emerald-600 text-white shadow-sm" : "text-[#7A522E] hover:text-emerald-700"
                }`}
              >
                Sudah ({sentCount})
              </button>
            </div>
          </div>

          {/* Aksi Tambahan */}
          {guests.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
              <button
                onClick={handleCopyAllLinks}
                className="inline-flex items-center gap-1.5 text-[#5C3A1E] hover:text-[#7A522E] font-medium bg-[#FFEED6]/70 px-3 py-1.5 rounded-full transition"
              >
                {copiedAll ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                {copiedAll ? "Semua Link Tersalin!" : "Salin Semua Link Tamu"}
              </button>

              <button
                onClick={handleClearAll}
                className="text-red-500 hover:text-red-700 font-medium px-2 py-1 transition"
              >
                Hapus Seluruh Daftar
              </button>
            </div>
          )}
        </div>

        {/* Daftar Tamu Undangan */}
        <div className="space-y-2.5">
          {filteredGuests.length === 0 ? (
            <div className="bg-white border border-[#E5C9A6] rounded-3xl p-10 text-center text-slate-400 shadow-sm">
              <Users className="size-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium">Belum ada data tamu</p>
              <p className="text-xs text-slate-400 mt-1">
                Silakan tempel nama-nama tamu pada kotak di atas untuk mulai generate undangan.
              </p>
            </div>
          ) : (
            filteredGuests.map((guest, index) => (
              <div
                key={guest.id}
                className={`bg-white border rounded-2xl p-4 transition-all duration-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  guest.sent ? "border-emerald-200 bg-emerald-50/20" : "border-[#E5C9A6]"
                }`}
              >
                {/* Info Tamu */}
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                  <div
                    onClick={() => toggleSent(guest.id)}
                    className={`size-7 rounded-full shrink-0 flex items-center justify-center cursor-pointer text-xs font-bold transition ${
                      guest.sent
                        ? "bg-emerald-600 text-white"
                        : "border-2 border-slate-300 text-slate-400 hover:border-emerald-500"
                    }`}
                    title="Klik untuk ubah status sudah/belum kirim"
                  >
                    {guest.sent ? <Check className="size-4" /> : index + 1}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-slate-800 truncate">
                        {guest.name}
                      </p>
                      {guest.sent && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 font-medium px-2 py-0.5 rounded-full shrink-0">
                          Terkirim {guest.sentAt ? `(${guest.sentAt})` : ""}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono truncate mt-0.5 max-w-xs sm:max-w-md">
                      {getGuestLink(guest.name)}
                    </p>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  {/* Kirim WhatsApp */}
                  <button
                    onClick={() => handleSendWA(guest)}
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm transition active:scale-95"
                    title="Kirim Pesan via WhatsApp"
                  >
                    <Send className="size-3.5" />
                    <span>Kirim WA</span>
                  </button>

                  {/* Salin Link */}
                  <button
                    onClick={() => handleCopyLink(guest)}
                    className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
                    title="Salin Link Undangan Saja"
                  >
                    {copiedId === `link-${guest.id}` ? (
                      <Check className="size-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="size-3.5" />
                    )}
                  </button>

                  {/* Salin Pesan Lengkap */}
                  <button
                    onClick={() => handleCopyMessage(guest)}
                    className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
                    title="Salin Teks Pesan Lengkap"
                  >
                    {copiedId === `msg-${guest.id}` ? (
                      <Check className="size-3.5 text-emerald-600" />
                    ) : (
                      <FileText className="size-3.5" />
                    )}
                  </button>

                  {/* Buka Link Langsung */}
                  <a
                    href={getGuestLink(guest.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
                    title="Buka Undangan"
                  >
                    <ExternalLink className="size-3.5" />
                  </a>

                  {/* Hapus */}
                  <button
                    onClick={() => handleDeleteGuest(guest.id)}
                    className="p-2 rounded-full border border-slate-200 hover:bg-red-50 text-slate-400 hover:text-red-500 transition"
                    title="Hapus Nama"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 pt-4 pb-8">
          Powered by NZ Digital &bull; Undangan Pernikahan {BRIDE_SHORT} &amp; {GROOM_SHORT}
        </div>
      </div>
    </div>
  );
};

export default KirimUndangan;
