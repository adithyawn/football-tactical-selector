# Update Progress - Referensi Section

## ✅ SUDAH DIUPDATE (Sesuai Sistem Database Sebenarnya)

1. **Formasi Utama** ✅
   - Sumber: Tactical Database (hardcoded)
   - Key: "JenisLawan|FormasiLawan|SituasiGame"
   
2. **Formasi Alternatif** ✅
   - Sumber: Database field "alternatif"
   - Pre-defined per skenario

3. **Instruksi Khusus** ✅
   - Sumber: Function generateInstructionsForFormation()
   - Generated on-the-fly

4. **Tempo Permainan** ✅
   - Sumber: Function generateTempo()
   - 4 kategori: Situasi + Gaya + Jenis + Formasi
   
5. **Pemain Kunci** ✅
   - Sumber: Function generateKeyPlayers()
   - Hardcoded per formasi

6. **Out of Possession** ✅
   - Sumber: Database field "outOfPossession"
   - Format: "Formasi + Block Type"

7. **Defensive Line** ✅
   - Sumber: Function generateDefensiveLine()
   - Multi-factor calculation

## 🔄 PERLU DIUPDATE

8. **Marking Strategy**
   - SAAT INI: Penjelasan generic
   - SEHARUSNYA: Function generateMarkingStrategy() - formasi + gaya lawan

9. **Pressing Strategy**
   - SAAT INI: Penjelasan generic  
   - SEHARUSNYA: Function generatePressingStrategy() - kondisi + gaya + jenis + situasi

10. **Set Pieces**
    - SAAT INI: Penjelasan generic
    - SEHARUSNYA: setPiecesDatabase - hardcoded per formasi

11. **Substitutions**
    - SAAT INI: Penjelasan generic
    - SEHARUSNYA: Database field "substitutions" - hardcoded patterns

12. **Risiko/Catatan**
    - SAAT INI: Penjelasan generic
    - SEHARUSNYA: Database field "risiko" + validation logic

13. **Strategi Passing**
    - SAAT INI: Tidak ada / generic
    - SEHARUSNYA: Derived dari Gaya + Tempo (implisit)

14. **Gaya Utama**
    - SAAT INI: Tidak jelas
    - SEHARUSNYA: Database field "gaya" - hardcoded strings

15. **Filosofi Offensive/Defensive**
    - SAAT INI: Tidak jelas
    - SEHARUSNYA: Derived dari Situasi + Jenis + Formasi

## NEXT STEPS

Lanjutkan update section 8-15 agar sesuai dengan sistem database sebenarnya.
