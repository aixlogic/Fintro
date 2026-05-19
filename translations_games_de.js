// translations_games_de.js — Fintro Deutsche Spiel-Inhalte
// Geladen nach translations_de_1.js und translations_de_2.js

// ─── GAME 1: Currency Crisis ─────────────────────────────
const CC_SCENARIOS_DE=[
  {
    headline:'BREAKING: Zentralbank druckt 500 % mehr Geld',
    text:'Die Regierung hat eine Notfall-Gelddruckaktion angekündigt. Deine CHF verlieren rasend schnell an Wert.',
    options:[
      {emoji:'🥇',label:'Gold kaufen',sub:'Sicherer Hafen, behält Wert',action:'gold'},
      {emoji:'💵',label:'USD kaufen',sub:'Stabile Fremdwährung',action:'dollars'},
      {emoji:'🛒',label:'Waren kaufen',sub:'Physische Güter behalten Wert',action:'goods'},
      {emoji:'💰',label:'Bargeld halten',sub:'CHF behalten',action:'cash'},
    ]
  },
  {
    headline:'UPDATE: Inflation erreicht 200 % — Preise verdreifachen sich',
    text:'Grundgüter kosten jetzt das 3-fache. Menschen kaufen panisch. Dein Gold ist mehr wert.',
    options:[
      {emoji:'🥇',label:'Gold halten',sub:'Abwarten',action:'hold_gold'},
      {emoji:'🛒',label:'Gold verkaufen, Waren kaufen',sub:'Konvertieren bevor es schlimmer wird',action:'sell_gold_goods'},
      {emoji:'💵',label:'Zu USD wechseln',sub:'Fremdwährung stabil',action:'dollars'},
      {emoji:'💰',label:'Mehr Bargeld kaufen',sub:'Auf Erholung wetten',action:'cash'},
    ]
  },
  {
    headline:'LÖSUNG: Neue stabile Währung angekündigt',
    text:'Die Regierung führt eine neue Währung ein. Altes Bargeld ist wertlos. Gold, USD und Waren können zum neuen Kurs getauscht werden.',
    options:[
      {emoji:'✅',label:'Alle Vermögenswerte tauschen',sub:'In neue Währung umtauschen',action:'exchange'},
      {emoji:'🤝',label:'Vermögenswerte handeln',sub:'Mit Nachbarn tauschen',action:'barter'},
    ]
  },
];

const CC_FEEDBACK_DE={
  gold:'Clever. CHF ${amt} in Gold umgewandelt. Gold behält Wert, wenn Währungen kollabieren.',
  dollars:'Gute Absicherung. CHF ${amt} in USD umgewandelt. Fremdwährung ist stabiler.',
  goods:'Physische Güter behalten bei Inflation Wert. CHF ${amt} für Waren ausgegeben.',
  cash:'Riskant. Bargeld in einer Hyperinflation zu halten bedeutet, dass dein Vermögen in Echtzeit verdampft.',
  hold_gold:'Richtig. Dein Gold wertet auf, während die Währung kollabiert. Kurs halten.',
  sell_gold_goods:'Alles Gold zum 2-fachen Wert in Waren umgewandelt. Waren sind jetzt der beste Wertspeicher.',
  exchange:'Alles getauscht. Bargeld war fast wertlos — 95 % verloren. Vermögenswerte haben CHF ${total} erhalten.',
  barter:'Kluges Denken. Wenn Währungen versagen, kehren die Menschen zum Tauschhandel zurück — dem ursprünglichen System, das Geld ersetzt hat.',
  end_lesson:'Die Lektion: Geld ist nur das wert, was die Menschen glauben, dass es wert ist. Wenn Vertrauen kollabiert, kollabiert die Währung. Gold, Fremdwährung und echte Güter behielten ihren Wert, weil sie über das Versprechen einer Regierung hinaus Wert haben.',
  choose:'Wähle deine Aktion...',
};

