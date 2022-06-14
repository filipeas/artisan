module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirResponse, entity) {
    fs.appendFile(
        path.join(dirResponse, "IResponseCreate" + entity) + ".ts",
        `export interface IResponseCreate${entity} {
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface response criado com sucesso.");
    });

    // criando arquivos para o diretorio Response
    fs.appendFile(
        path.join(dirResponse, "IResponseUpdate" + entity) + ".ts",
        `export interface IResponseUpdate${entity} {
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface response criado com sucesso.");
    });
}