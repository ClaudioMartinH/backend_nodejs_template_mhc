import { copy } from "fs-extra";
import { join } from "path";

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
