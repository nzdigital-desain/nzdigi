import { useState } from "react";

const KirimUndangan = () => {
  const [guestName, setGuestName] = useState("");

  const sendWhatsApp = () => {
    if (!guestName.trim()) {
      alert("Masukkan nama tamu dulu");
      return;
    }

    const link =
      "https://nzdigi.vercel.app/wedingyuni?to=" +
      encodeURIComponent(guestName);

    const message = `Kepada Yth.
Bapak/Ibu/Saudara/i
${guestName}

Assalamualaikum Warahmatullahi Wabarakaatuh

Dengan memohon rahmat dan ridho Allah SWT, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami :

🧕🏻 Yuni Ramdani

dengan

🤵🏻 Refi Irwansyah

Untuk informasi detail mengenai acara, silahkan kunjungi link dibawah ini :
${link}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Atas kehadiran dan doa restunya kami ucapkan terima kasih.

Wassalamualaikum Warahmatullahi Wabarakaatuh

Hormat kami,
Yuni & Refi`;

    const text = encodeURIComponent(message);

    const mobileUrl = `whatsapp://send?text=${text}`;
    const webUrl = `https://api.whatsapp.com/send?text=${text}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mobileUrl;

      setTimeout(() => {
        window.location.href = webUrl;
      }, 1200);
    } else {
      window.open(webUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f1] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-7">
        <h1 className="text-2xl font-semibold text-center text-[#550000] mb-2">
          Kirim Undangan
        </h1>

        <p className="text-center text-sm text-gray-500 mb-6 leading-relaxed">
          Isi nama tamu, lalu klik tombol kirim.
          <br />
          WhatsApp akan terbuka dan pilih kontak tujuan.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Contoh: Bapak Andi"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#550000]"
          />

          <button
            type="button"
            onClick={sendWhatsApp}
            className="w-full bg-[#550000] hover:opacity-90 text-white py-3 rounded-2xl font-medium transition"
          >
            Kirim via WhatsApp
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          Powered by NZ Digital
        </div>
      </div>
    </div>
  );
};

export default KirimUndangan;
