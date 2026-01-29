```thalo
2026-01-29T10:00Z create lore "Türkçe Teknik Dokümantasyon Rubriği" ^lore-turkce-rubrik #standard #writing
  type: "framework"
  subject: "documentation"
  related: ^project-sem-yz

  # Description
  Türkçe teknik ve eğitim dokümanları için dil tutarlılığı değerlendirme rubriği. TDK yazım kuralları ve teknik çeviri standartlarına dayalı.
```

[[^lore-turkce-rubrik]]

# Türkçe Teknik Dokümantasyon Rubriği

## Değerlendirme Kriterleri (100 Puan)

### 1. Terim Tutarlılığı (30 puan)

| Puan | Kriter                                             |
| ---- | -------------------------------------------------- |
| 30   | Tüm teknik terimler belgeler arasında %100 tutarlı |
| 20   | %90-99 tutarlılık, küçük sapmalar                  |
| 10   | %70-89 tutarlılık, belirgin tutarsızlıklar         |
| 0    | %70 altı, ciddi tutarsızlıklar                     |

**Kontrol noktaları:**

- Aynı kavram için tek terim kullanımı (ör: YZ vs AI vs Yapay Zeka)
- İlk kullanımda açık yazım, sonra kısaltma (ör: "Yapay Zeka (YZ)" → "YZ")
- Terim sözlüğüne uygunluk

### 2. Türkçeleştirme Oranı (25 puan)

| Puan | Kriter                                                       |
| ---- | ------------------------------------------------------------ |
| 25   | Tüm çevrilebilir terimler Türkçe, yalnızca zorunlu İngilizce |
| 18   | %90+ Türkçe, birkaç gereksiz İngilizce                       |
| 10   | %70-89 Türkçe, belirgin İngilizce kalıntılar                 |
| 0    | %70 altı, aşırı İngilizce kullanımı                          |

**Zorunlu Türkçe:**

- deliverable → çıktı
- checklist → kontrol listesi
- slide deck → sunum dosyası
- handout → el kitapçığı
- Q&A → Soru-Cevap
- demo → gösteri/canlı gösteri

**Kalabilecek İngilizce (teknik terimler):**

- prompt (yerleşik teknik terim)
- framework (ilk kullanımda "çerçeve (framework)" sonra "çerçeve")
- Orijinal isimler: CO-STAR, BAŞTAF, 4T, 4D

### 3. TDK Yazım Kuralları (20 puan)

| Puan | Kriter                         |
| ---- | ------------------------------ |
| 20   | Tüm yazım kurallarına tam uyum |
| 15   | 1-2 küçük hata                 |
| 10   | 3-5 hata                       |
| 0    | 5+ hata                        |

**Kontrol noktaları:**

- Kesme işareti kullanımı (YZ'nin, YZ'ye, YZ'de)
- Birleşik/ayrı yazım (yapay zeka - ayrı)
- Büyük/küçük harf tutarlılığı
- Noktalama işaretleri

### 4. Üslup Tutarlılığı (15 puan)

| Puan | Kriter                                            |
| ---- | ------------------------------------------------- |
| 15   | Tüm belgelerde tutarlı akademik/profesyonel üslup |
| 10   | Küçük üslup farklılıkları                         |
| 5    | Belirgin üslup tutarsızlıkları                    |
| 0    | Ciddi üslup sorunları                             |

**Kontrol noktaları:**

- Edilgen/etken yapı tutarlılığı
- Hitap biçimi tutarlılığı
- Cümle uzunluğu dengesi

### 5. Format Bütünlüğü (10 puan)

| Puan | Kriter                                 |
| ---- | -------------------------------------- |
| 10   | Thalo formatı korunmuş, markdown doğru |
| 5    | Küçük format sorunları                 |
| 0    | Format bozulmuş                        |

**Kontrol noktaları:**

- Thalo code block'ları sağlam
- Markdown tabloları düzgün
- Başlık hiyerarşisi tutarlı

---

## Terim Sözlüğü (Bu Proje İçin)

| İngilizce                    | Türkçe                  | Not                                                     |
| ---------------------------- | ----------------------- | ------------------------------------------------------- |
| AI / Artificial Intelligence | YZ (Yapay Zeka)         | İlk kullanımda "Yapay Zeka (YZ)"                        |
| Generative AI                | Üretici YZ              |                                                         |
| Framework                    | Çerçeve                 | Orijinal isimle birlikte: "4D Çerçevesi (4D Framework)" |
| Deliverable                  | Çıktı                   |                                                         |
| Slide deck                   | Sunum dosyası           |                                                         |
| Handout                      | El kitapçığı            |                                                         |
| Checklist                    | Kontrol listesi         |                                                         |
| Q&A                          | Soru-Cevap              |                                                         |
| Demo                         | Gösteri / Canlı gösteri |                                                         |
| Prompt                       | Prompt                  | Teknik terim olarak kalır                               |

---

## Değerlendirme Formülü

```
Toplam Puan = Terim Tutarlılığı (30) + Türkçeleştirme (25) + TDK Kuralları (20) + Üslup (15) + Format (10)
```

**Hedef:** 100/100

---

_Kaynaklar: [TDK Yazım Kılavuzu](https://tdk.gov.tr/tdk/kurumsal/yazim-kilavuzu/), [TDK Yazım Kuralları](https://tdk.gov.tr/kategori/icerik/yazim-kurallari/)_

---

Annotations: 0,3384 SHA-256 ce88a6a9689856591f46ac14b9fc508c3d42226c2ff97db0f8c9e12d2849ee78
&Claude: 0,3384
...
