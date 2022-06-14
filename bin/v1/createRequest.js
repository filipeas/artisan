module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirRequest, entity) {
    fs.appendFile(
        path.join(dirRequest, "IRequestCreate" + entity) + ".ts",
        `export interface IRequestCreate${entity} {
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface request criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirRequest, "IRequestUpdate" + entity) + ".ts",
        `export interface IRequestUpdate${entity} {
            id: string;
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface request criado com sucesso.");
    });

    fs.appendFile(
        path.join(dirRequest, "IRequestDelete" + entity) + ".ts",
        `export interface IRequestDelete${entity} {
            id: string;
        }        
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo interface request criado com sucesso.");
    });
}