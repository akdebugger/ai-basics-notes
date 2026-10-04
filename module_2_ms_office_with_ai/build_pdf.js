const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let marked;
try {
  marked = require('marked').marked;
} catch (e) {
  marked = require('../module_1_basics_of_ai/node_modules/marked').marked;
}

marked.setOptions({
  gfm: true,
  breaks: true,
});

const files = [
  '00_Module2_Overview.md',
  'A1_AI_Assisted_Writing.md',
  'A2_Professional_Writing.md',
  'A3_Grammar_and_Proofreading.md',
  'A4_Writing_Quality_Tools.md',
  'A5_AI_Document_Analysis.md',
  'B1_AI_Presentation_Planning.md',
  'B2_AI_Presentation_Creation.md',
  'B3_AI_Presentation_Improvement.md',
  'B4_Presentation_Delivery_with_AI.md',
  'B5_Microsoft_Copilot_for_PowerPoint.md',
  'C1_AI_as_Excel_Assistant.md',
  'C2_Formula_Assistance.md',
  'C3_Basic_Data_Assistance.md',
  'C4_Basic_Data_Analysis.md',
  'C5_AI_Assisted_Excel_Work.md',
  '99_CheatSheet_Glossary_FAQ_FinalTest_Capstone.md'
];

const basePath = __dirname;
let combinedBody = '';

// Add Cover Page
combinedBody += `
<div class="cover-page">
  <div class="cover-badge">OFFICIAL COURSE STUDY MATERIAL</div>
  <h1 class="cover-title">AI-Enabled MS Office & Advanced Excel</h1>
  <div class="cover-divider"></div>
  <h2 class="cover-subtitle">MODULE 2: MS OFFICE WITH AI</h2>
  <p class="cover-desc">Classroom-Ready Student Notes • Part A: Word • Part B: PowerPoint • Part C: Basic Excel</p>
  
  <div class="cover-meta-grid">
    <div class="meta-box">
      <span class="meta-label">Target Audience</span>
      <span class="meta-val">Working Professionals, Commerce Students, Office Staff</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Language Architecture</span>
      <span class="meta-val">Explanations in Hinglish • 85+ Practice Prompts in English</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Core Coverage</span>
      <span class="meta-val">15 Detailed Topics (A1 to C5) • 4 Datasets • Capstone</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Prerequisites</span>
      <span class="meta-val">Module 1 (Basics of AI, Prompt Formula, AI Safety)</span>
    </div>
  </div>

  <div class="cover-footer">
    <p>Comprehensive Classroom Standard: Word Drafting & Quality • Presentation Planning & Delivery • Basic Excel Data & Formulas • Master Cheat Sheet • 25-Question Test</p>
  </div>
</div>

<div class="page-break"></div>

<div class="toc-page">
  <h2 class="toc-title">📑 Table of Contents (Module 2 Roadmap)</h2>
  <div class="toc-list">
    <div class="toc-item"><span>Module 2 Overview & Orientation Guide</span><span class="toc-file">00_Module2_Overview.md</span></div>
    <div class="toc-item"><span>A1. AI-Assisted Writing (Drafting, Tones, Rewriting, Paraphrasing)</span><span class="toc-file">A1_AI_Assisted_Writing.md</span></div>
    <div class="toc-item"><span>A2. Professional Writing (Letters, Emails, Reports, 7 Templates)</span><span class="toc-file">A2_Professional_Writing.md</span></div>
    <div class="toc-item"><span>A3. Grammar & Proofreading (Grammar, Spelling, Punctuation, Edits Table)</span><span class="toc-file">A3_Grammar_and_Proofreading.md</span></div>
    <div class="toc-item"><span>A4. Writing Quality Tools (Grammarly, QuillBot, Plagiarism, Ethics)</span><span class="toc-file">A4_Writing_Quality_Tools.md</span></div>
    <div class="toc-item"><span>A5. AI Document Analysis (Summarization, Extraction, Version Comparison)</span><span class="toc-file">A5_AI_Document_Analysis.md</span></div>
    <div class="toc-item"><span>B1. AI Presentation Planning (Outlines, Standard & Storytelling Arcs)</span><span class="toc-file">B1_AI_Presentation_Planning.md</span></div>
    <div class="toc-item"><span>B2. AI Presentation Creation (Slide-by-Slide, Concise Bullets, Doc-to-PPT)</span><span class="toc-file">B2_AI_Presentation_Creation.md</span></div>
    <div class="toc-item"><span>B3. Presentation Improvement (PPT Audit, Good Slide Checklist)</span><span class="toc-file">B3_AI_Presentation_Improvement.md</span></div>
    <div class="toc-item"><span>B4. Presentation Delivery (Speaker Notes, 2-Min Script, 10 Tough Q&A)</span><span class="toc-file">B4_Presentation_Delivery_with_AI.md</span></div>
    <div class="toc-item"><span>B5. Microsoft Copilot for PPT (Overview, Workflows, Free Alternative)</span><span class="toc-file">B5_Microsoft_Copilot_for_PowerPoint.md</span></div>
    <div class="toc-item"><span>C1. AI as Excel Assistant (Explaining Sheets, Natural Language Help)</span><span class="toc-file">C1_AI_as_Excel_Assistant.md</span></div>
    <div class="toc-item"><span>C2. Formula Assistance (Basic Formulas, Troubleshooting, Errors Table)</span><span class="toc-file">C2_Formula_Assistance.md</span></div>
    <div class="toc-item"><span>C3. Basic Data Assistance (Data Cleaning, Duplicates, Safe Workflow)</span><span class="toc-file">C3_Basic_Data_Assistance.md</span></div>
    <div class="toc-item"><span>C4. Basic Data Analysis (Trends, Patterns, Simple 2D Charts, Insights)</span><span class="toc-file">C4_Basic_Data_Analysis.md</span></div>
    <div class="toc-item"><span>C5. AI-Assisted Excel Work (Reviewing Work, 4-Step Verification Checklist)</span><span class="toc-file">C5_AI_Assisted_Excel_Work.md</span></div>
    <div class="toc-item"><span>Reference Extras: Cheat Sheet, Glossary, FAQs, Capstone & Final Test</span><span class="toc-file">99_CheatSheet_Glossary_FAQ_FinalTest_Capstone.md</span></div>
  </div>
</div>

<div class="page-break"></div>
`;

