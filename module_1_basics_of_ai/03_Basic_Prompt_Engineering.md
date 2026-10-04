# MODULE 1 — SECTION 3: Basic Prompt Engineering (Prompt Likhte Kaise Hain?)

---

## 📌 Topic 1: Prompt Kya Hai?

### 1. Concept (Simple Explanation)
**Prompt kya hai?**
AI ki duniya mein **"Prompt"** us text instruction, sawal ya message ko kehte hain jo aap kisi AI tool (jaise ChatGPT, Copilot ya Gemini) ke input box mein type karke enter dabate hain. Seedhe shabdon mein, prompt woh command ya request hai jisse aap AI ko batate hain ki aapko usse kya karwana hai.

**Yeh kyun zaroori hai?**
Computer science ka ek purana golden rule hai: **GIGO — Garbage In, Garbage Out**. Agar aap AI ko kachra instruction denge ("kuch bana do"), toh AI bhi kachra aur bekar jawab dega. Lekin agar aap AI ko clear, structured aur specific prompt denge, toh AI aisa high-quality response dega jo lagta hai kisi ₹15 lakh package wale senior expert ne taiyar kiya hai!

**Yeh kaise kaam karta hai?**
Prompt AI ke liye ek compass (disha-soochak) ka kaam karta hai. AI ke neural network mein arbon words aur concepts store hain. Jab aap ek specific prompt likhte hain, toh AI saare irrelevant data ko ignore karke sirf wahi neurons activate karta hai jo aapke prompt ke topic se match karte hain.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** Prompt ko ek **"Restaurant ka Order"** samjhiye. Agar aap waiter se jaakar bolenge: "Kuch khane ko le aao" — toh waiter confuse ho jayega ya aisi sabzi le aayega jo aapko bilkul pasand nahi. Lekin agar aap clearly bolenge: *"Bhaiya, ek plate paneer butter masala kam mirch wala, do butter naan crispy, aur ek fresh lime soda bina cheeni ke lana"* — toh aapko wahi milega jo aap chahte the! Prompt wahi exact order hai.

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **The Starting Point:** Prompt AI ke saath baat-cheet ka shuruati gateway hai.
- **Direct Impact on Quality:** Jaisa prompt hoga, theek waisa hi response aayega.
- **Language is No Barrier:** Aap English, Hinglish ya Hindi mein prompts likh sakte hain.
- **Not Just Questions:** Prompt sirf sawal nahi hote; yeh instructions, code snippets, ya rough data bhi ho sakte hain.

---

### 4. Practical Example
**Scenario:** Ek professional ko Excel mein kisi employee ki age calculate karni hai uski Date of Birth (DOB) se.

**Prompt:**
```text
Excel mein Cell A2 mein Employee ki Date of Birth (DD-MM-YYYY) likhi hai. 
Mujhe Cell B2 mein aaj ki date ke hisaab se uski exact age years mein calculate karni hai. 
Excel formula aur calculation ka step samjhaiye.
```

**AI Response (Sample):**
```text
Aap Excel mein `DATEDIF` ya `YEARFRAC` function use kar sakte hain:
Formula: `=DATEDIF(A2, TODAY(), "Y")`

Explanation:
- `A2`: Employee ki birth date.
- `TODAY()`: Aaj ki current system date.
- `"Y"`: Complete completed years return karne ke liye.
Formula enter karke Enter dabayein aur column mein drag kar dein.
```

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **1-2 words ka prompt likhna:** Jaise sirf `Excel formula` ya `Leave letter` likh dena.
- **Assume karna ki AI aapke dimaag mein chal rahi situation ko pehle se janta hai:** AI ko context batana padta hai.

---

### 6. Quick Recap
Prompt woh specific instruction ya order hai jo hum AI ko dete hain; jitna clear instruction hoga, utna hi shaandar output milega.

---

## 📌 Topic 2: Prompt Engineering Kya Hai?

### 1. Concept (Simple Explanation)
**Prompt Engineering kya hai?**
Prompt Engineering ek aisi art (kala) aur science hai jisme hum AI tools se best, most accurate aur tailored output nikalwane ke liye prompts ko strategically design aur refine karte hain. Yeh AI ke dimaag ko sahi direction mein channel karne ki technique hai.

