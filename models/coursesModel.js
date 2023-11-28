const { mongoose, Schema } = require("mongoose");

const courseSchema = new Schema({
    name:{type: String, required:true},
    price: {type: Number, required:true},
    isPublished: { type: Boolean, default: false },
    tags: { type: Array, default: [] },
    authorId: {type:
        mongoose.Schema.Types.ObjectId, ref:"Author"}
})
    
const Courses = mongoose.model("Courses", courseSchema);
module.exports = Courses;