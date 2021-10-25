import * as FS from "fs";

import YAML from "yaml";

import { default as CLI } from "command-line-args";

const Document = FS.readFileSync("Arguments.YAML", "UTF-8");

const Configuration = JSON.stringify(YAML.parse(Document), null, 4);

console.debug("YAML Configuration" + ":", Configuration + "\n");

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

    console.debug("CLI Arguments" + ":", JSON.stringify($.main, null, 4) + "\n");
};

main();




