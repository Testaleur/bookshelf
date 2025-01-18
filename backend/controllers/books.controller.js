import fs from 'fs';

export const getData = (req, res) => {
    fs.readFile("books.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        res.json(JSON.parse(data));
    });
}

export const addBook = (req, res) => {
    const newBook = req.body;

    fs.readFile("frontend/public/data/books.json", "utf8", (err, data) => {

        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send("Error reading file");
        }

        const jsonData = JSON.parse(data);
        jsonData.push(newBook);

        fs.writeFile("frontend/public/data/books.json", JSON.stringify(jsonData, null, 2), "utf8", (err) => {
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
}