**Yeh kyun zaroori hai?**
Duniya ke har employee ke paas AI tools ka access hai, lekin har kisi ka result ek jaisa nahi hota. Ek average employee 10 baar prompt badal-badal kar frustrate hota rehta hai, jabki ek trained Prompt Engineer ek hi baar mein aisa prompt likhta hai jo company ke ghanton ka time bacha leta hai. Aaj ke corporate market mein Prompt Engineering ek high-value employability skill ban chuki hai.

**Yeh kaise kaam karta hai?**
Prompt Engineering mein hum AI ko random sawal nahi puchte, balki uske prompt ko structured architecture dete hain: hum AI ko ek persona (Role) dete hain, exact Objective (Task) samjhate hain, Background Situation (Context) provide karte hain, Boundary lines (Constraints) kheenchte hain, aur kis style mein chahiye (Output Format) define karte hain.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** Prompt Engineering ek **"Skilled Driver"** jaisi hai. Car (AI engine) sabhi ke paas wahi hai, lekin ek unskilled driver jhatke maar-maar kar car chalata hai aur petrol waste karta hai, jabki ek expert driver smooth steering control karke bina kisi rukawat ke seedhe manzil par pohncha deta hai!

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **High-Demand Career Skill:** Har domain (HR, Accounts, Sales, Operations) mein prompt engineering ki value hai.
- **No Coding Required:** Isme software programming ki zaroorat nahi; structured communication ki zaroorat hoti hai.
- **Iterative Process:** Pehla response aane ke baad use aur refine karna bhi prompt engineering ka hissa hai.
- **Consistency & Predictability:** Achhi prompt engineering har baar standard, error-free output deti hai.

---

### 4. Practical Example
**Scenario:** Company ko cost cutting par ek circular nikalna hai par employee morale down nahi hona chahiye.

**Engineered Prompt:**
```text
[Role]: Aap ek empathetic Chief Human Resources Officer (CHRO) hain.
[Task]: Office utility bills aur stationery cost 20% reduce karne ke liye staff ke liye ek internal memo likhein.
[Context]: Market slowdown ki wajah se humein operational expenses bachane hain bina kisi employee ki salary ya perks cut kiye.
[Instructions]: Tone positive aur collaborative rakhein, punitive (sazawala) nahi. Employees se small practical ideas maangein.
[Format]: 150-200 words ka short announcement with 3 actionable tips.
```

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **Sochna ki prompt engineering sirf complicated prompts likhna hai:** Simple shabdon mein clear context dena hi best engineering hai.
- **Overcomplicating:** Zaroorat se zyada irrelevant details daal kar prompt ko 5 pages ka bana dena.

---

### 6. Quick Recap
Prompt Engineering AI se desired output lene ke liye instructions ko smart, structured aur precise tarike se craft karne ka tareeqa hai.

---

## 📌 Topic 3: Good Prompt vs Poor Prompt (Buniyadi Antar)

Chaliye ek aam prompt aur ek professional prompt ke beech ka antar dekhte hain:

```
┌──────────────────────────────────────┐     ┌────────────────────────────────────────────────────────┐
│             POOR PROMPT              │     │                      GOOD PROMPT                       │
├──────────────────────────────────────┤     ├────────────────────────────────────────────────────────┤
│ • Vague aur adhoora                  │     │ • Clear, specific aur detailed                         │
│ • "Excel formula do"                 │     │ • Role, context, cell ranges aur goal defined          │
│ • AI ko guess karna padta hai        │     │ • AI ko exact direction milti hai                      │
│ • Output generic aur useless hota hai│     │ • Output copy-paste ready aur usable hota hai          │
└──────────────────────────────────────┘     └────────────────────────────────────────────────────────┘
```

---

## 📌 Topic 4: Prompt Ke 6 Basic Elements (Pillars)

Ek high-performance prompt ke 6 core elements hote hain. Inhe **R-T-C-I-O-C Framework** kehte hain. Chaliye har ek element ko deeply samajhte hain aur dekhte hain ki Poor vs Good prompt kaisa dikhta hai:

