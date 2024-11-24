<<<<<<< HEAD
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const autorModel = db.define ("autores",{
    name : {type:DataTypes.STRING},
    surname : {type:DataTypes.STRING},
})
=======
const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const autorModel = db.define ("autores",{
    name : {type:DataTypes.STRING},
    surname : {type:DataTypes.STRING},
})
>>>>>>> caa01059beb3b097142d33b16ff5b0e957277f9c
module.exports= autorModel 