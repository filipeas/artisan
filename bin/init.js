module.exports = { initStructure: initStructure };

const fs = require("fs");
const path = require("path");
const createRoot = require("./root/createRoot.js");
const createTypes = require("./root/createTypes.js");

function initStructure() {
    console.log("Iniciando criação da estrutura.");

    // caminhos
    const destinationRaiz = path.join(__dirname, "..", "..");//  "..", ".."
    const destinationTypes = path.join(__dirname, "..", "..", "@types");//  "..", ".."
    const destinationTypesExpress = path.join(__dirname, "..", "..", "@types", "express");//"..", ".."

    // criar .env.example
    createRoot.createFile(destinationRaiz);

    // cria diretorios para @types
    if (!fs.existsSync(destinationTypes)) fs.mkdirSync(destinationTypes);
    if (!fs.existsSync(destinationTypesExpress)) fs.mkdirSync(destinationTypesExpress);

    // criar diretorio e arquivo @types
    createTypes.createFile(destinationTypesExpress);
}
