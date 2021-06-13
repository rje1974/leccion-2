import {getAll,getById} from "./cosas"

function parsearARGV() {
    const idBuscadoStringficado = process.argv.slice(2)
    const idBuscado: number = +idBuscadoStringficado;
    return idBuscado
}

function main(){
    console.log(getAll(),getById(parsearARGV()));
}

main()

export {parsearARGV}