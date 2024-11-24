const express = require ("express")

const {crearArticulo,actualizarArticulo,traerArticulo,traerArticulos,borrarArticulo} = require("../controllers/articuloController.js")
const router = express.Router()

router.post ("/",crearArticulo)

router.put ("/:id",actualizarArticulo)

router.get ("/:id",traerArticulo)
router.get ("/",traerArticulos)

router.delete("/:id",borrarArticulo) 

module.exports = router