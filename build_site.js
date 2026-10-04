const fs = require('fs');
const path = require('path');

let marked;
try {
  marked = require('marked').marked;
} catch (e) {
  marked = require('./module_1_basics_of_ai/node_modules/marked').marked;
}

marked.setOptions({
  gfm: true,
  breaks: true,
});

const rootDir = __dirname;

// Helper to convert callouts with FontAwesome icons
function formatCallouts(content) {
  let res = content;
  res = res.replace(/>\s*\[!NOTE\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (m, p1) => {
    return `<div class="alert alert-note"><strong><i class="fa-solid fa-circle-info" style="margin-right:6px;"></i>NOTE:</strong> ${p1.replace(/\n>/g, '\n')}</div>`;
  });
  res = res.replace(/>\s*\[!TIP\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (m, p1) => {
    return `<div class="alert alert-tip"><strong><i class="fa-solid fa-lightbulb" style="margin-right:6px;"></i>PRO TIP:</strong> ${p1.replace(/\n>/g, '\n')}</div>`;
  });
  res = res.replace(/>\s*\[!WARNING\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (m, p1) => {
    return `<div class="alert alert-warning"><strong><i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i>WARNING:</strong> ${p1.replace(/\n>/g, '\n')}</div>`;
  });
  res = res.replace(/>\s*\[!IMPORTANT\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (m, p1) => {
    return `<div class="alert alert-important"><strong><i class="fa-solid fa-circle-exclamation" style="margin-right:6px;"></i>IMPORTANT:</strong> ${p1.replace(/\n>/g, '\n')}</div>`;
  });
  res = res.replace(/>\s*\[!CAUTION\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (m, p1) => {
    return `<div class="alert alert-important"><strong><i class="fa-solid fa-hand" style="margin-right:6px;"></i>CAUTION:</strong> ${p1.replace(/\n>/g, '\n')}</div>`;
  });
  return res;
}

// Master Page Shell (Light Theme Only, Mobile First, FontAwesome CDN)
function renderPageShell({ title, activeNav, sidebarHtml, contentHtml, breadcrumb = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${title} | AI-Enabled MS Office & Advanced Excel</title>
  <meta name="description" content="Classroom-ready student notes, practical guides, and English prompts for AI-Enabled MS Office & Advanced Excel.">
  
  <!-- FontAwesome Free 6.5.1 CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>">
</head>
<body>
  <!-- Mobile Sidebar Overlay Backdrop -->
  <div class="sidebar-overlay" id="sidebar-overlay"></div>

  <!-- Sticky Mobile-First Navigation Header -->
  <header class="navbar">
    <div class="nav-left">
      <button class="btn-icon mobile-menu-btn" id="mobile-menu-btn" aria-label="Open course menu">
        <i class="fa-solid fa-bars"></i>
      </button>
      <a href="index.html" class="nav-brand">
        <div class="brand-icon">
          <i class="fa-solid fa-bolt"></i>
        </div>
        <div class="brand-info">
          <span class="brand-title">AI & Excel</span>
          <span class="brand-sub">Student Portal</span>
        </div>
      </a>
    </div>

    <!-- Desktop Navigation Links -->
    <nav class="nav-links">
      <a href="index.html" class="nav-item ${activeNav === 'home' ? 'active' : ''}">
        <i class="fa-solid fa-house"></i> Home
      </a>
      <a href="module-1.html" class="nav-item ${activeNav === 'mod1' ? 'active' : ''}">
        <i class="fa-solid fa-brain"></i> Module 1
      </a>
      <a href="module-2.html" class="nav-item ${activeNav === 'mod2' ? 'active' : ''}">
        <i class="fa-solid fa-briefcase"></i> Module 2
      </a>
      <a href="module-3.html" class="nav-item ${activeNav === 'mod3' ? 'active' : ''}">
        <i class="fa-solid fa-file-excel"></i> Module 3
      </a>
      <a href="datasets.html" class="nav-item ${activeNav === 'data' ? 'active' : ''}">
        <i class="fa-solid fa-table"></i> Datasets
      </a>
      <a href="downloads.html" class="nav-item ${activeNav === 'downloads' ? 'active' : ''}">
        <i class="fa-solid fa-download"></i> Downloads
      </a>
    </nav>

    <!-- Top Right Action Buttons -->
    <div class="nav-right">
      <button class="search-trigger-btn" id="search-btn" aria-label="Search course notes">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="search-trigger-text">Search...</span>
        <span class="search-shortcut">Ctrl K</span>
      </button>
      <a href="downloads.html" class="btn-icon" title="Download Materials" aria-label="Download PDFs">
        <i class="fa-solid fa-download"></i>
      </a>
    </div>
  </header>

  <!-- Layout Container -->
  <div class="layout-container">
    <!-- Responsive Drawer / Desktop Sidebar -->
    ${sidebarHtml ? `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <span class="sidebar-header-title">
          <i class="fa-solid fa-book-open"></i> Course Navigation
        </span>
        <button class="btn-icon" id="sidebar-close-btn" aria-label="Close menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="sidebar-body">
        ${sidebarHtml}
      </div>
    </aside>` : ''}

    <!-- Main Content Reader -->
    <main class="main-wrapper">
      <div class="content-container">
        ${breadcrumb ? `
        <nav class="breadcrumb" aria-label="Breadcrumb">
          ${breadcrumb}
        </nav>` : ''}
        
        <article class="content-body">
          ${contentHtml}
        </article>
      </div>
    </main>
  </div>

  <!-- Global Instant Search Modal -->
  <div class="search-backdrop" id="search-backdrop">
    <div class="search-window">
      <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass" style="color:var(--text-muted);"></i>
        <input type="text" id="search-input" placeholder="Search prompts, formulas, lessons, concepts..." autocomplete="off">
        <button class="btn-icon" id="search-close" style="width:30px;height:30px;font-size:0.75rem;" aria-label="Close search">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="search-results" id="search-results">
        <div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.86rem;">
          <i class="fa-solid fa-keyboard" style="margin-right:6px;"></i>Type keywords to search lessons, formulas & prompts...
        </div>
      </div>
    </div>
  </div>

  <!-- Clean Footer -->
  <footer class="footer">
    <div style="max-width:800px; margin:0 auto; line-height:1.6;">
      <p style="font-weight:600; color:var(--text-primary);">
        <i class="fa-solid fa-graduation-cap" style="margin-right:6px;"></i>AI-Enabled MS Office & Advanced Excel
      </p>
      <p style="font-size:0.8rem; margin-top:4px; color:var(--text-muted);">
        Official Classroom Student Portal • Explanations in Hinglish • Prompts in Professional English
      </p>
      <div style="margin-top:12px; display:flex; justify-content:center; gap:16px; font-size:0.82rem; flex-wrap:wrap;">
        <a href="downloads.html"><i class="fa-solid fa-file-pdf"></i> Download PDF Notes</a>
        <span>•</span>
        <a href="datasets.html"><i class="fa-solid fa-file-csv"></i> 10 Practice CSVs</a>
        <span>•</span>
        <a href="index.html"><i class="fa-solid fa-list-check"></i> Course Syllabus</a>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

// -------------------------------------------------------------
// MODULE CONFIGURATIONS
// -------------------------------------------------------------
const module1Files = [
  { file: '00_Module1_Overview.md', title: 'Orientation & Overview', id: 'm1-0', icon: 'fa-compass' },
  { file: '01_Introduction_to_AI.md', title: '1. Introduction to AI & GenAI', id: 'm1-1', icon: 'fa-brain' },
  { file: '02_Introduction_to_AI_Tools.md', title: '2. Introduction to AI Tools', id: 'm1-2', icon: 'fa-screwdriver-wrench' },
  { file: '03_Basic_Prompt_Engineering.md', title: '3. Basic Prompt Engineering', id: 'm1-3', icon: 'fa-terminal' },
  { file: '04_AI_for_Research_and_Information.md', title: '4. AI for Research & Info', id: 'm1-4', icon: 'fa-magnifying-glass-chart' },
  { file: '05_AI_for_Everyday_Productivity.md', title: '5. AI for Productivity', id: 'm1-5', icon: 'fa-calendar-check' },
  { file: '06_AI_Safety_and_Responsible_Use.md', title: '6. AI Safety & Privacy', id: 'm1-6', icon: 'fa-shield-halved' },
  { file: '07_Cheat_Sheet_Glossary_FAQ_Final_Test.md', title: '7. Cheat Sheet & Final Test', id: 'm1-7', icon: 'fa-clipboard-check' }
];

const module2Files = [
  { file: '00_Module2_Overview.md', title: 'Orientation & Overview', id: 'm2-0', icon: 'fa-compass' },
  { file: 'A1_AI_Assisted_Writing.md', title: 'A1. AI-Assisted Writing', id: 'm2-a1', icon: 'fa-pen-nib' },
  { file: 'A2_Professional_Writing.md', title: 'A2. Professional Writing', id: 'm2-a2', icon: 'fa-envelope-open-text' },
  { file: 'A3_Grammar_and_Proofreading.md', title: 'A3. Grammar & Proofreading', id: 'm2-a3', icon: 'fa-spell-check' },
  { file: 'A4_Writing_Quality_Tools.md', title: 'A4. Writing Quality Tools', id: 'm2-a4', icon: 'fa-circle-check' },
  { file: 'A5_AI_Document_Analysis.md', title: 'A5. AI Document Analysis', id: 'm2-a5', icon: 'fa-file-lines' },
  { file: 'B1_AI_Presentation_Planning.md', title: 'B1. PPT Planning & Outlines', id: 'm2-b1', icon: 'fa-sitemap' },
  { file: 'B2_AI_Presentation_Creation.md', title: 'B2. Slide Content Creation', id: 'm2-b2', icon: 'fa-desktop' },
  { file: 'B3_AI_Presentation_Improvement.md', title: 'B3. Slide Improvement & Audit', id: 'm2-b3', icon: 'fa-wand-magic-sparkles' },
  { file: 'B4_Presentation_Delivery_with_AI.md', title: 'B4. Delivery & Speaker Notes', id: 'm2-b4', icon: 'fa-bullhorn' },
  { file: 'B5_Microsoft_Copilot_for_PowerPoint.md', title: 'B5. Copilot for PowerPoint', id: 'm2-b5', icon: 'fa-robot' },
  { file: 'C1_AI_as_Excel_Assistant.md', title: 'C1. AI as Excel Assistant', id: 'm2-c1', icon: 'fa-file-excel' },
  { file: 'C2_Formula_Assistance.md', title: 'C2. Basic Formula Help', id: 'm2-c2', icon: 'fa-calculator' },
  { file: 'C3_Basic_Data_Assistance.md', title: 'C3. Data Cleaning with AI', id: 'm2-c3', icon: 'fa-broom' },
  { file: 'C4_Basic_Data_Analysis.md', title: 'C4. Basic Analysis & Trends', id: 'm2-c4', icon: 'fa-chart-pie' },
  { file: 'C5_AI_Assisted_Excel_Work.md', title: 'C5. Verification Protocol', id: 'm2-c5', icon: 'fa-circle-check' },
  { file: '99_CheatSheet_Glossary_FAQ_FinalTest_Capstone.md', title: 'Wrap-Up, Test & Capstone', id: 'm2-99', icon: 'fa-trophy' }
];

const module3Files = [
  { file: '00_Module3_Overview.md', title: 'Orientation & Golden Rules', id: 'm3-0', icon: 'fa-compass' },
  { file: 'M3-1_Advanced_Formula_with_AI.md', title: 'M3-1. Advanced Formulas (INDEX/MATCH)', id: 'm3-1', icon: 'fa-code-branch' },
  { file: 'M3-2_Data_Validation_and_Text_to_Columns_with_AI.md', title: 'M3-2. Validation & Text Parsing', id: 'm3-2', icon: 'fa-filter' },
  { file: 'M3-3_Pivot_Table_with_AI.md', title: 'M3-3. Pivot Table Intelligence', id: 'm3-3', icon: 'fa-table-cells' },
  { file: 'M3-4_What-If_and_Forecast_with_AI.md', title: 'M3-4. What-If & Forecast.ETS', id: 'm3-4', icon: 'fa-chart-line' },
  { file: 'M3-5_Advanced_Excel_Data_Analysis_with_AI.md', title: 'M3-5. Advanced Data Analysis (EDA)', id: 'm3-5', icon: 'fa-magnifying-glass-dollar' },
  { file: 'M3-6_Dashboard_with_AI.md', title: 'M3-6. Executive KPI Dashboard', id: 'm3-6', icon: 'fa-gauge-high' },
  { file: 'M3-7_MIS_Reporting_with_AI.md', title: 'M3-7. MIS Reporting & Commentary', id: 'm3-7', icon: 'fa-chart-column' },
  { file: 'M3-8_Advanced_Excel_Problem_Solving_with_AI.md', title: 'M3-8. Advanced Problem Solving', id: 'm3-8', icon: 'fa-lightbulb' },
  { file: 'M3-9_Advanced_Excel_AI_Projects.md', title: 'M3-9. Six Capstone Projects', id: 'm3-9', icon: 'fa-diagram-project' },
  { file: '99_CheatSheet_Glossary_FAQ_FinalTest_Wrapup.md', title: 'Master Cheat Sheet & Final Test', id: 'm3-99', icon: 'fa-trophy' }
];

// Build Module HTML
function buildModulePage({ moduleDir, fileList, pageTitle, navKey, outFileName, badgeText, badgeClass }) {
  console.log(`Building ${outFileName}...`);
  let contentHtml = '';
  let sidebarHtml = `
    <div>
      <div class="sidebar-section-title">
        <span>Table of Contents</span>
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>
      <ul class="sidebar-menu">
  `;

  fileList.forEach((item) => {
    sidebarHtml += `
      <li>
        <a href="#${item.id}" class="sidebar-link">
          <i class="fa-solid ${item.icon || 'fa-file'} fa-fw" style="font-size:0.82rem; color:var(--text-muted);"></i>
          <span>${item.title}</span>
        </a>
      </li>
    `;

    const fullPath = path.join(rootDir, moduleDir, item.file);
    if (fs.existsSync(fullPath)) {
      let rawMd = fs.readFileSync(fullPath, 'utf8');
      rawMd = formatCallouts(rawMd);
      const parsedHtml = marked.parse(rawMd);
      contentHtml += `
        <section class="module-section" id="${item.id}" style="margin-bottom:50px; scroll-margin-top:75px;">
          ${parsedHtml}
        </section>
        <hr>
      `;
    }
  });

  sidebarHtml += `
      </ul>
    </div>
    <div style="margin-top:20px; padding-top:16px; border-top:1px solid var(--border-light);">
      <a href="downloads.html" class="btn btn-outline" style="width:100%; justify-content:center; font-size:0.8rem;">
        <i class="fa-solid fa-file-pdf" style="color:#dc2626;"></i> Download Module PDF
      </a>
    </div>
  `;

  const fullHtml = renderPageShell({
    title: pageTitle,
    activeNav: navKey,
    sidebarHtml,
    contentHtml,
    breadcrumb: `
      <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
      <span class="breadcrumb-separator"><i class="fa-solid fa-chevron-right"></i></span>
      <span>${pageTitle}</span>
    `
  });

  fs.writeFileSync(path.join(rootDir, outFileName), fullHtml, 'utf8');
  console.log(`✅ Saved ${outFileName}`);
}

// -------------------------------------------------------------
// BUILD DATASETS EXPLORER PAGE
// -------------------------------------------------------------
function buildDatasetsPage() {
  console.log('Building datasets.html...');
  const dataDir = path.join(rootDir, 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.csv'));

  let contentHtml = `
    <div class="hero-card" style="margin-bottom:28px;">
      <span class="hero-pill" style="background:var(--mod3-subtle); color:var(--mod3-color);">
        <i class="fa-solid fa-table"></i> Practice Datasets
      </span>
      <h1 class="hero-title">10 Real-World Corporate CSV Datasets</h1>
      <p class="hero-desc">
        Ye sabhi 10 realistic Indian business datasets hain jo student practice, capstone projects, aur AI prompt engineering ke liye specially taiyar kiye gaye hain.
      </p>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <a href="downloads.html" class="btn btn-mod3">
          <i class="fa-solid fa-download"></i> Download All Datasets
        </a>
        <a href="module-3.html#m3-9" class="btn btn-outline">
          <i class="fa-solid fa-trophy"></i> View 6 Capstone Projects
        </a>
      </div>
    </div>
  `;

  let sidebarHtml = `
    <div>
      <div class="sidebar-section-title">
        <span>Available Datasets</span>
        <span class="badge badge-mod3">10 CSVs</span>
      </div>
      <ul class="sidebar-menu">
  `;

  files.forEach((file, idx) => {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const rowCount = lines.length - 1;
    const sizeKb = (fs.statSync(filePath).size / 1024).toFixed(1);
    const id = `dataset-${idx}`;

    sidebarHtml += `
      <li>
        <a href="#${id}" class="sidebar-link">
          <i class="fa-solid fa-file-csv fa-fw" style="color:var(--mod3-color);"></i>
          <span>${file}</span>
        </a>
      </li>
    `;

    // Preview table
    let tableHtml = '<table><thead><tr>';
    headers.forEach(h => {
      tableHtml += `<th>${h}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    const previewRows = lines.slice(1, 7);
    previewRows.forEach(row => {
      const cols = row.split(',');
      tableHtml += '<tr>';
      cols.forEach(c => {
        tableHtml += `<td>${c.trim()}</td>`;
      });
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';

    contentHtml += `
      <div class="card" id="${id}" style="margin-bottom:24px; padding:18px; scroll-margin-top:75px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:36px; height:36px; border-radius:8px; background:var(--mod3-subtle); color:var(--mod3-color); display:flex; align-items:center; justify-content:center; font-size:1rem;">
              <i class="fa-solid fa-file-csv"></i>
            </div>
            <div>
              <div style="font-weight:700; font-size:0.98rem; color:var(--text-primary); font-family:var(--font-mono);">${file}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${rowCount} Rows • ${headers.length} Columns • ${sizeKb} KB</div>
            </div>
          </div>
          <div>
            <a href="data/${file}" download class="btn btn-outline" style="padding:5px 12px; font-size:0.78rem;">
              <i class="fa-solid fa-download"></i> Download CSV
            </a>
          </div>
        </div>
        <div class="table-scroll">
          ${tableHtml}
        </div>
        <div style="padding-top:8px; font-size:0.74rem; color:var(--text-muted);">
          <i class="fa-solid fa-circle-info" style="margin-right:4px;"></i>Showing first ${previewRows.length} rows of ${rowCount} records. Download CSV to open in Microsoft Excel.
        </div>
      </div>
    `;
  });

  sidebarHtml += `
      </ul>
    </div>
  `;

  const fullHtml = renderPageShell({
    title: '10 Practice Datasets (CSV)',
    activeNav: 'data',
    sidebarHtml,
    contentHtml,
    breadcrumb: `
      <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
      <span class="breadcrumb-separator"><i class="fa-solid fa-chevron-right"></i></span>
      <span>Practice Datasets</span>
    `
  });

  fs.writeFileSync(path.join(rootDir, 'datasets.html'), fullHtml, 'utf8');
  console.log('✅ Saved datasets.html');
}

// -------------------------------------------------------------
// BUILD DOWNLOADS HUB PAGE
// -------------------------------------------------------------
function buildDownloadsPage() {
  console.log('Building downloads.html...');
  const dataDir = path.join(rootDir, 'data');
  const csvFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.csv'));

  const contentHtml = `
    <div class="hero-card">
      <span class="hero-pill">
        <i class="fa-solid fa-download"></i> Download Center
      </span>
      <h1 class="hero-title">Official Course Material & Downloads</h1>
      <p class="hero-desc">
        Download classroom-ready PDF student notes and realistic CSV datasets for offline study, corporate workshops, and practice.
      </p>
    </div>

    <h2 style="font-size:1.35rem; font-weight:700; margin-bottom:16px;">
      <i class="fa-solid fa-book" style="color:var(--primary); margin-right:8px;"></i>Module Student Notes (Print-Ready PDFs)
    </h2>

    <div class="grid-cards">
      <!-- Module 1 PDF -->
      <div class="card card-mod1">
        <div class="card-icon-box">
          <i class="fa-solid fa-brain"></i>
        </div>
        <span class="card-tag">Module 1 PDF</span>
        <h3 class="card-title">Basics of AI Student Notes</h3>
        <p class="card-desc">
          Complete classroom handbook covering AI fundamentals, LLMs, prompt engineering frameworks, research, productivity, and safety.
        </p>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;">
          <i class="fa-solid fa-file-pdf" style="color:#dc2626; margin-right:4px;"></i>PDF • 4.1 MB • 6 Core Sections
        </div>
        <div class="card-footer">
          <a href="downloads/Module_1_Basics_of_AI_Student_Notes.pdf" download class="btn btn-mod1" style="width:100%;">
            <i class="fa-solid fa-download"></i> Download Module 1 PDF
          </a>
        </div>
      </div>

      <!-- Module 2 PDF -->
      <div class="card card-mod2">
        <div class="card-icon-box">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <span class="card-tag">Module 2 PDF</span>
        <h3 class="card-title">MS Office with AI Notes</h3>
        <p class="card-desc">
          Part A (Word drafting & writing tools), Part B (PowerPoint outlines & delivery), and Part C (Basic Excel cleaning & formulas).
        </p>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;">
          <i class="fa-solid fa-file-pdf" style="color:#dc2626; margin-right:4px;"></i>PDF • 5.4 MB • 15 Topics + Capstone
        </div>
        <div class="card-footer">
          <a href="downloads/Module_2_MS_Office_with_AI_Student_Notes.pdf" download class="btn btn-mod2" style="width:100%;">
            <i class="fa-solid fa-download"></i> Download Module 2 PDF
          </a>
        </div>
      </div>

      <!-- Module 3 PDF -->
      <div class="card card-mod3">
        <div class="card-icon-box">
          <i class="fa-solid fa-file-excel"></i>
        </div>
        <span class="card-tag">Module 3 PDF</span>
        <h3 class="card-title">Advanced Excel with AI Notes</h3>
        <p class="card-desc">
          INDEX/MATCH, Validation, Pivot Intelligence, What-If & Forecasting, Executive Dashboards, MIS Reporting, and 6 Capstones.
        </p>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;">
          <i class="fa-solid fa-file-pdf" style="color:#dc2626; margin-right:4px;"></i>PDF • 2.5 MB • 9 Topics + 6 Projects
        </div>
        <div class="card-footer">
          <a href="downloads/Module_3_Advanced_Excel_with_AI_Student_Notes.pdf" download class="btn btn-mod3" style="width:100%;">
            <i class="fa-solid fa-download"></i> Download Module 3 PDF
          </a>
        </div>
      </div>
    </div>

    <h2 style="font-size:1.35rem; font-weight:700; margin:36px 0 16px 0;">
      <i class="fa-solid fa-table" style="color:var(--mod3-color); margin-right:8px;"></i>Practice CSV Datasets (10 Files)
    </h2>

    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Dataset File</th>
            <th>Module</th>
            <th>Description</th>
            <th style="text-align:right;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${csvFiles.map(f => {
            const isMod3 = f.startsWith('advanced') || f.startsWith('dashboard') || f.startsWith('monthly') || f.startsWith('profit') || f.startsWith('sales_pivot');
            return `
              <tr>
                <td style="font-weight:600; font-family:var(--font-mono); font-size:0.84rem;">
                  <i class="fa-solid fa-file-csv" style="color:var(--mod3-color); margin-right:6px;"></i>${f}
                </td>
                <td><span class="badge ${isMod3 ? 'badge-mod3' : 'badge-mod2'}">${isMod3 ? 'Module 3' : 'Module 2'}</span></td>
                <td style="font-size:0.82rem; color:var(--text-muted);">Realistic corporate data for formula testing, pivots & prompt engineering.</td>
                <td style="text-align:right;">
                  <a href="data/${f}" download class="btn btn-outline" style="padding:4px 10px; font-size:0.75rem;">
                    <i class="fa-solid fa-download"></i> Download
                  </a>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  const fullHtml = renderPageShell({
    title: 'Download Study Material & Datasets',
    activeNav: 'downloads',
    sidebarHtml: '',
    contentHtml,
    breadcrumb: `
      <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
      <span class="breadcrumb-separator"><i class="fa-solid fa-chevron-right"></i></span>
      <span>Download Center</span>
    `
  });

  fs.writeFileSync(path.join(rootDir, 'downloads.html'), fullHtml, 'utf8');
  console.log('✅ Saved downloads.html');
}

// -------------------------------------------------------------
// BUILD HOME PORTAL (INDEX.HTML)
// -------------------------------------------------------------
function buildHomePage() {
  console.log('Building index.html...');
  const contentHtml = `
    <!-- Hero Section -->
    <div class="hero-card">
      <span class="hero-pill">
        <i class="fa-solid fa-bolt"></i> Complete 3-Module Curriculum
      </span>
      <h1 class="hero-title">AI-Enabled MS Office & Advanced Excel</h1>
      <p class="hero-desc">
        Corporate classroom-ready student notes, practical guides, relatable Indian office analogies, 
        and 150+ professional English prompts for modern professionals, analysts, and students.
      </p>

      <div class="hero-btn-group">
        <a href="module-1.html" class="btn btn-mod1">
          <i class="fa-solid fa-brain"></i> Start Module 1
        </a>
        <a href="module-2.html" class="btn btn-mod2">
          <i class="fa-solid fa-briefcase"></i> Start Module 2
        </a>
        <a href="module-3.html" class="btn btn-mod3">
          <i class="fa-solid fa-file-excel"></i> Start Module 3
        </a>
        <a href="downloads.html" class="btn btn-outline">
          <i class="fa-solid fa-file-pdf" style="color:#dc2626;"></i> Download PDFs
        </a>
      </div>

      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-val">3</div>
          <div class="stat-name">Comprehensive Modules</div>
        </div>
        <div class="stat-item">
          <div class="stat-val">36</div>
          <div class="stat-name">In-Depth Topics</div>
        </div>
        <div class="stat-item">
          <div class="stat-val">200+</div>
          <div class="stat-name">Classroom Prompts</div>
        </div>
        <div class="stat-item">
          <div class="stat-val">10</div>
          <div class="stat-name">Practice CSV Datasets</div>
        </div>
      </div>
    </div>

    <!-- Core Module Cards -->
    <h2 style="font-size:1.35rem; font-weight:700; margin-bottom:16px;">
      <i class="fa-solid fa-compass" style="color:var(--primary); margin-right:8px;"></i>Explore Course Curriculum
    </h2>
    
    <div class="grid-cards">
      <!-- Card Module 1 -->
      <a href="module-1.html" class="card card-mod1">
        <div class="card-icon-box">
          <i class="fa-solid fa-brain"></i>
        </div>
        <span class="card-tag">Foundation</span>
        <h3 class="card-title">Module 1: Basics of AI</h3>
        <p class="card-desc">
          AI & GenAI fundamentals, LLM architecture, ChatGPT, Claude, Gemini, Copilot, 6-element prompt engineering framework, productivity, and AI safety protocols.
        </p>
        <div class="card-footer">
          <span>6 Core Sections • 50+ Prompts</span>
          <span>Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>

      <!-- Card Module 2 -->
      <a href="module-2.html" class="card card-mod2">
        <div class="card-icon-box">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <span class="card-tag">Application</span>
        <h3 class="card-title">Module 2: MS Office with AI</h3>
        <p class="card-desc">
          Part A (MS Word drafting & editing), Part B (PowerPoint outlines, slide decks & delivery notes), and Part C (Basic Excel cleaning, formulas, and verification).
        </p>
        <div class="card-footer">
          <span>Word, PPT & Excel • 15 Topics</span>
          <span>Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>

      <!-- Card Module 3 -->
      <a href="module-3.html" class="card card-mod3">
        <div class="card-icon-box">
          <i class="fa-solid fa-file-excel"></i>
        </div>
        <span class="card-tag">Advanced Mastery</span>
        <h3 class="card-title">Module 3: Advanced Excel with AI</h3>
        <p class="card-desc">
          Using AI as an expert assistant for INDEX/MATCH, Data Validation, Pivot Intelligence, What-If Scenarios, Dashboards, MIS Variance Reports, and 6 Capstones.
        </p>
        <div class="card-footer">
          <span>Advanced Excel & 6 Projects</span>
          <span>Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>
    </div>

    <!-- Pedagogical Architecture -->
    <div class="card" style="margin:28px 0; padding:24px;">
      <h3 style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:10px;">
        <i class="fa-solid fa-lightbulb" style="color:var(--warning); margin-right:6px;"></i>The Pedagogical Architecture: Hinglish + Professional English
      </h3>
      <p style="color:var(--text-secondary); line-height:1.65; margin-bottom:18px; font-size:0.92rem;">
        Yeh course specifically design kiya gaya hai Indian corporate professionals, commerce students aur job seekers ke liye. 
        Concepts ko crystal-clear karne ke liye explanations friendly Hinglish mein hain, jabki saare practice prompts 100% professional English mein hain jinhe aap direct copy-paste kar sakte hain!
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:14px;">
        <div style="padding:14px; background:var(--bg-subtle); border-radius:var(--radius-sm); border-left:4px solid var(--mod1-color);">
          <h4 style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">
            <i class="fa-solid fa-train-subway" style="color:var(--mod1-color); margin-right:6px;"></i>1. Indian Analogies
          </h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin:0;">
            Mumbai local trains, chai stalls, cricket scorecards, aur GST billing ke through complex concepts aasan bhasha mein.
          </p>
        </div>

        <div style="padding:14px; background:var(--bg-subtle); border-radius:var(--radius-sm); border-left:4px solid var(--mod2-color);">
          <h4 style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">
            <i class="fa-regular fa-copy" style="color:var(--mod2-color); margin-right:6px;"></i>2. One-Click Copy Prompts
          </h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin:0;">
            Har prompt ke sath dynamic 'Copy' button hai. Prompt copy karke direct ChatGPT, Claude ya Copilot mein paste karein.
          </p>
        </div>

        <div style="padding:14px; background:var(--bg-subtle); border-radius:var(--radius-sm); border-left:4px solid var(--mod3-color);">
          <h4 style="font-weight:700; margin-bottom:4px; font-size:0.9rem;">
            <i class="fa-solid fa-shield-halved" style="color:var(--mod3-color); margin-right:6px;"></i>3. 4-Step Verification Rigor
          </h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin:0;">
            "AI is a Co-Pilot, You are the Pilot". Real company data par kisi bhi AI formula ko verify karne ke 4 ironclad testing protocols.
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Navigation to Datasets and Downloads -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
      <div class="card">
        <h3 style="font-size:1.05rem; font-weight:700; margin-bottom:6px;">
          <i class="fa-solid fa-table" style="color:var(--mod3-color); margin-right:6px;"></i>10 Sample CSV Datasets
        </h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:14px;">
          Formula lookups, pivot tables, what-if models, dashboards, aur MIS reports ke liye structured datasets.
        </p>
        <a href="datasets.html" class="btn btn-mod3" style="width:fit-content; font-size:0.82rem;">
          Open Data Explorer <i class="fa-solid fa-arrow-right" style="margin-left:4px;"></i>
        </a>
      </div>

      <div class="card">
        <h3 style="font-size:1.05rem; font-weight:700; margin-bottom:6px;">
          <i class="fa-solid fa-download" style="color:var(--primary); margin-right:6px;"></i>Master Downloads Center
        </h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:14px;">
          All 3 modules student notes in high-resolution, print-ready PDF format (12 MB total) for offline revision.
        </p>
        <a href="downloads.html" class="btn btn-primary" style="width:fit-content; font-size:0.82rem;">
          Go to Downloads <i class="fa-solid fa-arrow-right" style="margin-left:4px;"></i>
        </a>
      </div>
    </div>
  `;

  const fullHtml = renderPageShell({
    title: 'Course Student Portal',
    activeNav: 'home',
    sidebarHtml: `
      <div>
        <div class="sidebar-section-title">
          <span>Curriculum Jump</span>
        </div>
        <ul class="sidebar-menu">
          <li><a href="module-1.html" class="sidebar-link"><i class="fa-solid fa-brain fa-fw" style="color:var(--mod1-color);"></i><span>Module 1: Basics of AI</span></a></li>
          <li><a href="module-2.html" class="sidebar-link"><i class="fa-solid fa-briefcase fa-fw" style="color:var(--mod2-color);"></i><span>Module 2: MS Office with AI</span></a></li>
          <li><a href="module-3.html" class="sidebar-link"><i class="fa-solid fa-file-excel fa-fw" style="color:var(--mod3-color);"></i><span>Module 3: Advanced Excel</span></a></li>
          <li><a href="datasets.html" class="sidebar-link"><i class="fa-solid fa-table fa-fw" style="color:var(--mod3-color);"></i><span>10 Practice Datasets</span></a></li>
          <li><a href="downloads.html" class="sidebar-link"><i class="fa-solid fa-download fa-fw" style="color:var(--primary);"></i><span>Master PDF Downloads</span></a></li>
        </ul>
      </div>
    `,
    contentHtml,
    breadcrumb: '<span><i class="fa-solid fa-house"></i> Course Portal Home</span>'
  });

  fs.writeFileSync(path.join(rootDir, 'index.html'), fullHtml, 'utf8');
  console.log('✅ Saved index.html');
}

// -------------------------------------------------------------
// CLOUDFLARE PAGES CONFIGURATION FILES
// -------------------------------------------------------------
function buildCloudflareConfigs() {
  console.log('Building Cloudflare Pages configuration files (_headers, _redirects)...');

  const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Access-Control-Allow-Origin: *

/assets/*
  Cache-Control: public, max-age=604800, immutable

/downloads/*
  Cache-Control: public, max-age=86400
  Content-Disposition: inline

/data/*
  Cache-Control: public, max-age=86400
  Content-Type: text/csv; charset=utf-8
`;
  fs.writeFileSync(path.join(rootDir, '_headers'), headersContent, 'utf8');
  console.log('✅ Saved _headers');

  const redirectsContent = `/module1  /module-1.html  301
/module2  /module-2.html  301
/module3  /module-3.html  301
/data     /datasets.html  301
/download /downloads.html 301
`;
  fs.writeFileSync(path.join(rootDir, '_redirects'), redirectsContent, 'utf8');
  console.log('✅ Saved _redirects');
}

// -------------------------------------------------------------
// MAIN BUILD EXECUTION
// -------------------------------------------------------------
console.log('🚀 Compiling Mobile-First, Light-Only Static Site with FontAwesome CDN...');

// 1. Build Module Pages
buildModulePage({
  moduleDir: 'module_1_basics_of_ai',
  fileList: module1Files,
  pageTitle: 'Module 1: Basics of AI',
  navKey: 'mod1',
  outFileName: 'module-1.html',
  badgeText: '8 Topics',
  badgeClass: 'badge-mod1'
});

buildModulePage({
  moduleDir: 'module_2_ms_office_with_ai',
  fileList: module2Files,
  pageTitle: 'Module 2: MS Office with AI',
  navKey: 'mod2',
  outFileName: 'module-2.html',
  badgeText: '17 Topics',
  badgeClass: 'badge-mod2'
});

buildModulePage({
  moduleDir: 'module_3_advanced_excel_with_ai',
  fileList: module3Files,
  pageTitle: 'Module 3: Advanced Excel with AI',
  navKey: 'mod3',
  outFileName: 'module-3.html',
  badgeText: '11 Topics + 6 Projects',
  badgeClass: 'badge-mod3'
});

// 2. Build Datasets Explorer
buildDatasetsPage();

// 3. Build Downloads Hub
buildDownloadsPage();

// 4. Build Home Page
buildHomePage();

// 5. Cloudflare Pages configs
buildCloudflareConfigs();

console.log('🎉 ALL PAGES COMPILED SUCCESSFULLY WITH FONTAWESOME FREE CDN!');