---

### Element 1: Role (AI Kaunsa Kirdaar Nibhaye?)
**Concept:** AI ko ek specific identity ya persona assign karein (jaise: "Aap ek Senior Chartered Accountant hain", "Aap ek Corporate Excel Trainer hain"). Jab aap AI ko role dete hain, toh AI usi profession ki vocabulary aur technical depth activate kar leta hai.

- ❌ **Poor Prompt:** `TDS ke baare mein batao.`
- ✅ **Good Prompt:** `Aap ek senior Indian Tax Consultant hain. Ek small IT startup founder ko Section 194J ke tehat professional fees par TDS deduction ke basic rules simple Hinglish mein samjhaiye.`

---

### Element 2: Task (AI Ko Exact Kya Karna Hai?)
**Concept:** AI ko clear action verb ke saath batayein ki uska primary objective kya hai (jaise: calculate karein, summarize karein, draft karein, compare karein).

- ❌ **Poor Prompt:** `Ye data theek karo.`
- ✅ **Good Prompt:** `Neeche diye gaye raw customer list mein se duplicate names aur phone numbers identify karein aur unhe ek clean unique records table mein convert karein.`

---

### Element 3: Context (Background Situation Kya Hai?)
**Concept:** AI ko situation ki background story batayein — company kis cheez ki hai, target audience kaun hai, problem kyun paida hui. AI ke paas context hoga toh woh customized solution dega.

- ❌ **Poor Prompt:** `Discount offer ka message banao.`
- ✅ **Good Prompt:** `Humari Mumbai mein ek wholesale garment shop hai. Diwali season clearance ke liye hum apne purane B2B retail buyers ko 15% extra discount de rahe hain agar woh 48 ghante mein full advance payment karein. Is offer ka ek urgent B2B WhatsApp broadcast message draft karein.`

---

### Element 4: Instructions (Kaise Karna Hai? Rules Kya Hain?)
**Concept:** Step-by-step guidelines aur tone set karein (jaise: polite tone rakhein, complex technical jargon mat use karein, practical examples shamil karein).

- ❌ **Poor Prompt:** `Ek feedback report likho.`
- ✅ **Good Prompt:** `Ek employee appraisal feedback draft karein. Instructions: Pehle 2 major strengths highlight karein, phir 1 improvement area (time management) ko constructive aur supportive tone mein address karein. Kahi bhi harsh language use na ho.`

---

### Element 5: Output Format (Result Kaisa Dikhna Chahiye?)
**Concept:** Output kis layout mein chahiye — bullet points, markdown table, 3-column spreadsheet format, ya short email template. AI ko format batane se aapka formatting time bach jata hai.

- ❌ **Poor Prompt:** `Top laptops compare karo.`
- ✅ **Good Prompt:** `Office work ke liye top 3 budget laptops compare karein. Output ko ek clean Markdown Table format mein dein jisme ye columns hon: Model Name | Processor | RAM & Storage | Battery Life | Approx Indian Price | Best For.`

---

### Element 6: Constraints (Kya NAHI Karna Hai? Boundaries)
**Concept:** Negative boundaries lagana bohot zaroori hai taaki AI bekar ki lambi kahaniyaan na likhe (jaise: 100 words se zyada mat likhna, technical words avoid karna, koi assumption mat lagana).

- ❌ **Poor Prompt:** `Meeting points explain karo.`
- ✅ **Good Prompt:** `Kal subah ki all-hands meeting ke 4 main announcements summarize karein. Constraints: Total summary 100 shabdon ke andar honi chahiye. Koi extra advice ya filler sentences na jodein. Sirf crisp bullet points dein.`

---

## 📌 Topic 5: Reusable Prompt Formula / Template

Har student aur professional ko yeh universal template yaad rakhna chahiye:

