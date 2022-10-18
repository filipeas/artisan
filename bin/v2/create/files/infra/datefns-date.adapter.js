module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "datefns-date", dir) {
    const file = path.join(dir, name) + ".adapter.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".adapter.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { IDateProvider } from '@application/providers/date.provider';
            import { subHours, addHours, isAfter } from 'date-fns';

            export class DateFnsDateAdapter implements IDateProvider {
                addHours(date: Date, housToAdd: number): Date {
                    return addHours(date, housToAdd);
                }

                subHours(date: Date, housToSubtract: number): Date {
                    return subHours(date, housToSubtract);
                }

                isAfter(date: Date, dateToCompare: Date): boolean {
                    return isAfter(date, dateToCompare);
                }
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".adapter.ts has created successfuly.");
        });
    }
}