const read = require ("./texto.json")



function ler (texto) {


    return new Promise (resolve =>{

        resolve (console.log (texto))
    })
}


ler(read)