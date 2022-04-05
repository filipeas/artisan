module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(dirDtos, entity) {
    fs.appendFile(
        path.join(dirDtos, "ICreate" + entity) + "Dto.ts",
        `export interface ICreate${entity}Dto {
        }`, function (err) {
        if (err) throw err;
        console.log("Arquivo Dto criado com sucesso.");
    });
}