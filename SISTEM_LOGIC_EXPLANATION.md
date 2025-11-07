# 📚 Penjelasan Logic Sistem Tactical Selector

## 🎯 CARA KERJA SISTEM

### 1. **Formasi Utama & Alternatif**
**Sumber:** `tacticalDatabase` object (line ~1798)

**Cara Kerja:**
- Sistem membuat KEY dari kombinasi: `"JenisLawan|FormasiLawan|SituasiGame"`
- Contoh key: `"Tim Kuat (Top 6)|Mengejar Skor"` atau `"Tim Lemah (Bottom Table)|Skor Imbang"`
- Database punya 150+ skenario yang di-hardcode dengan rekomendasi spesifik
- Sistem cari match exact dari dropdown yang dipilih user
- Jika match, ambil formasi + alternatif dari database entry tersebut

**Contoh dari Database:**
```javascript
"Tim Kuat (Top 6)|Mengejar Skor": {
    formasi: "4-2-3-1 Counter-Attack",
    alternatif: "3-5-2 Compact",
    // ...
}
```

---

### 2. **Instruksi Khusus**
**Sumber:** Function `generateInstructionsForFormation()` (line ~3018)

**Cara Kerja:**
- Bukan dari database, tapi GENERATED on-the-fly
- Melihat kombinasi: Formasi + Situasi Game + Gaya Lawan + Kondisi Tim
- Ada conditional logic untuk tiap kombinasi
- Contoh:
  - Jika Formasi = "4-3-3" + Situasi = "Mengejar Skor" → "Push wingers high, FB overlap"
  - Jika Formasi = "5-3-2" + Situasi = "Bertahan" → "Deep block, WB stay back"

---

### 3. **Tempo Permainan**
**Sumber:** Function `generateTempo()` (line ~3081)

**Cara Kerja:**
Ada 4 kategori yang dipertimbangkan:

**A. Berdasarkan Situasi Game:**
- Mengejar Skor → Very High / High Tempo
- Mempertahankan → Low / Medium Tempo
- Skor Imbang → High / Medium / Low (fleksibel)

**B. Berdasarkan Gaya Lawan:**
- Vs Possession → High Tempo (press build-up)
- Vs Counter → Low Tempo (sabar, jaga shape)
- Vs Pressing → Low Tempo (umpan pendek) ATAU High (bypass press)
- Vs Wing Play → Medium Tempo
- Vs Long Ball → Medium/High Tempo
- Vs Defensive → Low Tempo (sabar cari celah)

**C. Berdasarkan Jenis Lawan:**
- Tim Kuat/Rival → Low-Medium (sabar, hindari blunder)
- Tim Lemah → High/Very High (tekan terus)
- Tim Seimbang → Medium (fleksibel)

**D. Berdasarkan Formasi:**
- 4-3-3 / 4-2-3-1 → Medium-High
- 3-5-2 / 5-3-2 → Low-Medium
- 4-4-2 → High
- 4-1-4-1 → Low-Medium

**Kondisi Khusus:**
- Jika "Tim Lelah" → WAJIB Low Tempo (hemat energi)

---

### 4. **Pemain Kunci**
**Sumber:** Function `generateKeyPlayers()` (line ~3684)

**Cara Kerja:**
- Hardcoded berdasarkan FORMASI yang dipilih
- Setiap formasi punya list posisi kunci yang pre-defined
- Contoh:
  - 4-3-3 → "ST (Target), LW/RW (Pacey), CM (Box-to-Box)"
  - 3-5-2 → "WB (Stamina), ST (Partnership), CB (Leader)"
  - 4-2-3-1 → "CAM (Creative), CDM (Anchor), ST (Clinical)"

---

### 5. **Out of Possession**
**Sumber:** `tacticalDatabase` entry field `outOfPossession`

**Cara Kerja:**
- Sudah di-define di database untuk setiap skenario
- Format: "Formasi + Block Type"
- Contoh:
  - "4-2-3-1 Deep Block"
  - "4-3-3 High Block"
  - "5-4-1 Ultra Deep"
  - "4-1-4-1 Mid Block"

---

### 6. **Defensive Line**
**Sumber:** Function `generateDefensiveLine()` (line ~3710)

**Cara Kerja:**
Pertimbangan multi-faktor:

