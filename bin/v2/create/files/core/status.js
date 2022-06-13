module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "status", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".ts",
            `
            export type IStatusProps = 'enabled' | 'disabled';
            `, function (err) {
            if (err) throw err;
            console.log(name + ".ts has created successfuly.");
        });
    }
}