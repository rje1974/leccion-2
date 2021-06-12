"use strict";
exports.__esModule = true;
var cosas_1 = require("./cosas");
function entradaArgumentos() {
    var processArgv = Number(process.argv.slice(2).toString());
    var numero = processArgv;
    return numero;
}
function mostrarnumero() {
    if (entradaArgumentos() >= 0) {
        console.log(cosas_1.getById(entradaArgumentos()));
    }
    else {
        console.log(cosas_1.getAll());
    }
}
function main() {
    mostrarnumero();
}
main();
