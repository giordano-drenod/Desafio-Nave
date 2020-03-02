function substituiValores(editarString) {
    editarString = editarString.replace(/4/g, "a");
    editarString = editarString.replace(/3/g, "e");
    editarString = editarString.replace(/1/g, "i");
    editarString = editarString.replace(/5/g, "s");
    return editarString;
}

var editarString = 'T35t3 d3 35t4g1o';
var dicionario = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
editarString = substituiValores(editarString);
console.log(editarString);