module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "mail", dir) {
    const file = path.join(dir, name) + ".provider.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".provider.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            type IMailData = {
                to: string;
                subject: string;
                variables: unknown;
                path: string;
              };
              
              export interface IMailProvider {
                sendMail(mailData: IMailData): Promise<void>;
              }              
            `, function (err) {
            if (err) throw err;
            console.log(name + ".provider.ts has created successfuly.");
        });
    }
}