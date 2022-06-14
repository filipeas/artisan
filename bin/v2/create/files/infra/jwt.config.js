module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "jwt", dir) {
    const file = path.join(dir, name) + ".config.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".config.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import 'dotenv/config';

            export default {
                secret: process.env.JWT_SECRET,
                expiresIn: '1d',
            };
            `, function (err) {
            if (err) throw err;
            console.log(name + ".config.ts has created successfuly.");
        });
    }
}