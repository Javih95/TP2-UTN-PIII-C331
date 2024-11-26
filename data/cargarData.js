const fs = require("fs");
const path = require("path");
const autorModel = require("../models/autorModel.js");
const colorModel = require("../models/colorModel.js");
const articuloModel = require("../models/articuloModel.js");

const cargarData = async () => {
  try {
    const autoresCount = await autorModel.count();
    const coloresCount = await colorModel.count();
    const articulosCount = await articuloModel.count();

    if (autoresCount < 5) {
    const autoresData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/autores.json"), "utf-8")
    );
    await autorModel.bulkCreate(autoresData);
    } else {
    console.log("La tabla 'autores' ya tiene suficientes registros.");
    }

    if (coloresCount < 5) {
    const coloresData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/colores.json"), "utf-8")
    );
    await colorModel.bulkCreate(coloresData);
    }else {
    console.log("La tabla 'colores' ya tiene suficientes registros.");
    }

    if (articulosCount < 5) {
    const articulosData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/articulos.json"), "utf-8")
    );
    await articuloModel.bulkCreate(articulosData);
    }else {
      console.log("La tabla 'colores' ya tiene suficientes registros.");
    }
    console.log("Datos cargados exitosamente en la base de datos.");
  } catch (error) {
    console.error("Error al cargar los datos:", error.message);
  }
};

module.exports= cargarData