// Process each file
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    console.log(`Processing ${file}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Convert github style callouts
    content = content.replace(/>\s*\[!NOTE\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (match, p1) => {
      const text = p1.replace(/\n>/g, '\n');
      return `<div class="alert alert-note"><strong>ℹ️ NOTE:</strong> ${text}</div>`;
    });
    content = content.replace(/>\s*\[!TIP\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (match, p1) => {
      const text = p1.replace(/\n>/g, '\n');
      return `<div class="alert alert-tip"><strong>💡 PRO TIP:</strong> ${text}</div>`;
    });
    content = content.replace(/>\s*\[!WARNING\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (match, p1) => {
      const text = p1.replace(/\n>/g, '\n');
      return `<div class="alert alert-warning"><strong>⚠️ WARNING:</strong> ${text}</div>`;
    });
    content = content.replace(/>\s*\[!IMPORTANT\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (match, p1) => {
      const text = p1.replace(/\n>/g, '\n');
      return `<div class="alert alert-important"><strong>🚨 IMPORTANT:</strong> ${text}</div>`;
    });

    const htmlContent = marked.parse(content);

    combinedBody += `
    <section class="module-section" id="section-${i}">
      ${htmlContent}
    </section>
    <div class="page-break"></div>
    `;
  }
}

// Complete print-ready HTML
const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Module 2: MS Office with AI - Complete Student Notes</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 18mm 16mm 20mm 16mm;
    @bottom-right {
      content: counter(page);
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      color: #64748b;
      font-weight: 600;
    }
    @bottom-left {
      content: "AI-Enabled MS Office & Excel • Module 2: MS Office with AI";
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      color: #94a3b8;
    }
  }

  * { box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 10pt;
    line-height: 1.6;
    color: #1e293b;
    background: #ffffff;
    margin: 0;
    padding: 0;
  }

  .page-break {
    page-break-after: always;
    break-after: page;
  }

  /* Cover Page */
  .cover-page {
    padding: 60px 40px 40px 40px;
    text-align: center;
    border: 3px solid #1e3a8a;
    border-radius: 12px;
    min-height: 880px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  }

  .cover-badge {
    display: inline-block;
    background: #1e3a8a;
    color: #ffffff;
    font-size: 9pt;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 6px 18px;
    border-radius: 50px;
    margin-bottom: 25px;
  }

  .cover-title {
    font-size: 26pt;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 15px 0;
    line-height: 1.25;
  }

  .cover-divider {
    width: 90px;
    height: 5px;
    background: #2563eb;
    margin: 15px auto 25px auto;
    border-radius: 3px;
  }

  .cover-subtitle {
    font-size: 18pt;
    font-weight: 700;
    color: #1e3a8a;
    margin: 0 0 10px 0;
    letter-spacing: 0.5px;
  }

  .cover-desc {
    font-size: 12pt;
    color: #475569;
    margin: 0 0 40px 0;
    font-weight: 500;
  }

  .cover-meta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
    max-width: 620px;
    margin: 20px auto 40px auto;
    text-align: left;
  }

  .meta-box {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 16px;
  }

  .meta-label {
    display: block;
    font-size: 8pt;
    text-transform: uppercase;
    color: #64748b;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .meta-val {
    font-size: 9.5pt;
    font-weight: 600;
    color: #0f172a;
  }

  .cover-footer {
    margin-top: 30px;
    font-size: 8.5pt;
    color: #64748b;
    max-width: 580px;
    line-height: 1.5;
  }

  /* Table of Contents */
  .toc-page { padding: 20px 10px; }
  .toc-title {
    font-size: 18pt;
    color: #0f172a;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }
  .toc-list { display: flex; flex-direction: column; gap: 10px; }
  .toc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: #f8fafc;
    border-left: 4px solid #1e3a8a;
    border-radius: 4px;
    font-size: 9.5pt;
    font-weight: 600;
    color: #1e293b;
  }
  .toc-file {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    color: #64748b;
    font-weight: 500;
  }

  /* Headings & Text */
  h1 {
    font-size: 17pt;
    font-weight: 800;
    color: #1e3a8a;
    border-bottom: 2px solid #cbd5e1;
    padding-bottom: 8px;
    margin-top: 24px;
    margin-bottom: 16px;
    page-break-before: always;
    break-before: page;
  }
  .module-section > h1:first-child {
    page-break-before: avoid;
    break-before: avoid;
  }
  h2 {
    font-size: 13.5pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
    page-break-after: avoid;
    break-after: avoid;
  }
  h3 {
    font-size: 11pt;
    font-weight: 700;
    color: #1e3a8a;
    margin-top: 14px;
    margin-bottom: 8px;
    page-break-after: avoid;
    break-after: avoid;
  }
  h4 {
    font-size: 10pt;
    font-weight: 600;
    color: #334155;
    margin-top: 10px;
    margin-bottom: 6px;
    page-break-after: avoid;
    break-after: avoid;
  }
  p { margin: 0 0 10px 0; text-align: justify; }
  ul, ol { margin: 0 0 12px 0; padding-left: 20px; }
  li { margin-bottom: 5px; }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 8.5pt;
    page-break-inside: auto;
  }
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; page-break-after: auto; }
  th {
    background-color: #1e3a8a;
    color: #ffffff;
    font-weight: 700;
    text-align: left;
    padding: 7px 9px;
    border: 1px solid #cbd5e1;
  }
  td {
    padding: 6px 8px;
    border: 1px solid #cbd5e1;
    vertical-align: top;
    line-height: 1.4;
  }
  tr:nth-child(even) { background-color: #f8fafc; }

  /* Code & Prompts */
  pre {
    background-color: #0f172a;
    color: #f8fafc;
    border-radius: 6px;
    padding: 10px 12px;
    font-family: 'JetBrains Mono', 'Consolas', monospace;
    font-size: 8pt;
    line-height: 1.4;
    overflow-x: auto;
    page-break-inside: avoid;
    margin: 8px 0 12px 0;
    border-left: 4px solid #2563eb;
  }
  code { font-family: 'JetBrains Mono', 'Consolas', monospace; font-size: 8pt; }
  p code, li code, td code {
    background: #f1f5f9;
    color: #0f172a;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
    font-weight: 500;
  }

  /* Alerts */
  blockquote {
    margin: 10px 0;
    padding: 8px 14px;
    border-left: 4px solid #2563eb;
    background: #f8fafc;
    border-radius: 0 6px 6px 0;
    page-break-inside: avoid;
    color: #334155;
  }
  .alert {
    padding: 10px 14px;
    border-radius: 6px;
    margin: 10px 0;
    font-size: 9pt;
    page-break-inside: avoid;
  }
  .alert-note { background: #eff6ff; border-left: 4px solid #2563eb; color: #1e40af; }
  .alert-tip { background: #f0fdf4; border-left: 4px solid #16a34a; color: #166534; }
  .alert-warning { background: #fffbeb; border-left: 4px solid #d97706; color: #92400e; }
  .alert-important { background: #fef2f2; border-left: 4px solid #dc2626; color: #991b1b; }
</style>
</head>
<body>
${combinedBody}
</body>
</html>`;

const outHtmlPath = path.join(basePath, 'Module_2_MS_Office_with_AI_Student_Notes.html');
fs.writeFileSync(outHtmlPath, fullHtml, 'utf8');
console.log(`Saved combined HTML to ${outHtmlPath}`);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outPdfPath = path.join(basePath, 'Module_2_MS_Office_with_AI_Student_Notes.pdf');

console.log('Rendering PDF via Microsoft Edge Headless...');
const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdfPath}" "${outHtmlPath}"`;
execSync(cmd, { stdio: 'inherit' });

console.log(`✅ SUCCESS! Module 2 PDF generated at: ${outPdfPath}`);
