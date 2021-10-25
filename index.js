import { default as CLI } from "command-line-args";

const options = [
    { name: "test", alias: "t", type: String, defaultValue: "Hello World", defaultOption: true }
];

/***
 * Usage: $ node Index.js --test "hello world"
 */

const main = () => {
    const $ = CLI(options);

    console.log($);
};

main();




