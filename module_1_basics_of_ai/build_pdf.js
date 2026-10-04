const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { marked } = require('marked');

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
});

const files = [
  '00_Module1_Overview.md',
  '01_Introduction_to_AI.md',
  '02_Introduction_to_AI_Tools.md',
  '03_Basic_Prompt_Engineering.md',
  '04_AI_for_Research_and_Information.md',
  '05_AI_for_Everyday_Productivity.md',
  '06_AI_Safety_and_Responsible_Use.md',
  '07_Cheat_Sheet_Glossary_FAQ_Final_Test.md'
];

const basePath = __dirname;

let combinedBody = '';

// Add Cover Page
combinedBody += `
<div class="cover-page">
  <div class="cover-badge">OFFICIAL COURSE STUDY MATERIAL</div>
  <h1 class="cover-title">AI-Enabled MS Office & Advanced Excel</h1>
  <div class="cover-divider"></div>
  <h2 class="cover-subtitle">MODULE 1: BASICS OF AI</h2>
  <p class="cover-desc">Complete, Classroom-Ready Student Notes & Practical Reference Handbook</p>
  
  <div class="cover-meta-grid">
    <div class="meta-box">
      <span class="meta-label">Target Audience</span>
      <span class="meta-val">Beginners, Office Staff, Accountants, Students</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Language & Tone</span>
      <span class="meta-val">Practical Hinglish (English Terms Preserved)</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Prerequisites</span>
      <span class="meta-val">Zero Prior AI / Coding Knowledge Required</span>
    </div>
    <div class="meta-box">
      <span class="meta-label">Edition</span>
      <span class="meta-val">Corporate Training Standard Edition (2026)</span>
    </div>
  </div>

  <div class="cover-footer">
    <p>Comprehensive Coverage: Theory • Analogies • 6 Pillars of Prompting • Practical Prompts • Practice Sets • Cheat Sheet • 20-Question Final Test</p>
  </div>
</div>

<div class="page-break"></div>

<div class="toc-page">
  <h2 class="toc-title">📑 Table of Contents (Module 1 Overview)</h2>
  <div class="toc-list">
    <div class="toc-item"><span>Module 1 Overview & Orientation</span><span class="toc-file">00_Module1_Overview.md</span></div>
    <div class="toc-item"><span>Section 1: Introduction to AI (Concepts, Mechanism, Hallucinations, 5-Step Verification)</span><span class="toc-file">01_Introduction_to_AI.md</span></div>
    <div class="toc-item"><span>Section 2: Introduction to AI Tools (ChatGPT, Gemini, Copilot, Claude, Perplexity & Selection)</span><span class="toc-file">02_Introduction_to_AI_Tools.md</span></div>
    <div class="toc-item"><span>Section 3: Basic Prompt Engineering (6 Elements, Formula, Ladder, 10 Comparisons, Follow-ups)</span><span class="toc-file">03_Basic_Prompt_Engineering.md</span></div>
    <div class="toc-item"><span>Section 4: AI for Research & Information (Summarization, Extraction, Fact-Checking, 4-Step Cycle)</span><span class="toc-file">04_AI_for_Research_and_Information.md</span></div>
    <div class="toc-item"><span>Section 5: AI for Everyday Productivity (Brainstorming, WBS, Agendas, MOM, Actions, Email Replies)</span><span class="toc-file">05_AI_for_Everyday_Productivity.md</span></div>
    <div class="toc-item"><span>Section 6: AI Safety & Responsible Use (Privacy, Confidentiality, Copyright, Bias, Do's & Don'ts)</span><span class="toc-file">06_AI_Safety_and_Responsible_Use.md</span></div>
    <div class="toc-item"><span>Section 7: Reference Extras (Cheat Sheet, 27-Term Glossary, 10 FAQs, Capstone Project, Final Test)</span><span class="toc-file">07_Cheat_Sheet_Glossary_FAQ_Final_Test.md</span></div>
  </div>
</div>

<div class="page-break"></div>
`;

// Process each markdown file
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

    // Render markdown to HTML
    const htmlContent = marked.parse(content);

    combinedBody += `
    <section class="module-section" id="section-${i}">
      ${htmlContent}
    </section>
    <div class="page-break"></div>
    `;
  }
}

