
class Persona {

    static porObjeto({ nombre, apellido, edad }) {
        return new Persona(nombre, apellido, edad);
    }

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getInformacion() {
        return `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
}

const persona1 = new Persona('Juan', 'Perez', 30);
const persona2 = Persona.porObjeto({ nombre: 'Maria', apellido: 'Lara', edad: 35 });
console.log(persona1.getInformacion());
console.log(persona2.getInformacion());