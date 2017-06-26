function Persona(nombre,edad,pasatiempo)
{
	this.nombre = nombre;
	this.edad = edad;
	this.pasatiempo = pasatiempo;
    this.mostrarDatos = function(){
    	return "hola soy " + nombre + " tengo " + edad + " y me gusta " + pasatiempo
    }
	
}

var person1 = new Persona("Chio",23,"escuchar musica");

console.log(person1.mostrarDatos());