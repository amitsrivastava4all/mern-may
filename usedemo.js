const chalk = require('chalk');
console.log(chalk.red('Hello Chalk'));
console.log(chalk.green('Hello Chalk'));
console.log(chalk.yellow(chalk.bold('Hello Chalk')));
const cron = require('cron');
var CronJob = require('cron').CronJob;
let pattern = '58 15 * * *';
var job = new CronJob(pattern,()=>{
    console.log('Send Mail to Customer');
});
job.start();