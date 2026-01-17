const schedule = require ('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 2', function(){
    console.log('executando tarefa 1!', new Date().getSeconds())
})