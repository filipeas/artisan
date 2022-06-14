module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "index", dir) {
    const file = path.join(dir, name) + ".ts";
    if (fs.existsSync(file)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import './providers';
            import './repositories';
            `, function (err) {
            if (err) throw err;
            console.log(name + ".ts has created successfuly.");
        });
    }
}