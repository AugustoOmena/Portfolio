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
      'h2': 'Olá! Eu sou o Augusto',
      'p': 'Sou um Desenvolvedor Full Stack com experiência em programação para web, desktop e mobile. Participei de quatro edições do Grand Prix de Inovação no Senai, em uma quinta edição contribui. Essas experiências me permitiram desenvolver projetos desafiadores em equipe, fortalecendo não apenas minhas habilidades técnicas, mas também minha capacidade de colaborar em ambientes dinâmicos de desenvolvimento de software. Estou comprometido em buscar conhecimentos práticos contínuos, sempre procurando oportunidades para aplicar e aprimorar minhas habilidades técnicas. Estou preparado para enfrentar desafios, aprender constantemente e contribuir de maneira significativa para projetos que exijam expertise em programação Full Stack.',
      'tituloHabilidades': 'Minhas Habilidades',
      'tituloCursos': 'Cursos de Aperfeiçoamento',
      'HabilidadesBackend': 'Backend - Aplicações Multi-Plataforma',
      'HabilidadesBackendCsharp': ' É a linguagem que mais gosto e domino. Já desenvolvi alguns aplicativos nativos para Windows, APIs, e também aplicativos web.',
      'HabilidadesBackendNet': 'Framework que utilizo para programação de aplicativos C# para web, com arquitetura MVC ou Blazor.',
      'HabilidadesBackendJava': 'Foi a minha primeira linguagem, no meu primeiro Grand Prix, desenvolvi um algoritmo de manutenção preditiva (prevê quando um motor vai quebrar) com Java e C++ no Arduino, com análise de diversos sensores em tempo real, mas com uma interface bem simples.',
      'HabilidadesBackendC': 'Aprendi a programar e usar Arduino no Senai, tenho domínio sobre a construção de algoritmos com C++ para Arduino.',

    },
    'en': {
      'projects-section': 'Recent Projects',
      'h2': 'Hello! I am Augusto',
      'p': 'I am a Full Stack Developer with experience in web, desktop, and mobile programming. I have participated in four editions of the Innovation Grand Prix at Senai, and in a fifth edition, I made a contribution. These experiences have allowed me to work on challenging projects as part of a team, enhancing not only my technical skills but also my ability to collaborate in dynamic software development environments. I am committed to continuously seeking practical knowledge, always looking for opportunities to apply and enhance my technical skills. I am prepared to take on challenges, learn constantly, and contribute significantly to projects that demand expertise in Full Stack programming.',
      'tituloHabilidades': 'My Skills',
      'tituloCursos': 'Improvement courses',
      'HabilidadesBackend': 'Backend - Multi-Platform Applications',
      'HabilidadesBackendCsharp': ' It`s the language I like and master the most. I have already developed some native applications for Windows, APIs, and also web applications.',
      'HabilidadesBackendNet': 'Framework that I use for programming C# web applications, with MVC or Blazor architecture.',
      'HabilidadesBackendJava': 'It was my first language, in my first Grand Prix, I developed a predictive maintenance algorithm (predicts when a motor will break) with Java and C++ on Arduino, with analysis of several sensors in real time, but with a very simple interface.',
      'HabilidadesBackendC': 'I learned to program and use Arduino at Senai, I have mastered building algorithms with C++ for Arduino.',
    }
  };

  checkbox.addEventListener('change', function () {
    const language = checkbox.checked ? 'en' : 'pt';
    translateContent(language);
  });

  function translateContent(language) {
    const h2 = document.querySelector('.content-section h2');
    const p = document.querySelector('.content-section .minibiola');
    const tituloHabilidades = document.querySelector('.containere .habilidades-title');
    const tituloCursos = document.querySelector('.containere .cursos-title');
    const HabilidadesBackend = document.querySelector('.containere .habilidadesBackend');
    const HabilidadesBackendCsharp = document.querySelector('.containere .habilidadeCsharp');
    const HabilidadesBackendNet = document.querySelector('.containere .habilidadeDotNet');
    const HabilidadesBackendJava = document.querySelector('.containere .habilidadeJava');
    const HabilidadesBackendC = document.querySelector('.containere .habilidadeCplus');

    


    if (translations[language]) {
      h2.innerText = translations[language]['h2'];
      p.innerText = translations[language]['p'];
      tituloHabilidades.innerText = translations[language]['tituloHabilidades'];
      tituloCursos.innerText = translations[language]['tituloCursos'];
      HabilidadesBackend.innerText = translations[language]['HabilidadesBackend'];
      HabilidadesBackendCsharp.innerText = translations[language]['HabilidadesBackendCsharp'];
      HabilidadesBackendNet.innerText = translations[language]['HabilidadesBackendNet'];
      HabilidadesBackendJava.innerText = translations[language]['HabilidadesBackendJava'];
      HabilidadesBackendC.innerText = translations[language]['HabilidadesBackendC'];

    }
    
  }
});

/* Formulário de mensagem - formato assíncrono */
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getForm() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  async sendForm() {
    try {
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getForm()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
    this.sendForm();
  }

  init() {
    if (this.form) {
      this.form.addEventListener("submit", (event) => this.onSubmission(event));
    }
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<div class='center'><h5>Envio realizado com Sucesso.</h5></div>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();
