// Load environnment variables from .env
require("dotenv/config");

const path = require('path');


// Import NPM modules
const express = require("express"); // Syntaxe CJS

// Import local modules
const router = require("./router");

// Create Express app
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Configure assets routes (static folder)
app.use(express.static("./public"));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

// Configure le middleware pour servir les fichiers statiques
app.use('/images', express.static(path.join(__dirname, './public/images')));

// Plug routes on app
app.use(router);

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${port}`);
});
