module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".dto.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, "I" + name) + ".dto.ts",
            `
            export interface I${name}Dto {
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".dto.ts has created successfuly.");
        });
    }
}