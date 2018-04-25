/**console.log('Hola Mundo');
let hola: number | string;
//let hola:any;
const adios = 'Adios';
hola = 1;
hola = '123';
//adios = 'asdasd**/
var nombre = 'adrian';
var edad = 37;
var casado = true;
var fechaNcimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var nelson = new Usuario(nombre, 'adrian', casado, true, edad, 37);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //template strings
        return saludo + ". mi nombre es " + this.nombre + ", estoy casado " + this.casado + ", mi edad es " + this._edad + ";";
    };
    return UsuarioDos;
}());
var adrainDos = new UsuarioDos(nombre, 'Adrian', casado, false, edad, 28);
console.log(adrianDos.casado);
console.log(adrianDos.imprimirUsuario(saludo, 'hola soy Goku'));
var carla = {
    nombre: 'ADrian',
    casado: false,
    edad: 28
};
console.log(carla);
