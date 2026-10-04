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
  '00_Module3_Overview.md',
  'M3-1_Advanced_Formula_with_AI.md',
  'M3-2_Data_Validation_and_Text_to_Columns_with_AI.md',
  'M3-3_Pivot_Table_with_AI.md',
  'M3-4_What-If_and_Forecast_with_AI.md',
  'M3-5_Advanced_Excel_Data_Analysis_with_AI.md',
  'M3-6_Dashboard_with_AI.md',
  'M3-7_MIS_Reporting_with_AI.md',
  'M3-8_Advanced_Excel_Problem_Solving_with_AI.md',
  'M3-9_Advanced_Excel_AI_Projects.md',
  '99_CheatSheet_Glossary_FAQ_FinalTest_Wrapup.md'
];

const basePath = __dirname;
let combinedBody = '';

// Add Cover Page
combinedBody += `
<div class="cover-page">
  <div class="cover-badge">OFFICIAL ADVANCED STUDY MATERIAL</div>
  <h1 class="cover-title">AI-Enabled MS Office & Advanced Excel</h1>
  <div class="cover-divider"></div>
  <h2 class="cover-subtitle">MODULE 3: ADVANCED EXCEL WITH AI</h2>
  <p class="cover-desc">Classroom-Ready Student Notes • Co-Pilot Engineering • Troubleshooting • Dashboards & MIS</p>
  
  <div class="cover-meta-grid">
    <div class="meta-box">
      <span class="meta-label">Target Audience</span>
      <span class="meta-val">Financial Analysts, MIS Executives, Commerce & MBA Students</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Language Architecture</span>
      <span class="meta-val">Explanations in Hinglish • 60+ Practice Prompts in English</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Practical Capstones</span>
      <span class="meta-val">6 End-to-End Enterprise Projects with 100-Mark Rubrics</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Sample Datasets</span>
      <span class="meta-val">6 Realistic Datasets (Formulas, Pivots, What-If, MIS, Dashboards)</span>
    </div>
  </div>

  <div class="cover-footer">
    <p>Comprehensive Master Standard: INDEX/MATCH Multi-Criteria • Data Validation & Text Parsing • Pivot Intelligence • What-If & Forecasting • Executive Dashboards • MIS Variance Reporting • 25-Question Test</p>
  </div>
</div>

<div class="page-break"></div>

<div class="toc-page">
  <h2 class="toc-title">📑 Table of Contents (Module 3 Roadmap)</h2>
  <div class="toc-list">
    <div class="toc-item"><span>Module 3 Orientation & Golden Safety Rules</span><span class="toc-file">00_Module3_Overview.md</span></div>
    <div class="toc-item"><span>M3-1. Advanced Formula with AI (INDEX/MATCH 3 Tiers, Troubleshooting, Volatility)</span><span class="toc-file">M3-1_Advanced_Formula_with_AI.md</span></div>
    <div class="toc-item"><span>M3-2. Data Validation & Text to Columns (Cascading Dropdowns, Delimiter Parsing)</span><span class="toc-file">M3-2_Data_Validation_and_Text_to_Columns_with_AI.md</span></div>
    <div class="toc-item"><span>M3-3. Pivot Table with AI (Calculated Fields, Date Grouping, Outlier Drilldown)</span><span class="toc-file">M3-3_Pivot_Table_with_AI.md</span></div>
    <div class="toc-item"><span>M3-4. What-If & Forecast with AI (Scenario Manager, Goal Seek, FORECAST.ETS)</span><span class="toc-file">M3-4_What-If_and_Forecast_with_AI.md</span></div>
    <div class="toc-item"><span>M3-5. Advanced Excel Data Analysis (55-Row Audit, Skewness, Outliers, Correlation)</span><span class="toc-file">M3-5_Advanced_Excel_Data_Analysis_with_AI.md</span></div>
    <div class="toc-item"><span>M3-6. Dashboard with AI (Z-Pattern Cockpit, Chart Selection Matrix, Dynamic Findings)</span><span class="toc-file">M3-6_Dashboard_with_AI.md</span></div>
    <div class="toc-item"><span>M3-7. MIS Reporting with AI (Branch Variance, 4-Part Management-Style Summary)</span><span class="toc-file">M3-7_MIS_Reporting_with_AI.md</span></div>
    <div class="toc-item"><span>M3-8. Advanced Problem Solving (5 Real Scenarios, SUMPRODUCT Slab Trick, Verification)</span><span class="toc-file">M3-8_Advanced_Excel_Problem_Solving_with_AI.md</span></div>
    <div class="toc-item"><span>M3-9. Six Comprehensive Capstone Projects (Scenarios, Tasks, Prompts, 100-Pt Rubrics)</span><span class="toc-file">M3-9_Advanced_Excel_AI_Projects.md</span></div>
    <div class="toc-item"><span>Reference Extras: Master Cheat Sheet, 35 Terms Glossary, 25-Question Test, FAQs & Wrapup</span><span class="toc-file">99_CheatSheet_Glossary_FAQ_FinalTest_Wrapup.md</span></div>
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
    content = content.replace(/>\s*\[!CAUTION\]\s*([^\n]+(?:\n>[^\n]+)*)/gi, (match, p1) => {
      const text = p1.replace(/\n>/g, '\n');
      return `<div class="alert alert-important"><strong>🛑 CAUTION:</strong> ${text}</div>`;
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
<title>Module 3: Advanced Excel with AI - Complete Student Notes</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4 portrait;
    margin: 18mm 16mm 20mm 16mm;
    @bottom-right {
      content: counter(page);
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      color: #047857;
      font-weight: 600;
    }
    @bottom-left {
      content: "AI-Enabled MS Office & Excel • Module 3: Advanced Excel with AI";
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
    border: 3px solid #065f46;
    border-radius: 12px;
    min-height: 880px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
  }

  .cover-badge {
    display: inline-block;
    background: #065f46;
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
    color: #064e3b;
    margin: 0 0 15px 0;
    line-height: 1.25;
  }

  .cover-divider {
    width: 90px;
    height: 5px;
    background: #059669;
    margin: 15px auto 25px auto;
    border-radius: 3px;
  }

  .cover-subtitle {
    font-size: 18pt;
    font-weight: 700;
    color: #065f46;
    margin: 0 0 10px 0;
    letter-spacing: 0.5px;
  }

  .cover-desc {
    font-size: 12pt;
    color: #374151;
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
    background: #ffffff;
    border: 1px solid #d1fae5;
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  .meta-label {
    display: block;
    font-size: 8pt;
    text-transform: uppercase;
    color: #059669;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .meta-val {
    font-size: 9.5pt;
    font-weight: 600;
    color: #064e3b;
  }

  .cover-footer {
    margin-top: 30px;
    font-size: 8.5pt;
    color: #4b5563;
    max-width: 580px;
    line-height: 1.5;
  }

  /* Table of Contents */
  .toc-page { padding: 20px 10px; }
  .toc-title {
    font-size: 18pt;
    color: #064e3b;
    border-bottom: 2px solid #059669;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }
  .toc-list { display: flex; flex-direction: column; gap: 10px; }
  .toc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: #f0fdf4;
    border-left: 4px solid #065f46;
    border-radius: 4px;
    font-size: 9.5pt;
    font-weight: 600;
    color: #064e3b;
  }
  .toc-file {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    color: #059669;
    font-weight: 500;
  }

  /* Headings & Text */
  h1 {
    font-size: 17pt;
    font-weight: 800;
    color: #065f46;
    border-bottom: 2px solid #a7f3d0;
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
    color: #064e3b;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d1fae5;
    padding-bottom: 4px;
    page-break-after: avoid;
    break-after: avoid;
  }
  h3 {
    font-size: 11pt;
    font-weight: 700;
    color: #047857;
    margin-top: 14px;
    margin-bottom: 8px;
    page-break-after: avoid;
    break-after: avoid;
  }
  h4 {
    font-size: 10pt;
    font-weight: 600;
    color: #1f2937;
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
    background-color: #065f46;
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
    border-left: 4px solid #10b981;
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
    border-left: 4px solid #059669;
    background: #f0fdf4;
    border-radius: 0 6px 6px 0;
    page-break-inside: avoid;
    color: #064e3b;
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

const outHtmlPath = path.join(basePath, 'Module_3_Advanced_Excel_with_AI_Student_Notes.html');
fs.writeFileSync(outHtmlPath, fullHtml, 'utf8');
console.log(`Saved combined HTML to ${outHtmlPath}`);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outPdfPath = path.join(basePath, 'Module_3_Advanced_Excel_with_AI_Student_Notes.pdf');

console.log('Rendering PDF via Microsoft Edge Headless...');
const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdfPath}" "${outHtmlPath}"`;
execSync(cmd, { stdio: 'inherit' });

console.log(`✅ SUCCESS! Module 3 PDF generated at: ${outPdfPath}`);
