import Precio from ".//precio.js";
import Producto from ".//producto.js";

export default class ElementoPedido {
  /**
   *
   * @param {Producto} producto | Nombre del producto a comprar
   * @param {number} cantidad | Cantidad del producto a comprar
   */
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  getDescripcion() {
    let x = this.cantidad * this.producto.precio.valor;
    return `${this.cantidad} X  ${this.producto.nombre}, ${"$" +
      new Intl.NumberFormat("en-US").format(x)}`;
  }
}
