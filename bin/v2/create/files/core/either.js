module.exports = { create: create }

const fs = require("fs");
const path = require("path");

function create(name = "either", dir) {
  const file = path.join(dir, name) + ".ts";
  if (fs.existsSync(file)) {
    console.log(name + ".ts file has been created.");
  } else {
    console.log('creating ' + name + ' file.');

    fs.appendFile(
      file,
      `
            export class Left<L, A> {
                readonly value: L;
              
                constructor(value: L) {
                  this.value = value;
                }
              
                isLeft(): this is Left<L, A> {
                  return true;
                }
              
                isRight(): this is Right<L, A> {
                  return false;
                }
              }
              
              export class Right<L, A> {
                readonly value: A;
              
                constructor(value: A) {
                  this.value = value;
                }
              
                isLeft(): this is Left<L, A> {
                  return false;
                }
              
                isRight(): this is Right<L, A> {
                  return true;
                }
              }
              
              export type Either<L, A> = Left<L, A> | Right<L, A>;
              
              export const left = <L, A>(l: L): Either<L, A> => {
                return new Left<L, A>(l);
              };
              
              export const right = <L, A>(a: A): Either<L, A> => {
                return new Right<L, A>(a);
              };                          
            `, function (err) {
      if (err) throw err;
      console.log(name + ".ts has created successfuly.");
    });
  }
}