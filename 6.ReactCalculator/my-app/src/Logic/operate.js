import Big from "big.js"

export default function operate (numeroUno, numeroDos, operador) {
    const uno = Big(numeroUno || "0")
    const dos = Big(numeroDos || (operador === "/" || operador === "x" ? "1" : "0"))

    if (operador === "+") return uno.plus(dos).toString()

    if (operador === "-") return uno.minus(dos).toString()

    if (operador === "x") return uno.times(dos).toString()

    if (operador === "/") return uno.div(dos).toString()
}

//va a recibir los 3 argumentos de state en app
// el primero es un numero
// segundo es un operador // si detecta que es nro concatena
// tercero otro nro


// plus, minus, times, keyword de big 