```text
════════════════════════════════════════════════════════════════════════════════
🎯 UNIVERSAL PROMPT FORMULA TEMPLATE (Copy-Paste Ready)
════════════════════════════════════════════════════════════════════════════════

[ROLE]: 
Aap ek [Senior Role / Domain Expert, e.g. Senior Excel Specialist / HR Manager] hain.

[CONTEXT]: 
Situation yeh hai ki [Aapki company / business situation aur background details yahan likhein].

[TASK]: 
Aapko mere liye [Exact task, e.g. Excel formula create karna / email draft karna / data analyze karna] hai.

[INSTRUCTIONS & TONE]: 
- Tone [Formal / Polite / Persuasive / Simple] honi chahiye.
- Step-by-step explanation shamil karein.
- Har point practical aur workplace-ready hona chahiye.

[OUTPUT FORMAT]: 
Output ko [Markdown Table / Bullet Points / Email Draft / Code Block] mein present karein.

[CONSTRAINTS]: 
- [Word limit, e.g. 150 words se zyada na ho].
- Koi fake facts ya assumed information include na karein.
- Technical jargon ko simple Hinglish mein explain karein.
════════════════════════════════════════════════════════════════════════════════
```

---

## 📌 Topic 6: Prompt Improvement Ladder (Level 1 Se Level 4 Tak)

Dekhiye kaise ek hi task ko step-by-step weak se excellent banaya ja sakta hai:

*Task: Ek vendor ko payment late hone par delay intimation email bhejna.*

- 🧗 **Level 1 (Weak / Novice):**
  > `Vendor ko payment late ka email likho.`
  > *(Problem: Koi details nahi, kaunsa vendor, kitna amount, kab milegi payment — kuch nahi pata).*

- 🧗 **Level 2 (Basic):**
  > `Sharma Traders ko payment delay hone ka polite email likho. Amount ₹50,000 hai aur payment agle hafte hogi.`
  > *(Improvement: Vendor ka naam aur amount aaya, par structure aur tone abhi bhi plain hai).*

- 🧗 **Level 3 (Good / Intermediate):**
  > `Aap ek accounts executive hain. Vendor "Sharma Traders" ke Invoice #ST-889 (₹50,000) ki payment quarterly bank audit reconciliation ki wajah se delay hui hai. Unhe ek formal aur respectful email draft karein jisme delay ka reason explain ho aur pakka commitment ho ki payment 18 October tak clear ho jayegi.`
  > *(Improvement: Role, invoice number, exact reason, aur clear date commit ho gayi).*

- 🧗 **Level 4 (Master / Classroom-Ready Expert):**
  > `Aap ek professional Accounts Manager hain. Hamare valued vendor "Sharma Traders" ko Invoice #ST-889 (₹50,000) ke regarding Payment Delay Intimation email draft karein.`  
  > `Context: Humare bank account mein quarterly audit verification chal raha hai jisse online transfers 3 din ke liye paused hain. Delay genuine aur temporary hai.`  
  > `Instructions: Tone bohot courteous aur apologetic rakhein par company ki stability par confidence banaye rakhein. Clear deadline commit karein ki payment 18 October 2026 ko 2 PM tak NEFT se release ho jayegi.`  
  > `Format: Standard corporate email format (Subject, Salutation, Body, Key Details bullet points, Sign-off).`  
  > `Constraints: 120-150 words ke andar crisp draft dein.`

---

## 📌 Topic 7: 10 Good Prompt vs Poor Prompt Comparisons

