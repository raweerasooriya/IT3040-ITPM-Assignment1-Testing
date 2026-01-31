const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Conversion of Long Social and Office Inquiry',
      input: 'oya mokakdha hithanne api heta yanna inna trip ekh gaena, ehe yanna akamaethi aeyi, oyage gedarin kivvaa oya yanna akamaethiyi kiyala, mata dhaena ganna puluvandha aeyi oyaa yanna akamaethi kiyala, trip eka yanna inna kattiyata kaemathi naedhdha? naethnam oya yana thaenata kaemathi naedhdha? api eka office ekee nisaa saha saha boss kaemathi nae oya enne nae kivva ekata, mata kivva oya ekka poddak kathaa karalaa okay kara ganna kiyala.',
      expected: 'ඔය මොකක්ද හිතන්නෙ අපි හෙට යන්න ඉන්න trip එක්හ් ගැන, එහෙ යන්න අකමැති ඇයි, ඔයගෙ ගෙඩරින් කිව්වා ඔය යන්න අකමැතියි කියල, මට දැන ගන්න පුලුවන්ද ඇයි ඔයා යන්න අකමැති කියල, trip එක යන්න ඉන්න කට්ටියට කැමති නැද්ද? නැත්නම් ඔය යන තැනට කැමති නැද්ද? අපි එක office එකේ නිසා සහ සහ boss කැමති නැ ඔය එන්නෙ නැ කිව්ව එකට, මට කිව්ව ඔය එක්ක පොඩ්ඩක් කතා කරලා okay කර ගන්න කියල.',
      category: 'Professional and Social Communication',
      grammar: 'Complex Compound Sentence with multiple clauses',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Conversion of Long Professional Career Plan',
      input: 'mama labana masee job ekata yanna inne! job akh ERP consultant intern job ekak, mekata finance saha IT danuma dekama ona venava. mama audit firm 1 year gihin thiyena nisa saha mama AAT sudhusukama complete karala thiyena nisaa mama hithenava mata meka gaelapena job ekak kiyala. adha kaale me thiyena competition ekath ekak mata gaelapena side eka meeka kiyalaa. mee athdhaekima issara anaagathayata mama hithenavaa vaedhagath veyi kiyalaa. oyata mee gaana mokke hari kiyanna thiyenavadha?',
      expected: 'මම ලබන මසේ job එකට යන්න ඉන්නේ! job අක්හ් ERP consultant intern job එකක්, මෙකට finance සහ IT ඩනුම ඩෙකම ඔන වෙනව. මම audit firm 1 year ගිහින් තියෙන නිස සහ මම AAT සුදුසුකම complete කරල තියෙන නිසා මම හිතෙනව මට මෙක ගැලපෙන job එකක් කියල. අද කාලෙ මෙ තියෙන competition එකත් එකක් මට ගැලපෙන side එක මේක කියලා. මේ අත්දැකිම ඉස්සර අනාගතයට මම හිතෙනවා වැදගත් වෙයි කියලා. ඔයට මේ ගාන මොක්කෙ හරි කියන්න තියෙනවද?',
      category: 'Career and Educational Background',
      grammar: 'Complex Narrative with multiple causal clauses',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Conversion of Short Narrative Statement',
      input: 'mata hithunoth mama me thadhabadhaya assen dhuvanava gedhara.',
      expected: 'මට හිතුනොත් මම මෙ තදබදය අස්සෙන් දුවනව ගෙදර.',
      category: 'Daily Personal Situations',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0004',
      name: 'Conversion of Short Educational Statement',
      input: 'mama SLIIT ekee IT Degree eka karanne.',
      expected: 'මම SLIIT එකේ IT Degree එක කරන්නේ.',
      category: 'Educational Background',
      grammar: 'Simple Present Continuous Statement',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Short History Question',
      input: 'krasthupurva10kumakdhasidhuvuuvisheeShasidhuvima?',
      expected: 'ක්‍රස්තුපුර්ව10කුමක්දසිදුවූවිශේෂසිදුවිම?',
      category: 'Historical Inquiry',
      grammar: 'Interrogative Simple Sentence (with no-space input variation)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Conditional complex sentence',
      input: 'ela machan supiri siraavata hari vaedak ban.',
      expected: 'එල මචන් සුපිරි සිරාවට හරි වැඩක් බන්.',
      category: 'Informal Social Communication',
      grammar: 'Exclamatory Phrases with Colloquial Slang',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Conversion of Short Affirmative Opinion',
      input: 'mama hithanne oba hari kiyaayi.',
      expected: 'මම හිතන්නෙ ඔබ හරි කියායි.',
      category: 'Personal Opinion and Feedback',
      grammar: 'Declarative Simple Sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Medium Teamwork Context',
      input: 'api meeka adha ivara karamu ethokota apita mee Project ekee ithuru tika arayalath ekka karanna puluvan.',
      expected: 'අපි මේක අද ඉවර කරමු එතොකොට අපිට මේ Project එකේ ඉතුරු ටික අරයලත් එක්ක කරන්න පුලුවන්.',
      category: 'Team Collaboration and Project Management',
      grammar: 'Compound Sentence with sequential clauses',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Short Social Question',
      input: 'oogollo mokadha karanne?',
      expected: 'ඕගොල්ලො මොකද කරන්නේ?',
      category: 'Social Interaction',
      grammar: 'Interrogative Simple Sentence',
      length: 'S'
    }, 
    {
      tcId: 'Pos_Fun_0010',
      name: 'Conversion of Medium Temporal Statement',
      input: 'ov kiyanna mama methana dhaen hugak velaa idhan inne vena kenek enakan.',
      expected: 'ඔව් කියන්න මම මෙතන දැන් හුගක් වෙලා ඉදන් ඉන්නේ වෙන කෙනෙක් එනකන්.',
      category: 'Daily Personal Situations',
      grammar: 'Complex Sentence with a subordinate clause of time',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Conversion of Short Critical Opinion',
      input: 'mama hithana vidhihata oyaa meeka karalaa thiyena vidhiha vaeradhiyi.',
      expected: 'මම හිතන විදිහට ඔයා මේක කරලා තියෙන විදිහ වැරදියි.',
      category: 'Personal Opinion and Feedback',
      grammar: 'Complex Sentence with a noun clause',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0012',
      name: 'Conversion of Short Motivational Statement',
      input: 'api anivaaren meeka dhinamu!! apita puluvan api miita vaediya dheeval dhinalaa thiyennee.',
      expected: 'අපි අනිවාරෙන් මේක දිනමු!! අපිට පුලුවන් අපි මීට වැඩිය දේවල් දිනලා තියෙන්නේ.',
      category: 'Motivational and Encouraging Phrases',
      grammar: 'Compound Exclamatory Sentences',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Medium Social Narrative',
      input: 'apee gedhara ballaa thaniyama yanne naee api kavuru hari eyath ekka yanavaa.',
      expected: 'අපේ ගෙදර බල්ලා තනියම යන්නෙ නෑ අපි කවුරු හරි එයත් එක්ක යනවා.',
      category: 'Daily Life and Pets',
      grammar: 'Compound Sentence consisting of two independent clauses',
      length: 'M'
    }, 
    {
      tcId: 'Pos_Fun_0014',
      name: 'Conversion of Short Risky Inquiry',
      input: 'oya mokadha hithanne mama mee Bike ekee 150ta gihin pennuvoth?',
      expected: 'ඔය මොකද හිතන්නෙ මම මේ Bike එකේ 150ට ගිහින් පෙන්නුවොත්?',
      category: 'Daily Social Interaction',
      grammar: 'Conditional Interrogative Sentence (Hypothetical)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Personal Goal Statement',
      input: 'api English practice thava karanna oonee.',
      expected: 'අපි English practice තව කරන්න ඕනේ.',
      category: 'Self-Improvement and Education',
      grammar: 'Simple Declarative Sentence with a modal-like structure',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0016',
      name: 'Short Payment Context',
      input: 'mee tikata kiyadha??  mage gaava Cash nam naee card payment karanavadha?',
      expected: 'මේ ටිකට කියද??  mage ගාව Cash නම් නෑ card payment කරනවද?',
      category: 'Financial Transactions',
      grammar: 'Interrogative Compound Sentence with mixed English terms',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Conversion of Short Corrective Opinion',
      input: 'oya hithan inna vidhiha tikak vaeradhiyi, mama podi nivaeraedhi kiriimak karannam.',
      expected: 'ඔය හිතන් ඉන්න විදිහ ටිකක් වැරදියි, මම පොඩි නිවැරැදි කිරීමක් කරන්නම්.',
      category: 'Personal Opinion and Feedback',
      grammar: 'Compound Sentence with a corrective clause',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0018',
      name: 'Short Interest Question',
      input: 'oyaa pusanta godak aasayinee?? ah naedhdha?',
      expected: 'ඔයා පුසන්ට ගොඩක් ආසයිනේ?? අහ් නැද්ද?',
      category: 'Personal Interests and Hobbies',
      grammar: 'Interrogative Simple Sentence with a tag question',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0019',
      name: 'Conversion of Short Secretive Request',
      input: 'arayata meeka gihin dhenna puluvandha mama dhunna kiyanne nathuva??',
      expected: 'අරයට මේක ගිහින් දෙන්න පුලුවන්ද මම දුන්න කියන්නෙ නතුව??',
      category: 'Social Interaction and Requests',
      grammar: 'Interrogative Sentence with a conditional clause',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0020',
      name: 'Conversion of Short Surprise Statement',
      input: 'ithin oyaata kiyanna mama hithan hitiye mechchara kal oyaata kathaa karanna baee kiyalaa!',
      expected: 'ඉතින් ඔයාට කියන්න මම හිතන් හිටියෙ මෙච්චර කල් ඔයාට කතා කරන්න බෑ කියලා!',
      category: 'Emotional Expressions and Surprise',
      grammar: 'Complex Declarative Sentence with a subordinate clause',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Short Slang News Context',
      input: 'adoo! uba dhannavadha aruu adha marry karanavaa.',
      expected: 'අඩෝ! උබ දන්නවද අරූ අද marry කරනවා.',
      category: 'Informal Social Communication',
      grammar: 'Interrogative Sentence with Colloquial Slang and mixed English',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_0022',
      name: 'Conversion of Long Protective Advice',
      input: 'oyaa dhannavadha mama hithana vidhihata eyaa oyaata gaelapenne nae. eyata vaediya hodha kenek oyaata hoyaa ganna puluvan. ooka dhaagena kavadhahari mama kivva dhe aeththa nedha kiyala worry veyi. mama kalin kivva haebaeyi. oyaa oo kiyana kenaa mama kalin idhanma dhannava, eyaa hodhayi vage hitiyata kaalayak yadhdhi therenne eyaa gaena meyaa pennapu kenaa nemeyinee kiyalaa eekayi kalinma kiyanna hithuve dhura dhiga yanna kalin. theerum ganna puluvannam therum ganna.',
      expected: 'ඔයා දන්නවද මම හිතන විදිහට එයා ඔයාට ගැලපෙන්නෙ නැ. එයට වැඩිය හොද කෙනෙක් ඔයාට හොයා ගන්න පුලුවන්. ඕක දාගෙන කවදහරි මම කිව්ව දෙ ඇත්ත නේද කියල worry වෙයි. මම කලින් කිව්ව හැබැයි. ඔයා ඕ කියන කෙනා මම කලින් ඉදන්ම දන්නව, එයා හොදයි වගෙ හිටියට කාලයක් යද්දි තෙරෙන්නෙ එයා ගැන මෙයා පෙන්නපු කෙනා නෙමෙයිනේ කියලා ඒකයි කලින්ම කියන්න හිතුවෙ දුර දිග යන්න කලින්. තේරුම් ගන්න පුලුවන්නම් තෙරුම් ගන්න.',
      category: 'Personal Advice and Social Situations',
      grammar: 'Series of Complex Narrative Sentences with causal reasoning',
      length: 'L'
    },
    
    {
      tcId: 'Pos_Fun_0023',
      name: 'Conversion of Short Travel Proposal',
      input: 'api gamanak yamudha dhaen?',
      expected: 'අපි ගමනක් යමුද දැන්?',
      category: 'Social Plans and Proposals',
      grammar: 'Interrogative Simple Sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Conversion of  Expectation Statement',
      input: 'ithin oyaata kiyanna mama hithuve kivva vidhihata oota vaediiya dheyak karalaa pennayi kiyala!',
      expected: 'ඉතින් ඔයාට කියන්න මම හිතුවෙ කිව්ව විදිහට ඕට වැඩීය දෙයක් කරලා පෙන්නයි කියල!',
      category: 'Emotional Expressions and Expectations',
      grammar: 'Complex Narrative Sentence with an embedded result clause',
      length: 'M'
    },

    {
      tcId: 'Pos_Fun_0025',
      name: 'Short Friendly Inquiry',
      input: 'machan!! poddak kadeet gihin enna puluvandha??',
      expected: 'මචන්!! පොඩ්ඩක් කඩේට් ගිහින් එන්න පුලුවන්ද??',
      category: 'Informal Social Interaction',
      grammar: 'Interrogative Simple Sentence with Colloquial terms',
      length: 'M'
    }, 
    {
      tcId: 'Pos_Fun_0026',
      name: 'Medium Time Constraint Context',
      input: 'kohomada English valin kiyanne "mama miita vaediya dheyak karanna hitiye time eka madhi vuna nisaa kara ganna baeri vunee" kiyalaa?',
      expected: 'කොහොමඩ English වලින් කියන්නෙ "මම මීට වැඩිය දෙයක් කරන්න හිටියෙ time එක මදි වුන නිසා කර ගන්න බැරි වුනේ" කියලා?',
      category: 'Language Inquiry and Learning',
      grammar: 'Interrogative Sentence containing a quoted complex causal statement',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0027',
      name: 'Gratitude Statement',
      input: 'Thanks machan! mama hithuve uba kiyanne naethuva idhiyi kiyala.',
      expected: 'Thanks මචන්! මම හිතුවෙ උබ කියන්නෙ නැතුව ඉදියි කියල.',
      category: 'Informal Social Interaction',
      grammar: 'Complex Sentence with an introductory interjection',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0028',
      name: 'Deadline Context',
      input: 'aethi yaantham ivara kara gaththaa, mama hithuve adha deadline nisaa kara ganna baeri veyi kiyalaa.',
      expected: 'ඇති යාන්තම් ඉවර කර ගත්තා, මම හිතුවෙ අද deadline නිසා කර ගන්න බැරි වෙයි කියලා.',
      category: 'Work and Productivity',
      grammar: 'Compound Sentence with an introductory relief phrase and a causal clause',
      length: 'M'
    }

  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Conversion of Short Urgent Invitation',
      input: 'oyaennaapiyamu??!!!',
      expected: 'ඔයාඑන්නඅපියුමු??!!!',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated words with multiple punctuation marks',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Conversion of Short Future Intent Statement',
      input: 'matajobekayannainne',
      expected: 'මටjobඑකයන්නඉන්නෙ',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated alphanumeric string with embedded English term',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Economic Context',
      input: 'illumasahasaepuyumaekiibalanakala,lookeadhikasaepuyumakIT/CSvalaaatha.',
      expected: 'ඉල්ලුමසහසැපුයුමඑකීබලනකල,ලෝකේඅදිකසැපුයුමIT/CSවලඇත.',
      category: 'Invalid Input Formatting (No Spaces with Symbols)',
      grammar: 'Long concatenated string with complex vocabulary and abbreviations',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Ambition Question',
      input: 'obeidhirianaagathabalaaporoththuvakumakdhapaevasiyahakidha??',
      expected: 'ඔබෙඉදිරිඅනාගතබලාපොරොත්තුවකිවහැකිද??',
      category: 'Invalid Input Formatting',
      grammar: 'Long concatenated formal interrogative sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Advisory Statement',
      input: 'apianaagathayagaenamiitavadaahithannaoonemamahithana akaarayataekayimamaupadhesdenne,oyatakisidubarakpathalaknaeoyaataonadheoyaa karanavamekavaeradhiyinedha??mamamokkakdhakiyannatrykarannekiyalatherumganna.',
      expected: 'අපිඅනාගතයගැනමීටවඩාහිතන්නඕනෙමමහිතනආකාරයටඑකයිමමඋපදෙස්දෙන්නෙ,ඔයාටකිසිදුබරක්පතලක්නෑඔයාටඔනදෙඔයාකරනවමේකවැරදියිනේද??මමමොකක්දකියන්නtryකරන්නෙකියලාතේරුම්ගන්න',
      category: 'Invalid Input Formatting',
      grammar: 'Extremely long concatenated advisory narrative with mixed terms',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Defensive Inquiry',
      input: 'oyaakiyanavidhihataeyaanarakanae??apinarakayikiyaladakiyanne??',
      expected: 'ඔයාකියනවිදිහටඑයානරකනැ??අපිනරකයිකියලදකියන්නෙ??',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated interrogative sentences representing a defensive tone',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Short Skeptical Question',
      input: 'kavudhakiyanneeyaahodhayikiyalaa??',
      expected: 'කවුදකියන්නෙඑයාහොදයිකියලා??',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated short interrogative sentence with skeptical tone',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Short Qualification Question',
      input: 'meoyaagedegreeekhmokakdha?',
      expected: 'මෙඔයාගෙdegreeඑකමොකක්ද?',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated alphanumeric string containing a formal noun',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Philosophical Remark',
      input: 'minissupudhamaakaarayikiyanneekakkarannethavaekak',
      expected: 'මිනිස්සුපුදුමාකාරයිකියන්නෙඑකක්කරන්නෙතවඑකක්',
      category: 'Invalid Input Formatting',
      grammar: 'Long concatenated philosophical declarative sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Long Opinion Feedback',
      input: 'oya hithana vidhihata eyaa hodhayi kiyaladha kiyanne? mama kenek ekka kathaa kalaa mata eyaa kivve meya pennana tharam hodha kenek nemeyi kiyala. eyaa kivve puluvan tharam eyaava dhurin thiyaa ganna kiyalaa. mama haa kiyalaa oyaagen ahuve, kavudha danne irisiyavata hari eyaa meyaa ekka tharahata kiyanavadha kiyalaa!!.Thanksvistharakivvata,matathhithanneeyaahodhakenekkiyalaa.',
      expected: 'ඔයහිතනවිදිහටඑයාහොදයිකියලදකියන්නෙ?මමකෙනෙක්එක්කකතාකලාමටඑයාකිව්වෙමෙයපෙන්නනතරම්හොදකෙනෙක්නෙමෙයිකියල.එයාකිව්වෙපුලුවන්තරම්එයාවදුරින්තියාගන්නකියලා.මමහාකියලාඔයාගෙන් අහුවෙ,කවුදද්න්නෙඉරිසියවටහරිඑයාමෙයාඑක්කතරහටකියනවදකියලා!!.Thanksවිස්තරකිව්වට,මටත්හිතෙන්නෙඑයාහොදකෙනෙක්කියලා.',
      category: 'Invalid Input Formatting',
      grammar: 'Paragraph with mixed standard spacing and concatenated strings',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_0011',
      name: 'Short Task Discussion Context',
      input: 'apikathaakarannaoneemeeProjectekagaena',
      expected: 'අපිකතාකරන්නෙඕනෙමේProjectඑකගැන',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated string with a capitalized English noun',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0012',
      name: 'Informal Office Context',
      input: 'anidhdha aruu company eken yanavalu ayin velaa, party ekak illa gamu heta! mokadha set eka kiyanne??',
      expected: 'අනිද්ද අරූ company එකෙන් යනවලු අයින් වෙලා, party එකක් ඉල්ල ගමු හෙට! මොකද set එක කියන්නෙ??',
      category: 'Mixed Language Informal Communication',
      grammar: 'Compound sentence with exclamatory and interrogative elements',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0013',
      name: 'Short Command Context',
      input: 'eekaillaganna',
      expected: 'ඒකඉල්ලගන්න',
      category: 'Invalid Input Formatting',
      grammar: 'Concatenated imperative verb phrase',
      length: 'S'
    }
  ],
  
  ui_Pos: {
    tcId: 'Pos_UI_0001',
    name: 'Short Symbol Only Input',
    input: '😂 ✅@#%🍃₹',
    expectedFull: '😂 ✅@#%🍃₹',
    category: 'Input Validation and Symbols',
    grammar: 'Non-lexical input (Symbols, Emojis, and Special characters)',
    length: 'S'
  },
  ui_Neg: {
    tcId: 'Neg_UI_0001',
    name: 'Junk Input Context',
    input: 'asdsadasdsadasdasdsadasdsadafasfa@@31231%&@^@$$*&^*$^!*&$ hallo skaisondabdabduhadkjhgdkjhagdashkgdakjdhgaskjhdgaskudygfadsgfukadgfkaufgyaskuyfgasyfgasukfyjgaukf.  hallo test one two three. ',
    expectedFull: 'asdsadasdsadasdasdsadasdsadafasfa@@31231%&@^@$$*&^*$^!*&$ hallo skaisondabdabduhadkjhgdkjhagdashkgdakjdhgaskjhdgaskudygfadsgfukadgfkaufgyaskuyfgasyfgasukfyjgaukf.  hallo test one two three. ',
    category: 'Error Handling and Junk Data',
    grammar: 'Gibberish / Alphanumeric junk string',
    length: 'M'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Functionality Tests
  test.describe('UI Functionality Tests', () => {

    // UI Positive Test
    test(`${TEST_DATA.ui_Pos.tcId} - ${TEST_DATA.ui_Pos.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);

      await translator.navigateToSite();

      const input = await translator.getInputField();

      await translator.clearAndWait();
      await input.fill(TEST_DATA.ui_Pos.input);

      await translator.waitForOutput();

      const outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui_Pos.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });


    // UI Negative Test  ✅ (this was missing)
    test(`${TEST_DATA.ui_Neg.tcId} - ${TEST_DATA.ui_Neg.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);

      await translator.navigateToSite();

      const input = await translator.getInputField();

      await translator.clearAndWait();
      await input.fill(TEST_DATA.ui_Neg.input);

      await translator.waitForOutput();

      const outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui_Neg.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });

  });

});
