module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "index", dir) {
    const file = path.join(dir, name) + ".ts";
    if (fs.existsSync(file)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { Router } from 'express';
            import { userRouter } from './user.routes';

            const routes = Router();

            routes.use('/User', userRouter);

            routes.use(ensureAuthenticated);

            routes.use('/users', userRouter);

            export { routes };
            `, function (err) {
            if (err) throw err;
            console.log(name + ".ts has created successfuly.");
        });
    }
}