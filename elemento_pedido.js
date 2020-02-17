import Precio from ".//precio.js";
import Producto from ".//producto.js";

export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto | Nombre del producto a comprar
     * @param {number} cantidad | Cantidad del producto a comprar
     */
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getDescripción(){
        let x = this.cantidad * this.producto.getPrecio();
        return `${this.cantidad} X  ${this.producto}, ${x}`
    }
}

/*getDescripción(){
    x = this.cantidad * this.precio.getPrecio();
    return `${this.cantidad} X ${this.producto} ${x}`
}
*/

let art1 = new ElementoPedido(new Producto('Pizza grande mexicana', new Precio(200)),2);
console.log(art1.getDescripción());
