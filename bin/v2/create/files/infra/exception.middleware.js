module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "exception", dir) {
    const file = path.join(dir, name) + ".middleware.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".middleware.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { NextFunction, Request, Response } from 'express';

            import { AppError } from '@errors/app.error';

            export async function handleException(
            error: AppError | Error,
            request: Request,
            response: Response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            _: NextFunction,
            ): Promise<Response> {
                return response.status(500).json({
                    error: {
                    message: \`Internal server error - ${error.message}\`,
                    type: 'server_error',
                    },
                });
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".middleware.ts has created successfuly.");
        });
    }
}