// ─── GAME 3: Life Simulator ──────────────────────────────
const LS_EVENTS_DE=[
  {
    month:'Monat 1',
    desc:'Du bist gerade 22 geworden. Du hast zwei Jobangebote. Welches nimmst du an?',
    choices:[
      {text:'Stabiler Konzern-Job — CHF 4.000/Monat',effect:'+CHF 4.000/Monat aktives Einkommen',impact:{income:4000,type:'active'}},
      {text:'Startup — CHF 2.500 + Aktienoptionen',effect:'+CHF 2.500/Monat + potenzielle Upside',impact:{income:2500,type:'active',note:'riskant aber potenzialreich'}},
      {text:'Freelance — variabel, Ø CHF 3.500/Monat',effect:'+CHF 3.500/Monat variabel',impact:{income:3500,type:'active'}},
    ]
  },
  {
    month:'Monat 4',
    desc:'Ein Freund bietet dir 50 % Anteil an einem kleinen Online-Shop. Startkosten: CHF 2.000.',
    choices:[
      {text:'CHF 2.000 investieren, Partnerschaft eingehen',effect:'-CHF 2.000 jetzt, potenzielle passive Einnahmen',impact:{savings:-2000,note:'potenzielle passive Einnahmen'}},
      {text:'Ablehnen — CHF 2.000 auf Ersparnis lassen',effect:'Ersparnisse erhalten',impact:{}},
      {text:'25 % Anteil für CHF 1.000 aushandeln',effect:'-CHF 1.000 für kleinere Beteiligung',impact:{savings:-1000,note:'niedrigeres Risiko'}},
    ]
  },
  {
    month:'Monat 8',
    desc:'Du hast CHF 3.000 gespart. Was machst du damit?',
    choices:[
      {text:'Als Notfallpuffer behalten',effect:'Finanzielles Sicherheitsnetz gesichert',impact:{note:'Notfallpuffer'}},
      {text:'In Indexfonds investieren',effect:'Wächst potenziell über die Zeit',impact:{note:'investieren'}},
      {text:'Für Weiterbildung/Kurse ausgeben',effect:'Erhöht zukünftiges Verdienstpotenzial',impact:{note:'Skill-Investment'}},
    ]
  },
  {
    month:'Monat 12',
    desc:'Dein Arbeitgeber bietet Überstunden an: +CHF 800/Monat. Aber das bedeutet weniger Freizeit.',
    choices:[
      {text:'Annehmen — jetzt maximales Einkommen',effect:'+CHF 800/Monat, weniger Zeit für Nebenprojekte',impact:{income:800}},
      {text:'Ablehnen — Zeit schützen',effect:'Zeit für passive Einkommensquellen behalten',impact:{note:'Zeit erhalten'}},
      {text:'Verhandeln: weniger Überstunden für +CHF 400',effect:'+CHF 400/Monat, etwas Zeit bleibt',impact:{income:400}},
    ]
  },
];

const LS_END_DE={
  strong:'Starker Start — mehrere Einkommensquellen im Aufbau.',
  solid:'Solides Fundament. Raum für Diversifizierung.',
  consider:'Überlege, neben deinem Hauptjob zusätzliche Einkommensquellen aufzubauen.',
  chosen:'Du hast gewählt: ',
  complete:'Jahr 1 abgeschlossen',
  key:'Schlüsselentscheidungen',
};

// ─── GAME 4: Budget Challenge ────────────────────────────
const BC_ITEM_LABELS_DE={
  'Rent':'Miete',
  'Groceries':'Lebensmittel',
  'Transport':'Transport',
  'Phone bill':'Handyrechnung',
  'Dining out':'Auswärts essen',
  'Entertainment':'Unterhaltung',
  'Clothing':'Kleidung',
  'Savings':'Ersparnisse',
};
const BC_TYPE_DE={need:'Bedarf',want:'Wunsch',save:'Sparen'};
const BC_FEEDBACK_DE={
  unallocated:'CHF ${n} nicht zugeteilt. Weise es den Ersparnissen zu!',
  over:'CHF ${n} über Budget. Reduziere einige Kategorien.',
  perfect:'Perfektes 50/30/20-Budget! Bedarf: ${np}%, Wünsche: ${wp}%, Sparen: ${sp}%.',
  close:'CHF 2.500 ausgeglichen. Ziel: Bedarf ≤50%, Wünsche ≤30%, Sparen ≥20%. Dein Budget: ${np}% / ${wp}% / ${sp}%',
};

