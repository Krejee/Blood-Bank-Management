const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

// mongodb connection
// connectDB()
//   .then(() => {})
//   .catch(() => {});

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routs
// 1 test routs
app.use("/", require("./routes/testRouts"));

// register route
app.use("/api/auth", require("./routes/authRoutes"));

// inventory route
app.use("/api/inventory", require("./routes/inventoryRoutes"));

// analytics route
app.use("/api/analytics", require("./routes/analyticsRoutes"));

// admin route

app.use("/api/admin", require("./routes/adminRoutes"));

// port
// const PORT = process.env.PORT || 8080;

// // listen
// app.listen(PORT, () => {
//   console.log(
//     `Node server is running In ${process.env.DEV_MODE} Mode on ${process.env.PORT} port`
//       .bgBlue.white
//   );
// });
const port = process.env.PORT || 8080;
//listen
// app.listen(PORT, () => {
//   console.log(
//     `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
//       .bgBlue.white
//   );
// });
app.listen(port,()=>{
    console.log(` ${port}`);

});

