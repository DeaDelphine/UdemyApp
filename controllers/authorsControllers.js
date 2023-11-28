const Author = require("../models/authorsModel");

const addAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.json(newAuthor);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};


module.exports = { addAuthor, getAllAuthors, putAuthor, removeAuthor };
