module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    const file = path.join(dir, name) + ".provider.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".provider.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            export type Response${name} = {
                attribute: string;
              };
              
              export interface I${name}Provider {
                function(attribute: string): Promise<Response${name}[]>;
              }              
            `, function (err) {
            if (err) throw err;
            console.log(name + ".provider.ts has created successfuly.");
        });
    }
}