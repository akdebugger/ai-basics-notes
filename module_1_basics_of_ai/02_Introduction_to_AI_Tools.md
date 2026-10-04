# MODULE 1 — SECTION 2: Introduction to AI Tools (AI Tools Ka Parichay Aur Chunav)

> ⚠️ **Important Note:** AI tools ke features, free limits aur interface time ke saath update hote rehte hain. Isliye exact latest features aur plans ke liye unki official websites par check karein. Yahan hum in tools ke core strengths aur practical workplace use cases ko samajhenge.

---

## 📌 Topic 1: ChatGPT (OpenAI)

### 1. Concept (Simple Explanation)
**ChatGPT kya hai?**
ChatGPT OpenAI company ka banaya hua ek conversational AI chatbot hai. Yeh wahi tool hai jisne 2022 ke end mein aakar poori duniya mein Generative AI ki lehar shuru ki thi. ChatGPT natural conversational style mein text generate karne, brainstorming karne, programming code likhne, aur complex ideas ko aasan shabdon mein samjhane ke liye poori duniya mein sabse zyada famous hai.

**Kyun zaroori hai?**
Ek beginner ke liye ChatGPT sabse friendly aur versatile starting point hai. Chahe aapko ek tough customer complaint ka diplomatic email draft karna ho, Excel ke kisi error (`#N/A`, `#VALUE!`) ko debug karna ho, ya apne boss ke liye meeting points plan karne hon — ChatGPT har role mein fit baithta hai. Yeh ek all-rounder digital executive ki tarah behave karta hai.

**Kaise kaam karta hai?**
ChatGPT Large Language Model (GPT series) par run karta hai. Yeh aapke likhe hue prompt ka context samajhta hai aur conversational flow maintain rakhta hai. Iska matlab aap isse human ki tarah baat kar sakte hain — pehle ek draft banwayein, phir kahein "ise thoda chhota karo", phir kahein "ab isme bullet points daalo". ChatGPT purani baaton ko dhyan mein rakh kar output update karta rehta hai.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** ChatGPT ko apne office ka woh **"Smart All-Rounder Senior Colleague"** samjhiye jo har department (HR, Marketing, Admin, Content) ka basic kaam janta hai. Jab bhi aap kisi task mein atak jaate hain, aap unke desk par jaate hain aur woh muskura kar aapko rasta dikha dete hain!

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **The Pioneer Tool:** Generative AI market ka sabse pehla aur sabse popular tool.
- **Master of Conversation:** Natural human-like chat aur iterative revision mein best.
- **Great for Coding & Formulas:** Excel formulas, Python, SQL aur VBA macros bohot clean generate karta hai.
- **Custom Instructions:** Aap isse pehle hi bata sakte hain ki aapka role kya hai taaki har bar context na dena pade.
- **Huge Community & Plugins:** Sabse zyada tutorials aur support internet par ChatGPT ke available hain.

---

### 4. Practical Example
**Scenario:** Ek office clerk ko Excel mein do columns compare karne hain: Column A mein Master Employee IDs hain aur Column B mein Today's Attendance IDs hain. Jo employee aaj absent hain unhe highlight karna hai.

**Prompt:**
```text
Main Excel mein attendance reconcile kar raha hoon. Column A mein sabhi registered 
employees ki Employee ID hai (A2:A100). Column B mein aaj office aane wale employees 
ki ID hai (B2:B85). Kripya ek aisi formula batao jisse Column C mein likha aaye 
"Absent" agar employee ki ID Column B mein na mile, aur "Present" agar mil jaye.
```

**AI Response (Sample):**
```text
Aap Column C2 mein yeh `IF` aur `COUNTIF` formula use kar sakte hain:
`=IF(COUNTIF($B$2:$B$85, A2)>0, "Present", "Absent")`

Explanation:
- `COUNTIF($B$2:$B$85, A2)` check karega ki A2 ki ID Column B mein kitni baar aayi hai.
- Agar count 0 se zyada hai, toh Excel "Present" show karega, warna "Absent".
- Is formula ko C2 se C100 tak drag kar dein!
```

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **Company ka confidential data paste karna:** Kabhi bhi company ke actual client passwords, PAN cards ya confidential sales reports ChatGPT ke public model mein paste na karein.
- **Ek hi chat mein saare alag topics mix karna:** Agar aap Excel formula pooch rahe hain, toh nayi chat kholiye jab aapko personal leave email likhwana ho; varna context confuse ho jata hai.

