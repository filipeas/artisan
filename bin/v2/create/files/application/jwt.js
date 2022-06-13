module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "jwt", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".provider.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".provider.ts",
            `
            import { ICustomerDto } from '@domain/customers/dtos/customer.dto';
            import { IUserDto } from '@domain/users/dtos/user.dto';

            export type IPayload = IUserDto | ICustomerDto;

            export interface IJWTProvider {
                sign(payload: IPayload, subject: string): Promise<string>;
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".provider.ts has created successfuly.");
        });
    }
}