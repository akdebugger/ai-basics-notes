// AI-Enabled MS Office & Advanced Excel - Mobile-First Portal Engine

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initCodeCopyButtons();
  initResponsiveTables();
  initGlobalSearch();
});

/* =====================================================
   1. Mobile Sidebar Drawer & Overlay Navigation
===================================================== */
function initMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Close drawer when clicking a link inside mobile sidebar
  if (sidebar) {
    sidebar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          closeSidebar();
        }
      });
    });
  }
}

/* =====================================================
   2. Copy Code / Practice Prompts to Clipboard
===================================================== */
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach((pre) => {
    if (pre.parentElement.classList.contains('code-container')) return;

    const container = document.createElement('div');
    container.className = 'code-container';
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.setAttribute('aria-label', 'Copy code snippet');
    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    container.appendChild(copyBtn);

    copyBtn.addEventListener('click', async () => {
      const code = pre.querySelector('code') || pre;
      const textToCopy = code.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showCopiedState(copyBtn);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopiedState(copyBtn);
      }
    });
  });
}

function showCopiedState(btn) {
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    btn.classList.remove('copied');
  }, 2000);
}

/* =====================================================
   3. Responsive Table Wrappers
===================================================== */
function initResponsiveTables() {
  const tables = document.querySelectorAll('.content-body table');
  tables.forEach(table => {
    if (!table.parentElement.classList.contains('table-scroll')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });
}

/* =====================================================
   4. Global Search Modal (Ctrl + K)
===================================================== */
let searchDirectory = [];

function initGlobalSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchBackdrop = document.getElementById('search-backdrop');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchClose = document.getElementById('search-close');

  if (!searchBtn || !searchBackdrop) return;

  buildSearchDirectory();

  function openSearch() {
    searchBackdrop.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 60);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchBackdrop.classList.remove('open');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.86rem;"><i class="fa-solid fa-keyboard" style="margin-right:6px;"></i>Type keywords to search lessons, formulas & prompts...</div>';
    document.body.style.overflow = '';
  }

  searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchBackdrop.addEventListener('click', (e) => {
    if (e.target === searchBackdrop) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape' && searchBackdrop.classList.contains('open')) {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      renderSearchResults(q, searchResults, closeSearch);
    });
  }
}