---

### 6. Quick Recap
ChatGPT ek versatile, all-rounder AI tool hai jo natural communication, Excel formulas, email drafting aur brainstorming ke liye standard maana jata hai.

---

## 📌 Topic 2: Google Gemini (Google)

### 1. Concept (Simple Explanation)
**Google Gemini kya hai?**
Google Gemini (jo pehle Bard ke naam se jana jata tha) Google company ka state-of-the-art AI tool hai. Kyunki yeh Google ka product hai, iska sabse bada power hai Google ke vast search ecosystem, Google Docs, Sheets, Gmail aur YouTube ke saath deep integration.

**Kyun zaroori hai?**
Agar aapka office ya personal work Google Workspace (Gmail, Google Drive, Google Sheets, Google Docs) par chalta hai, toh Gemini aapke liye ek natural choice hai. Yeh live web information access karne mein bohot fast hai aur Google Search ke live data se real-time facts verify karne ka direct option ("Double Check with Google") deta hai.

**Kaise kaam karta hai?**
Gemini ko shuru se hi "Multimodal" design kiya gaya hai. Multimodal ka matlab hai ki yeh ek hi time par text, images, audio, video aur code sabko seamlessly samajh sakta hai. Agar aap kisi invoice ya attendance chart ki photo click karke Gemini ko upload karein, toh yeh image ke andar se table extract karke data organize kar sakta hai.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** Gemini ko apne office ka woh **"Google-Connected Researcher"** samjhiye jiske desk ke paas Google ki saari books, live news alerts, aur office ki Gmail inbox ka direct connection hai. Koi bhi taaza khabar ya live fact check karna ho, toh yeh direct Google database check karke bata deta hai!

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **Built by Google:** Google ke world-class infrastructure aur real-time data par grounded.
- **Multimodal by Nature:** Text ke saath photos, handwritten notes aur charts ko efficiently read karta hai.
- **Google Ecosystem Tie-in:** Gmail aur Google Docs ke drafts direct export karne ka button deta hai.
- **Fact-Check Button:** Google search se response ko cross-verify karne ki unique feature.
- **Speed & Fresh Information:** Latest current affairs aur recent corporate events par fast updates.

---

### 4. Practical Example
**Scenario:** Ek marketing trainee ko 2026 ke trending corporate gift ideas research karne hain aur report seedhe Google Docs mein draft karni hai.

**Prompt:**
```text
Humari company ke annual employee recognition day ke liye 5 innovative, eco-friendly 
corporate gift hampers ke ideas propose karein (budget: ₹1,500 per employee). 
Har gift ka concept, estimated price aur kyun pasand aayega explain karein. Table format mein dein.
```

**AI Response (Sample):**
*(Gemini clean table generate karta hai aur niche "Export to Docs" aur "Export to Sheets" ka button deta hai, jisse 1-click mein data aapki spreadsheet mein chala jata hai).*

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **Sochna ki Gemini aur Google Search bilkul ek hain:** Gemini AI summary deta hai, jabki search links deta hai; dono ka use case alag hai.
- **Google Sheets integration par bina formula check kiye trust karna:** Auto-generated formulas ko Sheets mein verify zaroor karein.

---

### 6. Quick Recap
Google Gemini Google ecosystem aur multimodal tasks (images + text) ke liye best hai aur real-time information access karne mein mahir hai.

---

## 📌 Topic 3: Microsoft Copilot (Microsoft)

### 1. Concept (Simple Explanation)
**Microsoft Copilot kya hai?**
Microsoft Copilot (jo pehle Bing Chat ke naam se jana jata tha) Microsoft ka AI companion hai jo OpenAI ke powerful models par built hai, lekin iska main focus enterprise productivity aur Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams) ke saath integration par hai.

**Kyun zaroori hai?**
Hamare course ka naam hi hai "AI-Enabled MS Office & Advanced Excel", isliye Microsoft Copilot is course ka sabse central tool hai! Copilot direct Excel ribbon, Word toolbar aur PowerPoint window ke andar baithta hai. Aap Excel sheet khol kar bol sakte hain: "Is sheet ka Pivot Table banao", aur Copilot bina formula type kiye direct Pivot bana deta hai!

