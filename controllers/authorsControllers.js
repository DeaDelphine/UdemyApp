const Authors = require("../models/authorsModel");

const addAuthor = async (req, res) => {
  try {
    const newAuthor = new Authors (req.body);
    await newAuthor.save();
    res.json(newAuthor);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getAuthors = async (req, res) => {
    try {
        const authors = await Authors.find();
        res.json(authors);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const putAuthor = async (req, res) => {
    try {
        const author = await Authors.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const removeAuthor = async (req, res) => {
    try {
        const author = await Authors.findByIdAndDelete(req.params.id);
        res.json(author);
    } catch (error) {
        res.json({ message: error.message });
    }
};


module.exports = { addAuthor, getAuthors, putAuthor, removeAuthor };
