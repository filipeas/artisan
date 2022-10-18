module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "bad-request", dir) {
    const file = path.join(dir, name) + ".error.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".error.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { AppError } from './app.error';

            export class BadRequestError extends AppError {
                constructor(message: string) {
                    super(message, 400, 'bab_request_error');
                }
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".error.ts has created successfuly.");
        });
    }
}