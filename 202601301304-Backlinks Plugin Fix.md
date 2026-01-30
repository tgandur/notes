# Backlinks Plugin Fix
#ref #the-archive

---

## Problem

The Archive'ın "Append Backlinks" plugin'i (`com.akeirou.appendbacklinks`) wikilink'leri bulamıyordu.

**Sebep:** Plugin sadece `[[timestamp]]` arıyordu, ama convention'da linkler `[[timestamp-title]]` formatında.

## Çözüm

**Dosya:** `~/Library/Application Support/TheArchive/Plugins/Installed/com.akeirou.appendbacklinks.thearchiveplugin/main.js`

**Line 31'i değiştir:**

```javascript
// ESKİ (çalışmıyor):
const matchString = "\\[\\["+currentNoteID+"\\]\\]"

// YENİ (çalışıyor):
const matchString = "\\[\\["+currentNoteID+"[^\\]]*\\]\\]"
```

**Açıklama:** `[^\\]]*` regex'i "]] karakterine kadar her şey" anlamına gelir. Böylece `[[202512011220-AI Ethics...]]` gibi linkler de bulunur.

## Plugin Güncellenirse

Eğer plugin güncellenirse bu fix kaybolur. Tekrar aynı satırı düzelt.

**Kaynak:** https://github.com/BrBorghi/append_backlinks

---

*Fixed: 2026-01-30*
