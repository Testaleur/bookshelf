// server.js
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// root
app.use(express.static("public"));

// Endpoint to get JSON data
app.get("/data", (req, res) => {
    fs.readFile("books.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to add data to the JSON file
app.post("/data", (req, res) => {
    const newData = req.body;

    fs.readFile("books.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        const jsonData = JSON.parse(data);
        jsonData.push(newData); // Add new data to the array

        fs.writeFile("books.json", JSON.stringify(jsonData, null, 2), "utf8", (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }
            res.status(200).send("Data added successfully");
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
