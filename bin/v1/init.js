module.exports = { initStructure: initStructure };

const fs = require("fs");
const path = require("path");
const create = require("./create.js");
const createRoot = require("./init/createRoot.js");
const createTypes = require("./init/createTypes.js");
const createInfra = require("./init/createInfra.js");
const createDependencies = require("./init/createDependencies.js");

function initStructure(createUser, develop) {
    console.log("Iniciando criação da estrutura.");

    // definindo caminhos
    let rollPath;
    if (develop)
        rollPath = path.join("..");
    else
        rollPath = path.join("..", "..", "..", "..");

    // caminhos
    const destinationRaiz = path.join(__dirname, rollPath);
    const dirDomain = path.join(__dirname, rollPath, "src", "domain");
    const destinationInfraSrc = path.join(__dirname, rollPath, "src");
    const destinationInfra = path.join(__dirname, rollPath, "src", "infra");
    const destinationTypes = path.join(__dirname, rollPath, "src", "@types");
    const destinationTypesExpress = path.join(__dirname, rollPath, "src", "@types", "express");
    const destinationInfraHttp = path.join(__dirname, rollPath, "src", "infra", "http");
    const destinationInfraHttpContainer = path.join(__dirname, rollPath, "src", "infra", "http", "container");
    const destinationInfraHttpErrors = path.join(__dirname, rollPath, "src", "infra", "http", "errors");
    const destinationInfraHttpMiddlewares = path.join(__dirname, rollPath, "src", "infra", "http", "middlewares");
    const destinationInfraHttpRoutes = path.join(__dirname, rollPath, "src", "infra", "http", "routes");
    const destinationInfraHttpValidation = path.join(__dirname, rollPath, "src", "infra", "http", "validations");
    const destinationInfraTypeOrm = path.join(__dirname, rollPath, "src", "infra", "typeorm");
    const destinationInfraTypeOrmMigrations = path.join(__dirname, rollPath, "src", "infra", "typeorm", "migrations");

    // verifica se diretorio src/ existe
    if (fs.existsSync(destinationInfraSrc)) {
        console.log("src/ já criada.");
        return;
    }

    // verifica se diretorio @types/ existe
    if (fs.existsSync(destinationTypes)) {
        console.log("@types/ já criada.");
        return;
    }

    // verifica se diretorio domain/ ja foi criada
    if (fs.existsSync(dirDomain)) {
        console.log("domain/ já criada.");
        return;
    }

    // verifica se diretorio infra/ ja foi criada
    if (fs.existsSync(destinationInfra)) {
        console.log("infra/ já criada.");
        return;
    }

    // copiar dependencias no package.json
    createDependencies.copy(destinationRaiz);

    // criar .env.example
    createRoot.createFile(destinationRaiz);

    // criando diretorio src
    if (!fs.existsSync(destinationInfraSrc)) fs.mkdirSync(destinationInfraSrc);

    // criando diretorio infra
    if (!fs.existsSync(destinationInfra)) fs.mkdirSync(destinationInfra);

    // cria diretorios para @types
    if (!fs.existsSync(destinationTypes)) fs.mkdirSync(destinationTypes);
    if (!fs.existsSync(destinationTypesExpress)) fs.mkdirSync(destinationTypesExpress);

    // criar arquivos do diretorio @types
    createTypes.createFile(destinationTypesExpress);

    // cria diretorios para infra
    if (!fs.existsSync(destinationInfraHttp)) fs.mkdirSync(destinationInfraHttp);
    if (!fs.existsSync(destinationInfraHttpContainer)) fs.mkdirSync(destinationInfraHttpContainer);
    if (!fs.existsSync(destinationInfraHttpErrors)) fs.mkdirSync(destinationInfraHttpErrors);
    if (!fs.existsSync(destinationInfraHttpMiddlewares)) fs.mkdirSync(destinationInfraHttpMiddlewares);
    if (!fs.existsSync(destinationInfraHttpRoutes)) fs.mkdirSync(destinationInfraHttpRoutes);
    if (!fs.existsSync(destinationInfraHttpValidation)) fs.mkdirSync(destinationInfraHttpValidation);
    if (!fs.existsSync(destinationInfraTypeOrm)) fs.mkdirSync(destinationInfraTypeOrm);
    if (!fs.existsSync(destinationInfraTypeOrmMigrations)) fs.mkdirSync(destinationInfraTypeOrmMigrations);

    // cria arquivos do diretorio infra
    createInfra.createFile(
        destinationInfraHttp,
        destinationInfraHttpContainer,
        destinationInfraHttpErrors,
        destinationInfraHttpMiddlewares,
        destinationInfraHttpRoutes,
        destinationInfraHttpValidation,
        destinationInfraTypeOrm,
        destinationInfraTypeOrmMigrations
    );

    // cria entidade user
    const entity = "User";
    create.createStructure(develop, createUser, entity);
}
