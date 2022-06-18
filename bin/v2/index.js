#! /usr/bin/env node

const yargs = require("yargs");
const path = require("path");
const config = require("../../artisan.json");
const init = require("./init/index.js");
const domain = require("./domain/index.js");
const error = require("./errors/index.js");

console.log("Welcome to CLI artisan!\nUse command [artisan --help] for more info.");

const usage = "\nHow to use: <command> [options]";

const options = yargs
    .usage(usage)
    .command("--create <entity> [option]", "Create file in the informed entity on directory: [./src/<option_flag>/]\nOption: \n-a \t application \n \t -c \t core \n -d \t domain \n -e \t errors \n -i \t infra \n -t \t tests")
    .example("artisan --create user -d")
    .array(["init", "create"])
    // .command("--init", "Inicializa projeto com a estrutura padrão do artisan.")
    // .example("artisan --init")
    .help(true)
    .argv;

// control location of create directory and files.
const production = false;
let pathDir = "";
if (production)
    pathDir = path.join("..");
else
    pathDir = path.join("..", "..", "..", "..");

main(pathDir);

function main(pathDir) {
    // if call init
    if (yargs.argv.init) {
        // create all initial structure.
        console.log('Create all initial structure.');
        init.main(config.directories, pathDir);
        return;
    }

    // if call create
    if (yargs.argv.create && yargs.argv.create[0]) {
        const entity = yargs.argv.create[0];

        if (yargs.argv.a) {
            // call flag -a (application)
            console.log('Create entity in application directory.');
        }

        if (yargs.argv.c) {
            // call flag -c (core)
            console.log('Create entity in core directory.');
        }

        if (yargs.argv.d) {
            // call flag -d (domain)
            console.log('Create entity in domain directory.');

            domain.main(entity);
        }

        if (yargs.argv.e) {
            // call flag -e (errors)
            console.log('Create entity in errors directory.');

            error.main(entity);
        }

        if (yargs.argv.i) {
            // call flag -i (infra)
            console.log('Create entity in infra directory.');
        }

        if (yargs.argv.t) {
            // call flag -t (tests)
            console.log('Create entity in tests directory.');
        }
    }
}