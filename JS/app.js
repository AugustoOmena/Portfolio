/* Movimenta o Texto */
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

/* Tradutor */
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('chk');
  const translations = {
    'pt': {
      'projects-section': 'Projetos Recentes',
      'h2': 'Olá! Eu sou o Augusto',
      'p': 'Sou um Desenvolvedor Full Stack com experiência em programação para web, desktop e mobile. Participei de quatro edições do Grand Prix de Inovação no Senai, em uma quinta edição contribui. Essas experiências me permitiram desenvolver projetos desafiadores em equipe, fortalecendo não apenas minhas habilidades técnicas, mas também minha capacidade de colaborar em ambientes dinâmicos de desenvolvimento de software. Estou comprometido em buscar conhecimentos práticos contínuos, sempre procurando oportunidades para aplicar e aprimorar minhas habilidades técnicas. Estou preparado para enfrentar desafios, aprender constantemente e contribuir de maneira significativa para projetos que exijam expertise em programação Full Stack.'
    },
    'en': {
      'projects-section': 'Recent Projects',
      'h2': 'Hello! I am Augusto',
      'p': 'I am a Full Stack Developer with experience in web, desktop, and mobile programming. I have participated in four editions of the Innovation Grand Prix at Senai, and in a fifth edition, I made a contribution. These experiences have allowed me to work on challenging projects as part of a team, enhancing not only my technical skills but also my ability to collaborate in dynamic software development environments. I am committed to continuously seeking practical knowledge, always looking for opportunities to apply and enhance my technical skills. I am prepared to take on challenges, learn constantly, and contribute significantly to projects that demand expertise in Full Stack programming.'
    }
  };

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


/* Modais de Projeto */
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.body.classList.add('overflow-hidden'); // Adiciona a classe para ocultar a barra de rolagem
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.classList.remove('overflow-hidden'); // Remove a classe para mostrar a barra de rolagem
}


