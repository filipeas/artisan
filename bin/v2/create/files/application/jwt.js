module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "jwt", dir) {
    const file = path.join(dir, name) + ".provider.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".provider.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
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