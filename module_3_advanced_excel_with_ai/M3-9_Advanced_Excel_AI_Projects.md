# Module 3 — Topic M3-9: Advanced Excel AI Projects

---

## 📌 Topic Overview: Six Comprehensive Capstone Projects

Real corporate proficiency tab aati hai jab aap individual tools ko ek complete, end-to-end business project mein integrate karte hain. Is topic mein **6 Comprehensive Capstone Projects** hain jo course ke sabhi 6 sample datasets ko cover karte hain:

1. **Project 1:** Advanced Formula & Multi-Tier Pricing Engine (`advanced_formula_lookup_dataset.csv`)
2. **Project 2:** Interactive Regional Sales & Margin Pivot Intelligence (`sales_pivot_dataset.csv`)
3. **Project 3:** 3-Year What-If & Strategic Financial Forecast Simulation (`profit_model_and_forecast_data.csv`)
4. **Project 4:** Forensic Data Audit & Outlier Detection (`advanced_analysis_50_rows.csv`)
5. **Project 5:** Boardroom Executive KPI Control Cockpit (`dashboard_kpi_dataset.csv`)
6. **Project 6:** Pan-India Branch MIS & Operational Performance Review (`monthly_mis_branch_report.csv`)

Har project mein complete Business Scenario, Student Tasks, 5 Professional English Prompts, AI Usage Log Template, aur 100-Mark Evaluation Rubric shaamil hai.

---

### 🏆 Project 1: Advanced Formula & Multi-Tier Pricing Engine
**Dataset:** `sample_data/advanced_formula_lookup_dataset.csv`

#### 1. Business Scenario
Aap ek B2B Enterprise Hardware Distributor ke Senior Commercial Analyst hain. Company alag-alag customer tiers (Platinum, Gold, Silver), order quantity volumes (1-50, 51-200, 201+ units), aur delivery zones (Metro vs Non-Metro) ke basis par dynamic pricing aur freight surcharge calculate karti hai. Pichle model mein 25 nested IF statements the jo har mahine corrupt ho jate the. Aapko AI ki help se ek robust, unbreakable pricing engine design karna hai.

#### 2. Student Tasks
1. Dataset ko load karein aur lookup logic analyze karein.
2. Two-way INDEX/MATCH ya multi-criteria XLOOKUP formula develop karein.
3. Edge case error handling (`IFERROR`, `#N/A` protection) integrate karein.
4. Input validation dropdowns banayein taaki invalid tier type na ho sake.
5. 3 sample high-value quotes verify karke manual math sheet se reconcile karein.

#### 3. Five Professional Practice Prompts (English)
```text
PROMPT 1 (Architecture Design):
"I am building a multi-tier dynamic pricing engine in Excel 2019 using 'advanced_formula_lookup_dataset.csv'. The model requires matching Customer Tier (Column A), Product Category (Column B), and Volume Slab (Column C) to return the Base Discount % (Column D). Recommend the most robust formula architecture avoiding nested IFs, and explain why INDEX/MATCH is superior to VLOOKUP for this use case."

PROMPT 2 (Formula Implementation):
"Write the exact Excel formula to calculate the final Net Unit Price where: Base Price is in Cell E2, Discount % is looked up from the table based on Tier (Cell F2) and Category (Cell G2), and an additional 3% Metro logistics surcharge is added if Cell H2 equals 'Metro'. Ensure the formula returns an error message 'Invalid Selection' if the tier is blank."

PROMPT 3 (Formula Auditing):
"Review this pricing lookup formula: `=INDEX(Rates!$D$2:$D$100, MATCH(1, (Rates!$A$2:$A$100=B2)*(Rates!$B$2:$B$100=C2), 0))`. Explain why this formula returns #N/A when entered in older versions of Excel without Ctrl+Shift+Enter, and provide an alternative that works natively across all versions."

PROMPT 4 (Input Validation):
"Design the Data Validation rules for our sales quotation form: Cell B2 must be a dropdown restricted to ['Platinum', 'Gold', 'Silver'], and Cell B3 (Order Quantity) must be a positive whole number between 1 and 10,000. Provide clear Error Alert copy to prevent sales reps from bypassing these controls."

PROMPT 5 (Executive Price Sensitivity Memo):
"Draft a 1-page pricing strategy memo for the Commercial Director summarizing the margin impact of moving our Gold Tier volume threshold from 100 units to 150 units. Structure with: Executive Summary, Gross Margin Implications, and Recommended Phased Rollout."
```

