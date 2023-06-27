const contenedor = document.querySelector('.container');
const menu = document.querySelector('.navbar');
const section = document.querySelector('.desktop');
const footer = document.querySelector('.footer');
const menuMobile = document.querySelector('.navbar__mobile');

contenedor.addEventListener('click', (e) => {
	e.preventDefault();
	const boton = e.target.closest('button');

	if (boton?.dataset?.accion === 'abrir-menu') {
		menu.classList.add('--disabled');
		section.classList.add('--disabled');
		footer.classList.add('--disabled');
		menuMobile.classList.remove('--disabled');
	}

	if (boton?.dataset?.accion === 'cerrar-menu') {
		menu.classList.remove('--disabled');
		section.classList.remove('--disabled');
		footer.classList.remove('--disabled');
		menuMobile.classList.add('--disabled');
	}
});
