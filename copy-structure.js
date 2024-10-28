import { copy, pathExists } from "fs-extra";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = __dirname;
const destDir = join(__dirname, "../../");

async function copyFiles() {
  try {
    const exists = await pathExists(sourceDir);
    if (!exists) {
      console.error(`El directorio de origen no existe: ${sourceDir}`);
      return;
    }

    if (destDir === "D:\\" || destDir.startsWith("D:\\..")) {
      console.error(
        "La ruta de destino no puede ser la raíz del sistema o una ruta no permitida."
      );
      return;
    }

    console.log(`Copiando desde: ${sourceDir} a: ${destDir}`);

    await copy(sourceDir, destDir);
    console.log("Estructura copiada exitosamente!");
  } catch (err) {
    console.error("Error al copiar la estructura:", err);
  }
}

copyFiles();
