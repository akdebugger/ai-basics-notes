# Module 3 — Topic M3-4: What-If Analysis & Forecast with AI

---

## 📌 Topic Overview: What-If Analysis & Forecast with AI

Business decision-making hamesha uncertainty aur future predictions ke sath chalti hai. Excel ke What-If Analysis tools (Goal Seek, Scenario Manager, Data Tables) aur Forecasting functions (`FORECAST.ETS`) aapko alag-alag future situations simulate karne dete hain:
- *"Agar raw material cost 8% badh jaye aur inflation 6% ho, toh hamara net profit margin kitna bachega?"*
- *"Agar hume ₹50 Lakh annual profit achieve karna hai, toh hume monthly kitne units bechne honge (Goal Seek)?"*
- *"Pichle 24 mahino ke trend ke base par agle 6 mahino ki sales forecast kya hogi?"*

Is topic mein aap seekhenge ki AI ko apna **Strategic Financial Planning Consultant** kaise banayein jo What-If Scenarios design karega aur forecasting trends ko critically evaluate karega.

*Practice Dataset for this topic:* `sample_data/profit_model_and_forecast_data.csv` (24 months of revenue, marketing spend, and operational costs).

---

### 1. Concept: Scenario Modeling aur Predictive Forecasting with AI

**Kya hai (Definition):**
- **What-If Analysis with AI:** AI aapko mathematical models ke variables identify karne mein help karta hai (e.g., Changing Cells vs Result Cells) aur 3-tier realistic scenarios (Base Case, Optimistic/Best Case, Conservative/Worst Case) construct karta hai.
- **Forecasting with AI:** Excel ke exponential smoothing algorithms (`FORECAST.ETS`, `FORECAST.ETS.CONFINT`, `FORECAST.ETS.SEASONALITY`) dwara nikale gaye projections ko AI contextualize karta hai.

**Kyun zaroori hai (Why it matters):**
Excel sirf mathematical equations run karta hai; use yeh nahi pata hota ki market mein recession aa sakti hai ya competitor nayi pricing launch kar sakta hai. AI historical trend ke numbers ko real-world macro-economic context ke sath evaluate karke realistic assumptions set karne mein madad karta hai.

**Kaise kaam karta hai (How it works):**
Aap AI ko current financial P&L model ya 24-month trend share karte hain. AI:
1. Key sensitivity levers (price elasticity, conversion rate, overhead fixed costs) highlight karta hai.
2. Goal Seek ke mathematical targets define karta hai.
3. Projections ke around Confidence Intervals aur boundary assumptions explain karta hai.

---

### 2. Real-Life Analogy (Office & Daily Life)

> **Analogy: Monsoon Vacation Planning & Weather Forecast**
> Imagine kijiye aap Lonavala ya Manali trip plan kar rahe hain:
> - **Base Case:** Normal barish hogi, gaadi time par chalegi, budget ₹25,000 lagega.
> - **Best Case:** Mausam clear rahega, off-season discount milega, budget ₹18,000 mein nipat jayega.
> - **Worst Case:** Landslide ya heavy rainfall ho sakti hai, hotel extend karna padega, budget ₹40,000 tak jayega.
> What-If analysis corporate world ka wahi "trip planning" hai! Aur weather forecast (Excel forecast) batata hai ki probability kya hai. AI ek experienced travel guide ki tarah aapko bolta hai: *"Chhatri (reserve capital) hamesha sath rakhein, kyunki forecast 100% guarantee nahi hota!"*

---

### 3. Reusable What-If / Forecast Prompt Specification

```
BUSINESS MODEL OVERVIEW:
- Product / Service: [e.g., B2B Cloud Accounting Software]
- Unit Selling Price (P): ₹12,000 / year
- Variable Cost Per Customer (VC): ₹3,500 / year
- Monthly Fixed Overheads (FC): ₹18,50,000 (Salaries, Servers, Rent)
- Current Monthly Active Subscribers: 1,450

WHAT-IF OBJECTIVE:
- Scenario A (Worst Case): 15% churn, price cut by 10% due to competition.
- Scenario B (Base Case): 5% organic growth, stable pricing.
- Scenario C (Best Case): 25% growth, new enterprise tier launch at ₹18,000.

GOAL SEEK QUERY:
- Find exact minimum subscribers needed to break even (Net Profit = 0).
- Find units required to achieve ₹30,00,000 monthly profit.

FORECAST CONTEXT:
- 24 Months of historical revenue data attached.
- Identify if seasonality exists (e.g., Q4 March fiscal year-end spikes in India).
```

