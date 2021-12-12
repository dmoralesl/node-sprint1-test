# Sprint 1 - Tasca 6

Donat que es requeria crear un nou repositori per a aquesta tasca però es fa referècia a codi d'altres tasques de l'sprint 1, he copiat el codi necessari del repositori de les [tasques anteriors](https://https://github.com/dmoralesl/node-sprint1).

## Com executar els test

S'ha escollit JEST com framework per desenvolupar els tests a aquesta tasca. Així s'ha configurat al fitxer package.json.

Tenim dues formes d'executar els test que acabaran llançant exacament el mateix comandament:

```bash
npm test
```

```bash
npm run test
```


## On trobar cada punt de la tasca

<h3 style="color:orange;text-align:center"> Nivell 1</h3>

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Crea un arxiu amb les funcions <b>sumar, restar, multiplicar i dividir</b> dos o més operands. Testeja la correcta execució d'aquestes funcions. </p>

El codi es troba a l'arxiu app/operations.js.

Els tests, a l'arxiu \_\_tests\_\_/operations.test.js. Conté 4 test, un per a cada funció. I dintre de cada test es comprova que la funció torna el valor esperat, que no torna un valor incorrecte i que produeix un error quan no es crida amb el tipus de paràmetre esperat.

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Crea els tests corresponents per verificar el funcionament de l'exercici <b>Async / Await Nivell 1 - Exercici 1 </b></p>

El codi es troba a l'arxiu app/task4.js.

Els tests, a l'arxiu \_\_tests\_\_/task4.test.js. De tots els test que conté aquest arxiu, són els 2 primers els corresponents a aquest punt. Comproven que la funció getEmployee i getSalary funcionen quan es passa un ID valid i que el tipus del valor de la resposta és l'esperat. Inicialment també feien comprovacions amb llançament amb errors, però aquells test s'han passat a un apartat posterior.

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Crea els tests corresponents per verificar el funcionament de l'exercici <b>Async / Await Nivell 2 - Exercici 1 </b></p>

El codi es troba a l'arxiu app/task4.js.

Els tests, a l'arxiu \_\_tests\_\_/task4.test.js. El test del fitxer corresponent a aquest punt és el 3. Es comprova que l'execució de la funció és correcta i que la resposta es torna, almenys, 2 segons després d'haver-se invocat.

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Crea els tests corresponents per verificar el funcionament de l'exercici <b>Promises & Callbacks Nivell 2 - Exercici 3 </b></p>

El codi es troba a l'arxiu app/task4.js.

Els tests, a l'arxiu \_\_tests\_\_/task4.test.js. Tot i que l'enunciat apunta a la tasca 3: Promises & Callbacks, el codi es repeteix a la tasca 4 i ja tenim el fitxer creat, així que s'ha estalviat la creació d'un fitxer i s'ha testat la invocació de les dues funcions getEmployee i getSalary de forma niada. El test corresponent és el 4 dintre d'aquest arxiu.

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Verifica mitjançant tests l'execució de l'exercici <b>Async / Await Nivell 2 Exercici 1</b> utilitzant <b>Jest Fake Timers</b>. </b></p>

El codi es troba a l'arxiu app/task4.js.

Els tests, a l'arxiu \_\_tests\_\_/task4.test.js. El test corresponent a aquest punt és el 5. És el codi immediatament posterior a aquestes configuracions de JEST per poder espiar la crida de la funció setTimeout:

```js
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
```


<h3 style="color:orange;text-align:center"> Nivell 2</h3>


<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Crea un <b>mock</b> que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en l'exercici <b>Classes & Arrow Functions - Nivell 2 Exercici 2</b> </p>

El codi es troba a l'arxiu app/task2.js.

Els tests, a l'arxiu \_\_tests\_\_/task2.test.js. Els tests a aquest fitxer fan un mock del contingut del fitxer app/task2.js, netejant abans de cada test el contingut del mock mitjançant la funció "beforeEach". La finalitat dels tests és comprovar que amb el mock podem espiar quants cops és invocada una funció (inclou el constructor de la classe) i també verificar el contingut d'alguna de les propietats de la classe com el name.

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Verifica mitjançant tests l'exercici <b>Classes & Arrow Functions Nivell 3 - Exercici 1.</b></p>

El codi es troba a l'arxiu app/task2-level3.js.

Els tests, a l'arxiu \_\_tests\_\_/task2-level3.test.js. S'ha separat aquest punt de l'anterior en fitxers diferents, ja que al fer un mock complet del fitxer en el punt anterior, estava afectant al correcte funcionament de la funció generadora. Mantenint ambdos tests en el mateix fitxer feia que el valor de la funció generadora fos "undefined" i no permetia el seu test.

Amb la separació de fitxers solventem el problema i podem testar la funció constructora i com canvia el valor amb cada invocació.


<h3 style="color:orange;text-align:center"> Nivell 3</h3>


<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Refès l'exercici <b>Async / Await Nivell 1</b> accedint a un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un <b>mock del fitxer JSON.</b> </p>

El codi es troba a l'arxiu app/task4-JSON.js.

Els tests, a l'arxiu \_\_tests\_\_/task4-JSON.test.js. S'ha creat un nou fitxer per a matenir el treball fet sobre el fitxer app/task-4.js en punts anteriors. En aquest nou fitxer les dades dels empleats i salaris ja no estan en dues variables estàtiques dintre del fitxer, s'han desplaçat les dades al fitxer app/task4-data.json. Ara les funcions getEmployee i getSalary lligen el fitxer i es queden amb l'atribut del objecte que interessen en cada cas.

Per al test, i amb la finalitat de comprovar que el mock del fitxer JSON altera el contingut del JSON real, s'ha modificat el name del employee "Bill Gates" i s'ha anomenat "Bill Mates". Per aquest motiu, s'ha canviat el test que verificava que l'employee amb ID = 2 tenia com a name "Bill Gates" i ara es comprova que té com a nom "Bill Mates". Al ser satisfactori el test, podem veure que el mock del fitxer JSON està funcionant correctament.

<p style="font-style:italic;background-color:#bbb1b1;color:white;padding:1rem"> Utilitzant com a base l'exercici <b>Async / Await Nivells 2 i 3</b>, crea un test que <b>forci errors de funcionament</b> i verifiqui que l'error llançat per la funció és l'esperat.</b> </p>

El codi es troba a l'arxiu app/task4.js.

Els tests, a l'arxiu \_\_tests\_\_/task4.test.js. El bloc de tests està identificat amb un comentari "//LEVEL 3". Per desgràcia (o per sort) la majoria d'errors estaven controlats amb clàusules try/catch. Així que fer que el llançament de les funcions donin error no ha estat fàcil, i no s'ha pogut fer servir el mètode toThrow() propi del mètode expect() al ser una funció asíncrona i tenir que capturar l'error amb ".catch()"'. Però ja s'havia fet servir  "toThrow()" al primer excercici del primer nivell, així que s'ha pogut practicar una mica.

Pel que fa als tests sobre el codi que es requereix a aquesta activitat, en els casos que ha estat possible, s'ha comprovat que el message de l'error controlat sigui el que s'esperava i que el name (type) de l'error fos també el que s'havia definit a la clàusula catch en cada cas.
