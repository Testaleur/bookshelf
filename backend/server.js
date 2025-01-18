import express from 'express';
import dotenv from 'dotenv';
import booksRoutes from "./routes/books.route.js"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static("frontend/public"));
app.use(express.json());

app.use("/", booksRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} !`);
});
