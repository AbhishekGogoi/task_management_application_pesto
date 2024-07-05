const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // This is equivalent to body-parser's json() method
app.use(express.urlencoded({ extended: true }));

app.use("/api", taskRoutes);

// Custom error handling middleware should be added after the routes
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
