```thalo
2026-01-28T17:09Z create lore "Thalo CLI Reference" ^lore-thalo-reference #tools #knowledge-management
  type: "fact"
  subject: "thalo"

  # Description
  Thalo (Thought And Lore Language) - plain-text structured knowledge format.
  LLM-friendly, version-controllable, editor-agnostic.
  Website: https://thalo.rejot.dev/
```

# Thalo CLI Reference

## Kurulum

```bash
npm install -g @rejot-dev/thalo-cli
```

## Temel Komutlar

| Komut | Açıklama |
|-------|----------|
| `thalo init` | Yeni knowledge base başlat |
| `thalo check` | Validate entries |
| `thalo check [file]` | Tek dosya validate |
| `thalo query "..."` | Entry sorgula |
| `thalo format` | Prettier ile formatla |
| `thalo lsp` | Language Server başlat |
| `thalo actualize` | Synthesis'leri çalıştır |

## Query Syntax

```bash
# Entity type ile
thalo query "project"
thalo query "daily"
thalo query "lore"

# Link ID ile (^prefix)
thalo query "project where ^project-sem-yz"

# Tag ile (#prefix)
thalo query "project where #workshop"
thalo query "lore where #career"

# Field ile
thalo query 'project where status = "active"'
thalo query 'lore where type = "fact"'

# Kombinasyon (and)
thalo query 'project where #workshop and status = "active"'

# JSON output
thalo query "project" --json

# Raw output
thalo query "project" --format raw

# Tarih filtresi
thalo query "daily" --since ts:2026-01-20T00:00Z

# Limit
thalo query "project" -n 5
```

## Entry Syntax

```thalo
{timestamp} {directive} {entity} "Title" [^link-id] [#tags...]
  field: "value"
  field2: value2

  # Section Name
  Content here (markdown)

  # Another Section
  More content
```

### Timestamp
```bash
date -u +"%Y-%m-%dT%H:%MZ"  # 2026-01-28T17:09Z
```

### Directives
- `create` - yeni entry
- `update` - mevcut entry güncelle
- `define-entity` - entity şeması tanımla
- `define-synthesis` - synthesis tanımla

### Field Types
- `string` - "quoted" veya unquoted
- `datetime` - 2026-01-28 veya 2026-01-28T17:00Z
- `daterange` - 2020 ~ 2021
- `link` - ^link-id
- `link[]` - array of links
- Enums - "active" | "paused" | "completed"

## Entity Tanımlama

```thalo
2026-01-28T17:00Z define-entity myentity "Description" ^myentity
  # Metadata
  required_field: string ; "Description"
  optional_field?: number ; "Optional field"
  enum_field: "a" | "b" | "c"

  # Sections
  RequiredSection ; "This section is required"
  OptionalSection? ; "This is optional"
```

## Synthesis (AI Query)

```thalo
2026-01-28T17:00Z define-synthesis "Summary Title" ^synthesis-id
  sources: lore where subject = ^self

  # Prompt
  Write a narrative summary from the collected facts.
```

`thalo actualize` komutu synthesis'leri çalıştırır.

## Varsayılan Entity'ler

| Entity | Kullanım |
|--------|----------|
| `daily` | Günlük planning |
| `project` | Proje takibi |
| `lore` | Bilgi/fact |
| `opinion` | Görüş/tutum |
| `journal` | Kişisel yansıma |
| `reference` | Dış kaynak notu |

## Editor Entegrasyonu

### VS Code / Codium
```bash
# Extension build & install
git clone https://github.com/rejot-dev/thalo.git
cd thalo/packages/thalo-vscode
pnpm install && pnpm build
codium --install-extension thalo-vscode-0.0.1.vsix
```

### LSP
```bash
thalo lsp  # Editor'dan bağlanılabilir
```

## Dosya Yapısı (Flat)

```
~/Documents/Notes/
├── entities.thalo    # Entity tanımları
├── AGENTS.md         # Syntax rehberi
└── *.md              # Tüm entry'ler (flat)
```

Entity type dosya adından değil, `thalo query` ile filtrelenir.

## Markdown İçinde Thalo

Thalo kod blokları `.md` dosyalarında çalışır:

````markdown
```thalo
2026-01-28T17:00Z create lore "Title" ^id
  type: "fact"
  subject: "topic"

  # Description
  Content here
```
````

## Scripting API

```bash
npm install @rejot-dev/thalo
```

Programmatic access için - custom validation, export, automation.

## Kaynaklar

- Docs: https://thalo.rejot.dev/docs
- GitHub: https://github.com/rejot-dev/thalo
- Playground: https://thalo.rejot.dev/playground


---
Annotations: 0,3749 SHA-256 a8fbf5220682bb0c8f6baa549fdbf2077d612f247ffa6d3ef0103cde6bb7543a
&Claude: 0,3749
...