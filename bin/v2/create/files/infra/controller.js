module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    const file = path.join(dir, name) + ".controller.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".controller.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ${name}Controller {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, storeId, password } = request.body;
        const ${name.toLowerCase()} = container.resolve(${name}UseCase);
        const entity = await ${name.toLowerCase()}.run({ email, storeId, password });
        if (entity.isLeft()) {
            return response.status(entity.value.statusCode).json({ error: entity.value });
        }
        return response.json({ entity: entity.value });
    }
}
`, function (err) {
            if (err) throw err;
            console.log(name + ".controller.ts has created successfuly.");
        });
    }
}