const {addAuthor,  putAuthor, removeAuthor, getAllAuthors } = require("../controllers/authorsControllers");
  
const router = require("express").Router();
  
router.post("/new", addAuthor);
router.get("/", getAllAuthors);
router.put("/:id/edit", putAuthor);
router.delete("/:id/delete", removeAuthor);
  
module.exports = router;