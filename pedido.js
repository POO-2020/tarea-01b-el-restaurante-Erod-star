import ElementoPedido from ".//elemento_pedido.js";
import Producto from ".//producto.js";
import Precio from ".//precio.js";
import Tiempo from ".//tiempo.js";
import Fecha from ".//fecha.js";
import Cliente from "./cliente.js";

export default class Pedido {
  /**
   *
   * @param {Fecha} fecha | Fecha en que se realizo el pedido
   * @param {Tiempo} hora | Hora en la que se efectuó el pedido
   * @param {Cliente} cliente | Datos del cliente
   * @param {ElementoPedido} elementosPedidos | Elementos Pedidos
   */
  constructor(fecha, hora, cliente, elementosPedidos) {
    this.fecha = fecha;
    this.hora = hora;
    this.cliente = cliente;
    this.elementosPedidos = new Array();
  }
}
