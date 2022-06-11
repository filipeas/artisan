module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".mapper.ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + "mapper.ts",
            `
        import { I${name}Dto } from '../dtos/${name}.dto';
        import { ${name} } from '../entities/${name}';

        export class ${name}Mapper {
            static toDto(entity: ${name}): I${name}Dto {
                const { id, title } = entity;

                return {
                id,
                title
                };
            }

            static toDomain(entity: I${name}Dto): ${name} {
                const { id, ...rest } = entity;
                return ${name}.create({ ...rest }, id);
            }
        }
        `, function (err) {
            if (err) throw err;
            console.log(name + ".mapper.ts has created successfuly.");
        });
    }
}