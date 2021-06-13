import { parsearARGV } from "./index"

const arrayDeObjetos = [
    {nombre: "Luciana", id: 2},
    {nombre: "Juan", id: 3},
    {nombre: "Alfi", id: 1},
    {nombre: "Agus", id: 4}
]


function getAll(){
    return console.table(arrayDeObjetos)
}

function getById(parsearARGV){
    const busqueda = arrayDeObjetos.find(function(item){
        if (item.id == parsearARGV) {
            console.log(item)
        }
    })
}

export {getAll,getById}
