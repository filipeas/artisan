module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const file = path.join(dir, name) + ".repository.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".repository.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `import { AsyncMaybe } from "@core/logic/maybe";
import { ${name} } from "@domain/${name.toLowerCase()}/entities/${name.toLowerCase()}.entity";

export interface ${name}Repository {
    findAll(): Promise<${name}[]>;
    findById(id: string): AsyncMaybe<${name}>;
    create(${name.toLowerCase()}: ${name}): Promise<void>;
    save(${name.toLowerCase()}: ${name}): Promise<void>;
    delete(${name.toLowerCase()}Id: string): Promise<void>;
}
`, function (err) {
            if (err) throw err;
            console.log(name + ".repository.ts has created successfuly.");
        });
    }
}