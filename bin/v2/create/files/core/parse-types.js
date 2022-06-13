module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "parse-types", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".ts",
            `
            export function parseType<T>(object: unknown) {
                return object as T;
              }                         
            `, function (err) {
            if (err) throw err;
            console.log(name + ".ts has created successfuly.");
        });
    }
}