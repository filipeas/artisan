module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
<<<<<<< HEAD
    const file = path.join(dir, name) + "Dto.ts";
=======
    const file = path.join(dir, "I" + name) + ".dto.ts";
>>>>>>> bf348cb313fcaf4f5b247b15145db205507b133f
    if (fs.existsSync(file)) {
        console.log(name + ".dto.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
<<<<<<< HEAD
            `export interface ${name}Dto {
                id: string;
                title: string;
            }`, function (err) {
            if (err) throw err;
            console.log(name + "Dto.ts was not created.");
=======
            `
            export interface I${name}Dto {
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".dto.ts has created successfuly.");
>>>>>>> bf348cb313fcaf4f5b247b15145db205507b133f
        });
    }
}