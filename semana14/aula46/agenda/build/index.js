"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('pt-br');
let allEvents = [
    {
        name: 'Aniversário do Pablo',
        description: 'aniversário de 35 anos',
        initDate: moment('29/07/2020 19:00', 'DD/MM/YYYY HH:mm'),
        endDate: moment('29/07/2020 22:00', 'DD/MM/YYYY HH:mm')
    },
    {
        name: 'Aprender TS',
        description: 'Primeiras aulas de Typescript para o back-end',
        initDate: moment('27/07/2020 09:00', 'DD/MM/YYYY HH:mm'),
        endDate: moment('31/07/2020 17:00', 'DD/MM/YYYY HH:mm')
    }
];
function showEvents() {
    console.log('\n Eventos agendados:');
    allEvents.map((event) => {
        const eventDuration = event.endDate.diff(event.initDate, 'minutes');
        let daysLeft = event.initDate.diff(moment(), 'days');
        console.log(`
    Nome: ${event.name}
    Horário de início: ${event.initDate.format('dddd, DD [de] MMMM [de] YYYY, HH[h]mm')}
    Horário de fim: ${event.endDate.format('DD [de] MMMM [de] YYYY, HH[h]mm')}
    Descrição: ${event.description}
    Duração: ${eventDuration} minutos
    Dias até o evento: ${daysLeft}`);
    });
}
function createEvent() {
    let correctEvent = false;
    let correctDates = false;
    let newEvent = {
        name: process.argv[4],
        description: process.argv[5],
        initDate: moment(process.argv[2], 'DD/MM/YYYY HH:mm'),
        endDate: moment(process.argv[3], 'DD/MM/YYYY HH:mm')
    };
    if (!newEvent.name || !newEvent.description || !newEvent.initDate || !newEvent.endDate) {
        console.log('Para adicionar um novo evento: Digite a data e hora de início, a data e hora de fim, o nome, e a descrição do evento');
    }
    else {
        correctEvent = true;
    }
    if (newEvent.endDate.diff(newEvent.initDate, 'seconds') < 0) {
        console.log('PARADOXO TEMPORAL: a data final não pode vir antes que a inicial');
    }
    else {
        correctDates = true;
    }
    if (correctEvent && correctDates) {
        allEvents.push(newEvent);
    }
}
createEvent();
showEvents();
//# sourceMappingURL=index.js.map