const {addAuthor, getAuthors, putAuthor, removeAuthor } = require("../controllers/authorsControllers");
  
const router = require("express").Router();
  
router.post("/new", addAuthor);
router.get("/", getAuthors);
router.put("/:id/edit", putAuthor);
router.delete("/:id/delete", removeAuthor);
  
module.exports = router;