function substituiValores(editarString) {
    editarString = editarString.replace(/1|2|3/g, "[removido]");
    return editarString;
}

var editarString = "teste 1 de 2 string 3";
editarString = substituiValores(editarString);
console.log(editarString);