const express = require("express");
const cors = require("cors");

const todos = require("./routes/todos");

const app = express();
const PORT = 3000;

process.on("uncaughtException", (e, o) => {
  console.log("App is running");
  console.log(
    `--------------------------ERROR--------------------------` +
      JSON.stringify({ error: e, origin: o })
  );
});

app.use(cors());
app.use(express.json());
app.use("/todo", todos);
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route never Existed in COSMOS" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
