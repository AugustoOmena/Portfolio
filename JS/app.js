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