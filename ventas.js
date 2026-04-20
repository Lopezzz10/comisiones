const VENTAS_BASE = 5
function calcularComision(numeroVentas, precioProducto) {
    let comision = 0
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10)
    }
    return comision;
}
function calcular() {
    //recuperamos propiedades de las cajas de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");
    //recuperamos el valor de las cajas de texto
    let sueldoBaseStr = componenteSueldoBase.value;
    let sueldoVentasStr = componenteVentas.value;
    let sueldoPrecioStr = componentePrecio.value;
    //convertimos el texto a numero
    let sueldoBase = parseFloat(sueldoBaseStr)
    let numeroVentas = parseFloat(sueldoVentasStr)
    let precioProducto = parseFloat(sueldoPrecioStr)

    let comision = calcularComision(numeroVentas, precioProducto)

    let total = sueldoBase + comision;

    let spSueldoBase= document.getElementById("spSueldoBase")
    let spComision= document.getElementById("spComision")
    let spTotal= document.getElementById("spTotal")

    spSueldoBase.textContent = sueldoBase
    spComision.textContent = comision
    spTotal.textContent = total
}