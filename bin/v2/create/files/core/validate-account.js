module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "validate-account", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".config.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".config.ts",
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