import ElementoPedido from ".//elemento_pedido.js";
import Producto from ".//producto.js";
import Precio from ".//precio.js";
import Tiempo from ".//tiempo.js";
import Fecha from ".//fecha.js";
import Pedido from ".//pedido.js";

class Main {
  testElementoPedido() {
    let x = new ElementoPedido(new Producto("Pizza", new Precio(2500.5)), 2);
    console.log(x.getDescripcion());
  }
}

let app = new Main();
app.testElementoPedido();
