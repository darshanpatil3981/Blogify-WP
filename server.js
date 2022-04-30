const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const postRoute = require("./route/posts/postRoute");
const commentRoutes = require("./route/comments/commentRoute");
const categoryRoute = require("./route/category/categoryRoute");
//const path = require("path");

const app = express();

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

// const whitelist = ["https://blogify.herokuapp.com"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
// }
// app.use(cors(corsOptions))
app.use(cors({origin: '*'}));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//   next();
// });
//DB
dbConnect();

// app.get("/", (req, res) => {
//   res.json({ msg: "API for blog Application..." });
// });

//Middleware
app.use(express.json());
//cors
// const corsOpts = {
//   origin: '*',

//   methods: [
//     'GET',
//     'POST',
//   ],

//   allowedHeaders: [
//     'Content-Type',
//   ],
// };

// app.use(cors(corsOpts));

//Heroku
app.use(express.static("frontend/build"))
  const path = require("path");
  app.get("*",(req, res)=>{
    console.log(path.resolve(__dirname, "frontend", "build", "index.html"))
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  })

//Users route
app.use("/api/users", userRoutes);
//Post route
app.use("/api/posts", postRoute);
//comment routes
app.use("/api/comments", commentRoutes);
//category route
app.use("/api/category", categoryRoute);
//err handler
app.use(notFound);
app.use(errorHandler);

// if(process.env.NODE_ENV == "production") {  
  
// }



//Heroku
// __dirname = path.resolve();

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//     app.get("/", (req, res) => {
//     res.json({ msg: "API for blog Application..." });
//   });
// }


// if(process.env.NODE_ENV == 'production') {
//   app.use(express.static("frontend/build"))
  
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   })
// }