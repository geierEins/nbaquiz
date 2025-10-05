// Kategorie-Namen
const categories = {
  "A": "NBA Rekorde",
  "B": "Deutsche NBA Spieler",
  "C": "Historische Ereignisse",
  "D": "Wer bin ich?",
  "E": "NBA Fun Facts"
};


// Fragen
// Key = Kategorie-Punkt (A–E, 1–5), Value = Frage-Text (Backticks erlauben Mehrzeiler)
const questions = {
  "A-1": `(Chris Paul, 12499 Assists)\nJohn Stockton hält den amtierenden Rekord für die NBA Career Assists. Aber wer ist auf Platz 2?`,
  "A-2": `(73)\nDie Golden State Warriors stellten in der Saison 2015/16 einen Rekord auf, nämlich die meisten gewonnenen Spiele innerhalb einer Saison jemals. Wie viele Siege waren das?`,
  "A-3": `(Steve Kerr)\nWelcher ehemalige NBA Spieler hält mit den amtierenden Rekord für Career 3-Pt-Percentage?`,
  "A-4": `Schätzfrage: (28, Detroit Pistons 2023/24)\nWie lang war die längste Niederlagen-Serie, die ein NBA-Team jemals innerhalb einer Saison fabriziert hat?`,
  "A-5": `(Mark Eaton)\nWelcher Spieler hat mit 5,56 Blocks/Spiel die beste Saison in dieser Kategorie abgeliefert?`,

  "B-1": `(Isaiah Hartenstein, 2024/25)\nDirk Nowitzki wurde 2010/11 NBA Champion mit den Dallas Mavericks und war damit der erste Deutsche, der einen NBA Titel gewann. Doch wer war der zweite Deutsche, dem das gelang?`,
  "B-2": `(Memphis Grizzlies)\nAm 15. Januar findet NBA Europe Spiel in Berlin statt. Dabei spielen die Wagner Brüder mit ihren Orlando Magic gegen welches Team?`,
  "B-3": `Schätzfrage: (15761)\nWieviele Punkte erzielte Detlef Schrempf innerhalb seiner NBA-Karriere?`,
  "B-4": `(New Orleans Pelicans)\nFür welches NBA Team spielte Daniel Theis, bevor er dann zum AS Monaco wechselte?`,
  "B-5": `(Toronto Raptors, 2021/22, 15 Spiele)\nIsaac Bonga sammelte bereits NBA-Erfahrung bei den Los Angeles Lakers und den Washington Wizards. Er spielte aber noch für ein drittes Team. Welches war das?`,

  "C-1": `(San Francisco)\nIn welcher Stadt fand das letzte NBA Allstargame statt?`,
  "C-2": `(Pfirsich)\nDr. James Naismith erfand 1891 unseren Lieblingssport Basketball. Welche Frucht war es, für die die Körbe, die er für das Spiel nutzte, ursprünglich gedacht waren?`,
  "C-3": `(Indiana Pacers & Detroit Pistons)\nAm 19. November 2004 kommt es während eines NBA Spiel eine Massenschlägerei, in die sowohl Spieler als auch Fans involviert waren. Dieses Ereignis ist bekannt als "Malice in the Palace". Welche zwei Teams begegneten sich an diesem Tag?`,
  "C-4": `(2006)\ngegen die Toronto Raptors)\n Kobe Bryant erzielte einst gegen die Toronto Raptors 81 Punkte und ging damit in die Geschichte ein. In welchem Jahr?`,
  "C-5": `(1979)\nIn welchem Jahr wurde die 3-Punktlinie Teil des NBA Spielfeldes?`,

  "D-1": `(Tracy McGrady)\n1. Ich wurde direkt von der High School in die NBA gedraftet.
2. Ich war bekannt für meinen außergewöhnlich flüssigen Wurf und meine Scoring-Explosionen.
3. Meine Karriere führte mich unter anderem zu den Knicks, Rockets, Magic oder Raptors (keine chronologische Reihenfolge).
4. 2004 erzielte ich innerhalb von 33 Sekunden 13 Punkte, um ein Spiel zu drehen.
5. Mein Spitzname lautet "T-Mac".`,

  "D-2": `(Allen Iverson)\n1. Ich war unter anderem 1 mal MVP, 11 mal NBA Allstar und 7 mal im All NBA Team.
2. Ich spielte 12 Jahre für das selbe Team.
3. Ich bin für mein spektakuläres Ballhandling bekannt.
4. Ich ging auf die Georgetown University.
5. Man nennt mich auch "The Answer".`,

  "D-3": `(Jeremy Lin)\n1. Ich habe 9 Saisons zwischen 2010 und 2019 in der NBA gespielt.
2. Ich spielte insgesamt bei 8 Teams, darunter die New York Knicks, die Houston Rockets oder auch die Los Angeles Lakers.
3. Ich hab an der Harvard University studiert.
4. Ich spiele auf der Point Guard Position.
5. Ich habe ethnische Wurzeln in Taiwan.`,

  "D-4": `(Giannis Antetokounmpo)\n1. Als Jugendlicher half ich meiner Familie, indem ich Uhren und Sonnenbrillen in meiner Heimatstadt verkaufte.
2. Ich wurde im 2013er NBA Draft an Stelle 15 gepickt.
3. Im Jahr 2017 gewann ich den Most Improved Player Award.
4. 2019 und 2020 wurde ich zweimal in Folge MVP.
5. 2021 führte ich die Milwaukee Bucks zur Meisterschaft.`,

  "D-5": `(Hakeem Olajuwon)\n1. Ich begann erst mit 15 Jahren Basketball zu spielen.
2. Ich führte mein College Team, die Houston Cougars, in den 80er Jahren zu mehreren Final Fours.
3. Im Jahr 1994 gewann ich sowohl MVP, Finals-MVP als auch Defensive Player of the Year.
4. Ich war einer der dominierenden Center der 1990er Jahre.
5. Meine Karriere und meine beiden Titel sind untrennbar mit den Houston Rockets verbunden.`,

  "E-1": `(American Basketball Association)\nVor der NBA gab es die ABA. Wofür stehen die Buchstaben in diesem Akronym?`,
  "E-2": `(Sacramento Kings)\nWelche heutige NBA Franchise bzw. welches NBA Team hieß früher Rochester Royals und später Cincinnati Royals?`,
  "E-3": `Schätzfrage: (28.65m)\nWie lang ist ein NBA-Spielfeld?`,
  "E-4": `(13)\nWilt Chamberlain spielte bei den San Francisco Warriors, den Philadelphia 76ers und den Los Angeles Lakers, hatte aber immer dieselbe Trikotnummer. Welche war das?`,
  "E-5": `(10)\nWieviele Teams aus den aktuell 30 NBA Teams haben bislang noch nie einen NBA Champion Titel gewonnen? (Achtung: Franchises beachten)`
};
