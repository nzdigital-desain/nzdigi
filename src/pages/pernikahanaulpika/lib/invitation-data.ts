import bcaAsset from "../assets/BCA.png";
import mandiriAsset from "../assets/Bank_Mandiri_logo_2016_(with_slogan).svg";
import gopayAsset from "../assets/GOPAY-1.png";
import logoAsset from "../assets/logonz.png";
import gallery1 from "../assets/GALLERY-1.JPG";
import gallery2 from "../assets/GALLERY-2.JPG";
import gallery3 from "../assets/GALLERY-3.JPG";
import gallery4 from "../assets/GALLERY-4.JPG";
import gallery5 from "../assets/GALLERY-5.JPG";
import gallery6 from "../assets/GALLERY-6.JPG";
import gallery7 from "../assets/GALLERY-7.JPG";
import gallery8 from "../assets/GALLERY-8.JPG";
import gallery9 from "../assets/GALLERY-9.JPG";
import gallery10 from "../assets/GALLERY-10.JPG";
import gallery11 from "../assets/GALLERY-11.JPG";
import gallery12 from "../assets/GALLERY-12.JPG";
import gallery13 from "../assets/GALLERY-13.JPG";
import gallery14 from "../assets/GALLERY-14.JPG";
import gallery15 from "../assets/GALLERY-15.JPG";
import musicFile from "../assets/Beautiful In White Saxophone Cover by Dori Wirawan.mp3";

const U = "../assets/";

export const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
];

export const photos = {
  cover: gallery6,
  g2: gallery7,
  g3: gallery8,
  g4: gallery10,
  g5: gallery9,
  g6: gallery12,
  g7: gallery5,
  g8: gallery11,
  g9: gallery14,
  g10: gallery13,
  bride: gallery15,
  groom: gallery2,
  story1: gallery7,
  story2: gallery5,
  story3: gallery9,
  story4: gallery10,
  logo: logoAsset,
  bca: bcaAsset,
  gopay: gopayAsset,
  music: musicFile,
  mandiri: mandiriAsset,
};

export const topStrip = [gallery1, gallery3, gallery4, gallery6, gallery7, gallery12];

export const WEDDING_DATE = "2026-08-23T09:00:00+07:00";

export const events = [
  {
    title: "Akad Nikah",
    day: "Minggu",
    date: "23",
    month: "Agustus",
    year: "2026",
    time: "Pukul 09.00 WIB",
    place: [
      "Kediaman Mempelai Wanita",
      "Kp. Pasir Awi girang RT/RW 014/005",
      "Desa Palasari Girang Kecamatan Kalapanunggal Kab. Sukabumi",
    ],
    image: photos.g5,
    section: "wedding-event" as const,
  },
  {
    title: "Resepsi",
    day: "Minggu",
    date: "23",
    month: "Agustus",
    year: "2026",
    time: "Pukul 10.00 WIB - Selesai",
    place: [
      "Kediaman Mempelai Wanita",
      "Kp. Pasir Awi girang RT/RW 014/005",
      "Desa Palasari Girang Kecamatan Kalapanunggal Kab. Sukabumi",
    ],
    image: photos.g6,
    section: "wedding-event" as const,
  },
];

export const loveStory = [
  {
    image: photos.story1,
    title: "Awal Pertemuan",
    text: "Tidak ada yang benar-benar kebetulan. Dari sebuah pertemuan sederhana, kami mulai saling mengenal, berbagi cerita, dan menemukan kenyamanan satu sama lain.",
  },
  {
    image: photos.story2,
    title: "Menjalin Hubungan",
    text: "Seiring berjalannya waktu, kebersamaan mengajarkan kami arti cinta, kesabaran, dan saling mendukung dalam setiap langkah kehidupan.",
  },
  {
    image: photos.story3,
    title: "Lamaran",
    text: "Dengan restu kedua orang tua dan keluarga, kami memutuskan untuk melangkah ke jenjang yang lebih serius sebagai wujud komitmen untuk membangun masa depan bersama.",
  },
  {
    image: photos.story4,
    title: "Hari Bahagia",
    text: "Kini, dengan penuh rasa syukur kepada Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menjadi saksi sekaligus memberikan doa restu pada hari pernikahan kami, sebagai awal dari perjalanan baru dalam ikatan suci pernikahan.",
  },
];

export const turutMengundang = {
  wanita: [
    "1. Bpk. Ujang Mamun, S.Fil.I., M.H ( Kepala Desa Palasari Girang )",
    "2. Bpk. Nana Suryana, S.Pd., M.Pd ( Pengawas Bina Kabupaten Sukabumi )",
    "3. Bpk. Yusman Yuswandi, S.Pd.I ( Ketua PGRI Kec. Kalapanunggal )",
    "4. Keluarga Besar Yayasan Baet El Anshar",
    "5. Keluarga Besar SMP PGRI Kalapanunggal",
    "6. Keluarga Besar Yayasan Salapan Raga Nusantara",
    "7. Keluarga Besar SPPG Salapan Raga Nusantara",
    "8. Bpk. Tedi Sutedi ( Uwa )",
    "9. Bpk. Obar Sobari ( Uwa )",
    "10. Bpk. Dedi Hidayatullah ( Paman )",
    "11. Bpk. Agus Sambas ( Tokoh Masyarakat )",
    "12. Ustad Asep ( Tokoh Agama )",
    "13. Bpk. Iwan Suryana ( Paman )",
  ],
};
