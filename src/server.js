// Dados
const proffys = [
  {
    name: "João Carlito",
    avatar:
      "https://avatars2.githubusercontent.com/u/66336434?s=460&u=e841a8e88e082a1bf217a54ab6d5cd5d091c003c&v=4",
    whatsapp: "41988285949",
    bio:
      "Aluno da Rocketseat, aprendendo JS eternamente.<br><br>Iludido, porém esforçado, estou na busca de aprender programação e ser um ótimo desenvolvedor na stack JS.",
    subject: "Matemática",
    cost: "10",
    weekday: [4],
    time_from: [350],
    time_to: [740],
  },
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460%amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "11999999999",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Mayk Brito",
    avatar:
      "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "11888888888",
    bio:
      'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br /><br />Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!".',
    subject: "Educação Física",
    cost: "40",
    weekday: [1],
    time_from: [1300],
    time_to: [1820],
  },
  {
    name: "Tiago Luchtenberg",
    avatar:
      "https://mir-s3-cdn-cf.behance.net/user/276/4713a37191453.5f14e9ebb5e58.jpg",
    whatsapp: "11777777777",
    bio:
      "As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.<br /><br />Eu ensino a galera como não se perder na vida, com lições geográficas simples para você nunca mais precisar de mapa na sua bela vida.",
    subject: "Geografia",
    cost: "360",
    weekday: [4],
    time_from: [520],
    time_to: [1030],
  },
];

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

// Funcionalidades
function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1;
  return subjects[arrayPosition];
}

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;
  const isNotEmpty = Object.keys(data).length > 0;

  data.subject = getSubject(data.subject);

  // Se tiver dados(data) adicionar
  if (isNotEmpty) {
    // Adicionar dados a lista de proffys
    proffys.push(data);
    return res.redirect("/study");
  }
  // Se não tiver dados, mostrar a página
  return res.render("give-classes.html", { subjects, weekdays });
}

// Servidor
const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

// configurar nunjucks (template engine)
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Inicio e configuração do servidor
server
  // configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // Start do servidor
  .listen(5500);
