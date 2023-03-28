require("dotenv/config")
const app = require("./app");
const dbConnect = require("./src/core/db/mongo");

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`inicio servidor express en puerto ${PORT}`))

dbConnect().then(() => console.log("Conexion base datos")).catch(error => console.log("Se ha producido un error en db", error))