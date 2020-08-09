const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "João Lucas",
        avatar: "https://avatars1.githubusercontent.com/u/61843626?s=400&u=062bf5ec99c8f562a4e3faa388c477dafc3b8a79&v=4", 
        whatsapp:"32141152323",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir", 
    }

    classValue = {
        subject: 1,
        cost:"20",
        //proffy id ira vir pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados depois de cadstrar a class 
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto as dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    //o horario do time_form (8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precida ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday ="0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    
    //console.log(selectClassesSchedules)

})