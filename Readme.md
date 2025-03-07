# SDU Case

Det her er en side med en liste af studerende. Den er opbygget af tre dele:

- En MongoDB database, for det har jeg ikke prøvet før
- En ASP.NET backend, for det *har* jeg prøvet før
- En SPA frontend i ren JS, for det syntes jeg kunne være sjovt

Jeg endte med at bruge lidt længere tid på det end jeg havde tænkt mig; jeg ville bare lave en super simpel html/js frontend, men jeg blev revet med og endte med at begynde at opbygge et simpelt component-baseret framework.

Stylingen er lavet med bootstrap, men har ikke brugt mere energi på det end nok til at det ikke får ens øjne til at bløde.

Siden er sat op til at op til at bruge MongoDB, og forventer at der kører en instans af det med en SduCase database og en Students collection.  For at det er lettere at teste uden at opsætte dét, er der også en simpel test "database" i koden, som bliver brugt per default. Man kan skifte mellem dem med en lille ændring i Program.cs.

De to primære ting, der skal laves som det næste, er noget reel kryptering af CPR, og et GetPage endpoint, så man ikke altid henter hele listen af studerende.
