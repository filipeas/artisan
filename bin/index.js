#! /usr/bin/env node

const yargs = require("yargs");
const create = require("./create.js");
const init = require("./init.js");

// variavel de controle para testes
const develop = false;

console.log("Bem-vindo ao artisan! Utilize o comando [ npx artisan --help ] para mais informações.");

const usage = "\Como usar: $0 <command> [options]";

const options = yargs
    .usage(usage)
    .command("--create entity <entity>", "Cria entidade no diretório src/domain/.")
    .example("npx artisan --create entity User")
    .array(["create", "init"])
    .command("--init", "Inicializa projeto com a estrutura padrão do artisan.")
    .example("npx artisan --init")
    .help(true)
    .argv;

if (yargs.argv.init) {
    init.initStructure(true, develop);
}

if (yargs.argv.create && yargs.argv.create[0] === "entity") {
    let entity = yargs.argv.create[1].toLowerCase();
    entity = entity[0].toUpperCase() + entity.substr(1);
    create.createStructure(develop, false, entity);
}
