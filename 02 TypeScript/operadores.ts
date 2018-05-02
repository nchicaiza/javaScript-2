//operadores

let arregloNumeros = [1, 2, 3, 4, 5];

//let arregloUsuarios = [

let arregloUsuarios: Array<UsuarioArreglo> = [
    //let arregloUsuarios: UsuarioArreglo[] = [
{
    nombre:'adrian',
        edad:28
},
{
    nombre:'nelson',
        edad:38
},
{
    nombre:'guli',
        edad:17
},
{
    nombre:'luis',
        edad:25
},
];


// fat arrow functions

let sumarDosNumeros = (
    numeroUno:number,
    numeroDos:number):number => {
    return numeroUno + numeroDos;
};

console.log(sumarDosNumeros(1, 2));

let potenciaDeUnNumero = numero => {
    return numero * numero;
};

let potenciaDeUnNumeroV2 = numero => numero * numero;



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

let resultadoEdadDeUsuarios = arregloUsuarios.reduce(
    (acumuladoEdad: number,
     usuario: UsuarioArreglo) => {
        return acumuladoEdad + usuario.edad;
    },
    0
);


let nuevoArregloUsuarios = arregloUsuarios.map(
    //el arreglo transformado o mutado
    ( usuario: UsuarioArreglo) => {
        usuario.becado = false;
        return usuario;
    }
).map(
    (usuario: UsuarioArreglo) => {
        usuario.deuda = calcularDeuda(usuario.edad);
            return usuario;
    }
).filter(
    (usuario:UsuarioArreglo)=> {
        return usuario.deuda < 30 // true ,false
    }
).every(
    (usuario:UsuarioArreglo) => {
        return usuario.edad < 18 // true, false
    }
)
    /*.some(
    (usuario:UsuarioArreglo) => {
        return usuario.edad < 18 //true, falso
    }
)*/
    .find(
        ()=
    )

console.log('nuevoArregloUsuarios', nuevoArregloUsuarios);


function calcularDeuda(edadUsuario:number){
    const totalEdad = arregloUsuarios.reduce(
        (total,
         usuario: UsuarioArreglo) =>
            total+ usuario.edad,0
    );
    return totalEdad * (edadUsuario/100);
}


interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
    becado?: boolean;
}