// ─── GAME 5: Rate Race ───────────────────────────────────
const RR_WINNER_DE=(best,diff,years,isCrypto)=>`<strong style="color:var(--amber)">${best}</strong> gewinnt mit CHF ${diff.toLocaleString()} über ${years} Jahre. Gleiches Geld — sehr unterschiedliche Ergebnisse. ${isCrypto?'<span style="color:var(--red)">Warnung: Hochzins-Sparangebote tragen oft versteckte Risiken. Der gezeigte 8%-Satz ist illustrativ.</span>':'Immer Zinssätze vergleichen, bevor du einzahlst.'}`;

// ─── GAME 6: Debt Duel ───────────────────────────────────
const DD_DEBT_NAMES_DE={
  'Credit Card A':'Kreditkarte A',
  'Student Loan':'Studentenkredit',
  'Credit Card B':'Kreditkarte B',
  'Car Loan':'Autokredit',
};
const DD_RESULT_DE=(strat,years,mos,months,interest,isAvalanche)=>
  `<strong style="color:var(--amber)">${strat}:</strong> Alle Schulden getilgt in <strong>${years} Jahre ${mos} Monate</strong> (${months} Zahlungen). Gesamtzinsen bezahlt: ungefähr <strong style="color:var(--red)">CHF ${interest.toLocaleString()}</strong>.<br><br>${isAvalanche?'Mathematisch optimal — du hast am meisten Zinsen gespart, indem du die hochverzinste Schuld zuerst angegriffen hast.':'Psychologisch effektiv — schnelle Erfolge halten die Motivation hoch, auch wenn es etwas mehr an Zinsen kostet.'}`;

// ─── GAME 7: Crisis Simulator ────────────────────────────
const CS_EVENTS_DE=[
  {tag:'emergency',text:'Dein Laptop geht kaputt — du brauchst ihn für die Schule.',cost:350},
  {tag:'want',text:'Limited-Edition-Sneakers erscheinen. Alle haben sie.',cost:220},
  {tag:'emergency',text:'Unerwartete Zahnarztrechnung.',cost:400},
  {tag:'want',text:'Wochenend-Skitrip mit Freunden.',cost:280},
  {tag:'emergency',text:'Du verlierst deinen Nebenjob für 2 Monate.',cost:1600},
  {tag:'want',text:'Neues Handy — deins funktioniert noch einwandfrei.',cost:800},
];
const CS_FEEDBACK_DE={
  want_wrong:'Das ist ein WUNSCH — kein Notfall. Dein Puffer ist für echte Krisen, nicht für Wünsche. Schütze ihn.',
  not_enough:'Nicht genug gespart. Du bräuchtest noch CHF ${diff} mehr — oder müsstest Schulden machen. Genau deshalb ist der Puffer wichtig.',
  used:'Richtig. CHF ${cost} aus deinem Puffer für einen echten Notfall verwendet. Verbleibend: CHF ${rem}. Jetzt wieder auffüllen.',
  skip_emergency:'Das WAR ein echter Notfall. Ihn zu ignorieren führt zu grösseren Problemen — Schulden, Mahngebühren, Jobverlust. Nutze deinen Puffer dafür.',
  skip_want:'Richtig. Das war ein WUNSCH. Ihn zu überspringen schützt deinen Puffer für wenn du ihn wirklich brauchst.',
  save_first:'Zuerst aufbauen — spare mindestens CHF 500, um Ereignisse freizuschalten.',
  life_events:'Lebensereignisse',
  fund_complete:'Notfallpuffer vollständig! CHF ${n} gespart. Du bist geschützt. Jetzt beginnt der echte Test...',
  saved:'CHF ${amt} gespart. Gesamt: CHF ${total} (${pct}% des Ziels)',
};