**A. Situasi Game:**
- Mengejar Skor → Much Higher (80-90%)
- Bertahan → Lower/Much Lower (30-50%)
- Imbang → Standard (50-60%)

**B. Kondisi Tim:**
- Tim Lelah → -10% dari baseline (kurang chase back)
- Tim Segar → +10% allowance

**C. Gaya Lawan:**
- Vs Counter/Pacey → Deeper (avoid through balls)
- Vs Possession → Higher (compress space)
- Vs Long Ball → Standard (win aerial duels)

**D. Jenis Lawan:**
- Tim Kuat → Lower (respect their quality)
- Tim Lemah → Higher (dominate)

**Range:** Much Higher (80-90%) → Higher (70-80%) → Standard (50-60%) → Lower (40-50%) → Much Lower (30-40%)

---

### 7. **Marking Strategy**
**Sumber:** Function `generateMarkingStrategy()` (line ~3808)

**Cara Kerja:**
Berdasarkan 3 faktor:

**A. Formasi Lawan:**
- 2 Striker (4-4-2, 3-5-2) → Man-to-Man on strikers
- 1 Striker + AM (4-2-3-1) → Hybrid
- False 9 (4-3-3) → Zonal
- 3 Striker → Zonal atau 3CB man-mark

**B. Gaya Lawan:**
- Possession → Zonal (protect space)
- Counter/Direct → Man-to-Man (stick to runners)
- Pressing → Zonal (maintain structure)

**C. Formasi Kita:**
- 3 CB → Bisa man-mark 2-3 strikers
- 4 Back → Standard zonal/hybrid
- 5 Back → Zonal (absorb pressure)

**Output:** Man-to-Man / Hybrid / Zonal

---

### 8. **Pressing Strategy**
**Sumber:** Function `generatePressingStrategy()` (line ~3836)

**Cara Kerja:**

**A. Kondisi Tim (PRIMARY):**
- Tim Segar → High/Ultra High possible
- Tim Lelah → Mid/Low only

