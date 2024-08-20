
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.imprimirInfo = function () {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`);
        // return `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
}
const juan = new Persona('Juan', 'Perez', 30);
const pepito = new Persona('Pepito', 'Perez', 25);

console.log(juan); // Jua
juan.imprimirInfo(); // Nombre: Juan Perez, Edad: 30
pepito.imprimirInfo(); // Nombre: Pepito Perez, Edad: 25