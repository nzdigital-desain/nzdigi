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
import gallery21 from "../assets/GALLERY-21.jpg";
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
  gallery21,
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
  story4: gallery18,
  logo: logoAsset,
  gopay: gopayAsset,
  music: musicFile,
  mandiri: mandiriAsset,
};

export const topStrip = [gallery1, gallery3, gallery4, gallery6, gallery7, gallery12];

/** Tanggal pernikahan — format ISO 8601 */
export const WEDDING_DATE = "2026-11-14T13:00:00+07:00";

export const events = [
  {
    title: "Ngunduh Mantu",
    day: "Sabtu Kliwon",
    date: "14",
    month: "November",
    year: "2026",
    time: "Pukul 13.00 s/d Selesai",
    place: [
      "Kediaman Mempelai Pria",
      "Jl. Cikaret Gang Sukamanh II/IV",
      "Kp. Pos RT 004/010 No B4 Kelurahan Pakansari",
      "Kecamatan Cibinong, Bogor",
    ],
    image: photos.g5,
    section: "wedding-event" as const,
  },
];

/** Link Google Maps ke lokasi acara */
export const MAPS_LINK = "https://maps.app.goo.gl/jTYwgYBdozPcWnNh8?g_st=iw";

/** Nomor rekening & nama bank untuk transfer */
export const BANK_MANDIRI_NUMBER = "409801041316530";
export const BANK_MANDIRI_NAME = "Tia Mutiara";

/** Nomor GoPay */
export const GOPAY_NUMBER = "085863293914";
export const GOPAY_NAME = "Tia Mutiara";

/** Alamat pengiriman kado */
export const GIFT_ADDRESS = "Jl. Cikaret Gang Sukamanh II/IV Kp. Pos RT 004/010 No B4 Kelurahan Pakansari Kecamatan Cibinong, Bogor";
export const GIFT_ADDRESS_COPY = "Jl. Cikaret Gang Sukamanh II/IV Kp. Pos RT 004/010 No B4 Kelurahan Pakansari Kecamatan Cibinong, Bogor";

export const loveStory = [
  {
    image: photos.story1,
    title: "Awal Pertemuan",
    text: "Tak pernah ada yang tahu, dari sebuah perkenalan sederhana akan tumbuh sebuah cerita yang begitu berarti. Berawal dari saling mengenal, kami perlahan belajar memahami satu sama lain. Di awal perjalanan, sempat ada keraguan tentang ke mana kisah ini akan membawa kami. Namun, seiring waktu, rasa nyaman tumbuh dan membuat kami ingin terus mengenal lebih jauh.",
  },
  {
    image: photos.story2,
    title: "Menjalin Hubungan",
    text: "Waktu membawa kami pada keyakinan bahwa pertemuan ini bukan sekadar kebetulan. Kami memilih untuk berjalan bersama, saling mengenal dan memahami lebih dalam. Di antara jarak dan waktu, kami belajar bahwa mencintai bukan hanya tentang selalu dekat, tetapi tentang tetap memilih satu sama lain dalam setiap keadaan. Hingga akhirnya, sebuah niat baik dan keseriusan membawa kami pada langkah yang lebih berarti.",
  },
  {
    image: photos.story3,
    title: "Lamaran",
    text: "Ketika hati telah menemukan keyakinannya, langkah berikutnya pun terasa lebih mudah. Dengan doa dan harapan, kami memantapkan niat untuk membawa hubungan ini ke jenjang yang lebih serius. Sebuah momen penuh haru menjadi saksi ketika dua keluarga dipertemukan dalam satu niat baik. Di hari itu, kisah yang awalnya penuh tanda tanya perlahan menemukan jawabannya.",
  },
  {
    image: photos.story4,
    title: "Hari Bahagia",
    text: "Dengan penuh rasa syukur, pada akhirnya pertemuan sederhana itu membawa kami pada satu keyakinan. Semoga langkah ini menjadi awal dari perjalanan panjang yang dipenuhi cinta, keberkahan, dan kebahagiaan. Tak pernah kami sangka, sebuah perkenalan sederhana akan membawa kami sampai di titik ini, saling menemukan, saling memilih, dan akhirnya memutuskan untuk menjalani kehidupan bersama, selamanya.",
  },
];

export const turutMengundang = {
  wanita: [
    "1. Keluarga Besar Bani Sayuti",
    "2. Keluarga Besar Bani Marto Pawiro",
    "3. Bapak. Dr. KH. Mohammad Abduh, M.Si. MM (Ketua STKIP Arrahmanaiyah)",
    "4. Bapak Dr. H. Mohammad Sutisna, M.Pd (Waket 1 Bidang Akademik)",
    "5. Ibu Assoc. Prof. Dr. Hj. Sri Rahayu Pudjiastuti, M.Pd (Kaprodi Magister PPKn, Sekretaris Umum ADPK)",
    "6. Bpk. H Ngatno dan Ibu Dyiah Ari Retnowati (Direktur Utama PT SPKA & CV. Prima Karya)",
    "7. Keluarga Besar STKIP Arrahmaniyah",
    "8. Keluarga Besar Paguyuban Purwodadi Grobogan",
    "9. Keluaraga Besar IMANIAR.",
    "10. Bapak Supriyatna (Ketua RW 010 Kp. Pos Pakansar)",
    "11. Bapak Ketua RT 004/010 ( Kp. Pos Pakansari)",
  ],
};
