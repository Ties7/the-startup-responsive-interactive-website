# DEPT Weather Planner


## Beschrijving
Links staat het 'DEPT' logo en 2 alineas uitleg over de website die in en uitklapbaar is. Daaronder staat de weersverwachting staat voor de aankomende 5 dagen en een soort 'sign up' link onder de weersverwachting staat. Rechts staat de huidige temperatuur met speceficaties over het weer (zonnig, bewolkt etc) en activiteiten gefilterd op basis van welke je kan doen met de huidige temperatuur. Als je op een activiteit klikt komt de activiteit waarop geklikt is groot in beeld met nog meer informatie over die activiteit. Onderaan als footer (die je hele scherm vult) staat 'DEPTxfdnd' die links zijn en je sturen naar de website van dept of fdnd.

## Kenmerken
### Ademruimte en inspringen
Ik gebuik voor inspringen altijd tabs. De children in een parent schuiven een 'tab' op. Ook heb ik tussen verschillende elementen witruimte om het geheel overzichtelijk te houden.

## Responsive
De algemene breakpoint waardoor de website naar een ander grid gaat is bij 700px. Verder hebben de sectie weersverwachting en de 'sign up' buttons een breakpoint bij 1000px. Bij de weersverwachting komt de dag inplaats van boven de weersvoorspelling er links van te staan, en een lijntje komt onder elk individuele rij. De buttons gaan van boven elkaar naar onder elkaar en de width word net zo groot als de content.

**MOBILE**

![image](https://github.com/user-attachments/assets/9c38220e-91f7-416e-bbed-ea1d421d316d)
![image](https://github.com/user-attachments/assets/6de036f4-3174-45cc-9d08-e486ed5496c3)
![image](https://github.com/user-attachments/assets/63edf252-6f4e-42b8-8a33-81673b38a0c6)
![image](https://github.com/user-attachments/assets/27a01f82-4f9c-47cc-addc-f15a7a93b816)

**TABLET (700px)**
Met grid krijgen de secties een andere indeling. Inplaats van alles onder elkaar staan links de 'intro' en 'weersvoorspelling' onder elkaar, en rechts de 'activiteiten' die net zo lang is als de 'intro' + 'weersvoorspelling'. En onderaan is de zwarte footer die altijd het gehele scherm vult. Daarnaast zijn de activiteiten standaard ingeklapt en kan je ze uitklappen met een 'Show more' button. Dit heb ik gedaan aangezien anders er heel veel lege ruimte kwam in de blauwe 'intro' en grijze 'weersvoorspelling', aangezien die bij elkaar even lang moet zijn als de 'activiteiten'. 

![image](https://github.com/user-attachments/assets/665a04f4-fa31-4e5e-88fe-47f0ae57c963)
![image](https://github.com/user-attachments/assets/58f486a7-3536-4f6e-8ce7-073c5f208de9)
![image](https://github.com/user-attachments/assets/45e2d4e7-0671-4ce8-bafa-6c206d2f0bd5)

**DESKTOP (1000px)**
Op 1000px veranderd de 'weersvoorspelling' tabel. De dag komt inplaats van boven de weersvoorspelling, links ernaast te staan. Ook komt er onder elke horizontale lijn uit de tabel een lijn. De buttons onder de tabel veranderen van verticaal boven elkaar naar horizontaal naast elkaar. Ook krijgen de buttons dezelfde width als de inhoud en dus worden ze minder lang. Daarnaast veranderd de wat meer roze zo genoemde 'widget' met de huidige temperatuur erin. Inplaats van dat de temperatuur boven de text staat, komt die er links naast te staan. De activiteiten klappen bij 1000px allemaal uit en krijgen hetzelfde uiterlijk als bij de tablet als alles uitgeklapt zou zijn. Dus links van de text het plaatje en rechts ervan de text horizontaal boven elkaar met dezelfde hoogte als het plaatje.

![image](https://github.com/user-attachments/assets/97f88a38-485a-4a06-92b2-d12233d302e4)
![image](https://github.com/user-attachments/assets/4a0913c8-a716-4f20-a4a7-1c0646130f94)
![image](https://github.com/user-attachments/assets/f4a12481-7ec9-4efc-a828-c72b3db011e7)

## Ontwerpkeuzes
Dialog interactie:

https://github.com/user-attachments/assets/3cb1a7b0-5705-453c-8077-cee005c76472

Ik kreeg bij de User test terug dat het onduidelijk was dat de text en afbeelding klikbaar is. Dit heb ik opgelost door een hover effect toe te voegen. Als je nu over een activiteit met muis gaat word de text blauw. Dit geeft feedback en feedforward op dat je wat kan doen, in dit geval is dat klikken. Als je daarom klikt opent er een scherm. In dat scherm zijn er 2 knoppen. Een knop om het event te bekijken en een knop om het scherm af te sluiten. Er staat in de button die naar het event gaat 'View event' wat voor feedforward zorgt, ook is er een hover effect wat juist voor feedback zorgt. De knop om het af te sluiten heeft een hover effect wat voor feedback zorgt, zodat het duidelijk is dat het klikbaar is.
Website: https://ties7.github.io/the-startup-responsive-interactive-website/weatherplanner.html


### Volgorde en nesten van CSS selectors
Ik heb selectoren genest, daarbij hou ik aan dat alles wat als eerst als html komt ik ook als eerst als css schrijf. 
https://github.com/Ties7/the-startup-responsive-interactive-website/blob/main/weatherplanner.css#L130-L151

## Kenmerken

**Opbouw**

Agemeen bestaat de opbouw van de website bestaat uit div's die onderscheid maken tussen de blauwe 'intro', grijze 'weersvoorspelling' etc. Daarin staat een sectie met de verdere inhoud.
https://github.com/Ties7/the-startup-responsive-interactive-website/blob/main/weatherplanner.html#L20-L35

**Weersvoorspelling grid**

**Mobile**

Met behulp van grid heb ik de weersvoorpspelling tabel gemaakt (dit kan inderdaad ook met een tabel, maar ik kwam daar met css niet uit hoe je dat responsive maakt). Door grid-template-columns word de horizontale lijn met inhoud gevuld, daarin gebruik ik min-content en 1fr om te defineren hoeveel ruimte elk object in moet nemen. Daar voeg ik nog dan nog een gap aan toe om het visueel makkelijker te lezen. https://github.com/Ties7/the-startup-responsive-interactive-website/blob/main/weatherplanner.css#L136-L138
Daarnaast zit er grid-column direct op de h3 (de dag), waardoor die de gehele breedde in beslag neemt. https://github.com/Ties7/the-startup-responsive-interactive-website/blob/main/weatherplanner.css#L157 
Op die manier werkt de grid voor Mobile.

**Desktop**

Naar desktop veranderen een paar dingen en komen er wat dingen bij in de @media. De grid-template-columns veranderd, er komt 2fr bij. https://github.com/Ties7/the-startup-responsive-interactive-website/blob/main/weatherplanner.css#L141 Dit samen met het veranderen van de column-gap op de h3 (https://github.com/Ties7/the-startup-responsive-interactive-website/blob/main/weatherplanner.css#L145) zorgt ervoor dat de h3 links in de rij komt inplaats van erboven.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


