// questions.js
// Key = Kategorie-Punkt (A–E, 1–5), Value = Frage-Text (Backticks erlauben Mehrzeiler)
const questions = {
  "A-1": `(Chris Paul, 12499 Assists)\n John Stockton hält den Rekord für die NBA Career Assists. Wer ist auf Platz?`,
  "A-2": `(73)\n Die Golden State Warriors stellten in der Saison 2015/16 einen Rekord auf, nämlich die meisten gewonnenen Spiele innerhalb einer Saison jemals. Wie viele Siege waren das?`,
  "A-3": `(Steve Kerr)\n Welcher ehemalige NBA Spieler hält mit den aktuellen Rekord für Career 3-Pt-Percentage?`,
  "A-4": `Schätzfrage: (28, Detroit Pistons 2023/24)\n Wie lang war die längste Niederlagen-Serie, die ein NBA-Team jemals innerhalb einer Saison fabriziert hat?`,
  "A-5": `(Mark Eaton)\n Welcher Spieler hat mit 5,56 Blocks/Spiel die beste Saison in dieser Kategorie abgeliefert?`,

  "B-1": `(Isaiah Hartenstein, 2024/25)\n Dirk Nowitzki wurde 2010/11 NBA Champion mit den Dallas Mavericks und war damit der erste Deutsche, der einen NBA Titel gewann. Doch wer war der zweite Deutsche, dem das gelang?`,
  "B-2": `(Memphis Grizzlies)\n Am 15. Januar findet NBA Europe Spiel in Berlin statt. Dabei spielen die Wagner Brüder mit ihren Orlando Magic gegen welches Team?`,
  "B-3": `Schätzfrage: (15761)\n Wieviele Punkte erzielte Detlef Schrempf innerhalb seiner NBA-Karriere?`,
  "B-4": `(New Orleans Pelicans)\n Für welches NBA Team spielte Daniel Theis, bevor er dann zum AS Monaco wechselte?`,
  "B-5": `(Toronto Raptors, 2021/22, 15 Spiele)\n Isaac Bonga sammelte bereits NBA-Erfahrung bei den Los Angeles Lakers und den Washington Wizards. Er spielte aber noch für ein drittes Team. Welches war das?`,

  "C-1": `(San Francisco)\n In welcher Stadt fand das letzte NBA Allstargame statt?`,
  "C-2": `(Pfirsich)\n Dr. James Naismith erfand 1891 unseren Lieblingssport Basketball. Welche Frucht war es, für die die Körbe, die er für das Spiel nutzte, ursprünglich gedacht waren?`,
  "C-3": `(Indiana Pacers & Detroit Pistons)\n Am 19. November 2004 geriet ein NBA Spiel in die Schlagzeilen, aufgrund von Schlägereien zwischen Spielern und Fans. Dieses Ereignis ist auch bekannt als "Malice in the Palace". Welche zwei Teams begegneten sich an diesem Tag?`,
  "C-4": `(NBA Slam Dunk Contest Winner)\n Es gibt eine Eigenschaft, die all diese Spieler gemeinsam haben. Welche ist es? Kenny Walker, Harold Minor, Desmond Mason, Josh Smith, Gerald Green, Zach LaVine, Mac McClung`,
  "C-5": `(1979)\n In welchem Jahr wurde die 3-Punktlinie Teil des NBA Spielfeldes?`,

  "D-1": `(Tracy McGrady)\n1. Ich wurde direkt von der High School in die NBA gedraftet.
2. Ich war bekannt für meinen außergewöhnlich flüssigen Wurf und meine Scoring-Explosionen.
3. Meine Karriere führte mich unter anderem zu den Knicks, Rockets, Magic oder Raptors (keine chronologische Reihenfolge).
4. 2004 erzielte ich innerhalb von 33 Sekunden 13 Punkte, um ein Spiel zu drehen.
5. Mein Spitzname lautet "T-Mac".`,

  "D-2": `(Allen Iverson)\n1. Ich war unter anderem 1 mal MVP, 11 mal Allstar und 7 mal im All NBA Team.
2. Ich spielte 12 Jahre für das selbe Team.
3. Ich bin für mein spektakuläres Ballhandling bekannt.
4. Ich ging auf die Georgetown University.
5. Man nennt mich auch "The Answer".`,

  "D-3": `(Jeremy Lin)\n1. Ich habe 9 Saisons zwischen 2010 und 2019 in der NBA gespielt.
2. Ich spielte insgesamt bei 8 Teams, darunter die New York Knicks, die Houston Rockets oder auch die Los Angeles Lakers.
3. Ich hab an der Harvard University studiert.
4. Ich spiele auf der Point Guard Position.
5. Ich habe ethnische Wurzeln in Taiwan.`,

  "D-4": `(Giannis Antetokounmpo)\n1. Als Jugendlicher half meiner Familie, indem ich in meiner Heimatstadt Uhren und Sonnenbrillen verkaufte.
2. Ich wurde 2013 als 15. Pick gedraftet.
3. Ich gewann den Most Improved Player Award 2017.
4. 2019 und 2020 wurde ich zweimal in Folge MVP.
5. 2021 führte ich die Milwaukee Bucks zur Meisterschaft.`,

  "D-5": `(Hakeem Olajuwon)\n1. Ich begann erst mit 15 Jahren Basketball zu spielen.
2. Ich führte mein College-Team, die Houston Cougars, in den 80ern zu mehreren Final Fours.
3. 1994 gewann ich sowohl MVP, Finals-MVP als auch Defensive Player of the Year.
4. Ich war einer der dominierenden Center der 1990er Jahre.
5. Meine Karriere und meine beiden Titel sind untrennbar mit den Houston Rockets verbunden.`,

  "E-1": `(American Basketball Association)\n Vor der NBA gab es die ABA. Wofür stehen die Buchstaben in diesem Akronym?`,
  "E-2": `(Sacramento Kings)\n Welche heutige NBA Franchise bzw. welches NBA Team hieß früher Rochester Royals und später Cincinnati Royals?`,
  "E-3": `Schätzfrage: (28.65m)\n Wie lang ist ein NBA-Spielfeld?`,
  "E-4": `(13)\n Wilt Chamberlain spielte bei den San Francisco Warriors, den Philadelphia 76ers und den Los Angeles Lakers, hatte aber immer dieselbe Trikotnummer. Welche war das?`,
  "E-5": `(10)\n Wieviele Teams aus den aktuell 30 NBA Teams haben bislang noch nie einen NBA Champion Titel gewonnen? (Achtung: Franchises beachten)`
};
