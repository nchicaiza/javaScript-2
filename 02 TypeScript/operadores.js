//operadores
var arregloNumeros = [1, 2, 3, 4, 5];
//let arregloUsuarios = [
var arregloUsuarios = [
    //let arregloUsuarios: UsuarioArreglo[] = [
    {
        nombre: 'adrian',
        edad: 28
    },
    {
        nombre: 'nelson',
        edad: 38
    },
    {
        nombre: 'guli',
        edad: 17
    },
    {
        nombre: 'luis',
        edad: 25
    },
];
// fat arrow functions
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1, 2));
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
var potenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
/*let resultadoForEach =
    arregloNumeros.forEach(
        (valorActual, indiceActual, arreglo) => {

            sumaTotal = sumaTotal + valorActual;
            console.log(valorActual);
            console.log(indiceActual);
            console.log(arreglo);

        }
    );

console.log(resultadoForEach);
console.log(SumaTotal);

let resulatadoSumaConReduce = arregloNumeros.reduce(
    (valorAcumuladoActual, valorActualArreglo) => {
        console.log('valorAcumuladoActual',
            valorAcumuladoActual);
        console.log('valorActualArreglo',
            valorActualArreglo);
        return valorAcumuladoActual + valorActualArreglo;
    },
    0
);*/
//console.log(resulatadoSumaConReduce);
var resultadoEdadDeUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) {
    return acumuladoEdad + usuario.edad;
}, 0);
var nuevoArregloUsuarios = arregloUsuarios.map(
//el arreglo transformado o mutado
function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return usuario.deuda < 30; // true ,false
}).every(function (usuario) {
    return usuario.edad < 18; // true, false
})
    .find(() =
);
console.log('nuevoArregloUsuarios', nuevoArregloUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) {
        return total + usuario.edad;
    }, 0);
    return totalEdad * (edadUsuario / 100);
}
