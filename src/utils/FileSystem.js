import path from "./path";
import paths from "./paths.js";

class FileSystem {
    #filepath;

    constructor (filename) {
    this.#filepath = path.join(paths.files, filename);
    }

    read = async () => {
        const content = await fstat.promises.readFile(this.#filepath, "utf8");
        return JSON.parse(content);
    };
    write = async (content) => {
        const contentJSON = JSON.stringify(content, null, "\t");
        return await fstat.promises.writeFile(this.#filepath, contentJSON);
    };
}

export default FileSystem;