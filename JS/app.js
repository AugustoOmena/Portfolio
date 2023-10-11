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
      .type('Take a look at my projects', {delay: 2700})
    .go();
      

})

// ----------------------------------------- Carrossel ------------------------------------------------------- */


// -------------------------------------- fim Carrossel ------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('chk');
  const translations = {
    'pt': {
      'projects-section': 'Projetos Recentes',
      'h2': 'Olá! Eu sou o Augusto',
      'p': 'Apaixonado pelo desenvolvimento web desde os 18 anos, brasileiro e nascido em 2003. Sou estudante de Análise e Desenvolvimento de Sistemas no Centro Universitário Senac Santo Amaro e Desenvolvedor na Secretaria de Desenvolvimento Econômico de Angra dos Reis. Sou uma pessoa que adora desafios, assim como todo desenvolvedor, mas em especial aqueles que me tiram da zona de conforto, pois as minhas maiores evoluções e aprendizados vieram de momentos em que me vi obrigado a sair dela e enfrentar a vida. Estudante assíduo, que aprecia tomar café nas horas vagas e ...'
    },
    'en': {
      'projects-section': 'Recent Projects',
      'h2': 'Hello! I am Augusto',
      'p': 'Passionate about web development since the age of 18, Brazilian, and born in 2003. I am a student of Systems Analysis and Development at Centro Universitário Senac Santo Amaro and a Developer at the Secretariat of Economic Development of Angra dos Reis. I am someone who loves challenges, just like any developer, but especially those that take me out of my comfort zone, as my greatest advancements and learnings have come from moments when I was forced to leave it and face life. Diligent student who enjoys having coffee in his spare time and ...'
    }
  };

  // Declare a variável projectsSection no escopo global
  const projectsSection = document.querySelector('.projects.section h2');

  checkbox.addEventListener('change', function () {
    const language = checkbox.checked ? 'en' : 'pt';
    translateContent(language);
  });

  function translateContent(language) {
    const h2 = document.querySelector('.content-section h2');
    const p = document.querySelector('.content-section p');

    if (translations[language]) {
      h2.innerText = translations[language]['h2'];
      p.innerText = translations[language]['p'];
      projectsSection.innerText = translations[language]['projects-section'];
    }
  }
});


