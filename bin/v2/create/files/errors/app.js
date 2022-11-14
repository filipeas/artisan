module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "app", dir) {
    const file = path.join(dir, name) + ".error.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".error.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            export class AppError {
                public readonly message!: string;
              
                public readonly statusCode!: number;
              
                public readonly type!: string;
              
                constructor(message: string, statusCode: number, type: string) {
                  this.message = message;
                  this.statusCode = statusCode;
                  this.type = type;
                }
              }              
            `, function (err) {
            if (err) throw err;
            console.log(name + ".error.ts has created successfuly.");
        });
    }
}