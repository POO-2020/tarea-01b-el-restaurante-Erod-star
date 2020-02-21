import ElementoPedido from ".//elemento_pedido.js";
import Producto from ".//producto.js";
import Precio from ".//precio.js";
import Tiempo from ".//tiempo.js";
import Fecha from ".//fecha.js";
import Pedido from ".//pedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Restaurante from "./restaurante.js"

class Main {
  constructor() {
    this.pedido = new Pedido(
      new Fecha(22, 1, 2020),
      new Tiempo(5, 23, 'PM'),
      new Cliente('Edson',
        new Direccion('Paseo de Azaleaz', 24, 'Jaime', 20, 'Colima', 'Noruega'),
        3121135597));

    this.restau = new Restaurante('Gusteau', '911', 'Marte, luna sur');
  }


  testElementoPedido() {
    let x = new ElementoPedido(new Producto("Pizza", new Precio(2500.5)), 2);
    console.log(x.getDescripcion());
  }

  testPedido() {
    console.log(this.pedido.getNumeroElementos());
    console.log(this.pedido.getCostoTotal());
    console.log(this.pedido.getProductos());
    console.log(this.pedido.getResumen());
  }

  agregarElemento() {
    let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2);
    let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4);
    this.pedido.agregarElemento(elem1);
    this.pedido.agregarElemento(elem2);
    this.pedido.listarElementos();
  }

  testRestaurante() {
    this.restau.registrarProductos(new Producto('Sopa do Makako', new Precio(200.500)));
    this.restau.registrarProductos(new Producto('Coca de piña', new Precio(25.500)));
    this.restau.listarProductos();


    let pedido1 = new Pedido(
      new Fecha(15, 12, 2019),
      new Tiempo(8, 15, 'PM'),
      new Cliente('Edson', new Direccion('Paseo de Azaleaz', 24, 'Jaime', 20, 'Colima', 'Noruega'), 3121135597));

    let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2);
    let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4);
    pedido1.agregarElemento(elem1);
    pedido1.agregarElemento(elem2);

    let pedido2 = new Pedido(
      new Fecha(14, 2, 2020),
      new Tiempo(10, 15, 'AM'),
      new Cliente('Jhonny', new Direccion('Solidaridad', 24, 'Jorge', 20, 'Colima', 'Árboledas del crimen'), 3121135597));

    let elem4 = new ElementoPedido(new Producto('Sopa do Makako', new Precio(102.500)), 4);
    let elem3 = new ElementoPedido(new Producto('Coca de piña', new Precio(25.500)), 10);
    pedido2.agregarElemento(elem3);
    pedido2.agregarElemento(elem4);

    this.restau.registrarPedido(pedido1);
    this.restau.registrarPedido(pedido2);

    this.restau.listarPedidos();

  }
}

let app = new Main();

app.testRestaurante();