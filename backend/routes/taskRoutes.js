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
router.post("/tasks", getTasks);
router.post("/tasks/:id", updateTask, validateTask);
router.post("/tasks/:id", deleteTask);

module.exports = router;
