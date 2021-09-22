const FS = require("fs");
const Path = require("path");
const Process = require("process");

const Defaults = { spaces: 4, encoding: "UTF-8", buffer: null, flag: null };

const Reader = (path, Serial = { ... Defaults }) => {
    const Spaces = (typeof Serial.spaces === "number")
        ? Serial.spaces : Defaults.spaces;
    const Encoding = (typeof Serial.encoding === "string")
        ? Serial.encoding : Defaults.encoding;
    const Buffer = (typeof Serial.buffer !== null)
        ? Serial.buffer :Defaults.buffer;
    const Flag = (typeof Serial.flag !== null)
        ? Serial.flag : Defaults.flag;

    const Data = FS.readFileSync(Path.resolve(path), {
        encoding: Encoding,
        flag: Flag
    });

    return {
        JSON: (Data) ? JSON.parse(Data) : null,
        String: (Data) ? JSON.stringify(Data) : "",
    };
}

const Constants = Reader(Path.resolve(Process.cwd(), "Constants.json"), {})

module.exports = {
    Reader, Constants
};