| S.No. | Domain / Task | ❌ Poor Prompt (Kachra Prompt) | ✅ Good Prompt (Engineered Prompt) |
| :---: | :--- | :--- | :--- |
| **1** | **Excel Formula (Lookup)** | `VLOOKUP formula batao.` | `Excel mein mere pass Sheet1 ke Column A mein Employee ID aur Column C mein Salary hai. Sheet2 mein ID daal kar Salary fetch karne ka exact VLOOKUP formula batao jisme `#N/A` error handle ho.` |
| **2** | **Email (Salary Hike)** | `Salary badhane ka mail likho.` | `Aap ek Senior Data Analyst hain jinhone pichle 1 saal mein reporting automation se company ke 15 hours/week bachaye hain. Apne Department Head ke liye ek professional, respectful salary appraisal request email draft karein.` |
| **3** | **PowerPoint Outline** | `Cyber security par PPT banao.` | `Bank ke non-technical branch staff ke liye 5-slide Cyber Safety Awareness presentation outline banaiye. Har slide ke bullet points aur speaker notes shamil hon.` |
| **4** | **Data Cleaning** | `Names clean karo.` | `Neeche diye gaye 20 customer names mein random small aur CAPITAL letters hain. Excel ke PROPER function ka formula aur shortcut use karke ise Title Case mein convert karne ke steps batao.` |
| **5** | **Client Apology** | `Client ko sorry bolo late delivery ke liye.` | `Aap ek Logistics Manager hain. Ek B2B client ka shipment heavy monsoon rain ke karan 2 din late ho gaya hai. Ek empathetic, professional apology email draft karein jisme live tracking link aur priority handling ka reassurance ho.` |
| **6** | **Meeting Agenda** | `Sales meeting ka agenda banao.` | `Kal subah 45-minute ki monthly sales review meeting ke liye structured agenda banaiye. Topics: Q3 revenue vs target, top 3 lost deals, aur Q4 territory allocation. Har topic ke liye time allocated ho.` |
| **7** | **Excel Conditional Format** | `Conditional formatting kaise lagayein?` | `Excel mein Column F mein Invoices ki Due Dates hain. Aise invoices jinki due date aaj se 5 din ke andar hai unhe light red color se highlight karne ka step-by-step Conditional Formatting rule guide karein.` |
| **8** | **Resume Bullet Points** | `Mera resume achha karo.` | `Aap ek Executive Career Coach hain. Ek Junior Accountant ke is resume point ko impactful action-verb format mein rewrite karein: "I made GST bills and filed returns". Quantifiable achievements add karein.` |
| **9** | **Vendor Negotiation** | `Rate kam karwao vendor se.` | `Hamara printing supplier ₹12 per brochure charge kar raha hai. Hum 10,000 copies ka bulk order de rahe hain. Unse ₹9.50 rate negotiate karne ke liye ek courteous par firm negotiation email draft karein.` |
| **10** | **Office SOP / Checklist** | `Office open karne ki checklist banao.` | `Ek Corporate Admin Executive ke liye Daily Morning Office Opening Checklist table format mein banaiye. Categories: AC & Lighting check, Server room temperature, Cafeteria supplies, Housekeeping verification.` |

---

## 📌 Topic 8: Follow-up Prompts (Conversation Ko Refine Kaise Karein?)

AI chatbot ki sabse badi power yeh hai ki aapko pehli baar mein 100% perfect output na mile toh naya prompt shuru karne ki zaroorat nahi hai. Aap usi chat mein **Follow-up Commands** dekar response ko refine kar sakte hain:

### 🔄 5 Types of Follow-up Prompts with Flows

#### 1. Refine / Add Specifics (Aur detail jodhna):
- *User:* "Is draft mein point number 2 bohot generic hai. Kripya usme UPI aur Netbanking transaction failures ke real examples add karein."

#### 2. Shorten / Condense (Chhota aur crisp karna):
- *User:* "Yeh email bohot lambi ho gayi hai. Isko 50% chhota kar do aur sirf 3 key bullet points mein convert kar do."

#### 3. Change Tone (Lehja badalna):
- *User:* "Iski tone thodi defensive lag rahi hai. Ise zyada customer-centric, humble aur solution-oriented tone mein rewrite karein."

#### 4. Add Examples / Tables (Visual presentation badalna):
- *User:* "Is pure explanation ko text paragraph ke bajaye ek comparative 3-column Markdown Table mein dikhaiye."

#### 5. Correct Mistake (Galti sudharwana):
- *User:* "Aapne formula mein comma (`,`) lagaya hai jabki mere Excel regional settings mein semicolon (`;`) chalta hai. Formula ko semicolon format mein update karein."

---

## 📌 Topic 9: 8 Common Prompting Mistakes Aur Unke Fixes

