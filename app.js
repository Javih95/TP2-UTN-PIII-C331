const express = require ("express")
const app = express()
const db = require ("./data/db.js")

app.use(express.json()) 

const port = 3036
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
        
    }
}
app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor ok en el puerto ${port}`);
})