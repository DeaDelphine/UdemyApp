const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4567;

const coursesRoute = require("./routes/coursesRoute");
const authRoute = require("./routes/authorsRoute");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/udemy_db");
  console.log(`[DATABASE] MongoDB is connected !!!`);
}
//methode qui permet de passer de données dans le body à la place de ke passer dans l'url
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/courses", coursesRoute);
app.use("/api/authors", authRoute);
app.listen(port, () => {
  console.log(`SERVER is running on port ${port}`);
});
