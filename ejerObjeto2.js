function datosPersona(nombre,dia,mes,annio)
{
	this.nombre = nombre;
	this.dia = dia;
	this.mes = mes;
	this.annio = annio;

	this.calcularEdad= function(){
        fecha_hoy = new Date();
        ahora_annio = fecha_hoy.getYear();
        ahora_mes = fecha_hoy.getMonth();
        ahora_dia = fecha_hoy.getDate();
        edad = (ahora_annio + 1900) - this.annio;
            
            if ( ahora_mes < (this.mes - 1)){
              edad--;
            }
            if (((this.mes - 1) == ahora_mes) && (ahora_dia < this.dia)){ 
              edad--;
            }
            if (edad > 1900){
                edad -= 1900;
            }
        return "La edad actual de " + this.nombre + " es " + edad    
    }
}

var persona1 = new datosPersona("Su" , 23 , 8 , 1991);

console.log(persona1.calcularEdad());


