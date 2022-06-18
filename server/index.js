const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

const app = express();
// Connect to MongoDB
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server is runnng on port ${port}`));
