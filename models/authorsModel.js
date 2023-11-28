const { mongoose, Schema } = require("mongoose");

const authorSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Courses" }]
   
})
    
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;