**Kaise kaam karta hai?**
Copilot aapke MS Office document ke data ko padhta hai, aapke natural language prompt ko samajhta hai, aur Office ke internal features ko command dekar run karwata hai. Web version mein yeh internet search (Bing) se live citations ke saath authentic corporate information deta hai.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** Copilot ko apne computer ka **"Personal Typist & Excel Expert"** samjhiye jo aapke bagal mein baitha hai. Jab aap bolte hain: "Sharma ji, zara is sheet par sales ka bar chart laga do", toh Sharma ji turant mouse hilaye bina chart create karke screen par ready kar dete hain!

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **Deep MS Office Integration:** Excel, Word, PowerPoint, Outlook ke andar natively integrated.
- **Enterprise Grade Security:** Corporate accounts mein company ka data model training ke liye use nahi hota.
- **Bing Web Grounding:** Har search answer ke saath source links aur citations deta hai.
- **Formula & Pivot Automation:** Plain English bol kar Excel mein formatting, conditional rules aur charts apply karwana.
- **PowerPoint Presentation Generator:** Sirf topic ya Word document dekar multi-slide presentation draft karwana.

---

### 4. Practical Example
**Scenario:** Sales executive ne 500 rows ka sales data open kiya hua hai. Use dekhna hai ki North Region mein Q3 mein kis product category ne sabse zyada revenue diya.

**Prompt (Inside Copilot in Excel):**
```text
Neeche diye gaye sales table ko analyze karein. Region 'North' ke liye 
Total Revenue by Category ka ek Pivot Table create karein aur ek clustered column chart insert karein.
```

**AI Response (Sample):**
```text
Copilot table analyze karega aur confirmation dega:
"Maine North Region ke liye Category-wise Total Revenue ka Pivot Table naye tab par 
create kar diya hai aur ek visual Clustered Column Chart add kar diya hai."
```

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **Unformatted data par Copilot chalana:** Excel mein Copilot sabse acha tab kaam karta hai jab data **Official Excel Table (`Ctrl + T`)** ke format mein ho. Plain ranges par yeh kabhi-kabhi error deta hai.
- **Headers missing hona:** Agar table mein column headers (Name, Date, Amount) saaf nahi hain, toh Copilot confuse ho jayega.

---

### 6. Quick Recap
Microsoft Copilot MS Office (Excel, Word, PPT) users ke liye ultimate companion hai jo natural language commands se spreadsheets aur documents manipulate karta hai.

---

## 📌 Topic 4: Claude (Anthropic)

### 1. Concept (Simple Explanation)
**Claude kya hai?**
Claude Anthropic company ka banaya hua advanced AI model hai. Anthropic company ko AI Safety aur "Constitutional AI" ke principles par banaya gaya hai. Claude duniya bhar ke writers, researchers, aur professionals ke beech apni natural, subtle, polite writing style aur bohot lambe documents (Long Context) ko padhne ki shamta ke liye jaana jata hai.

**Kyun zaroori hai?**
Kayi baar corporate office mein aapko 200 pages ka tender document, company annual report, legal agreement ya employee handbook milti hai, jise padhne mein 3 din lag sakte hain. Claude ka context window itna bada hota hai ki aap poori PDF ek sath upload karke bol sakte hain: "Is document mein company ki liability clauses kahan hain, page number ke saath list banao."

**Kaise kaam karta hai?**
Claude safety aur nuance par dhyan deta hai. Yeh robot jaisi dry language nahi likhta, balki aisa text likhta hai jo lagta hai kisi experienced professional ne bohot soch-samajh kar likha ho. Iske paas "Artifacts" feature bhi hota hai jisme code, documents aur interactive tables ek separate side-window mein clean format mein dikhai dete hain.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** Claude ko apne office ka woh **"Senior Legal Advisor ya Ph.D. Consultant"** samjhiye jo bohot shaant, samajhdar aur bhasha par zabardast pakad rakhne wala insaan hai. Moti se moti file unke samne rakh do, woh shaam tak bina kisi jaldbaazi ke exact points highlight karke de denge!

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **Massive Document Handling:** 100+ pages ki PDFs, books aur lambe reports ko ek bar mein analyze karna.
- **Superior Natural Writing:** Robotic tone ki jagah sophisticated, human-like corporate communication.
- **AI Safety & Ethics:** Harmful ya misleading answers avoid karne mein bohot strict.
- **Artifacts Window:** Code, reports aur data tables ko separate clean viewer pane mein manage karna.
- **Low Hallucination in Text:** Complex reading comprehension tasks mein factual accuracy high rehti hai.

