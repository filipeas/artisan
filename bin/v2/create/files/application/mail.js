module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "mail", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".provider.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".provider.ts",
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