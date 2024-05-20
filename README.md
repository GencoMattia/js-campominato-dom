# js-campominato-grid

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


- creare struttura container in file html
- aggiungere classi generiche in css per stilizzare container e tabella futura
- js: creare un ciclo for reiterativo un numero di volte pari al numero di celle all'interno della griglia
- creare elemento cella, e elemento testo interno alla cella.
- recuperare container da file html in js
- appendere elemento cella con elementi interni reitaranti con il ciclo
- creare una condizione if che assegna diverse classi in base al contenuto della cella.
- aggiungere evento click sulle celle aggiungendo classi al click  
- iniziare a creare la macrostruttura su html con header e elementi interni
- aggiungere tasto "play" 
- JS: connettere il tasto play con un event-listener in modo che resetti lo stato delle celle.
    - possibilmente rimuovendo le classi aggiunte al click