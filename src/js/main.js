console.group("Funciones")
console.groupCollapsed("funcion declarativa")
function saludar(grupo) {
    console.log(`Hola ${grupo}, hoy es un nuevo día`)
}

saludar("tombos")

/* Necesito un programa que envíe una notificación al celular de los coders, debe enviar una notificación para saludar y también una notificacion para desperdir al codde 

En ambos casos se dene dar en la notificación el nombre del coder
*/
//     let usuario = String(prompt("Hola, ingresa tu nombre"))
let hora = new Date().getHours()

function saludarCoder (coder, hora) {
    if (hora >= 5 && hora < 12) {
        alert(`Buenos días ${coder}, que tengas un gran día`)
    } else if (hora >= 12 && hora <=18) {
        alert(`Buenas tardes ${coder}, espero que estés teniendo un gran día`)
    } else  {
        alert(`Buenas noches ${coder}, qué tengas feliz noche`)
    }
}
// saludarCoder(coder, hora)//No sirve para loq ue nos piden

function sumarDosNumeros(numero1, numero2) {
    let respuesta = numero1 + numero2
    return respuesta
}
console.log(sumarDosNumeros(1, 2))

// let userName = String(prompt("Ingrese su usuario..."))
// let passWord = Number(prompt("Ingrese su contraseña..."))

function login(user, password) {
    if (user === "admin" && password === 12345) {
        saludarUser(user)
    } else {
        error(user)
    }
}

function saludarUser(userBienvenida) {
    alert(`Bienvenido ${userBienvenida}`)
}

function error(userError) {
    alert(`El usuario "${userError}" o la contraseña no son válidos`)
    console.error(`El usuario "${userError}" o la contraseña no son válidos`)
}

// login(userName, passWord)



uno()//se puede llamar a la funcion antes de delcararla

function uno() {
    console.log("Esta es una función declativa")
}
//dos() No se puede llamar antes de declarar la función
const dos = function dos() {
    console.log("Esta es una función expresiva")
}
dos()
console.groupEnd()
console.groupEnd()