#### 4. AI Usage Log & Verification Record
| Step | Action Taken | AI Recommendation | Human Modification / Verification |
| :--- | :--- | :--- | :--- |
| **Lookup Design** | Prompted for 3-tier lookup | Suggested multi-condition array MATCH | Tested in Excel 2019; added `INDEX(..., MATCH(1, INDEX(...)))` wrapper to eliminate CSE requirement. |
| **Surcharge Logic** | Added Metro surcharge | Recommended nested IF | Replaced with boolean multiplication `+ (H2="Metro")*0.03` for speed. |
| **Edge Testing** | Tested blank quantity | Formula returned 0.00 | Added `IF(ISBLANK(B3), "", ...)` guardrail. |

#### 5. 100-Mark Evaluation Rubric
- **Formula Accuracy & Robustness (30 Marks):** Multi-criteria lookups error-free under all inputs.
- **Data Validation & Error Proofing (25 Marks):** Dropdowns and input restrictions working flawlessly.
- **Model Efficiency & Speed (20 Marks):** Clean, non-volatile formula structure without heavy loops.
- **AI Verification & Audit Log (25 Marks):** Complete AI log showing independent verification and edge testing.

---

### 🏆 Project 2: Interactive Regional Sales & Margin Pivot Intelligence
**Dataset:** `sample_data/sales_pivot_dataset.csv`

#### 1. Business Scenario
Aap ek Pan-India Retail Chain ke Commercial Finance Manager hain. 45 regional sales transactions ka dataset available hai. Regional Vice Presidents har quarter apni sales volume dikha kar bonus maangte hain, lekin Managing Director ko suspect hai ki kuch regions volume badhane ke liye heavy discounts de rahe hain jisse actual net profit erode ho raha hai. Aapko ek comprehensive Pivot Table Intelligence model build karna hai.

#### 2. Student Tasks
1. Raw dataset ko Excel Table (`Ctrl + T`) mein convert karein.
2. Regional Pivot Table generate karein with Revenue, Discount %, aur Profit.
3. Calculated Fields insert karein for Net Realized Yield.
4. Interactive Slicers (Region, Product Category) configure karein.
5. Leadership ke liye 3-paragraph forensic variance commentary draft karein.

#### 3. Five Professional Practice Prompts (English)
```text
PROMPT 1 (Pivot Architecture):
"Using 'sales_pivot_dataset.csv', design an Excel Pivot Table layout that reveals the relationship between Sales Volume, Average Discount %, and Net Profit across our 4 regions (North, South, East, West). Specify the exact placement of fields in Rows, Columns, Values, and Filters."

PROMPT 2 (Calculated Field Setup):
"Provide step-by-step instructions to create two Calculated Fields in an Excel Pivot Table: 1) 'Net_Realized_Sales' = Gross_Sales - (Gross_Sales * Discount_Pct), and 2) 'Discount_Drag_Percent' = (Gross_Sales - Net_Realized_Sales) / Gross_Sales. Highlight any division-by-zero risks."

PROMPT 3 (Outlier Identification):
"Analyze the following aggregated Pivot Table data: West Region has ₹62.1 Lakhs gross sales with 18.2% average discount; South Region has ₹91.4 Lakhs gross sales with 9.8% average discount. Identify 3 critical commercial questions the CFO should ask the West Region Sales Director."

PROMPT 4 (Slicer UX Design):
"Provide instructions to set up 3 interconnected Slicers ('Region', 'Product_Category', 'Payment_Method') linked to two separate Pivot Tables (Summary Pivot and Detailed Transaction Pivot) with synchronized cross-filtering."

PROMPT 5 (Executive Summary Email):
"Draft a high-priority executive email to the Managing Director summarizing the findings of our regional sales pivot audit. Highlight the discount leakage in the West Region and recommend a cap on rep-level discretionary discounting."
```

#### 4. 100-Mark Evaluation Rubric
- **Pivot Configuration & Fields (30 Marks):** Calculated fields and aggregation functions configured correctly.
- **Analytical Depth (25 Marks):** Clear identification of discount-versus-margin tradeoff.
- **Slicer & UX Interactivity (20 Marks):** Multi-pivot connections and clean presentation layout.
- **Executive Communication (25 Marks):** Persuasive, data-backed leadership email and verification log.

---

### 🏆 Project 3: 3-Year What-If & Strategic Financial Forecast Simulation
**Dataset:** `sample_data/profit_model_and_forecast_data.csv`

#### 1. Business Scenario
Aap ek SaaS & Subscription Services startup ke Lead FP&A (Financial Planning & Analysis) Analyst hain. Series B funding round ke liye Board of Directors ko agle 3 saal ka financial model present karna hai. Pichle 24 mahino ka historical data available hai. Leadership ko dekhna hai ki agar customer churn badhta hai ya marketing acquisition cost fluctuate hoti hai, toh company ka runway aur break-even point kaise react karega.

