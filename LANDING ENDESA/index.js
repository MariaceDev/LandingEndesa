/*MOSTRAR MODAL*/

function mostrarModal(){
  
const modal = document.getElementById('modal');
const modalMvl = document.getElementById('modalMvl');
var click = 1;

  if(click == 1){
    modal.style.display="flex";
    modalMvl.style.display="flex";

  }else if(click == 2){
    modal.style.display="none";
    modalMvl.style.display="none";
  }  
  modal.style.display = 'flex';
  modalMvl.style.display="flex";
}

/*function mostrarModalMvl(){  
  
  const modalMvl = document.getElementById('modalMvl');
  var click = 1;
  
    if(click == 1){
     modalMvl.style.display="flex";
  
    }else if(click == 2){
      modalMvl.style.display="none";
    }  
    modalMvl.style.display="flex";
  }*/
  
/*OCULTAR MODAL */

function ocultarModal(){

  const modal = document.getElementById('modal');
  const modalMvl = document.getElementById('modalMvl');
  var click = 1;
  
    if(click == 1){
      modal.style.display="none";
      modalMvl.style.display="none";
}
}
/*
function bloquearPantalla(){
  const modal = document.getElementById('modal');
  if(modal.style.display = 'flex'){
    body.style.scrollY = 'hidden';
}
}

*/

/*BLOQUEAR FONDO CUANDO APARECE EL MODAL*/ 



    




/*MOSTRAR EL STICKY*/

const sticky = document.getElementById("formSticky");
const formulario = document.getElementById("formulario");

function mostrarSticky(){
  if (window.scrollY > 300) {
    sticky.style.display = "flex";
  } else if(window.scrollY < 300) {
    sticky.style.display = "none";
  } else if( window.innerWidth < 969){
    sticky.style.display = "none";
  }
};

window.addEventListener("scroll", mostrarSticky); 


/*Activación del acordeón en MVL*/
var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active1");

    /* Toggle between hiding and showing the active panel */
    var contenedorHorariosMvl = this.nextElementSibling;
    if (contenedorHorariosMvl.style.display === "block") {
      contenedorHorariosMvl.style.display = "none";
    } else {
      contenedorHorariosMvl.style.display = "block";
    }
  });
};


/*Activación de las FAQ*/

var acc = document.getElementsByClassName("faq");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active2");

    /* Toggle between hiding and showing the active panel */
    var contenedorFaq = this.nextElementSibling;
    if (contenedorFaq.style.display === "block") {
      contenedorFaq.style.display = "none";
    } else {
      contenedorFaq.style.display = "block";
    }
  });
};


/*Activación de las FAQS dentro de la FAQ*/

var acc = document.getElementsByClassName("faqs");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active3");

    /* Toggle between hiding and showing the active panel */
    var contenedorFaqs = this.nextElementSibling;
    if (contenedorFaqs.style.display === "block") {
      contenedorFaqs.style.display = "none";
    } else {
      contenedorFaqs.style.display = "block";
    }
  });
};


/*Activación de las CONDICIONES*/

var acc = document.getElementsByClassName("condiciones");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active4");

    /* Toggle between hiding and showing the active panel */
    var atributosConcidiones = this.nextElementSibling;
    if (atributosConcidiones.style.display === "block") {
      atributosConcidiones.style.display = "none";
    } else {
      atributosConcidiones.style.display = "block";
    }
  });
}