const mongoose = require("mongoose")


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/BackendDB`
    );
    console.log("MongoDB connected to: ", connectionInstance.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports= connectDB;
