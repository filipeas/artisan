module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "unauthorized", dir) {
    const file = path.join(dir, name) + ".error.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".error.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { AppError } from './app.error';

            type TypeError = 'auth_error' | 'expired_error';

            export class UnauthozitedError extends AppError {
                constructor(message: string, type: TypeError = 'auth_error') {
                    super(message, 401, type);
                }
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".error.ts has created successfuly.");
        });
    }
}