```
┌──────────────────────────────────────────────┬──────────────────────────────────────────────┐
│ Common Mistake (Kaha Galti Hoti Hai?)         │ The Fix (Ise Kaise Theek Karein?)            │
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ 1. The "Vague Prompt" (Adhoori baat bolna)   │ W-Questions rule lagayein: Who, What, Why,   │
│    e.g. "Draft an email"                     │ When aur Format specify karein.              │
│                                              │                                              │
│ 2. Information Overload / Messy Prompt       │ Bullet points aur headings use karke prompt  │
│    (Ek hi paragraph mein sab ghad-mad)       │ ko clean blocks [Role], [Task] mein baantein.│
│                                              │                                              │
│ 3. Missing Negative Constraints              │ Clearly likhein: "No technical jargon",      │
│    (AI ko kya nahi karna yeh na batana)      │ "Do not exceed 100 words".                   │
│                                              │                                              │
│ 4. No Format Specified                       │ Batayein: Table, Bullet points ya Email.     │
│                                              │                                              │
│ 5. Restarting Chat Instead of Follow-up      │ Purani chat mein hi follow-up prompt dalein; │
│    (Baar baar nayi chat shuru karna)         │ AI memory use karein.                        │
│                                              │                                              │
│ 6. Assuming Real-World Fresh Data Access     │ Agar latest internal rule hai toh text       │
│    (AI ko internal policy pata hogi sochna)  │ prompt ke andar paste karke context dein.    │
│                                              │                                              │
│ 7. Asking Multiple Unrelated Tasks at Once   │ Ek prompt mein ek core task rakhein, step-  │
│    (Ek sath 5 alag alag departments ka kaam) │ by-step aage badhein.                        │
│                                              │                                              │
│ 8. Blind Trust Without Verification          │ Math aur formulas ko Excel mein paste karke  │
│    (Output ko bina padhe forward kar dena)   │ 5-step checklist se verify zaroor karein.    │
└──────────────────────────────────────────────┴──────────────────────────────────────────────┘
```

---

## 🧪 PRACTICE SET — SECTION 3

### A. Example Prompts (Copy-Paste Ready)

#### Prompt 1:
```text
Aap ek Senior Excel Analyst hain. Mujhe Excel mein ek dynamic formula chahiye jo 
Customer Name (Column A) aur Purchase Date (Column B) ke base par last purchase date 
search kare. Formula explain karein aur common errors se bachne ka tip dein.
```
- **Expected Output:** Excel `XLOOKUP` or `INDEX-MATCH` with descending sort logic.
- **Skill Practiced:** Role + Task + Technical explanation prompt.

#### Prompt 2:
```text
Aap ek Corporate Communication Trainer hain. Hamare accounts department ke naye trainees ke liye 
"Email Etiquette (Adab)" par 5 essential golden rules bullet points mein draft karein. 
Hinglish mein simple language mein samjhaiye.
```
- **Expected Output:** 5 friendly, actionable corporate email etiquette tips in Hinglish.
- **Skill Practiced:** Educational role prompting with tone constraint.

#### Prompt 3:
```text
Neeche diye gaye 5 lines ke meeting notes ko ek structured Markdown Table mein convert karein:
- Agenda Item
- Discussion Summary
- Responsible Person (Owner)
- Deadline (Target Date)
[Yahan meeting notes paste karein]
```
- **Expected Output:** Structured tabular synthesis of raw minutes.
- **Skill Practiced:** Output formatting instruction.

#### Prompt 4:
```text
Aap ek Procurement Manager hain. Ek vendor ne notice diya hai ki paper cost badhne se woh agle 
mahine se pricing 10% badha rahe hain. Unhe ek polite par firm reply likhein jisme contract period 
tak purani rates honor karne ki request ho. Word count: 120 words max.
```
- **Expected Output:** Crisp negotiation pushback email within strict word limits.
- **Skill Practiced:** Tone control and negative length constraints.

#### Prompt 5:
```text
Ek small office administrator ke liye Weekly Stationery & Pantry Inventory Audit checklist banayein. 
Checklist mein Item Name, Minimum Stock Required, Current Stock, aur Re-order Required (Yes/No) 
ke columns hone chahiye.
```
- **Expected Output:** Complete consumable inventory tracking table.
- **Skill Practiced:** Administrative process design.

