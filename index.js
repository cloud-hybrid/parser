import { default as CLI } from "command-line-args";

const options = [
    { name: "test", group: "main", alias: "t", type: String, defaultValue: "Hello World"},
    { name: "verbose", group: "main", alias: "v", type: Boolean, defaultValue: false },
    { name: "help", group: "main", alias: "h", type: Boolean, defaultValue: false }
];

/***
 * Usage:
 *  >>> $ node index.js --help
 *  >>> $ node Index.js --help --verbose
 *  >>> $ node Index.js --help --verbose --test "Hello World"
 */

const main = () => {
    const $ = CLI(options);

    console.log($);
};

main();