#### 2. Student Tasks
1. 24-month historical revenue data par `FORECAST.ETS` run karke 12-month projections banayein.
2. Confidence Intervals (Upper & Lower 95% Bounds) compute karein.
3. Scenario Manager mein 3 scenarios build karein (Worst, Base, Best).
4. Goal Seek run karein to find Break-Even customer additions.
5. CFO ke liye Risk & Sensitivity Summary note compose karein.

#### 3. Five Professional Practice Prompts (English)
```text
PROMPT 1 (Time-Series Forecasting):
"Based on the 24 months of revenue data in 'profit_model_and_forecast_data.csv', write the exact Excel formulas using FORECAST.ETS and FORECAST.ETS.CONFINT to project monthly revenue for the next 12 months with a 95% confidence interval. Explain how Excel detects annual seasonality."

PROMPT 2 (Goal Seek Target Optimization):
"In our financial model: Cell B10 is Total Fixed Overhead (₹18,50,000/mo), Cell B11 is Revenue per Subscriber (₹1,200/mo), Cell B12 is Variable Server Cost per Subscriber (₹350/mo), and Cell B15 is Net Operating Profit `= (B11-B12)*B13 - B10`, where B13 is Total Subscribers. What are the exact Goal Seek parameters to find the subscriber count needed to achieve ₹10,00,000 monthly profit?"

PROMPT 3 (Scenario Manager Model):
"Set up 3 comprehensive scenarios in Excel Scenario Manager: Conservative (Churn = 4.5%, ARPU = ₹1,100), Base (Churn = 2.5%, ARPU = ₹1,200), Aggressive (Churn = 1.2%, ARPU = ₹1,450). Provide the Changing Cells configuration and the Result Cells mapping for EBITDA."

PROMPT 4 (Two-Way Sensitivity Matrix):
"Provide instructions to construct a Two-Variable Data Table in Excel evaluating Monthly Profit across: Column Input (Subscriber Churn Rate from 1% to 5% in 0.5% steps) and Row Input (Customer Acquisition Cost from ₹3,000 to ₹7,000 in ₹1,000 steps). Include conditional formatting heat-map guidance."

PROMPT 5 (Board Risk Briefing):
"Draft a 4-paragraph Executive Risk Briefing for the Board of Directors explaining why the financial forecast includes wide confidence intervals in Q4, and outline the 3 defensive measures management has prepared if the Conservative Scenario unfolds."
```

#### 4. 100-Mark Evaluation Rubric
- **Statistical Model Accuracy (30 Marks):** Flawless forecasting formulas with confidence interval bands.
- **Scenario & Sensitivity Engineering (25 Marks):** Robust 3-case Scenario Manager and 2D Data Table.
- **Mathematical Integrity (20 Marks):** Break-even and Goal Seek calculations 100% reconciled.
- **Governance & Risk Disclosure (25 Marks):** Comprehensive disclosure of assumptions and AI audit log.

---

### 🏆 Project 4: Forensic Data Audit & Outlier Detection
**Dataset:** `sample_data/advanced_analysis_50_rows.csv`

#### 1. Business Scenario
Aap ek Internal Audit & Forensic Analytics firm ke Senior Auditor hain. Company ke ERP system se 55 transactional records extract kiye gaye hain jisme suspect billing errors, unauthorized discounts, aur anomalous freight costs ki complaints aayi hain. Aapka task hai data ko systematically interrogate karna aur CFO ke liye forensic audit report prepare karna.

#### 2. Student Tasks
1. Statistical distributions (Mean, Median, Standard Deviation) compute karein.
2. Z-Scores calculate karke statistical outliers identify karein.
3. Negative margin transactions ko forensic root-cause buckets mein categorize karein.
4. Month-end quota stuffing patterns analyze karein.
5. 1-page Board-level Forensic Audit Memorandum draft karein.

