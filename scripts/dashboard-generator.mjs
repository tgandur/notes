/**
 * Thalo Project Dashboard Generator
 * Real-time dashboard that updates when entries change
 *
 * Usage: node dashboard-generator.mjs
 */

import { loadThalo } from "@rejot-dev/thalo/api";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const NOTES_PATH = process.env.NOTES_PATH || resolve(__dirname, "..");
const OUTPUT_PATH = process.env.OUTPUT_PATH || resolve(__dirname, "..", "dashboard.md");

function getMetadataValue(entry, key) {
  if (!entry.raw?.metadata) return undefined;
  const meta = entry.raw.metadata.find((m) => m.key.value === key);
  return meta?.value?.raw?.replace(/"/g, "");
}

async function collectDashboardData(workspace) {
  const data = {
    projects: { active: [], paused: [], completed: [] },
    references: { total: 0, unread: 0, read: 0, processed: 0 },
    lore: { total: 0, byType: {} },
    recentEntries: [],
    generatedAt: new Date().toISOString(),
  };

  const allEntries = [];

  workspace.visit({
    visitInstanceEntry(entry) {
      allEntries.push({
        timestamp: entry.timestamp,
        title: entry.title,
        type: entry.entity,
      });

      // Projects
      if (entry.entity === "project") {
        const status = getMetadataValue(entry, "status") || "active";
        const area = getMetadataValue(entry, "area") || "unknown";

        let refCount = 0;
        let unreadCount = 0;

        if (entry.linkId) {
          try {
            const refs = workspace.findReferences(`^${entry.linkId}`, false);
            for (const ref of refs) {
              if (ref.kind === "link" && ref.entry?.entity === "reference") {
                refCount++;
                const refStatus = getMetadataValue(ref.entry, "status");
                if (refStatus === "unread") unreadCount++;
              }
            }
          } catch (e) {
            // ignore
          }
        }

        const projectStats = {
          title: entry.title,
          linkId: entry.linkId || "",
          status,
          area,
          refCount,
          unreadCount,
        };

        if (status === "active") data.projects.active.push(projectStats);
        else if (status === "paused") data.projects.paused.push(projectStats);
        else if (status === "completed") data.projects.completed.push(projectStats);
      }

      // References
      if (entry.entity === "reference") {
        data.references.total++;
        const status = getMetadataValue(entry, "status") || "unread";
        if (status === "unread") data.references.unread++;
        else if (status === "read") data.references.read++;
        else if (status === "processed") data.references.processed++;
      }

      // Lore
      if (entry.entity === "lore") {
        data.lore.total++;
        const type = getMetadataValue(entry, "type") || "other";
        data.lore.byType[type] = (data.lore.byType[type] || 0) + 1;
      }
    },
  });

  data.recentEntries = allEntries
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    .slice(0, 10);

  return data;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("tr-TR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function generateMarkdown(data) {
  const lines = [];

  lines.push(`# 📊 Project Dashboard`);
  lines.push(``);
  lines.push(`> Auto-generated: ${formatDate(data.generatedAt)}`);
  lines.push(``);

  // Quick Stats
  lines.push(`## Quick Stats`);
  lines.push(``);
  lines.push(`| Metric | Count |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Active Projects | ${data.projects.active.length} |`);
  lines.push(`| Total References | ${data.references.total} |`);
  lines.push(`| Unread Papers | ${data.references.unread} |`);
  lines.push(`| Lore Entries | ${data.lore.total} |`);
  lines.push(``);

  // Active Projects
  if (data.projects.active.length > 0) {
    lines.push(`## 🟢 Active Projects (${data.projects.active.length})`);
    lines.push(``);
    lines.push(`| Project | Area | Refs | Unread |`);
    lines.push(`|---------|------|------|--------|`);
    for (const p of data.projects.active) {
      const link = p.linkId ? `[[^${p.linkId}]]` : p.title;
      lines.push(`| ${link} | ${p.area} | ${p.refCount} | ${p.unreadCount} |`);
    }
    lines.push(``);
  }

  // Paused Projects
  if (data.projects.paused.length > 0) {
    lines.push(`## ⏸️ Paused Projects (${data.projects.paused.length})`);
    lines.push(``);
    for (const p of data.projects.paused) {
      const link = p.linkId ? `[[^${p.linkId}]]` : p.title;
      lines.push(`- ${link} (${p.area})`);
    }
    lines.push(``);
  }

  // Completed Projects
  if (data.projects.completed.length > 0) {
    lines.push(`## ✅ Completed Projects (${data.projects.completed.length})`);
    lines.push(``);
    for (const p of data.projects.completed) {
      const link = p.linkId ? `[[^${p.linkId}]]` : p.title;
      lines.push(`- ${link}`);
    }
    lines.push(``);
  }

  // Reference Stats
  lines.push(`## 📚 References`);
  lines.push(``);
  lines.push(`| Status | Count |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Unread | ${data.references.unread} |`);
  lines.push(`| Read | ${data.references.read} |`);
  lines.push(`| Processed | ${data.references.processed} |`);
  lines.push(`| **Total** | **${data.references.total}** |`);
  lines.push(``);

  // Lore by Type
  if (data.lore.total > 0) {
    lines.push(`## 🧠 Knowledge (Lore)`);
    lines.push(``);
    lines.push(`| Type | Count |`);
    lines.push(`|------|-------|`);
    for (const [type, count] of Object.entries(data.lore.byType).sort((a, b) => b[1] - a[1])) {
      lines.push(`| ${type} | ${count} |`);
    }
    lines.push(`| **Total** | **${data.lore.total}** |`);
    lines.push(``);
  }

  // Recent Activity
  if (data.recentEntries.length > 0) {
    lines.push(`## 🕐 Recent Activity`);
    lines.push(``);
    for (const entry of data.recentEntries) {
      const date = formatDate(entry.timestamp);
      lines.push(`- **${date}** — ${entry.type}: ${entry.title}`);
    }
    lines.push(``);
  }

  return lines.join("\n");
}

async function generateDashboard(workspace) {
  const data = await collectDashboardData(workspace);
  const markdown = generateMarkdown(data);
  writeFileSync(OUTPUT_PATH, markdown);
  console.log(`[${new Date().toISOString()}] Dashboard updated: ${OUTPUT_PATH}`);
}

async function main() {
  const watchMode = !process.argv.includes("--once");

  console.log(`Loading Thalo workspace from: ${NOTES_PATH}`);
  const workspace = await loadThalo(NOTES_PATH);

  // Initial generation
  await generateDashboard(workspace);

  if (!watchMode) {
    console.log("Single run complete.");
    return;
  }

  // Watch for changes
  console.log("Watching for changes... (Ctrl+C to stop)");

  const controller = new AbortController();

  process.on("SIGINT", () => {
    console.log("\nStopping...");
    controller.abort();
    process.exit(0);
  });

  try {
    const changes = workspace.watch({
      includeExisting: false,
      signal: controller.signal,
    });

    for await (const change of changes) {
      const added = change.added?.length || 0;
      const updated = change.updated?.length || 0;
      const removed = change.removed?.length || 0;

      if (added + updated + removed > 0) {
        console.log(`Changes detected: +${added} ~${updated} -${removed}`);
        await generateDashboard(workspace);
      }
    }
  } catch (e) {
    if (e.name !== "AbortError") throw e;
  }
}

main().catch(console.error);
