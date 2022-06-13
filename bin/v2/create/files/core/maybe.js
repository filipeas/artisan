module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "maybe", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".ts",
            `
            export type Maybe<T> = T | null | undefined;

            export type AsyncMaybe<T> = Promise<Maybe<T>>;                       
            `, function (err) {
            if (err) throw err;
            console.log(name + ".ts has created successfuly.");
        });
    }
}