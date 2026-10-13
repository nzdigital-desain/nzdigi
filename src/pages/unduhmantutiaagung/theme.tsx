import React from "react";

/**
 * =========================================================================
 * 🎨 THEME CONFIGURATION — UBAH SEMUA WARNA DENGAN MUDAH DI SINI
 * =========================================================================
 * Cukup ubah kode HEX di bawah ini. Semua bagian undangan (Background,
 * Tombol, Teks, Badge, Kartu, Overlay Foto, Border) akan otomatis berubah!
 * =========================================================================
 */
export const THEME = {
  // 1. Latar Belakang Section Utama (Countdown, Acara, Live Streaming, Love Story, Galeri, Footer, Cover)
  primaryDark: "#FFEED6",

  // 2. Latar Belakang Section Terang (Mempelai / Bride & Groom, Dress Code, RSVP, Wedding Gift, Outer Shell)
  primaryLight: "#FFFDF9",

  // 3. Warna Aksen & Gradien (Badge "The Bride/Groom", Tombol Scroll, Border Aksen)
  accentSteel: "#E5C9A6",

  // 4. Lapisan Gelap / Overlay Foto (Hero, Quote, Kartu Foto Mempelai, Acara, Closing)
  darkOverlay: "#5C3A1E",

  // 5. Warna Emas / Highlight (Pembatas "Love Found Us", Lingkaran Dress Code, Border Spesial)
  gold: "#C59B27",

  // 6. Warna Judul & Teks Penekanan di Atas Latar Terang / Latar Krem (ScriptTitle, angka penting)
  textDark: "#5C3A1E",

  // 7. Warna Teks Paragraf / Keterangan (Deskripsi acara, form input, alamat, isi teks)
  textMuted: "#4A3525",

  // 8. Warna Teks di Atas Latar Gelap / Overlay Foto (Hero, Quote, Event Card, Photo Card)
  textLight: "#FFFFFF",

  // 9. Warna Kartu Putih & Form (RSVP, Daftar Tamu, Gift Card)
  cardBg: "#FFFFFF",
  cardBorder: "#E5C9A6",
};

/**
 * Pilihan warna Dress Code yang ditampilkan ke tamu (serasi dengan tema #FFEED6)
 */
export const DRESS_CODE_SWATCHES = [
  { hex: THEME.primaryDark, name: "Champagne" },
  { hex: THEME.accentSteel, name: "Warm Gold" },
  { hex: THEME.textDark, name: "Mocha Brown" },
  { hex: "#FFFFFF", name: "Pure White" },
];

/**
 * Komponen injector CSS otomatis yang menjamin:
 * 1. Teks di atas foto & overlay gelap SELALU putih bersih (#FFFFFF) & jernih.
 * 2. Teks di atas latar #FFEED6 & #FFFDF9 SELALU coklat pekat (#5C3A1E & #4A3525) & tajam.
 * 3. Tidak ada warna yang bertabrakan (gak nimpa) di bagian manapun.
 * 4. 100% ter-scope ke .tia-theme sehingga tidak bocor ke template lain.
 */
export function ThemeStyles() {
  const d = THEME.primaryDark;
  const l = THEME.primaryLight;
  const a = THEME.accentSteel;
  const o = THEME.darkOverlay;
  const g = THEME.gold;
  const td = THEME.textDark;
  const tm = THEME.textMuted;
  const tl = THEME.textLight;

  const css = [
    // ── 1. Variables khusus .tia-theme
    ".tia-theme {",
    `  --blush: ${d} !important;`,
    `  --blush-deep: ${d} !important;`,
    `  --blush-soft: ${a} !important;`,
    `  --blush-muted: ${g} !important;`,
    `  --cream: ${l} !important;`,
    `  --ink: ${tm} !important;`,
    `  --sage-olive: ${a} !important;`,
    `  --gradient-blush: linear-gradient(180deg, rgba(45,25,12,0) 0%, rgba(45,25,12,0.85) 100%) !important;`,
    `  --gradient-ring: linear-gradient(160deg, ${a}, ${g}) !important;`,
    `  --gradient-ocean-deep: linear-gradient(180deg, ${a} 0%, ${g} 100%) !important;`,
    `  --shadow-soft: 0 10px 30px -12px rgba(92, 58, 30, 0.20) !important;`,
    `  --theme-primary-dark: ${d} !important;`,
    `  --theme-primary-light: ${l} !important;`,
    `  --theme-accent-steel: ${a} !important;`,
    `  --theme-dark-overlay: ${o} !important;`,
    `  --theme-gold: ${g} !important;`,
    `  --theme-text-dark: ${td} !important;`,
    `  --theme-text-muted: ${tm} !important;`,
    `  --theme-text-light: ${tl} !important;`,
    `  --theme-card-bg: ${THEME.cardBg} !important;`,
    `  --theme-card-border: ${THEME.cardBorder} !important;`,
    "}",

    // ── 2. Backgrounds
    `.tia-theme .bg-theme-dark,`,
    `.tia-theme section[class*="bg-[#FFEED6]"],`,
    `.tia-theme footer[class*="bg-[#FFEED6]"] { background-color: ${d} !important; }`,

    `.tia-theme .bg-theme-light,`,
    `.tia-theme section[class*="bg-[#FFFDF9]"] { background-color: ${l} !important; }`,

    // ── 3. Tombol Aksi Kontras (RSVP, Maps, Save The Date, Copy)
    `.tia-theme button[type="submit"],`,
    `.tia-theme a[href*="calendar.google.com"],`,
    `.tia-theme a[href*="instagram.com"][class*="rounded-full"] {`,
    `  background-color: ${td} !important;`,
    `  color: #FFFFFF !important;`,
    `}`,

    // ── 4. PERLINDUNGAN TEKS DI ATAS FOTO & OVERLAY GELAP
    // Teks di EventCard, Quote, Hero, Photo Card, Closing SELALU PUTIH & TERANG (tidak boleh ditimpa warna coklat)
    `.tia-theme .arch-top h2,`,
    `.tia-theme .arch-top h3,`,
    `.tia-theme .arch-top span,`,
    `.tia-theme .arch-top p,`,
    `.tia-theme [style*="rgba(45,25,12"] ~ div p,`,
    `.tia-theme [style*="rgba(45,25,12"] ~ div span,`,
    `.tia-theme [style*="rgba(45,25,12"] ~ div h2,`,
    `.tia-theme [style*="rgba(45,25,12"] ~ div h3 {`,
    `  color: #FFFFFF !important;`,
    `}`,

    // ── 5. Teks di atas latar #FFEED6 dan #FFFDF9 (Jelas, Tajam, Elegan)
    `.tia-theme section.bg-\\[\\#FFEED6\\] h2,`,
    `.tia-theme section.bg-\\[\\#FFEED6\\] .script-title,`,
    `.tia-theme section[class*="bg-[#FFEED6]"] .script-title {`,
    `  color: ${td} !important;`,
    `}`,

    // ── 6. Border & Divider
    `.tia-theme .border-gold { border-color: ${g} !important; }`,
    `.tia-theme .border-accent { border-color: ${a} !important; }`,
  ].join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
