const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://blogify-user:FbkPXWcwSq55hyom@blogify-mern.njenv.mongodb.net/blogifyDatabase?retryWrites=true&w=majority", {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
