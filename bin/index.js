#! /usr/bin/env node

const yargs = require("yargs");
const create = require("./create.js");

console.log("Bem-vindo ao artisan!");

const usage = "\Como usar: artisan <entity> para criar a estrutura no projeto";

const options = yargs
    .usage(usage)
    .option("l", {
        alias: "create",
        describe: "Cria estrutura do projeto. \t [create --entity <entity_name>]",
        // type: "boolean",
        demandOption: false
    })
    .help(true)
    .argv;

if (yargs.argv._[0] == 'create' && yargs.argv.entity && typeof yargs.argv.entity === 'string') {
    create.createStructure(yargs.argv.entity);
}else{
    console.log("O comando para criar uma estrutura é: [artisan create --entity <entity_name>]")
}