function buildSearchDirectory() {
  searchDirectory = [
    { title: 'Module 1: Introduction to AI & GenAI Concepts', url: 'module-1.html#m1-1', snippet: 'Artificial Intelligence kya hai, Generative AI vs Traditional AI, LLM working concepts, Hallucinations.', module: 'Module 1' },
    { title: 'Module 1: Introduction to AI Tools (ChatGPT, Claude, Gemini)', url: 'module-1.html#m1-2', snippet: 'Comparing ChatGPT, Gemini, Microsoft Copilot, Claude, Perplexity. Selection matrix.', module: 'Module 1' },
    { title: 'Module 1: Basic Prompt Engineering (Role, Task, Constraints)', url: 'module-1.html#m1-3', snippet: 'Prompt architecture: Role, Task, Context, Instructions, Constraints. Follow-up prompts.', module: 'Module 1' },
    { title: 'Module 1: AI for Research, Summarization & Fact Checking', url: 'module-1.html#m1-4', snippet: 'Extracting key points, executive summaries, comparing sources, verification steps.', module: 'Module 1' },
    { title: 'Module 1: AI for Everyday Productivity & Meetings', url: 'module-1.html#m1-5', snippet: 'Brainstorming, meeting prep, meeting summary, action items, task breakdown in Hinglish.', module: 'Module 1' },
    { title: 'Module 1: AI Safety, Confidentiality & Ethics', url: 'module-1.html#m1-6', snippet: 'Data privacy, masking confidential numbers, copyright, responsible AI usage guidelines.', module: 'Module 1' },
    { title: 'Module 2: MS Word with AI — Drafting & Rewriting', url: 'module-2.html#m2-a1', snippet: 'Content creation, expanding, shortening, rephrasing, tone adjustment for business.', module: 'Module 2' },
    { title: 'Module 2: Professional Writing (Emails, Letters, Reports)', url: 'module-2.html#m2-a2', snippet: 'Professional English email templates, leave applications, project proposals, sentences.', module: 'Module 2' },
    { title: 'Module 2: Grammar, Proofreading & Quality Tools', url: 'module-2.html#m2-a3', snippet: 'Spelling, grammar, punctuation, Grammarly, QuillBot, plagiarism & originality checks.', module: 'Module 2' },
    { title: 'Module 2: MS PowerPoint with AI — Outlines & Slides', url: 'module-2.html#m2-b1', snippet: 'Presentation planning, storytelling arcs, slide-by-slide titles, concise bullet generation.', module: 'Module 2' },
    { title: 'Module 2: Presentation Delivery, Speaker Notes & Copilot', url: 'module-2.html#m2-b4', snippet: 'Speaker notes, 2-minute elevator pitches, tough Q&A anticipation, Copilot workflows.', module: 'Module 2' },
    { title: 'Module 2: Basic Excel with AI — Formulas & Cleaning', url: 'module-2.html#m2-c1', snippet: 'Explaining sheets, basic formulas (SUM, AVERAGE, IF), text cleaning, 4-step verification.', module: 'Module 2' },
    { title: 'Module 3: Advanced Formulas with AI (INDEX/MATCH 3 Tiers)', url: 'module-3.html#m3-1', snippet: 'Two-way grid lookups, boolean multi-criteria matching, troubleshooting #N/A, volatile OFFSET.', module: 'Module 3' },
    { title: 'Module 3: Data Validation & Text to Columns with AI', url: 'module-3.html#m3-2', snippet: 'Custom validation formulas, blocking duplicates with COUNTIF, parsing dirty delimiters.', module: 'Module 3' },
    { title: 'Module 3: Pivot Table Intelligence & Calculated Fields', url: 'module-3.html#m3-3', snippet: 'Deciphering pivot tables, Calculated Fields, grouping dates, detecting margin leaks.', module: 'Module 3' },
    { title: 'Module 3: What-If Analysis & FORECAST.ETS Simulation', url: 'module-3.html#m3-4', snippet: 'Scenario Manager (Best/Base/Worst), Goal Seek break-even, exponential smoothing forecasts.', module: 'Module 3' },
    { title: 'Module 3: Advanced Exploratory Data Analysis (55 Rows)', url: 'module-3.html#m3-5', snippet: 'Statistical distributions, skewness, margin leakage audit, correlation vs causation trap.', module: 'Module 3' },
    { title: 'Module 3: Boardroom Executive KPI Control Dashboard', url: 'module-3.html#m3-6', snippet: 'Z-pattern layout, 2D chart selection, dynamic formula-driven commentary box, 60-30-10 color.', module: 'Module 3' },
    { title: 'Module 3: MIS Reporting & Variance Commentary', url: 'module-3.html#m3-7', snippet: 'Branch MIS analysis, collection efficiency, 4-tier management-style summary memo.', module: 'Module 3' },
    { title: 'Module 3: Six Comprehensive Capstone Projects', url: 'module-3.html#m3-9', snippet: '6 realistic enterprise projects with student tasks, English prompts, and 100-mark rubrics.', module: 'Module 3' },
    { title: 'Practice Datasets: 10 Real-World Corporate CSVs', url: 'datasets.html', snippet: 'Explore, view and download 10 Indian business datasets for formulas, pivots, and analysis.', module: 'Datasets' },
    { title: 'Downloads: Master Print-Ready PDF Notes', url: 'downloads.html', snippet: 'Download official student notes PDF files for Module 1, Module 2, and Module 3.', module: 'Downloads' }
  ];
}

function renderSearchResults(query, container, closeSearchCallback) {
  if (!container) return;

  if (!query) {
    container.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.86rem;"><i class="fa-solid fa-keyboard" style="margin-right:6px;"></i>Type keywords to search lessons, formulas & prompts...</div>';
    return;
  }

  const matches = searchDirectory.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.snippet.toLowerCase().includes(query) ||
    item.module.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.86rem;">No results found for "<strong>${escapeHtml(query)}</strong>"</div>`;
    return;
  }

  let html = '';
  matches.slice(0, 8).forEach(res => {
    html += `
      <a href="${res.url}" class="search-item" onclick="document.getElementById('search-backdrop').classList.remove('open'); document.body.style.overflow=''">
        <span class="search-item-badge"><i class="fa-solid fa-tag" style="margin-right:4px;"></i>${escapeHtml(res.module)}</span>
        <span class="search-item-title">${highlightText(res.title, query)}</span>
        <span class="search-item-snippet">${highlightText(res.snippet.slice(0, 110) + '...', query)}</span>
      </a>
    `;
  });

  container.innerHTML = html;
}

function highlightText(text, query) {
  const safe = escapeHtml(text);
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return safe.replace(regex, '<mark style="background:#fef08a;color:#854d0e;padding:1px 3px;border-radius:2px;">$1</mark>');
}

function escapeHtml(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(str).replace(/[&<>"']/g, s => map[s]);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
