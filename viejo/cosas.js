"use strict";
exports.__esModule = true;
exports.getById = exports.getAll = void 0;
var arrayDeObjetos = [
    { id: 1, nombre: 'juan', apellido: 'riva' },
    { id: 2, nombre: 'luciana', apellido: 'herraiz' },
    { id: 3, nombre: 'maria', apellido: 'riva' },
    { id: 4, nombre: 'alfonso', apellido: 'riva' },
    { id: 5, nombre: 'agustin', apellido: 'riva' },
    { id: 6, nombre: 'adrian', apellido: 'riva' }
];
function getAll() {
    return console.log(arrayDeObjetos);
}
exports.getAll = getAll;
function getById(entradaArgumentos) {
    var encontrada = arrayDeObjetos.find(function (element) { return entradaArgumentos == element.id; });
}
exports.getById = getById;
