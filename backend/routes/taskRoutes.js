const express = require("express");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const { validateTask } = require("../middleware/validation");

const router = express.Router();

router.post("/tasks", createTask, validateTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTask, validateTask);
router.delete("/tasks/:id", deleteTask, validateTask);

module.exports = router;
