import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const WishesSection = () => {
  const [wishes, setWishes] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("Hadir");

  const [wanita, setWanita] = useState({ name: "", attendance: "" });
  const [pria, setPria] = useState({ name: "", attendance: "" });

  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setWishes(data);
  };

  // 🔥 KIRIM UCAPAN
  const handleWish = async (e: React.FormEvent) => {
    e.preventDefault();

    await supabase.from("wishes").insert([
      {
        name,
        message,
        attendance,
        rsvp_to: "wish",
      },
    ]);

    setName("");
    setMessage("");
    fetchWishes();
  };

  // 🔥 RSVP WANITA
  const handleWanita = async () => {
    await supabase.from("wishes").insert([
      {
        name: wanita.name,
        attendance: wanita.attendance,
        rsvp_to: "wanita",
      },
    ]);

    setWanita({ name: "", attendance: "" });
    alert("RSVP wanita terkirim 💌");
  };

  // 🔥 RSVP PRIA
  const handlePria = async () => {
    await supabase.from("wishes").insert([
      {
        name: pria.name,
        attendance: pria.attendance,
        rsvp_to: "pria",
      },
    ]);

    setPria({ name: "", attendance: "" });
    alert("RSVP pria terkirim 💌");
  };

  const Radio = ({ label, value, selected, onChange }: any) => (
    <label className="flex gap-2 text-sm">
      <input
        type="radio"
        value={value}
        checked={selected === value}
        onChange={onChange}
      />
      {label}
    </label>
  );

  return (
    <section
      className="py-20 px-6"
      style={{
        backgroundImage: "url('/images/ornament-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <motion.div className="max-w-md mx-auto" variants={zoomIn}>
        <div className="rounded-[30px] p-6 bg-white/80 border-2 border-[#5c6b52]">
          {/* ================= WISH ================= */}
          <h3 className="text-center text-xl mb-4 text-[#5c6b52]">Your Wish</h3>

          <form onSubmit={handleWish} className="space-y-3 mb-6">
            <input
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded"
            />

            <textarea
              placeholder="Ucapan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded"
            />

            <button className="w-full py-2 bg-[#5c6b52] text-white rounded-full">
              Kirim Ucapan
            </button>
          </form>

          {/* LIST */}
          <div className="space-y-3 mb-10 max-h-60 overflow-y-auto">
            {wishes.map((w, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-semibold">{w.name}</p>
                <p className="text-xs text-gray-500">{w.attendance}</p>
                <p>{w.message}</p>
              </div>
            ))}
          </div>

          {/* ================= RSVP ================= */}
          <h3 className="text-center text-xl mb-6 text-[#5c6b52]">
            Konfirmasi Kehadiran
          </h3>

          {/* WANITA */}
          <div className="mb-8">
            <input
              placeholder="Nama"
              value={wanita.name}
              onChange={(e) => setWanita({ ...wanita, name: e.target.value })}
              className="w-full p-3 mb-3 rounded border"
            />

            <Radio
              label="Hadir"
              value="Hadir"
              selected={wanita.attendance}
              onChange={(e: any) =>
                setWanita({ ...wanita, attendance: e.target.value })
              }
            />
            <Radio
              label="Tidak hadir"
              value="Tidak Hadir"
              selected={wanita.attendance}
              onChange={(e: any) =>
                setWanita({ ...wanita, attendance: e.target.value })
              }
            />

            <button
              onClick={handleWanita}
              className="w-full mt-3 py-2 bg-[#5c6b52] text-white rounded-full"
            >
              RSVP Wanita
            </button>
          </div>

          {/* PRIA */}
          <div>
            <input
              placeholder="Nama"
              value={pria.name}
              onChange={(e) => setPria({ ...pria, name: e.target.value })}
              className="w-full p-3 mb-3 rounded border"
            />

            <Radio
              label="Hadir"
              value="Hadir"
              selected={pria.attendance}
              onChange={(e: any) =>
                setPria({ ...pria, attendance: e.target.value })
              }
            />
            <Radio
              label="Tidak hadir"
              value="Tidak Hadir"
              selected={pria.attendance}
              onChange={(e: any) =>
                setPria({ ...pria, attendance: e.target.value })
              }
            />

            <button
              onClick={handlePria}
              className="w-full mt-3 py-2 bg-[#5c6b52] text-white rounded-full"
            >
              RSVP Pria
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WishesSection;
