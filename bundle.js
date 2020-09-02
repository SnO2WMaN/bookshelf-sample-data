const glob = require("glob");
const jsyaml = require("js-yaml");
const { promisify } = require("util");
const { readFile, writeFile } = require("fs/promises");
const path = require("path");

(async () => {
  const files = await promisify(glob)("books/**/*.yml");
  const parsed = (
    await Promise.all(
      files.map(async (path) => jsyaml.safeLoad(await readFile(path)))
    )
  )
    .map((value) => value["books"])
    .flat();

  await writeFile(path.resolve("books.json"), JSON.stringify(parsed));
})();
