<<<<<<< HEAD
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const colorModel = db.define ("colores",{
    nombre : {type:DataTypes.STRING},
})
=======
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const colorModel = db.define ("colores",{
    nombre : {type:DataTypes.STRING},
})
>>>>>>> caa01059beb3b097142d33b16ff5b0e957277f9c
module.exports= colorModel