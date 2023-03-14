import "dotenv/config"
import app from "./app";
import dbConnect from "./src/core/db/mongo";

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`inicio servidor express en puerto ${PORT}`))

dbConnect().then(() => console.log("Conexion base datos")).catch(error => console.log("Se ha producido un error en db", error))