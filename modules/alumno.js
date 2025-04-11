class Alumno {
    constructor(username, DNI) {
      this.username = username;
      this.DNI = DNI;
    }
}

const Alumno1 = new Alumno("Jose_Flor", 48738923)
const Alumno2 = new Alumno("Juan_Manuel", 49120834)

function mostrarAlumnos(){
    console.log(Alumno1)
    console.log(Alumno2)
}

mostrarAlumnos()

module.exports = mostrarAlumnos;