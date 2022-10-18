module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "jsonwebtoken-jwt", dir) {
    const file = path.join(dir, name) + ".adapter.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".adapter.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `
            import { IJWTProvider, IPayload } from '@application/providers/jwt.provider';
            import jwtConfig from '@infra/config/jwt.config';
            import { sign } from 'jsonwebtoken';

            export class JsonWebTokenJWTAdapter implements IJWTProvider {
                async sign(payload: IPayload, subject: string): Promise<string> {
                    return sign(payload, String(jwtConfig.secret), {
                    subject,
                    expiresIn: jwtConfig.expiresIn,
                    });
                }
            }
            `, function (err) {
            if (err) throw err;
            console.log(name + ".adapter.ts has created successfuly.");
        });
    }
}