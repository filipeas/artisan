module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "entity", dir) {
    if (fs.existsSync(dir)) {
        console.log(name + ".ts file has been created.");
    } else {
        console.log('creating ' + name + ' file.');

        fs.appendFile(
            path.join(dir, name) + ".ts",
            `
            import { v4 as uuidV4 } from 'uuid';

            export abstract class Entity<T> {
            protected _id: string;

            protected props: T;

            get id() {
                return this._id;
            }

            constructor(props: T, id?: string) {
                this._id = id ?? uuidV4();
                this.props = props;
            }
            }            
            `, function (err) {
            if (err) throw err;
            console.log(name + ".ts has created successfuly.");
        });
    }
}