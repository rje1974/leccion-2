import {getAll,getById} from "./cosas" 

function entradaArgumentos() {
    const processArgv = Number(process.argv.slice(2).toString());
    const numero = processArgv;
    return numero;
}

function mostrarnumero(){
    if (entradaArgumentos() >= 0) {
        console.log(getById)
    } else {
        console.log(getAll())
    }
}


function main (){
    mostrarnumero();
}

main()