import mandiriAsset from "../assets/BANK_BRI_logo.svg";
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
import gallery16 from "../assets/GALLERY-16.JPG";
import gallery17 from "../assets/GALLERY-17.JPG";
import gallery18 from "../assets/GALLERY-18.JPG";
import gallery19 from "../assets/GALLERY-19.jpg";
import gallery20 from "../assets/GALLERY-20.jpg";
import musicFile from "../assets/Beautiful In White.mp3";

// ============================================================
// ✏️  DATA CLIENT — Ganti semua placeholder di bawah ini
// ============================================================

/** Nama singkat mempelai wanita (untuk cover & hero) */
export const BRIDE_SHORT = "Tia";

/** Nama singkat mempelai pria (untuk cover & hero) */
export const GROOM_SHORT = "Agung";

/** Nama lengkap mempelai wanita */
export const BRIDE_FULL = "Tia Mutiara, S.Pd.";

/** Nama lengkap mempelai pria */
export const GROOM_FULL = "Nukha Agung Firdaus, A.Md.M., S.Pd.";

/** Ayah mempelai wanita */
export const BRIDE_FATHER = "Bapak Tatang Kuswandi (Ateng)";

/** Ibu mempelai wanita */
export const BRIDE_MOTHER = "Ibu Nining Yuningsih (Ening)";

/** Ayah mempelai pria */
export const GROOM_FATHER = "Dr. Muhamad Subkhan, M.Pd";

/** Ibu mempelai pria */
export const GROOM_MOTHER = "Ibu Giyanti";

/** Link Instagram mempelai wanita */
export const BRIDE_IG = "https://www.instagram.com/tiamtra_/";

/** Link Instagram mempelai pria */
export const GROOM_IG = "https://www.instagram.com/nukhaagung19/";

// ============================================================

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
  gallery16,
  gallery17,
  gallery18,
];

export const photos = {
  cover: gallery2,
  g2: gallery7,
  g3: gallery8,
  g4: gallery10,
  g5: gallery9,
  g6: gallery12,
  g7: gallery5,
  g8: gallery11,
  g9: gallery14,
  g10: gallery13,
  bride: gallery19,
  groom: gallery20,
  story1: gallery7,
  story2: gallery5,
  story3: gallery3,
  story4: gallery6,
  logo: logoAsset,
  gopay: gopayAsset,
  music: musicFile,
  mandiri: mandiriAsset,
};

export const topStrip = [gallery1, gallery3, gallery4, gallery6, gallery7, gallery12];

/** Tanggal pernikahan — format ISO 8601 */
export const WEDDING_DATE = "2026-11-08T09:00:00+07:00";

export const events = [
  {
    title: "Akad Nikah",
    day: "Minggu",
    date: "08",
    month: "November",
    year: "2026",
    time: "Pukul 09.00 WIB",
    place: [
      "Kediaman Mempelai Wanita",
      "Kp. Pasir Awi Rt 11 RW 03",
      "Ds. Palasari Girang, Kec. Kalapanunggal, Kab. Sukabumi",
    ],
    image: photos.g5,
    section: "wedding-event" as const,
  },
  {
    title: "Resepsi",
    day: "Minggu",
    date: "08",
    month: "November",
    year: "2026",
    time: "Pukul 10.00 WIB - Selesai",
    place: [
      "Kediaman Mempelai Wanita",
      "Kp. Pasir Awi Rt 11 RW 03",
      "Ds. Palasari Girang, Kec. Kalapanunggal, Kab. Sukabumi",
    ],
    image: photos.g6,
    section: "wedding-event" as const,
  },
];

/** Link Google Maps ke lokasi acara */
export const MAPS_LINK = "https://maps.app.goo.gl/ACtEL3VCR2FD6K7h6";

/** Nomor rekening & nama bank untuk transfer */
export const BANK_MANDIRI_NUMBER = "409801041316530";
export const BANK_MANDIRI_NAME = "Tia Mutiara";

/** Nomor GoPay */
export const GOPAY_NUMBER = "085863293914";
export const GOPAY_NAME = "Tia Mutiara";

/** Alamat pengiriman kado */
export const GIFT_ADDRESS = "Kp. Pasir Awi Rt 11 RW 03, Ds. Palasari Girang, Kec. Kalapanunggal, Kab. Sukabumi";
export const GIFT_ADDRESS_COPY = "Kp. Pasir Awi Rt 11 RW 03, Ds. Palasari Girang, Kec. Kalapanunggal, Kab. Sukabumi";

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
    "1. Bpk. Ujang Ma'mun, S.Fil.I., M.H. (Kades Palasari Girang)",
    "2. Ibu Hj. Nuryamah Ma'mun, S.E., M.H. (Pimpinan Bawaslu Jabar)",
    "3. KH. Harun Arrasyid, A.Md. (Ketua Yayasan Baet El-Anshar)",
    "4. Dr. Hj. Sri Rahayu Pudjiastuti, M.Pd. (Pembina Pondok Pesantren Nurul Huda, Depok)",
    "5. Bpk. Agus Yusuf Ibrahim, M.Si. (Ket. FKPQ Kab. Sukabumi)",
    "6. Bpk. Gugun Guntara, J.P., S.Pd. (Kep. SPPG Pulosari)",
    "7. Ibu Eli Yulianti Sa'dilah, S.Pd. (Ket. Himpaudi Kec. Kalapanunggal)",
    "8. Bpk. D. Suhenda, M.Pd. (Ket. Cabang SI Kalapanunggal)",
    "9. Bpk. Pian Supriani (Ket. RT 11)",
    "10. Kel. Besar BPD Palasari Girang",
    "11. Kel. Besar Abdul Rohman (Alm)",
    "12. Kel. Besar Abah Mamad (Alm)",
    "13. Kel. Besar Bpk Dindin / Ibu Elih",
    "14. Kel. Besar Bpk Baen / Ibu Anin",
    "15. Rival (Kakak)",
    "16. Teguh (Kakak Sepupu)",
  ],
};
