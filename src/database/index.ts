import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { mongoose };
