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
                type : newBook.type,
                author : newBook.author,
                date : newBook.date,
                rating : newBook.rating,
                comments : newBook.comments
             },
            );
        });
    });
}

export const deleteBook = (req, res) => {
    const book = req.body;

    fs.readFile("frontend/public/data/books.json", "utf8", (err, data) => {

        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send("Error reading file");
        }

        const jsonData = JSON.parse(data);

        const index = jsonData.findIndex(item => item.title == book.title); // index of the book

        if (index !== -1) {

            jsonData.splice(index, 1);

            fs.writeFile("frontend/public/data/books.json", JSON.stringify(jsonData, null, 2), "utf8", (err) => {
                if (err) {
                    return res.status(500).send("Error writing file");
                }
                res.json({ title : book.title});
            });
        } else {
            res.status(404).send(`Book with title "${book.title}" not found.`);
        }
    });
}

export const editBook = (req, res) => {
    const editedBook = req.body;
    fs.readFile("frontend/public/data/books.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading file");
        }
    
        const jsonData = JSON.parse(data);
        const bookIndex = jsonData.findIndex(book => {
            return book.title == editedBook.title
        }); // book name is its identifier
        if (bookIndex !== -1) {
            jsonData[bookIndex] = { ...jsonData[bookIndex], ...editedBook };
        } else {
            jsonData.push(editedBook);
        }
    
        fs.writeFile("frontend/public/data/books.json", JSON.stringify(jsonData, null, 2), "utf8", (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).send("Error writing file");
            }
    
            res.json({
                message: `Book updated: ${editedBook.title}`,
                title: editedBook.title,
                type: editedBook.type,
                author: editedBook.author,
                date: editedBook.date,
                rating: editedBook.rating,
                comments: editedBook.comments,
            });
        });
    });
}