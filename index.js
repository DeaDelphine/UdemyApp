const express = require("express");
const app = express();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/udemy_db');
console.log(`📚[DATABASE] MongoDB is running 🔥`)
}

const port = process.env.PORT || 6789;

const coursesRouter = require("./routes/coursesRoute");
const authorRouter = require("./routes/authorsRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/authors", authorRouter);
app.use("/api/courses", coursesRouter);
app.listen(port, () => console.log(`[SERVER] is runinning on port ${port}`));
