const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://321710301025:321710301025@cluster0.nfcmipf.mongodb.net/fullstack-todoapp"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
