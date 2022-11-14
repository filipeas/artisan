module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    const file = path.join(dir, "I" + name) + ".dto.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".dto.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            export interface I${name}Dto {
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".dto.ts has created successfuly.");
        });
    }
}