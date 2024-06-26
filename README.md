# js-campominato-grid

PARTE 1
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

PARTE 2
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

-------------------PARTE 1---------------------
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

-------------------PARTE 2---------------------
- cambiare il metodo di aggiornamento in modo che il tasto "play" generi una nuova griglia. (Per prevenire futuri conflitti)
    - racchiudere la creazione della grigli in una funzione
    - are in modo con innerHtml che il contenitore della griglia si svuoti prima di creare la griglia.
- creo una funzione che rimandi 16 numeri casuali dato un determinato range di numero min-max senza ripetizioni
    - utilizzo un ciclo while durante la creazione dei numeri per implementare i parametri di controllo di controllo
    - all'interno della funzione fare in modo che per ogni numero associato, venga aggiunta una classe "bomba" alle celle in questione
- Creo una condizione di partita in cui preparo le condizioni di "game over"
    - prima condizione: se il giocatore clicca su una cella "bomba" il gioco finisce e disattiva la possibilità di cliccare
    - seconda condizione: se il giocatore clicca su tutte le celle buone e rimangono solo "bombe" il gioco finisce e disattiva la possibilità di cliccare

-----------------BONUS--------------------------
- implementazione bonus a seguire una volta che la struttura base è completata e funzionante