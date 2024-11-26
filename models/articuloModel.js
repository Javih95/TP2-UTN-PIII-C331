const db = require ("../data/db.js")
const autorModel = require("../models/autorModel.js")
const {DataTypes} = require ("sequelize")
const articuloModel = db.define ("articulos",{
    modelo : {type:DataTypes.STRING},
    color_id : {type:DataTypes.INTEGER},
    categorie : {type:DataTypes.STRING},
    status: {type:DataTypes.ENUM("active", "inactive")},
    id_autor: {type:DataTypes.INTEGER}
})
articuloModel.belongsTo(autorModel, { foreignKey: "id_autor", as: "autor" });
module.exports= articuloModel 