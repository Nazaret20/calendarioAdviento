// const dayContents = {
//     1: "¡Primer día! Que comience la aventura navideña.",
//     2: "Día 2: Un pequeño regalo te espera.",
//     3: "Día 3: Sorpresa especial hoy.",
//     // Continúa para los días 4-25
//     24: "¡Víspera de Navidad! La magia está cerca.",
//     25: "¡Feliz Navidad! Un día lleno de alegría."
// };


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
            modalContainer.showModal();
        });

        btnCerrar.addEventListener('click', () => {
            modalContainer.close();
        });
    });
});