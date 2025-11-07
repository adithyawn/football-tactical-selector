# ⚡ Auto Fill Test Data Feature

## 📋 Overview
Fitur **Auto Fill Test Data** memungkinkan Anda untuk secara otomatis mengisi semua dropdown dengan data testing yang sudah dipilih secara acak dari berbagai skenario pertandingan. Ini sangat berguna untuk:
- ✅ Testing cepat tanpa perlu input manual
- ✅ Melihat berbagai rekomendasi taktik dengan cepat
- ✅ Eksplorasi berbagai situasi pertandingan
- ✅ Demo aplikasi ke orang lain

## 🎯 Cara Menggunakan

### 1. Klik Tombol Auto Fill
Klik tombol hijau **"⚡ Auto Fill Test Data"** yang ada di bagian atas halaman Tactical Selector.

### 2. Data Terisi Otomatis
Aplikasi akan secara acak memilih salah satu dari 8 skenario testing yang sudah disiapkan dan mengisi semua dropdown.

### 3. Lihat Rekomendasi
Rekomendasi taktik akan langsung muncul setelah data terisi.

### 4. Klik Lagi untuk Skenario Baru
Anda bisa klik tombol **Auto Fill** berulang kali untuk mendapatkan skenario yang berbeda.

### 5. Reset Data
Klik tombol **"🔄 Refresh / Reset All"** untuk mengosongkan semua field dan mulai dari awal.

---

## 📊 Skenario Testing yang Tersedia

### 1. 🔥 Derby Match - Mengejar Skor
**Situasi:** Pertandingan derby penting dimana tim Anda tertinggal
- **Jenis Lawan:** Tim Rival
- **Formasi Lawan:** 4-2-3-1
- **Gaya Lawan:** Pressing
- **Situasi:** Mengejar Skor
- **Waktu:** Babak Kedua
- **Tim Kita:** Tim dengan Winger Cepat

**Ekspektasi:** Rekomendasi formasi agresif dengan pressing tinggi

---

### 2. 🛡️ Melawan Tim Kuat - Bertahan
**Situasi:** Melawan tim top 6, mempertahankan keunggulan tipis
- **Jenis Lawan:** Tim Kuat (Top 6)
- **Formasi Lawan:** 4-3-3
- **Gaya Lawan:** Possession
- **Situasi:** Mempertahankan Keunggulan
- **Waktu:** 10 Menit Terakhir
- **Tim Kita:** Tim dengan Bek Kuat (Lelah)

**Ekspektasi:** Formasi ultra defensif dengan deep block

---

### 3. ⚡ Dominasi vs Tim Lemah
**Situasi:** Melawan tim papan bawah, harus menang besar
- **Jenis Lawan:** Tim Lemah (Bottom Table)
- **Formasi Lawan:** 5-3-2 (Parkir Bus)
- **Gaya Lawan:** Defensive
- **Situasi:** Mengejar Skor
- **Waktu:** Awal Pertandingan
- **Tim Kita:** Tim dengan AMC Kreatif (Segar)

**Ekspektasi:** Formasi possession-based dengan kreativitas tinggi

---

### 4. ⚖️ Pertandingan Seimbang
**Situasi:** Pertandingan yang seimbang, skor masih 0-0
- **Jenis Lawan:** Tim Seimbang (Mid Table)
- **Formasi Lawan:** 4-4-2
- **Gaya Lawan:** Counter Attack
- **Situasi:** Skor Imbang
- **Waktu:** Babak Kedua
- **Tim Kita:** Tim Balanced

**Ekspektasi:** Formasi balanced dengan fokus pada transisi

---

### 5. 🎯 Tim Promosi - Harus Menang
**Situasi:** Melawan tim promosi yang bermotivasi tinggi
- **Jenis Lawan:** Tim Promosi
- **Formasi Lawan:** 3-5-2
- **Gaya Lawan:** Long Ball
- **Situasi:** Skor Imbang
- **Waktu:** Awal Pertandingan
- **Tim Kita:** Tim dengan DMC Solid

**Ekspektasi:** Formasi dengan perlindungan tengah yang kuat

---

