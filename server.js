// server.js
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

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
app.post("/new-book", (req, res) => {
    const newBook = req.body;

    fs.readFile("public/data/books.json", "utf8", (err, data) => {

        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send("Error reading file");
        }

        const jsonData = JSON.parse(data);
        jsonData.push(newBook);

        fs.writeFile("public/data/books.json", JSON.stringify(jsonData, null, 2), "utf8", (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }
            res.json({ message: `Received data: new book title = ${newBook.title}`,
                title : newBook.title,
                author : newBook.author,
                date : newBook.date,
                rating : newBook.rating,
                comments : newBook.comments
             },
            );
        });
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
