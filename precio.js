export default class Precio{
    /**
     * 
     * @param {string} valor | Valor del artículo 
     */
    constructor(valor){
        this.valor = valor;
    }

    getPrecio(){ 
        return  ('$' + new Intl.NumberFormat('en-US').format(this.valor));
    }

}



