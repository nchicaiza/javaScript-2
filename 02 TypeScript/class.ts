/**console.log('Hola Mundo');
let hola: number | string;
//let hola:any;
const adios = 'Adios';
hola = 1;
hola = '123';
//adios = 'asdasd**/

let nombre: string = 'adrian';
let edad: number = 37;
let casado: boolean = true;
let fechaNcimiento: Date = new Date();


class Usuario {
    nombre:string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string,
                casado: boolean,
                edad: number){
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}

var nelson: Usuario = new Usuario(nombre:'adrian' , casado:true, edad:37);


class UsuarioDos {
    constructor(public nombre:string,
                private _casado: boolean,
                protected _edad: number){

    }
    get casado() {
        return this._casado;
    }
    set casado(casado: boolean){
        this._casado = casado
    }

     imprimirUsuario(saludo: string): string {
        //template strings
         return `${saludo}. mi nombre es ${this.nombre}, estoy casado ${this.casado}, mi edad es ${this._edad};`

    }

}

let adrainDos = new UsuarioDos(nombre:'Adrian', casado:false, edad: 28);

console.log(adrianDos.casado);
console.log(adrianDos.imprimirUsuario(saludo: 'hola soy Goku'));

let carla: UsuarioTres = {
    nombre: 'ADrian',
    casado: false,
    edad: 28
};

interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;
}

console.log(carla);


