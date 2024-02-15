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
      'Titulo': 'Desenvolvedor de Software Fullstack web e mobile',
      'h2': 'Olá! Eu sou o Augusto',
      'p': 'Sou um Desenvolvedor Full Stack com experiência em programação para web, desktop e mobile. Participei de quatro edições do Grand Prix de Inovação no Senai, em uma quinta edição contribui. Essas experiências me permitiram desenvolver projetos desafiadores em equipe, fortalecendo não apenas minhas habilidades técnicas, mas também minha capacidade de colaborar em ambientes dinâmicos de desenvolvimento de software. Estou comprometido em buscar conhecimentos práticos contínuos, sempre procurando oportunidades para aplicar e aprimorar minhas habilidades técnicas. Estou preparado para enfrentar desafios, aprender constantemente e contribuir de maneira significativa para projetos que exijam expertise em programação Full Stack.',
      'tituloHabilidades': 'Minhas Habilidades',
      'tituloCursos': 'Cursos de Aperfeiçoamento',
      'HabilidadesBackend': 'Backend - Aplicações Multi-Plataforma',
      'HabilidadesBackendCsharp': ' É a linguagem que mais gosto e domino. Já desenvolvi alguns aplicativos nativos para Windows, APIs, e também aplicativos web.',
      'HabilidadesBackendNet': 'Framework que utilizo para programação de aplicativos C# para web, com arquitetura MVC ou Blazor.',
      'HabilidadesBackendJava': 'Foi a minha primeira linguagem, no meu primeiro Grand Prix, desenvolvi um algoritmo de manutenção preditiva (prevê quando um motor vai quebrar) com Java e C++ no Arduino, com análise de diversos sensores em tempo real, mas com uma interface bem simples.',
      'HabilidadesBackendC': 'Aprendi a programar e usar Arduino no Senai, tenho domínio sobre a construção de algoritmos com C++ para Arduino.',
      'tituloHabilidades2': 'Frontend - Aplicações Web',
      'HabilidadesFront': 'Tenho domínio de HTML, CSS, e Javascript, Além disso, já utilizei outras tecnologias ligadas ao front-end como React, Typescript e Angular.',
      'HabilidadesData': 'Concluí a coleção Azure Developer da Microsoft para conhecer todos os recursos para desenvolvedores da Azure. Também utilizo recursos de hospedagem e armazenamento de banco de dados e blobs.',
      'HabilidadesSql': 'É o banco de dados que costumo utilizar, mas posso me adaptar e aprender outros.',
      'CasosEstudosTitle': 'Casos de Estudos',
      'tituloContatos': 'Entre em Contato',
      'subtituloContatos': 'Sinta se livre para entrar em contato!',
      'nomeMessage': 'Nome',
      'mensagemMessage': 'Mensagem',
      'ButEnviaMensagem': 'Enviar',
      'BottomContato': 'Contato',
      'BottomLocaliza': 'Localização',
      'ButcursosRealizados': 'Ver Cursos realizados',
      'SubtitleCursos': 'Explore os cursos que já fiz',
      'ProjDescBV': 'Coolaborei com o Frontend do site da BigValley, que é " A comunidade é o encontro de pessoas de todas as áreas, pensando tecnologia e inovação para soluções de problemas e desenvolvimento da economia de Angra dos Reis e Baia da Ilha Grande."',
      'ProjDescAT': 'Contribuí ativamente para o sucesso da mais recente edição do evento Angra Tech, uma experiência espetacular que congregou mentes brilhantes, empresas e startups inovadoras. Participei ativamente de uma atmosfera enriquecedora, onde o compartilhamento de conhecimento e networking foi extraordinário.',
      'ProjDescQR': 'Fui parte integrante na criação do site que, por meio de QR codes instalados nas árvores da Praça do Porto, fornece informações sobre as diferentes espécies arbóreas presentes no local.',
      'ProjDescOm': 'Desenvolvi um aplicativo em C# para Windows, que antecipa possíveis falhas em motores por meio de um Arduino equipado com sensores. O sistema notifica os status relevantes por meio do WhatsApp no ambiente do SENAI.',
    },
    'en': {
      'Titulo': 'Fullstack web and mobile software developer',
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
      'tituloHabilidades2': 'Frontend - Web Applications',
      'HabilidadesFront': 'I am proficient in HTML, CSS, and Javascript. In addition, I have used other technologies linked to the front-end such as React, Typescript and Angular.',
      'HabilidadesData': 'Complete Microsoft´s Azure Developer Collection to learn about all of the resources for Azure developers. I also use hosting and database and blob storage resources.',
      'HabilidadesSql': 'It`s the database I usually use, but I can adapt and learn others.',
      'CasosEstudosTitle': 'Case Studies',
      'tituloContatos': 'Contact',
      'subtituloContatos': 'Feel free to get in touch!',
      'nomeMessage': 'Name',
      'mensagemMessage': 'Message',
      'ButEnviaMensagem': 'Invite',
      'BottomContato' : 'Contact',
      'BottomLocaliza': 'Location',
      'ButcursosRealizados': 'See Courses taken',
      'SubtitleCursos': 'Explore the courses I´ve already taken',
      'ProjDescBV': 'I collaborated with the Frontend of the BigValley website, which is "The community is the meeting of people from all areas, thinking about technology and innovation to solve problems and develop the economy of Angra dos Reis and Baia da Ilha Grande."',
      'ProjDescAT': 'I contributed to the success of the most recent edition of the Angra Tech event, a spectacular experience that brought together innovative minds, companies and startups. I actively participated in an enriching atmosphere, where knowledge sharing and networking was extraordinary.',
      'ProjDescQR': 'I was an integral part in creating the website which, through QR codes installed on the trees in Praça do Porto, provides information about the different tree species present in the place.',
      'ProjDescOm': 'I developed an application in C# for Windows, which anticipates possible engine failures using an Arduino equipped with sensors. The system notifies relevant statuses through WhatsApp in the SENAI environment.',
    }
  };

  checkbox.addEventListener('change', function () {
    const language = checkbox.checked ? 'en' : 'pt';
    translateContent(language);
  });

  function translateContent(language) {
    const Titulo = document.querySelector('.titulo');
    const h2 = document.querySelector('.content-section h2');
    const p = document.querySelector('.content-section .minibiola');
    const tituloHabilidades = document.querySelector('.containere .habilidades-title');
    const tituloCursos = document.querySelector('.containere .cursos-title');
    const HabilidadesBackend = document.querySelector('.containere .habilidadesBackend');
    const HabilidadesBackendCsharp = document.querySelector('.containere .habilidadeCsharp');
    const HabilidadesBackendNet = document.querySelector('.containere .habilidadeDotNet');
    const HabilidadesBackendJava = document.querySelector('.containere .habilidadeJava');
    const HabilidadesBackendC = document.querySelector('.containere .habilidadeCplus');
    const tituloHabilidades2 = document.querySelector('.containere .habilidades2-title');
    const HabilidadesFront = document.querySelector('.containere .habilidadeFrontend');
    const HabilidadesData = document.querySelector('.containere .habilidadesData');
    const HabilidadesSql = document.querySelector('.containere .habilidadesSql');
    const CasosEstudosTitle = document.querySelector('.CasosEstudos-Title');
    const ProjDescBV = document.querySelector('.ProjBigValleyDesc'); 
    const ProjDescAT = document.querySelector('.ProjAngraTech'); 
    const ProjDescQR = document.querySelector('.ProjQR');
    const ProjDescOm = document.querySelector('.ProjOmena');


    
    const tituloContatos = document.querySelector('.contato-title');
    const subtituloContatos = document.querySelector('.contato-subtitle'); 


    const nomeMessage = document.querySelector('.nomeEnviaMessage');
    const mensagemMessage = document.querySelector('.mensagemEnviaMessage');
    const ButEnviaMensagem = document.querySelector('.butEnviaMensagem');
    const BottomContato = document.querySelector('.bottomContato');
    const BottomLocaliza = document.querySelector('.bottomLocaliza');
    const ButcursosRealizados = document.querySelector('.butcursosRealizados');
    const SubtitleCursos = document.querySelector('.subtitleCursos');




    if (translations[language]) {
      Titulo.innerText = translations[language]['Titulo'];
      h2.innerText = translations[language]['h2'];
      p.innerText = translations[language]['p'];
      tituloHabilidades.innerText = translations[language]['tituloHabilidades'];
      tituloCursos.innerText = translations[language]['tituloCursos'];
      HabilidadesBackend.innerText = translations[language]['HabilidadesBackend'];
      HabilidadesBackendCsharp.innerText = translations[language]['HabilidadesBackendCsharp'];
      HabilidadesBackendNet.innerText = translations[language]['HabilidadesBackendNet'];
      HabilidadesBackendJava.innerText = translations[language]['HabilidadesBackendJava'];
      HabilidadesBackendC.innerText = translations[language]['HabilidadesBackendC'];
      tituloHabilidades2.innerText = translations[language]['tituloHabilidades2'];
      HabilidadesFront.innerText = translations[language]['HabilidadesFront'];
      HabilidadesData.innerText = translations[language]['HabilidadesData'];
      HabilidadesSql.innerText = translations[language]['HabilidadesSql'];
      CasosEstudosTitle.innerText = translations[language]['CasosEstudosTitle'];
      ProjDescBV.innerText = translations[language]['ProjDescBV'];
      ProjDescAT.innerText = translations[language]['ProjDescAT'];
      ProjDescQR.innerText = translations[language]['ProjDescQR'];
      ProjDescOm.innerText = translations[language]['ProjDescOm'];

      tituloContatos.innerText = translations[language]['tituloContatos'];
      subtituloContatos.innerText = translations[language]['subtituloContatos'];

      nomeMessage.innerText = translations[language]['nomeMessage'];
      mensagemMessage.innerText = translations[language]['mensagemMessage'];
      ButEnviaMensagem.innerText = translations[language]['ButEnviaMensagem'];
      BottomContato.innerText = translations[language]['BottomContato'];
      BottomLocaliza.innerText = translations[language]['BottomLocaliza'];
      ButcursosRealizados.innerText = translations[language]['ButcursosRealizados'];
      SubtitleCursos.innerText = translations[language]['SubtitleCursos'];


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

// video provisorio

function togglePlayPause() {
  var video = document.querySelector('.custom-video');
  var container = document.querySelector('.custom-video-container');
  var button = document.querySelector('.play-pause-button');

  if (video.paused) {
    video.play();
    container.classList.add('playing');
    button.style.backgroundImage = 'url("path/to/pause-icon.png")'; /* Altere para o ícone de pausa */
  } else {
    video.pause();
    container.classList.remove('playing');
    button.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/0/375.png")'; /* Altere para o ícone de play */
  }
}