**B. Gaya Lawan:**
- Vs Possession → High Press (disrupt)
- Vs Long Ball → Mid Press (sit off)
- Vs Counter → Low Press (don't leave space)
- Vs Pressing → Low Press (stay compact)

**C. Jenis Lawan:**
- Tim Lemah → Aggressive High Press
- Tim Kuat → Selective/Mid Press
- Tim Pacey → Low Press (space dangerous)

**D. Situasi Game:**
- Mengejar → Ultra High
- Bertahan → Drop Off
- Imbang → Standard

**Intensity:** Ultra High → High → Mid → Low → Drop Off

---

### 9. **Set Pieces**
**Sumber:** Function `generateSetPiecesStrategy()` (line ~3449) + `setPiecesDatabase`

**Cara Kerja:**
- Hardcoded per formasi di `setPiecesDatabase`
- Ada 3 kategori:
  - **Corners:** Near post / Far post / Short corner strategies
  - **Free Kicks:** Direct / Indirect / Positioning
  - **Throw-ins:** Attacking / Defensive options
  
**Contoh:**
```javascript
'4-3-3': {
    corners: {
        offensive: ['Near post flick-on', 'Far post for winger', 'Short corner overload'],
        players: 'ST + Wingers attack, FB stay back'
    },
    freeKicks: {
        direct: 'Winger with best technique',
        indirect: 'CM delivers to ST + Wingers'
    }
}
```

---

### 10. **Substitutions**
**Sumber:** Hardcoded logic di database entries

**Cara Kerja:**
Ada di field `substitutions` dari database entry, format:
```
"60' - Fresh legs for pressing"
"75' - Defensive sub if leading"
"85' - All-out attack if trailing"
```

**Pattern Umum:**
- 60' → Refresh subs (tired players)
- 70' → Tactical subs (formation change)
- 80' → Final push (desperate measures)
- Emergency → If 2+ goals down

---

### 11. **Risiko/Catatan**
**Sumber:** Field `risiko` di database entries + validation logic

**Cara Kerja:**
Setiap database entry punya field `risiko` yang list potential problems:
- "Extremely vulnerable to counter if press fails"
- "High line vulnerable to pacey forwards"
- "Wing-backs need exceptional stamina"
- "Under siege, need mental strength"

**Ada juga runtime validation:**
- High Press + Tim Lelah = WARNING
- High Line + Slow Defenders vs Pacey = DANGER
- Possession + Direct Passing = CONTRADICTION

---

### 12. **Strategi Passing**
**Sumber:** Tidak ada function dedicated, derived from Gaya + Tempo

**Implisit dari:**
- Gaya Lawan yang dipilih (Possession, Counter, dll)
- Tempo yang di-generate
- Instruksi khusus

**Contoh Logic:**
- Tiki-Taka Gaya → Short passing implied
- Direct/Physical → Long passing implied
- High Tempo → Quick passing
- Low Tempo → Patient build-up

---

### 13. **Gaya Utama**
**Sumber:** Field `gaya` di `tacticalDatabase` entries

**Cara Kerja:**
- Hardcoded string di database
- Bisa kombinasi beberapa styles dengan " & " atau " | "
- Contoh:
  - "Vertical Tiki-Taka & Gegenpressing"
  - "Heavy Metal Football & Transitional Play"
  - "Compact Counter & Set Pieces | RECOMMENDED STYLE: Counter-Press/Defensive"
  - "Patient Domination | RECOMMENDED STYLE: Possession/Patient"

---

### 14. **Filosofi Offensive/Defensive**
**Sumber:** Derived from Situasi Game + Jenis Lawan + Formasi

**Tidak ada function explicit**, tapi implisit dari:
- Situasi Game:
  - Mengejar Skor → Offensive
  - Bertahan → Defensive
  - Imbang → Balanced
  
- Jenis Lawan:
  - vs Tim Kuat → More Defensive
  - vs Tim Lemah → More Offensive
  
- Formasi:
  - 5-4-1, 4-5-1 → Defensive
  - 4-3-3, 3-4-3 → Offensive
  - 4-2-3-1, 4-4-2 → Balanced

---

### 15. **Formasi Alternatif**
**Sumber:** Field `alternatif` di `tacticalDatabase`

**Cara Kerja:**
- Setiap database entry punya field `alternatif`
- Biasanya formasi yang:
  - Lebih defensive (jika winning)
  - Lebih offensive (jika losing)
  - Tactically similar tapi beda shape

**Contoh:**
- Main: "4-2-3-1 Attacking" → Alt: "3-5-2"
- Main: "4-3-3 Possession" → Alt: "4-5-1"
- Main: "5-4-1 Defensive" → Alt: "4-5-1"

---

## 🔄 FLOW DIAGRAM

```
User Input (Dropdowns)
    ↓
1. Build Database Key: "JenisLawan|FormasiLawan|SituasiGame"
    ↓
2. Lookup tacticalDatabase[key]
    ↓
3. If Match → Use database values:
   - Formasi (hardcoded)
   - Alternatif (hardcoded)
   - Gaya (hardcoded)
   - Out of Possession (hardcoded)
   - Risiko (hardcoded)
   - Subs plan (hardcoded)
    ↓
4. GENERATE dynamic values:
   - Instruksi (from generateInstructionsForFormation)
   - Tempo (from generateTempo - 4 categories)
   - Pemain Kunci (from generateKeyPlayers - per formation)
   - Defensive Line (from generateDefensiveLine - multi-factor)
   - Marking (from generateMarkingStrategy - formation + gaya)
   - Pressing (from generatePressingStrategy - kondisi + gaya)
   - Set Pieces (from setPiecesDatabase - per formation)
    ↓
5. Display all outputs in UI
```

---

## ⚠️ IMPORTANT NOTES

1. **Database-driven vs Generated:**
   - Database: Formasi, Alternatif, Gaya, OOP, Risiko
   - Generated: Instruksi, Tempo, Defensive Line, Marking, Pressing, Key Players

2. **Key Matching:**
   - Sistem sangat bergantung pada exact match key
   - Jika tidak ada match → bisa fall back ke default atau error

3. **Kondisi Tim OVERRIDE:**
   - "Tim Lelah" akan override banyak recommendations:
     - Tempo → Force Low
     - Defensive Line → -10%
     - Pressing → Max Mid/Low only

4. **Database Size:**
   - 150+ scenarios hardcoded
   - Tapi tidak semua kombinasi possible dari dropdown
   - Banyak yang overlap atau similar recommendations

5. **Prioritas Logic:**
   - Situasi Game > Jenis Lawan > Gaya Lawan > Formasi
   - Kondisi Tim = OVERRIDE semua (jika Lelah)
