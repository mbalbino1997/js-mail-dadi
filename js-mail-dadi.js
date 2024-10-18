/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/
const emailList = ["esempio1@hotmail.it", "esempio2@gmail.com", "esempio3@outlook.com"];
const userMail = prompt("Inserisci la tua email");
let text="la sua email non è tra quelle autorizzate ad accedere";
/* let text="";
if (emailList.includes(userMail)) {
    text="Accesso consentito";
} else {
    text="la sua email non è tra quelle autorizzate ad accedere";
}*/


for(let i=0;i<emailList.length;i++) {
    if(emailList[i]===userMail) {
        text="Accesso consentito";
    }
}
console.log(text);
/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
const player = Math.floor(Math.random()*6)+1;
const computer = Math.floor(Math.random()*6)+1;
let text2 = "Parità";
if (player>computer) {
    text2 = "Hai vinto"
} else if (computer>player) {
    text2 = "Hai perso"
}
console.log(`Il tuo punteggio: ${player}\nIl punteggio del computer: ${computer}\nRISULTATO: ${text2}`);
//generatore random
const list = ["Luigi", "Marco", "Sara", "Giovanni", "Luca", "Riccardo", "Davide", "Nicola"];
const selected = list[Math.floor(Math.random()*list.length)];
console.log(selected);