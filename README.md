# Le Blog

--För att få det att fungera 
- installera Nodejs
- ta bort node_modules och kör: npm install i terminalen 
- installera h2 och ändra i application.properties datasource så den matachar

Denna app är till för slutprojekt i Java och databaser. Appen är en blogg byggd som en REST i backend
via Java-ramverket Spring Boot sedan en SPA(Single Page App) med React som frontend samt kopplad till H2 SQL-databas.

# Struktur

Då jag har använt mig av Gradle för Dependency Mangement så sätter den upp en
struktur där den ger mappen src som sedan delar upp i språk och sedan test eller main.

Spring Boot är även ett "opinioneted framework" de vill säga att den utför "magi"
i bakgrunden så länge man placerar och namnger utifrån deras struktur.
Sedan har jag strukturerat packeten utifrån "package by feature". De vill säga att all kod som 
tillhör en viss egenskap ligger tillsammans till skillnad från "package bt layer" som delar upp
utifrån typ så som DAO, Service etc.
React är uppdelat i framför allt komponenter och basfiler så som routing, entrypoint för webpack och koppling till html-sidan.

# Beskrivning

Bloggen har alltså två entiteter, Post och Comment. Dessa har en relation genom att en Post kan ha flera Comments samt om en post tas bort så följer dess Comments med. Båda entiteter har möjlighet för alla CRUD-operationer.
React använder sig av axios för att få tag på data i API't. Wepack används för att transpilera es6 javascript samt jsx till standard es5. Webpack används såklart också för att skapa en enkel js-fil av de js-filer som finns i projektet. 


Links
http://www.javapractices.com/topic/TopicAction.do?Id=205
https://projects.spring.io/spring-boot/
https://facebook.github.io/react/
https://en.wikipedia.org/wiki/Representational_state_transfer
