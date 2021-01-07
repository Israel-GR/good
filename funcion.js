// eta es una funcion constructora  del mundo
function mundo(pais,estado){
    this.pais = pais;
    this.estado = estado;
}
var salida = new mundo("estados unidos","Neo york");
document.write(salida.pais);
//salida es estados unidos.
