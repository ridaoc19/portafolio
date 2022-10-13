const app = require("./app");
const mongoose = require("mongoose")
require("dotenv").config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, function () {
  console.log(`inicio servidor express en puerto ${PORT}`);

  mongoose.connect(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.in7j96l.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});


// const app = require("./app");
// const mongoose = require("mongoose")
// require("dotenv").config();

// const PORT = process.env.PORT || 3002;

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);

//   mongoose.connect(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.in7j96l.mongodb.net/?retryWrites=true&w=majority`)
//     .then(() => {
//       console.log("Nos hemos conectado a la base de datos");
//     })
//     .catch((error) => {
//       console.log("Se ha producido un error", error);
//     });
// });