#### 3. Five Professional Practice Prompts (English)
```text
PROMPT 1 (Statistical Profile Audit):
"Analyze the 55 transaction records in 'advanced_analysis_50_rows.csv'. Provide Excel formulas to compute Mean, Median, Standard Deviation, and Interquartile Range (IQR) for 'Total_Revenue' and 'Net_Profit'. Explain what the difference between Mean and Median reveals regarding skewness."

PROMPT 2 (Automated Anomaly Tagging Formula):
"Write a multi-criteria Excel formula in helper Column L that evaluates each row and flags: 'CRITICAL ANOMALY' if Net Profit < 0 OR Freight Cost > 20% of Revenue; 'REVIEW' if Discount > 25%; and 'NORMAL' otherwise. Explain how to color code this column automatically."

PROMPT 3 (Forensic Case Investigation):
"Conduct a forensic audit of Order #1042 in the dataset. Detail the exact sequence of numbers (List Price, Applied Discount, Freight Cost, Cost of Goods Sold) that caused this transaction to result in a severe net loss of ₹48,500. Identify whether this was pricing incompetence or potential collusion."

PROMPT 4 (Month-End Quota Stuffing Analysis):
"Write an Excel formula using DAY() and EOMONTH() to calculate how many days before month-end each order occurred. Analyze whether orders placed within the final 3 days of the month had significantly higher average discount rates than orders placed in the first 20 days."

PROMPT 5 (Formal Forensic Audit Report):
"Draft a formal 'Confidential Forensic Audit Memorandum' to the Audit Committee of the Board of Directors summarizing findings from the 55-transaction review: include Executive Summary, Quantified Financial Loss, Root Causes, and 4 Internal Control Recommendations."
```

#### 4. 100-Mark Evaluation Rubric
- **Forensic Discovery & Outlier Detection (30 Marks):** All planted anomalies identified accurately.
- **Statistical Rigor (25 Marks):** Z-Score and distribution analysis mathematically sound.
- **Internal Control Insight (20 Marks):** Practical corporate governance recommendations.
- **Audit Documentation & Ethics (25 Marks):** Impartial tone, evidence-backed findings, complete AI log.

---

### 🏆 Project 5: Boardroom Executive KPI Control Cockpit
**Dataset:** `sample_data/dashboard_kpi_dataset.csv`

#### 1. Business Scenario
Aap ek High-Growth Tech Enterprise ke Chief of Staff to CEO hain. Har mahine Leadership Team meeting mein CEO ko company ke 6 critical metrics (Revenue, EBITDA Margin, CAC, LTV, Net Logo Churn, aur Headcount) par control dashboard chahiye hota hai. Dashboard ko 16:9 laptop/tablet screen par bina horizontal scroll kiye fit hona hai aur usme automatic executive commentary reflect honi chahiye.

#### 2. Student Tasks
1. 16:9 Widescreen grid layout design karein (Columns A-N, Rows 1-30).
2. Top row par 4 high-impact Headline KPI Scorecards banayein.
3. Scientifically correct charts configure karein (Line-Column combo for Revenue/EBITDA, Sparklines for Churn).
4. Dynamic formula-driven "Executive Findings & Action Box" banayein.
5. Gridlines, formula bar, aur headings hide karke application-grade look achieve karein.

#### 3. Five Professional Practice Prompts (English)
```text
PROMPT 1 (Cockpit Layout Architecture):
"Using the 12-month executive metrics in 'dashboard_kpi_dataset.csv', provide a blueprint for a single-screen, zero-scroll 16:9 executive dashboard in Excel. Detail the exact cell coordinate grid for: Title/Slicers (Row 1-3), 4 Headline KPI Cards (Row 4-8), Primary Trend Visual (Row 9-22 Left), and Dynamic Findings Box (Row 9-22 Right)."

PROMPT 2 (Formula-Driven Dynamic Commentary):
"Write an Excel formula string for the 'Executive Commentary' cell that dynamically checks Month 12 data: If EBITDA Margin >= 20% and Churn <= 2.0%, display 'Performance Status: STRONG EXECUTION. Targets met across core profitability metrics.' Otherwise, display a tailored warning highlighting which metric lagged behind target."

PROMPT 3 (Visual Chart Selection & Formatting):
"Explain step-by-step how to create a polished Clustered Column + Line Combination Chart in Excel for Revenue (Columns) and EBITDA Margin % (Secondary Line Axis). Provide exact formatting specifications to eliminate chartjunk (remove dark gridlines, format axis in Crores, add clean data labels)."

PROMPT 4 (Color Palette & Visual Hierarchy):
"Define a corporate 3-color palette for our Executive Dashboard following the 60-30-10 rule. Provide exact Hex/RGB codes for: Neutral Background/Borders (60%), Corporate Primary Accent (30%), and Strategic Alert/Warning (10%). Explain how to style KPI cards using soft shadows and subtle borders."

PROMPT 5 (Boardroom Presentation Script):
"Write a concise, 3-minute executive presentation script for the CEO to deliver at the Board meeting while presenting this dashboard. Cover: Macro Year-to-Date performance, the inflection point in Month 8 when churn spiked, and current operational stability."
```

