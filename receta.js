class Receta {
  constructor(nombreReceta) {
    this.nombre = nombreReceta;
    this.ingredientes = [];
  }

  addIngrediente(ingrediente, cantidad) {
    this.ingredientes.push([ingrediente, cantidad]);
  }

  get getNombre() {
    return this.nombre;
  }

  puedeSerPreparada(cocina) {
    //....codigo ya implementado ....
    return true; //retorno a modo de ejemplo
  }
}

export { Receta };
