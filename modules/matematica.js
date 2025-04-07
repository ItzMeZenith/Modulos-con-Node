const pi = 3.14
let num1 = 12
let num2 = 10

const suma = () => {
    console.log(num1+num2)
}

const resta = () => {
    console.log(num1-num2)
}

const multiplicacion = () => {
    console.log(num1*num2)
}

const division = () => {
    console.log(num1/num2)
}

const piMasUno = () => {
    console.log(pi+1)
}

const matematica = () => {
    suma()
    resta()
    multiplicacion()
    division()
    piMasUno()
}

matematica()
 
module.exports = matematica;