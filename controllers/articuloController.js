<<<<<<< HEAD
const { UPDATE } = require("sequelize/lib/query-types")
const articuloModel = require ("../models/articuloModel.js")
// Crear un registro
const crearArticulo = async (req,res)=>{
    try {
      await articuloModel.create(req.body)
      res.json("Articulo creado correctamente");
    }
    catch (error) {
      res.json({message:error.message})
    }
}
//Actualizar por ID
const actualizarArticulo= async (req,res)=>{
    try {
      await articuloModel.update (req.body,{
        where:{id:req.params.id}
      })
      res.json ( "Articulo Actualizado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer todos los registros
const traerArticulos = async (req,res)=>{
    try {
      const articulos = await articuloModel.findAll()
      res.json(articulos)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer un registro por ID
const traerArticulo = async (req,res)=>{
    try {
      const articulo = await articuloModel.findByPk(req.params.id)
      res.json(articulo)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Eliminar un registro por ID
const borrarArticulo = async (req,res)=>{
    try {
      await articuloModel.destroy({
        where:{id:req.params.id}
      })
      res.json ( "Articulo Borrado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}
module.exports ={crearArticulo,actualizarArticulo,traerArticulo,traerArticulos,borrarArticulo}
=======
const { UPDATE } = require("sequelize/lib/query-types")
const articuloModel = require ("../models/articuloModel.js")
// Crear un registro
const crearArticulo = async (req,res)=>{
    try {
      await articuloModel.create(req.body)
      res.json("Articulo creado correctamente");
    }
    catch (error) {
      res.json({message:error.message})
    }
}
//Actualizar por ID
const actualizarArticulo= async (req,res)=>{
    try {
      await articuloModel.update (req.body,{
        where:{id:req.params.id}
      })
      res.json ( "Articulo Actualizado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer todos los registros
const traerArticulos = async (req,res)=>{
    try {
      const articulos = await articuloModel.findAll()
      res.json(articulos)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer un registro por ID
const traerArticulo = async (req,res)=>{
    try {
      const articulo = await articuloModel.findByPk(req.params.id)
      res.json(articulo)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Eliminar un registro por ID
const borrarArticulo = async (req,res)=>{
    try {
      await articuloModel.destroy({
        where:{id:req.params.id}
      })
      res.json ( "Articulo Borrado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
   }
>>>>>>> caa01059beb3b097142d33b16ff5b0e957277f9c