---

### 4. Practical Example
**Scenario:** Ek HR manager ko 45 pages ki updated Government Labour Code compliance document di gayi hai aur use apne management ke liye 2-page executive summary chahiye.

**Prompt:**
```text
Maine 45 pages ka Labour Code PDF attach kiya hai. 
Kripya humari IT Services company (200 employees) ke perspective se:
1. Top 5 compliance changes jo humare HR payroll ko impact karengi.
2. Gratuity aur Overtime calculation mein naye rules kya hain?
3. Action items list with priority (High/Medium/Low).
Bullet points mein clean executive summary banayein.
```

**AI Response (Sample):**
*(Claude document ke andar se exact sections quote karke point-by-point clean executive summary aur structured action matrix provide karta hai).*

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **Real-time daily stock prices poochhna:** Claude ka primary focus deep reasoning aur document analysis par hai; live web scraping ke liye Perplexity ya Copilot zyada suited hote hain.
- **Short prompts dena:** Claude detailed context ke saath behtareen response deta hai, isliye ise background zaroor batayein.

---

### 6. Quick Recap
Claude lambi PDFs, annual reports aur tenders ke deep analysis aur high-quality professional writing ke liye industry ka gold-standard tool hai.

---

## 📌 Topic 5: Perplexity (Perplexity AI)

### 1. Concept (Simple Explanation)
**Perplexity kya hai?**
Perplexity AI ek aisi technology hai jise "AI Answer Engine" kaha jata hai. Normal Google search aapko 10 blue links deta hai jin par aapko khud click karke padhna padta hai. Normal ChatGPT jawab deta hai par source nahi batata. **Perplexity dono ka best combination hai** — yeh internet search karta hai, information summarize karta hai, aur har sentence ke upar footnote number lagakar authentic website ka clickable link (Citation) deta hai!

**Kyun zaroori hai?**
Office aur research work mein aap koi bhi aisi figure boss ko nahi de sakte jiska source aapko pata na ho (jaise: "India ka current GST collection kitna hai?"). Agar aap ChatGPT se poochenge toh woh purana number de sakta hai. Perplexity se poochenge toh woh official PIB ya Ministry of Finance ki website cite karke exact latest number dega.

**Kaise kaam karta hai?**
Perplexity real-time web crawlers aur LLMs ka fusion use karta hai. Jab aap prompt puchte hain, yeh live internet par 10-15 best web pages scan karta hai, reliable sources filter karta hai, aur unhi verified sources se synthesize karke aapko footnotes ke saath comprehensive answer deta hai.

---

### 2. Real-Life Analogy
> 💡 **Indian Analogy:** Perplexity ko ek **"Investigative Journalist"** samjhiye jo har khabar ke peeche pakka proof aur dastavez (documents) lekar aata hai. Woh koi bhi baat hawa mein nahi bolta; bolta hai: "Yeh dekhiye government notification ka Gazette page number 12, aur yeh raha uska direct link!"

---

### 3. Key Points (Yaad Rakhne Wali Baatein)
- **Citations & Footnotes:** Har claim ke saath clickable source link milta hai.
- **Zero Hallucination Focus:** Real-time web browsing ke karan facts fabricate karne ke chances sabse kam.
- **Focus Modes:** Aap search ko filter kar sakte hain (e.g. sirf Academic papers, YouTube, ya Reddit).
- **Pro Search / Deep Research:** Ek query ko multiple logical steps mein tod kar internet scour karna.
- **Instant Fact Checking:** Any news, government circular, market rate instant verify karna.

---

### 4. Practical Example
**Scenario:** Ek accounts manager ko latest financial year ke liye MSME 45-day payment rule (Section 43B(h)) ke latest government clarifications ki summary chahiye source ke saath.