// ─── GAME 9: Insurance Chooser ───────────────────────────
const IC_SCENARIOS_DE=[
  {
    text:'Du bist 18, mietest eine Wohnung und besitzt ein Fahrrad und einen Laptop. Du stösst versehentlich eine teure Vase deiner Nachbarin um. Welche Versicherung deckt das?',
    options:['Krankenversicherung','Privathaftpflicht (Haftpflicht)','Autoversicherung','Keine Versicherung nötig'],
    correct:1,
    explain:'Die Privathaftpflichtversicherung deckt versehentliche Schäden, die du an fremdem Eigentum verursachst. Genau dieses Szenario. Kostet ~CHF 100/Jahr.'
  },
  {
    text:'Dein Laptop und Fahrrad werden aus deiner Wohnung gestohlen. Welche Versicherung würde den Ersatz abdecken?',
    options:['Haftpflichtversicherung','Lebensversicherung','Hausratversicherung','Krankenversicherung'],
    correct:2,
    explain:'Die Hausratversicherung deckt dein persönliches Hab und Gut in deiner Wohnung — Diebstahl, Feuerschäden, Wasserschäden. Dafür ist die Hausrat gedacht.'
  },
  {
    text:'Du gehst wegen einer plötzlichen Krankheit zum Arzt. Die Rechnung beträgt CHF 400. Was deckt das in der Schweiz?',
    options:['Haftpflichtversicherung','Grundkrankenversicherung (Krankenkasse)','Lebensversicherung','Nichts — du zahlst 100 %'],
    correct:1,
    explain:'Die Krankenkasse (Grundversicherung) deckt medizinische Behandlungen ab. Nach deiner Franchise und 10 % Selbstbehalt zahlt die Versicherung den Rest.'
  },
  {
    text:'Du bist 20, ledig, keine Kinder, gesund. Jemand bietet dir eine Lebensversicherung an. Solltest du sie kaufen?',
    options:['Ja — jeder braucht eine Lebensversicherung','Wahrscheinlich nicht — niemand hängt von deinem Einkommen ab','Ja — sie ist die wichtigste Versicherung','Nur wenn sie sehr günstig ist'],
    correct:1,
    explain:'Lebensversicherung schützt Menschen, die von deinem Einkommen abhängen. Mit 20 ohne Abhängige brauchst du sie wahrscheinlich nicht. Das Geld ist für Kranken- und Haftpflichtversicherung besser angelegt.'
  },
];
const IC_RESULT_DE=(score,total)=>`<div class="quiz-result"><span class="quiz-result-score">${score}/${total}</span><h3>${score>=3?'Klares Urteilsvermögen!':'Weiter üben!'}</h3><p>${score>=3?'Du weisst, welche Versicherung wirklich wichtig ist.':'Schau dir die Versicherungsarten nochmals an und versuche es erneut.'}</p><button class="btn-primary" onclick="icState={q:0,score:0,done:false};renderIC()">Nochmal versuchen</button></div>`;

// ─── GAME 10: Risk vs Return ─────────────────────────────
const RR_SCENARIOS_DE=[
  'Sehr stabil. Fast kein Marktrisiko. Aber Inflation wird die reale Rendite über Zeit wahrscheinlich aufzehren.',
  'Konservativ. Geringe Volatilität, bescheidene Renditen. Gut für Geld, das in 1–3 Jahren gebraucht wird.',
  'Ausgewogen. Etwas Wachstum, etwas Stabilität. Geeignet für mittelfristige Ziele.',
  'Wachstumsorientiert. Erwartet höhere Renditen, akzeptiert erhebliche kurzfristige Rückgänge.',
  'Aggressiv. Hohe erwartete Renditen. Muss in der Lage sein, 30–40 % Rückgänge ohne Panikverkauf auszuhalten.',
  'Maximale Aktien. Historisch die höchsten langfristigen Renditen — aber kann in einem Crash 50 %+ fallen. Nur geeignet mit langem Zeithorizont und starken Nerven.',
];
const RR_VERDICTS_DE=[
  'Dieses Portfolio erhält Kapital, verliert aber über lange Zeiträume wahrscheinlich gegenüber der Inflation. Geeignet, wenn das Geld bald benötigt wird.',
  'Ein defensives Portfolio. Gut für Menschen mit kürzerem Zeithorizont oder geringerer Risikobereitschaft.',
  'Ein ausgewogenes bis wachstumsorientiertes Portfolio. Die meisten Finanzberater empfehlen etwas in diesem Bereich für langfristige Investoren.',
  'Hochüberzeugtes Aktienportfolio. Maximales langfristiges Wachstumspotenzial — erfordert jedoch die Fähigkeit, 40–50 % Rückgänge ohne Panik zu ignorieren.',
];
const RR_STAT_LABELS_DE={
  exp:'Erwartete Jahresrendite',
  worst:'Schlechtestes Jahr (geschätzt)',
  vol:'Volatilität (Std.-Abw.)',
};

