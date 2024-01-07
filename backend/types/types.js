const z = require("zod");

const todoType = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean(),
});

const todoId = z.string();

module.exports = { todoType: todoType, todoId: todoId };
