console.log('Hola Mundo');
var mutar;
var nombre = 'Nelson';
mutar = nombre;
var edad = 37;
var peso = 305.1;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null;
var noEstoyDefinido = undefined;


//cmd +a = seleccionara
// cmd +alt + l = identar
if (noExisto) {

    console.log('verdadero');

} else{

    console.log('falso');
}


//Json

var usuario = {
    "nombre":"Nelson",
    apellido:"Chicaiza",
    cedula: 'Chicaiza',
    edad: 37,

    edadAlCuadrado

    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    }
};





console.log(usuario.nombre); // Nelson
console.log(usuario);

delete usuario.edad;
console.log(usuario);

usuario.fechaNacimiento = new Date();
console.log(usuario);

usuario.mascotas = {};
usuario.mascotas.nombre = "Nelson";
console.log(usuario);

var arreglo = [1,"Adrian", true, undefined, null, new Date(), {
    nombre: "Nelson"
},
    [1, 2, 3, true]
];


function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2.223));

var potenciaDeDosNumeros = function noEsNecesarioPonerElNombre(numero){
    return numero * numero;
}

//funciones anonimas
var potenciaDeDosNumeros = function (numero) {
    return numero * numero;
};
console.log(potenciaDeDosNumeros(3, 23, 34, 54))

usuario.imprimir();

usuario.imprimir;


var arreglo =