**Prompt:**
```text
Income Tax Act ke Section 43B(h) ke tehat MSME payments ke 45-day rule par latest 
government guidelines aur clarifications kya hain? Har point ke sath official source ya circular cite karein.
```

**AI Response (Sample):**
```text
Section 43B(h) ke anusar buyers ko MSME registered enterprises ko payment specified timeline 
(agreement ke sath max 45 din, bina agreement 15 din) mein karni hogi [1]. 
Agar payment delay hui, toh woh expense us financial year mein deduct nahi hoga [2].

Sources Cited:
[1] Income Tax Department Official Notification (incometax.gov.in)
[2] Ministry of Micro, Small and Medium Enterprises circular (msme.gov.in)
```

---

### 5. Common Mistakes / Dhyan Dene Wali Baatein
- **Creative storytelling ke liye use karna:** Yeh factual search ke liye hai, creative poem ya emotional letter ke liye ChatGPT/Claude behtar hain.
- **Citations bina check kiye trust karna:** Link par 1 second click karke zaroor dekhein ki link live hai aur wahi keh raha hai jo Perplexity ne likha hai.

---

### 6. Quick Recap
Perplexity internet search aur AI ka powerful sangam hai jo har jawab ke saath authentic web sources aur clickable citations deta hai.

---

## 📌 Topic 6: AI Tools Ka Basic Comparison

Ab chaliye in paanchon powerhouse tools ko ek comprehensive table mein aamne-saamne compare karte hain:

| Tool Ka Naam | Best For (Sabse Achha Kis Kaam Ke Liye) | Main Strengths (Khaas Khubiyan) | Limitations (Dhyan Rakhne Wali Baatein) | Example Use in Office Work |
| :--- | :--- | :--- | :--- | :--- |
| **ChatGPT** (OpenAI) | All-round daily tasks, Excel formulas, brainstorming, conversational drafting. | Bohot friendly UI, code/formula generation, versatile tone control, custom instructions. | Free version par kabhi-kabhi web search slow ho sakti hai; hallucination risk rehta hai. | Complex nested Excel formula create karna, angry customer email draft karna. |
| **Google Gemini** (Google) | Multimodal tasks (images + text), Google Workspace integration, current events. | Google Docs/Sheets export buttons, images se data reading, fast response time. | Creative writing thodi formal ya factual lag sakti hai; formula explanations kabhi-kabhi brief hoti hain. | Invoice ki photo dekh kar table banana, Google Sheets ke formulas nikalna. |
| **Microsoft Copilot** (Microsoft) | Native MS Office 365 work (Excel, Word, PowerPoint, Teams, Outlook). | Direct Excel ribbons mein chalna, PowerPoint slides generate karna, enterprise data security. | Complex multi-step reasoning web version mein kabhi-kabhi inconsistent ho sakti hai; table format strict chahiye. | Excel sheet par direct Pivot Table banana, meeting recording se automatic MOM banana. |
| **Claude** (Anthropic) | Long documents (100+ pages), legal compliance, detailed reports, sophisticated writing. | Badi PDFs analyze karna, natural nuanced human writing tone, safe and accurate. | Live web search features doosron ke comparison mein limited hain; image generation nahi karta. | 80 pages ka vendor agreement scan karke penalty clauses dhundhna. |
| **Perplexity** (Perplexity AI) | Fact-based research, market intelligence, latest government circulars with sources. | Har line ke sath clickable citations/sources, live web browsing, zero fake links. | Pure creative writing ya casual brainstorming ke liye ideal nahi hai. | Current GST rules, competitors ke pricing plans, market research reports banana. |

---

## 📌 Topic 7: Different Tasks Ke Liye AI Tool Selection ("Kaunsa Tool Kab Use Karein?")

Corporate office mein smart professional wahi hai jo har kaam ke liye sahi hathiyar (tool) select karta hai. Neeche diye gaye decision table ko reference banayein:

### 🧭 "Kaunsa Tool Kab Use Karein?" Decision Table

