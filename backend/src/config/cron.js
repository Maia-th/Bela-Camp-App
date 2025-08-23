import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("Requisição GET enviada com sucesso");
      else console.log("Falha ao enviar requisição GET", res.statusCode);
    })
    .on("error", (e) => console.error("Erro ao enviar requisição", e));
});

export default job;

// EXPLICAÇÃO DO CRON JOB:
// Cron jobs são tarefas agendadas que executam periodicamente em intervalos fixos.
// Queremos enviar 1 requisição GET a cada 14 minutos para que nossa API nunca fique inativa no Render.com

// Como definir um "Horário"?
// Você define um horário usando uma expressão cron, que consiste em 5 campos representando:

//! MINUTO, HORA, DIA DO MÊS, MÊS, DIA DA SEMANA

//? EXEMPLOS && EXPLICAÇÃO:
//* */14 * * * * - A cada 14 minutos
//* 0 0 * * 0 - À meia-noite de todo domingo
//* 30 3 15 * * - Às 3:30 da manhã, no dia 15 de cada mês
//* 0 0 1 1 * - À meia-noite, em 1º de janeiro
//* 0 * * * * - A cada hora