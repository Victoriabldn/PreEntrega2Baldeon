//Acceso a comprar
const decision = prompt('Eres mayor de 18 años?')
if (decision === 'si') {
    productoEscogido = prompt(
        'Escoge el producto que deseas comprar: Vino Malbec-Cabernet franc- Torrontes ?'
    )
    // condición pa fin del ciclo
} else {

    seguirComprando = false 
    {

            alert ('Debes ser mayor de edad para continuar') 
    
    }

    //Clases

class Producto {
    constructor(variedad, nombre, precio, disponible) {
        this.variedad = variedad
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }

}

//variables products
const producto1 = new Producto('Malbec', 'Vino Malbec', 2300, 76)
const producto2 = new Producto('Cabernet Franc', 'Vino Cabernet Franc', 1800, 64)
const producto3 = new Producto('Torrontes', 'Vino Torrontes', 1650, 42)
console.log(producto1)
console.log(producto2)
console.log(producto3)

//Array prod
const productos = [Malbec, CabernetFranc, Torrontes]
console.log(productos) 

}
//cartel para comprar producto en stock

    const producto = prompt('qué producto deseas adquirir (escriba tal cual el nombre) -Vino Malbec -Cabernet Franc -Torrontes  ').toLocaleLowerCase()

    // LA COMPRA


//creación de carrito de compras
const carrito = []

//elección de producto por parte del usuario
let productoEscogido = prompt(
    'Escoge el producto que deseas comprar: Vino Malbec- cabernet franc-Torrontes'
).toLowerCase()
// var para condicion del ciclo
let seguirComprando = true

//ciclo de compra
while (seguirComprando === true) {
    // buscar el producto escogido
    const producto = productos.find(
        (producto) => producto.categoria === productoEscogido
    )
    // guardar producto en carrito y exist 
    if (producto) { 
        const disponible = producto.existencia 
        const cantidadReq = (parseInt(prompt('Indica la cantidad que deseas comprar')))
        if ((cantidadReq) > (disponible)) {
            alert('elige una cantidad menor de producto')
        } else {
            alert('Has agregado la cantidad de ' + cantidadReq + ' de' + ' ' + producto.nombre)
        }
        producto.requerido = cantidadReq

        //sumar al carrito el producto  y verif dispo 

        carrito.push(producto)
    } else {
        productoEscogido = prompt(
            'Escoge un producto correcto: Vino Malbec - Cabernet Franc - Torrontes'
        )
        continue
    }
    //agregar otro item a su orden
    const decision = prompt('Deseas seguir comprando? si-no')
    if (decision === 'si') {
        productoEscogido = prompt(
            'Escoge el producto que deseas comprar: Vino Malbec -Cabernet Franc- Torrontes'
        ) 
    } else {
        seguirComprando = false
    }
}


//CARRITO 
console.log(carrito);

//valor ini 
let totalCompra = 0

//cálculo del Valor Total de la orden  
carrito.forEach(producto => {
    subtotal = (producto.precio) * (producto.requerido)
    totalCompra = totalCompra + subtotal
})
alert('El total de tu compra es: ' + totalCompra + ' pesos')

//llamada a la función pagar
pagar()


