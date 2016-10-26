# The Blog

Denna app är till för slutprojekt i Java och databaser. Appen är en enkel blogg byggd
med Java-ramverket Spring Boot och React som frontend samt kopplad till H2 SQL-databas.

# Struktur

Då jag har använt mig av Gradle för Dependency Mangement så sätter den upp en
struktur där den ger mappen src som sedan delar upp i språk och sedan test eller main.

Spring Boot är även ett "opinioneted framework" de vill säga att den gör en massa "magi"
i bakgrunden så länge man placerar och namnger utifrån deras struktur.
Sedan har jag strukturerat packeten utifrån "package by feature". De vill säga att all kod som 
tillhör en viss egenskap ligger tillsammans.

Med 
http://www.javapractices.com/topic/TopicAction.do?Id=205
https://projects.spring.io/spring-boot/
