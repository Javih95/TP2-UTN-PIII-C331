<<<<<<< HEAD
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const articuloModel = db.define ("articulos",{
    modelo : {type:DataTypes.STRING},
    color_id : {type:DataTypes.INTEGER},
    categorie : {type:DataTypes.STRING},
    status: {type:DataTypes.ENUM("active", "inactive")},
})
module.exports= articuloModel 
=======
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const articuloModel = db.define ("articulos",{
    modelo : {type:DataTypes.STRING},
    color : {type:DataTypes.INTEGER},
    categorie : {type:DataTypes.STRING},
    status: {type:DataTypes.ENUM("active", "inactive")},
})
module.exports= articuloModel 
>>>>>>> caa01059beb3b097142d33b16ff5b0e957277f9c
