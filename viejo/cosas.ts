import { setImmediate } from "timers";


export { getAll, getById}

const arrayDeObjetos:object = [
    {id: 1, nombre: 'juan', apellido: 'riva'},
    {id: 2, nombre: 'luciana', apellido: 'herraiz'},
    {id: 3, nombre: 'maria', apellido: 'riva'},
    {id: 4, nombre: 'alfonso', apellido: 'riva'},
    {id: 5, nombre: 'agustin', apellido: 'riva'},
    {id: 6, nombre: 'adrian', apellido: 'riva'}
]
function getAll(){
    return console.log(arrayDeObjetos)
}

function getById(entradaArgumentos:number){
   const encontrada = arrayDeObjetos.find(
       (element: { id: number; }) => entradaArgumentos == element.id
   )
}