// ─── GAME 11: Scam Detector ──────────────────────────────
const SD_MESSAGES_DE=[
  {
    type:'SCAM',
    from:'PostFinance <security@postfinance-verify.net>',
    subject:'Dringend: Ihr Konto wurde gesperrt',
    body:'Sehr geehrte/r Kunde/in, Ihr PostFinance-Konto wurde vorübergehend aufgrund verdächtiger Aktivitäten gesperrt. Sie müssen Ihre Identität innerhalb von 24 Stunden bestätigen, sonst wird Ihr Konto dauerhaft geschlossen. Zur Bestätigung klicken Sie hier: [postfinance-sicher-login.com]',
    flags:['Gefälschte E-Mail-Domain (postfinance-verify.net, nicht postfinance.ch)','Dringlichkeit: 24-Stunden-Frist','Angst-Auslöser: „dauerhaft geschlossen"','Verdächtiger Link zu nicht-offizieller Domain'],
    explain:'Klassisches Phishing. Echte PostFinance-E-Mails kommen nur von @postfinance.ch. Nie auf Links in dringenden Bank-E-Mails klicken — direkt auf die echte Website gehen.'
  },
  {
    type:'SCAM',
    from:'WhatsApp — Unbekannte Nummer',
    subject:'Investitionsmöglichkeit',
    body:'Hallo! Ich bin Sarah, Finanzberaterin. Ich habe eine spezielle Krypto-Investitionsgruppe. Mitglieder erzielen 30–50 % monatliche Renditen. 100 % garantiert. Nur noch 3 Plätze frei — sende CHF 500 um beizutreten und ich multipliziere es für dich.',
    flags:['30–50 % monatliche Renditen — mathematisch unmöglich','Garantierte Renditen — nie legitim','Künstliche Knappheit („3 Plätze frei")','Unerwünschter Kontakt von unbekannter Person','Aufforderung, Geld direkt zu senden'],
    explain:'Anlagebetrug. Keine legitime Investition garantiert irgendeine Rendite, geschweige denn 30–50 % monatlich. Das ist ein klassischer Vorschuss-/Krypto-Betrug.'
  },
  {
    type:'SAFE',
    from:'Swisscom <no-reply@swisscom.com>',
    subject:'Ihre monatliche Rechnung ist bereit',
    body:'Sehr geehrte/r Kunde/in, Ihre Rechnung für November ist jetzt verfügbar. Betrag: CHF 45.90. Sie können Ihre Rechnung einsehen und herunterladen, indem Sie sich auf swisscom.com in Ihr Swisscom-Konto einloggen. Ihre Lastschrift wird am 28. November verarbeitet.',
    flags:[],
    explain:'Das ist eine legitime Rechnungsbenachrichtigung. Sie nennt den Betrag, verwendet die offizielle Domain, bittet dich selbst einzuloggen (nicht über einen Link) und entspricht dem erwarteten Verhalten.'
  },
  {
    type:'SCAM',
    from:'Eidg. Steuerverwaltung <estv-rueckerstattung@schweiz-steuer-amt.org>',
    subject:'Steuererstattung von CHF 1.240 verfügbar',
    body:'Sehr geehrte/r Steuerzahler/in, Sie haben Anspruch auf eine Steuererstattung von CHF 1.240 aus dem vergangenen Steuerjahr. Um Ihre Erstattung zu bearbeiten, teilen Sie bitte Ihre IBAN mit und bestätigen Sie Ihre Identität über den unten stehenden sicheren Link innerhalb von 7 Tagen.',
    flags:['Gefälschte Domain (.org — echte ESTV verwendet admin.ch)','Steuererstattungen werden automatisch ausgestellt — nicht per E-Mail','Anforderung von IBAN und Identität per E-Mail','Dringlichkeit: 7-Tage-Frist'],
    explain:'Die echte Schweizer Steuerverwaltung (ESTV) verwendet estv.admin.ch. Sie schickt nie E-Mails und fragt nach Bankdaten. Steuererstattungen werden automatisch über offizielle Kanäle verarbeitet.'
  },
];
const SD_RESULT_DE=(score,total)=>`<div class="quiz-result"><span class="quiz-result-score">${score}/${total}</span><h3>${score>=3?'Scharfer Detektor!':'Weiter üben!'}</h3><p>${score>=3?'Du hast die Muster erkannt. Bleib wachsam.':'Schau dir die Warnsignale nochmals an und versuche es erneut.'}</p><button class="btn-primary" onclick="sdState={q:0,score:0,revealed:false};document.getElementById('sd-score').textContent='0';renderSD()">Nochmal versuchen</button></div>`;
const SD_VERDICT_DE={
  scam_correct:'Betrug erkannt!',
  safe_correct:'Sicher — richtig!',
  scam_wrong:'Das war ein Betrug!',
  safe_wrong:'Das war eigentlich sicher',
  red_flags:'Warnsignale',
  next:'Verstanden →',
};

