document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Software Developer', {delay: 3000})
      .move(-18, { delay: 100})
      .type('Java ', {delay: 3000})
      .move(-1)
      .delete(1)
      .type('ascript', {delay: 2700})
      .move(0)
      .delete(11)
      .type('CSS', {delay: 2700})
      .delete(4)
      .type('C#', {delay: 2700})
      .move(20)
      .delete(21)
      .type('Take a Look in my Projects', {delay: 2700})
    .go();
      

})

// ----------------------------------------- Carrossel ------------------------------------------------------- */




// -------------------------------------- fim Carrossel ------------------------------------------------------- */