import Precio from ".//precio.js";

export default class Producto{
    /**
     * 
     * @param {string} nombre | Nombre del producto a comprar
     * @param {Precio} precio | Valor del producto a comprar
     */
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getDescription(){
        return `${this.nombre} ${this.precio.getPrecio()}`;
    }
}

let art1 = new Producto('Pizza',new Precio(25000.50));
console.log(art1.getDescription());
