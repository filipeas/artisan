module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "validate-account", dir) {
    const file = path.join(dir, name) + ".config.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".config.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            export default {
                validateToken: 'my-validate-account-token',
              };              
            `, function (err) {
            if (err) throw err;
            console.log(name + ".config.ts has created successfuly.");
        });
    }
}