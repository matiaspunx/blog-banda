/** javascript slide-show + secciones **/

// curr = current slide
var curr = 0; 
// variable para seleccionar los slides del DOM
var slides = document.querySelectorAll('#galeria li');

function slide_show() {
	slides[curr].className = 'noselected';
	curr = (curr + 1) % slides.length;
	slides[curr].className = 'selected';
}

// variables para seleccionar los botones y las secciones
var divs = document.querySelectorAll('.seccion');
var botones = document.querySelectorAll('.navegacion a');
function mostrarSeccion(id) {
	// cuando se dispare el evento, le vamos a remover el comportamiento por default al elemento que disparó el evento
	event.preventDefault();
	var i = 0;

	for (var i; i < divs.length; i++) {
		console.log(divs[i].id);
		if (divs[i].id == id) {
			divs[i].style.display = 'block';
			botones[i].className = 'active';
		} else {
			divs[i].style.display = 'none';
			botones[i].className = '';
		}
	}
}

var videos = document.querySelectorAll('.video-thumbs a');
var video = document.querySelector('#videoFrame');
function changeVideo(id) {
	event.preventDefault();
	var url = 'https://www.youtube.com/embed/'+id;
	video.src = url;
}

window.onload = function () {
	// Cuando cargue la pagina vamos a ejecutar el slideshow con un interval cada 5 segundos, represntado en 5000 ms
	setInterval(slide_show, 5000);
}