```
Aapka Task Kya Hai?                          Recommended Tool      Kyun?
──────────────────────────────────────────────────────────────────────────────────────────
1. Excel Sheet mein direct Pivot/Chart        ➜ Microsoft Copilot   Kyunki yeh Excel ribbon ke andar natively chalta hai.
2. Excel Formula ya VBA Macro debug karna    ➜ ChatGPT             Kyunki formula logic aur step-by-step reasoning mein best hai.
3. 50-100 pages ki Tender/Policy PDF padhna  ➜ Claude              Kyunki iska large context window bina data loss sab summarize karta hai.
4. Latest GST Circular / Govt Law check karna ➜ Perplexity          Kyunki har fact ke sath verified official source link deta hai.
5. Invoice/Receipt ki photo se data nikalna   ➜ Google Gemini       Kyunki iski image recognition aur multimodal reading top-notch hai.
6. Professional, Diplomatic Corporate Letter ➜ Claude ya ChatGPT   Kyunki yeh human nuance aur tone adjustment perfectly karte hain.
7. Google Docs/Sheets par fast work           ➜ Google Gemini       Kyunki 1-click "Export to Docs/Sheets" feature available hai.
8. PowerPoint Presentation ki slide outline   ➜ Copilot ya ChatGPT  Kyunki topic se complete slide-by-slide structure bana deta hai.
```

---

## 🧪 PRACTICE SET — SECTION 2

### A. Example Prompts (Copy-Paste Ready)

#### Prompt 1 (For ChatGPT - Excel Formula):
```text
Main Excel mein monthly sales track kar raha hoon. Column A mein Date hai, Column B mein Sales Amount. 
Mujhe aisa formula chahiye jo sirf current month (October 2026) ki total sales ka sum nikaale. 
SUMIFS use karke formula aur cell references samjhaiye.
```
- **Expected Output:** `=SUMIFS(...)` formula with dynamic `EOMONTH` or date boundaries explained.
- **Skill Practiced:** Spreadsheet logic design.

#### Prompt 2 (For Perplexity - Factual Research with Sources):
```text
Bharat mein naye financial year ke liye e-invoicing kis turnover limit ke upar ke businesses 
ke liye mandatory hai? Kripya notification circular number aur official portal link cite karein.
```
- **Expected Output:** Exact turnover threshold, effective dates, and verified source citations.
- **Skill Practiced:** Regulatory research with evidence verification.

#### Prompt 3 (For Claude - Long Document Review):
```text
Neeche humari company ki 5-page Vendor NDA (Non-Disclosure Agreement) ka text paste hai. 
Isme se Non-compete period, Jurisdiction court aur Indemnity limitation clauses extract karein 
aur batayein ki kya koi clause vendor ke favor mein excessively biased hai?
```
- **Expected Output:** Clean legal clause extraction and balanced risk analysis.
- **Skill Practiced:** Contractual document comprehension.

#### Prompt 4 (For Google Gemini - Multimodal / Table Extraction):
```text
Maine ek supplier invoice ki image upload ki hai. Is image mein se Invoice Number, Date, 
Vendor GSTIN, Item Descriptions, Taxable Amount, CGST, SGST aur Total Amount ko ek neat 
table mein convert karein jise main Excel mein copy kar sakoon.
```
- **Expected Output:** Tabular plain text data ready to copy into spreadsheet columns.
- **Skill Practiced:** OCR image-to-table conversion.

#### Prompt 5 (For Microsoft Copilot - Excel Manipulation):
```text
Table1 mein mere paas Employee Name, Department aur Annual Salary hai. Ek prompt generate karein 
jisse Copilot Excel mein HR Department ke average salary ka bar chart insert kar sake.
```
- **Expected Output:** Exact command phrase to feed Copilot inside MS Excel.
- **Skill Practiced:** In-app Office AI prompting.

#### Prompt 6 (For ChatGPT - Professional Email Drafting):
```text
Aap ek operations manager hain. Ek vendor ne 3 baar defective raw materials deliver kiye hain. 
Unke Director ke liye ek strict par legally polite warning email draft karein jisme contract 
termination aur payment hold ki warning ho agar agla batch standard pass na kare.
```
- **Expected Output:** Firm, formal, legally defensive corporate communication.
- **Skill Practiced:** High-stakes business diplomacy.

