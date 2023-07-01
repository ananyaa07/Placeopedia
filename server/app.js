const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const { fileURLToPath } = require("url");
const { dirname } = require("path");
const helmet = require("helmet");

const { createOpportunity } = require("./controllers/opportunities.js");
const { createPost } = require("./controllers/post.js");
const { editUser } = require("./controllers/user.js");
dotenv.config();

//middlewares
const { verifyUser, verifyAdmin } = require("./middleware/verifyUser");

//connect db
const connectDB = require("./db/connect");

//routes
const opportunitiesRouter = require("./routes/opportunities");
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/user");
const searchRouter = require("./routes/search");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// routers
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const multer = require("multer");
app.use(
  "/public/assets",
  express.static(path.join(__dirname, "public/assets"))
);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api/v1/opportunities/new",verifyAdmin,upload.single("image"),createOpportunity);
app.use(
  "/api/v1/posts/new",verifyUser,
  upload.single("bannerImage"),
  createPost
  );
app.use("/api/v1/opportunities",opportunitiesRouter);
app.use("/api/v1/posts", verifyUser, postsRouter);
app.use("/api/v1/login", authRouter);
app.use("/api/v1/user", verifyUser, usersRouter);
app.use("/api/v1/user/:id", verifyUser, upload.single("image"), editUser);
app.use("/api/v1/search", searchRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
