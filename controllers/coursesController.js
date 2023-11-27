const Courses = require("../models/coursesModel");
const Author = require("../models/authorsModel");

const addCourse = async (req, res) => {  
    const { name, price, isPublished, tags, authorId } = req.body;
    try {
      const owner = await Author.findOne({ _id: authorId });
      console.log(authorId);
      console.log("--------");
      console.log(owner);
      if (!owner) {
        return res.send({ message: "User not found" });
        }
        const newCourse = new Courses (req.body);
        owner.courses.push(newCourse._id);
      await owner.save();
      await newCourse.save();
      res.send({ message: "new courses created", newCourse });
    } catch (error) {
      console.error(error);
    }
  };




const getCourses = async (req, res) => {
    try {
        const courses = await Courses.find().populate("owner", "lastname email");
        res.json(courses);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putCourse = async (req, res) => {
    try {
        const course = await Courses.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(course);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeCourse = async (req, res) => {
    try {
        const course = await Courses.findByIdAndDelete(req.params.id);
        res.json(course);
    } catch (error) {
        res.json({ message: error.message });
    }
};


module.exports = { addCourse, getCourses, putCourse, removeCourse };
