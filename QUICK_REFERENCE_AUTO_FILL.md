# ⚡ Quick Reference - Auto Fill Button

## 🎯 Apa itu Auto Fill?

Tombol **hijau** dengan icon petir (⚡) yang akan **otomatis mengisi semua dropdown** dengan data testing sehingga Anda tidak perlu input satu-satu.

---

## 🚀 Cara Pakai (Super Simpel!)

### 1️⃣ Klik Tombol Hijau
Cari tombol hijau bertuliskan **"⚡ Auto Fill Test Data"**

### 2️⃣ Lihat Data Terisi
Semua 8 dropdown langsung terisi otomatis!

### 3️⃣ Lihat Rekomendasi
Rekomendasi taktik langsung muncul

### 4️⃣ Klik Lagi (Optional)
Mau coba skenario lain? Klik lagi!

### 5️⃣ Reset (Optional)
Mau kosongkan? Klik tombol merah **"🔄 Refresh / Reset All"**

---

## 📊 8 Skenario yang Tersedia

| No | Nama Skenario | Situasi |
|----|---------------|---------|
| 1 | 🔥 Derby Match | Lawan rival, mengejar skor |
| 2 | 🛡️ Vs Tim Kuat | Bertahan 10 menit terakhir |
| 3 | ⚡ Vs Tim Lemah | Dominasi total, harus menang |
| 4 | ⚖️ Pertandingan Seimbang | Skor 0-0, babak kedua |
| 5 | 🎯 Vs Tim Promosi | Harus menang, awal match |
| 6 | ⏱️ Injury Time | Desperate, butuh gol |
| 7 | 🏆 Final Match | Protect lead, last 10 min |
| 8 | 🎲 Random | Kombinasi acak |

---

## 💡 Tips Penggunaan

✅ **DO:**
- Klik berkali-kali untuk explore berbagai skenario
- Perhatikan notifikasi hijau yang muncul (menunjukkan skenario apa yang loaded)
- Gunakan untuk belajar berbagai situasi taktik
- Gunakan untuk demo ke teman

❌ **DON'T:**
- Jangan klik terlalu cepat berulang-ulang (biarkan load dulu)
- Jangan lupa klik refresh jika mau mulai dari nol

---

## 🎨 Visual Guide

```
┌─────────────────────────────────────────┐
│  ⚡ Auto Fill Test Data  │  🔄 Refresh  │  ← Tombol ada di sini
└─────────────────────────────────────────┘
          ↑ HIJAU                  ↑ MERAH
```

---

## 📱 Di Mobile

Tombol akan berubah jadi **vertikal** (atas-bawah) di layar kecil:

```
┌──────────────────────────┐
│  ⚡ Auto Fill Test Data  │  ← HIJAU
├──────────────────────────┤
│    🔄 Refresh / Reset    │  ← MERAH
└──────────────────────────┘
```

---

## 🔔 Notifikasi

Setelah klik, akan muncul **kotak hijau** di kanan atas dengan info:
- ✅ Tanda sukses
- 📝 Nama skenario yang di-load
- ⏱️ Hilang otomatis setelah 3 detik

Contoh:
```
┌────────────────────────────┐
│ ⚡ Test Data Loaded!       │
│ 🔥 Derby Match - Mengejar │
│    Skor                    │
└────────────────────────────┘
```

---

## ❓ FAQ

### Q: Kenapa butuh fitur ini?
**A:** Biar testing cepat! Gak perlu klik 8 dropdown satu-satu.

### Q: Bisa pilih skenario tertentu?
**A:** Belum, sekarang random. Tapi bisa klik berkali-kali sampai dapat yang diinginkan.

### Q: Bisa edit setelah auto-fill?
**A:** Bisa! Dropdown tetap bisa diubah manual setelah auto-fill.

### Q: Data apa yang terisi?
**A:** Semua 8 dropdown:
- Jenis Lawan
- Formasi Lawan
- Gaya Lawan
- Kondisi Lawan
- Situasi Game
- Kondisi Kita
- Waktu Pertandingan
- Karakteristik Tim

### Q: Apakah data disimpan?
**A:** Tidak. Data hilang jika refresh page atau klik reset.

---

## 🎯 Use Cases

### 1. Quick Testing
"Saya mau lihat rekomendasi cepat tanpa input manual"
→ **Klik Auto Fill!**

### 2. Learning
"Saya mau belajar berbagai situasi taktik"
→ **Klik berkali-kali, bandingkan rekomendasi**

### 3. Demo
"Saya mau tunjukkan app ini ke coach/teman"
→ **Auto Fill untuk show berbagai scenario**

### 4. Exploration
"Saya penasaran rekomendasi untuk situasi-situasi unik"
→ **Klik Random scenario berkali-kali**

---

## 🎮 Keyboard Shortcut

❌ **Belum ada** keyboard shortcut untuk Auto Fill  
✅ **Ada** keyboard shortcut untuk Refresh: `Ctrl + R`

---

## 🐛 Troubleshooting

### Tombol tidak muncul?
- Cek apakah di tab "Tactical Selector" (bukan Statistical Analysis)
- Refresh page

### Notifikasi tidak muncul?
- Cek console untuk error
- Pastikan JavaScript enabled

### Rekomendasi tidak update?
- Cek console log
- Refresh page dan coba lagi

---

## 📞 Butuh Bantuan?

1. Baca dokumentasi lengkap: `AUTO_FILL_FEATURE.md`
2. Cek CHANGELOG: `CHANGELOG_AUTO_FILL.md`
3. Lihat README utama: `README.md`

---

**Dibuat dengan ⚽ untuk kemudahan testing!**

**Version:** 1.1.0  
**Last Updated:** November 2025
