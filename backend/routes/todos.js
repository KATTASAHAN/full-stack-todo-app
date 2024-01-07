const { Router } = require("express");
const { todoType, todoId } = require("../types/types");
const Todo = require("../db");

const router = Router();

router
  .get("/read", async (req, res) => {
    const response = await Todo.find({});

    if (!response.length)
      return res
        .status(404)
        .json({ message: `No Todos to Show`, todos: response, success: false });

    res.status(200).json({
      message: `Found ${response.length} todos`,
      todos: response,
      success: true,
    });
  })
  .get("/readone/:id", async (req, res) => {
    const todo = await Todo.findOne({
      _id: todoId.safeParse(req.params.id).data,
    }).catch((e) => {
      return res
        .status(404)
        .json({ message: `TODO Not Found`, error: e, success: false });
    });
    if (!todo) {
      return res
        .status(404)
        .json({ message: `TODO Not Found`, todo, success: false });
    }

    res.status(200).json({ message: "Success!", todo, success: true });
  })
  .post("/create", async (req, res) => {
    const todo = todoType.safeParse({
      title: req.body.title,
      description: req.body.description,
      completed: false,
    });

    if (!todo.success) return res.status(400).json(todo);

    const response = await Todo.create(todo.data);

    res.status(200).json({
      message: `Todo added Successfully with ID: ${response._id}`,
      todo: response,
      success: true,
    });
  })
  .put("/update/:id", async (req, res) => {
    const updatedData = await Todo.findByIdAndUpdate(
      {
        _id: todoId.safeParse(req.params.id).data,
      },
      { completed: true },
      { new: true }
    ).catch((e) => {
      return res
        .status(404)
        .json({ message: `TODO Not Found`, error: e, success: false });
    });

    res
      .status(200)
      .json({ message: "Marked as Completed!", updatedData, success: true });
  })
  .delete("/delete/:id", async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete({
      _id: todoId.safeParse(req.params.id).data,
    }).catch((e) => {
      return res
        .status(404)
        .json({ message: `TODO Not Found`, error: e, success: false });
    });

    res
      .status(200)
      .json({ message: "Deleted Sucessfully!", deletedTodo, success: true });
  });

module.exports = router;
