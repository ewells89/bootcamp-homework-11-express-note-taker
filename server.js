// ==============================================================================
// DEPENDENCIES
// ==============================================================================

const express = require("express");
const path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// For referencing files in the public directory
app.use('/static', express.static(path.join(__dirname, 'public')))

// ==============================================================================
// ROUTES
// ==============================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


