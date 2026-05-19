// translations_de_1.js — Fintro Deutsche Übersetzungen, Teil 1
// Kapitel 1–10 (Units 1–3)

const CHAPTERS_DE = [

  // ── UNIT 1 ──────────────────────────────────────────────────────────
  {
    id:1,
    title:"Was ist Geld?",
    subtitle:"Von Muscheln bis Smartphones — die wahre Geschichte des Geldes",
    lesson:[
      {
        phase:'Erklärung',
        title:'Was ist Geld — und warum gibt es das?',
        text:'Lange bevor es Geld gab, tauschten Menschen direkt. Fisch gegen Pfeile, Getreide gegen Stoff. Das funktionierte — aber nur, wenn beide Seiten genau das hatten, was die andere wollte, und zwar gleichzeitig. Das war selten der Fall.',
        def:{label:'Definition',text:'Geld: ein allgemein akzeptiertes Tauschmittel, das das Problem des „doppelten Bedarfszufalls" löst. Statt Fisch direkt gegen Brot zu tauschen, verkaufst du Fisch für Geld — und kaufst dann Brot dafür.'},
        cards:[
          {tag:'Das Problem',title:'Doppelter Bedarfszufall',preview:'Warum direkter Tausch in der Praxis scheitert.',body:'Damit Tauschhandel klappt, brauchst du jemanden, der <strong>hat, was du willst</strong> UND <strong>will, was du hast</strong> — gleichzeitig. In einem Dorf mit 10 Menschen ist das machbar. In einer Millionenstadt bricht es komplett zusammen. Deshalb hat jede Zivilisation unabhängig voneinander Geld erfunden.'},
          {tag:'Die Lösung',title:'Geld als Zwischenschritt',preview:'Wie Geld Handel für alle ermöglicht.',body:'Geld wird zum universellen Zwischenschritt. Verkaufe deinen Fisch für Geld → kaufe damit Brot. Du brauchst keinen Bäcker mehr, der zufällig Fisch will. <strong>Alle akzeptieren Geld</strong>, also ist Handel zwischen beliebigen zwei Menschen, überall und jederzeit, möglich.'},
        ]
      },
      {
        phase:'Vertiefung',
        title:'Wie hat sich Geld entwickelt?',
        text:'Die Form des Geldes hat sich dramatisch verändert — Muscheln, Gold, Papier, Bits. Aber die Funktion hat sich nie geändert. Diese Entwicklung zeigt, warum Geld im Kern auf Vertrauen basiert.',
        cards:[
          {tag:'Geschichte',title:'Von Muscheln bis Smartphones',preview:'4.000 Jahre Geldgeschichte.',body:`<div class="pc-vis-lbl">Zeitstrahl</div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--amber)"></div><div class="pc-tl-line"></div></div><div class="pc-tl-c"><div class="pc-tl-age">~2000 v. Chr.</div><div class="pc-tl-main">Muscheln &amp; Steine</div><div class="pc-tl-note">Erstes standardisiertes „Geld" — selten, tragbar, schwer zu fälschen</div></div></div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--amber)"></div><div class="pc-tl-line"></div></div><div class="pc-tl-c"><div class="pc-tl-age">~600 v. Chr.</div><div class="pc-tl-main">Metallmünzen</div><div class="pc-tl-note">Staaten prägten Münzen — offizielle Wertgarantie</div></div></div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--amber)"></div><div class="pc-tl-line"></div></div><div class="pc-tl-c"><div class="pc-tl-age">~1000 n. Chr.</div><div class="pc-tl-main">Papiergeld</div><div class="pc-tl-note">China zuerst — viel leichter als Münzen, durch Goldreserven gedeckt</div></div></div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--blue)"></div></div><div class="pc-tl-c"><div class="pc-tl-age">Heute</div><div class="pc-tl-main">Digitales Geld</div><div class="pc-tl-note"><strong>~90 % allen Geldes existiert nur als Zahlen in Computern</strong></div></div></div>`},
          {tag:'Die 3 Funktionen',title:'Die drei Aufgaben des Geldes',preview:'Jede Form von Geld erfüllt diese drei Rollen.',body:`<div class="pc-vis-lbl">Die drei Funktionen</div><div style="display:flex;flex-direction:column;gap:7px"><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">1</div><div><strong>Tauschmittel</strong> — überall als Zahlungsmittel akzeptiert. Ermöglicht Handel zwischen Fremden.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">2</div><div><strong>Wertaufbewahrung</strong> — heute sparen, nächstes Jahr ausgeben. Anders als Fisch fault Geld nicht.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">3</div><div><strong>Recheneinheit</strong> — gibt allem einen vergleichbaren Preis. Wie würdest du sonst einen Haarschnitt mit einer Pizza vergleichen?</div></div></div>`},
        ]
      },
      {
        phase:'Kontext',
        title:'Was bedeutet das im echten Leben?',
        text:'Die meisten Menschen denken nie darüber nach, was Geld wirklich ist. Sie benutzen es einfach. Aber das Grundverständnis verändert, wie du über Sparen, Inflation und sogar Krypto denkst.',
        cards:[
          {tag:'Inflation',title:'Wenn Geld an Wert verliert',preview:'Warum CHF 100 heute mehr kauft als CHF 100 in 10 Jahren.',body:'Inflation bedeutet, dass Preise im Laufe der Zeit steigen — dein Geld kauft also weniger. Bei 3 % Inflation pro Jahr kostet etwas, das heute CHF 100 kostet, in 10 Jahren CHF 134. <strong>Die Kaufkraft deines Geldes sinkt</strong>, auch wenn die Zahl auf deinem Konto gleich bleibt. Deshalb ist es riskant, grosse Bargeldmengen langfristig zu halten.'},
          {tag:'Vertrauen',title:'Geld funktioniert nur, weil wir daran glauben',preview:'Das eigentliche Fundament jeder Währung.',body:'Papiergeld hat keinen inneren Wert. Ein CHF-100-Schein ist nur Papier und Druckfarbe. Er funktioniert nur, weil <strong>alle einig sind, dass er Wert hat</strong>. Wenn dieses Vertrauen bricht — wie bei der Hyperinflation (Deutschland 1923, Simbabwe 2008) — kollabiert die Währung. Deshalb arbeiten Regierungen so hart daran, die Inflation niedrig zu halten.'},
        ]
      },
      {
        phase:'Erkenntnisse',
        title:'Drei Dinge zum Merken',
        text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Geld ist ein Werkzeug, kein Ziel',preview:'Es geht darum, was es ermöglicht — nicht um die Zahl selbst.',body:'Geld hat keinen Eigenwert. Sein Wert liegt einzig in dem, was es ermöglicht: Sicherheit, Optionen, Erfahrungen, Freiheit. Wer die Zahl als Ziel betrachtet, verpasst den eigentlichen Punkt. Das Ziel ist ein gutes Leben — Geld ist nur ein Mittel dazu.'},
          {tag:'Erkenntnis 2',title:'Inflation nagt still an Ersparnissen',preview:'Nichts mit Geld zu tun ist nicht neutral.',body:'Wenn dein Sparkonto 0 % bringt und die Inflation 2 % beträgt, verlierst du jedes Jahr 2 % reale Kaufkraft. <strong>Nichts zu tun ist kein sicherer Standard</strong> — es ist ein schleichender Verlust. Deshalb sind Investieren und Renditen erzielen so wichtig.'},
          {tag:'Erkenntnis 3 — Kern',title:'Geld basiert auf kollektivem Glauben',preview:'Es funktioniert, weil alle so handeln, als ob es funktioniert.',body:'Die tiefste Erkenntnis über Geld: Es ist eine kollektive Fiktion, die funktioniert, weil wir alle mitspielen. Gold, Papier oder digital — nichts davon hat einen inneren Wert. <strong>Das System funktioniert durch Vertrauen.</strong> Das erklärt alles: von Bank-Runs bis zu Krypto bis zu Hyperinflation.'},
        ]
      }
    ],
    vocab:[
      {term:"Tauschhandel",def:"Direkter Austausch von Waren oder Dienstleistungen ohne Geld. Das ursprüngliche Handelssystem — beide Seiten mussten gleichzeitig genau das wollen, was die andere hatte."},
      {term:"Währung",def:"Das Geldsystem, das in einem Land verwendet wird. Es funktioniert nur, weil alle einig sind, dass es Wert hat — dieser gemeinsame Glaube macht es real."},
      {term:"Tauschmittel",def:"Etwas, das von allen als Zahlungsmittel akzeptiert wird. Die wichtigste Aufgabe des Geldes — es macht Handel zwischen beliebigen Menschen möglich."},
      {term:"Wertaufbewahrungsmittel",def:"Ein Vermögenswert, der seinen Wert über die Zeit hält. Geld ermöglicht es dir, heute zu verdienen und Monate später auszugeben — anders als Fisch, der verrottet."},
      {term:"Inflation",def:"Wenn Preise im Laufe der Zeit steigen und dein Geld weniger kauft. Eine stille Steuer auf Ersparnisse — CHF 100 heute kauft mehr als CHF 100 in 10 Jahren."},
    ],
    quiz:[
      {q:"Was ist das Hauptproblem beim Tauschhandel?",options:["Er ist zu langsam","Man braucht einen doppelten Bedarfszufall","Niemand will tauschen","Er funktioniert nur mit Lebensmitteln"],correct:1,explain:"Tauschhandel erfordert, dass beide Seiten gleichzeitig genau das wollen, was die andere hat. In grossem Massstab kaum umsetzbar."},
      {q:"Was ist KEINE Funktion des Geldes?",options:["Tauschmittel","Wertaufbewahrung","Quelle des Glücks","Recheneinheit"],correct:2,explain:"Geld hat drei offizielle Funktionen: Tauschmittel, Wertaufbewahrung und Recheneinheit. Glück gehört nicht dazu."},
      {q:"Ungefähr wie viel Prozent des globalen Geldes existiert nur digital?",options:["10 %","40 %","70 %","90 %"],correct:3,explain:"Rund 90 % des globalen Geldes ist digital — nur Zahlen in Computersystemen. Bargeld ist die Minderheit."},
      {q:"Wenn Preise steigen, dein Lohn aber gleich bleibt, dann...",options:["bleibt deine Kaufkraft gleich","steigt deine Kaufkraft","sinkt deine Kaufkraft","verdoppelt sich deine Kaufkraft"],correct:2,explain:"Das ist Inflation. Wenn Preise steigen, aber das Einkommen nicht, kauft dein Geld weniger. Dein realer Wohlstand schrumpft."},
      {q:"'Recheneinheit' bedeutet, dass Geld verwendet wird, um...",options:["Freunde zu zählen","allem einen vergleichbaren Preis zu geben","Bankkonten zu eröffnen","Steuern zu zahlen"],correct:1,explain:"Recheneinheit gibt uns eine gemeinsame Sprache für Wert. Ohne sie — wie würdest du einen Haarschnitt mit einer Pizza vergleichen?"},
    ]
  },

  {
    id:2,
    title:"Zinseszins",
    subtitle:"Die stille Kraft, die deinen Wohlstand aufbaut — oder zerstört",
    lesson:[
      {
        phase:'Erklärung',
        title:'Was ist Zinseszins?',
        text:'Du legst Geld auf ein Sparkonto. Die Bank zahlt dir 8 % pro Jahr auf CHF 1.000 — das sind CHF 80. Einfach genug. Jetzt die entscheidende Frage: <strong>Wohin gehen diese CHF 80?</strong>',
        def:{label:'Definition',text:'Zinseszins: Zinsen auf den Ursprungsbetrag UND alle bereits verdienten Zinsen. Dein Geld verdient Geld auf sich selbst.'},
        cards:[
          {tag:'Einfacher Zins',title:'Immer vom Ursprungsbetrag',preview:'CHF 80 bleiben getrennt. Nächstes Jahr, gleiche Rechnung.',body:'Mit einfachem Zins liegen deine CHF 80 separat. Jedes Jahr: 8 % von CHF 1.000 = genau <strong>CHF 80</strong>. Nach 30 Jahren: CHF 2.400 verdient. Linear. Vorhersehbar. Aber begrenzt — die Basis wächst nie.'},
          {tag:'Zinseszins',title:'Vom wachsenden Gesamtbetrag',preview:'CHF 80 kommen zur Basis hinzu. Die Basis wächst jedes Jahr.',body:'Mit Zinseszins werden die CHF 80 zu deinen CHF 1.000 addiert. Jahr 2: 8 % auf CHF 1.080 = CHF 86. Jahr 3: 8 % auf CHF 1.166 = CHF 93. <strong>Jedes Jahr wächst die Basis</strong>, also ist der Zins jedes Jahr etwas höher. Das ist der Schneeballeffekt.'},
        ]
      },
      {
        phase:'Vertiefung',
        title:'Wie schnell wächst es wirklich?',
        text:'Die Formel lautet <strong>A = P × (1 + r)^t</strong>. P = Kapital, r = Zinssatz, t = Jahre. Die Zahlen überzeugen mehr als die Formel.',
        cards:[
          {tag:'Vergleich',title:'Einfach vs. Zinseszins — direkt verglichen',preview:'So entwickeln sich die zwei Methoden über 30 Jahre.',body:`<div class="pc-vis-lbl">Gesamtzinsen — CHF 1.000 bei 10 %</div><div class="pc-compare"><div class="pc-col"><div class="pc-col-title">Einfach</div><div class="pc-row"><span class="pc-muted">Jahr 5</span><span class="pc-blue">+500</span></div><div class="pc-row"><span class="pc-muted">Jahr 10</span><span class="pc-blue">+1.000</span></div><div class="pc-row"><span class="pc-muted">Jahr 20</span><span class="pc-blue">+2.000</span></div><div class="pc-row"><span class="pc-muted">Jahr 30</span><span class="pc-blue">+3.000</span></div></div><div class="pc-col"><div class="pc-col-title">Zinseszins</div><div class="pc-row"><span class="pc-muted">Jahr 5</span><span class="pc-green">+611</span></div><div class="pc-row"><span class="pc-muted">Jahr 10</span><span class="pc-green">+1.594</span></div><div class="pc-row"><span class="pc-muted">Jahr 20</span><span class="pc-green">+5.727</span></div><div class="pc-row"><span class="pc-muted">Jahr 30</span><span class="pc-green">+16.449</span></div></div></div>`},
          {tag:'Rechner',title:'Probier es selbst aus',preview:'Schieberegler verstellen — Geld in Echtzeit wachsen sehen.',body:`<div class="pc-slider-row"><div class="pc-sl-label"><span>Startbetrag</span><span class="pc-sl-val" id="pv2">CHF 1.000</span></div><input type="range" id="sp2" min="100" max="10000" step="100" value="1000" oninput="updCalc()"></div><div class="pc-slider-row"><div class="pc-sl-label"><span>Jahreszins</span><span class="pc-sl-val" id="rv2">8%</span></div><input type="range" id="sr2" min="1" max="20" step="1" value="8" oninput="updCalc()"></div><div class="pc-slider-row"><div class="pc-sl-label"><span>Jahre</span><span class="pc-sl-val" id="tv2">20</span></div><input type="range" id="st2" min="1" max="40" step="1" value="20" oninput="updCalc()"></div><div class="pc-result-grid"><div class="pc-rc"><div class="pc-rc-lbl">Eingesetzt</div><div class="pc-rc-val" id="inv2">CHF 1.000</div></div><div class="pc-rc"><div class="pc-rc-lbl">Guthaben</div><div class="pc-rc-val g" id="fin2">CHF 4.661</div></div><div class="pc-rc"><div class="pc-rc-lbl">Ertrag</div><div class="pc-rc-val g" id="ear2">CHF 3.661</div></div></div><div class="pc-bars" id="calcbars" style="height:80px"></div><script>function updCalc(){const P=+document.getElementById('sp2').value,r=+document.getElementById('sr2').value/100,t=+document.getElementById('st2').value;document.getElementById('pv2').textContent='CHF '+P.toLocaleString();document.getElementById('rv2').textContent=Math.round(r*100)+'%';document.getElementById('tv2').textContent=t;const fin=Math.round(P*Math.pow(1+r,t));document.getElementById('inv2').textContent='CHF '+P.toLocaleString();document.getElementById('fin2').textContent='CHF '+fin.toLocaleString();document.getElementById('ear2').textContent='CHF '+(fin-P).toLocaleString();const steps=Math.min(7,t),iv=Math.max(1,Math.floor(t/steps)),data=[];for(let i=iv;i<=t;i+=iv)data.push({y:i,v:Math.round(P*Math.pow(1+r,i))});if(data[data.length-1].y!==t)data.push({y:t,v:fin});const max=fin;document.getElementById('calcbars').innerHTML=data.map(d=>{const h=Math.max(6,Math.round((d.v/max)*72)),lbl=d.v>=10000?Math.round(d.v/1000)+'k':d.v>=1000?(d.v/1000).toFixed(1)+'k':d.v;return'<div class="pc-bar-col"><div class="pc-bar-fill" style="height:'+h+'px;background:var(--blue)"><span class="pc-bar-val">'+lbl+'</span></div><div class="pc-bar-year">J '+d.y+'</div></div>'}).join('');}setTimeout(updCalc,50);<\/script>`},
        ]
      },
      {
        phase:'Kontext',
        title:'Was bedeutet das im echten Leben?',
        text:'Zinseszins taucht überall auf — er lässt Ersparnisse wachsen, wenn du investierst, und Schulden wachsen, wenn du leihst.',
        cards:[
          {tag:'Sparen',title:'Früh starten vs. spät starten',preview:'10 Jahre Vorsprung = fast doppeltes Ergebnis mit 60.',body:`<div class="pc-vis-lbl">Alex (Start mit 17) vs. Jordan (Start mit 27) — CHF 200/Monat bei 7 %</div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--blue)"></div><div class="pc-tl-line"></div></div><div class="pc-tl-c"><div class="pc-tl-age">Alter 17</div><div class="pc-tl-main">Alex beginnt CHF 200/Monat zu sparen</div></div></div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--amber)"></div><div class="pc-tl-line"></div></div><div class="pc-tl-c"><div class="pc-tl-age">Alter 27</div><div class="pc-tl-main">Jordan startet — gleiche CHF 200/Monat</div><div class="pc-tl-note">Gleicher Betrag. Gleicher Zinssatz. 10 Jahre später.</div></div></div><div class="pc-tl-item"><div class="pc-tl-left"><div class="pc-tl-dot" style="background:var(--green)"></div></div><div class="pc-tl-c"><div class="pc-tl-age">Alter 60</div><div class="pc-tl-main">Alex ~CHF 680k · Jordan ~CHF 370k</div><div class="pc-tl-note" style="color:var(--green);font-weight:600">CHF 310k mehr — nur durch 10 Extrajahre.</div></div></div>`},
          {tag:'Schulden',title:'Wenn es gegen dich arbeitet',preview:'20 % Jahreszins: CHF 1.000 werden zu CHF 2.500 in 5 Jahren.',body:'Pay credit cards <strong>immer vollständig bezahlen</strong>. Dieselbe Kraft, die Ersparnisse aufbaut, kann Finanzen zerstören, wenn sie in die andere Richtung läuft.'},
        ]
      },
      {
        phase:'Erkenntnisse',
        title:'Drei Dinge zum Merken',
        text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Zinseszins schlägt einfachen Zins — mit der Zeit',preview:'Der Unterschied beginnt klein und wird riesig.',body:'Im ersten Jahr ist der Unterschied fast nichts. Nach 30 Jahren hat Zinseszins das Fünffache des einfachen Zinses erzielt. Das ist kein marginaler Vorteil.'},
          {tag:'Erkenntnis 2',title:'Schulden wachsen genauso stark',preview:'Der Mechanismus ist neutral — die Richtung ist entscheidend.',body:'Eine Kreditkarte mit 20 % Zinsen nutzt exakt dieselbe Mathematik wie ein Sparkonto. <strong>Die Kraft ist neutral.</strong> Ob sie deine Finanzen aufbaut oder zerstört, hängt ausschliesslich davon ab, auf welcher Seite du stehst.'},
          {tag:'Erkenntnis 3 — Kern',title:'Verlorene Zeit lässt sich nicht zurückkaufen',preview:'10 Jahre früher starten schlägt mehr investieren — immer.',body:'Du kannst verlorene Zeit nicht durch mehr Geld kompensieren. Jedes Jahr, das du wartest, kostet mehr als das Jahr davor. <strong>Jetzt starten, mit jedem Betrag.</strong>'},
        ]
      }
    ],
    vocab:[
      {term:"Kapital",def:"Der ursprüngliche Geldbetrag, der gespart oder investiert wird, bevor Zinsen hinzukommen. Dein Ausgangspunkt — alles wächst von hier aus."},
      {term:"Zinssatz",def:"Der Prozentsatz des Kapitals, der pro Jahr gezahlt oder berechnet wird. 7 % auf CHF 1.000 bedeutet CHF 70 pro Jahr im einfachen Zinsmodell."},
      {term:"Zinseszins",def:"Zinsen auf Kapital UND auf bereits verdiente Zinsen. Das erzeugt exponentielles — kein lineares — Wachstum über die Zeit."},
      {term:"Einfacher Zins",def:"Zinsen nur auf das ursprüngliche Kapital. CHF 1.000 bei 10 % bringt immer CHF 100 pro Jahr — nicht mehr, nicht weniger."},
      {term:"Zeitwert des Geldes",def:"Geld jetzt ist mehr wert als derselbe Betrag später — weil heutiges Geld investiert und wachsen kann. Ein Grundkonzept der gesamten Finanzwelt."},
    ],
    quiz:[
      {q:"Was unterscheidet Zinseszins vom einfachen Zins?",options:["Schneller zu berechnen","Zinsen werden auf Zinsen verdient","Gilt nur für Kredite","Immer niedriger"],correct:1,explain:"Zinseszins verdient Zinsen auf bereits angesammelte Zinsen, nicht nur auf das Kapital. Das erzeugt exponentielles Wachstum."},
      {q:"CHF 500 bei 10 % einfachem Zins für 2 Jahre. Wie viel Zins?",options:["CHF 50","CHF 100","CHF 105","CHF 110"],correct:1,explain:"CHF 500 × 10 % = CHF 50 pro Jahr. Über 2 Jahre = CHF 100."},
      {q:"Warum ist früh starten beim Zinseszins so wichtig?",options:["Zinssätze sind in jungen Jahren höher","Zeit multipliziert den Zinseszinseffekt","Gesetzlich vorgeschrieben","Inflation gilt dann nicht"],correct:1,explain:"Jedes zusätzliche Jahr Zinseszins fügt eine multiplizierte Schicht hinzu. Zeit ist die mächtigste Variable."},
      {q:"Zinseszins schadet dir, wenn...",options:["du Ersparnisse hast","du hochverzinste Schulden hast","Zinssätze niedrig sind","du in Aktien investierst"],correct:1,explain:"Kreditkartenschulden bei 20 %+ wachsen gegen dich. Dieselbe Kraft, die Ersparnisse wachsen lässt, lässt Schulden genauso schnell wachsen."},
      {q:"Zinseszinsfrequenz bedeutet...",options:["wie oft du dein Guthaben prüfst","wie oft Zinsen deinem Konto gutgeschrieben werden","Anzahl der Bankkonten","deine monatliche Sparrate"],correct:1,explain:"Häufigerer Zinseszins = etwas mehr Wachstum. Täglich schlägt monatlich, monatlich schlägt jährlich."},
    ]
  },

  {
    id:3,
    title:"Einkommen & Verdienen",
    subtitle:"Woher Geld kommt — und wie du mehr davon bekommst",
    lesson:[
      {
        phase:'Erklärung',
        title:'Woher kommt Geld?',
        text:'Bevor du sparen, investieren oder klug ausgeben kannst, brauchst du Einkommen. Aber Einkommen ist nicht nur ein Gehalt. Verschiedene Einkommensarten zu verstehen verändert, wie du über Arbeit selbst denkst.',
        def:{label:'Definition',text:'Einkommen: Geld, das man als Gegenleistung für Arbeit, Dienstleistungen oder Vermögenswerte erhält. Es gibt zwei grundlegend verschiedene Formen — und der Unterschied ist enorm.'},
        cards:[
          {tag:'Aktives Einkommen',title:'Geld für deine Zeit',preview:'Du arbeitest → du verdienst. Du hörst auf → es hört auf.',body:'Aktives Einkommen ist direkt an deine Zeit und Mühe gebunden. Ein Job, Freelancing, Nachhilfe — <strong>sobald du aufhörst, hört das Geld auf</strong>. So fangen die meisten an, und das ist völlig in Ordnung. Aber es hat eine Obergrenze: Du hast nur 24 Stunden am Tag.'},
          {tag:'Passives Einkommen',title:'Geld, das ohne dich fliesst',preview:'Einmal aufgebaut — verdient es, während du schläfst.',body:'Passives Einkommen fliesst, ohne dass du aktiv Zeit dafür tauschst. Mieteinnahmen, Aktiendividenden, App-Erlöse, Lizenzgebühren. <strong>Es aufzubauen erfordert Vorarbeit oder Kapital</strong> — es ist keine Magie. Aber einmal aufgebaut, kann es sich wie Zinsen ansammeln.'},
        ]
      },
      {
        phase:'Vertiefung',
        title:'Brutto vs. Netto — was ist die echte Zahl?',
        text:'Die meisten kennen ihr Bruttoeinkommen. Weit weniger planen tatsächlich vom Netto aus. Dieser eine Fehler verursacht enorme Verwirrung.',
        def:{label:'Wichtiger Unterschied',text:'Bruttoeinkommen = was du verdienst, bevor Steuern abgezogen werden. Nettoeinkommen = was tatsächlich auf deinem Konto landet. Immer vom Netto aus planen.'},
        cards:[
          {tag:'Beispiel',title:'Der Unterschied in der Praxis',preview:'Warum die Zahl im Vertrag nicht dein echtes Einkommen ist.',body:`<div class="pc-vis-lbl">Beispiel: CHF 4.000/Monat brutto</div><div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">1</div><div>Bruttogehalt: <strong>CHF 4.000</strong></div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">2</div><div>Steuern + Sozialabgaben: <strong style="color:var(--red)">- CHF 800</strong></div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">3</div><div>Nettoeinkommen (echte Zahl): <strong style="color:var(--green)">CHF 3.200</strong></div></div></div>Budget von CHF 3.200 aus — nicht CHF 4.000.`},
          {tag:'Einkommen steigern',title:'Vier bewährte Hebel',preview:'Was die Zahl tatsächlich nach oben bewegt.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">1</div><div><strong>Wertvolle Fähigkeiten aufbauen</strong> — wertvollere Fähigkeiten = höhere Einkommensobergrenze.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">2</div><div><strong>Verhandeln</strong> — die meisten fragen nie. Wer fragt, bekommt es oft.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">3</div><div><strong>Quellen diversifizieren</strong> — Nebenprojekte, Freelance, Investieren.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">4</div><div><strong>Langfristig denken</strong> — Bildung zahlt sich über 20–40 Jahre aus.</div></div></div>`},
        ]
      },
      {
        phase:'Kontext',
        title:'Wie sieht Einkommen im echten Leben aus?',
        text:'Die meisten beginnen mit 100 % aktivem Einkommen und bauen über die Zeit schrittweise passive Quellen auf.',
        cards:[
          {tag:'Realitäts-Check',title:'Das 90-%-Problem',preview:'Fast alle verlassen sich vollständig auf eine Einkommensquelle.',body:'90 % der Menschen verlassen sich fast ausschliesslich auf einen aktiven Einkommensstrom. Das bedeutet: Job verlieren, alles verlieren. <strong>Diversifizierung geht nicht nur ums Mehr-verdienen — es geht um Stabilität.</strong>'},
          {tag:'Einkommensarten',title:'Aktiv vs. passiv — Beispiele',preview:'Wo jede Art im echten Leben auftaucht.',body:`<div class="pc-compare"><div class="pc-col"><div class="pc-col-title">Aktiv</div><div class="pc-row"><span class="pc-muted">Gehalt/Lohn</span></div><div class="pc-row"><span class="pc-muted">Freelance</span></div><div class="pc-row"><span class="pc-muted">Nachhilfe</span></div></div><div class="pc-col"><div class="pc-col-title">Passiv</div><div class="pc-row"><span class="pc-muted">Mieteinnahmen</span></div><div class="pc-row"><span class="pc-muted">Aktiendividenden</span></div><div class="pc-row"><span class="pc-muted">Apps/digitale Produkte</span></div></div></div>`},
        ]
      },
      {
        phase:'Erkenntnisse',
        title:'Drei Dinge zum Merken',
        text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Immer vom Netto planen',preview:'Die Zahl im Vertrag ist nicht dein echtes Einkommen.',body:'Bruttoeinkommen ist ein Ausgangspunkt. Nettoeinkommen ist die Realität. Wer vom Brutto plant, wird sich ständig fragen, warum es nicht reicht.'},
          {tag:'Erkenntnis 2',title:'Aktives Einkommen hat eine Obergrenze',preview:'Du hast nur 24 Stunden.',body:'Egal wie hart du arbeitest, aktives Einkommen ist durch deine Zeit begrenzt. Die einzige Möglichkeit, diese Decke zu durchbrechen, ist Einkommen aufzubauen, das deine Zeit nicht braucht.'},
          {tag:'Erkenntnis 3 — Kern',title:'Diversifizierung reduziert Risiko',preview:'Mehrere Quellen = Sicherheit, nicht nur Wachstum.',body:'Ein zweiter Einkommensstrom bringt nicht nur mehr Geld — er bedeutet, dass der Verlust eines Stroms verkraftbar ist. <strong>Sicherheit entsteht durch Optionen.</strong>'},
        ]
      }
    ],
    vocab:[
      {term:"Aktives Einkommen",def:"Geld, das direkt durch Arbeit verdient wird — es stoppt, wenn du aufhörst. Jobs, Freelancing, Nachhilfe."},
      {term:"Passives Einkommen",def:"Geld, das mit minimalem laufendem Aufwand verdient wird. Miete, Dividenden, Lizenzgebühren — es fliesst auch wenn du schläfst."},
      {term:"Bruttoeinkommen",def:"Gesamteinkommen vor Steuern oder Abzügen. Die Zahl im Vertrag — nicht die Zahl, die auf deinem Konto landet."},
      {term:"Nettoeinkommen",def:"Nettolohn nach allen Steuern und Abzügen. Deine echte Zahl — immer davon budgetieren, nie vom Brutto."},
      {term:"Diversifizierung",def:"Einkommen auf mehrere Quellen verteilen. Wenn eine wegfällt, fliessen andere weiter. Reduziert das finanzielle Risiko erheblich."},
    ],
    quiz:[
      {q:"Was ist aktives Einkommen?",options:["Geld aus Investitionen","Geld, das durch Tausch von Zeit gegen Arbeit verdient wird","Mietgewinne","Lottogewinne"],correct:1,explain:"Aktives Einkommen ist direkt an deine Zeit und Mühe gebunden. Wenn du aufhörst zu arbeiten, hört es auf zu kommen."},
      {q:"Du verdienst CHF 3.000/Monat und zahlst CHF 800 Steuern. Nettoeinkommen?",options:["CHF 3.000","CHF 2.200","CHF 800","CHF 3.800"],correct:1,explain:"CHF 3.000 - CHF 800 = CHF 2.200. Nettoeinkommen ist, was du wirklich mitnimmst."},
      {q:"Was ist passives Einkommen?",options:["Als Kellner arbeiten","9-to-5-Job","Miete von einer Immobilie erhalten","Klavierunterricht geben"],correct:2,explain:"Mieteinnahmen fliessen unabhängig davon, ob du arbeitest oder nicht."},
      {q:"Warum Einkommensquellen diversifizieren?",options:["Gesetzlich vorgeschrieben","Reduziert Risiko, wenn eine Quelle wegfällt","Verdient immer mehr","Banken verlangen es"],correct:1,explain:"Wenn dein einziger Strom wegfällt, bedeutet Diversifizierung, dass andere Quellen weiter fliessen."},
      {q:"Wichtigster Grund, Brutto vs. Netto zu kennen?",options:["Deinen Arbeitgeber beeindrucken","Vom tatsächlich erhaltenen Geld budgetieren","Passives Einkommen berechnen","Banken verlangen es"],correct:1,explain:"Nettoeinkommen ist deine echte, verfügbare Zahl. Viele planen vom Brutto und fragen sich warum es nicht klappt."},
    ]
  },

  // ── UNIT 2 ──────────────────────────────────────────────────────────
  {
    id:4,
    title:"Budgetierung",
    subtitle:"Sag deinem Geld, wohin es gehen soll — bevor es verschwindet",
    lesson:[
      {phase:'Erklärung',title:'Was ist ein Budget — und warum ist es wichtig?',text:'Ein Budget ist keine Einschränkung. Es ist ein Plan. Die meisten, die sich Dinge „nicht leisten können", haben kein Einkommensproblem — sie haben ein Nachverfolgungsproblem.',
        def:{label:'Definition',text:'Budget: ein Plan, der jedem Franken einen Zweck gibt, bevor er ausgegeben wird. Es schafft Absicht — das Gegenteil von „Wo ist mein Geld am Monatsende hin?"'},
        cards:[
          {tag:'Das Kernproblem',title:'Geld verschwindet ohne Plan',preview:'Die meisten sind schockiert, wenn sie zum ersten Mal tracken.',body:'Der Durchschnittsmensch weiss nicht, wohin 20–30 % seines Einkommens gehen. Kleine Käufe — Kaffee, Apps, Impulskäufe — summieren sich auf Hunderte pro Monat. <strong>Du kannst nicht beheben, was du nicht siehst.</strong>'},
          {tag:'Die 50/30/20-Regel',title:'Ein einfaches Startgerüst',preview:'Bedürfnisse · Wünsche · Sparen.',body:`<div style="display:flex;flex-direction:column;gap:7px"><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">50%</div><div><strong>Bedürfnisse</strong> — Miete, Lebensmittel, Transport, Versicherung. Was du zahlen musst.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">30%</div><div><strong>Wünsche</strong> — Auswärts essen, Abonnements, Hobbys. Optional.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">20%</div><div><strong>Sparen &amp; Investieren</strong> — das Geld deines zukünftigen Ichs. Zuerst einzahlen, nicht zuletzt.</div></div></div>`},
        ]},
      {phase:'Vertiefung',title:'Wie funktionieren die verschiedenen Budgetierungsmethoden?',text:'Es gibt kein einziges „richtiges" Budgetsystem. Was zählt ist, dass du eine konsequent anwendest.',
        cards:[
          {tag:'Null-Basis-Budgetierung',title:'Jeder Franken bekommt eine Aufgabe',preview:'Einkommen minus alle Zuweisungen = null.',body:'Zero-Based Budgeting bedeutet, jedem Franken einen Zweck zuzuweisen, bis Einkommen minus aller Zuweisungen null ergibt. <strong>Nichts bleibt unzugewiesen.</strong> Gut für Menschen, die totale Kontrolle wollen.'},
          {tag:'Erst dich bezahlen',title:'Sparen, bevor du ausgeben kannst',preview:'Behandle Ersparnisse wie eine feste Rechnung.',body:'Die wirkungsvollste einzelne Gewohnheit: Geld auf Sparen umbuchen <strong>bevor</strong> du irgendetwas anderes ausgibst. Automatisieren — es passiert am Zahltag. Du siehst das Geld nie, du vermisst es nie.'},
        ]},
      {phase:'Kontext',title:'Wie sieht Budgetieren in der Praxis aus?',text:'Fixkosten sind vorhersehbar, aber bei variablen Kosten geben die meisten Menschen konsequent zu viel aus.',
        cards:[
          {tag:'Fix vs. variabel',title:'Die zwei Arten von Ausgaben',preview:'Eine bleibt gleich, eine ändert sich jeden Monat.',body:`<div class="pc-compare"><div class="pc-col"><div class="pc-col-title">Fix</div><div class="pc-row"><span class="pc-muted">Miete</span><span class="pc-blue">Gleich</span></div><div class="pc-row"><span class="pc-muted">Versicherung</span><span class="pc-blue">Gleich</span></div></div><div class="pc-col"><div class="pc-col-title">Variabel</div><div class="pc-row"><span class="pc-muted">Lebensmittel</span><span class="pc-red">Variiert</span></div><div class="pc-row"><span class="pc-muted">Auswärts essen</span><span class="pc-red">Variiert</span></div></div></div>`},
          {tag:'Echtes Beispiel',title:'CHF 3.000 netto — 50/30/20 angewendet',preview:'So sieht das in Zahlen aus.',body:`<div style="display:flex;flex-direction:column;gap:5px;font-size:.82rem"><div class="pc-row"><span class="pc-muted">Miete</span><span>CHF 900</span></div><div class="pc-row"><span class="pc-muted">Lebensmittel</span><span>CHF 300</span></div><div class="pc-row"><span class="pc-muted">→ Bedürfnisse</span><span class="pc-blue">CHF 1.350 (45 %)</span></div><div class="pc-row"><span class="pc-muted">→ Wünsche</span><span class="pc-blue">CHF 600 (20 %)</span></div><div class="pc-row"><span class="pc-muted">Ersparnisse</span><span class="pc-green">CHF 600 (20 %)</span></div></div>`},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Tracken ist mächtiger als einschränken',preview:'Erst sehen, dann entscheiden was zu ändern ist.',body:'Fang nicht damit an, Dinge zu kürzen. Fang damit an, alles einen Monat lang zu tracken. Die Daten zeigen dir, wo zu kürzen ist.'},
          {tag:'Erkenntnis 2',title:'Sparen muss zuerst kommen, nicht zuletzt',preview:'Wenn du sparst, was übrig ist, bleibt nichts übrig.',body:'Wenn du wartest, „was am Monatsende übrig ist" zu sparen, wirst du fast nichts sparen. <strong>Sparen am Zahltag automatisieren.</strong>'},
          {tag:'Erkenntnis 3 — Kern',title:'Das Werkzeug ist weniger wichtig als die Gewohnheit',preview:'Jedes System, das du wirklich nutzt, schlägt ein perfektes, das du nicht nutzt.',body:'Tabelle, App, Notizbuch — nichts davon spielt eine Rolle, solange du es wirklich machst. Ein einfaches System, das du seit 5 Jahren nutzt, ist Gold.'},
        ]}
    ],
    vocab:[
      {term:"Budget",def:"Ein Plan, wie du dein Geld über einen bestimmten Zeitraum ausgeben und sparen wirst. Ein Budget schränkt Freiheit nicht ein — es schafft sie."},
      {term:"50/30/20-Regel",def:"Ein einfaches Budgetierungsgerüst: 50 % für Bedürfnisse, 30 % für Wünsche, 20 % für Sparen und Investieren."},
      {term:"Fixkosten",def:"Kosten, die jeden Monat gleich bleiben — Miete, Versicherung, Abonnements. Leicht zu planen."},
      {term:"Variable Kosten",def:"Kosten, die sich von Monat zu Monat ändern — Essen, Unterhaltung, Kleidung. Hier geben die meisten Menschen zu viel aus."},
      {term:"Erst-dich-bezahlen",def:"Geld vor allem anderen auf Sparen umbuchen. Die wirkungsvollste Spargewohnheit."},
    ],
    quiz:[
      {q:"Was steht bei 50/30/20 für die 20 %?",options:["Lebensmittel und Transport","Unterhaltung","Sparen und Investieren","Miete"],correct:2,explain:"Die 20 % sind deine finanzielle Zukunft. Das wichtigste Stück."},
      {q:"Zero-Based Budgeting bedeutet...",options:["Kein Geld mehr zu haben","Jedem Franken einen Zweck zuweisen","Nichts sparen","Nur Notwendiges ausgeben"],correct:1,explain:"Jeder Franken hat eine Aufgabe, bis nichts mehr unzugewiesen ist. Einkommen minus alle geplanten Ausgaben = null."},
      {q:"Was ist eine variable Ausgabe?",options:["Monatliche Miete","Kfz-Versicherung","Wocheneinkauf","Netflix-Abo"],correct:2,explain:"Lebensmittel ändern sich jeden Monat. Miete und Abos sind fix."},
      {q:"'Erst dich bezahlen' bedeutet...",options:["Sich zuerst etwas gönnen","Sparen vor allem anderen","Investieren vor der Miete","Ein höheres Gehalt aushandeln"],correct:1,explain:"Ersparnisse wie eine Rechnung behandeln. Automatisch umbuchen, bevor man die Chance hat, es auszugeben."},
      {q:"Warum einen Monat lang alle Ausgaben tracken?",options:["Die Bank verlangt es","Um herauszufinden, wohin Geld wirklich geht","Um einen Kredit zu beantragen","Um Steuern zu berechnen"],correct:1,explain:"Die meisten sind schockiert von ihren Daten. Kleine tägliche Käufe summieren sich auf Hunderte."},
    ]
  },

  {
    id:5,
    title:"Banking & Konten",
    subtitle:"Wie Banken funktionieren — und wie du sie zu deinem Vorteil nutzt",
    lesson:[
      {phase:'Erklärung',title:'Wie funktionieren Banken eigentlich?',text:'Banken sind nicht nur sichere Orte, um Geld aufzubewahren. Das Geschäftsmodell zu verstehen verändert, wie du sie nutzt.',
        def:{label:'Das Geschäftsmodell',text:'Banken leihen sich Geld von Einlegern zu einem tiefen Zinssatz und verleihen es zu einem höheren. Die Differenz ist ihr Gewinn. Du bist ein Lieferant in diesem System.'},
        cards:[
          {tag:'Privatkonto',title:'Dein tägliches Zahlungskonto',preview:'Gehalt kommt hier an. Rechnungen werden hier bezahlt.',body:'Ein Privatkonto ist für tägliche Transaktionen — Gehalt, Rechnungen, Kartenzahlungen. <strong>Bringt meist keine Zinsen.</strong> Hier nur das halten, was du für die nächsten 1–2 Monate brauchst.'},
          {tag:'Sparkonto',title:'Wo brachliegendes Geld hingehört',preview:'Gleiche Bank, anderes Konto — aber es bringt Zinsen.',body:'Ein Sparkonto bringt Zinsen auf dein Guthaben. <strong>Zinssätze variieren enorm</strong> — der Unterschied zwischen 0,1 % und 2 % auf CHF 10.000 ist CHF 190 pro Jahr. Immer vergleichen.'},
        ]},
      {phase:'Vertiefung',title:'Welche verschiedenen Kontotypen gibt es?',text:'Jenseits von Privat- und Sparkonten gibt es Optionen, die mehr bringen — im Austausch gegen weniger Flexibilität.',
        cards:[
          {tag:'Festgeld',title:'Geld wegschliessen für bessere Zinsen',preview:'Höhere Zinsen. Kein Zugriff bis zum Laufzeitende.',body:'Festgeld bedeutet, du verpflichtest Geld für eine bestimmte Laufzeit — 3 Monate, 1 Jahr, 3 Jahre. Dafür zahlt die Bank einen höheren Zinssatz. <strong>Du kannst vor Laufzeitende nicht abheben</strong> ohne Strafgebühren.'},
          {tag:'Zinsvergleich',title:'Warum Zinssätze mehr ausmachen als du denkst',preview:'Gleiches Geld — sehr unterschiedliche Ergebnisse.',body:`<div class="pc-vis-lbl">CHF 10.000 — jährliche Zinsen</div><div class="pc-compare"><div class="pc-col"><div class="pc-col-title">Zinssatz</div><div class="pc-row"><span class="pc-muted">0,1 %</span><span class="pc-blue">CHF 10/Jahr</span></div><div class="pc-row"><span class="pc-muted">1,5 %</span><span class="pc-blue">CHF 150/Jahr</span></div><div class="pc-row"><span class="pc-muted">2,5 %</span><span class="pc-green">CHF 250/Jahr</span></div></div><div class="pc-col"><div class="pc-col-title">Über 10 Jahre</div><div class="pc-row"><span class="pc-muted">0,1 %</span><span class="pc-blue">CHF 100</span></div><div class="pc-row"><span class="pc-muted">1,5 %</span><span class="pc-blue">CHF 1.605</span></div><div class="pc-row"><span class="pc-muted">2,5 %</span><span class="pc-green">CHF 2.801</span></div></div></div>`},
        ]},
      {phase:'Kontext',title:'Banking in der Schweiz — was du wissen musst',text:'Die Schweiz hat spezifische Regeln und Optionen, die sich lohnen zu kennen.',
        cards:[
          {tag:'Schweizer Recht',title:'Einlagensicherung — CHF 100.000',preview:'Dein Geld ist geschützt, selbst wenn die Bank scheitert.',body:'In der Schweiz schützt die Einlagensicherung bis zu <strong>CHF 100.000 pro Bank</strong>. Scheitert eine Bank, bekommst du dein Geld bis zu dieser Grenze zurück.'},
          {tag:'Digitalbanken',title:'Neon, Yuh — lohnen sie sich?',preview:'Oft bessere Zinsen und niedrigere Gebühren.',body:'Digitalbanken (Neon, Yuh, Zak) bieten oft bessere Sparzinsen und keine monatlichen Gebühren. Sie sind reguliert und von derselben Einlagensicherung abgedeckt. <strong>Loyalität zu einer Bank, die dich nicht belohnt, ist reine Gewohnheit.</strong>'},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Privatkonten sind Werkzeuge, keine Sparkonten',preview:'Geld auf einem Privatkonto bringt fast nichts.',body:'Nur 1–2 Monate Ausgaben auf dem Privatkonto halten. Alles andere auf ein Sparkonto verschieben, das Zinsen bringt.'},
          {tag:'Erkenntnis 2',title:'Immer Zinssätze vergleichen',preview:'Banken konkurrieren um dein Geld — nutze das.',body:'Ein 5-minütiger Vergleich zweier Sparkonten kann dir Hunderte Franken pro Jahr extra einbringen. Loyalität wird nicht belohnt — nur Vergleichen.'},
          {tag:'Erkenntnis 3 — Kern',title:'Die Einlagensicherung ist dein Sicherheitsnetz',preview:'CHF 100k geschützt — aber nicht als Dauerplan.',body:'Zu wissen, dass dein Geld bis CHF 100k geschützt ist, gibt ein gutes Gefühl. Aber der Grossteil sollte investiert sein und wachsen. Die Garantie ist ein Boden, keine Decke.'},
        ]}
    ],
    vocab:[
      {term:"Privatkonto",def:"Dein tägliches Zahlungskonto. Geld rein, Geld raus. Bringt meist keine Zinsen — es ist ein Werkzeug, kein Sparvehikel."},
      {term:"Sparkonto",def:"Ein Konto, das Zinsen auf dein Guthaben bringt. Geld hier halten, das du in den nächsten Monaten nicht brauchst — und Zinssätze aggressiv vergleichen."},
      {term:"Zinssatz",def:"Der Prozentsatz, den eine Bank dir zahlt (Sparen) oder dir berechnet (Kredite) pro Jahr."},
      {term:"Einlagensicherung",def:"Staatlicher Schutz für Bankeinlagen bis zu einem bestimmten Betrag. In der Schweiz sind CHF 100.000 pro Bank garantiert."},
      {term:"Festgeld",def:"Geld für eine bestimmte Laufzeit wegschliessen im Austausch für einen höheren Zinssatz. Du verlierst den Zugriff — aber gewinnst Rendite."},
    ],
    quiz:[
      {q:"Wie verdienen Banken Geld?",options:["Nur durch monatliche Gebühren","Günstig leihen, teurer verleihen","Staatliche Finanzierung","Börse"],correct:1,explain:"Banken zahlen dir einen kleinen Zinssatz auf Einlagen und verleihen dieses Geld zu einem höheren Zinssatz."},
      {q:"Bestes Konto für tägliche Ausgaben?",options:["Festgeld","Sparkonto","Privat-/Girokonto","Anlagekonto"],correct:2,explain:"Ein Privatkonto wickelt tägliche Transaktionen ab."},
      {q:"Die Schweizer Einlagensicherung schützt bis...",options:["CHF 10.000","CHF 50.000","CHF 100.000","Unbegrenzt"],correct:2,explain:"Die Einlagensicherung schützt CHF 100.000 pro Bank."},
      {q:"Hauptvorteil von Festgeld gegenüber Sparkonto?",options:["Jederzeit abheben","Durch Versicherung geschützt","Typischerweise höherer Zinssatz","Kein Mindestguthaben"],correct:2,explain:"Du gibst Flexibilität für einen besseren Zinssatz auf."},
      {q:"CHF 20.000 bei 0,5 % jährlich — wie viel Zins?",options:["CHF 5","CHF 50","CHF 100","CHF 1.000"],correct:2,explain:"CHF 20.000 × 0,5 % = CHF 100 pro Jahr."},
    ]
  },

  {
    id:6,
    title:"Schulden & Kreditkarten",
    subtitle:"Wann Schulden sinnvoll sind — und wann sie dich zerstören",
    lesson:[
      {phase:'Erklärung',title:'Sind Schulden gut oder schlecht?',text:'Schulden haben einen schlechten Ruf — aber die Realität ist nuancierter. Die Frage ist: <strong>Was kostet mich das, und was bekomme ich dafür?</strong>',
        def:{label:'Wichtiger Unterschied',text:'Gute Schulden schaffen Wert, der die Kosten überwiegt. Schlechte Schulden finanzieren Konsum — der Gegenstand ist weg, bevor die Schulden abbezahlt sind.'},
        cards:[
          {tag:'Gute Schulden',title:'Kreditaufnahme, die Wert schafft',preview:'Die Rendite übersteigt die Kosten der Kreditaufnahme.',body:'Ein Studiendarlehen, das zu einer besser bezahlten Karriere führt. Eine Hypothek auf eine Immobilie, die an Wert gewinnt. <strong>Gute Schulden sind eine Investition</strong> — du leihst dir CHF X, und was du bekommst, ist mehr wert als CHF X plus Zinsen.'},
          {tag:'Schlechte Schulden',title:'Kreditaufnahme zum Konsumieren',preview:'Der Gegenstand ist weg. Die Schulden und Zinsen bleiben.',body:'Kreditkartenschulden für einen Urlaub oder Gadgets. <strong>Der konsumierte Gegenstand hat keinen bleibenden Wert</strong>, aber die Schulden wachsen gnadenlos gegen dich.'},
        ]},
      {phase:'Vertiefung',title:'Wie funktionieren Kreditkarten wirklich?',text:'Kreditkarten sind darauf ausgelegt, dich so lange wie möglich Mindestbeträge zahlen zu lassen. Richtig eingesetzt sind sie kostenlos. Sorglos eingesetzt sind sie verheerend.',
        cards:[
          {tag:'Die Mindestzahlungs-Falle',title:'Warum nur Minimum zahlen gefährlich ist',preview:'CHF 1.000 bei 15 % nur Minimum zahlen = 7+ Jahre.',body:`<div class="pc-vis-lbl">CHF 1.000 Schulden bei 20 % Jahreszins — nur Mindestbetrag</div><div class="pc-bars" style="height:80px"><div class="pc-bar-col"><div class="pc-bar-fill" style="height:32px;background:var(--red)"><span class="pc-bar-val">1k</span></div><div class="pc-bar-year">J 0</div></div><div class="pc-bar-col"><div class="pc-bar-fill" style="height:62px;background:var(--red)"><span class="pc-bar-val">1.9k</span></div><div class="pc-bar-year">J 4</div></div><div class="pc-bar-col"><div class="pc-bar-fill" style="height:80px;background:var(--red)"><span class="pc-bar-val">2.5k</span></div><div class="pc-bar-year">J 5</div></div></div>Zinseszins arbeitet hier gegen dich.`},
          {tag:'Der richtige Weg',title:'Immer vollständig bezahlen',preview:'So eingesetzt kosten Kreditkarten nichts.',body:'Vollständig monatlich bezahlt, kostet eine Kreditkarte <strong>genau null</strong> — und gibt dir Käuferschutz, Punkte, 30 Tage Zahlungsaufschub. Die Karte ist nicht das Problem. Den Saldo zu übertragen ist das Problem.'},
        ]},
      {phase:'Kontext',title:'Wie wirst du am schnellsten schuldenfrei?',text:'Zwei bewährte Strategien existieren für die Tilgung mehrerer Schulden.',
        cards:[
          {tag:'Avalanche-Methode',title:'Zuerst die höchste Rate angreifen',preview:'Mathematisch optimal — spart am meisten Geld.',body:`<div style="display:flex;flex-direction:column;gap:5px;font-size:.82rem;margin-bottom:.75rem"><div class="pc-row"><span>Kreditkarte (22 %)</span><span class="pc-red">Zuerst angreifen</span></div><div class="pc-row"><span>Autokredit (9 %)</span><span class="pc-muted">Minimum zahlen</span></div></div>Bei allem den Mindestbetrag zahlen. Alles extra auf die höchstverzinste Schuld. <strong>Spart am meisten Gesamtzinsen.</strong>`},
          {tag:'Schneeball-Methode',title:'Zuerst den kleinsten Saldo angreifen',preview:'Psychologisch einfacher — schnelle Erfolge halten die Motivation hoch.',body:'Den kleinsten Saldo angreifen, unabhängig vom Zinssatz. Einmal weg, rollt diese Zahlung zur nächsten. <strong>Mathematisch langsamer, aber schnelle Erfolge halten Menschen am Ball.</strong>'},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Nicht alle Schulden sind gleich',preview:'Die Frage ist immer Kosten vs. Ertrag.',body:'Jede Schuld nach Kosten (Zinssatz) vs. was du bekommst bewerten. Eine 4-%-Hypothek auf eine im Wert steigende Immobilie ist anders als eine 20-%-Kreditkarte für ein Paar Schuhe.'},
          {tag:'Erkenntnis 2',title:'Die Mindestzahlung ist eine Falle',preview:'Sie ist darauf ausgelegt, dich so lange wie möglich zahlen zu lassen.',body:'Kreditkartenunternehmen setzen Mindestbeträge absichtlich tief an. Nie die Mindestbeträge als tatsächliche Zahlung akzeptieren. Den vollen Saldo zahlen.'},
          {tag:'Erkenntnis 3 — Kern',title:'Vollständig zahlen, jeden Monat — keine Ausnahmen',preview:'Diese eine Regel macht Kreditkarten zu einem kostenlosen Werkzeug.',body:'Wer den vollen Kreditkartensaldo jeden Monat zahlt, hat ein kostenloses Finanzinstrument mit Vorteilen. <strong>Die Regel ist einfach. Die Disziplin ist der schwere Teil.</strong>'},
        ]}
    ],
    vocab:[
      {term:"Gute Schulden",def:"Kreditaufnahme, die über die Zeit Wert schafft — eine Hypothek, ein Studienkredit, der zu höherem Einkommen führt."},
      {term:"Schlechte Schulden",def:"Kreditaufnahme zur Finanzierung von Konsum — Dinge, die weg sind, bevor die Schulden bezahlt sind."},
      {term:"Effektiver Jahreszins",def:"Jährliche Kosten der Kreditaufnahme inklusive Gebühren und Zinsen. Die Zahl zum Vergleichen bei jedem Kredit oder jeder Karte."},
      {term:"Mindestzahlung",def:"Der kleinste Betrag, den ein Kreditgeber monatlich verlangt. Nur das zu zahlen hält dich jahrelang in Schulden."},
      {term:"Schulden-Avalanche",def:"Mindestbeträge auf alle Schulden zahlen, dann die höchstverzinste Schuld mit allem Übrigen angreifen. Mathematisch optimal."},
    ],
    quiz:[
      {q:"Was macht Schulden 'gut' vs. 'schlecht'?",options:["Die Grösse des Kredits","Ob sie Wert schaffen, der die Kosten überwiegt","Den Ruf des Kreditgebers","Ob sie von einer Bank kommen"],correct:1,explain:"Gute Schulden schaffen Wert. Schlechte Schulden finanzieren Konsum."},
      {q:"Klügste Weise, eine Kreditkarte zu nutzen?",options:["Monatlich Minimum zahlen","Nie eine benutzen","Jeden Monat vollständig bezahlen","Alles kaufen, nie prüfen"],correct:2,explain:"Monatlich vollständig bezahlt kostet eine Kreditkarte nichts und bringt Vorteile."},
      {q:"Effektiver Jahreszins steht für...",options:["Jährliche Zahlungsrate","Durchschnittliche persönliche Rendite","Jährlicher Effektivzins","Automatische Zahlungsanfrage"],correct:2,explain:"Der effektive Jahreszins sind die jährlichen Kreditkosten inklusive Zinsen und Gebühren."},
      {q:"Schulden-Avalanche: welche Schuld zuerst?",options:["Grösster Saldo","Kleinster Saldo","Älteste Schuld","Höchster Zinssatz"],correct:3,explain:"Die Avalanche-Methode zielt auf die höchstverzinste Schuld, um die gesamten Zinsen zu minimieren."},
      {q:"CHF 500 Kreditkartenschulden bei 20 % Jahreszins, nur Mindestbetrag. Was passiert?",options:["Getilgt in 6 Monaten","Schnell getilgt mit kleinen Gebühren","Dauert Jahre und kostet viel mehr","Bank erlässt Teil davon"],correct:2,explain:"Bei 20 % Jahreszins mit Mindestzahlungen zahlst du jahrelang und am Ende viel mehr als geliehen."},
    ]
  },

  {
    id:7,
    title:"Notfallpuffer",
    subtitle:"Das finanzielle Sicherheitsnetz, das jeder braucht — und fast niemand hat",
    lesson:[
      {phase:'Erklärung',title:'Was ist ein Notfallpuffer?',text:'Wenn du morgen deinen Job verlieren würdest — wie lange könntest du finanziell ohne Kredite oder Hilfe überleben? Für die meisten ist die ehrliche Antwort unangenehm.',
        def:{label:'Definition',text:'Notfallpuffer: eine dedizierte Sparrücklage, die ausschliesslich für echte finanzielle Notfälle reserviert ist. Nicht für Wünsche — nur für echte, unerwartete Krisen.'},
        cards:[
          {tag:'Echte Notfälle',title:'Was als Notfall zählt',preview:'Das rechtfertigt die Nutzung des Puffers.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div>Plötzlicher Jobverlust</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div>Unerwartete Arzt- oder Zahnarztrechnung</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div>Autopanne, wenn du das Auto für die Arbeit brauchst</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div>Dringende Hausreparatur (Heizung, Wasser)</div></div></div>`},
          {tag:'Keine Notfälle',title:'Was nicht zählt',preview:'Das rechtfertigt es nicht, den Puffer anzutasten.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">x</div><div>Ein Sale auf etwas, das du sowieso wolltest</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">x</div><div>Ein Urlaub, weil du müde bist</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">x</div><div>Ein neues Handy (deins funktioniert noch)</div></div></div>Die Disziplin liegt darin, den Unterschied zu kennen.`},
        ]},
      {phase:'Vertiefung',title:'Wie viel brauchst du — und wo bewahrst du es auf?',text:'Die Standardempfehlung lautet 3–6 Monate Lebenshaltungskosten.',
        cards:[
          {tag:'Zielbetrag',title:'3–6 Monate essentielle Ausgaben',preview:'Mit CHF 1.000 anfangen. Von da aus aufbauen.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">1</div><div><strong>Erste Etappe: CHF 1.000</strong> — deckt kleine Notfälle ab</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">2</div><div><strong>3-Monats-Ziel: CHF 6.000</strong> — Standardempfehlung</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">3</div><div><strong>6-Monats-Ziel: CHF 12.000</strong> — ideal, besonders bei unsicherem Einkommen</div></div></div>`},
          {tag:'Wo aufbewahren',title:'Zugänglich aber nicht zu zugänglich',preview:'Nicht Aktien. Nicht Krypto. Ein Sparkonto.',body:'Dein Notfallpuffer muss sein: <strong>liquide</strong> (innerhalb von 1–2 Tagen verfügbar), <strong>stabil</strong> (fällt nicht 30 % wenn der Markt crasht), <strong>getrennt</strong> von deinem Ausgabenkonto. Ein dediziertes Sparkonto ist die richtige Antwort.'},
        ]},
      {phase:'Kontext',title:'Warum ist das so wichtig?',text:'Der finanzielle Nutzen ist klar. Aber der psychologische Nutzen ist genauso bedeutsam.',
        cards:[
          {tag:'Finanzieller Schutz',title:'Kein Notfall = keine Schulden-Spirale',preview:'Ohne Puffer wird eine Krise zur nächsten.',body:'Ohne Notfallpuffer wird eine CHF-500-Autopanne zu CHF 500 Kreditkartenschulden bei 20 % Jahreszins. Ein kleiner Notfall ohne Puffer kann eine Kette finanzieller Folgen auslösen. <strong>Der Puffer bricht diese Kette, bevor sie beginnt.</strong>'},
          {tag:'Psychologische Freiheit',title:'Die Zuversicht, bessere Entscheidungen zu treffen',preview:'Geld hinter dir verändert, wie du denkst.',body:'Zu wissen, dass du 3 Monate Ausgaben gespart hast, verändert, wie du deinen Job und Risiken siehst. <strong>„Ich kann diese schlechte Situation verlassen"</strong> ist nur möglich, wenn du Geld hinter dir hast.'},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Mit CHF 1.000 als erstem Meilenstein beginnen',preview:'Perfekt ist der Feind von Gestartet.',body:'Nicht warten, bis du 6 Monate auf einmal ansparen kannst. Mit CHF 1.000 als erstem Ziel beginnen. Das allein deckt die meisten echten Notfälle ab.'},
          {tag:'Erkenntnis 2',title:'Getrennt und langweilig aufbewahren',preview:'Der Puffer sollte unsichtbar sein, bis du ihn brauchst.',body:'Ein separates Sparkonto, das du nicht regelmässig anschaust, ist ideal. Langweilig ist ein Feature, kein Bug.'},
          {tag:'Erkenntnis 3 — Kern',title:'Das ist die erste Sparpriorität — vor dem Investieren',preview:'Das aufbauen, bevor Geld in Aktien fliesst.',body:'Bevor du einen einzigen Franken investierst, baue deinen Notfallpuffer auf. Der Notfallpuffer ist dein finanzielles Fundament — alles andere baut darauf auf.'},
        ]}
    ],
    vocab:[
      {term:"Notfallpuffer",def:"Eine dedizierte Sparrücklage für echte, unerwartete finanzielle Notfälle. Nicht für Wünsche — nur für echte Krisen."},
      {term:"Liquides Vermögen",def:"Etwas, das schnell ohne Wertverlust in Bargeld umgewandelt werden kann. Bargeld und Sparkonten sind liquide."},
      {term:"3-6-Monats-Regel",def:"Die Standardrichtlinie: genug sparen, um 3 bis 6 Monate wesentliche Lebenshaltungskosten zu decken."},
      {term:"Finanzieller Puffer",def:"Ein Polster zwischen dir und der Katastrophe. Verändert, wie du Entscheidungen triffst."},
      {term:"Opportunitätskosten",def:"Was du aufgibst, indem du eine Option wählst. Den Notfallpuffer in Bargeld zu halten bedeutet, Anlagerenditen zu verpassen — aber das ist richtig."},
    ],
    quiz:[
      {q:"Hauptzweck eines Notfallpuffers?",options:["In Aktien investieren","Unerwartete wesentliche Ausgaben decken","Urlaub bezahlen","Langfristigen Wohlstand aufbauen"],correct:1,explain:"Notfallpuffer sind ein Schutzpolster gegen echte Krisen."},
      {q:"Empfohlene Grösse eines Notfallpuffers?",options:["1 Woche Ausgaben","1 Monat","3–6 Monate","1 Jahr"],correct:2,explain:"3–6 Monate decken die meisten realistischen Notfälle ab."},
      {q:"Wo deinen Notfallpuffer aufbewahren?",options:["In Aktien","Auf einem zugänglichen Sparkonto","Bargeld unter der Matratze","In Krypto"],correct:1,explain:"Sparkonten sind liquide und sicher."},
      {q:"Was ist eine legitime Nutzung des Notfallpuffers?",options:["Neues Handy, weil deins alt ist","Konzerttickets","Autopanne, die du für die Arbeit brauchst","Fitnessstudio-Angebot"],correct:2,explain:"Wenn dein Auto streikt und du es für die Arbeit brauchst, ist das ein echter Notfall."},
      {q:"Was gibt dir ein Notfallpuffer ausser Geld?",options:["Bessere Kreditwürdigkeit","Steuervorteile","Zuversicht und mehr Optionen","Kostenloses Banking"],correct:2,explain:"Einen Puffer zu haben verändert deine Psychologie. Du kannst einen schlechten Job verlassen."},
    ]
  },

  // ── UNIT 3 ──────────────────────────────────────────────────────────
  {
    id:8,
    title:"Steuern erklärt",
    subtitle:"Wohin dein Geld geht — und warum das wichtig ist",
    lesson:[
      {phase:'Erklärung',title:'Was sind Steuern und warum gibt es sie?',text:'Steuern sind Pflichtbeiträge an den Staat. Die meisten sehen sie als verschwundenes Geld — aber zu verstehen, was sie finanzieren, verändert diese Perspektive.',
        def:{label:'Definition',text:'Steuer: eine obligatorische Zahlung an eine Regierung zur Finanzierung öffentlicher Leistungen. Strassen, Schulen, Spitäler, Polizei werden alle durch Steuern finanziert.'},
        cards:[
          {tag:'Wozu Steuern existieren',title:'Wofür deine Steuern wirklich bezahlt werden',preview:'Die Leistungen, die existieren, weil alle beitragen.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">1</div><div><strong>Infrastruktur</strong> — Strassen, Brücken, ÖV</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">2</div><div><strong>Bildung</strong> — öffentliche Schulen, Universitäten</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">3</div><div><strong>Gesundheitsversorgung</strong> — Spitäler, Notfalldienste</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">4</div><div><strong>Sicherheit</strong> — Polizei, Feuerwehr, Armee</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">5</div><div><strong>Soziale Unterstützung</strong> — Arbeitslosengeld, Renten</div></div></div>`},
          {tag:'Direkt vs. indirekt',title:'Zwei Arten der Steuererhebung',preview:'Manche zahlst du direkt. Andere stecken in Preisen.',body:'<strong>Direkte Steuern</strong> kommen direkt aus deinem Einkommen — Einkommensteuer, Vermögenssteuer. Du weisst genau, wie viel du zahlst.<br><br><strong>Indirekte Steuern</strong> stecken in Preisen — Mehrwertsteuer, Mineralölsteuer. In der Schweiz beträgt die Mehrwertsteuer 8,1 % auf die meisten Güter.'},
        ]},
      {phase:'Vertiefung',title:'Wie funktioniert die Einkommenssteuer wirklich?',text:'Die meisten Länder haben ein <strong>progressives Steuersystem</strong> — je mehr du verdienst, desto höher der Prozentsatz auf die höheren Teile. Das wird häufig missverstanden.',
        cards:[
          {tag:'Progressive Besteuerung',title:'Steuerstufen erklärt',preview:'Du zahlst den höchsten Satz nicht auf dein ganzes Einkommen.',body:'Ein weit verbreitetes Missverständnis: Wenn du CHF 100.000 verdienst und der „Spitzensteuersatz" 30 % ist, zahlst du nicht CHF 30.000 Steuern. <strong>Nur das Einkommen in jeder Stufe wird mit dem Satz dieser Stufe besteuert.</strong><br><br>Erste CHF 30.000 → 0 % = CHF 0<br>Nächste CHF 30.000 → 10 % = CHF 3.000<br>Nächste CHF 40.000 → 20 % = CHF 8.000<br><strong>Gesamtsteuer: CHF 11.000</strong>'},
          {tag:'Schweizer Besonderheiten',title:'Wie Schweizer Steuern funktionieren',preview:'Bund + Kanton + Gemeinde — drei Ebenen.',body:'Die Schweiz hat ein einzigartiges Steuersystem.<br><br><strong>Drei Ebenen:</strong> Bundessteuer + Kantonssteuer + Gemeindesteuer — alle drei auf dasselbe Einkommen.<br><br><strong>Wichtig:</strong> Steuersätze variieren enorm nach Kanton. Zug hat einige der niedrigsten Sätze in Europa.'},
        ]},
      {phase:'Kontext',title:'Welche Steuern zahlen Teenager und junge Erwachsene tatsächlich?',text:'Möglicherweise zahlst du bereits Steuern, ohne es zu wissen.',
        cards:[
          {tag:'Mehrwertsteuer',title:'Du zahlst bereits Steuern auf fast alles',preview:'Jeder Kauf enthält einen Steueranteil.',body:'In der Schweiz ist die Mehrwertsteuer (MwSt) von <strong>8,1 %</strong> in fast jedem Preis enthalten. Restaurants, Kleider, Elektronik. Lebensmittel haben einen reduzierten Satz (2,6 %). Du zahlst Steuern, seit du zum ersten Mal etwas gekauft hast.'},
          {tag:'Einkommensteuer',title:'Was passiert, wenn du anfängst zu verdienen',preview:'Dein erster Job bedeutet deine erste Einkommensteuer.',body:'Sobald du Einkommen über einem Schwellenwert verdienst, zahlst du Einkommensteuer und reichst jährlich eine Steuererklärung ein.<br><br><strong>Säule 3a</strong> — ein Pensionssparkonto, das dein steuerpflichtiges Einkommen reduziert. Eine leistungsstarke legale Steuerminderung in der Schweiz.'},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Steuerstufen sind kein Alles-oder-Nichts',preview:'In eine höhere Stufe zu kommen, besteuert nicht dein gesamtes Einkommen.',body:'Nur das Einkommen über einem Schwellenwert wird mit dem höheren Satz besteuert. Nie eine Lohnerhöhung ablehnen, weil sie „in eine höhere Stufe bringt" — von mehr verdienen behältst du immer mehr.'},
          {tag:'Erkenntnis 2',title:'Der Kanton spielt in der Schweiz eine enorme Rolle',preview:'Gleiches Einkommen, sehr unterschiedliche Steuerrechnung.',body:'Zug, Schwyz und Nidwalden haben einige der niedrigsten Sätze. Genf und Waadt sind viel höher. Für Gutverdiener kann der Unterschied Zehntausende Franken pro Jahr betragen.'},
          {tag:'Erkenntnis 3 — Kern',title:'Säule 3a ist die einfachste legale Steuerminderung',preview:'Beiträge reduzieren das steuerpflichtige Einkommen.',body:'Jeder Franken in Säule 3a reduziert dein steuerpflichtiges Einkommen. 2024: max. CHF 7.056/Jahr. Bei 25 % Grenzsteuersatz = CHF 1.764 gesparte Steuern. Das wächst stattdessen in deinem Pensionskonto.'},
        ]}
    ],
    vocab:[
      {term:"Einkommensteuer",def:"Eine Steuer auf Einkünfte. Die Schweiz hat Einkommenssteuern auf Bundes-, Kantons- und Gemeindeebene, die sich stapeln."},
      {term:"Progressive Steuer",def:"Ein System, wo höheres Einkommen mit höheren Sätzen besteuert wird — aber nur auf den Teil, der über dem Schwellenwert liegt."},
      {term:"Mehrwertsteuer (MwSt)",def:"Eine Verbrauchssteuer, die in den Preis von fast allem eingebaut ist. In der Schweiz 8,1 % Normalsatz."},
      {term:"Steuerstufe",def:"Ein Einkommensbereich, der mit einem bestimmten Satz besteuert wird. Mehr zu verdienen erhöht nur den Satz auf das zusätzliche Einkommen."},
      {term:"Säule 3a",def:"Das freiwillige private Pensionssparkonto der Schweiz. Beiträge mindern das steuerpflichtige Einkommen."},
    ],
    quiz:[
      {q:"Was ist ein progressives Steuersystem?",options:["Alle zahlen denselben Satz","Besserverdienende zahlen einen höheren Satz auf höhere Einkommensteile","Der Steuersatz sinkt mit steigendem Einkommen","Nur Unternehmen zahlen Steuern"],correct:1,explain:"Progressiv bedeutet, dass höhere Sätze auf höhere Einkommensteile angewendet werden — nicht auf das gesamte Einkommen."},
      {q:"Wer legt in der Schweiz die Einkommenssteuersätze fest?",options:["Nur der Bund","Nur dein Arbeitgeber","Bund + Kanton + Gemeinde — alle drei","Die EU"],correct:2,explain:"Die Schweiz hat drei Ebenen der Einkommensteuer: Bund, Kanton und Gemeinde."},
      {q:"Der Schweizer Mehrwertsteuersatz beträgt derzeit:",options:["2,5 %","5 %","8,1 %","15 %"],correct:2,explain:"8,1 % auf die meisten Güter. Ein reduzierter Satz von 2,6 % gilt für Lebensmittel."},
      {q:"Du bist in einer 25-%-Steuerstufe. Solltest du eine Gehaltserhöhung ablehnen?",options:["Ja — du verlierst Geld an Steuern","Nein — von mehr verdienen behältst du immer mehr","Nur wenn die Erhöhung klein ist","Hängt von deinem Kanton ab"],correct:1,explain:"Nur das Einkommen über dem Schwellenwert wird höher besteuert. Mehr Einkommen bedeutet immer mehr Geld nach Steuern."},
      {q:"Was bewirkt ein Beitrag in die Säule 3a?",options:["Erhöht dein Einkommen","Reduziert dein steuerpflichtiges Einkommen","Bezahlt deine Mehrwertsteuer","Hat keine Steuerwirkung"],correct:1,explain:"Jeder Franken in der Säule 3a reduziert das steuerpflichtige Einkommen um denselben Betrag."},
    ]
  },

  {
    id:9,
    title:"Versicherungs-Grundlagen",
    subtitle:"Was du brauchst, was nicht — und warum das wichtig ist",
    lesson:[
      {phase:'Erklärung',title:'Was ist Versicherung und wie funktioniert sie?',text:'Versicherung ist ein System, bei dem viele Menschen kleine, regelmässige Beiträge leisten, um die grossen, unvorhersehbaren Kosten der wenigen zu decken.',
        def:{label:'Definition',text:'Versicherung: Ein Vertrag, bei dem du regelmässige Prämien zahlst und die Versicherung bestimmte finanzielle Verluste deckt. Du kaufst Schutz gegen Risiken, die zu teuer wären, sie alleine zu tragen.'},
        cards:[
          {tag:'Das Kernkonzept',title:'Risiken auf viele Personen verteilen',preview:'Deine Prämie finanziert Ansprüche für alle.',body:'Versicherungen funktionieren, weil in einem gegebenen Jahr die meisten Menschen keine grosse Auszahlung brauchen, aber einige schon. Alle zahlen eine kleine Prämie. <strong>Du zahlst nicht für deine eigenen Verluste — du kaufst dich in ein kollektives System ein.</strong>'},
          {tag:'Schlüsselbegriffe',title:'Prämie, Franchise, Auszahlung',preview:'Die drei Zahlen, die jede Police definieren.',body:`<div style="display:flex;flex-direction:column;gap:7px"><div class="pc-insight"><div class="pc-ins-num" style="background:#3b82f615">P</div><div><strong>Prämie</strong> — die regelmässige Zahlung zur Aufrechterhaltung der Deckung.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">F</div><div><strong>Franchise (Selbstbehalt)</strong> — der Betrag, den du selbst bezahlst, bevor die Versicherung eintritt.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">D</div><div><strong>Deckung / Auszahlung</strong> — der Höchstbetrag, den die Versicherung zahlt.</div></div></div>`},
        ]},
      {phase:'Vertiefung',title:'Welche Versicherungsarten gibt es?',text:'Dutzende von Versicherungsprodukten existieren — aber nur eine Handvoll ist wirklich wichtig.',
        cards:[
          {tag:'Unverzichtbar',title:'Versicherungen, die du fast sicher brauchst',preview:'Diese schützen vor finanziell verheerenden Risiken.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div><strong>Krankenversicherung (Krankenkasse)</strong> — in der Schweiz obligatorisch.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div><strong>Haftpflichtversicherung</strong> — deckt Schäden, die du anderen zufügst. Günstig aber sehr wichtig.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#ef444415">!</div><div><strong>Hausratversicherung</strong> — deckt dein Hab und Gut bei Diebstahl, Feuer, Wasser.</div></div></div>`},
          {tag:'Optional',title:'Versicherungen, die von deiner Situation abhängen',preview:'Diese können sinnvoll sein oder nicht.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">?</div><div><strong>Autoversicherung</strong> — obligatorisch wenn du fährst.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">?</div><div><strong>Lebensversicherung</strong> — nötig wenn andere von deinem Einkommen abhängen.</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#22c55e15">x</div><div><strong>Verlängerte Garantien</strong> — oft schlechtes Preis-Leistungs-Verhältnis.</div></div></div>`},
        ]},
      {phase:'Kontext',title:'Schweizer Krankenkasse — was du wissen musst',text:'In der Schweiz ist die Krankenkasse für jeden obligatorisch.',
        cards:[
          {tag:'So funktioniert es',title:'Grundversicherung vs. Zusatzversicherung',preview:'Obligatorische Basis — alles andere ist optional.',body:'Jede Person in der Schweiz muss eine <strong>Grundversicherung</strong> haben. Diese deckt Arztbesuche, Krankenhausaufenthalte und die meisten Behandlungen ab. Du wählst selbst deinen Versicherer und kannst jährlich wechseln.'},
          {tag:'Geld sparen',title:'Der Franchise-Kompromiss',preview:'Höhere Franchise = niedrigere Prämie.',body:'Du wählst deine jährliche Franchise: von CHF 300 bis CHF 2.500. <strong>Wenn du jung und gesund bist</strong>, kann eine höhere Franchise (CHF 2.500) kombiniert mit HMO oder Telmed CHF 100–200 pro Monat sparen.'},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Versicherung für katastrophale Risiken, nicht für kleine Verluste',preview:'Kleine Dinge selbst versichern. Das absichern, was dich ruinieren könnte.',body:'Wenn du dir etwas aus Ersparnissen leisten kannst zu ersetzen, brauchst du keine Versicherung dafür. Prämien für kleine Risiken sparen, um Deckung für grosse zu finanzieren.'},
          {tag:'Erkenntnis 2',title:'Schweizer Krankenkasse — jedes Jahr vergleichen',preview:'Prämien ändern sich jährlich. Loyalität kostet dich Geld.',body:'<strong>Wechseln dauert 15 Minuten und kostet nichts.</strong> Vor dem 31. Oktober jedes Jahr auf prämienrechner.ch vergleichen.'},
          {tag:'Erkenntnis 3 — Kern',title:'Haftpflichtversicherung ist die wichtigste günstige Versicherung',preview:'CHF 100/Jahr decken dich für Millionen an möglichen Schäden.',body:'Die Privathaftpflicht kostet rund CHF 80–150 pro Jahr in der Schweiz. <strong>Ohne sie bist du persönlich für den vollen Schaden haftbar.</strong> Die Prämie ist minimal.'},
        ]}
    ],
    vocab:[
      {term:"Prämie",def:"Die regelmässige Zahlung zur Aufrechterhaltung des Versicherungsschutzes. Du zahlst sie unabhängig davon, ob du einen Anspruch stellst."},
      {term:"Franchise (Selbstbehalt)",def:"Der Betrag, den du selbst bezahlst, bevor die Versicherung den Rest übernimmt. Höhere Franchise = niedrigere Prämie."},
      {term:"Haftpflichtversicherung",def:"Deckt Schäden, die du versehentlich anderen zufügst. Eines der wichtigsten und günstigsten Versicherungsprodukte."},
      {term:"Krankenkasse",def:"Obligatorische Schweizer Krankenversicherung. Jede Person muss eine Grundversicherung haben."},
      {term:"Risikogemeinschaft",def:"Der Kernmechanismus der Versicherung: Viele zahlen Prämien in einen gemeinsamen Topf, der die grossen Verluste der wenigen deckt."},
    ],
    quiz:[
      {q:"Was ist der Kernmechanismus, der Versicherungen funktionieren lässt?",options:["Staatliche Subventionen","Risikoverteilung auf viele Menschen","Banken investieren Prämien","Mehr einfordern als auszahlen"],correct:1,explain:"Die kleinen Prämien aller fliessen zusammen, um die grossen Verluste der wenigen zu decken."},
      {q:"Welche Versicherung ist in der Schweiz gesetzlich obligatorisch?",options:["Lebensversicherung","Autoversicherung für alle","Grundkrankenversicherung (Krankenkasse)","Hausversicherung"],correct:2,explain:"Die Grundversicherung ist für jede Person in der Schweiz obligatorisch."},
      {q:"Was bedeutet eine höhere Franchise?",options:["Höhere monatliche Prämien","Niedrigere monatliche Prämien","Mehr Deckung","Schnellere Ansprüche"],correct:1,explain:"Höhere Franchise = niedrigere Prämie. Du übernimmst mehr des Erstrisikos selbst."},
      {q:"Welches ist das beste Beispiel einer Versicherung, die du haben solltest?",options:["Verlängerte Handygarantie","Tierversicherung","Privathaftpflicht","Zahnaufhellung"],correct:2,explain:"Die Privathaftpflicht deckt dich für versehentliche Schäden an anderen — kleine Prämie für enormen Schutz."},
      {q:"Wann solltest du Schweizer Krankenkassen-Prämien vergleichen?",options:["Alle 5 Jahre","Nur beim Kantonswechsel","Vor dem 31. Oktober jedes Jahr","Wenn du krank wirst"],correct:2,explain:"Prämien ändern sich jährlich. Kündigung vor dem 31. Oktober für Wechsel per 1. Januar."},
    ]
  },

  {
    id:10,
    title:"Risiko & dein Geld",
    subtitle:"Verstehen was Risiko wirklich bedeutet — und wie du es managst",
    lesson:[
      {phase:'Erklärung',title:'Was ist finanzielles Risiko?',text:'Risiko ist nicht etwas, das man vermeiden soll — es ist etwas, das man verstehen und managen soll. Jede Finanzentscheidung beinhaltet einen Kompromiss zwischen Risiko und Rendite.',
        def:{label:'Definition',text:'Finanzielles Risiko: die Wahrscheinlichkeit, dass das tatsächliche Ergebnis einer Entscheidung vom erwarteten abweicht — meist negativ. Risiko besteht auf einem Spektrum.'},
        cards:[
          {tag:'Risiko vs. Rendite',title:'Der fundamentale Kompromiss',preview:'Höhere potenzielle Rendite bringt immer höheres Risiko.',body:'<strong>Du kannst keine höhere Rendite erzielen, ohne mehr Risiko einzugehen.</strong> Ein Sparkonto ist geringes Risiko mit geringer Rendite. Aktien sind höheres Risiko mit historisch höherer Rendite. Wenn jemand hohe Renditen ohne Risiko verspricht, ist es ein Betrug.'},
          {tag:'Risikotypen',title:'Nicht jedes Risiko ist gleich',preview:'Verschiedene Risiken erfordern verschiedene Antworten.',body:`<div style="display:flex;flex-direction:column;gap:6px"><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">1</div><div><strong>Marktrisiko</strong> — Investitionen verlieren aufgrund von Marktbedingungen an Wert</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">2</div><div><strong>Inflationsrisiko</strong> — Geld verliert über die Zeit Kaufkraft</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">3</div><div><strong>Liquiditätsrisiko</strong> — Geld kann nicht abgerufen werden, wenn es gebraucht wird</div></div><div class="pc-insight"><div class="pc-ins-num" style="background:#f59e0b15">4</div><div><strong>Konzentrationsrisiko</strong> — zu viel in einer einzigen Investition</div></div></div>`},
        ]},
      {phase:'Vertiefung',title:'Wie managt man Risiko?',text:'Du kannst finanzielles Risiko nicht eliminieren — aber intelligent managen.',
        cards:[
          {tag:'Diversifizierung',title:'Alle Eier in einen Korb legen — nicht',preview:'Über Anlageklassen, Sektoren und Regionen streuen.',body:'Wenn du alles in eine Aktie steckst und sie einbricht, verlierst du alles. Über 500 Aktien verteilt, spielt ein einzelner Einbruch kaum eine Rolle. <strong>Diversifizierung ist das einzige kostenlose Mittagessen in der Finanzwelt.</strong> Der einfachste Weg: ein globaler Indexfonds.'},
          {tag:'Zeithorizont',title:'Risikobereitschaft ändert sich mit der Zeit',preview:'Langfristige Anleger können kurzfristige Schwankungen besser absorbieren.',body:'Wenn du CHF 10.000 für 30 Jahre anlegst, spielt ein 30-%-Crash in Jahr 3 kaum eine Rolle — du hast 27 Jahre zur Erholung. <strong>Je länger dein Zeithorizont, desto mehr Risiko kannst du rational eingehen.</strong>'},
        ]},
      {phase:'Kontext',title:'Risiko bei echten Finanzentscheidungen',text:'Risiko steckt in jeder Finanzentscheidung — einschliesslich der Entscheidung, nichts zu tun.',
        cards:[
          {tag:'Das Risiko des Nicht-Risikos',title:'Bargeld ist auch riskant',preview:'Inflation nagt still an dem Wert von Ersparnissen.',body:'Wenn dein Sparkonto 0,5 % bringt und die Inflation 2 % beträgt, verlierst du jährlich 1,5 % reale Kaufkraft. <strong>Nichts zu tun ist nicht risikolos.</strong>'},
          {tag:'Risiko vs. Volatilität',title:'Kurzfristige Schwankungen sind keine permanenten Verluste',preview:'Eine Aktie, die 20 % fällt, ist nicht dasselbe wie 20 % zu verlieren.',body:'Eine Aktie, die 30 % fällt und sich dann erholt, ist kein Verlust, ausser du verkaufst am Tiefpunkt. <strong>Realer finanzieller Verlust ist permanent.</strong> Diesen Unterschied zu verstehen verhindert Panikverkäufe.'},
        ]},
      {phase:'Erkenntnisse',title:'Drei Dinge zum Merken',text:'',
        cards:[
          {tag:'Erkenntnis 1',title:'Risiko und Rendite sind untrennbar',preview:'Keine legitime Investition bietet hohe Rendite ohne Risiko.',body:'Wenn jemand hohe Renditen ohne Risiko verspricht, geh weg. Der Kompromiss kann gemanagt, aber nicht eliminiert werden.'},
          {tag:'Erkenntnis 2',title:'Diversifizierung reduziert Risiko gratis',preview:'Deine Investitionen streuen — das mächtigste Werkzeug.',body:'500 Aktien über einen Indexfonds zu halten ist bedeutend weniger riskant als eine — und erzielt historisch bessere Renditen.'},
          {tag:'Erkenntnis 3 — Kern',title:'Dein grösstes Risiko mit 14 ist, gar nicht anzufangen',preview:'Zeit ist dein grösstes Gut.',body:'Das grösste finanzielle Risiko ist nicht, dass Investitionen vorübergehend fallen könnten. Es ist, dass du gar nicht anfängst. <strong>Zeit ist die mächtigste Variable im Vermögensaufbau.</strong>'},
        ]}
    ],
    vocab:[
      {term:"Finanzielles Risiko",def:"Die Wahrscheinlichkeit, dass das tatsächliche Ergebnis einer Entscheidung vom erwarteten abweicht — meist negativ."},
      {term:"Diversifizierung",def:"Investitionen auf verschiedene Anlageklassen, Sektoren und Regionen streuen, um Risiko ohne Verringerung erwarteter Renditen zu senken."},
      {term:"Volatilität",def:"Das Ausmass, in dem der Preis einer Investition schwankt. Hohe Volatilität ist nicht dasselbe wie hohes Risiko."},
      {term:"Zeithorizont",def:"Wie lange du eine Investition zu halten planst. Längerer Horizont = mehr Fähigkeit, kurzfristige Schwankungen zu absorbieren."},
      {term:"Inflationsrisiko",def:"Das Risiko, dass steigende Preise die Kaufkraft deiner Ersparnisse verringern. Selbst 'sicheres' Bargeld trägt Inflationsrisiko."},
    ],
    quiz:[
      {q:"Was ist der fundamentale Kompromiss beim Investieren?",options:["Risiko vs. Liquidität","Risiko vs. Rendite","Zeit vs. Geld","Sparen vs. Ausgeben"],correct:1,explain:"Höhere potenzielle Renditen gehen immer mit höherem Risiko einher."},
      {q:"Was ist Diversifizierung?",options:["In eine grossartige Firma investieren","Investitionen verteilen, um Risiko zu senken","Nur Anleihen kaufen","Alles in Bargeld halten"],correct:1,explain:"Diversifizierung reduziert Risiko ohne erwartete Renditen zu verringern."},
      {q:"Eine Aktie fällt 30 %. Hast du 30 % verloren?",options:["Ja, immer","Nur wenn du zu diesem Preis verkaufst","Nein — Aktien erholen sich immer","Hängt vom Firmennamen ab"],correct:1,explain:"Ein Buchverlust wird erst dann real, wenn du verkaufst."},
      {q:"Ist Bargeld halten wirklich risikolos?",options:["Ja, immer","Nein — Inflation nagt an der Kaufkraft","Nur wenn es auf einer Bank ist","Hängt von der Währung ab"],correct:1,explain:"Inflationsrisiko ist real. 2 % Inflation bei 0 % Rendite = 2 % Kaufkraftverlust jährlich."},
      {q:"Wie beeinflusst der Zeithorizont, wie viel Risiko du eingehen kannst?",options:["Kürzere Zeit = mehr Risiko","Längere Zeit = mehr Risiko, das du rational tragen kannst","Zeit hat keinen Einfluss","Ältere sollten mehr Risiko eingehen"],correct:1,explain:"Mit mehr Zeit haben Rückgänge Zeit zur Erholung. Junge Anleger können rational volatile Anlagen halten."},
    ]
  }

]; // Ende CHAPTERS_DE Teil 1
