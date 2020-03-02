var cont;
var objetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
    ];

for (cont=0;cont<objetos.length;cont++) {
    if (objetos[cont].idade <= 25)
        console.log(objetos[cont].nome + " tem " + objetos[cont].idade+" anos; ");
}