#### Prompt 6:
```text
Aap ek HR Consultant hain. Employee handbook ke liye "Work From Home (WFH) Guidelines" ka 
ek professional 1-page draft banayein jisme core working hours (10 AM - 6 PM), responsiveness 
on Teams/Slack, aur internet reimbursement terms clearly outlined hon.
```
- **Expected Output:** Structured company policy draft ready for review.
- **Skill Practiced:** Policy drafting with multiple specific constraints.

#### Prompt 7:
```text
Excel mein `#DIV/0!` aur `#N/A` error kyun aate hain aur in dono errors ko `IFERROR` function 
se clean tarike se kaise hide/replace kiya jata hai? Example sheet scenario ke sath samjhaiye.
```
- **Expected Output:** Error debugging guide with syntax demonstration.
- **Skill Practiced:** Technical error resolution prompt.

#### Prompt 8:
```text
Aap ek Senior Event Coordinator hain. Humari company ke 10th Anniversary Celebration ke liye 
ek 2-hour event flow schedule table taiyar karein. Welcome speech, awards, cultural games aur dinner shamil hon.
```
- **Expected Output:** Time-blocked celebration schedule table.
- **Skill Practiced:** Event scheduling and planning.

---

### B. Hands-on Activities (Practical Lab)
1. **Activity 1 (The Ladder Test):** Topic 6 mein diye gaye "Payment Delay" scenario ke Level 1 aur Level 4 prompts ko alag-alag windows mein run karein. Dono ke responses ko print/view karke dekhein ki quality mein kitna bada farq aata hai.
2. **Activity 2 (Follow-up Chain):** AI se ek email likhwayein. Phir 3 successive follow-ups karein:
   - "Ise thoda friendly banao."
   - "Isko 3 bullet points mein convert karo."
   - "Isme ek apology discount coupon mention karo."
3. **Activity 3 (Constraint Stress Test):** AI ko prompt dein: *"Excel kya hai 20 shabdon ke andar samjhaiye."* Dekhein kya AI 20 words ki strict boundary follow karta hai ya nahi.
4. **Activity 4 (Universal Template Trial):** Hamare Topic 5 ke Universal Formula Template ko fill karke apne office ke kisi real pending email ya task ke liye prompt banayein.

---

### C. Improve This Prompt (Exercise & Solutions)

#### Weak Prompt 1:
`Excel formula to find duplicate.`
- **Problem:** Data kahan hai? Duplicate ko delete karna hai, highlight karna hai ya count karna hai?
- **Model Answer:**
```text
Excel mein Column B mein Customer Phone Numbers hain (B2:B500). Aise sabhi rows ko identify 
karne ke liye COUNTIF formula batao jisse Column C mein likha aaye "Duplicate" agar number 
ek se zyada baar aaya ho, aur "Unique" agar pehli baar aaya ho.
```

#### Weak Prompt 2:
`Write apology email.`
- **Problem:** Kisko sorry bolna hai? Kis galti ke liye? Remedial action kya hai?
- **Model Answer:**
```text
Aap ek Customer Support Lead hain. Ek customer ko galat product (Wrong size shoes) deliver 
ho gaya hai. Ek empathetic aur professional apology email draft karein jisme free exchange 
pickup schedule aur 24 hours ke andar replacement dispatch ka wada ho.
```

#### Weak Prompt 3:
`Explain pivot table.`
- **Problem:** Target audience kaun hai? Kitna basic ya advanced level chahiye?
- **Model Answer:**
```text
Aap ek corporate Excel trainer hain. Ek non-technical commerce student ko Pivot Table ka 
concept aasan Hinglish aur daily Kirana store sales ke example ke sath samjhaiye. 
Row, Column, Value aur Filter ka concept 4 simple lines mein clear karein.
```

---

### D. Quick Quiz (With Answers & Explanations)

#### Multiple Choice Questions (MCQs):
1. **Prompt Engineering mein "Role" assign karne ka kya fayda hota hai?**
   - A) AI ka internet connection fast ho jata hai
   - B) AI usi profession ki specific vocabulary aur domain expertise activate kar leta hai
   - C) AI screen par video dikhane lagta hai
   - D) AI computer restart kar deta hai
   *(Correct Answer: **B** | Explanation: Persona/Role dene se AI generic ki jagah domain-expert tone mein respond karta hai).*

2. **GIGO principle ka full form kya hai?**
   - A) Good In, Good Out
   - B) Garbage In, Garbage Out
   - C) General Input, General Output
   - D) Global Internet Gateway Operator
   *(Correct Answer: **B** | Explanation: Computer science mein kachra input doge toh kachra output milega).*

3. **Prompt mein "Constraints" specify karne ka kya maqsad hai?**
   - A) AI ko confuse karna
   - B) AI par boundaries lagana (jaise word limit, kya shamil NAHI karna)
   - C) AI ki speed slow karna
   - D) Prompt ko lamba dikhana
   *(Correct Answer: **B** | Explanation: Constraints unwanted content aur excessive length ko filter karte hain).*

4. **Jab pehli baar mein perfect answer na mile, toh sabse best approach kya hai?**
   - A) Computer band karke so jana
   - B) Usi chat mein Follow-up prompt dekar output ko refine ya correct karwana
   - C) AI company ko complaint email likhna
   - D) Screen par tap karna
   *(Correct Answer: **B** | Explanation: Iterative follow-ups AI ki conversational memory ka best use hain).*

5. **R-T-C-I-O-C Framework mein "O" ka kya meaning hai?**
   - A) Operator
   - B) Output Format
   - C) Overload
   - D) Objective
   *(Correct Answer: **B** | Explanation: Output Format define karta hai ki result Table, Email ya Bullets mein chahiye).*

6. **Prompt Improvement Ladder mein "Level 4" prompt ki kya pehchan hai?**
   - A) Woh sirf ek word ka hota hai
   - B) Usme Role, Context, Instructions, Format aur Constraints clearly defined hote hain
   - C) Woh shuddh Sanskrit mein likha hota hai
   - D) Usme koi detail nahi hoti
   *(Correct Answer: **B** | Explanation: Level 4 prompt fully engineered aur classroom-ready hota hai).*

7. **Agar aap chahte hain ki AI technical jargon na use kare, toh yeh prompt ke kis element mein aayega?**
   - A) Role
   - B) Constraints / Instructions
   - C) Output Format
   - D) Token
   *(Correct Answer: **B** | Explanation: Negative guidelines constraints ya instructions ka hissa hoti hain).*

8. **Kya follow-up prompt mein AI ko purani chat ka reference yaad rehta hai?**
   - A) Nahi, har message ke baad AI sab bhool jata hai
   - B) Haan, active chat session ke context window mein purani baatein yaad rehti hain
   - C) Sirf paid version mein yaad rehta hai
   - D) Sirf midnight ko yaad rehta hai
   *(Correct Answer: **B** | Explanation: AI chat sessions context window maintain karte hain).*

---

#### Short-Answer Questions:
1. **Universal Prompt Template ke 6 elements kaunse hain?**
   - *Answer:* Role, Task, Context, Instructions, Output Format, aur Constraints (R-T-C-I-O-C).
2. **"Poor Prompt" aur "Good Prompt" mein sabse bada antar kya hota hai?**
   - *Answer:* Poor prompt vague, short aur bina context ka hota hai jisse AI ko guess karna padta hai. Good prompt specific, structured aur background details ke sath hota hai jisse directly usable result milta hai.
3. **Follow-up prompts corporate workflow mein time kaise bachate hain?**
   - *Answer:* Har bar poora naya prompt likhne ke bajaye user sirf specific line ("point 2 shorten karo") edit karwata hai, jisse rapid refinement possible hota hai.

---

### E. Mini Assignment — Section 3
**Task:**
1. Apne regular office ya study life ka koi ek tough task choose karein (e.g., tough leave application, complicated Excel nested IF formula, ya vendor discount negotiation email).
2. Is task ke liye ek **Prompt Improvement Ladder** banayein:
   - Level 1 (Weak Prompt)
   - Level 2 (Average Prompt)
   - Level 3 (Good Prompt)
   - Level 4 (Master Engineered Prompt with all 6 elements)
3. Level 4 prompt ko AI mein run karein aur result ko review karein.
*Evaluation Points:* Sahi identification of weakness in Level 1, proper application of all 6 elements in Level 4, and evaluation of output quality.
