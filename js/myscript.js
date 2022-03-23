/*
    richieste:
    nome
    cognome
    colore preferito
    
    genera pwd:
    nomecognomecolorepreferito21
*/

let userName = prompt('Qual è il tuo nome?');
console.log(userName);

let userSurname = prompt('Qual è il tuo cognnome?');
console.log(userSurname);

let userFavColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavColor);

document.getElementById('saluto').innerHTML += ' '+userName+userSurname+' ! ';

document.getElementById('pwd').innerHTML += ' '+userName+userSurname+userFavColor+Math.floor(Math.random() * 100);