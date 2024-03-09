const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");


// Inicializaciones
const app = express();


// Configuraciones
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("views engine", ".hbs");
app.use(morgan("dev"));
app.use(express.json());



// Rutas
app.use(require("./routes"));
app.use("/links", require("./routes/links"));


// Public
app.use(express.static(path.join(__dirname, "public")));






// Inicio del servidor
app.listen(app.get("port"), (err, res) => {
  console.log("server on port", app.get("port"));
});

// Establecer el motor de plantillas
app.set("view engine", ".hbs"); 



