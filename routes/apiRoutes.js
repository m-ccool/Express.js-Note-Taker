// dependencies
const { response, application } = require("express");
const fs = require("fs");
const { request } = require("http");
const { v4: uuidv4 } = require('uuid');

// routing
module.exports = function (app) {
    // get request
    app.get("/api/notes", (request, response) => {
        console.log("\n\nExecutnig GET notes request");

        // read db.son file
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("\nGET request - Returning notes data: " + JSON.stringify(data));
        response.json(data);
    });

    // post request
    app.post("/api/notes", (request, response) => {
        const newNote = request.body;
        console.log("\n\POST request - New Note : " + JSON.stringify(newNote));

        newNote.id = uuidv4();

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        data.push(newNote);

        fs.writeFileSync("\nSuccessfully added new note to 'db.json' file!");

        response.json(data);
    });

    // delete request
    app.delete("/api/notes/:id", (request, response) => {

        let noteId = request.params.id.toString();

        console.log(`\n\nDELETE note request for noteId: ${noteId}`);

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        fs.writeFileSync(`\nSuccessfully deleted note with id : ${noteId}`);

        response.json(newData);
    });
};