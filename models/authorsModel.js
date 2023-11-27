const { mongoose, Schema } = require("mongoose");

const authorSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, default: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Courses" }]
   
})
    
const Authors = mongoose.model("Authors", authorSchema);
module.exports = Authors;