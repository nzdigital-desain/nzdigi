import { useState, type FormEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { ScriptTitle, SectionHeader } from "./Sections";
import { photos } from "../../lib/invitation-data";
import { Reveal } from "./Reveal";
import { supabase } from "../../integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";

type Wish = {
  id: string;
  name: string;
  status: string;
  guests: number;
  message: string;
  created_at: string;
};

const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100, "Nama maksimal 100 karakter"),
  status: z.enum(["Hadir", "Tidak Hadir"], {
    errorMap: () => ({ message: "Pilih status kehadiran" }),
  }),
  guests: z.number().int().min(1).max(10),
  message: z.string().trim().max(500, "Ucapan maksimal 500 karakter"),
});



const formatTime = (iso: string) =>
  new Date(iso).toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });

export function Rsvp() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const queryClient = useQueryClient();

  const { data: wishes = [], isLoading } = useQuery<Wish[]>({
    queryKey: ["rsvps"],
    queryFn: async () => {
      const { data, error: err } = await supabase
        .from("rsvps")
        .select("id, name, status, guests, message, created_at")
        .order("created_at", { ascending: false });
      if (err || !data) return [];
      return data as Wish[];
    },
  });

  const mutation = useMutation({
    mutationFn: async (payload: z.infer<typeof rsvpSchema>) => {
      const { error: err } = await supabase.from("rsvps").insert({
        name: payload.name,
        status: payload.status,
        guests: payload.guests,
        message: payload.message ?? "",
      });
      if (err) throw err;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rsvps"] });
      setName("");
      setStatus("");
      setGuests("1");
      setMessage("");
      setDone(true);
    },
    onError: () => {
      setError("Gagal mengirim konfirmasi. Coba lagi.");
    },
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setDone(false);
    const parsed = rsvpSchema.safeParse({
      name,
      status,
      guests: status === "Hadir" ? Number(guests) : 1,
      message,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    mutation.mutate(parsed.data);
  };

  const hadirList = wishes.filter((w) => w.status === "Hadir");
  const totalPax = hadirList.reduce((sum, w) => sum + (w.guests || 1), 0);

  return (
    <section id="rsvp" className="bg-[#FFFDF9] px-5 py-14 sm:px-6 sm:py-16">
      <Reveal className="text-center">
        <SectionHeader title="Konfirmasi Kehadiran" />
      </Reveal>

      <Reveal className="mt-8 grid grid-cols-4 gap-2 text-center" delay={0.1}>
        {[
          [wishes.length, "Total Respons"],
          [hadirList.length, "Konfirmasi Hadir"],
          [totalPax, "Total Tamu (Pax)"],
          [wishes.length - hadirList.length, "Tidak Hadir"],
        ].map(([v, l]) => (
          <div key={l as string} className="rounded-2xl bg-white border border-[#E5C9A6] px-1 py-3 shadow-sm">
            <p className="font-serif text-xl text-[#5C3A1E] sm:text-2xl font-bold">{v}</p>
            <p className="mt-1 text-[10px] leading-tight text-[#4A3525]">{l}</p>
          </div>
        ))}
      </Reveal>

      <form
        onSubmit={submit}
        className="mt-8 rounded-3xl border border-[#E5C9A6] bg-white p-5 shadow-sm sm:p-6"
      >
        <p className="text-center text-sm leading-relaxed text-[#4A3525]">
          Mohon memilih status kehadiran Anda terlebih dahulu di bawah ini:
        </p>

        {/* Status Kehadiran */}
        <label className="mt-6 block text-sm font-medium text-[#5C3A1E]">
          Status Kehadiran <span className="text-[#5C3A1E]">*</span>
        </label>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setError("");
          }}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#5C3A1E] text-slate-800"
        >
          <option value="">Pilih status kehadiran...</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>

        {/* Nama Lengkap */}
        <label className="mt-4 block text-sm font-medium text-[#5C3A1E]">
          Nama Lengkap <span className="text-[#5C3A1E]">*</span>{" "}
          <span className="text-xs text-slate-400">({name.length}/100)</span>
        </label>
        <input
          value={name}
          maxLength={100}
          placeholder="Masukkan nama lengkap Anda"
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#5C3A1E] text-slate-800"
        />

        {/* Jumlah Tamu — hanya saat Hadir */}
        {status === "Hadir" && (
          <>
            <label className="mt-4 block text-sm font-medium text-[#5C3A1E]">Jumlah Tamu</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#5C3A1E] text-slate-800"
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
            </select>
          </>
        )}

        {/* Ucapan */}
        <label className="mt-4 block text-sm font-medium text-[#5C3A1E]">
          Ucapan/Pesan <span className="text-xs text-slate-400">({message.length}/500)</span>
        </label>
        <textarea
          value={message}
          maxLength={500}
          rows={4}
          placeholder="Tulis ucapan atau pesan Anda..."
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#5C3A1E] text-slate-800"
        />

        {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="rounded-full bg-[#5C3A1E] px-8 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#7A522E] active:scale-95 disabled:opacity-60"
          >
            {mutation.isPending ? "Mengirim..." : "Kirim Konfirmasi"}
          </button>
        </div>

        {done && !error && (
          <p className="mt-4 text-center text-sm text-emerald-600 font-medium">
            Terima kasih, konfirmasi Anda sudah tersimpan.
          </p>
        )}

        {isLoading ? (
          <p className="mt-6 text-center text-sm text-slate-400">Memuat ucapan...</p>
        ) : (
          <ul className="mt-6 divide-y divide-slate-100">
            {wishes.map((w) => (
              <li key={w.id} className="flex gap-3 py-4">
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-800">
                    {w.name}
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium text-white ${
                        w.status === "Hadir" ? "bg-emerald-600" : "bg-[#5C3A1E]"
                      }`}
                    >
                      {w.status}
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-400">{formatTime(w.created_at)}</p>
                  {w.message && <p className="mt-1 text-sm text-slate-700">{w.message}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
}
