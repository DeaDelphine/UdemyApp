const {getCourses, addCourse, putCourse, removeCourse } = require("../controllers/coursesController");
  
const router = require("express").Router();
  
router.post("/new", addCourse);
router.get("/", getCourses);
router.put("/:id/edit", putCourse);
router.delete("/:id/delete", removeCourse);
  
module.exports = router;
  