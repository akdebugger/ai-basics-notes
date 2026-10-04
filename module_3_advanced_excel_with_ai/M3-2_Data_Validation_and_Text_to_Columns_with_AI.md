# Module 3 — Topic M3-2: Data Validation & Text to Columns with AI

---

## 📌 Topic Overview: Data Validation & Text to Columns with AI

Corporate spreadsheets mein sabse zyada samay **"Garbage Data"** ko clean karne aur human input errors ko rokne mein barbaad hota hai. Excel mein iske do sabse powerful tools hain:
1. **Data Validation:** User ko invalid data type karne se rokna (e.g., duplicate invoice number, invalid date range, negative quantity, ya wrong dropdown choice).
2. **Text to Columns:** Ek hi cell mein chipke hue messy text (jaise `"Ramesh Kumar Sharma, Mumbai - 400001"`) ko alag-alag structured columns mein divide karna.

Is topic mein aap seekhenge ki AI ki madad se complex Custom Data Validation formulas kaise banayein aur tricky Text to Columns dilemmas ko seamlessly kaise resolve karein.

---

### 1. Concept: Clean Input Enforcing aur Data Parsing with AI

**Kya hai (Definition):**
- **Data Validation with AI:** AI aapko Custom Validation Formulas (jaise `=COUNTIF()`, `=ISNUMBER()`, `=AND()`) likh kar deta hai jo standard settings mein directly available nahi hote. AI cascading/dependent dropdowns (e.g., State choose karne par wahi ke Cities dikhana) ka architecture plan karta hai.
- **Text to Columns with AI:** Jab raw ERP/Tally export mein data inconsistent delimiters (kabhi comma, kabhi pipe `|`, kabhi tab) ke sath aata hai, tab AI best splitting strategy suggest karta hai ya helper splitting formulas propose karta hai.

**Kyun zaroori hai (Why it matters):**
- Agar Data Validation nahi hoga, toh 50 alag employees "Maharashtra" ko "MH", "Maharastra", "M.H." likh kar poore MIS reporting ko corrupt kar denge.
- Text to Columns se hours ka manual copy-paste 10 seconds mein automate hota hai.

**Kaise kaam karta hai (How it works):**
AI ko data format aur anomalies bata kar aap:
- Exact custom validation formula generate karwa sakte hain.
- Tricky parsing edge cases identify karwa sakte hain (jaise address mein comma aur building number dono ho).
- Copy-paste override vulnerability ke against guardrails samajh sakte hain.

---

### 2. Real-Life Analogy (Office & Daily Life)

> **Analogy: Airport Security Check & Luggage Scanner**
> - **Data Validation** airport ke security gate jaisa hai: Boarding pass bina barcode ke valid nahi hoga, aur prohibited item (wrong data format) luggage mein enter nahi karne diya jayega!
> - **Text to Columns** luggage scanner aur sorting conveyor belt jaisa hai: Jab heavy carton aata hai jisme shirts, pants aur documents mix hain, scanner identify karta hai ki har item ko kaunse separate tray (column) mein systematically place karna hai!

---

### 3. Reusable Validation & Parsing Specification Template

```
OBJECTIVE: [Data Validation Rule / Text to Columns Splitting]
TARGET RANGE: [e.g., Column B (B2:B2000)]

RAW DATA SAMPLE (3-5 Rows):
- "INV-2024-001 | Rahul Sharma | New Delhi - 110001"
- "INV-2024-002 | Anita Patel | Ahmedabad - 380001"
- "INV-2024-003 | Mohammed Farhan Khan | Bangalore - 560001"

DESIRED COLUMNS / RESTRICTIONS:
- Column 1: Invoice Code (Must be unique, format INV-YYYY-XXX)
- Column 2: Full Customer Name
- Column 3: City
- Column 4: 6-Digit PIN Code (Strictly numbers only)

CURRENT ISSUE:
- [e.g., Delimiters are inconsistent, or users paste duplicate invoices]
```

---

### 4. Deep Dive: High-Value Validation Rules

1. **Preventing Duplicate Entries in Real Time:**
   - Formula: `=COUNTIF($A$2:$A$1000, A2)<=1`
   - Use Case: GST numbers, Employee IDs, PAN numbers jo kabhi repeat nahi hone chahiye.
2. **Dependent / Cascading Dropdown Menus:**
   - Formula: `=INDIRECT(A2)`
   - AI Assistance: Named ranges automate karna taaki invalid spaces auto-convert ho jayein (`New_Delhi` vs `New Delhi`).
3. **Restricting Future Dates in Attendance / Expense:**
   - Formula: `=AND(ISNUMBER(C2), C2<=TODAY(), C2>=DATE(2024,1,1))`
   - Use Case: Employee aage ki date ka expense claim na daal sake.

---

### 5. Troubleshooting Text to Columns Dilemmas

| Challenge | Root Cause | AI Solution / Strategy |
| :--- | :--- | :--- |
| **Pasted Data Overwriting Columns** | Text to Columns target range right side ke existing columns ko overwrite kar deta hai. | Blank helper columns insert karne ka prompt rule; AI formula parsing alternative. |
| **Leading Zeros Drop (`01234` becomes `1234`)** | Excel PIN codes ya Employee codes ko default General type man kar number convert kar deta hai. | Step 3 mein column data format ko **"Text"** mark karne ki prompt reminder. |
| **Multi-word Names Split Unevenly** | Space delimiter use karne par "Rahul Sharma" (2 columns) vs "Mohammed Farhan Khan" (3 columns) mismatch ho jata hai. | AI regex ya formulas (`TEXTBEFORE`, `TEXTAFTER`, `LEFT`, `FIND`) suggest karta hai. |

