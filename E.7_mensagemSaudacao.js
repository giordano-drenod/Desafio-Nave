var cont;
var objetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
    ];

for (cont=0;cont<objetos.length;cont++) {
    var colocaMaiuscula = objetos[cont].nome.charAt(0).toUpperCase() + objetos[cont].nome.substring(1);
    console.log("Olá, " + colocaMaiuscula + " " + objetos[cont].sobrenome);
}