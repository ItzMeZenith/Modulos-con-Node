const concatenar = require('./concatenar')
const interpolar = require('./interpolar')
const matematica = require('./modules/matematica')
const alumno = require('./modules/alumno')
leerArchivo()

function leerArchivo(){
    const fs = require('node:fs');

    fs.readFile('./hola.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

const parsearUrl = () => {
    const url = require('url');
    //const address = new URL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
    const address = new URL("sedfsdgfesdfvcx");

    addressString = address.toString()

    let objeto = url.parse(addressString, true);
    
    console.log(objeto.host); 
    console.log(objeto.pathname);
    console.log(objeto.query);
}

function parsearUrlDos(){
    try{ 
        parsearUrl()
    }catch(error){
        console.log("ERROR")
    }
}

parsearUrlDos()


function plataPais(){
    const countryToCurrency = require('country-to-currency');

    const monedaPais = (moneda) => {return countryToCurrency[moneda];}

    let moneda = monedaPais("AR");
    console.log(moneda);
}

plataPais()