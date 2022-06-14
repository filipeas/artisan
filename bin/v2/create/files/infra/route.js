module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    const file = path.join(dir, name) + ".routes.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".routes.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { Router } from 'express';
            import { AuthCustomerController } from '../controllers/${name}/auth-customer.controller';

            const ${name.toLowerCase()}Router = Router();

            const authCustomer = new AuthCustomerController();

            ${name.toLowerCase()}Router.post('/auth-customer', authCustomer.handle);

            export { ${name.toLowerCase()}Router };
            `, function (err) {
            if (err) throw err;
            console.log(name + ".routes.ts has created successfuly.");
        });
    }
}