// ─── GAME 12: Portfolio Builder ──────────────────────────
const PB_ASSETS_DE=[
  {name:'Global ETF',desc:'MSCI World — 1.500+ Unternehmen weltweit · Ø Rendite: 7 %/Jahr'},
  {name:'Einzelaktie',desc:'Hohes Potenzial, hohes Risiko — ein einziges Unternehmen · Ø Rendite: 9 %/Jahr'},
  {name:'Anleihen',desc:'Staatsanleihen — stabil, niedrige Rendite · Ø Rendite: 2,5 %/Jahr'},
  {name:'Bargeld / Sparkonto',desc:'Sparkonto — sicher, verliert gegenüber Inflation · Ø Rendite: 0,5 %/Jahr'},
];
const PB_RESULT_DE={
  started:'Gestartet mit',
  after10:'Nach 10 Jahren',
  annualised:'Jährlich',
  gained:(v)=>`<span style="color:var(--green)">+CHF ${v} gewonnen.</span> Echte Ergebnisse variieren — das ist ein simulierter Pfad.`,
  lost:(v)=>`<span style="color:var(--red)">CHF ${v} verloren.</span> Deshalb ist Diversifizierung wichtig.`,
  again:'Nochmal simulieren ↻',
  total:'Total zugewiesen',
  run:'10-Jahres-Simulation starten →',
};

// ─── GAME 13: Buy vs Rent ─────────────────────────────────
const BVR_DE={
  buying:'Kaufen',
  renting:'Mieten + Investieren',
  mortgage:'Hypothek + Unterhalt',
  rent:'Monatliche Miete',
  down:'Anzahlung',
  transaction:'Transaktionskosten',
  invested:'Stattdessen investiert',
  grows_to:'wächst auf',
  gain:'Gewinn nach ${y} Jahren',
  inv_gain:'Investitionsgewinn',
  ahead:(w,d,y)=>`${w} liegt nach ${y} Jahren ungefähr <strong>CHF ${d} vorne</strong> in diesem Szenario.`,
  note:(y)=>`In der Schweiz: mindestens 20 % Anzahlung (10 % muss hartes Eigenkapital sein). Immobilienpreise gehören zu den höchsten Europas. Break-Even meist nach 5–8 Jahren. ${y<6?`Bei ${y} Jahren gewinnt Kaufen selten.`:''}`,
};

