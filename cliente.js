import Direccion from ".//direccion.js";

export default class Cliente{
    /**
     * 
     * @param {string} nombre | Nombre del cliente
     * @param {Direccion} direccion | Dirección del cliente
     * @param {number} telefono | Teléfono del cliente
     */
    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getPerfil(){
        return `${this.nombre}, 
        \n${this.direccion.getFormatoCorto()}, 
        \nTeléfono: ${this.telefono}`;
    }
}

let clien1 = new Cliente('Edson Arturo Rodríguez Govea',new Direccion('Paseo de Azaleaz',246,'Jardines de Bugambilias',28978,'Colima','Villa de ALvarez'),3121135597);
console.log(clien1.getPerfil());