/* Movimenta o Texto */
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 120,
        loop: true
    }).type('Software Developer', {delay: 2000})
      .delete(18, { delay: 70})
      .type('Systems Analysis and Development student', {delay: 2000})
      .delete(40, { delay: 70})
    .go();  

})

/* Tradutor */
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('chk');
  const translations = {
    'pt': {
      'h2': 'Olá! Eu sou o Augusto',
      'p': 'Sou apaixonado por progranação Back-end, atualmente faço estágio de ADS. Sou um estudante focado e comprometido, com conhecimento Full Stack, conheço um pouco de muitas ferramentas, e tenho minhas favoritas qual eu me aprofundo mais. Participei de quatro edições do Grand Prix de Inovação no Senai, em uma quinta edição contribui. Essas experiências junto com meu estágio me permitiram desenvolver projetos desafiadores em equipe, fortalecendo não apenas minhas habilidades técnicas, mas também minha capacidade de colaborar em ambientes dinâmicos de desenvolvimento de software. Estou preparado para enfrentar desafios, aprender constantemente e contribuir em novas oportunidades.',
      'tituloHabilidades': 'Minhas Habilidades',
      'HabilidadesBackend': 'Backend - Aplicações Multi-Plataforma',
      'HabilidadesBackendCsharp': ' É a linguagem que mais gosto e domino. Já desenvolvi alguns aplicativos nativos para Windows, APIs, e também aplicativos web.',
      'HabilidadesBackendNet': 'Tive meu primeiro contato com a arquitetura explorando a criação de aplicativos web com C#, criando Cruds de clientes e produtos. Gosto muito e me aprofundo cada vez mais na criação de Aplicativos Web. Estou disposto a me aventurar no MVC com Ruby ou Java.',
      'HabilidadesBackendJava': 'Foi a primeira linguagem que estudei, programei bastante em java com aplicativos de console, e posteriormente na faculdade com projetos web. ',
      'HabilidadesBackendRuby': 'Estou aprendendo sua sintaxe e resolvendo desafios, gosto da linguagem por ser muito eficiente, limpa e expressiva. Tenho a vontade de trabalhar com seu framework Rails, qual sou um pouco familiarizado.',
      'HabilidadesBackendTDD': ' Aprendi a utilizar o básico sobre testes unitários, utilizando Jest para JavaScript, RSpec para Ruby, e xUnit Para C#. Estou aberto a aprender novas ferramentas de testes unitários. ',
      'HabilidadesBackendC': 'Aprendi a programar e usar Arduino no Senai, tenho domínio sobre a construção de algoritmos com C++ para Arduino.',
      'HabilidadePy' : 'Sei fazer automações de tarefas com python.',
      'tituloHabilidades2': 'Frontend - Aplicações Web',
      'HabilidadesFront': 'Tenho domínio de HTML, CSS, e Javascript, Além disso, já utilizei outras tecnologias ligadas ao front-end como React, Typescript e Angular.',
      'HabilidadesData': 'Concluí a coleção Azure Developer da Microsoft para conhecer todos os recursos para desenvolvedores da Azure. Também utilizo recursos de hospedagem e armazenamento de banco de dados e blobs.',
      'HabilidadesSql': 'É o banco de dados que costumo utilizar, mas posso me adaptar e aprender outros.',
      'HabilidadesIngles' : 'Posso ler, escrever e ouvir bem em ingles, e conversar o básico.',
      'HabilidadesGerais' : 'Habilidades Complementares',
      'CasosEstudosTitle': 'Casos de Estudos',
      'tituloContatos': 'Entre em Contato',
      'subtituloContatos': 'Sinta se livre para entrar em contato!',
      'nomeMessage': 'Nome',
      'mensagemMessage': 'Mensagem',
      'ButEnviaMensagem': 'Enviar',
      'BottomContato': 'Contato',
      'BottomLocaliza': 'Localização',
      'SubtitleHabilidades': 'Voce encontra exemplos de minhas habilidades no meu perfil GitHub',
      'ProjDescBV': 'Coolaborei com o Frontend do site da BigValley, que é " A comunidade é o encontro de pessoas de todas as áreas, pensando tecnologia e inovação para soluções de problemas e desenvolvimento da economia de Angra dos Reis e Baia da Ilha Grande."',
      'ProjDescAT': 'Contribuí ativamente para o sucesso da mais recente edição do evento Angra Tech, uma experiência espetacular que congregou mentes brilhantes, empresas e startups inovadoras. Participei ativamente de uma atmosfera enriquecedora, onde o compartilhamento de conhecimento e networking foi extraordinário.',
      'ProjDescQR': 'Fui parte integrante na criação do site que, por meio de QR codes instalados nas árvores da Praça do Porto, fornece informações sobre as diferentes espécies arbóreas presentes no local.',
      'ProjDescOm': 'Desenvolvi um aplicativo em C# para Windows, que antecipa possíveis falhas em motores por meio de um Arduino equipado com sensores. O sistema notifica os status relevantes por meio do WhatsApp no ambiente do SENAI.',
    },
    'en': {
      'projects-section': 'Recent Projects',
      'h2': 'Hello! I am Augusto',
      'p': 'I´m passionate about Back-end programming, I´m currently doing an ADS internship. I am a focused and committed student, with Full Stack knowledge, I know a little about many tools, and I have my favorites which I delve into more deeply. I participated in four editions of the Innovation Grand Prix at Senai, and in a fifth edition I contributed. These experiences along with my internship allowed me to develop challenging projects as a team, strengthening not only my technical skills, but also my ability to collaborate in dynamic software development environments. I am prepared to face challenges, constantly learn and contribute to new opportunities.',
      'tituloHabilidades': 'My Skills',
      'HabilidadesBackend': 'Backend - Multi-Platform Applications',
      'HabilidadesBackendCsharp': ' It`s the language I like and master the most. I have already developed some native applications for Windows, APIs, and also web applications.',
      'HabilidadesBackendNet': 'I had my first contact with architecture exploring the creation of web applications with C#, creating customer and product Cruds. I really like it and I`m going deeper and deeper into creating Web Applications. I`m willing to venture into MVC with Ruby or Java.',
      'HabilidadesBackendJava': 'It was the first language I studied, I programmed a lot in Java with console applications, and later in college with web projects.',
      'HabilidadesBackendRuby': 'I´m learning its syntax and solving challenges, I like the language because it´s very efficient, clean and expressive. I want to work with your Rails framework, which I am somewhat familiar with.',
      'HabilidadesBackendTDD': 'I learned to use the basics of unit testing, using Jest for JavaScript, RSpec for Ruby, and xUnit for C#. I´m open to learning new unit testing tools.',
      'HabilidadesIngles' : 'I can read, write and listen well in English, and speak the basics.',
      'HabilidadesGerais' : 'Complementary Skills',
      'HabilidadesBackendC': 'I learned to program and use Arduino at Senai, I have mastered building algorithms with C++ for Arduino.',
      'HabilidadePy' : 'I know how to automate tasks with Python.',
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
      'SubtitleHabilidades': 'You can find examples of my skills on my GitHub profile',
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
    const h2 = document.querySelector('.content-section h2');
    const p = document.querySelector('.content-section .minibiola');
    const tituloHabilidades = document.querySelector('.containere .habilidades-title');
    const HabilidadesBackend = document.querySelector('.containere .habilidadesBackend');
    const HabilidadesBackendCsharp = document.querySelector('.containere .habilidadeCsharp');
    const HabilidadesBackendNet = document.querySelector('.containere .habilidadeDotNet');
    const HabilidadesBackendJava = document.querySelector('.containere .habilidadeJava');
    const HabilidadesBackendRuby = document.querySelector('.containere .habilidadeRuby');
    const HabilidadesBackendTDD = document.querySelector('.containere .habilidadeTDD');
    const HabilidadesGerais = document.querySelector('.habilidadesGerais');
    const HabilidadesIngles = document.querySelector('.habilidadesIngles');

    const HabilidadesBackendC = document.querySelector('.containere .habilidadeCplus');
    const HabilidadePy = document.querySelector('.habilidadePy');
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
    const SubtitleHabilidades = document.querySelector('.subtitleHabilidades');





    if (translations[language]) {
      h2.innerText = translations[language]['h2'];
      p.innerText = translations[language]['p'];
      tituloHabilidades.innerText = translations[language]['tituloHabilidades'];
      HabilidadesBackend.innerText = translations[language]['HabilidadesBackend'];
      HabilidadesBackendCsharp.innerText = translations[language]['HabilidadesBackendCsharp'];
      HabilidadesBackendNet.innerText = translations[language]['HabilidadesBackendNet'];
      HabilidadesBackendJava.innerText = translations[language]['HabilidadesBackendJava'];
      HabilidadesBackendRuby.innerText = translations[language]['HabilidadesBackendRuby'];
      HabilidadesBackendTDD.innerText = translations[language]['HabilidadesBackendTDD'];
      HabilidadesGerais.innerText = translations[language]['HabilidadesGerais']
      HabilidadesIngles.innerText = translations[language]['HabilidadesIngles']

      HabilidadesBackendC.innerText = translations[language]['HabilidadesBackendC'];
      HabilidadePy.innerText = translations[language]['HabilidadePy'];
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
      SubtitleHabilidades.innerText = translations[language]['SubtitleHabilidades'];


    }
    
  }
});

/* Envia Mensagem para mim */
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