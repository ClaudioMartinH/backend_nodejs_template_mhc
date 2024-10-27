import { copy } from "fs-extra";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(
  __dirname,
  "node_modules",
  "backend-template-martinherranzc"
);
const destDir = join(__dirname);

async function copyFiles() {
  try {
    await copy(sourceDir, destDir, {
      filter: (file) => {
        return !file.includes("node_modules");
      },
    });
    console.log("Estructura copiada exitosamente!");
  } catch (err) {
    console.error("Error al copiar la estructura:", err);
  }
}

copyFiles();
