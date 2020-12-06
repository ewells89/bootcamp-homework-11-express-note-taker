// ==============================================================================
// DEPENDENCIES
// ==============================================================================

const notesData = require("../db/db");


// ==============================================================================
// ▾▾▾API ROUTES▾▾▾
// ==============================================================================

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });
    
    app.post("/api/notes", function(req, res) {
        const newNote = req.body;

        notesData.push(newNote);

        // Increments the ID of each note that is inserted.
        notesData.forEach((note,index) => {
            note.id = index +1;
        });

        console.log(newNote);
          
        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req,res) {
        res.send("Note deleted.");
    });    
};