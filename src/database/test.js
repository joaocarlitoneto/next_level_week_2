const database = require("./db");
const createProffy = require("./createProffy");

database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "João Carlito",
    avatar:
      "https://avatars2.githubusercontent.com/u/66336434?s=460&u=e841a8e88e082a1bf217a54ab6d5cd5d091c003c&v=4",
    whatsapp: "41988285949",
    bio:
      "Aluno da Rocketseat, aprendendo JS eternamente.<br><br>Iludido, porém esforçado, estou na busca de aprender programação e ser um ótimo desenvolvedor na stack JS.",
  };

  classValue = {
    subject: 10,
    cost: "8",
  };

  classScheduleValues = [
    {
      weekday: 4,
      time_from: 350,
      time_to: 740,
    },

    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
  ];

  //   await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Consultar os dados inseridos

  // Todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys");
  //   console.log(selectedProfyys);

  // Consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.* 
    FROM proffys JOIN classes 
    ON (classes.proffy_id = proffys.id) 
    WHERE classes.proffy_id = 1;
  `);
  //   console.log(selectClassesAndProffys);

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.* 
    FROM class_schedule 
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "4"
    AND class_schedule.time_from <= "350"
    AND class_schedule.time_to > "350"
  `);

  //   console.log(selectClassesSchedules);
});