### 6. ⏱️ Injury Time - Desperate
**Situasi:** Masa injury time, masih tertinggal, butuh gol
- **Jenis Lawan:** Tim Seimbang (Mid Table)
- **Formasi Lawan:** 4-4-2
- **Gaya Lawan:** Counter Attack
- **Situasi:** Mengejar Skor
- **Waktu:** Injury Time
- **Tim Kita:** Tim dengan 3 Striker (Lelah)

**Ekspektasi:** All-out attack, formasi ultra ofensif

---

### 7. 🏆 Final Match - Protect Lead
**Situasi:** Pertandingan final penting, mempertahankan keunggulan
- **Jenis Lawan:** Tim Kuat (Top 6)
- **Formasi Lawan:** 3-4-3
- **Gaya Lawan:** Wing Play
- **Situasi:** Mempertahankan Keunggulan
- **Waktu:** 10 Menit Terakhir
- **Tim Kita:** Tim Sangat Defensif (Lelah)

**Ekspektasi:** Formasi 5 bek dengan time wasting tactics

---

### 8. 🎲 Random Testing
**Situasi:** Skenario random dari berbagai kombinasi
- Semua parameter dipilih secara acak
- Bagus untuk testing variasi tak terduga
- Setiap kali beda kombinasi

**Ekspektasi:** Hasil yang berbeda-beda setiap kali

---

## 🎨 Fitur UI/UX

### Tombol Auto Fill
- **Warna:** Hijau (#27ae60)
- **Icon:** ⚡ (Petir)
- **Hover Effect:** Gelap sedikit dengan shadow
- **Posisi:** Sebelah kiri tombol Refresh

### Notifikasi
Setelah auto fill, muncul notifikasi di kanan atas dengan:
- ✅ Indikator sukses
- 📝 Nama skenario yang dipilih
- ⏱️ Hilang otomatis setelah 3 detik
- 🎨 Animasi slide-out

### Mobile Responsive
- Tombol menjadi full-width di mobile
- Stack secara vertikal
- Spacing yang nyaman untuk touch

---

## 🔧 Technical Details

### Fungsi JavaScript
```javascript
autoFillTestData()
```
- Memilih skenario secara random dari array `testScenarios`
- Mengisi semua dropdown dengan `getElementById().value`
- Memanggil `updateRecommendations()` untuk trigger update
- Menampilkan notifikasi dengan `showAutoFillNotification()`

### CSS Styling
```css
.refresh-button[style*="27ae60"]:hover {
    background: #229954 !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(39, 174, 96, 0.3);
}
```

### Mobile Responsiveness
```css
@media (max-width: 768px) {
    .refresh-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .refresh-button {
        width: 100%;
    }
}
```

---

## 🎯 Use Cases

### 1. Demo ke Teman/Coach
Tunjukkan berbagai situasi dengan cepat tanpa perlu explain dropdown satu-satu.

### 2. Learning Tool
Pelajari rekomendasi taktik untuk berbagai situasi dengan switching scenario yang cepat.

### 3. Testing Development
Developer bisa test fungsionalitas dengan cepat tanpa input manual berulang.

### 4. Explorasi Taktik
Eksplorasi berbagai kombinasi dan pelajari pattern rekomendasi sistem.

---

## 📝 Tips Penggunaan

1. **Klik Berkali-kali** - Jangan ragu klik berkali-kali untuk lihat berbagai skenario
2. **Perhatikan Notifikasi** - Lihat nama skenario di notifikasi untuk context
3. **Compare Scenarios** - Bandingkan rekomendasi antara skenario berbeda
4. **Manual Override** - Setelah auto-fill, Anda masih bisa ubah dropdown manual
5. **Reset Anytime** - Gunakan tombol Refresh untuk mulai fresh

---

## 🚀 Future Enhancements

Kemungkinan pengembangan di masa depan:
- [ ] Save/Load custom scenarios
- [ ] Export scenario to JSON
- [ ] History of tested scenarios
- [ ] Favorite scenarios
- [ ] Share scenario via URL
- [ ] More predefined scenarios
- [ ] Scenario difficulty rating

---

## 📞 Support

Jika ada masalah atau saran untuk fitur Auto Fill:
1. Check console log untuk error messages
2. Refresh page jika notifikasi tidak muncul
3. Pastikan JavaScript enabled di browser

---

**Created:** November 2025  
**Version:** 1.0  
**Status:** ✅ Active & Working
