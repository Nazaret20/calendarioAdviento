//--------Abrir y cerrar modal------
const btnAbrirModal = document.querySelector(".btn-abrir-modal")
const btnCerrarModal = document.querySelector(".btn-cerrar-modal")
const modalContainer = document.querySelector(".modal-container")

btnAbrirModal.addEventListener("click", () => {
  modalContainer.showModal()
})

btnCerrarModal.addEventListener("click", () => {
    modalContainer.close()
  })
//-------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    // Solo activo en diciembre
    if (currentMonth !== 12) {
        console.error('El calendario de Adviento solo está activo en diciembre');
        return;
    }

    // Selecciono todos los botones de días
    const diasBtn = document.querySelectorAll('.btn-abrir-modal');

    diasBtn.forEach(btn => {
        const diaNumero = parseInt(btn.getAttribute('data-day'));
        const modalContainer = btn.nextElementSibling;
        const btnCerrar = modalContainer.querySelector('.btn-cerrar-modal');

        // Si el día es mayor al día actual, deshabilito el botón
         if (diaNumero > currentDay) {
             btn.disabled = true;
             btn.style.opacity = '0.5';
             btn.style.cursor = 'not-allowed';
         }

        btn.addEventListener('click', () => {
            modalContainer.showModal()
        });

        btnCerrar.addEventListener('click', () => {
            modalContainer.close()
        })
    })
})

//---------------JUEGO---------------
document.addEventListener('DOMContentLoaded', () => {
const principioRelacion = new Date('2022-04-24')

let fechaActual = new Date()

//Con esto calculamos los días de relación que llevamos
let diasDeRelacion = fechaActual - principioRelacion 

//Nos da los milisegundos como resultado, así que hay que pasarlos a días. Se hace multiplicando ms*m*h*d
let diasTotalesDeRelacion = Math.floor(diasDeRelacion / (1000 * 60 * 60 * 24))

//Ahora necesitamos un bucle para recorrer los días de 100 en 100
for(let i = 100; i <= diasTotalesDeRelacion; i += 100){
  //console.log(`Han pasado ${diasTotalesDeRelacion} días. Quiero multiplicar este número por tanto como nos deje la vida💙`)
}

//Mensajes para cada tramo
const mensajes = {
  '0-100': 'Nuestro principio es digno de un fic, nos conocimos por culpa de una novelita de dos lesbianas. Y nuestras cabecitas se lo pasaban muy bien ideando cosas...',
  '101-200': 'He calculado los días, y resulta que en este tramo, a los 132 días contando desde el primer día que empezamos a hablar, nos dijimos las dos al mismo tiempo, el primer "te quiero". Qué bonito, mi vida.',
  '201-300': 'Y así hemos ido sumando los días hasta hoy, ¡y resulta que lo quiero multiplicar!',
  '301-400': 'Seguir sumando cada 24 a tu lado, es símbolo de todo el amor que nos tenemos.',
  '401-500': 'Darme cuenta de tantos días a tu lado, todo lo que pasamos y seguimos más unidas que nunca... Mi patata explota.',
  '501-600': 'Los siguiente tramos son la evolución de cómo nos transmitimos el amor que sentimos.',
  '601-700': '"Te adoro" sonaba menos fuerte al principio.',
  '701-800': '"Te quiero" nos salió tímidamente pero con una fuerza a la altura de nuestro amor.',
  '801-900': '"Te amo" llegó con el tiempo para quedarse porque ya nada se puede igualar a lo que sentimos.'
}

//Añadimos el botón del juego y el input
const botonJuego = document.getElementById('btn-jugar')
const inputNumero = document.querySelector('.input-numero')

//Función para detectar el número y enseñar el mensaje
function mensajeDeRelacion() {
    
    //Esto cogerá el número del input con parseInt que cambia el string a número
    const numero = parseInt(inputNumero.value)

    //Esto es is not a number, para que siempre sea un número
    if (isNaN(numero)) {
        alert('Te he pillado... Debe ser un número, amor.')
        return
    }


    //Con esto encontrará el mensaje en el objeto, rango cada tramo y mensaje cada mensaje. Split separa el rango en un array con dos elementos y map convierte los string de ese array en números.
    let mensajePersonalizado = 'Ops...'

    for (let [rango, mensaje] of Object.entries(mensajes)) {

        const [inicio, fin] = rango.split('-').map(Number);

        //Esto es para rangos mayores de 901+ donde no hay valor
        if (fin === undefined && numero >= inicio) {
            mensajePersonalizado = `Has elegido el ${numero}. El mensajito es: ${mensaje}`
            break;
        }

        //Y este es para los rangos de inicio a fin
        if (numero >= inicio && numero <= fin) {
            mensajePersonalizado = `Has elegido el ${numero}. El mensajito es: ${mensaje}`
            break;
        }
    }

    if (numero > 900) {
        mensajePersonalizado = `De camino a los 1000 días a tu lado💙🥰 ¿Vamos a por los 2000?`
    }

    // Si el número es mayor que el total de días de relación, mostramos el mensaje especial
    if (numero > diasTotalesDeRelacion) {
        mensajePersonalizado = `Aún no hemos llegado a este día, pero llevamos ${diasTotalesDeRelacion} días juntas🙈.`
    }

    alert(mensajePersonalizado)
}

//Asignamos el evento al botón para ejecutar la función
botonJuego.addEventListener('click', mensajeDeRelacion)

// Añadir el evento al input para detectar la tecla Enter
inputNumero.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        mensajeDeRelacion()
    }
});


})
