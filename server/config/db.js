const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conneect = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected: ${conneect.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.error(err.message + "couldnt connect".red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
