function comparaStrings(primeiraString, segundaString) {
    var tamanhoPrimeira = primeiraString.length;
    var tamanhoSegunda = segundaString.length;

    if (tamanhoPrimeira != tamanhoSegunda)
    {
        if (tamanhoPrimeira > tamanhoSegunda)
            return primeiraString;
        else
            return segundaString;
    }
    else
        return -1;
}

var primeiraString = "Roberto";
var segundaString = "João";

if (comparaStrings(primeiraString, segundaString) == primeiraString)
    console.log("A maior String é a primeira (" + primeiraString + ")");

if (comparaStrings(primeiraString, segundaString) == segundaString)
    console.log("A maior String é a segunda (" + segundaString + ")");

if (comparaStrings(primeiraString, segundaString) == -1)
    console.log("Ambas as Strings possuem o mesmo tamanho.");