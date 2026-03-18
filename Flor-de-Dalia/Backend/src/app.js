require("dotenv").config();
const express = require("express");
const cors = require("cors");

// rotas que preciso criar 

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/users.routes");
const commentRoutes = require("./routes/comments.routes");
const productsRoutes = require("./routes/product.routes");

const { errorHandler} = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok:true}));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);
app.use("/products", productsRoutes);

app.use(errorHandler);

module.exports = app;