// Full HTML Template with print-ready CSS
const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Module 1: Basics of AI - Student Notes</title>
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
      content: "AI-Enabled MS Office & Advanced Excel • Module 1: Basics of AI";
      font-family: 'Inter', sans-serif;
      font-size: 8.5pt;
      color: #94a3b8;
    }
  }

  * {
    box-sizing: border-box;
  }

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
  .toc-page {
    padding: 20px 10px;
  }

  .toc-title {
    font-size: 18pt;
    color: #0f172a;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }

  .toc-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .toc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: #f8fafc;
    border-left: 4px solid #1e3a8a;
    border-radius: 4px;
    font-size: 10.5pt;
    font-weight: 600;
    color: #1e293b;
  }

  .toc-file {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5pt;
    color: #64748b;
    font-weight: 500;
  }

  /* Section Styling */
  h1 {
    font-size: 18pt;
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
    font-size: 14pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 20px;
    margin-bottom: 12px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
    page-break-after: avoid;
    break-after: avoid;
  }

  h3 {
    font-size: 11.5pt;
    font-weight: 700;
    color: #1e3a8a;
    margin-top: 16px;
    margin-bottom: 8px;
    page-break-after: avoid;
    break-after: avoid;
  }

  h4 {
    font-size: 10.5pt;
    font-weight: 600;
    color: #334155;
    margin-top: 12px;
    margin-bottom: 6px;
    page-break-after: avoid;
    break-after: avoid;
  }

  p {
    margin: 0 0 10px 0;
    text-align: justify;
  }

  ul, ol {
    margin: 0 0 12px 0;
    padding-left: 22px;
  }

  li {
    margin-bottom: 5px;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 8.5pt;
    page-break-inside: auto;
  }

  thead {
    display: table-header-group;
  }

  tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  th {
    background-color: #1e3a8a;
    color: #ffffff;
    font-weight: 700;
    text-align: left;
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    font-size: 8.5pt;
  }

  td {
    padding: 7px 9px;
    border: 1px solid #cbd5e1;
    vertical-align: top;
    line-height: 1.45;
  }

  tr:nth-child(even) {
    background-color: #f8fafc;
  }

  /* Code & Prompts */
  pre {
    background-color: #0f172a;
    color: #f8fafc;
    border-radius: 6px;
    padding: 12px 14px;
    font-family: 'JetBrains Mono', 'Consolas', monospace;
    font-size: 8pt;
    line-height: 1.4;
    overflow-x: auto;
    page-break-inside: avoid;
    margin: 10px 0 14px 0;
    border-left: 4px solid #2563eb;
  }

  code {
    font-family: 'JetBrains Mono', 'Consolas', monospace;
    font-size: 8.5pt;
  }

  p code, li code, td code {
    background: #f1f5f9;
    color: #0f172a;
    padding: 2px 5px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
    font-weight: 500;
  }

  /* Callouts & Blockquotes */
  blockquote {
    margin: 12px 0;
    padding: 10px 16px;
    border-left: 4px solid #2563eb;
    background: #f8fafc;
    border-radius: 0 6px 6px 0;
    page-break-inside: avoid;
    color: #334155;
    font-style: normal;
  }

  .alert {
    padding: 10px 14px;
    border-radius: 6px;
    margin: 12px 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
  }

  .alert-note {
    background: #eff6ff;
    border-left: 4px solid #2563eb;
    color: #1e40af;
  }

  .alert-tip {
    background: #f0fdf4;
    border-left: 4px solid #16a34a;
    color: #166534;
  }

  .alert-warning {
    background: #fffbeb;
    border-left: 4px solid #d97706;
    color: #92400e;
  }

  .alert-important {
    background: #fef2f2;
    border-left: 4px solid #dc2626;
    color: #991b1b;
  }

  hr {
    border: 0;
    height: 1px;
    background: #e2e8f0;
    margin: 20px 0;
  }
</style>
</head>
<body>
${combinedBody}
</body>
</html>`;

const outHtmlPath = path.join(basePath, 'Module_1_Basics_of_AI_Student_Notes.html');
fs.writeFileSync(outHtmlPath, fullHtml, 'utf8');
console.log(`Saved combined HTML to ${outHtmlPath}`);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outPdfPath = path.join(basePath, 'Module_1_Basics_of_AI_Student_Notes.pdf');

console.log('Rendering PDF via Microsoft Edge Headless...');
const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdfPath}" "${outHtmlPath}"`;
execSync(cmd, { stdio: 'inherit' });

console.log(`✅ SUCCESS! PDF generated at: ${outPdfPath}`);