#### 4. 100-Mark Evaluation Rubric
- **Visual Design & Layout (30 Marks):** Flawless zero-scroll 16:9 cockpit layout with clean visual hierarchy.
- **Chart Selection & Clarity (25 Marks):** Proper 2D chart types with secondary axis formatted correctly.
- **Dynamic Narrative Engineering (20 Marks):** Formula-driven findings box responding to KPI changes.
- **Presentation Polish & Verification (25 Marks):** App-like aesthetic, professional script, and AI verification log.

---

### 🏆 Project 6: Pan-India Branch MIS & Operational Performance Review
**Dataset:** `sample_data/monthly_mis_branch_report.csv`

#### 1. Business Scenario
Aap ek Leading Indian Logistics & Supply Chain Enterprise ke Head of MIS & Operations Reporting hain. 10 strategic Indian branch locations (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Kochi) ka monthly performance data compile kiya gaya hai. Operations Director ko har branch ka Target vs Actuals, OPEX efficiency, aur Cash Collection health review karna hai.

#### 2. Student Tasks
1. Branch-wise Variance % aur OPEX ratios calculate karein.
2. Collection Efficiency vs Revenue attainment correlation map karein.
3. 3-Color Conditional Alert Icons configure karein.
4. Top 3 Star Branches aur Bottom 3 Lagging Branches identify karein.
5. Complete 4-part Management-Style Summary Memo compose karein.

#### 3. Five Professional Practice Prompts (English)
```text
PROMPT 1 (MIS Variance Formula Design):
"Using 'monthly_mis_branch_report.csv', write the exact Excel formulas to calculate: 1) Sales Variance % = (Actual - Target)/Target, 2) OPEX Ratio = Operating_Cost / Actual_Revenue, and 3) A composite 'Branch Performance Index' weighted 50% on Sales Attainment and 50% on Cash Collection Efficiency."

PROMPT 2 (Conditional Status Icon Rules):
"Provide instructions to configure Excel Conditional Formatting Icon Sets (Traffic Lights or Flags) on the 'Branch Status' column: Green if Sales Attainment >= 100% AND Collection >= 85%; Red if Attainment < 90% OR Collection < 75%; and Yellow for all other combinations."

PROMPT 3 (Branch Performance Diagnostic):
"Compare Kolkata Branch (Sales Attainment: 63.6%, Collection: 68%) with Mumbai Branch (Sales Attainment: 108.3%, Collection: 92%). Detail the specific cash flow and operational repercussions Kolkata's underperformance inflicts on corporate working capital."

PROMPT 4 (Corrective Action Roadmap):
"Draft a 30-day tactical operational recovery plan for the 3 underperforming branches (Kolkata, Delhi NCR, Ahmedabad). Focus on: Key account dispute resolution, credit term tightening, sales territory reallocation, and weekly milestone reviews."

PROMPT 5 (Executive MIS Monthly Memo):
"Draft the official 1-page 'Monthly MIS Executive Summary Memorandum' addressed to the Managing Director and Regional VPs. Strictly adhere to the 4-part standard format: 1. Strategic Context, 2. Star Performers, 3. Vulnerabilities & Red Flags, 4. Corrective Action Plan."
```

#### 4. 100-Mark Evaluation Rubric
- **MIS Calculation Precision (30 Marks):** Variance %, OPEX ratios, and composite indices 100% accurate.
- **Cash Flow & Operational Insight (25 Marks):** Recognizing the link between sales booking and cash recovery.
- **Management Reporting Quality (20 Marks):** Formal 4-part C-suite memorandum ready for executive review.
- **Governance & Verification Audit (25 Marks):** Complete AI log, independent mathematical checks, professional tone.

---

### 📋 Universal AI Usage Log Template (For All Projects)

Aapko har project submission ke sath yeh table submit karna anivarya (mandatory) hai:

```markdown
### 📝 Project AI Usage & Verification Log
- **Student Name:** [Your Name]
- **Project Title:** [e.g., Project 5: Executive KPI Dashboard]
- **Excel Version Used:** [e.g., Microsoft 365 Version 2402]

| Step # | Intent / Task | Prompt Submitted to AI | AI Recommendation Received | Verification & Edits Made by Student | Final Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| 1 | Layout Wireframe | Prompt 1 submitted | Suggested 4 KPI cards + Combo Chart | Accepted layout; adjusted cell widths for 1080p | Verified ✓ |
| 2 | Dynamic Findings | Prompt 2 submitted | Nested IF with CONCATENATE | Fixed missing space in text string; tested condition | Verified ✓ |
| 3 | Math Cross-Check | - | - | Reconciled Grand Total with raw CSV sum | 100% Match ✓ |
```