---

### 4. Deep Dive: The 3 Pillars of What-If Analysis

```
                    [WHAT-IF ANALYSIS PILLARS]
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
   [GOAL SEEK]         [SCENARIO MANAGER]       [DATA TABLES (1D/2D)]
- Single variable       - Multiple variables     - Matrix sensitivity
- Backward calculation  - Best / Base / Worst    - Shows 100+ outcomes
- e.g., "Kitna volume   - e.g., Multi-variable   - e.g., Price vs Cost
  bechein target profit   Annual Budgeting         Profit matrix
  ke liye?"
```

1. **Goal Seek vs Solver:**
   - *Goal Seek:* Sirf 1 single changing cell ko adjust kar sakta hai bina kisi constraint ke.
   - *Solver:* Multiple variables ko budget constraints ke under optimize karta hai.
2. **Exponential Smoothing (`FORECAST.ETS`):**
   - Excel 2016+ mein available AAA-version algorithm jo automatic timeline seasonality aur trend pattern detect karta hai.
   - AI Role: Seasonality cycle (e.g., 12 for monthly, 4 for quarterly) verify karwana aur Confidence Bounds (Upper Bound vs Lower Bound) explain karna.

---

### 5. Estimates vs Certainty: The Strategic Verification Rule

> [!WARNING]
> **Forecasting is an Estimate, NOT a Guarantee!**
> Excel ke mathematical trendlines assume karte hain ki *"Jo past mein hua, future mein bhi wahi repeat hoga."* 
> Real market mein Government policy changes (GST rates), black-swan events (pandemics, wars), ya competitor disruption historical models ko break kar dete hain. 
> Hamesha management presentations mein **Confidence Interval (Upper & Lower Limits)** aur **Underlying Assumptions** ko clearly state karein.

---

### 6. Classroom Practice Prompts (100% Professional English)

#### Practice Prompt 1: Building a 3-Tier Scenario Model using `profit_model_and_forecast_data.csv`
```text
I am analyzing the 24-month financial dataset in 'profit_model_and_forecast_data.csv'.
Current parameters:
- Average Monthly Revenue: ₹42,00,000
- Cost of Goods Sold (COGS): 45% of Revenue
- Fixed Operational Expenses: ₹14,00,000 / month
- Marketing Spend: ₹5,00,000 / month

I need to configure Excel's Scenario Manager for the upcoming fiscal year:
1. Scenario 1 (Conservative/Worst Case): Raw material inflation pushes COGS to 52%, marketing efficiency drops by 15%, Revenue drops by 8%.
2. Scenario 2 (Base Case): COGS remains at 45%, Revenue grows by 10%, Marketing increases by 5%.
3. Scenario 3 (Aggressive/Best Case): Enterprise contracts increase Revenue by 25%, economies of scale lower COGS to 40%.

Please provide:
- The exact Changing Cells and Result Cells mapping for Excel Scenario Manager.
- A formatted summary comparison table showing Projected Revenue, Total Cost, and Net Profit Margin % for all three scenarios.
- A strategic executive commentary summarizing the downside risk vs upside potential.
```
*Expected Output:* Clear table with 3 scenarios, step-by-step setup in Excel, and risk commentary.
*Skill Practiced:* Financial scenario modeling and sensitivity analysis.

