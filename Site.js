var testMoyenne=SitePPP.querySelector('input');

testMoyenne.addEventListener('click', moyTot);

function moyTot() {
let moyDocNum=prompt("Entrez votre moyenne de Document Numérique :");
let moyAlgo=prompt("Entrez votre moyenne d'Algorithmique :");
let moyBD=prompt("Entrez votre moyenne de Base de donnée(s) :");
let moyPython=prompt("Entrez votre moyenne de Python :");
alert(moyBD+moyAlgo+moyDocNum+moyPython/4);
}