// ─── GAME 14: Market Panic ────────────────────────────────
const MP_EVENTS_DE=[
  {
    headline:'📉 CRASH: Markt fällt in 3 Monaten um 35 %',
    context:'Eine Finanzkrise hat zugeschlagen. Dein CHF-10.000-Portfolio ist jetzt CHF 6.500 wert.',
    choices:[
      {text:'ALLES VERKAUFEN — Verluste begrenzen',emoji:'😰',outcome:'sell'},
      {text:'HALTEN — Kurs beibehalten',emoji:'😤',outcome:'hold'},
      {text:'KAUFEN — Preise sind im Angebot',emoji:'💪',outcome:'buy'},
    ]
  },
  {
    headline:'📰 MEDIEN: „Diesmal ist es anders — keine Erholung"',
    context:'Analysten sagen im TV, die alte Wirtschaft sei vorbei. Dein Portfolio ist 40 % im Minus.',
    choices:[
      {text:'VERKAUFEN — die Experten sagen es',emoji:'😨',outcome:'sell2'},
      {text:'HALTEN — Lärm ist Lärm',emoji:'😐',outcome:'hold2'},
      {text:'KAUFEN — Marktangst = Chance',emoji:'🎯',outcome:'buy2'},
    ]
  },
  {
    headline:'🚀 ERHOLUNG: Markt +60 % vom Tiefpunkt',
    context:'Der Markt hat sich vollständig erholt und neue Höchststände erreicht. Deine Entscheidung vor 2 Jahren hat dein Ergebnis definiert.',
    choices:[
      {text:'Mein Ergebnis sehen',emoji:'📊',outcome:'end'},
    ]
  },
];
const MP_FEEDBACK_DE={
  sell:'Du hast einen 35-%-Verlust realisiert. Als der Markt sich erholte, hast du es verpasst.',
  hold:'Richtig. Investiert zu bleiben ist die rationale Entscheidung. Märkte haben sich in der Geschichte von jedem Crash erholt.',
  buy:'Ausgezeichnet. In Angst zu kaufen hat historisch die besten Renditen erzeugt. Du hast zu 35 % Rabatt gekauft.',
  sell2:'Du hast beim zweiten Tief verkauft — jetzt aus der Erholung ausgesperrt. Zwei emotionale Entscheidungen haben sich gegenseitig verstärkt.',
  hold2:'Richtig. Medien ignorieren und halten ist bei Crashs fast immer richtig.',
  buy2:'Du hast am Tiefpunkt verdoppelt. Historisch gesehen kaufen die besten Investoren genau dann.',
  smart:'Kluge Entscheidung',
  emotional:'Emotionale Entscheidung',
  next:'Weiter →',
};
const MP_END_DE={
  master:'Meister der Geduld!',
  survived:'Du hast den Crash überlebt.',
  emotional:'Emotionale Entscheidungen haben dich Geld gekostet.',
  started:'Gestartet mit CHF 10.000. Nach Crash und Erholung:',
  fact:'Historische Tatsache: Jeder Börsencrash in der Geschichte wurde schliesslich von einer vollständigen Erholung und neuen Höchstständen gefolgt. Die einzigen Investoren, die permanent verloren, waren diejenigen, die verkauft haben.',
  again:'Nochmal versuchen',
};

// ─── GAME 15: Volatility Ride ─────────────────────────────
const VR_EVENTS_DE=[
  {text:'🚀 Krypto-Influencer empfiehlt den Coin. +120 % in einer Woche.',delta:1.20,type:'up'},
  {text:'📰 Regulierungsbehörde kündigt Einschränkungen an. −55 % in 3 Tagen.',delta:-0.55,type:'down'},
  {text:'🔒 Grosse Börse gehackt. −40 % über Nacht.',delta:-0.40,type:'down'},
  {text:'💼 Institutioneller Investor steigt ein. +85 %.',delta:0.85,type:'up'},
  {text:'💸 Rug Pull bei verwandtem Token entdeckt. −65 %.',delta:-0.65,type:'down'},
  {text:'🌐 Land verbietet Krypto. −48 %.',delta:-0.48,type:'down'},
  {text:'🏦 ETF-Genehmigung angekündigt. +90 %.',delta:0.90,type:'up'},
];
const VR_END_DE={
  lucky:'Glückliche Fahrt!',
  barely:'Positiv — knapp.',
  typical:'Die typische Krypto-Erfahrung.',
  became:'CHF 1.000 wurden zu',
  gain:'Gewinn',
  loss:'Verlust',
  fact:'Das waren 7 zufällige Ereignisse. Echte Kryptomärkte haben solche Ereignisse ständig, 24/7, 365 Tage/Jahr. Positionsgrösse ist alles — deshalb gibt es die 1-5%-Regel.',
  again:'Nochmal fahren',
  next:'Nächstes Ereignis →',
  see_result:'Ergebnis anzeigen →',
};