#### Practice Prompt 2: Goal Seek Formulation for Break-Even & Profit Targets
```text
In my Excel calculation sheet:
- Cell B1: Sales Price Per Unit = ₹850
- Cell B2: Variable Production Cost Per Unit = ₹320
- Cell B3: Monthly Fixed Factory Overheads = ₹12,72,000
- Cell B4: Units Sold (Changing Cell) = 1,000
- Cell B5: Net Operating Profit Formula: `=(B1 - B2) * B4 - B3` (Currently shows a loss of -₹7,42,000).

Please provide:
1. The exact Goal Seek inputs (Set Cell, To Value, By Changing Cell) to calculate the Break-Even Volume (where Profit = 0).
2. The Goal Seek inputs to determine the volume required to generate a Net Profit of ₹15,00,000 per month.
3. If factory maximum physical capacity is 4,500 units per month, can the ₹15,00,000 profit target be achieved at current pricing? Explain the business implication.
```
*Expected Output:* Mathematical breakdown (Break-Even = 2,400 units; Target = 5,230 units) and identification of capacity bottleneck.
*Skill Practiced:* Breakeven analysis, Goal Seek mechanics, and operational constraint validation.

#### Practice Prompt 3: 6-Month Time-Series Forecast using `FORECAST.ETS`
```text
I have 24 months of historical monthly revenue data (Jan 2022 to Dec 2023) in Columns A (Dates) and B (Revenue).
I need to project revenue for the next 6 months (Jan 2024 to June 2024) in Excel 365.

Please provide:
1. The exact formula syntax for `FORECAST.ETS` to project Jan 2024.
2. The formulas for `FORECAST.ETS.CONFINT` to establish a 95% Confidence Interval (Upper Bound and Lower Bound).
3. How to instruct Excel to automatically detect annual seasonality (12-month seasonality).
4. How to plot this data into a professional Excel Forecast Sheet Chart with confidence bands.
```
*Expected Output:* Complete formula suite with parameter explanations, timeline syntax, and chart creation guide.
*Skill Practiced:* Advanced time-series modeling and statistical forecasting in Excel.

#### Practice Prompt 4: Two-Variable Sensitivity Data Table Matrix
```text
I am evaluating a real estate commercial leasing project in Excel:
- Cell C1: Rental Rate per Sq Ft (ranging from ₹60 to ₹120 in increments of ₹10)
- Cell C2: Occupancy Rate % (ranging from 65% to 95% in increments of 5%)
- Cell C10: Annual Net Cash Flow Formula: `=((Total_SqFt * C1 * 12) * C2) - Total_Fixed_Maintenance`

Please provide:
1. Step-by-step instructions to set up a Two-Variable Data Table (`Data -> What-If Analysis -> Data Table`).
2. Which cell goes into 'Row Input Cell' and which goes into 'Column Input Cell'?
3. How to apply Conditional Formatting (Color Scales) across the resulting matrix to visually identify the danger zone vs highly profitable zone.
```
*Expected Output:* Matrix construction guide, input cell assignment clarification, and conditional formatting rules.
*Skill Practiced:* Multi-dimensional sensitivity analysis and visual financial reporting.

#### Practice Prompt 5: Critical Assumption Audit for Executive Forecast Presentations
```text
My finance team has produced a 3-year revenue forecast projecting 40% Year-over-Year growth based strictly on polynomial regression extrapolation of our last 18 months of startup growth.

Please draft a rigorous 5-point 'Sanity & Risk Audit' that an experienced CFO or Board Director should ask before approving this forecast. Focus on:
1. Market saturation and TAM (Total Addressable Market) limits.
2. Customer Acquisition Cost (CAC) inflation.
3. Competitor retaliation and pricing erosion.
4. Working capital and cash flow drag.
5. Model overfitting risks in Excel.
```
*Expected Output:* Tough, pragmatic CFO-level interrogation questions challenging blind linear/polynomial extrapolation.
*Skill Practiced:* Critical thinking, financial governance, and forecast verification.

---

### 7. Verification Checklist & Precautions

```
[ ] Step 1: Goal Seek Convergence Check
    - Verify karein ki Goal Seek ne exact target reach kiya ya decimal rounding par pause ho gaya.
[ ] Step 2: Linear vs Seasonal Validation
    - Check karein ki historical data mein Diwali ya Year-end spike hai ya nahi; linear forecast seasonal data ko distort kar deta hai.
[ ] Step 3: Sensible Bounds Testing
    - Upper aur Lower confidence bands check karein; agar lower bound negative revenue dikha raha hai, toh model parameter tune karein.
[ ] Step 4: Management Caveat Footnote
    - Slide ya report footer mein hamesha model ki underlying assumptions (inflation rate, market size) clearly state karein.
```
