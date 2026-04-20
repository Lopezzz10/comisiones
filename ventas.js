const VENTAS_BASE = 5

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10)
    }
    return comision;
}

function validarCampo(id, idError) {
    const valor = recuperarTexto(id)
    const span = document.getElementById(idError)

    if (valor.trim() === "") {
        span.textContent = "Este campo no puede estar vacío."
        span.className = "error-msg"
        return false
    }
    if (!/^\d+$/.test(valor)) {
        span.textContent = "Solo se permiten números enteros."
        span.className = "error-msg"
        return false
    }
    if (valor.length > 5) {
        span.textContent = "Máximo 5 dígitos."
        span.className = "error-msg"
        return false
    }

    span.textContent = ""
    span.className = ""
    return true
}

function validarVentas(){
    return validarCampo("txtVentas", "errVentas")
}

function calcular() {
    const v1 = validarCampo("txtSueldoBase", "errSueldoBase")
    const v2 = validarCampo("txtVentas",     "errVentas")
    const v3 = validarCampo("txtPrecio",     "errPrecio")

    if (!v1 || !v2 || !v3) return

    //recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");
    //recuperamos el valor de las cajas de texto
    //let sueldoBaseStr = componenteSueldoBase.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductoStr = recuperarTexto("txtPrecio")
    //let numeroVentasStr = componenteVentas.value;
    //let precioProductoStr = componentePrecio.value;
    //convertimos el texto a numero
    let sueldoBase = recuperarFloat("txtSueldoBase")
    let numeroVentas = recuperarFloat("txtVentas")
    let precioProducto = recuperarFloat("txtPrecio")

    let comision = calcularComision(numeroVentas, precioProducto)

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase")
    let spComision   = document.getElementById("spComision")
    let spTotal      = document.getElementById("spTotal")

    spSueldoBase.textContent = sueldoBase
    spComision.textContent   = comision
    spTotal.textContent      = total
}