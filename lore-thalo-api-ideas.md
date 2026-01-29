```thalo
2026-01-28T19:05Z create lore "Thalo Scripting API - Gelecek Fikirler" ^lore-thalo-api-ideas #thalo #ideas
  type: "insight"
  subject: ^project-thalo

  # Description
  Thalo'nun npm scripting API'si var: `@rejot-dev/thalo`

  ## Potansiyel Kullanımlar
  - [ ] **Custom Dashboard:** Thalo verilerini React'ta görselleştir (proje durumları, daily streak, lore grafiği)
  - [ ] **n8n Sync:** Yeni entry eklenince otomatik OpenMemory'ye kaydet
  - [ ] **Export:** JSON/CSV'ye toplu çıkar
  - [ ] **Stats:** Haftalık/aylık productivity metrikleri
  - [ ] **VoiceNotes → Thalo:** Sesli not otomasyonu (aşağıda detay)

  ## VoiceNotes Entegrasyonu
  **Akış:** VoiceNotes webhook → n8n → Thalo format → notes repo'ya git commit

  **Webhook docs:** https://help.voicenotes.com/en/articles/9895482-how-to-set-up-webhooks-integration

  **VoiceNotes gönderir:** transcript, summary, tags, created_at

  **Entity:** `journal` with `type: "voice"` and `source: "voicenotes"`

  **Örnek format:**
  ```
  create journal "Voice Note" ^journal-voice-{timestamp} #voice
    type: "voice"
    source: "voicenotes"

    # Transcript
    [transcript]

    # Summary
    [summary]
  ```

  **Gerekli:** n8n'de GitHub credentials kurulumu

  ## API Örneği
  \`\`\`javascript
  import { parse, query, validate } from '@rejot-dev/thalo'
  const entries = parse(markdownContent)
  const active = query(entries, 'project where status = "active"')
  \`\`\`

  ## Öncelik
  Şimdilik CLI yeterli. Dashboard hub Cowork JSX'leri için var.
  Thalo API'yi "Thalo verilerinden dashboard" ihtiyacı doğunca değerlendir.
```


---
Annotations: 0,1600 SHA-256 a83374de5d5b09bc29f37b66a64ec8347a33f051e6cc2b84668ae87cd8ab28b9
&Claude: 0,1600
...