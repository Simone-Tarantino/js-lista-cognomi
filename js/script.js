// Chiedi all’utente il cognome
var userSurname = prompt("Inserisci il tuo cognome:");
// inseriscilo in un array con altri cognomi
var surnameList = ["Rossi", "Verdi", "Bianchi"];
surnameList.push(userSurname);
console.log(surnameList);
// stampa la lista ordinata alfabeticamente (in html ul > li)
surnameList.sort();
console.log(surnameList);
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.






var i = 0;
var n = 1;
do {
  document.getElementById("surname_list").innerHTML += "<li>" + n + " " + surnameList[i] + "</li>";
  i++;
  n++;
} while (i < surnameList.length);
console.log(surnameList);
