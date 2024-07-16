import { H3Event } from "h3";
import fs from "fs";
import removeExtension from "~/utils/files/file-extensions";
import excludes from "~/utils/arrays/array-hof-filters";

export default defineEventHandler(async (event: H3Event) => {
    const files = (await fs.promises.readdir("./pages")).map(removeExtension).filter(excludes("index"));

    console.log(files);

    return { files };
});