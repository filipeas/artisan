module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name, dir) {
    const file = path.join(dir, name) + ".entity.ts";
    if (fs.existsSync(file)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            file,
            `import { Entity } from '@core/domain/entity';

type I${name}Props = {
    title: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type I${name}Body = {
    title?: string;
};

export class ${name}Entity extends Entity<I${name}Props> {
    private constructor(props: I${name}Props, id?: string) {
        super(props, id);
    }

    get title() {
        return this.props.title;
    }

    public update(body: I${name}Body) {
        Object.assign(this.props, body);
    }

    static create(props: I${name}Props, id?: string) {
        const entity = new ${name}(props, id);
        return entity;
    }
}`, function (err) {
            if (err) throw err;
            console.log(name + ".entity.ts was not created.");
        });
    }
}