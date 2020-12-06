// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();

var PORT = process.env.PORT || 8080;

// Middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==============================================================================
// ROUTES
// ==============================================================================






// ==============================================================================
// LISTENER
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});