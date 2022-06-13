module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "date", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".provider.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".provider.ts",
            `
            export interface IDateProvider {
                addHours(date: Date, housToAdd: number): Date;
                subHours(date: Date, housToSubtract: number): Date;
                isAfter(date: Date, dateToCompare: Date): boolean;
              }              
            `, function (err) {
            if (err) throw err;
            console.log(name + ".provider.ts has created successfuly.");
        });
    }
}