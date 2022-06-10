module.exports = { createFile: createFile };

const fs = require("fs");
const path = require("path");

function createFile(destinationTypesExpress) {
    fs.appendFile(
        path.join(destinationTypesExpress, "index.ts"),
        `declare namespace Express {
            export interface Request {
                user: {
                    id: string;
                };
            }
        }
        `, function (err) {
        if (err) throw err;
        console.log("Arquivo index.ts criado com sucesso.");
    });
}