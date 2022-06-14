module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".repository.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".repository.ts",
            `
            export interface I${name}Repository {
                findAll(): Promise<${name}[]>;
                findById(id: string): asyncMaybe<${name}>;
                create(${name.toLowerCase()}): Promise<void>;
                save(${name.toLowerCase()}): Promise<void>;
                delete(${name.toLowerCase()}Id: string): Promise<void>;
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".repository.ts has created successfuly.");
        });
    }
}