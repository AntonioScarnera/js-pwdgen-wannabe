/*
    richieste:
    nome
    cognome
    colore preferito
    
    genera pwd:
    nomecognomecolorepreferito + numero random


    flowchart code:
    
    A[start]-->B[richiesta del nome]
    B-->C[richiesta del cognome]
    C-->D[richiesta del colore preferito]
    D-->E[creazione della password]
    E-->stop
*/

let userName = prompt('Qual è il tuo nome?');
console.log(userName);

let userSurname = prompt('Qual è il tuo cognnome?');
console.log(userSurname);

let userFavColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavColor);

document.getElementById('saluto').innerHTML += ' '+userName+userSurname+' ! ';

document.getElementById('pwd').innerHTML += ' '+userName+userSurname+userFavColor+Math.floor(Math.random() * 100);