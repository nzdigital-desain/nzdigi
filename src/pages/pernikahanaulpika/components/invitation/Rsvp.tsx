import { useState, type FormEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { ScriptTitle } from "./Sections";
import { photos } from "@/pages/pernikahanaulpika/lib/invitation-data";
import { Reveal } from "./Reveal";
import { supabase } from "@/pages/pernikahanaulpika/integrations/supabase/client";

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

const LOCAL_STORAGE_KEY = "nzdigi_rsvps_aulpika";

const getLocalWishes = (): Wish[] => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveLocalWish = (wish: Wish) => {
  try {
    const existing = getLocalWishes();
    const updated = [wish, ...existing];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save to localStorage", e);
  }
};

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
      const local = getLocalWishes();
      try {
        const { data, error: err } = await supabase
          .from("rsvps")
          .select("id, name, status, guests, message, created_at")
          .order("created_at", { ascending: false });
        if (err || !data) return local;

        const remoteIds = new Set(data.map((d) => d.id));
        const uniqueLocal = local.filter((l) => !remoteIds.has(l.id));
        return [...uniqueLocal, ...(data as Wish[])];
      } catch {
        return local;
      }
    },
  });

  const mutation = useMutation({
    mutationFn: async (payload: z.infer<typeof rsvpSchema>) => {
      const newWish: Wish = {
        id: "local-" + Date.now(),
        name: payload.name,
        status: payload.status,
        guests: payload.guests,
        message: payload.message,
        created_at: new Date().toISOString(),
      };

      saveLocalWish(newWish);

      try {
        await supabase.from("rsvps").insert(payload);
      } catch (err) {
        console.warn("Supabase insert skipped/offline:", err);
      }
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
      queryClient.invalidateQueries({ queryKey: ["rsvps"] });
      setName("");
      setStatus("");
      setGuests("1");
      setMessage("");
      setDone(true);
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
    <section id="rsvp" className="bg-cream px-5 py-14 sm:px-6 sm:py-16">
      <Reveal className="text-center">
        <ScriptTitle text="Konfirmasi Kehadiran" className="text-blush-deep text-3xl sm:text-4xl" />
        <div className="mt-1">
          <ScriptTitle text="& Ucapan" className="text-blush-deep text-3xl sm:text-4xl" />
        </div>
      </Reveal>

      <Reveal className="mt-8 grid grid-cols-4 gap-2 text-center" delay={0.1}>
        {[
          [wishes.length, "Total Respons"],
          [hadirList.length, "Konfirmasi Hadir"],
          [totalPax, "Total Tamu (Pax)"],
          [wishes.length - hadirList.length, "Tidak Hadir"],
        ].map(([v, l]) => (
          <div key={l as string} className="rounded-2xl bg-blush-soft/30 px-1 py-3">
            <p className="font-serif text-xl text-blush-deep sm:text-2xl">{v}</p>
            <p className="mt-1 text-[10px] leading-tight text-ink/70">{l}</p>
          </div>
        ))}
      </Reveal>

      <form
        onSubmit={submit}
        className="mt-8 rounded-3xl border border-blush-soft/50 bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6"
      >
        <p className="text-center text-sm leading-relaxed text-ink/80">
          Mohon mengisi form di bawah ini untuk konfirmasi kehadiran sekaligus menyampaikan ucapan
          Anda.
        </p>

        <label className="mt-6 block text-sm font-medium">
          Nama Lengkap <span className="text-blush-deep">*</span>{" "}
          <span className="text-xs text-ink/50">({name.length}/100)</span>
        </label>
        <input
          value={name}
          maxLength={100}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-lg border border-blush-soft/70 px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
        />

        <label className="mt-4 block text-sm font-medium">
          Status Kehadiran <span className="text-blush-deep">*</span>
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-2 w-full rounded-lg border border-blush-soft/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
        >
          <option value="">Pilih status kehadiran</option>
          <option>Hadir</option>
          <option>Tidak Hadir</option>
        </select>

        {status === "Hadir" && (
          <>
            <label className="mt-4 block text-sm font-medium">Jumlah Tamu</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 w-full rounded-lg border border-blush-soft/70 bg-white px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </>
        )}

        <label className="mt-4 block text-sm font-medium">
          Ucapan/Pesan <span className="text-xs text-ink/50">({message.length}/500)</span>
        </label>
        <textarea
          value={message}
          maxLength={500}
          rows={4}
          placeholder="Tulis ucapan atau pesan Anda..."
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none rounded-lg border border-blush-soft/70 px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
        />

        {error && <p className="mt-3 text-center text-sm text-blush-deep">{error}</p>}
        {done && !error && (
          <p className="mt-3 text-center text-sm text-emerald-600">
            Terima kasih, konfirmasi Anda sudah tersimpan.
          </p>
        )}

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="rounded-full bg-blush-soft px-7 py-2.5 text-sm text-cream transition-all duration-300 hover:bg-blush-deep active:scale-95 disabled:opacity-60"
          >
            {mutation.isPending ? "Mengirim..." : "Kirim Konfirmasi"}
          </button>
        </div>

        {isLoading ? (
          <p className="mt-6 text-center text-sm text-ink/50">Memuat ucapan...</p>
        ) : (
          <ul className="mt-6 divide-y divide-blush-soft/40">
            {wishes.map((w) => (
              <li key={w.id} className="flex gap-3 py-4">
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                    {w.name}
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium text-cream ${
                        w.status === "Hadir" ? "bg-emerald-500" : "bg-blush-deep"
                      }`}
                    >
                      {w.status}
                    </span>
                  </p>
                  <p className="text-[11px] text-ink/50">{formatTime(w.created_at)}</p>
                  {w.message && <p className="mt-1 text-sm text-ink/80">{w.message}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
}
