import path from "path";
import paths from "./paths.js";
import fs from "fs";

class FileSystem {
    #filepath;

    constructor (filename) {
    this.#filepath = path.join(paths.files, filename);
    }

    read = () => {
        const content = fs.readFileSync(this.#filepath, "utf8");
        return JSON.parse(content);
    };
    write = async (content) => {
        const contentJSON = JSON.stringify(content, null, "\t");
        return await fs.writeFileSync(this.#filepath, contentJSON);
    };
}

export default FileSystem;