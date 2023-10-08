document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Software Developer', {delay: 2000})
      .move(-18, { delay: 100})
      .type('Java ', {delay: 900})
      .move(-1)
      .delete(5)
      .type('Javascript', {delay: 2000})
      .move(0)
      .delete(11)
    .go();

})

// ----------------------------------------- Carrossel ------------------------------------------------------- */

$(document).ready(function(){
  $('.carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true, // Mostra as setas de navegação
      dots: false, // Desativa os pontos de navegação
      autoplay: true,
      autoplaySpeed: 2000 // Intervalo de troca de slides em milissegundos
  });

  // Exibe o conteúdo do carrossel após a inicialização do Slick
  $('.projeto').css('display', 'block');
});



// -------------------------------------- fim Carrossel ------------------------------------------------------- */