#### Prompt 7 (For Perplexity - Market Comparison):
```text
India mein top 3 cloud payroll softwares (jaise Keka, greytHR, ZingHR) ka feature comparison karein: 
Pricing model, Mobile app rating, aur Indian statutory compliance (PF/ESIC/PT) features. 
Authentic review sources cite karein.
```
- **Expected Output:** Structured comparative matrix backed by user review citations.
- **Skill Practiced:** Vendor and software benchmarking.

#### Prompt 8 (For Claude - Tone Transformation):
```text
Neeche ek employee ka rough resignation email hai. Ise ek gracious, warm aur thankful tone mein 
rewrite karein taaki purane company ke saath future networking relationships acche bane rahein:
"Hi manager, I am leaving the company next month because of better salary. Relieve me soon."
```
- **Expected Output:** Heartfelt, graceful resignation letter maintaining bridge and professionalism.
- **Skill Practiced:** Emotional intelligence and career communication.

---

### B. Hands-on Activities (Practical Lab)
1. **Activity 1 (Head-to-Head Comparison):** Ek hi simple prompt dono jagah type karein (ChatGPT aur Google Gemini): *"Excel mein VLOOKUP aur INDEX-MATCH ka difference ek 3-column table mein samjhao."* Note karein ki kisne jaldi diya aur kiska explanation zyada clear laga.
2. **Activity 2 (Perplexity Citation Test):** Perplexity par search karein: *"RBI ka latest repo rate kitna hai?"* Diye gaye footnote number par click karein aur dekhein ki kya woh sach mein RBI ya reliable news site par khulta hai.
3. **Activity 3 (Office Copilot Simulation):** Agar aapke paas Microsoft 365 Copilot hai, toh ek sample table banakar command dein: *"Add a column showing 10% bonus on Salary"*. Agar Copilot nahi hai, toh ChatGPT se poochein: *"Agar mujhe Excel mein 10% bonus add karna ho toh main Copilot ko kya prompt doon?"*
4. **Activity 4 (Claude Document Test):** Koi bhi 10-15 pages ki public policy PDF download karein aur Claude par upload karke summary maangein. Response ki readability check karein.

---

### C. Improve This Prompt (Exercise & Solutions)

#### Weak Prompt 1:
`Tender summary banao.`
- **Problem:** Kaunsa tender? Kis aspect par focus karna hai? Length kitni honi chahiye?
- **Model Answer:**
```text
Aap ek senior procurement analyst hain. Maine attach kiye gaye 30-page government road construction 
tender document ka review kiya hai. Kripya iska 1-page executive summary taiyar karein jisme: 
(1) Eligibility criteria & minimum turnover, (2) EMD aur security deposit amount, (3) Key submission deadlines, 
aur (4) Disqualification risk points shamil hon.
```

#### Weak Prompt 2:
`Perplexity par GST search karo.`
- **Problem:** GST ek vishal topic hai; query specific honi chahiye.
- **Model Answer:**
```text
Corporate cafeteria aur employee food coupons par 2026 mein GST applicability ke kya rules hain? 
Authority for Advance Rulings (AAR) ke recent decisions aur circular numbers cite karke samjhaiye.
```

#### Weak Prompt 3:
`Copilot se PPT banwao.`
- **Problem:** Topic, slides count, target audience kuch bhi mention nahi hai.
- **Model Answer:**
```text
New employees ke 1-hour orientation program ke liye ek 6-slide PowerPoint presentation ka structure 
design karein. Slides cover karengi: Welcome & Mission, Core Values, Office timings & Leave policy, 
IT & Cyber safety, Key Stakeholders, aur Q&A session. Har slide ke bullet points aur speaker notes suggest karein.
```

---

### D. Quick Quiz (With Answers & Explanations)

#### Multiple Choice Questions (MCQs):
1. **Agar aapko 100 pages ka lamba contract padh kar summarize karwana hai, toh sabse recommended tool kaunsa hai?**
   - A) Paint
   - B) Claude
   - C) Calculator
   - D) Notepad
   *(Correct Answer: **B** | Explanation: Claude ka large context window lambe documents ko bina memory drop summarize karne ke liye famous hai).*

2. **Perplexity AI ka sabse bada unique feature kya hai?**
   - A) Yeh gaana gata hai
   - B) Har claim aur sentence ke sath verified source links (citations) deta hai
   - C) Yeh computer band kar deta hai
   - D) Yeh sirf offline chalta hai
   *(Correct Answer: **B** | Explanation: Perplexity ek AI answer engine hai jo web sources cite karta hai).*

