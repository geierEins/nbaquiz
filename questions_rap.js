// Kategorie-Namen
const categories = {
  "A": "Deutsch Rap Allgemein",
  "B": "Ami Rap",
  "C": "Berliner Untergrund",
  "D": "Wer bin ich?",
  "E": "Forcki9ers"
};


// Fragen
// Key = Kategorie-Punkt (A–E, 1–5), Value = Frage-Text (Backticks erlauben Mehrzeiler)
const questions = {
  "A-1": `(Jung, brutal gutaussehend)\nKollegah und Farid Bang veröffentlichten gemeinsam eine Album-Trilogie mit welchem Namen?`,
  "A-2": `(Casper)\nVon welchem deutschen Rapper stammen die Alben - "Hin zur Sonne", "XOXO", "Hinterland", "Lang lebe der Tod", "Alles war schön und nichts tat weh" und "Nur Liebe, immer"?`,
  "A-3": `(Sera Finale) Welcher Rapper steckt hinter dem Pseudonym 'Dikka' dem rappenden Nashorn für Kinder?`,
  "A-4": `(4 -> BB.U.M.SS.N., 0,9, Messios, Das neue Album)\nWie viele Studioalben hat SSIO bislang released??`,
  "A-5": `(Apache - Roller)\nWelcher im Jahr 2019 veröffentlichte Song, war ist 9x Gold und ca. 1,8 Mio. verkauften Einheiten der meistverkaufte Deutschrap-Song aller Zeiten?`,

  "B-1": `(Death Row Records)\In den 90ern tobte ein regelrechter Krieg zwischen East und West Coast, vertreten durch die Protagonisten Puff Daddy, Bad Boy Records und Suge Knight. Letzterer war Chef welchen Labels?`,
  "B-2": `(J Dilla) James Dewitt Yancey war der bürgerliche Name welches legendären US-amerikanischen Beatproduzent, der im Jahr 2001 tragischerweise aufgrund einer Autoimmunkrankheit starb?`,
  "B-3": `(67 Jahre alt)\nSchätzfrage: Wie alt ist Grandmaster Flash?`,
  "B-4": `(Reasonable Doubt)\n1996 erschien das erste Album des Rappers Jay-Z. Wie hieß es?`,
  "B-5": `(Quavo, Takeoff und Offset)\n Die Migos war der Name einer US-amerikanischen Hip-Hop-Gruppe, die aus 3 Mitgliedern bestand. Wie lauten diese drei Namen?`,

  "C-1": `(Masters of Rap)\nDie Rapgruppe M.O.R. ist ein Zusammenschluss aus verschiedenen Berliner Rappern und Hip Hop Aktivisten (Quelle: Wikipedia). Doch wofür steht die Abkürzung M.O.R. eigentlich?`,
  "C-2": `(26640 monatliche Hörer) Schätzfrage: Wieviel monatliche Hörer hat MC Bogy auf Spotify zur Zeit? (Stand: 04.10.2025)`,
  "C-3": `(Juks)\n Zu Beginn seiner Tätigkeit als Hip-Hop-Musiker trat Kool Savas unter einem anderen Pseudonym auf. Welches war das?`,
  "C-4": `(0,5l Wasser-Plastikflasche)\n Im Jahr 2018 gab es im damaligen Büro von Arafat einen Zwischenfall mit ihm und Bushido, der später auch Teil des Gerichtsprozesses zwischen den beiden war. Womit hatte Arafat Bushido mutmaßlich angegriffen?`,
  "C-5": `(103) Die Bar "Lauschangriff" war und ist ein beliebter Treffpunkt für Liebhaber der Freestyle-Kunst. Das "Lauschi" befindet sich in Berlin-Friedrichshain in der Rigaer Straße. Aber in welcher Hausnummer?`,

  "D-1": `(Ol' Dirty Bastard)\n1. Mein bürgerlicher Name ist Russell Tyrone Jones.
2. Ich wurde 1968 in Brooklyn geboren.
3. Ich bin Mitglied des Wu-Tang Clans.
4. Ich bin durch meinen schrägen Humor und bizarren Rapstil bekannt.
5. Ich starb an einer Überdosis Kokain und Tramadol.`,

  "D-2": `(Nas)\n1. Ich wurde im Jahr 1973 in Brooklyn geboren.
2. Mein Vater, Olu Dara, war Jazzmusiker.
3. Ich wuchs in Queensbridge auf.
4. Mein Rapper Name besteht aus 3 Buchstaben.
5. Mein Bürgerlicher Name lautet Nasir bin Olu Dara.`,

  "D-3": `(B-Tight)\n1. Ich wurde am 28. Dezember 1979 in Palm Springs geboren.
2. Mein bürgerlicher Name ist Robert Edward Davis Jr.
3. Ich wuchs als Sohn einer deutschen Mutter und eines afroamerikanischen Vaters in Berlin auf.
4. Ich war Teil der Gruppe Die Sekte.
5. Später wechselte ich zusammen mit Sido zum Label Aggro Berlin.`,

  "D-4": `(The Alchemist)\n1. Ich wurde am 25. Oktober 1977 in Beverly geboren.
2. Ich begann meine Karriere als Rapper in der Gruppe The Whooliganz.
3. Später lernte ich bei DJ Muggs die Musikproduktion.
4. Ich produzierte unter anderem Tracks für Jadakiss, Nas, Eminem und Mobb Deep.
5. Mein bürgerlicher Name ist Alan Daniel Maman.`,

  "D-5": `(Lil Bow Wow)\n1. Ich heiße Shad Gregory Moss und bin am 9. März 1987 in Columbus, Ohio geboren.
2. Als ich von Snoop Dogg als Rapper entdeckt wurde, war ich noch ein Kind.
3. Im Alter von 13 veröffentlichte ich mein erstes Album "Beware of Dog".
4. Auch als Schauspieler war ich tätig.
5. Ich spielte in mehreren 'Fast & Furious' Filmen oder auch in 'Like Mike' mit.`,

  "E-1": `(Forcki9ers & Freche Gesellschaft - Vegan Mortadella Soul -> mit 21442; Spätimöllchen knapp dhinter mit 21338)\nWelches ist das aktuell meist geklickte Video auf dem Forcki9ers Kanal?`,
  "E-2": `(7992 Klicks)\nSchätzfrage: Wieviele Klicks hat der Song "Grüne Neune"? (Stand: 04.10.2025)`,
  "E-3": `(k.A. - Keine Ahnung)\nLyrics raten: "Renn' in 'ne Sackgasse auf MDMA, das Ende ist nah. Dank deines letztem Transzendenz-Erlebniss siehst du jetzt klar. Weißt was womit zusammenhängt. Hältst jetzt deepe Referate."`,
  "E-4": `(2020) In welchem Jahr wurde das Brokkoli Tape veröffentlicht?`,
  "E-5": `(16)\nDie zweite Platte der F9 - "Petersburger Hängung" - hat insgesamt wieviele Anspielstationen?`
};
