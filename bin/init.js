module.exports = { initStructure: initStructure };

const fs = require("fs");
const path = require("path");
const createRoot = require("./init/createRoot.js");
const createTypes = require("./init/createTypes.js");
const createInfra = require("./init/createInfra.js");

function initStructure() {
    console.log("Iniciando criação da estrutura.");

    // caminhos
    const destinationRaiz = path.join(__dirname, "..", "..");//  "..", ".."
    const destinationTypes = path.join(__dirname, "..", "..", "@types");//  "..", ".."
    const destinationTypesExpress = path.join(__dirname, "..", "..", "@types", "express");//"..", ".."
    const destinationInfraSrc = path.join(__dirname, "..", "..", "src");
    const destinationInfraHttp = path.join(__dirname, "..", "..", "src", "http");
    const destinationInfraHttpContainer = path.join(__dirname, "..", "..", "src", "http", "container");
    const destinationInfraHttpErrors = path.join(__dirname, "..", "..", "src", "http", "errors");
    const destinationInfraHttpMiddlewares = path.join(__dirname, "..", "..", "src", "http", "middlewares");
    const destinationInfraHttpRoutes = path.join(__dirname, "..", "..", "src", "http", "routes");
    const destinationInfraHttpValidation = path.join(__dirname, "..", "..", "src", "http", "validations");
    const destinationInfraTypeOrm = path.join(__dirname, "..", "..", "src", "typeorm");

    // criar .env.example
    createRoot.createFile(destinationRaiz);

    // cria diretorios para @types
    if (!fs.existsSync(destinationTypes)) fs.mkdirSync(destinationTypes);
    if (!fs.existsSync(destinationTypesExpress)) fs.mkdirSync(destinationTypesExpress);

    // criar arquivos do diretorio @types
    createTypes.createFile(destinationTypesExpress);

    // cria diretorios para infra
    if (!fs.existsSync(destinationInfraSrc)) fs.mkdirSync(destinationInfraSrc);
    if (!fs.existsSync(destinationInfraHttp)) fs.mkdirSync(destinationInfraHttp);
    if (!fs.existsSync(destinationInfraHttpContainer)) fs.mkdirSync(destinationInfraHttpContainer);
    if (!fs.existsSync(destinationInfraHttpErrors)) fs.mkdirSync(destinationInfraHttpErrors);
    if (!fs.existsSync(destinationInfraHttpMiddlewares)) fs.mkdirSync(destinationInfraHttpMiddlewares);
    if (!fs.existsSync(destinationInfraHttpRoutes)) fs.mkdirSync(destinationInfraHttpRoutes);
    if (!fs.existsSync(destinationInfraHttpValidation)) fs.mkdirSync(destinationInfraHttpValidation);
    if (!fs.existsSync(destinationInfraTypeOrm)) fs.mkdirSync(destinationInfraTypeOrm);

    // cria arquivos do diretorio infra
    createInfra.createFile(
        destinationInfraHttpContainer,
        destinationInfraHttpErrors,
        destinationInfraHttpMiddlewares,
        destinationInfraHttpRoutes,
        destinationInfraHttpValidation,
        destinationInfraTypeOrm
    );
}