3. **Microsoft 365 Copilot ka primary workplace benefit kya hai?**
   - A) Yeh Excel, Word, PPT ke andar natively integrate hota hai
   - B) Yeh video games khelta hai
   - C) Yeh hardware fix karta hai
   - D) Yeh printer ka paper change karta hai
   *(Correct Answer: **A** | Explanation: Copilot Microsoft Office suite ke andar directly operate karta hai).*

4. **Kiski shuruat se duniya bhar mein Generative AI popular hua tha (November 2022)?**
   - A) ChatGPT (OpenAI)
   - B) Windows XP
   - C) Google Search
   - D) Yahoo Messenger
   *(Correct Answer: **A** | Explanation: ChatGPT ne modern GenAI wave shuru ki thi).*

5. **Google Gemini ka multimodal nature ka kya matlab hai?**
   - A) Yeh sirf ek bhasha bol sakta hai
   - B) Yeh text, images, audio aur code ko ek sath samajh aur process kar sakta hai
   - C) Yeh screen band kar deta hai
   - D) Yeh sirf mobile par chalta hai
   *(Correct Answer: **B** | Explanation: Multimodal models multiple media types (text, photos, audio) handle karte hain).*

6. **Excel mein Copilot ko run karte waqt data kis format mein hona best practice maana jata hai?**
   - A) Plain text notepad
   - B) Official Excel Table (`Ctrl + T`) format with clean headers
   - C) Blank sheet
   - D) PDF scan copy
   *(Correct Answer: **B** | Explanation: Excel Tables (`Ctrl + T`) structure data dete hain jisse Copilot efficiently kaam karta hai).*

7. **Agar aapko kisi AI tool ke exact current price aur plan limits jaanne hon toh kya rule follow karna chahiye?**
   - A) Purane 2023 ke video tutorials par vishwas karein
   - B) Tool ki official website par jakar latest pricing page check karein
   - C) Guess karein
   - D) AI se poochein aur bina verify kiye accept karein
   *(Correct Answer: **B** | Explanation: AI features aur pricing frequently change hoti hain, isliye official portal check karna zaroori hai).*

8. **Kya ChatGPT ke public free version mein company ke bank account passwords daalna safe hai?**
   - A) Haan, bilkul safe hai
   - B) Bilkul nahi, confidential personal aur financial data public AI par share karna mana hai
   - C) Agar password strong ho toh safe hai
   - D) Sirf Sunday ko safe hai
   *(Correct Answer: **B** | Explanation: Data privacy guidelines ke anusar confidential data public AI par enter nahi karna chahiye).*

---

#### Short-Answer Questions:
1. **Google Gemini aur Google Search mein kya difference hai?**
   - *Answer:* Google Search user ko relevant web links ki list deta hai jahan jaakar user ko khud padhna padta hai. Google Gemini multiple sources se information ko synthesize karke seedha ek structured human-like answer aur creative content generate karta hai.
2. **Microsoft Copilot Excel users ke liye game-changer kyun hai?**
   - *Answer:* Kyunki Excel users ko complex nested formulas ya VBA code memorize karne ki zaroorat nahi rehti; plain English mein bol kar Pivot Tables, data filtering, charts aur column calculations automate ki ja sakti hain.
3. **Citations (Footnotes) ka corporate research mein kya importance hai?**
   - *Answer:* Citations ensure karte hain ki information authentic aur verifiable hai. Corporate management bina source proof ke kisi bhi data ko business decisions ke liye accept nahi karti.

---

### E. Mini Assignment — Section 2
**Task:**
1. Ek hi same research question choose karein: *"India mein small businesses ke liye GST composition scheme ke rules kya hain?"*
2. Is question ko **ChatGPT** aur **Perplexity AI** dono par run karein.
3. Ek comparative note banayein:
   - ChatGPT ne kaisa explanation diya?
   - Perplexity ne kaunse source links cite kiye?
   - Dono mein se kaunsa answer aap apne accounts manager ko direct dikha sakte hain aur kyun?
*Evaluation Points:* Tool selection reasoning, comparison of source citations vs general text, and professional judgment.