---

### 6. Classroom Practice Prompts (100% Professional English)

#### Practice Prompt 1: Custom Data Validation for Indian PAN Cards
```text
I am designing an onboarding worksheet in Excel 2019 for Indian vendors.
In Column C (starting at C2), vendors must enter their Permanent Account Number (PAN).
The strict format is:
- Exactly 10 characters long
- First 5 characters must be uppercase letters (A-Z)
- Next 4 characters must be numeric digits (0-9)
- Last character must be an uppercase letter (A-Z)

Please provide:
1. The exact Custom Data Validation formula to enforce this rule in Excel.
2. Clear instructions on where to paste this formula in the Data Validation dialog.
3. Recommended settings for the "Error Alert" tab (Title and Error Message text) to guide non-technical users.
```
*Expected Output:* Custom formula using `LEN`, `EXACT`, and character code checks or regex logic, plus error modal copy.
*Skill Practiced:* Robust data integrity enforcement at data entry point.

#### Practice Prompt 2: Two-Tier Dependent Cascading Dropdowns
```text
I want to create a two-level dependent dropdown system in Excel 365:
- Master Column A: Indian State (Options: Maharashtra, Karnataka, Gujarat)
- Sub-dropdown Column B: City (Shows Pune, Mumbai, Nagpur if Maharashtra is selected; Bengaluru, Mysuru if Karnataka is selected).

Please provide:
1. The exact steps to organize the reference tables and create Named Ranges.
2. The formula to use in Data Validation List source for Column B using INDIRECT.
3. How to handle multi-word state names (e.g., "Uttar Pradesh" or "Tamil Nadu") where Named Ranges do not permit spaces.
```
*Expected Output:* Named range setup with `SUBSTITUTE(A2, " ", "_")` and dynamic lookup.
*Skill Practiced:* Advanced UI controls inside spreadsheet modeling.

#### Practice Prompt 3: Parsing Complex Address Strings (Text to Columns vs Formulas)
```text
I have 2,000 raw vendor records in Column A with this inconsistent format:
"ABC Logistics | Warehouse 14, Plot 9 | Andheri East | Mumbai | 400069"
"Prime Traders | Gala No 4 | Naroda GIDC | Ahmedabad | 382330"

I need to split this into 5 clean columns:
Vendor Name, Street Address, Area, City, and PIN Code.

Please provide:
1. The step-by-step instructions to accomplish this using Excel's built-in 'Text to Columns' feature.
2. The pitfall to avoid so that the 6-digit PIN code does not lose leading zeros or get treated as a scientific number.
3. An alternative solution using modern Excel 365 formulas (TEXTSPLIT) in case this needs to be dynamically updated when new rows are pasted.
```
*Expected Output:* Step-by-step wizard guide + `=TEXTSPLIT(A2, " | ")` syntax.
*Skill Practiced:* Text processing and ETL (Extract, Transform, Load) within Excel.

#### Practice Prompt 4: Preventing Duplicate Invoice Numbers Across Multiple Branches
```text
In an expense reconciliation sheet (Excel 2016), Column B contains 'Branch Name' (B2:B5000) and Column D contains 'Invoice Number' (D2:D5000).
An invoice number can be duplicated across different branches, but it MUST BE UNIQUE within the same branch.

Please provide:
1. The Custom Data Validation formula using COUNTIFS to block duplicate invoice numbers for the same branch.
2. Explain how Excel evaluates this formula row-by-row.
3. What happens if a user copies and pastes a duplicate value from another sheet? How can we safeguard against copy-paste validation bypass?
```
*Expected Output:* `=COUNTIFS($B$2:$B$5000, B2, $D$2:$D$5000, D2)<=1` + discussion of Excel paste vulnerability.
*Skill Practiced:* Compound business logic validation and audit defense.

#### Practice Prompt 5: Troubleshooting Disabled Data Validation
```text
My colleague sent me an Excel workbook where the Data Validation button is completely grayed out (disabled) on the Ribbon, and existing dropdowns are not responding when clicked.

Please explain:
1. The top 5 reasons why Data Validation becomes disabled or unclickable in Excel (e.g., sheet protection, grouped sheets, table edit mode, file format issues).
2. Step-by-step diagnostic actions to unlock and restore the functionality.
```
*Expected Output:* Diagnostic checklist covering Grouped Sheets `[Group]`, Protected Sheets, Shared Workbook mode, and In-Cell edit modes.
*Skill Practiced:* Rapid technical problem resolution in office environments.

---

### 7. Verification Checklist & Precautions

```
[ ] Step 1: Backup Before Splitting
    - Text to Columns run karne se pehle hamesha original column ki copy sheet mein rakhein.
[ ] Step 2: Empty Target Columns
    - Ensure karein ki splitting destination ke right side 4-5 empty columns hon taaki existing data overwrite na ho.
[ ] Step 3: Text Format for Codes
    - PIN codes, GST numbers, aur Phone numbers ko 'Text' column format set karein taaki leading zero preserve rahein.
[ ] Step 4: Paste-Over Test
    - Data Validation lagane ke baad test karein: Agar user copy-paste karega toh kya invalid data accept ho raha hai?
```
