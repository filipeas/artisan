module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "not-found", dir) {
    const file = path.join(dir, name) + ".error.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".error.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { AppError } from './app.error';

            export class NotFoundError extends AppError {
                constructor(message: string) {
                    super(message, 404, 'not_found_error');
                }
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".error.ts has created successfuly.");
        });
    }
}