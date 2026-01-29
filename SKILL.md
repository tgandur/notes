---
name: thalo-notes
description: Work with Tarık's Thalo knowledge base at ~/Documents/Notes. Create and update entries using Thalo-native syntax. Keep flat structure. Validate with thalo CLI. Optionally add Markdown wikilinks after Thalo blocks.
user-invocable: false
---

# Thalo Notes (Tarık)

## Location

```
~/Documents/Notes/
├── entities.thalo
├── AGENTS.md
├── *.md (flat structure: file name = content)
```

## Core Principles

- Thalo is structured plain text. Keep it Thalo-native.
- Flat structure: do not create nested folders unless explicitly requested.
- In .md files, all Thalo entries must be inside a single fenced block labeled `thalo`.
- Inside Thalo blocks:
  - No YAML frontmatter.
  - No Markdown frontmatter.
  - No JSON-style arrays unless explicitly required by the Thalo spec.
  - For multiple links, use comma-separated caret links (example: `related: ^a, ^b`).
  - Keep formatting tight: no decorative brackets, no extra blank lines.

## Required Workflow

1. Create or update entry
2. Run validation: `thalo check`
3. Fix errors until validation passes

## Quick CLI

```bash
cd ~/Documents/Notes && thalo check
thalo query "project" --json
thalo query 'project where status = "active"' --json
```

## Create vs Update (CRITICAL)

**File structure rule:**
- A file contains ONE `create` entry (the origin) followed by ZERO or MORE `update` entries.
- **NEVER delete the `create` entry when adding an update.**
- **ALWAYS append `update` entries BELOW the existing content.**
- Each update has its own timestamp, preserving full history.
- `update` must reference the same caret id (^link-id) as the original `create`.

**Example structure:**
```thalo
2026-01-28T10:00Z create project "Title" ^project-slug #tag
  status: "active"
  area: "research"

  # Goal
  Original goal

  # Progress
  - [x] Initial setup

2026-02-02T09:15Z update project "Title" ^project-slug
  status: "paused"

  # Context
  Paused due to competing priorities

  # Progress
  - [x] Phase 1 complete
```


## Header Line Syntax

```
{timestamp} {directive} {entity} "Title" [^link-id] [#tags]
```

- **directive:** `create` | `update`
- **timestamp:** `YYYY-MM-DDTHH:MM` or `YYYY-MM-DDTHH:MMZ`
- **link-id:** caret identifier (recommended)
- **tags:** `#tag #another`

## Metadata Rules

- Metadata consists of indented key-value pairs.
- Allowed value types:
  - strings (quoted or unquoted)
  - links (`^id`)
  - multiple links as comma-separated list (`^a, ^b`)
  - dates (`YYYY-MM-DD`)
  - date ranges (`YYYY ~ YYYY`)
  - enums matching entity schema
- **Do not invent metadata fields.** Use only fields defined in entities.thalo.

## Sections

- Every content line must be inside a section.
- Sections begin after a single blank line following metadata.
- Section headings start with `# `. Indented.
- Required and optional sections are defined per entity schema.

## Links

Use caret links to reference other entries:
- `related: ^clean-code`
- `related: ^entry-one, ^entry-two`
- `subject: ^self` (if defined in schema)

## Entity Summaries

### daily
- `date`: datetime (required)
- `energy`: "high" | "medium" | "low" (optional)
- Sections: Focus (required), Tasks, Notes, Wins, Learned

### project
- `status`: "active" | "paused" | "completed" | "abandoned" (required)
- `area`: string (required)
- Sections: Goal (required), Context, Progress, Next, Resources

### lore
- `type`: "fact" | "insight" | "framework" | "method" (required)
- `subject`: string or link (required)
- `related`: link list (optional, comma-separated)
- Sections: Description (required)

### reference
**IMPORTANT:** Reference metadata is Thalo metadata, not Markdown frontmatter.
- `ref-type`: "paper" | "book" | "article" | "video" | "tweet" | "other" (required)
- `author`: string (required)
- `published`: datetime (optional)
- `url`: string (optional)
- `file`: string (optional)
- `status`: "unread" | "read" | "processed" (default: unread)
- `related`: link list (optional)
- Sections: Summary (required), Key Takeaways (required), Notes (optional)
- **Filename convention:** `ref-authoryear-short-title.md`

### opinion
- `confidence`: "high" | "medium" | "low" (required)
- Sections: Claim (required), Reasoning (required), Caveats (optional)

## Templates

### Project (create)

```thalo
2026-01-29T10:00Z create project "Title" ^project-slug #tag
  status: "active"
  area: "research"

  # Goal
  What success looks like.

  # Progress
  - [x] Done item
  - [ ] Pending item

  # Next
  - [ ] Next action
```

### Project (update)

```thalo
2026-02-02T09:15Z update project "Title" ^project-slug #tag
  status: "paused"
  area: "research"

  # Context
  Paused due to competing priorities.

  # Progress
  - [x] Initial draft complete

  # Next
  - [ ] Re-evaluate later
```

### Lore (create)

```thalo
2026-01-29T10:00Z create lore "Title" ^lore-slug #tag
  type: "insight"
  subject: ^project-slug
  related: ^link-1, ^link-2

  # Description
  The fact or insight.
```

### Lore (update)

```thalo
2026-02-10T12:40Z update lore "Title" ^lore-slug #tag
  type: "insight"
  subject: ^project-slug
  related: ^link-1, ^link-2, ^link-3

  # Description
  Updated description with clarified takeaway.
```

### Daily (create)

```thalo
2026-01-29T10:00Z create daily "2026-01-29" ^daily-2026-01-29
  date: 2026-01-29
  energy: "medium"

  # Focus
  - Priority 1
  - Priority 2

  # Tasks
  - [ ] Task 1

  # Notes
  End of day notes
```

### Reference (create)

```thalo
2026-01-29T10:00Z create reference "AuthorYear - Paper Title" ^ref-authoryear-short #research
  ref-type: "paper"
  author: "Author Name"
  published: 2025-01-01
  url: "https://doi.org/..."
  status: "read"
  related: ^project-slug

  # Summary
  Brief summary of the paper.

  # Key Takeaways
  - Key point 1
  - Key point 2

  # Notes
  Optional processing notes.
```

## Markdown Add-on (The Archive / Wikilinks)

**Purpose:** Improve interoperability with tools that index wikilinks.

**Rules:**
- After every Thalo block in a markdown file, add exactly one plain-text line.
- That line must contain wikilinks for every caret link used in the Thalo block.
- De-duplicate links.
- This line is derived redundancy. **Never place it inside the Thalo block.**

**Format example:**
```markdown
```thalo
2026-01-29T10:00Z create project "Title" ^project-slug #tag
  status: "active"
  related: ^link-1, ^link-2
  ...
```
[[^project-slug]] [[^link-1]] [[^link-2]]
```

## Anti-patterns

- ❌ `related: [^a, ^b]` (no JSON arrays)
- ❌ YAML or Markdown frontmatter inside Thalo blocks
- ❌ Extra blank lines between metadata fields
- ❌ Mixing templates or nesting code blocks
- ❌ Placing Markdown Add-on content inside Thalo blocks
- ❌ Replacing `create` with `update` (must append)
- ❌ Deleting original `create` entry when updating

