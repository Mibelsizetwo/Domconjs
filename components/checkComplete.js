const checkcomplete =() => {    //creacion de nuestro elemento boton
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};
// inmediately invoked function expression IIFE (son funciones que en cuanto se declaran, se ejecutan)
   const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');     // el toggle es para ver si existe o no la clase si existe la quito y si no la pongo
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

export default checkcomplete;